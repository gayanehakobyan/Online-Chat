import React, { Component } from 'react';
import { MyConsumer } from './Context/FullDataContex.js'
import './Home.css'
import LiveChat from './LiveChat/LiveChat.js'
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import Main from './Main/Main.js'

class Home extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div >
                <br /><br /><br /><br />
                <Header />
                <Main />
                <Footer match={this.props.match} location={this.props.location}/>
                <LiveChat />
            </div>
        )
    }
}

export default MyConsumer(Home)