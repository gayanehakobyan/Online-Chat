import React, { Component } from 'react';
import {MyConsumer} from './Context/FullDataContex.js'


class Product extends Component{
    render(){
        return(
            <div>This is prodact {this.props.texts.title}</div>
        )
    }
}

export default MyConsumer(Product)