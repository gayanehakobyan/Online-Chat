import React, {Component, createContext} from "react";

const MyContext = createContext();

class MyProvider extends Component{
    constructor(props){
        super(props)
        this.state={
            texts:{},
            textsLoaded:false,
            err: ""
        }
    }
    componentDidMount(){
        this.fetchData();
    }

    fetchData=()=>{
        fetch(`http://localhost:3001/Store/Data.json`)
        .then(res => res.json())
        .then(json => {
          this.setState({ textsLoaded: true, texts: json });
        })
        .catch(ex => {
          this.setState({ err: ex });
        });
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