import React, { Component } from 'react';
import "./Developers.css";
import { MyConsumer } from './../Context/FullDataContex.js'

class Developers extends Component {
    render() {
        const {texts}=this.props
        return (
            <div style={{margin:"10vw"}}>
                    <p style={{color:"#5C3C79",fontSize: "calc( 25px + 3vw )",fontWeight: "bold",margin:"5vw"}}>{texts.ourTeam}</p>
                <div style={{width:"180px",height:"180px",display:"inline-block",margin:"35px"}} className="shadow-lg p-1  rounded-full">
                    <a href="https://karomourad.github.io/" className="no-underline" target="_blank" rel="noopener noreferrer">
                        <img src={require("../Image/SelfImages/kar.jpg")} alt="Karo" className="greyhover rounded-full "/>
                    </a>
                    <br/><br/>
                    <h4>{texts.Karo}</h4> <h5>Junior-Frontend Developer </h5>
                </div>
                <div style={{width:"180px",height:"180px",display:"inline-block",margin:"35px", }} className="shadow-lg p-1  rounded-full ">
                    <a href="https://gayanehakobyan.github.io/" className="no-underline" target="_blank" rel="noopener noreferrer">
                        <img src={require("../Image/SelfImages/gayane.jpg")} alt="Gayane" className="greyhover rounded-full"/>
                    </a>
                    <br/><br/>
                    <h4>{texts.Gayane}</h4> <h5>Junior-Frontend Developer </h5>
                </div>
                <div style={{width:"180px",height:"180px",display:"inline-block",margin:"35px"}} className="shadow-lg p-1  rounded-full ">
                    <a href="https://karineghazaryan7.github.io/" className="no-underline" target="_blank" rel="noopener noreferrer">
                        <img src={require("../Image/SelfImages/karine.jpg")} alt="Karine" className="greyhover rounded-full"/>
                    </a>
                    <br/><br/>
                    <h4>{texts.Karine}</h4> <h5>Junior-Frontend Developer </h5>
                </div>
                <div style={{width:"180px",height:"180px",display:"inline-block",margin:"35px"}} className="shadow-lg p-1  rounded-full ">
                    <a href="https://karomourad.github.io/" className="no-underline" target="_blank" rel="noopener noreferrer">
                        <img src={require("../Image/SelfImages/maria.jpg")} alt="Maria" className="greyhover rounded-full"/>
                    </a>
                    <br/><br/>
                    <h4>{texts.Maria}</h4> <h5>Designer</h5>
                </div>
            </div>
        );
    }
}

export default MyConsumer(Developers);