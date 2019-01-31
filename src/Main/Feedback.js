import React, { Component } from 'react';
import './Feedback.css';
import { MyConsumer } from './../Context/FullDataContex.js'

class Feedback extends Component {
    constructor(props){
        super(props)
        this.state={
            picNumber:1
        }
    }
    chengePic=()=>{
        setInterval(()=>(
            this.setState({
                picNumber: this.state.picNumber===7? 1 : this.state.picNumber+1
            })
        ), 800)
    }


    componentDidMount(){
        setTimeout(() =>this.chengePic(), 2000)
    }


    render() {
        const {picNumber}=this.state
        const {texts}=this.props
        return (
            <div  className="flex mb-4">
                <div  style={{marginTop:"20vh",width:"50vw",minWidth:"320px"}}>
                    {
                         picNumber===1 ?( <img src={require("../Image/chating/chating1.png")} alt="animation"/>):
                         picNumber===2 ?( <img src={require("../Image/chating/chating2.png")} alt="animation"/>):
                        picNumber===3 ?( <img src={require("../Image/chating/chating3.png")} alt="animation"/>):        
                        picNumber===4 ?( <img src={require("../Image/chating/chating4.png")} alt="animation"/>):
                        picNumber===5 ?( <img src={require("../Image/chating/chating5.png")} alt="animation"/>):
                        picNumber===6 ?( <img src={require("../Image/chating/chating6.png")} alt="animation"/>):
                        picNumber===7 ?( <img src={require("../Image/chating/chating7.png")} alt="animation"/>):null
                    }
                </div>
                <div className=" lg:text-5xl md:text-4xl ms:text-4xl amsversAndQuestion" style={{color:"#5C3C79",fontWeight: "1000", width:"50vw"}}>
                {texts.answersAndQuestion}</div>
            </div>
        );
    }
}

export default MyConsumer(Feedback)
