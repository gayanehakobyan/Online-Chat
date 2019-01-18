import React, {Component} from 'react';
import './Footer.css'
import List from './List'
import {Link } from "react-router-dom";
import {MyConsumer} from './../Context/FullDataContex.js'
import hyAM from './../languageImage/hyAM.png';
import enGB from './../languageImage/enGB.png'

const images = {
    "en-GB": enGB,
    "hy-AM": hyAM,
}

const language = {
    "en-GB": "English",
    "hy-AM": "Հայերեն",  
}
  

class Footer extends Component{
    render(){
        console.log(this.props)
        return(
            <div className='footerSection'>
                <section className="py-8 w-screen max-h-64 " style={{background: '#3D4852'}}>
                    <div className="container mx-auto px-8">
                        <div className="table w-full">
                            <div className="block sm:table-cell" style={{width : "25%"}}> 
                                <p className="uppercase text-grey text-sm sm:mb-6 ">About</p> <hr/>
                                <ul className="list-reset text-xs mb-6">
                                <List>
                                        <Link to='/' className="text-grey hover:text-grey-dark">Home</Link> 
                                    </List>
                                    <List>
                                        <Link to='/aboutSmartEvent' className="text-grey hover:text-grey-dark">About Smart Event</Link>
                                    </List>
                                    <List>
                                        <a href="#" className="text-grey hover:text-grey-dark">Empty</a>
                                </List>
                                </ul>
                            </div>
                            <div className="block sm:table-cell" style={{width : "25%"}}>
                                <p className="uppercase text-grey text-sm sm:mb-6 ">Product</p>
                                <ul className="list-reset text-xs mb-6">
                                    <List>
                                        <Link to='/product' className="text-grey hover:text-grey-dark">Prodact1</Link>
                                    </List>
                                    <List>
                                        <Link to='/product' className="text-grey hover:text-grey-dark">Prodact2</Link>
                                    </List>
                                    <List>
                                        <Link to='/product' className="text-grey hover:text-grey-dark">Prodact3</Link>
                                    </List>                  
                                </ul>
                            </div>
                            <div className="block sm:table-cell" style={{width : "25%"}}>
                                <p className="uppercase text-grey text-sm sm:mb-6 ">Partners</p>
                                <ul className="block items-center list-reset text-xs mb-6">
                                    <List>
                                        <Link to='/partner'  className="text-grey hover:text-grey-dark">Partner 1</Link>
                                    </List>
                                <List>
                                        <Link to='/partner'  className="text-grey hover:text-grey-dark">Partner 2</Link>
                                </List>
                                <List>
                                        <Link to='/partner'  className="text-grey hover:text-grey-dark">Partner 3</Link>
                                </List>               
                                </ul>
                            </div>
                            <div className="block sm:table-cell" >
                                <p className="uppercase text-grey text-sm sm:mb-6 ">Contact</p>
                                <ul className="list-reset text-xs mb-6">
                                <List>
                                        <p  className="text-grey">Adress : Hakob Hakobyan 3</p>
                                    </List>
                                    <List>
                                        <p   className="text-grey">Tell : +374 99 09 09 09</p>
                                    </List>
                                    <List>
                                        <p  className="text-grey">info@smartevent.com</p>
                                    </List>                   
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center text-white italic">
                         Provicy and term of use  &#169; 2018-2019  <br/> SmartEvent LLC
                    </div>
                </section>
                <ul className='language'>
                {
                    ["hy-AM", "en-GB"].map((locale, i)=>
                       <li key ={i}> <img className='languageImage' key={images[locale]}
                        src={images[locale]} alt={language[locale]}
                         onClick={e=>this.props.fetchData(locale)}/>&nbsp; &nbsp; &nbsp;</li>
                    )
                }
            </ul>
           </div>
        )
    }
}

export default MyConsumer(Footer)