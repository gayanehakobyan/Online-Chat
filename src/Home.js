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
                       make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the  industry's stand
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