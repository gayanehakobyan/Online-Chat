import React, { Component } from 'react';

class Feedback extends Component {
    render() {
        return (
            <div>
                <div style={{padding:"30px",height:"500px",width:"500px",display:"inline-block"}}>
                    <img src={require("../Image/chating.png")} alt="animation"/>
                </div>
                <div style={{height:"500px",width:"auto",display:"inline-block",overflow:"hidden"}}>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <textarea rows="4" cols="50" style={{width:"350px",margin:"10px",border:"1px solid black",resize: "none"}}>
                            At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.
                        </textarea>
                        <input type="submit" value="Add Feedback"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feedback;