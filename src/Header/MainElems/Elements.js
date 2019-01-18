import React, { Component } from 'react';
import Contact from "./Contact.js";
import Partners from "./Partners.js";
import WhySmartEvent from "./WhySmartEvent.js"
import "./Elements.css";
class Elements extends Component {
    render() {
        return (
            <div className="flex h-full float-right items-center md:mr-16">
                <ul className="hidden md:visible md:flex items-center ">
                    <li className="list-reset md:mr-12 hover:bg-blue-dark text-2xl"><Partners/></li>
                    <li className="list-reset md:mr-12 hover:bg-blue-dark text-2xl"><Contact/></li>
                    <li className="list-reset md:mr-12 hover:bg-blue-dark text-2xl"><WhySmartEvent/></li>
                </ul>
                <div className="dropdown visible md:hidden inline-block relative">
                    <button className="dropbtn mx-6 px-10 py-2 text-lg border-none cursor-pointer">
                        <div className="menuIcon"/><div className="menuIcon"/><div className="menuIcon"/>
                    </button>
                    <div className="dropdown-content hidden min-w-full -mx-6 absolute z-10 shadow bg-grey-light  ">
                        <a href="#" className="black block px-2 py-2 no-underline hover:bg-blue-dark"><Contact/></a>
                        <a href="#" className="black block px-2 py-2 no-underline hover:bg-blue-dark"><Partners/></a>
                        <a href="#" className="black block px-2 py-2 no-underline hover:bg-blue-dark"><WhySmartEvent/></a>
                    </div>
                </div>
            </div>
          );
    }
}

export default Elements;