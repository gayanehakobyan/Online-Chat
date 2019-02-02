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
            <div >
            { 
            this.props.scrolled ? 
                <div className="smalllogo" onClick={this.handleClick} style={{height:"100%"}}>
                    <img src={require("./smallLogo.png")} alt="logo" className="smalllogoimg"/>
                </div> : //poqr logo
                <div className="logo " onClick={this.handleClick}  style={{height:"100%"}}>
                    <img src={require("./logo.png")} alt="logo" className="logoimg"/>
                </div>//sovorakan logo
            }
            </div>
        );
    }
}

export default withRouter(Logo);