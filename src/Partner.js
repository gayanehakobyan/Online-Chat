import React, { Component } from 'react';
import {MyConsumer} from './Context/FullDataContex.js'
import Footer from  './Footer/Footer';
import Header from './Header/Header.js'

class Partner extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <Header />
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div>{this.props.texts.title} Partner</div>

                {/* <Footer /> */}
            </div>
        )
    }
}

export default MyConsumer(Partner)