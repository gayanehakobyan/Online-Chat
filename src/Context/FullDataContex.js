import React, {Component, createContext} from "react";
import fire from './../config/fire.js';

const MyContext = createContext();

class MyProvider extends Component{
    constructor(props){
        super(props)
        this.database = fire.database().ref().child('users')
        this.state={
            locale: "",
            texts:{},
            user:null,
            allUsers:null,
            chat:null,
            allMessageAdded:null,
            fetchData:this.fetchData,
            dataLoaded:false,
            err: "",
        }
        this.database.on('value', inup=>{
          this.setState({
              allUsers: inup.val(),
          })
      })


      this.allMessage=fire.database().ref().child('conversation')
      this.allMessage.on('value', inup=>{
        this.setState({
          chat: inup.val(),
        })
      })
      this.allMessageAdded=this.allMessage.child('conversation')
      this.allMessageAdded1=this.allMessage.child('messages')
      this.allMessageAdded1.on('child_added', snap=>{
        this.setState({
          chat: snap.val(),
        })
     })


        this.isUserLoaded = false;
        this.isTextLoaded = false;
    }
    componentDidMount(){
        const locale =  window.localStorage.getItem("lang") || 'en-GB' ;
        this.fetchData(locale);
        this.authListener();
    }

    // getUsers=()=>{
    //     this.database.on('value', inup=>{
    //       this.setState({
    //           allUsers: inup.val(),
    //       })
    //   })
    // }
    authListener() {
        fire.auth().onAuthStateChanged((user) => {
          this.isUserLoaded = true;
          if (user) {
            this.setState({ user, dataLoaded: this.isTextLoaded });
            localStorage.setItem('user', user.uid);
          } else {
            this.setState({ user: null, dataLoaded: this.isTextLoaded });
            localStorage.removeItem('user');
          }
        })
      }

    fetchData=(locale)=>{
        if (this.state.locale !== locale) {
          this.isTextLoaded = false;
            this.setState({ locale });
            window.localStorage.setItem("lang", locale);
            fetch(`http://localhost:3000/Store/${locale}.json`)
            .then(res => res.json())
            .then(json => {
              this.isTextLoaded = true;
              this.setState({ texts: json,  dataLoaded: this.isUserLoaded });
            })
            .catch(ex => {
              this.setState({ err: ex });
            });
        }
       
    }
    render(){
        return(
            <MyContext.Provider value={this.state}>
            {this.props.children}  
          </MyContext.Provider>
        )
    }
}
function MyConsumer(Component, props) {
    return (props) => (
      <MyContext.Consumer> 
        {
          value => <Component {...props} {...value}/>
        }
      </MyContext.Consumer>
    )
  }
  

  export {MyConsumer, MyProvider};