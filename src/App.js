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
import { MyConsumer } from './Context/FullDataContex.js'
import bgIcon from './Image/bgIcon.png'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          {
            this.props.dataLoaded ? (
              this.props.user ? (
                <>
                  <LogOut />
                  <Route exact path="/user:userId" 
                  component={()=> <User user={this.props.user} />} />
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
