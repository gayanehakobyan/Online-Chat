import React, { Component } from 'react';
import { MyConsumer } from './Context/FullDataContex.js'
import './Home.css'
import LiveChat from './LiveChat/LiveChat.js'
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import SignIn from './Header/SignIn.js'
import Main from './Main/Main.js'

class Home extends Component {
    render() {
        return (
            <div >
                <br /><br /><br /><br />
                <Header />
                <Main />
                <SignIn />
                <Footer />
                <LiveChat />
            </div>
        )
    }
}

export default MyConsumer(Home)