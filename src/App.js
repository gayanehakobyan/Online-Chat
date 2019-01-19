import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './Header/Header.js'
import Home from './Home.js'
import AboutSmartEvent from './AboutSmartEvent.js'
import Product from './Header/MainElems/Product.js'
import WhySmartEvent from './Header/MainElems/WhySmartEvent.js'
import Partners from './Header/MainElems/Partners.js'
import Footer from './Footer/Footer.js'
import Contact from './Header/MainElems/Contact.js'
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
              <Route path='/contact' component={Contact} />
              <Route path='/about_smart_event' component={AboutSmartEvent} />
              <Route path='/why_smart_event' component={WhySmartEvent} />
              <Route path='/product' component={Product} />
              <Route path='/partners' component={Partners} />
              <Footer />
            </div>
          </Router>
        </div>
      </MyProvider>
    );
  }
}

export default App;
