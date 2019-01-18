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
      console.log(window.scrollY)
        let headerHeight = '13vh';
        let bgColor = "rgba(0,0,0,0)";
        let boxShadow = "0 0 0 0";
        if(this.state.scrolled) { headerHeight = '9vh'; bgColor = "rgba(255,255,255,1)";boxShadow = "0.5px 0.1px 15px #A0A0A0"}
        else { headerHeight = '13vh'; bgColor = "rgba(0,0,0,0)"; boxShadow = "0 0 0 0 " }
    
        return (
            <div className="header" style={{height: headerHeight,backgroundColor: bgColor,boxShadow:boxShadow}}>
                    <Logo/>
                    <Elements/>
            </div>
        );
    }
}

export default Header;