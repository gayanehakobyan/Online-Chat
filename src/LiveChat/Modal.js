import React, { Component } from 'react';
import './Modal.css'
import fire from '../config/fire.js'

// let date =  new Date();
// let time = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

class Modal extends Component{
    constructor(props){
        super(props)
        this.state={
            show:true,
            agree:false,
            personUid:"",
            email: "",
            personName: "",
            message: ""
        }
    }
    send=(event)=>{
        event.preventDefault();
        localStorage.setItem('sender', this.state.personUid);
        let database = fire.database();
        database.ref('conversation/' + this.state.personUid).set({
            title: "",
            messages: [
                {
                    isAgent: false,
                    message: this.state.message,
                    timestamp: Date.now()
                }
            ],
            sender: {
                name: this.state.personName,
                mail: this.state.email,
                personUid: this.state.personUid
            }
        });
        this.setState({
            message: ""
        })

    }
    inputChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    isAgree=(e)=>{
        e.preventDefault();
        this.setState({ 
            agree: true,
            personUid: this.state.personName+"-"+Date.now(),
         });
    }

    render(){
        const {agree}=this.state
        return(
            this.props.show?(
                <div className='modalStyle anim'>
                {
                    !agree?(
                        <form onSubmit={this.isAgree} action="#">
                            <label>
                                email
                                <input type="text" name='email'  onChange={this.inputChange} />
                                Name
                                <input type="text"name='personName' onChange={this.inputChange} />
                                <input type="submit" value="Start Conversation" />
                            </label> 
                            <br/>
                        </form>
                    ): (
                        <form  onSubmit={this.send} action="#">
                        <label>
                            Message
                            <input type="text" name='message' value={this.state.message} onChange={this.inputChange} />
                            <input type="submit" value="Send" />
                        </label> 
                        <br/>
                        {/* {(this.state.user.messages.text) ? (<input type="submit" value="Submit" />) : null  } */}
                    </form>
                    )
                }
                    
                    
                </div>
            ):null
            
        )
    }

}
export default Modal


