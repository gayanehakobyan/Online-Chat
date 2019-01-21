import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import Main from './Main/Main.js'
import {MyProvider} from './Context/FullDataContex.js'

class App extends Component {
  render() {
    return (
      <MyProvider>
          <Router>
            <div className="App">
              <Header />
              <Main/>
              <Footer/>
            </div>
          </Router>
      </MyProvider>
    );
  }
}

export default App;
