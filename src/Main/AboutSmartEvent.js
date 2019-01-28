import React, { Component } from "react";
import './AboutSmartEvent.css'
import Modal from '../components/modal/modal.js'
import SignUpForm from '../components/signUp/signUpForm'
class AboutSmartEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }
  handlClick = () => {
    this.setState({
      show:!this.state.show,
    })
  }
  render() {
    return (
      <div className="App">
        <div className="leftPart">
          <div className="textPart">
          <h3>We are a young team , building live chat,
             wich is the fastest way to engage your customers. 
             Talk with your customers in real-time.</h3>
          </div>
          <button className="buttonPart" onClick={this.handlClick}>Get Started</button>
        </div>
        <div className="rightPart">
          <div className="imagePart"></div>
        </div>
        {         
          this.state.show ? <Modal show={this.state.show} handlClick={this.handlClick}><SignUpForm/></Modal> :null
        }
      </div>
    );
  }
}
export default AboutSmartEvent;