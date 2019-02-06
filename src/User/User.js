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
            messageShow: false,
        }
    }
    
        
    showMessage=()=>{
        this.setState({
            messageShow:!this.state.messageShow
        })
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
                    let messages = fire.database().ref().child('conversation/').child(window.location.hostname).child(this.state.client).child('messages')
                    messages.on('value', snap => {
                        messages = snap.val();
                        this.setState({
                            conversation: messages
                        }, ()=>{
                            this.messageSpace.scrollTop=this.messageSpace.scrollHeight
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
        console.log(this.messageSpace)
        const clientKey = e.currentTarget.id;
        this.setState({
            conversation:null,
            client: clientKey,
        })
        const arr= {};
        const messages = this.props.chat[clientKey].messages;
        this.setState({
            conversation: messages,
            client: e.target.value,
            messageShow:true,
        },()=>{
            this.messageSpace.scrollTop=this.messageSpace.scrollHeight
        })   
    }
    timestampToTime = (t) => {
        let date = new Date(t);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if(hours < 10) {
            hours = "0"+hours;
        }
        if(minutes < 10) {
            minutes = "0"+minutes;
        }
        return hours+":"+minutes;
     }
    
    render() {
        const {clients,client, messageShow} = this.state;
        const {user}=this.props
        return (
                      
            <div className='userPart flex'>
                <div className="fields lg:w-1/4 ">
                    <p className='companyName uppercase lg:text-3xl md:text-2xl sm:text-2xl '>{user.company}</p>
                    <div style={{height:"100vh", padding:'8%'}}>
                            <img className="avatar" src={require("../Image/profPic.png")}  style={{float:"right",margin:"1vw",fontSize:"4vw",}}/>
                            
                            <div className="animationLine"></div>

                            <p className='aboutCompany lg:text-xl md:text-lg sm:text-base'><span className="spstyle lg:text-2xl sm:text-lg">Name:</span>{user.company}</p>
                           <p className='aboutCompany lg:text-xl md:text-lg sm:text-base'><span className="spstyle lg:text-2xl sm:text-lg">Phone:</span>{user.phoneNumber}</p>
                           <p className='aboutCompany lg:text-xl md:text-lg sm:text-base'><span className="spstyle lg:text-2xl sm:text-lg ">info:</span>{user.email}</p>
                    </div>
                </div>


                <div className='customers lg:w-1/4  '  >
                    <div className="lg:text-2xl md:text-xl sm:text-xl" style={{marginBottom:"8%"}}><i>Real time customers</i></div>
                    {
                            clients?(
                            <ul style={{margin:0,padding:0}}>{Object.keys(clients).map(clientKey => <button key={clients[clientKey].sender.personUid} id={clientKey} className='customer rounded list-reset text-white md:mr-4 lg:text-xl md:text-lg sm:text-base p-1 md:p-2' onClick={this.readMessage} value={clients[clientKey].sender.personUid}>{clients[clientKey].sender.name}</button>)}</ul>
                            ):null
                        }
                </div> 

               
                 {messageShow? (
                    <div className="messageConatiner w-1/2">
                        <div style={{float:'right', cursor:'pointer', marginRight:'10px'}} onClick={this.showMessage}><span style={{borderRadius:'20%'}}>Close</span></div>
                        <div className="readmessage" >
                        {
                            client && this.state.conversation?(
                            <div style={{overflow: "auto", maxHeight:'100%', maxWidth:'100%'}} ref={el => this.messageSpace = el}>
                                {Object.keys(this.state.conversation).map(el => {
                                    return this.state.conversation[el].isAgent ? (
                                        <div key={el} style={{display: "flex",justifyContent:"flex-end",alignItems:"center"}}>
                                        <p className="timestyleUser">{this.timestampToTime(this.state.conversation[el].timestamp)}</p>
                                        <span className="onemessageUser" key={el} >{this.state.conversation[el].message}</span>
                                    </div>
                                    ) : (
                                        <div key={el} style={{display: "flex",justifyContent:"flex-start",alignItems:"center"}}>
                                        <span className="onemessageUser" key={el} >{this.state.conversation[el].message}</span>
                                        <p className="timestyleUser">{this.timestampToTime(this.state.conversation[el].timestamp)}</p>
                                    </div>
                                    )
                                    
                                })}   
                            </div>
                            ):null
                        }
                        </div>

                        <div className="typemessage">
                            <textarea ref={(el)=> this.textarea=el} name='messageText' onChange={this.handleChange} value={this.state.messageText}
                            style={{padding:"1vw",float:"left",resize: "none",width:"80%",height:"100%",border:"1px solid blueviolet",fontSize:"18px"}}>
                            </textarea>
                            <input type="submit" onClick={this.send} value="Send" style={{float:"right",width:"20%",height:"100%",padding:"0",backgroundColor:"#5C3C79"}}/>
                        </div>

                    </div>
                        ): 
                        <img className='closedMessagePic' onClick={this.showMessage} src={require("../Image/chatIcon.png")}/>
                    }
                    </div>
        );
    }
}

export default  MyConsumer(User);


