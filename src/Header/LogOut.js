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
        let locale=window.localStorage.getItem('lang')
        console.log(locale)
        return(
            <div className='logOut'> 
            {
                 locale==='hy-AM'?(
                    <button className='logOutButton rounded list-reset text-white md:mr-4 lg:mr-12 text-xl p-1 md:p-2' onClick={this.logOut}> 
                        Ելք
                    </button>
                 ):(
                    <button className='logOutButton rounded list-reset text-white md:mr-4 lg:mr-12 text-xl p-1 md:p-2' onClick={this.logOut}> 
                    Log Out
                    </button>
                 )
            }

            </div>
        )
    }
  }
   export default withRouter(LogOut)