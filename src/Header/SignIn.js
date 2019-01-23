import React, { Component } from 'react';
import fire from './../config/fire.js';
import './../App.css'
import Modal from './../components/modal/modal';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      company: "",
      err:'',
      show:false,
    };
  }

  showModal = () => {
      this.setState
        ({
          ...this.state,
          show: !this.state.show
        });
    }
  
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };


  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
        this.setState({
          email: "",
          password: "",
          company: "",
          err: error.message,
          });
      });
  };

  signUp=(e)=>{
      e.preventDefault();
      fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password).then(user => {
        console.log(user.user.uid);
        fire.database().ref('users/' + user.user.uid).set({
          company: this.state.company,
          email: this.state.email,
          id: user.user.uid
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          err: error.message,
          });
      });
  }


  render() {
    const { email, password } = this.state;
    return (
      
      <div className="sign" onClick={e => e.stopPropagation()}>
         <div className="App">
            <input type="button"
            onClick={this.showModal}
            value="sign up"/>
          <Modal
            onClose = {this.showModal}
            show={this.state.show}>
            <div className="App1">
              <div className="App__Form">
                    <div className="FormTitle">
                      <a href="#" className="FormTitle__Link">Sign Up</a>       
                </div>
                <div className="FormCenter">
                  <form className="FormFields" onSubmit={this.handleSubmit}></form>
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="name"> Website Name</label>
                    <input type="text" id="name" className="FormField__Input" placeholder="enter your Website URL"
                      name="name" />
                  </div>
                  <div className="FormCenter">
                    <div className="FormField">
                      <label className="FormField__Label" htmlFor="CompanyName">Company name</label>
                      <input type="text" id="CompanyName" className="FormField__Input" placeholder="enter your Company name"
                        name="company" 
                        onChange={this.handleChange} />
                    </div>
                  </div>
                  <div className="FormCenter">
                    <div className="FormField">
                      <label className="FormField__Label" htmlFor="PhoneNumber">Phone Number (optional)</label>
                      <input type="text" id="PhoneNumber" className="FormField__Input" placeholder="enter phone number"
                        name="PhoneNumber" />
                    </div>
                  </div>
                  <div className="FormCenter">
                    <div className="FormField">
                      <label className="FormField__Label" htmlFor="email">E-mail</label>
                      <input type="text" id="Email" className="FormField__Input" placeholder="enter your email address"
                        name="email" 
                         onChange={this.handleChange} />
                    </div>
                  </div>
                  <div className="FormCenter">
                    <form className="FormFields" 
                    onSubmit={this.handleSubmit}>
                      <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">password</label>
                        <input type="password" id="Password" className="FormField__Input" placeholder="enter your password"
                          onChange={this.handleChange}
                          name="password" />
                      </div>
                    </form>
                  </div>
                  <div className="FormField">
                    <button className="FormField__Button mr-20"  onClick={this.signUp}>Sign Up </button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>  

        {/* <input type="button"
            onClick={this.showModal}
            value="sign in" />
          <Modal
          onClose = {this.showModal}
          show={this.state.show}>
          <div className="App1">
              <div className="App__Form">
                <div className="FormTitle">
                  <a href="#" className="FormTitle__Link">Sign In</a>
                </div>
                <div className="FormCenter">
                  <form className="FormFields" onSubmit={this.handleSubmit}></form>
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="e-mail"> E-mail</label>
                    <input type="text" id="name" className="FormField__Input" placeholder="enter your E-mail"
                      name="email" onChange={this.handleChange}/>
                  </div>
                  <div className="FormCenter">
                    <form className="FormFields" onSubmit={this.handleSubmit}></form>
                    <div className="FormField">
                      <label className="FormField__Label" htmlFor="password">Password</label>
                      <input type="password" id="CompanyName" className="FormField__Input" placeholder="enter your password"
                        name="password" onChange={this.handleChange} />
                    </div>
                  </div>
                </div>
                <div className="FormField">
                  <button className="FormField__Button mr-20  " onClick={this.login}>Sign In </button>
                </div>
              </div>
            </div>
          </Modal>   */}
        </div>
      </div>
    );
  }
  }
   
  
  
   export default SignIn