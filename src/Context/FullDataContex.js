import React, {Component, createContext} from "react";

const MyContext = createContext();

class MyProvider extends Component{
    constructor(props){
        super(props)
        this.state={
            locale: "",
            user: null,
            texts:{},
            fetchData:this.fetchData,
            textsLoaded:false,
            err: ""
        }
    }
    componentDidMount(){
        const locale =  window.localStorage.getItem("lang") || 'en-GB' ;
        this.fetchData(locale);
        // firebase.auth().onAuthStateChanged(function(user) {
        //     if (user) {
        //         this.setState({ user });
        //     } else {
        //         this.setState({ user: null })
        //     }
        // });
    }

    fetchData=(locale)=>{
        if (this.state.locale !== locale) {
            this.setState({ textsLoaded: false, locale });
            window.localStorage.setItem("lang", locale);
            fetch(`http://localhost:3000/Store/${locale}.json`)
            .then(res => res.json())
            .then(json => {
              this.setState({ textsLoaded: true, texts: json });
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
    console.log(props)
    return (props) => (
      <MyContext.Consumer>
        {
          value => <Component {...props} {...value}/>
        }
      </MyContext.Consumer>
    )
  }
  

  export {MyConsumer, MyProvider};