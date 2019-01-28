import React, {Component} from 'react';
import './Footer.css'
import List from './List'
import ScrollIntoView from 'react-scroll-into-view'
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
        return(
            <div id="footer" className='footerSection py-6  max-h-24 min-h-24'>
                <div className=" mx-auto px-6 table w-full ">
                        <div className="block sm:table-cell min-w-full" style={{width : "25%"}}> 
                            <p className="uppercase text-grey text-sm sm:mb-6 ">About</p> <hr/>
                            <ul className="list-reset text-xs mb-6">
                                <List>
                                    <Link to='/' className="no-underline text-grey hover:text-grey-dark" onClick={this.handleClick}>Home</Link> 
                                </List>
                                <List>
                                    <a className="no-underline text-grey hover:text-grey-dark" onClick={this.handleClick}>About Smart Event</a>
                                </List>
                                <ScrollIntoView selector="#whySmartEvent">
                                    <List>
                                        <a className="no-underline text-grey hover:text-grey-dark">Why SmartEvent</a>
                                     </List>
                                </ScrollIntoView>
                            </ul>
                        </div>
                        <div className="block sm:table-cell min-w-full" style={{width : "25%"}}>
                            <p className="no-underline uppercase text-grey text-sm sm:mb-6 ">Product</p>
                            <ul className="list-reset text-xs mb-6">
                                <ScrollIntoView selector="#product">
                                    <List>
                                        <a className="no-underline text-grey hover:text-grey-dark">Prodact1</a>
                                    </List>
                                </ScrollIntoView>
                                <ScrollIntoView selector="#product">
                                    <List>
                                        <a className="no-underline text-grey hover:text-grey-dark">Product2</a>
                                    </List>
                                </ScrollIntoView>
                                <ScrollIntoView selector="#product">
                                    <List>
                                        <a className="no-underline text-grey hover:text-grey-dark">Product3</a>
                                    </List> 
                                </ScrollIntoView>                 
                            </ul>
                        </div>
                        <div className="block sm:table-cell min-w-full" style={{width : "25%"}}>
                            <p className="uppercase text-grey text-sm sm:mb-6 ">Partners</p>
                            <ul className="block items-center list-reset text-xs mb-6">
                            
                            <ScrollIntoView selector="#partners">
                                <List>
                                    <a className="no-underline text-grey hover:text-grey-dark">Partner 1</a>
                                </List>
                            </ScrollIntoView>              
                            <ScrollIntoView selector="#partners">
                                <List>
                                    <a className="no-underline text-grey hover:text-grey-dark">Partner 2</a>
                                </List>
                            </ScrollIntoView>       
                            <ScrollIntoView selector="#partners">
                                <List>
                                    <a className="no-underline text-grey hover:text-grey-dark">Partner 3</a>
                                </List>    
                            </ScrollIntoView>           
                            </ul>
                        </div>

                        <div className="block sm:table-cell min-w-full" >
                            <p className="uppercase text-grey text-sm sm:mb-6 ">Contact</p>
                            <ul className="list-reset text-xs mb-6">
                                <List>
                                    <p className="text-grey">Adress : Hakob Hakobyan 3</p>
                                </List>
                                <List>
                                    <p className="text-grey">Tell : +374 99 09 09 09</p>
                                </List>
                                <List>
                                    <p className="text-grey">info@smartevent.com</p>
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
                    </div>
                <div className="flex justify-center text-white italic">
                        Provicy and term of use  &#169; 2018-2019  <br/> SmartEvent LLC
                </div>
           </div>
        )
    }
}

export default MyConsumer(Footer)