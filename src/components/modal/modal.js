import React from 'react';
import "./modal.css"

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
            <div className="backgroundsignStyle">
                <div className="modalsignStyle">
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