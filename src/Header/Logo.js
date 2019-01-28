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
            <div className="logo" onClick={this.handleClick}>
                {
                    this.props.scrolled ? 
                        <img src={require("./logo.png")} alt="logo"/> : //poqr logo
                        <img src={require("./logo.png")} alt="logo"/> //sovorakan logo
                }
            </div>
        );
    }
}

export default withRouter(Logo);