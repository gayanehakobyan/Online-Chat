import React, {Component} from "react";
import './WhySmartEvent.css'

class WhySmartEvent extends Component {
    constructor(props){
        super(props)
        this.state={
            mounted:false
        }
    }
    componentDidMount(){
        setTimeout(()=>(
            this.setState({
                mounted:!this.state.mounted
            })
        ),500)
    }
    render(){
        const {mounted}=this.state
        let opacityIndex=0;
        let heightIndex=0;
        if(mounted){
            opacityIndex=1; heightIndex='120px';
        }
        return (
            <div id="whySmartEvent">
            <h2 className='px-2 py-2 m-6 lg:text-5xl sm:text-3xl block'> Why SmartEvent?</h2>
            <div className='WhySmartEvent block md:flex justify-center' style={{opacity:opacityIndex,  heightIndex, transition:'opacity 4s ease-out'}}>
                <div className='w-3/5 text-grey-darker text-center px-4 py-2 m-10' style={{height: heightIndex, transition:'height 2s ease-out',display:"inline-flex"}}> <h4>24/7 costomer service!!!</h4></div>
                <div className='w-3/5 text-grey-darker text-center px-10 py-2 m-10' style={{height: heightIndex, transition:'height 2s ease-out',display:"inline-flex"}}><h4>Our Live chat is the fastest way to engage your customers!!!</h4></div>
                <div className='w-3/5 text-grey-darker text-center px-10 py-2 m-10' style={{height: heightIndex, transition:'height 2s ease-out',display:"inline-flex"}}><h4>Talk to your customers in real-time!!! </h4></div>
            </div>
        </div>
        )
    }
}


export default WhySmartEvent;