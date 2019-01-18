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
            <div className="z-20 absolute -mr-6 -mb-6">
                {
                    opened? (
                        <div className='modal'> 
                            <Modal show={opened} closeModal={this.openChat} />
                        </div>
                    ): null
                }
                <img src={message} style={{borderRadius: '50%'}} className="liveChat" onClick={this.openChat}/>
            </div> 
        )
    }
}

export default LiveChat