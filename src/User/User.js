import React, { Component } from 'react';
import './User.css'
import fire from './../config/fire';
import { MyConsumer } from './../Context/FullDataContex.js'

class User extends Component {
    constructor(props){
        super(props)
        this.database = fire.database().ref().child('users')

        this.state={
            initialUser:null,
            userId:null
        }
    }

            
    componentDidMount(){
        this.setState({
            userId:this.props.user.uid
        })
    }
   

    render() {
        const {userId}=this.state ;
        const {allUsers}=this.props;
        let  userInstance = null;

        if(allUsers){
            userInstance = allUsers[`${userId}`]
        }
        return (
            <div style={{width:"100vw",height:"80vh"}}>
                <div className="fields">
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


