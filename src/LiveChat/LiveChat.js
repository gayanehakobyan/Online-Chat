import React, {Component} from 'react';
import './LiveChat.css';
import Modal from './Modal.js';
import fire from '../config/fire.js';

class LiveChat extends Component{
    constructor(props){
        super(props)
        this.database = fire.database()
        this.state={
            opened:false
        }
    }
    closeChat=()=>{
        this.setState({
            opened:!this.state.opened
        })
        let id=window.localStorage.getItem('sender')
        let deleteConversation = this.database.ref('conversation/' +window.location.hostname+'/'+ id);
        deleteConversation.remove();
        window.localStorage.removeItem('sender');
    }

    openChat=()=>{
        this.setState({
            opened:!this.state.opened
        })
    }
    render(){
        const {opened}=this.state
        return(
            <div className="z-20">
                {
                    opened? (
                        <div className='modal sm:50'> 
                            <Modal show={opened} closeModal={this.openChat} />
                            <div className="liveChatOpen" onClick={this.closeChat}></div>
                        </div>

                    ): <div className="liveChat" onClick={this.openChat}></div>
                }
                
            </div> 
        )
    }
}

export default LiveChat