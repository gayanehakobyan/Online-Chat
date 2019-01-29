import React, {Component} from 'react';
import './LiveChat.css';
import message from './../Image/message.png';
import Modal from './Modal.js';

class LiveChat extends Component{
    constructor(props){
        super(props)
        this.state={
            opened:false
        }
    }

    openChat=()=>{
        this.setState({
            opened:!this.state.opened
        })
    }
    render(){
        const {opened}=this.state
        return(
            <div className="z-20 absolute ">
                {
                    opened? (
                        <div className='modal sm:50'> 
                            <Modal show={opened} closeModal={this.openChat} />
                            <div className="liveChatOpen" onClick={this.openChat}>X</div>
                        </div>

                    ): <img alt="chat" src={message}  className="liveChat" onClick={this.openChat}/>
                }
                
            </div> 
        )
    }
}

export default LiveChat