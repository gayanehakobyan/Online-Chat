import React, {Component} from 'react';
import './LiveChat.css';
import message from './../Image/message.png'

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
            <div className="liveChat" >
                {
                    opened? (
                        <div className="modal"></div>
                    ): null

                }
                <div className="liveChat" onClick={this.openChat}> 
                    <img src={message} style={{borderRadius: '50%'}}/>
                </div> 
            </div>
        )
    }
}

export default LiveChat