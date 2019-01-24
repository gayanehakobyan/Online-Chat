import React, { Component } from 'react';
import AboutSmartEvent from './AboutSmartEvent.js'
import WhySmartEvent from './WhySmartEvent.js'
import Feedback from './Feedback.js'
import Developers from './Developers.js'

class Main extends Component {
    render() {
        return (
            <div>
                <AboutSmartEvent />
                <WhySmartEvent />
                <Feedback/>
                <Developers/>
            </div>
        );
    }
}

export default Main;