import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from "react-router-dom";
import './App.css';
import LogOut from './Header/LogOut.js'
import User from './User/User.js'
import Home from './Home.js'
import Partners from './Main/Partners.js'
import Product from './Main/Product.js'
import AboutSmartEvent from './Main/AboutSmartEvent.js'
import WhySmartEvent from './Main/WhySmartEvent.js'
import fire from './config/fire.js';
import { MyConsumer } from './Context/FullDataContex.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.database = fire.database()
    this.state = {
      show: false,
    }
  }

  onUnload=(event)=> { 
    // if(window.localStorage.getItem('sender')){
    //   let id=window.localStorage.getItem('sender')
    //   let deleteConversation = this.database.ref('conversation/' + window.location.hostname + "/" + id);
    //   deleteConversation.remove();
    //   window.localStorage.removeItem('sender');
    // }

}


// componentDidMount() {
//    window.before = this.onUnload;
// }

// componentWillUnmount() {
//   window.onclose = null;
// }

  render() {
    return (
      <Router>
        <div className="App">
          {
            this.props.dataLoaded ? (
              this.props.user ? (
                <>
                  <LogOut />
                  <Route exact path="/user/:userId" 
                  component={User} />
                </>
              ) : (
                  <div >
                    <Route exact path="/" component={Home} />    
                    <Route path='#about_smart_event' component={AboutSmartEvent} />
                    <Route path='#why_smart_event' component={WhySmartEvent} />
                    <Route path='#product' component={Product} />
                    <Route path='#partners' component={Partners} />
                   
                  </div>
                )
            ) : <div id="loader"/>
          }
          {/* <Route path='/user' component={User} /> */}
        </div>
      </Router>
    );
  }
}

export default MyConsumer(App);
