import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {MyConsumer} from './Context/FullDataContex.js'
import Footer from './Footer/Footer';
import Partner from './Partner.js';
import './Home.css'

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