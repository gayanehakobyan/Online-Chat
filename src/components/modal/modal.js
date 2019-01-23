import React from 'react';
const backgroundStyle =
{
    position: "fixed",
    top: 0,
    button: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    // padding:50
}
const modalStyle =
{
    backgroundColor: "#fff",
    // borderRadius:5,
    // maxWidth: 500,
    // minHeight:300,
    margin: "0 auto",
    // padding: 30,
    position: "relative"
}
export default class Modal extends React.Component {
    onClose = (e) => {
       if( this.props.onClose){
           this.props.onClose(e);
       }
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return (

            <div style={backgroundStyle}>
                <div style={modalStyle}>
                <div>
                <button className="FormTitle__Close" onClick = {(e) => {this.onClose(e)}}>×</button>
                </div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}