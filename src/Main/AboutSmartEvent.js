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
         
          <div className="leftPart">
            <p className="mission">{texts.mission}</p>
            <p className="textPart">{texts.missionText}</p>
          </div>
          <div>
            <button className="buttonPart" onClick={this.handlClick}>{texts.signUp}</button>
          </div>
        {         
          this.state.show ? <Modal show={this.state.show} handlClick={this.handlClick}><SignUpForm/></Modal> :null
        }
      </div>
    );
  }
}
export default MyConsumer(AboutSmartEvent);


