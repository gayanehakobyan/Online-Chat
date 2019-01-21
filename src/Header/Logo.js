import React, { Component } from 'react';
import './Logo.css'
import {withRouter} from "react-router-dom"

class Logo extends Component {
    
    handleClick = () => {
        const {location, history}=this.props;
        if (location.pathname !== "/") {
            history.push("/");
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
                <img src="https://about.canva.com/wp-content/uploads/sites/3/2016/08/Band-Logo.png" alt="logo" style={{width:"80px"}}/>
            </div>
        );
    }
}

export default withRouter(Logo);