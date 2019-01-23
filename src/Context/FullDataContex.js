import React, {Component, createContext} from "react";
import fire from './../config/fire.js';

const MyContext = createContext();

class MyProvider extends Component{
    constructor(props){
        super(props)
        this.state={
            locale: "",
            texts:{},
            user:null,
            fetchData:this.fetchData,
            dataLoaded:false,
            err: ""
        }
        this.isUserLoaded = false;
        this.isTextLoaded = false;
    }
    componentDidMount(){
        const locale =  window.localStorage.getItem("lang") || 'en-GB' ;
        this.fetchData(locale);
        this.authListener();
    }

    
    authListener() {
        fire.auth().onAuthStateChanged((user) => {
          console.log(user);
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
            fetch(`http://localhost:3003/Store/${locale}.json`)
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