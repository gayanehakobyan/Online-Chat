import React, { Component } from 'react';
import './User.css'
import fire from './../config/fire';
import { MyConsumer } from './../Context/FullDataContex.js'

class User extends Component {
    constructor(props){
        super(props);

        this.state={
            clients:null,
            client:null,
            messageText:'',
            conversation:null,
            user: null,
            messageShow:false,
            opened:false
        }
    }
    

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    componentDidMount() {
        fire.database().ref('conversation/' + this.props.user.webSiteName).on("value", snapshot => {
            this.setState({clients: snapshot.val()});
        })        
    }

    send=(event)=>{
        event.preventDefault();
        const {user} = this.props;
        const {client} = this.state;
        console.log("user",user,"client",client,"chat",this.props.chat)
        if(user) {
            let message = this.textarea.value;
            let database = fire.database();
            let newPostRef = database.ref('conversation/' + user.webSiteName + "/" + client).child('messages').push();
            newPostRef.set({
                isAgent: true,
                message: message,
                timestamp: Date.now()
            },error=>{
                if (!error) {
                    let arr = {};
                    let x = fire.database().ref().child('conversation/').child(window.location.hostname).child(this.state.client).child('messages')
                    x.on('value', snap => {
                        x = snap.val();
                        Object.keys(x).map((el, i) => arr[i] = x[el].message);
                        this.setState({
                            conversation: arr
                        })
                    })
                }
            });
            this.setState({
                messageText:''
            })
        }

    }


    readMessage=(e)=> {
        const clientKey = e.currentTarget.id;
        this.setState({
            conversation:null
        })
        const arr= {};
        const messages = this.props.chat[clientKey].messages;
        Object.keys(messages).map((el,i)=> arr[i]=messages[el].message);
        this.setState({
            conversation: arr,
            client: e.target.value,
            messageShow:true
        })
    }
    render() {
       const {clients, messageShow} = this.state;
        const {user}=this.props
       console.log(clients)
        return (
          
            <div className='userPart'>
                <div className="fields">
                    <h1 className='companyName uppercase'>{user.company}</h1>
                    <div style={{height:"100vh"}}>
                            <img className="avatar" src={require("../Image/profPic.png")}  style={{float:"right",margin:"1vw",fontSize:"4vw",}}/>
                            
                            <div className="animationLine"></div>
                        <ul>
                            <li><span>Name:</span>{user.company}</li>
                            <li><span>Phone:</span>{user.phoneNumber}</li>
                            <li><span>Contact:</span>{user.email}</li>
                        </ul>
                    </div>
                </div>
                <div className='customers'>
                        <div style={{fontSize:'30px',marginBottom:"3%"}}><i>Real time customers</i></div>
                        {
                            clients?(
                            <ul style={{margin:0,padding:0}}>{Object.keys(clients).map(clientKey => <li key={clients[clientKey].sender.personUid} id={clientKey} className='customer rounded list-reset text-white md:mr-4 lg:mr-12 text-xl p-1 md:p-2' onClick={this.readMessage} value={clients[clientKey].sender.personUid}>{clients[clientKey].sender.name}</li>)}</ul>
                            ):null
                        }
                    </div>

                {
                     messageShow?(
                        <div className="messageConatiner">
                   
                            <div className="readmessage">
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
                                <input type="submit" onClick={this.send} value="Send" style={{float:"right",width:"20%",height:"100%",padding:"0",backgroundColor:"#5C3C79"}}/>
                            </div>                        
                        </div>):<div className='closedMessage messageConatiner'>message</div>
                }
            </div>
        );
    }
}

export default  MyConsumer(User);

