import React, { Component } from 'react';
import './App.css';
import Modal from './components/modal/modal';

class signUp extends Component {
    state =
        {
            show: false
        }
    showModal = () => {
        this.setState
            ({
                ...this.state,
                show: !this.state.show
            });
    }

    render() {
        return (
            <div className="App">
                <input type="button"
                    onClick={this.showModal}
                    value="sign up" />
                <Modal show={this.state.show}>
                    <div className="App1">
                        <div className="App__Form">
                            <div className="FormTitle">
                                <a href="#" className="FormTitle__Link">Sign Up</a>
                            </div>
                            <div className="FormTitle__Link">
                                <h5>x</h5>
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
                                            name="CompanyName" />
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
                                            name="Email" />
                                    </div>
                                </div>
                                <div className="FormCenter">
                                    <form className="FormFields" onSubmit={this.handleSubmit}>
                                        <div className="FormField">
                                            <label className="FormField__Label" htmlFor="password">password</label>
                                            <input type="password" id="Password" className="FormField__Input" placeholder="enter your password"
                                                name="Password" />
                                        </div>
                                    </form>
                                </div>
                                <div className="FormField">
                                    <button className="FormField__Button mr-20">Sign Up </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default signUp;