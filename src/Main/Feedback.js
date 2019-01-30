import React, { Component } from 'react';

class Feedback extends Component {
    render() {
        return (
            <div>
                <div style={{marginTop:"28vh",marginBottom:"28vh",width:"50vw",minWidth:"320px",display:"inline-block"}}>
                    <img src={require("../Image/chating.png")} alt="animation"/>
                </div>
            </div>
        );
    }
}

export default Feedback;
