import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './Header/Header.js'
import Home from './Home.js'
import AboutSmartEvent from './AboutSmartEvent.js'
import Product from './Product.js'
import Partner from './Partner.js'
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
              <Route path='/about-smart-event' component={AboutSmartEvent} />
              <Route path='/product' component={Product} />
              <Route path='/partner' component={Partner} />
              <Footer />
            </div>
          </Router>
        </div>
      </MyProvider>
    );
  }
}

export default App;
