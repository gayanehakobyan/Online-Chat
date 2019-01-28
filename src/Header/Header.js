import React, { Component } from 'react';
import './Header.css'
import Logo from "./Logo.js"
import Elements from "./MainElems/Elements.js"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          scrolled: false,
        }
      }
      handleScroll = (e) => {
        (window.scrollY !== 0) ? ( this.setState({scrolled: true}) ) : ( this.setState({scrolled: false} ) )
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    render() {
        let headerHeight = '13vh';
        let boxShadow = "0 0 0 0";
        let bgc =  "rgba(255,255,255, 0)";
        if(this.state.scrolled) { headerHeight = '9vh';boxShadow = "0.5px 0.1px 15px #A0A0A0";bgc = "rgba(255,255,255, 1)"}
        else { headerHeight = '13vh'; boxShadow = "0 0 0 0 "; bgc = "rgba(255,255,255, 0)";}
    
        return (
            <div className="header" style={{height: headerHeight, backgroundColor: bgc, boxShadow: boxShadow}}>
                    <Logo scrolled={this.state.scrolled}/>
                    <Elements/>
            </div>
        );
    }
}

export default Header;