import React, {Component} from 'react';
import './Footer.css'
import List from './List'
import ScrollIntoView from 'react-scroll-into-view'
import {Link } from "react-router-dom";
import {MyConsumer} from './../Context/FullDataContex.js'
import hyAM from './../languageImage/hyAM.png';
import enGB from './../languageImage/enGB.png';


const images = {
    "en-GB": enGB,
    "hy-AM": hyAM,
}

const language = {
    "en-GB": "English",
    "hy-AM": "Հայերեն",  
}
  

class Footer extends Component{
    handleClick = () => {
        const {location, history}=this.props;
        if (location.pathname !== "/" || location.hash !== "") {
            history.push("/");
            if (window.scrollY !== 0) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        } else if (window.scrollY !== 0) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
    
    
    render(){
        const {texts}=this.props
        return(
            <div id="footer" className='footerSection py-6  max-h-24 min-h-24'>
            <div className=" mx-auto px-6 table part1">

                <div className="block sm:table-cell min-w-full"  style={{width : "33%"}}>
                        <p className="uppercase text-black text-sm sm:mb-6 text-xl ">{texts.headerContact}</p>
                        <ul className="list-reset text-xs mb-6">
                            <List>
                                <p className="text-black">{texts.adress}</p>
                            </List>
                            <List>
                                <p className="text-black">{texts.phone}</p>
                            </List>
                            <List>
                                <p className="text-black">info@smartevent.com</p>
                            </List>                   
                        </ul>
                        <ul className='language inline-block'>
                            {
                                ["hy-AM", "en-GB"].map((locale, i)=>
                                <li key ={i}> <img className='languageImage' key={images[locale]}
                                    src={images[locale]} alt={language[locale]}
                                    onClick={e=>this.props.fetchData(locale)}/>&nbsp; &nbsp; &nbsp;</li>
                                )
                            }
                        </ul>
                    </div>

                    <div className="block sm:table-cell min-w-full" style={{width : "33%"}}> 
                        <p className="uppercase text-black text-sm sm:mb-6 text-xl ">{texts.about}</p> <hr/>
                        <ul className="list-reset text-black mb-6">
                            <List>
                                <Link to='/' className="no-underline text-black link" onClick={this.handleClick}>{texts.home}</Link> 
                            </List>
                            <List>
                                <a className="no-underline text-black link" onClick={this.handleClick}>{texts.aboutSmartEvent}</a>
                            </List>
                            <ScrollIntoView selector="#whySmartEvent">
                                <List>
                                    <a className="no-underline text-black link">{texts.headerWhySmartEvent}</a>
                                 </List>
                            </ScrollIntoView>
                        </ul>
                    </div>

                    <div className="block sm:table-cell min-w-full" style={{width : "33%"}}>
                        <p className="uppercase text-black text-sm sm:mb-6 text-xl ">{texts.socialSites}</p>
                        <ul className="block items-center list-reset text-xs mb-6">
                        <img className="socialIcon" src={require("../Image/fb.svg")} alt="Facebook"/>
                        <img className="socialIcon" src={require("../Image/twitter.png")} alt="Twitter"/>
                        <img className="socialIcon" src={require("../Image/Instagram.png")} alt="Instagram"/>      
        
                        </ul>
                    </div>

                </div>

                <div className="flex justify-center text-white italic">
                        Provicy and term of use  &#169; 2018-2019  <br/> SmartEvent LLC
                </div>
            </div>
        )
    }
}

export default MyConsumer(Footer)