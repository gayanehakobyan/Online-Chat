import React, { Component } from 'react';
import ScrollIntoView from 'react-scroll-into-view'
import { NavLink } from 'react-router-dom'
import "./Elements.css";
import Modal from '../../components/modal/modal';
import SignInForm from '../../components/signIn/signInForm.js'
import { MyConsumer } from '../../Context/FullDataContex.js'

class Elements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }
    handlClick = () => {
        this.setState({
            show: !this.state.show,
        })
    }
    render() {
        const {texts}=this.props
        return (
            <>
            {
                this.props.texts?(
                    <div className="flex h-full float-right items-center md:mr-2">
                <ul className="hidden md:visible md:flex items-center no-underline ">
                    
                    <ScrollIntoView selector="#partners">
                        <NavLink to="#partners" className="no-underline">
                            <li className="list-reset p-1 md:mr-4 lg:mr-16 hover:bg-blue-dark text-2xl text-black hover:text-white">{texts.headerPartners}</li>
                        </NavLink>
                    </ScrollIntoView>
                    <ScrollIntoView selector="#footer">
                        <NavLink to="#contact" className="no-underline">
                            <li className="list-reset p-1 md:mr-4 lg:mr-16 hover:bg-blue-dark text-2xl text-black hover:text-white">{texts.headerContact}</li>
                        </NavLink>
                    </ScrollIntoView>
                    <ScrollIntoView selector="#whySmartEvent">
                        <NavLink to="#why_smart_event" className="no-underline"><li className="list-reset p-1 md:mr-4 lg:mr-16 hover:bg-blue-dark text-2xl text-black hover:text-white">{texts.headerWhySmartEvent}</li></NavLink>
                    </ScrollIntoView>
                </ul>

                <button onClick={this.handlClick} className="guyn rounded list-reset text-white md:mr-4 lg:mr-12 text-xl p-1 md:p-2" >{texts.signIn}</button>

                <div className="dropdown visible md:hidden inline-block relative">
                    <div className="dropbtn mx-3 px-10 py-1 text-lg border-none cursor-pointer">
                        <div className="menuIcon" /><div className="menuIcon" /><div className="menuIcon" />
                    </div>
                    <div className="dropdown-content hidden min-w-full -mx-6 absolute z-10 shadow bg-grey-light">
                        <ul className="p-0">
                            <ScrollIntoView selector="#partners">
                                <NavLink to="#partners">
                                    <li className="black block my-3 hover:bg-blue-dark text-lg text-black hover:text-white no-underline">{texts.headerPartners}</li>
                                </NavLink>
                            </ScrollIntoView>
                            <ScrollIntoView selector="#footer">
                                <NavLink to="#contact">
                                    <li className="black block my-3 hover:bg-blue-dark text-lg text-black hover:text-white no-underline">{texts.headerContact}</li>
                                </NavLink>
                            </ScrollIntoView>
                            <ScrollIntoView selector="#whySmartEvent">
                                <NavLink to="#why_smart_event">
                                    <li className=" block my-3 hover:bg-blue-dark text-lg text-black hover:text-white no-underline">{texts.headerWhySmartEvent}</li>
                                </NavLink>
                            </ScrollIntoView>
                        </ul>
                    </div>
                </div>   
                {
                    this.state.show ? <Modal show={this.state.show} handlClick={this.handlClick}><SignInForm /></Modal> : null
                }
              </div>

                ):null
            }
            </>
         );
    }
}

export default MyConsumer(Elements)