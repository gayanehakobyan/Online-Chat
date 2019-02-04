import React, { Component } from 'react';
import fire from './../config/fire.js';
import './LogOut.css'
import {withRouter} from "react-router-dom" 

class LogOut extends Component {

    logOut=()=>{
        fire.auth().signOut();
        this.props.history.push(`/`);
    }
    render(){
        return(
            <div className='logOut'> 
               {/* <button onClick={this.handlClick} className="guyn rounded list-reset text-white md:mr-4 lg:mr-12 text-xl p-1 md:p-2" >{texts.signIn}</button> */}
            <button className='logOutButton rounded list-reset text-white md:mr-4 lg:mr-12 text-xl p-1 md:p-2' onClick={this.logOut}> Log out</button>
            </div>
        )
    }
  }
   export default withRouter(LogOut)