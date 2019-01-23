import React, { Component } from 'react';
import fire from './../config/fire.js'

class LogOut extends Component {


    logOut=()=>{
        (console.log('logout'))
        fire.auth().signOut()
    }
    render(){
        return(
            <div> This is user page
            <button onClick={this.logOut}> Log out</button>
            </div>
        )
    }
  }
   export default LogOut