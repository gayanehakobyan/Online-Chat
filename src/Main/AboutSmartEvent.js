import React, { Component } from "react";
import './AboutSmartEvent.css'
import Modal from '../components/modal/modal.js'
import SignUpForm from '../components/signUp/signUpForm'
import { MyConsumer } from '../Context/FullDataContex.js'


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
    const {texts}=this.props
    return (
      <div className='aboutSmartEvent'>

        <div className="rightPart">
         
          <button className="buttonPart" onClick={this.handlClick}>{texts.signUp}</button>
        </div>

        <div className="leftPart">
        <div className = "mission"> <h1>{texts.mission}</h1> </div>
        <div className = "textPart"> 
            {texts.missionText}
        </div>
          <div className="imagePart"></div>
        </div>
        {         
          this.state.show ? <Modal show={this.state.show} handlClick={this.handlClick}><SignUpForm/></Modal> :null
        }
      </div>
    );
  }
}
export default MyConsumer(AboutSmartEvent);


