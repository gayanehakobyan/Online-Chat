import React from 'react';
import "./modal.css"
const backgroundStyle =
{
    position: "fixed",
    top:0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 21,
    // padding:50
}
const modalStyle =
{
    backgroundColor: "rgba(0,0,0,0.5)",
    // maxWidth: 1000,
    // minHeight:300,
    margin: "0 auto",
    padding: 10,
    // position: "relative"
}
export default class Modal extends React.Component {
    constructor(props) {
        super(props); 
        this.state={
            show: this.props.show,
        } 
    }
    onClose = () => {
        this.setState({
            show:false,
        })
        this.props.handlClick();
    }

    render() {
        return (
            (!this.props.show || !this.state.show) ? null : (
            <div style={backgroundStyle}>
                <div style={modalStyle}>
                <div>
                <button className="FormTitle__Close" onClick = {this.onClose}>×</button>
                </div>
                    {this.props.children}
                </div>
            </div>
            )
        )
    }
}