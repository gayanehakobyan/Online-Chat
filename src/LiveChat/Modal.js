import React, { Component } from 'react';
import './Modal.css'
import fire from '../config/fire.js';
import { MyConsumer } from './../Context/FullDataContex.js'



class Modal extends Component {
    constructor(props) {
        super(props)
        this.database = fire.database()
        this.databaseConversation = fire.database().ref().child('conversation')
        this.state = {
            show: true,
            agree: false,
            personUid: "",
            email: "",
            personName: "",
            message: "",
            chat: null,
            conversation: null,
            start: false,

        }

    }
    updatetMessage = (event) => {
        const {  message } = this.state
        event.preventDefault();
        let personUid=window.localStorage.getItem('sender')
        let database = fire.database();
        let newPostRef = database.ref('conversation/' + window.location.hostname + "/" + personUid).child('messages').push();
        newPostRef.set({
            isAgent: false,
            message: message,
            timestamp: Date.now()
        },error=>{
            if (!error) {
                this.showMessageAgain()
            }
        });
        this.setState({
            message: '',
        })
    }

    showMessageAgain=()=>{
    
        let personUid=window.localStorage.getItem('sender')
        if(personUid){
             let messages = fire.database().ref().child('conversation/').child(window.location.hostname).child(personUid).child('messages')
             messages.on('value', snap => {
                messages = snap.val();
                console.log(messages)
                if(messages){
                    this.setState({
                        conversation: messages,
                        start:true,
                    }, ()=>{
                        this.messageSpace.scrollTop=this.messageSpace.scrollHeight
                    })
                    // if(this.state.messageShow){
                    //     console.log(this.messageSpace.scrollTop, this.messageSpace.scrollHeight)
                    //     this.messageSpace.scrollTop=this.messageSpace.scrollHeight
                    // }
                }
            })
        }
        
    }


    send = (event) => {
        event.preventDefault();
        localStorage.setItem('sender', this.state.personUid);
        let database = fire.database();
        database.ref('conversation/' + window.location.hostname + "/" + this.state.personUid).set({
            title: "",
            messages: [
                {
                    isAgent: false,
                    message: this.state.message,
                    timestamp: Date.now()
                }
            ],
            sender: {
                name: this.state.personName,
                mail: this.state.email,
                personUid: this.state.personUid
            }
        }, error => {
            if (!error) {
                this.showMessageAgain()
            }
        });
        this.setState({
            message: "",
            start: true,
        })
        setTimeout(()=>{
            let id=window.localStorage.getItem('sender')
            let deleteConversation = this.database.ref('conversation/' +window.location.hostname+'/'+ id);
            deleteConversation.remove();
            window.localStorage.removeItem('sender');
        },60*60000)
    }

    inputChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    isAgree = (e) => {
        e.preventDefault();
        this.setState({
            agree: true,
            personUid: this.state.personName + "-" + Date.now(),
        });
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
        if(!this.state.start){
            this.showMessageAgain()
        }
        let localStorageSender = localStorage.getItem('sender');
        let chatInstance = null
        if (this.props.chat && localStorage) {
            localStorageSender = localStorage.getItem('sender');
            chatInstance = this.props.chat[localStorageSender]
        }       
        const { agree, chat } = this.state
        return (
            <div className="all">
                {
                    !localStorageSender ? (
                        this.props.show ? (
                            <div className='modalStyle anim'>
                                {
                                !agree ? (
                                    <form onSubmit={this.isAgree} action="#">
                                        <label>
                                            Email<br/>
                                        <input type="text" name='email' onChange={this.inputChange}  style={{marginBottom:"2vh"}}/><br/>
                                            Name<br/>
                                        <input type="text" name='personName' onChange={this.inputChange} style={{marginBottom:"2vh"}}/><br/>
                                            Start Conversation?<br/>
                                        <input type="submit"  value="Yes" />
                                        </label>
                                        <br />
                                    </form>
                                    ) : (
                                        <form onSubmit={this.send} action="#">
                                            <label>
                                                Message
                                    <input type="text" name='message' value={this.state.message} onChange={this.inputChange} />
                                                <input type="submit" value="Send" />
                                            </label>
                                            <br />
                                        </form>
                                    )
                                }
                            </div>
                        ) : null
                    ) : (
                        <div className="chitingSection">
                            <div className="firstPart">
                                {
                                    this.state.conversation ? (
                                        <div style={{overflow: "auto", maxHeight:'100%', maxWidth:'100%'}} ref={el => this.messageSpace = el}>
                                            {Object.keys(this.state.conversation).map(el => {
                                                return this.state.conversation[el].isAgent ? (
                                                    <div key={el} style={{display: "flex",justifyContent:"flex-end",alignItems:"center"}}>
                                                    <p className="timestyle">{this.timestampToTime(this.state.conversation[el].timestamp)}</p>
                                                    <span className="onemessage" key={el} >{this.state.conversation[el].message}</span>
                                                </div>
                                                ) : (
                                                    <div key={el} style={{display: "flex",justifyContent:"flex-start",alignItems:"center"}}>
                                                    <span className="onemessage" key={el} >{this.state.conversation[el].message}</span>
                                                    <p className="timestyle">{this.timestampToTime(this.state.conversation[el].timestamp)}</p>
                                                </div>
                                                )
                                             
                                            })}                                                
                                        </div>
                                    ) : <div>Loading...</div>
                                }
                            </div>

                            <div className="secondPart">
                                <textarea style={{ padding: "0.5vw", float: "left", resize: "none", width: "80%", height: "100%", border: "1px solid lightblue", fontSize: "18px" }} name='message' value={this.state.message} onChange={this.inputChange} >
                                </textarea>
                                <input type="submit" onClick={this.updatetMessage} value="Send" style={{ float: "right",color:"white", width: "20%", height: "100%", padding: "0", backgroundColor: "#5C3C79" }} />
                            </div>
                        </div>
                        )
                }

            </div>
        )
    }

}
export default MyConsumer(Modal)



