import React, { Component } from 'react';
import {MyConsumer} from './Context/FullDataContex.js'

class Partner extends Component{
    render(){
        console.log(this.props)
        return(
            <div>This is page of partner {this.props.texts.title}</div>
        )
    }
}

export default MyConsumer(Partner)