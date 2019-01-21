import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './Header/Header.js'
import Home from './Home.js'
import AboutSmartEvent from './Main/AboutSmartEvent.js';
import Feedback from './Main/Feedback.js';
import Contact from './Main/Contact.js';
import WhySmartEvent from './Main/Why-Smart-Event.js';
import Product from './Main/Product.js';
import Partners from './Main/Partners.js';
// import Product from './Header/MainElems/Product.js'
// import Partners from './Header/MainElems/Partners.js'
import Footer from './Footer/Footer.js'
import {MyProvider} from './Context/FullDataContex.js'

class App extends Component {
  render() {
    return (
      <MyProvider>
          <Router>
            <div className="App">
              <Header />
              <div className="container">
                <Route exact path="/" component={Home} />  
                <Route path='#contact' component={Contact} />
                <Route path='#about_smart_event' component={AboutSmartEvent} />
                <Route path='#why_smart_event' component={WhySmartEvent} />
                <Route path='#feedback' component={Feedback} />
                <Route path='#product' component={Product} />
                <Route path='#partners' component={Partners} />
              </div>
              <Footer />
            </div>
          </Router>
      </MyProvider>
    );
  }
}

export default App;
