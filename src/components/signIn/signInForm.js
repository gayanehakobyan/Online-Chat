import React, { Component } from 'react';
import './signIn.css';
import fire from '../../config/fire.js';
import { withRouter } from "react-router-dom";

let emailRegexp = RegExp((/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/));

class signIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            company: "",
            err: '',
            show: false,
            errors: {
                email: "",
                password: ""
            },
        };
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
        switch (name) {
            case 'email':
                emailRegexp.test(value) && value.length > 0
                    ? this.setState(state => ({ ...state, errors: { ...state.errors, email: "" } })) : this.setState(state => ({ ...state, errors: { ...state.errors, email: "*Enter a valid email address" } }))
                break;

            case 'password':
                value.length > 0 && value.length >= 6
                    ? this.setState(state => ({ ...state, errors: { ...state.errors, password: "" } })) : this.setState(state => ({ ...state, errors: { ...state.errors, password: "*6 characters required" } }))
                break;
            default: break;
        }
    };

    handlClick = () => {
        this.setState({
            show: true,
        })
    }

    login = e => {
        e.preventDefault();
        ["email", "password"].forEach(key => {
            if (!this.state[key]) {
                this.setState(state => ({
                    errors: {
                        ...state.errors,
                        [key]: `* ${key} is empty`
                    }
                }))
            }
        });

        ["email", "password"].forEach(key => {
            if (["email", "password"].every((k) => !this.state.errors[k])) {
                fire
                    .auth()
                    .signInWithEmailAndPassword(this.state.email, this.state.password)
                    .then(user => {
                        console.log(user, user.user);
                        const { history } = this.props
                        history.push(`/user/${user.user.uid}`)
                    })
                    .catch(error => {
                        console.log(error);
                        this.setState({
                            err: error.message,
                        })
                    })
            }
        })

    }

    render() {
        return (
            <div className="App1">
                <div className="App1__Form">
                    <div className="FormTitle">
                        <a href="#" className="FormTitle__Link">Sign In</a>
                    </div>
                    <div className="FormCenter">
                        <form className="FormFields" onSubmit={this.handleSubmit}></form>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="e-mail"> E-mail</label>
                            <input type="text"
                                id="name"
                                className="FormField__Input"
                                placeholder="enter your E-mail"
                                name="email"
                                onChange={this.handleChange}
                                noValidate />
                            {
                                this.state.errors.email ? (
                                    <div className="errorMessage">{this.state.errors.email} </div>
                                ) : null
                            }
                        </div>
                        <div className="FormCenter">
                            <form className="FormFields" onSubmit={this.handleSubmit}></form>
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="password">Password</label>
                                <input type="password"
                                    id="CompanyName"
                                    className="FormField__Input"
                                    placeholder="enter your password"
                                    name="password"
                                    onChange={this.handleChange}
                                    noValidate />
                                {
                                    this.state.errors.password ? (
                                        <div className="errorMessage">{this.state.errors.password} </div>
                                    ) : this.state.err ? <div className="errorMessage">{this.state.err} </div> : null
                                }
                            </div>
                        </div>
                    </div>
                    <div className="FormField">
                        <button className="FormField__Button mr-20" onClick={this.login}>Sign In </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(signIn);