import React, {Component, createContext} from "react";

const MyContext = createContext();

class MyProvider extends Component{
    constructor(props){
        super(props)
        this.state={
            locale: "",
            texts:{},
            fetchData:this.fetchData,
            textsLoaded:false,
            err: ""
        }
    }
    componentDidMount(){
        const locale = 'en-GB' || window.localStorage.getItem("lang");
        this.fetchData(locale);
    }

    fetchData=(locale)=>{
        if (this.state.locale !== locale) {
            this.setState({ textsLoaded: false, locale });
            window.localStorage.setItem("lang", locale);
            fetch(`http://localhost:3001/Store/${locale}.json`)
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