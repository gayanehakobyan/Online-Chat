import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './Home.js'
import AboutSmartEvent from './AboutSmartEvent.js'
import Product from './Product.js'
import Partner from './Partner.js'

import {MyProvider} from './Context/FullDataContex.js'

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <Router>
            <div className="App">
              <Route exact path="/" component={Home} />    
              <Route path='/aboutSmartEvent' component={AboutSmartEvent} />
              <Route path='/product' component={Product} />
              <Route path='/partner' component={Partner} />
            </div>
          </Router>
        </div>
      </MyProvider>
    );
  }
}

export default App;
