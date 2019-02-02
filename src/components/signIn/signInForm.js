import React, { Component } from 'react';
import './signIn.css';
import fire from '../../config/fire.js';
import {withRouter} from "react-router-dom";

class signIn extends React.Component {
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


    login = e => {
        e.preventDefault();
        fire
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(user => {
            console.log(user, user.user);
            const { history}=this.props
            history.push(`/user/${user.user.uid}`)
         })
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

    
    render() {
        return (
            <div className="App1">
                <div className="App__Form">
                    <div className="FormTitle">
                        <a href="#" className="FormTitle__Link">Sign In</a>
                    </div>
                    <div className="FormCenter">
                        <form className="FormFields" onSubmit={this.handleSubmit}></form>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="e-mail"> E-mail</label>
                            <input type="text" id="name" className="FormField__Input" placeholder="enter your E-mail" onChange={this.handleChange} 
                                name="email" required />
                        </div>
                        <div className="FormCenter">
                            <form className="FormFields" onSubmit={this.handleSubmit}></form>
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="password">Password</label>
                                <input type="password" id="CompanyName" onChange={this.handleChange} className="FormField__Input" placeholder="enter your password"
                                    name="password"  required/>
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