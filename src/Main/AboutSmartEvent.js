import React, { Component } from "react";
import './AboutSmartEvent.css'

class Home extends Component {
    
    render() {
        return (
            <div className="App">
                <div className="leftPart">
                    <div className="textPart">
                    <h3>We are a young team  , building live chat,
                         wich is the fastest way to engage your customers. 
                         Talk with your customers in real-time.</h3>
                    </div>
                    <button className="buttonPart">Get Started</button>
                </div>
                <div className="rightPart">
                    <div className="imagePart"></div>
                </div>
            </div>
        );
    }
}

export default Home;

