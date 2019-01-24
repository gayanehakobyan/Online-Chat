import React, { Component } from 'react';
import "./Developers.css"
class Developers extends Component {
    render() {
        return (
            <div>
                <div style={{width:"180px",height:"180px",display:"inline-block",margin:"35px"}} className="shadow-lg p-1  rounded-full">
                    <a href="https://karomourad.github.io/" className="no-underline" target="_blank" rel="noopener noreferrer">
                        <img src={require("../Image/SelfImages/kar.jpg")} alt="Karo" className="greyhover rounded-full "/>
                    </a>
                    <br/><br/>
                    <h4>Karo Mouradyan</h4> <h5>Junior-Frontend Developer </h5>
                </div>
                <div style={{width:"180px",height:"180px",display:"inline-block",margin:"35px", }} className="shadow-lg p-1  rounded-full ">
                    <a href="https://gayanehakobyan.github.io/" className="no-underline" target="_blank" rel="noopener noreferrer">
                        <img src={require("../Image/SelfImages/gayane.jpg")} alt="Gayane" className="greyhover rounded-full"/>
                    </a>
                    <br/><br/>
                    <h4>Gayane Hakobyan</h4> <h5>Junior-Frontend Developer </h5>
                </div>
                <div style={{width:"180px",height:"180px",display:"inline-block",margin:"35px"}} className="shadow-lg p-1  rounded-full ">
                    <a href="https://karineghazaryan7.github.io/" className="no-underline" target="_blank" rel="noopener noreferrer">
                        <img src={require("../Image/SelfImages/karine.jpg")} alt="Karine" className="greyhover rounded-full"/>
                    </a>
                    <br/><br/>
                    <h4>Karine Ghazaryan</h4> <h5>Junior-Frontend Developer </h5>
                </div>
                <div style={{width:"180px",height:"180px",display:"inline-block",margin:"35px"}} className="shadow-lg p-1  rounded-full ">
                    <a href="https://ripator.github.io/personalpage/" className="no-underline" target="_blank" rel="noopener noreferrer">
                        <img src={require("../Image/SelfImages/rip.jpg")} alt="Hripsime" className="greyhover rounded-full"/>
                    </a>
                    <br/><br/>
                    <h4>Hripsime Toroyan</h4> <h5>Junior-Frontend Developer </h5>
                </div>
                <div style={{width:"180px",height:"180px",display:"inline-block",margin:"35px"}} className="shadow-lg p-1  rounded-full ">
                    <a href="https://karomourad.github.io/" className="no-underline" target="_blank" rel="noopener noreferrer">
                        <img src={require("../Image/SelfImages/maria.jpg")} alt="Maria" className="greyhover rounded-full"/>
                    </a>
                    <br/><br/>
                    <h4>Maria Stepanyan</h4> <h5>Designer</h5>
                </div>
            </div>
        );
    }
}

export default Developers;