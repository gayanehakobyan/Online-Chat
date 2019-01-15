import React, {Component} from 'react';
import './Footer.css'
import {Link } from "react-router-dom";


class Footer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {match}=this.props
        console.log(match)
        return(
            <section className="py-8 w-full footerSection" style={{background: '#3D4852'}}>
                <div className="container mx-auto px-8">
                    <div className="table w-full">
                        <div className="block sm:table-cell">
                            <p className="uppercase text-grey text-sm sm:mb-6 ">About</p>
                            <ul className="list-reset text-xs mb-6">
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <Link to='/' className="text-grey hover:text-grey-dark">Home</Link> 
                                </li>
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <Link to='/aboutSmartEvent' className="text-grey hover:text-grey-dark">About Smart Event</Link>
                                </li>
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <a href="#" className="text-grey hover:text-grey-dark">Empty</a>
                                </li>
                            </ul>
                        </div>
                        <div className="block sm:table-cell">
                            <p className="uppercase text-grey text-sm sm:mb-6 ">Product</p>
                            <ul className="list-reset text-xs mb-6">
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <Link to='/product' className="text-grey hover:text-grey-dark">Prodact1</Link>
                                </li>
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <Link to='/product' className="text-grey hover:text-grey-dark">Prodact2</Link>
                                </li>
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <Link to='/product' className="text-grey hover:text-grey-dark">Prodact3</Link>
                                </li>                    
                            </ul>
                        </div>
                        <div className="block sm:table-cell">
                            <p className="uppercase text-grey text-sm sm:mb-6 ">Partners</p>
                            <ul className="list-reset text-xs mb-6">
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <Link to='/partner'  className="text-grey hover:text-grey-dark">Partner 1</Link>
                                </li>
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <Link to='/partner'  className="text-grey hover:text-grey-dark">Partner 2</Link>
                                </li>
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <Link to='/partner'  className="text-grey hover:text-grey-dark">Partner 3</Link>
                                </li>                    
                            </ul>
                        </div>
                        <div className="block sm:table-cell">
                            <p className="uppercase text-grey text-sm sm:mb-6 ">Contact</p>
                            <ul className="list-reset text-xs mb-6">
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <a href="#"  className="text-grey hover:text-grey-dark">Empty</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <a href="#"  className="text-grey hover:text-grey-dark">Empty</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <a href="#"  className="text-grey hover:text-grey-dark">Empty</a>
                                </li>                    
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center text-white">
		  	    Provicy and term of use
		        </div>

            </section>
        )
    }
}

export default Footer