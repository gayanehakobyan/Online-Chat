import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './Header/Header.js'
import Home from './Home.js'
import AboutSmartEvent from './Main/AboutSmartEvent.js'
import Product from './Main/Product.js'
import WhySmartEvent from './Main/WhySmartEvent.js'
import Partners from './Main/Partners.js'
import Contact from './Main/Contact.js'
import Feedback from './Main/Feedback.js'
import Footer from './Footer/Footer.js'
import {MyProvider} from './Context/FullDataContex.js'

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <Router>
            <div className="App">
              <Header />
              <Route exact path="/" component={Home} />    
              <Route path='#contact' component={Contact} />
              <Route path='#about_smart_event' component={AboutSmartEvent} />
              <Route path='#why_smart_event' component={WhySmartEvent} />
              <Route path='#feedback' component={Feedback} />
              <Route path='#product' component={Product} />
              <Route path='#partners' component={Partners} />
              <Footer/>
            </div>
          </Router>
        </div>
      </MyProvider>
    );
  }
}

export default App;
