import React, { Component } from 'react';
import {  Route } from "react-router-dom";
import {MyConsumer} from './Context/FullDataContex.js'
import Partners from './Main/Partners.js'
import './Home.css';
import LiveChat from './LiveChat/LiveChat.js';
import WhySmartEvent from './Main/Why-Smart-Event.js'

class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        const {match}=this.props
        return(
            <div >
              {
                  this.props.textsLoaded ?(
                      <div>
                          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <WhySmartEvent />
                        {this.props.texts.longText}
                        <Partners match={match}/>
                        <LiveChat />
                        <Route path='/partner' component={Partners} />
                    </div>
                  ) : <div id="loader"/>
              }
            </div>
        )
    }
}

export default MyConsumer(Home)