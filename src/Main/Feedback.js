import React, { Component } from 'react';
import './Feedback.css';
import { MyConsumer } from './../Context/FullDataContex.js'

class Feedback extends Component {
    render() {
        return (
            <div>
                <div className="animationchating"> 
                </div>
            </div>
        );
    }
}

export default MyConsumer(Feedback)