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
            chat:null,
            clients:null,
            client:null,
            messageText:'',
            conversation:null
        }
    }
    

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };


    getUsers=()=>{
        this.databaseConversation.on('value', inup=>{
            this.setState({
              chat: inup.val(),
            })
        })
    }

    componentDidMount() {
        this.setState({
            userId: this.props.user.uid 
        })
    }

    send=(event)=>{
        let {client}=this.state
        console.log(this.state.clients[2], client)
        let message = this.textarea.value;
        event.preventDefault();
        let database = fire.database();
        let newPostRef = database.ref('conversation/' + client ).child('messages').push();
        newPostRef.set({
            isAgent: true,
            message: message,
            timestamp: Date.now()
        });
        this.setState({
            messageText:''
        })
    }


    getClients=(e)=> {
        let arr= [];
        this.state.chat ? this.setState({ 
            clients: Object.keys(this.state.chat).map((el,i) => arr[i]=this.state.chat[el])
        }) : this.setState({
                clients: null
            });
    }
   
    readMessage=(e)=> {
        this.setState({
            conversation:null
        })
        let arr= {};
        console.log("e.target.value",e.target.value,this.state.chat[`${e.target.value}`])
        let x = this.state.chat[`${e.target.value}`].messages;

        Object.keys(x).map((el,i)=> arr[i]=x[el].message);
        this.setState({
            conversation: arr,
            client:e.target.value,
        })
    }
    render() {
        
        console.log(this.state.chat, 'client', this.state.clients)
        const {userId}=this.state ;
        // const {allUsers}=this.props;
         let chatInstance=null
        // let userInstance = null;

        // if(allUsers){
        //     userInstance = allUsers[`${userId}`]
        // }
        // if(this.state.chat){
        //     chatInstance=this.state.chat["Davit-1548698885024"]
        // }
        
        if(this.state.clients){ this.state.clients.map((el,i) => console.log("sdsd",el))}
        // console.log("clients",this.state.clients,"chat",this.state.chat,this.state.userId,this.props.user.email)
        // console.log("conversation",this.state.conversation)


        return (
            <div style={{width:"100vw",height:"80vh"}}>
            <button onClick={this.getUsers}>see chat</button>
            <button onClick={this.getClients}>clients</button>
                <div className="fields">
                    <ul style={{listStyle: "none",width:"100%",height:"100%",padding:"0"}}>
                        <li style={{width:"100%",height:"30vh",display:"inline-block"}}>
                            <h1 style={{float:"right",margin:"1vw",fontSize:"4vw"}}>Messaging
                            </h1>
                            <div className="animationLine"></div>
                        </li>
                    </ul>
                </div>

                <div className="messageConatiner">
                    
                    <div className="readmessage">
                        <h1>Domain {this.state.userId} </h1>
                    {
                        this.state.clients?(
                        <div >{this.state.clients.map(el => <button key={el.sender.personUid} className='customers' onClick={this.readMessage} value={el.sender.personUid}>{el.sender.name}</button>)}</div>
                        ):null
                    }
                    {
                        this.state.conversation?(
                        <div>{Object.keys(this.state.conversation).map(el => <p key={el.timestamp} >{this.state.conversation[el]}</p>)}</div>
                        ):null
                    }
                    
                    </div>
                    <div className="typemessage">
                        <textarea ref={(el)=> this.textarea=el} name='messageText' onChange={this.handleChange} value={this.state.messageText}
                        style={{padding:"1vw",float:"left",resize: "none",width:"80%",height:"100%",border:"1px solid lightblue",fontSize:"18px"}}>
                        </textarea>
                        <input type="submit" onClick={this.send} value="Send" style={{float:"right",width:"20%",height:"100%",padding:"0",backgroundColor:"#6cb2eb"}}/>
                    </div>
                        
                </div>
            </div>
        );
    }
}

export default  MyConsumer(User);

