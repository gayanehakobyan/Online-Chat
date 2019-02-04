import React, { Component } from "react";
import './WhySmartEvent.css'
import { MyConsumer } from './../Context/FullDataContex.js'

class WhySmartEvent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mounted: false
        }
    }
    componentDidMount() {
        setTimeout(() => (
            this.setState({
                mounted: !this.state.mounted
            })
        ), 500)
    }
    render() {
        const {texts}=this.props
        const { mounted } = this.state
        //let opacityIndex = 0;
        let heightIndex = 0;
        if (mounted) {
            //opacityIndex = 1; 
            heightIndex = '220px';
        }
        return (
            <div id="whySmartEvent">
                <p style={{color:"#5C3C79",fontSize: "calc( 25px + 3vw )",fontWeight: "1000",margin:"5vw"}}>
                    <span style={{fontWeight: "50"}}><i>{texts.why}</i></span> {texts.smart} <span style={{fontWeight: "50"}}><i>{texts.event}</i></span> ?
                </p>
                <div style={{ display: "inline-block", margin: "35px", }}><img src={require("../Image/WhySmartEvent/icon1.png")} alt="icon"  style={{height: heightIndex, transition:'height 2s ease-out'}}/>
                <h2>{texts.support}</h2></div>

                <div style={{ display: "inline-block", margin: "35px" }}><img src={require("../Image/WhySmartEvent/icon2.png")} alt="icon"  style={{height: heightIndex, transition:'height 2s ease-out'}}/>
                <h2>{texts.liveChat} </h2></div>

                <div style={{ display: "inline-block", margin: "35px" }}><img src={require("../Image/WhySmartEvent/icon3.png")} alt="icon"  style={{height: heightIndex, transition:'height 2s ease-out'}}/>
                <h2>{texts.MakeItPersonal}</h2></div>
            </div>
        )
    }
}


export default MyConsumer(WhySmartEvent);


