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
        console.log(this.state.mounted)
        return (
            <div className='WhySmartEvent lg:flex md:flex sm:block  justife-center'
            style={{opacity:opacityIndex,  heightIndex, transition:'opacity 4s ease-out'}}>
                <div className='w-3/5 inline-block text-grey-darker text-center  px-4 py-2 m-10 md:w-3/5  sm:w-2/5' style={{height: heightIndex, transition:'height 2s ease-out'}}> <h4>24/7 costomer service!!!</h4></div>
                <div className='w-3/5 inline-block text-grey-darker text-center  px-10 py-2 m-10 md:w-3/5 sm:w-2/5 '  style={{height: heightIndex, transition:'height 2s ease-out'}}><h4>Our Live chat is the fastest way to engage your customers!!!</h4></div>
                <div className='w-3/5 inline-block text-grey-darker text-center  px-10 py-2 m-10 md:w-3/5 sm:w-2/5'  style={{height: heightIndex, transition:'height 2s ease-out'}}><h4>Talk to your customers in real-time!!! </h4></div>
            </div>
        )
    }
}


export default WhySmartEvent;