import React, { Component } from 'react';
import './signUp.css';
import fire from '../../config/fire.js';
import { withRouter } from "react-router-dom"


let emailRegexp =  RegExp((/^\w+@[a-zA-Z_]+?\.[a-z]{2,3}$/));
let domainRegexp = RegExp(/^[a-zA-Z0-9]{1,61}[a-zA-Z]{2,}$/);

const formValid = errors => {
    let valid = false;
    Object.values(errors).forEach(val => {
        if (val.length > 0) { (valid = true) }
    });
    return valid;
}

class signUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            company: "",
            webSiteName: "",
            phoneNumber: "",
            err: "",
            show: false,
            errors: {
                email: "",
                password: "",
                company: "",
                webSiteName: "",
                phoneNumber: ""
            }
        };
    }

    handlClick = () => {
        this.setState({
            show: true,
        })
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
        switch (name) {
            case 'webSiteName':
                value.length > 0 && domainRegexp.test(value)
                ? this.setState(state => ({ errors: { ...state.errors,webSiteName: "" } })) : this.setState({ errors: { webSiteName: "*Enter the valid name of your site e.g. aca.am" } })
                break;

            case 'company':
                value.length > 0
                ? this.setState(state => ({ errors: { ...state.errors,company: "" } })) : this.setState({ errors: { company: "*Enter the valid name of your company" } })
                break;

            case 'phoneNumber':
                value.length > 0 && !isNaN(value)
                ? this.setState(state => ({ errors: { ...state.errors,phoneNumber: "" } })) : this.setState({ errors: { phoneNumber: "*Enter valid phone number e.g" } })
                break;

            case 'email':
               emailRegexp.test(value) && value.length > 0   
                ? this.setState(state => ({ errors: { ...state.errors,email: "" } })) : this.setState({ errors: { email: "*Enter a valid email address" } })                                                                                      
                break;

            case 'password':
                value.length > 0 && value.length >= 6
                ? this.setState(state => ({ errors: { ...state.errors,password: "" } })) : this.setState({ errors: { password: "*6 characters required" } })
                break;
            default: break;
        }
        // this.setState({ errors,[name]: value },()=>console.log(this.state));
        if (formValid(this.state.errors)) {
            console.log(`companyName:${this.state.company}
                         webSiteName:${this.state.webSiteName} 
                         phoneNumber:${this.state.phoneNumber}
                         password:${this.state.password}
                         email:${this.state.email}`);
        }
        else {
            console.error("Form invalid display error message")
        }
    };
    signUp = (e) => {
        debugger
        e.preventDefault();
        ["webSiteName","company","phoneNumber","email","password"].forEach(key => {
            if (!this.state[key]) { 
                this.setState(state => ({
                    errors: {
                        ...state.errors,
                        [key]: `* ${key} is empty`
                    }     
                }))
            } 
        });
        ["webSiteName"," company","phoneNumber","email","password"].forEach(key => {
            if (!this.state.errors[key]) { 
                fire
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password).then(user => {
                    fire.database().ref('users/' + user.user.uid).set({
                        company: this.state.company,
                        email: this.state.email,
                        id: user.user.uid,
                        webSiteName: this.state.webSiteName,
                        phoneNumber: this.state.phoneNumber,
                    });
                    this.props.history.push(`/user/${user.user.uid}`);
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
        console.log(this.state)
        return (
            <div className="App1">
                <div className="App__Form">
                    <div className="FormTitle">
                        <p className="FormTitle__Link">Sign Up</p>
                    </div>
                    <div className="FormCenter">
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="name"> Website Name</label>
                            <input type="text"
                                id="name"
                                className="FormField__Input"
                                placeholder="Website URL e.g. aca.com"
                                name="webSiteName"
                                pattern="[a-z]{1,15}"
                                required title="Enter a valid website name"
                                onChange={this.handleChange}
                                noValidate
                            />
                            {
                                this.state.errors.webSiteName ? (
                                    <div className="errorMessage">{this.state.errors.webSiteName} </div>
                                ) : null
                            }

                        </div>
                        <div className="FormCenter">
                            <div className="FormField error">
                                <label className="FormField__Label" htmlFor="CompanyName">Company name</label>
                                <input type="text"
                                    id="CompanyName"
                                    className="FormField__Input"
                                    placeholder="Company name"
                                    name="company"
                                    pattern="[a-z]{1,15}"
                                    required title="Enter a valid company name"
                                    onChange={this.handleChange}
                                    noValidate />
                                    {
                                this.state.errors.company ? (
                                    <div className="errorMessage">{this.state.errors.company} </div>
                                ) : null
                            }
                            </div>
                        </div>
                        <div className="FormCenter">
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="PhoneNumber">Phone Number (optional)</label>
                                <input type="text"
                                    id="PhoneNumber"
                                    className="FormField__Input"
                                    placeholder="phone number e.g. 099 57 75 88"
                                    name="phoneNumber"
                                    pattern="[0-9]{3} [0-9]{2} [0-9]{2} [0-9]{2}"
                                    required
                                    title="Add valid phone number. e.g. 099 57 75 88"
                                    onChange={this.handleChange}
                                    noValidate />
                                    {
                                this.state.errors.phoneNumber ? (
                                    <div className="errorMessage">{this.state.errors.phoneNumber} </div>
                                ) : null

                            }
                            </div>
                        </div>
                        <div className="FormCenter">
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="email">E-mail</label>
                                <input type="text"
                                    id="Email"
                                    className="FormField__Input"
                                    placeholder="email address"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
                                    name="email"
                                    title="Press valid email address"
                                    onChange={this.handleChange}
                                    noValidate />
                                    {
                                this.state.errors.email ? (
                                    <div className="errorMessage">{this.state.errors.email} </div>
                                ) : null
                            }
                            </div>
                        </div>
                        <div className="FormCenter">
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="password">password</label>
                                <input type="password"
                                    id="Password"
                                    className="FormField__Input"
                                    onChange={this.handleChange}
                                    placeholder="your password"
                                    name="password"
                                    pattern=".{6,}"
                                    title=" The password must have 6 or more characters"
                                    onChange={this.handleChange}
                                    noValidate />
                                    {
                                this.state.errors.password ? (
                                    <div className="errorMessage">{this.state.errors.password} </div>
                                ) : null
                            }
                            </div>
                        </div>
                        <div className="FormField">
                            <button type="submit" className="FormField__Button mr-20" onClick={this.signUp}                          
                            >Sign Up </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(signUp);