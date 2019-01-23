import React, { Component } from 'react';
import './App.css';
import Modal from './components/modal/modal';

class signIn extends React.Component {
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
                    value="sign in" />
                <Modal show={this.state.show}>
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
                                        name="e-mail" />
                                </div>
                                <div className="FormCenter">
                                <form className="FormFields" onSubmit={this.handleSubmit}></form>
                                    <div className="FormField">
                                        <label className="FormField__Label" htmlFor="password">Password</label>
                                        <input type="password" id="CompanyName" className="FormField__Input" placeholder="enter your password"
                                            name="password" />
                                    </div>
                                </div>
                                </div>
                                <div className="FormField">
                                    <button className="FormField__Button mr-20">Sign In </button>
                                </div>
                            </div>
                        </div>
                </Modal>
            </div>
        )
    }
}
export default signIn;