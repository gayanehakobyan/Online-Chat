import React, { Component } from 'react';
import {MyConsumer} from './Context/FullDataContex.js'
import './Home.css'
import LiveChat from './LiveChat/LiveChat.js'

class Home extends Component{
    render(){
        return(
            <div >
              {
                  this.props.textsLoaded ?(
                      <div>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        dsfsf
                        {this.props.texts.longText}
                        <LiveChat />
                    </div>
                  ) : <div id="loader"/>
              }
            </div>
        )
    }
}

export default MyConsumer(Home)