import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Contact from "./Contact.js";
import Partners from "./Partners.js";
import WhySmartEvent from "./WhySmartEvent.js";
import Product from "./Product.js";
import "./Elements.css";
class Elements extends Component {
    render() {
        return (
            <div className="flex h-full float-right items-center md:mr-16">
                <ul className="hidden md:visible md:flex items-center ">
                    <NavLink to="/product"><li className="list-reset md:mr-12 hover:bg-blue-dark text-2xl"><Product/></li></NavLink>
                    <NavLink to="/partners"><li className="list-reset md:mr-12 hover:bg-blue-dark text-2xl"><Partners/></li></NavLink>
                    <NavLink to="/contact"><li className="list-reset md:mr-12 hover:bg-blue-dark text-2xl"><Contact/></li></NavLink>
                    <NavLink to="/why_smart_event"><li className="list-reset md:mr-12 hover:bg-blue-dark text-2xl"><WhySmartEvent/></li></NavLink>
                </ul>
                <div className="dropdown visible md:hidden inline-block relative">
                    <div className="dropbtn mx-6 px-10 py-1 text-lg border-none cursor-pointer">
                        <div className="menuIcon"/><div className="menuIcon"/><div className="menuIcon"/>
                    </div>
                    <div className="dropdown-content hidden min-w-full -mx-6 absolute z-10 shadow bg-grey-light">
                        <ul className="p-0">
                            <NavLink to="/product"><li className="black block my-3 hover:bg-blue-dark text-lg"><Product/></li></NavLink>
                            <NavLink to="/partners"><li className="black block my-3 hover:bg-blue-dark text-lg"><Partners/></li></NavLink>
                            <NavLink to="/contact"><li className="black block my-3 hover:bg-blue-dark text-lg"><Contact/></li></NavLink>
                            <NavLink to="/why_smart_event"><li className=" block my-3 hover:bg-blue-dark text-lg"><WhySmartEvent/></li></NavLink>
                        </ul>
                    </div>
                </div>
            </div>
          );
    }
}

export default Elements;