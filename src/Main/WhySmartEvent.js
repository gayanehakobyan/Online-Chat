import React, { Component } from "react";
import './WhySmartEvent.css'

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
        const { mounted } = this.state
        let opacityIndex = 0;
        let heightIndex = 0;
        if (mounted) {
            opacityIndex = 1; heightIndex = '220px';
        }
        return (
            <div id="whySmartEvent">
                <h2 className='px-2 py-2 m-6 lg:text-5xl sm:text-3xl block'>
                    Why smart event?
                </h2>
                <div style={{ display: "inline-block", margin: "35px", }}><img src={require("../Image/WhySmartEvent/icon1.png")} alt="icon"  style={{height: heightIndex, transition:'height 2s ease-out'}}/></div>
                <div style={{ display: "inline-block", margin: "35px" }}><img src={require("../Image/WhySmartEvent/icon2.png")} alt="icon"  style={{height: heightIndex, transition:'height 2s ease-out'}}/></div>
                <div style={{ display: "inline-block", margin: "35px" }}><img src={require("../Image/WhySmartEvent/icon3.png")} alt="icon"  style={{height: heightIndex, transition:'height 2s ease-out'}}/></div>
            </div>
        )
    }
}


export default WhySmartEvent;



// import React, {Component} from "react";
// import './WhySmartEvent.css'
// import makeItPersonal from './../Image/makeItPersonal.png';
// import customerSupport from './../Image/customerSupport.png'
// import liveChat from './../Image/liveChat.png'

// class WhySmartEvent extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             mounted:false
//         }
//     }
//     componentDidMount(){
//         setTimeout(()=>(
//             this.setState({
//                 mounted:!this.state.mounted
//             })
//         ),500)
//     }
//     render(){
//         const {mounted}=this.state
//         let opacityIndex=0;
//         let heightIndex=0;
//         if(mounted){
//             opacityIndex=1; heightIndex='100px';
//         }
//         return (
//             <div id="whySmartEvent">
//             <h2 className='px-2 py-2 m-6 lg:text-5xl sm:text-3xl block'> Why SmartEvent?</h2>
//             <div className='WhySmartEvent block md:flex justify-center' style={{opacity:opacityIndex,  heightIndex, transition:'opacity 4s ease-out'}}>

//                  <img src={makeItPersonal}   style={{height: heightIndex, transition:'height 2s ease-out',display:"inline-flex"}}/>

//                 <img src={customerSupport}  style={{height: heightIndex, transition:'height 2s ease-out',display:"inline-flex"}}/>

//                 <img src={liveChat}  style={{height: heightIndex, transition:'height 2s ease-out',display:"inline-flex"}}/>

//                 {/* <div className='w-3/5 text-grey-darker text-center px-10 py-2 m-10' style={{height: heightIndex, transition:'height 2s ease-out',display:"inline-flex"}}><img src={require("../Image/WhySmartEvent/icon1.png")} alt="icon" /></div>
//                 <div className='w-3/5 text-grey-darker text-center px-10 py-2 m-10' style={{height: heightIndex, transition:'height 2s ease-out',display:"inline-flex"}}><img src={require("../Image/WhySmartEvent/icon2.png")} alt="icon" /></div> */}
//             </div>
//         </div>
//         )
//     }
// }


// export default WhySmartEvent;