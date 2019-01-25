import React, { Component } from 'react';
import './signUp.css';
import fire from '../../config/fire.js';
import {withRouter} from "react-router-dom"

class signUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        email: "",
        password: "",
        company: "",
        err: '',
        show: false,
        };
    }

    handlClick = () => {
        this.setState({
        show: true,
        })
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };


    // login = e => {
    //     e.preventDefault();
    //     fire
    //     .auth()
    //     .signInWithEmailAndPassword(this.state.email, this.state.password)
    //     .then(u => { })
    //     .catch(error => {
    //         console.log(error);
    //         this.setState({
    //         email: "",
    //         password: "",
    //         company: "",
    //         err: error.message,
    //         });
    //     });
    // };

    signUp = (e) => {
        console.log(this.props.match, this.props.history)
        e.preventDefault();
        fire
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password).then(user => {
            fire.database().ref('users/' + user.user.uid).set({
            company: this.state.company,
            email: this.state.email,
            id: user.user.uid
            });
            this.props.history.push(`/user:${user.user.uid}`);
        })
        .catch(error => {
            console.log(error);
            this.setState({
            err: error.message,
            });
        });
    }
    render() {
        return (
            <div className="App1">
                <div className="App__Form">
                    <div className="FormTitle">
                        <a href="#" className="FormTitle__Link">Sign Up</a>
                    </div>
                    <div className="FormCenter">
                        <form className="FormFields" onSubmit={this.handleSubmit}></form>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="name"> Website Name</label>
                            <input type="text" id="name" className="FormField__Input" placeholder="Website URL e.g. aca.com"
                                name="name" pattern="[a-z]{1,15}" required title="Enter a valid website name" />
                        </div>
                        <div className="FormCenter">
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="CompanyName">Company name</label>
                                <input type="text" id="CompanyName" className="FormField__Input" placeholder="Company name"
                                    name="CompanyName" pattern="[a-z]{1,15}" required title="Enter a valid company name" />
                            </div>
                        </div>
                        <div className="FormCenter">
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="PhoneNumber">Phone Number (optional)</label>
                                <input type="text" id="PhoneNumber" className="FormField__Input" placeholder="phone number e.g. 099 57 75 88"
                                    name="PhoneNumber" pattern="[0-9]{3} [0-9]{2} [0-9]{2} [0-9]{2}" required
                                    title="Add valid phone number. e.g. 099 57 75 88" />
                            </div>
                        </div>
                        <div className="FormCenter">
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="email">E-mail</label>
                                <input type="text" id="Email" className="FormField__Input" placeholder="email address" onChange={this.handleChange}
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
                                    name="email" title="Press valid email address" required />
                            </div>
                        </div>
                        <div className="FormCenter">
                            <form className="FormFields" onSubmit={this.handleSubmit}>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="password">password</label>
                                    <input type="password" id="Password" className="FormField__Input"
                                    onChange={this.handleChange}
                                     placeholder="your password"
                                        name="password" pattern=".{6,}" title=" The password must have 6 or more characters" required />
                                </div>
                            </form>
                        </div>
                        <div className="FormField">
                            <button className="FormField__Button mr-20" onClick={this.signUp}>Sign Up </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(signUp);