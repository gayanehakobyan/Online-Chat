import React, { Component } from 'react';
import fire from './../config/fire.js'
import {withRouter} from "react-router-dom" 

class LogOut extends Component {

    logOut=()=>{
        fire.auth().signOut();
        this.props.history.push(`/`);
    }
    render(){
        return(
            <div> This is user page
            <button onClick={this.logOut}> Log out</button>
            </div>
        )
    }
  }
   export default withRouter(LogOut)