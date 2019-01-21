import React, { Component } from 'react';
import Home from '../Home.js'
import AboutSmartEvent from './AboutSmartEvent.js'
import Product from './Product.js'
import WhySmartEvent from './WhySmartEvent.js'
import Partners from './Partners.js'
import Contact from './Contact.js'
import Feedback from './Feedback.js'
import Developers from './Developers.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
class Main extends Component {
    render() {
        return (
            <Router>
            <div>
                <Route exact path="/" component={Home} />    
                <Route path='#contact' component={Contact} />
                <Route path='#about_smart_event' component={AboutSmartEvent} />
                <Route path='#why_smart_event' component={WhySmartEvent} />
                <Feedback/>
                <Route path='#product' component={Product} />
                <Route path='#partners' component={Partners} />
                <Developers/>
            </div>
            </Router>
        );
    }
}

export default Main;