import React, { Component } from 'react';
import {  Route } from "react-router-dom";
import {MyConsumer} from './Context/FullDataContex.js'
import Footer from './Footer/Footer';
import Partner from './Partner.js';
import './Home.css'
import LiveChat from './LiveChat/LiveChat.js'

class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        
        const {match}=this.props
        return(
            <div >
              {
                  this.props.textsLoaded ?(
                      <div>
                        <div >Home Page</div>
                        <Partner match={match}/>
                        {/* <LiveChat /> */}
                        <Footer />
                        <Route path='/partner' component={Partner} />
                    </div>
                  ) : <div id="loader"/>
              }
            </div>
        )
    }
}

export default MyConsumer(Home)