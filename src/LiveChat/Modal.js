import React, { Component } from 'react';
import './Modal.css'
import fire from '../config/fire.js';
import { MyConsumer } from './../Context/FullDataContex.js'



class Modal extends Component {
    constructor(props) {
        super(props)
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
        const { personUid, message } = this.state
        event.preventDefault();
        let database = fire.database();
        let newPostRef = database.ref('conversation/' + window.location.hostname + "/" + this.state.personUid).child('messages').push();
        newPostRef.set({
            isAgent: false,
            message: message,
            timestamp: Date.now()
        },error=>{
            if (!error) {
                let arr = {};
                console.log(this.props.chat, this.state.personUid)
                let x = fire.database().ref().child('conversation/').child(window.location.hostname).child(this.state.personUid).child('messages')
                x.on('value', snap => {
                    x = snap.val();
                    Object.keys(x).map((el, i) => arr[i] = x[el].message);
                    this.setState({
                        conversation: arr
                    })
                })
                // console.log("x", x)
                // Object.keys(x).map((el, i) => arr[i] = x[el].message);
                // console.log(arr)
                // this.setState({
                //     conversation: arr
                // })
                // console.log(this.state.conversation)
            }
        });
        this.setState({
            message: '',
        })
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
                let arr = {};
                console.log(this.props.chat, this.state.personUid)
                let x = fire.database().ref().child('conversation/').child(window.location.hostname).child(this.state.personUid).child('messages')
                x.on('value', snap => {
                    x = snap.val();
                    Object.keys(x).map((el, i) => arr[i] = x[el].message);
                    this.setState({
                        conversation: arr
                    })
                })
                // console.log("x", x)
                // Object.keys(x).map((el, i) => arr[i] = x[el].message);
                // console.log(arr)
                // this.setState({
                //     conversation: arr
                // })
                // console.log(this.state.conversation)
            }
        });
        this.setState({
            message: "",
            start: true,
        })

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

    render() {
        console.log(this.state.conversation)
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
                                    <div style={{ height: "100%", width: "100%" }}>
                                        {
                                            this.state.conversation ? (
                                                <div>{Object.keys(this.state.conversation).map(el => <p key={el.timestamp} >{this.state.conversation[el]}</p>)}</div>
                                            ) : null
                                        }

                                    </div>
                                </div>

                                <div className="secondPart">
                                    <textarea style={{ padding: "1vw", float: "left", resize: "none", width: "80%", height: "100%", border: "1px solid lightblue", fontSize: "18px" }} name='message' value={this.state.message} onChange={this.inputChange} >
                                    </textarea>
                                    <input type="submit" onClick={this.updatetMessage} value="Send" style={{ float: "right", width: "20%", height: "100%", padding: "0", backgroundColor: "#5C3C79" }} />
                                </div>
                            </div>

                        )
                }

            </div>
        )
    }

}
export default MyConsumer(Modal)


