import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import "./Elements.css";
class Elements extends Component {
    render() {
        return (
            <div className="flex h-full float-right items-center md:mr-2">
                <ul className="hidden md:visible md:flex items-center no-underline ">
                    <NavLink to="#product" className="no-underline"><li className="list-reset p-1 md:mr-4 lg:mr-16 hover:bg-blue-dark text-2xl text-black hover:text-white">Product</li></NavLink>
                    <NavLink to="#partners" className="no-underline"><li className="list-reset p-1 md:mr-4 lg:mr-16 hover:bg-blue-dark text-2xl text-black hover:text-white">Partners</li></NavLink>
                    <NavLink to="#contact" className="no-underline"><li className="list-reset p-1 md:mr-4 lg:mr-16 hover:bg-blue-dark text-2xl text-black hover:text-white">Contact</li></NavLink>
                    <NavLink to="#why_smart_event" className="no-underline"><li className="list-reset p-1 md:mr-4 lg:mr-16 hover:bg-blue-dark text-2xl text-black hover:text-white">WhySmartEvent</li></NavLink>
                </ul>
                <NavLink to="#sign-in"><button className="rounded list-reset bg-blue-light text-white md:mr-4 lg:mr-12 hover:bg-blue-dark text-2xl p-2">Sign In</button></NavLink>
                <div className="dropdown visible md:hidden inline-block relative">
                    <div className="dropbtn mx-6 px-10 py-1 text-lg border-none cursor-pointer">
                        <div className="menuIcon"/><div className="menuIcon"/><div className="menuIcon"/>
                    </div>
                    <div className="dropdown-content hidden min-w-full -mx-6 absolute z-10 shadow bg-grey-light">
                        <ul className="p-0">
                            <NavLink to="#product"><li className="black block my-3 hover:bg-blue-dark text-lg text-black hover:text-white no-underline">Product</li></NavLink>
                            <NavLink to="#partners"><li className="black block my-3 hover:bg-blue-dark text-lg text-black hover:text-white no-underline">Partners</li></NavLink>
                            <NavLink to="#contact"><li className="black block my-3 hover:bg-blue-dark text-lg text-black hover:text-white no-underline">Contact</li></NavLink>
                            <NavLink to="#why_smart_event"><li className=" block my-3 hover:bg-blue-dark text-lg text-black hover:text-white no-underline">WhySmartEvent</li></NavLink>
                        </ul>
                    </div>
                </div>
            </div>
          );
    }
}

export default Elements;