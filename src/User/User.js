import React, { Component } from 'react';
import './User.css'
import fire from './../config/fire';
import { MyConsumer } from './../Context/FullDataContex.js'

class User extends Component {
    constructor(props){
        super(props)
        this.database = fire.database().ref().child('users')
        this.databaseConversation = fire.database().ref().child('conversation')

        this.state={
            initialUser:null,
            userId:null,
            chat:null
        }
    }

    getUsers=()=>{
        this.databaseConversation.on('value', inup=>{
          this.setState({
              chat: inup.val(),
          })
      })
    }

    componentDidMount(){
        this.setState({
            userId:this.props.user.uid
        })
    }
   

    render() {
        const {userId}=this.state ;
        const {allUsers}=this.props;
        let chatInstance=null
        let  userInstance = null;
       
        if(allUsers){
            userInstance = allUsers[`${userId}`]
        }
        if(this.state.chat){
            chatInstance=this.state.chat["aca-1548688633715"]
        }

        console.log(chatInstance)
        return (
            <div style={{width:"100vw",height:"80vh"}}>
            <button onClick={this.getUsers}>see chat</button>
                <div className="fields">
                {
                    this.state.chat?(
                        <div>{chatInstance.messages[0].message}</div>
                    ):null
                }
                    <ul style={{listStyle: "none",width:"100%",height:"100%",padding:"0"}}>
                        <li style={{width:"100%",height:"30vh",display:"inline-block"}}>
                            <h1 style={{float:"right",margin:"1vw",fontSize:"4vw"}}>Messaging
                                {/* <img src={require("./Image/whitelabel.png")} alt="messaging" style={{width:"7vw",minWidth:"3vw",height:"auto"}}/> */}
                            </h1>
                            <div className="animationLine"></div>
                        </li>
                    </ul>
                </div>

                <div className="messageConatiner">
                    
                    <div className="readmessage">
                        <h1>Domain {this.props.user.uid} </h1>
                        {/*read message here*/ }
                    </div>
                    <div className="typemessage">
                        <textarea style={{padding:"1vw",float:"left",resize: "none",width:"80%",height:"100%",border:"1px solid lightblue",fontSize:"18px"}}>
                        </textarea>
                        <input type="submit" value="Send" style={{float:"right",width:"20%",height:"100%",padding:"0",backgroundColor:"#6cb2eb"}}/>
                    </div>
                        
                </div>
            </div>
        );
    }
}

export default  MyConsumer(User);


