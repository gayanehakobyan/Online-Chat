import React, { Component } from 'react';
import './Logo.css'
import {withRouter} from "react-router-dom"

class Logo extends Component {
    
    handleClick = () => {
        const {location, history}=this.props;
        if (location.pathname !== "/" || location.hash !== "") {
            history.push("/");
            if (window.scrollY !== 0) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        } else if (window.scrollY !== 0) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
    
    render() {          
        return (
            <>
            { 
            this.props.scrolled ? 
                <div className="logo" onClick={this.handleClick} style={{top:"1vh"}}>
                    <img src={require("./smallLogo.png")} alt="logo"/></div> : //poqr logo
                <div className="logo" onClick={this.handleClick}  style={{top:"-7vw"}}>
                    <img src={require("./logo.png")} alt="logo"/></div>//sovorakan logo
            }
            </>
        );
    }
}

export default withRouter(Logo);