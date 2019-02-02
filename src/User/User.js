import React, { Component } from 'react';
import './User.css'
import fire from './../config/fire';
import { MyConsumer } from './../Context/FullDataContex.js'

class User extends Component {
    constructor(props){
        super(props);

        this.state={
            clients:null,
            client:null,
            messageText:'',
            conversation:null,
            user: null
        }

    //  this.messageadded = fire.database().ref().child('conversation').child(this.props.user.webSiteName);
    //     this.messageadded.on('child_added', snapshot => {
    //         console.log(snapshot.val())
    //     //       this.setState({
    //     //         chat: snapshot.val(),
    //     // })
    //   })
    }
    

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    componentDidMount() {
        fire.database().ref('conversation/' + this.props.user.webSiteName).on("value", snapshot => {
            this.setState({clients: snapshot.val()});
        })
    }

    send=(event)=>{
        event.preventDefault();
        const {user} = this.props;
        let {client}=this.state
        let message = this.textarea.value;
        let database = fire.database();
        let newPostRef = database.ref('conversation/' + user.webSiteName + "/" + client).child('messages').push();
        newPostRef.set({
            isAgent: true,
            message: message,
            timestamp: Date.now()
        });
        this.setState({
            messageText:''
        })
    }


    readMessage=(e)=> {
        const clientKey = e.currentTarget.id;
        console.log(e);
        this.setState({
            conversation:null
        })
        let arr= {};
        let x = this.props.chat[clientKey].messages;
        console.log(x)

        Object.keys(x).map((el,i)=> arr[i]=x[el].message);
        this.setState({
            conversation: arr,
            client:e.target.value,
        })
    }
    render() {
       const {clients} = this.state;
        const {user}=this.props
       console.log(this.props)
        return (
          
            <div>
                <div className="fields">
                    <h1 className='companyName uppercase'>{user.company}</h1>
                    <ul style={{listStyle: "none",width:"100%",height:"100%",padding:"10px"}}>
                        <li style={{width:"100%",height:"30vh",display:"inline-block"}}>
                            <div className="avatar" style={{float:"right",margin:"1vw",fontSize:"4vw",}}>Company Picture 
                            </div>
                            <div className="animationLine"></div>
                        </li>
                    </ul>

                    <ul>
                        <li>Name:{user.company}</li>
                        <li>Phone:{user.phoneNumber}</li>
                        <li>Contact:{user.email}</li>
                    </ul>
                    <div className='customers'>
                        {
                            clients?(
                            <div >{Object.keys(clients).map(clientKey => <button key={clients[clientKey].sender.personUid} id={clientKey} className='customers' onClick={this.readMessage} value={clients[clientKey].sender.personUid}>{clients[clientKey].sender.name}</button>)} <br/></div>
                            ):null
                        }
                    </div>
                </div>

                <div className="messageConatiner">
                    
                    <div className="readmessage">
                    {
                        this.state.conversation?(
                        <div>{Object.keys(this.state.conversation).map(el => <p key={el.timestamp} >{this.state.conversation[el]}</p>)}</div>
                        ):null
                    }
                    
                    </div>
                    <div className="typemessage">
                        <textarea ref={(el)=> this.textarea=el} name='messageText' onChange={this.handleChange} value={this.state.messageText}
                        style={{padding:"1vw",float:"left",resize: "none",width:"80%",height:"100%",border:"1px solid lightblue",fontSize:"18px"}}>
                        </textarea>
                        <input type="submit" onClick={this.send} value="Send" style={{float:"right",width:"20%",height:"100%",padding:"0",backgroundColor:"#5C3C79"}}/>
                    </div>
                        
                </div>
            </div>
        );
    }
}

export default  MyConsumer(User);

