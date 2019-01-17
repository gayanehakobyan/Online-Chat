import React, { Component } from 'react';
import {MyConsumer} from './Context/FullDataContex.js'
import Footer from  './Footer/Footer';
import { Link } from "react-router-dom";


class Product extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const {match}=this.props
        return(
            <div>
                <div>{this.props.texts.title} Product</div>
                <Link to='/partner'>Go to partner</Link>
                <Footer />
            </div>
        )
    }
}

export default MyConsumer(Product)