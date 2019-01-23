import React, { Component } from 'react';
import './Modal.css'


class Modal extends Component{
    constructor(props){
        super(props)
        this.state={
            show:true,
            value: ''
        }
    }
    submit=(event)=>{
        alert("The value is "+this.state.value)
        event.preventDefault();
        this.setState({
            value:""
        })

    }
    inputChange=(event)=>{
        this.setState({
            value:event.target.value
        })
    }
    render(){
        return(
            this.props.show?(
                <div className='modalStyle'
                    style={{ opacity :  1 , transition: 'opacity 0.3s ease-out'}}>
                    <button onClick={this.props.closeModal}>X</button>
                    {this.props.children}
                    <form onSubmit={this.submit}>
                        <label>
                            Message
                            <input type="text" value={this.state.value} onChange={this.inputChange} />
                        </label> 
                        <br/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            ):null
            
        )
    }

}
export default Modal