import React, { Component } from 'react';
import {MyConsumer} from './Context/FullDataContex.js'
import Footer from  './Footer/Footer';

class Partner extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <div>{this.props.texts.title} Partner</div>
                {/* <Footer /> */}
            </div>
        )
    }
}

export default MyConsumer(Partner)