import React, { Component } from 'react';
import './Modal.css'

class Modal extends Component{
    constructor(props){
        super(props)
        this.state={
            show:true,
            conversation: {
                messages: [
                    {
                        isAgent: true,
                        text: "",
                        timestamp: Date.now()
                    }
                ],
                sender: {
                    name: "",
                    mail: ""
                }
            }
        }
    }
    submit=(event)=>{
        alert("The value is "+this.state.conversation.messages.text+" time : " + this.state.conversation.messages.date+" id :"+ this.state.conversation.messages.sender)
        event.preventDefault();
        this.setState({
            conversation: {
                messages: {
                    text: "",
                    sender: "conversationId",
                    date: time
                },
            },
        })
    }
    inputChange=(event)=>{
        this.setState({
            conversation: {
                messages: {
                    text: event.target.value,
                    sender:"conversationId",
                    date: time
                }
            }
        })
    }
    render(){
        return(
            this.props.show?(
                <div className='modalStyle anim'>
                    <button onClick={this.props.closeModal}>X</button>
                    <form onSubmit={this.submit}>
                        <label>
                            Message
                            <input type="text" value={this.state.conversation.messages.text}  onChange={this.inputChange} />
                        </label> 
                        <br/>
                        {(this.state.conversation.messages.text) ? (<input type="submit" value="Submit" />) : null  }
                    </form>
                </div>
            ):null
            
        )
    }

}
export default Modal