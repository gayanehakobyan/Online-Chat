import React, { Component, createContext } from "react";
import fire from './../config/fire.js';

const MyContext = createContext();

class MyProvider extends Component {
  constructor(props) {
    super(props)
    this.database = fire.database().ref().child('users')
    this.state = {
      locale: "",
      texts: {},
      user: null,
      allUsers: null,
      chat: null,
      allMessageAdded: null,
      fetchData: this.fetchData,
      dataLoaded: false,
      err: "",
    }
    this.database.on('value', inup => {
      this.setState({
        allUsers: inup.val(),
      })
    })


    this.isUserLoaded = false;
    this.isTextLoaded = false;
  }
  componentDidMount() {
    const locale = window.localStorage.getItem("lang") || 'en-GB';
    this.fetchData(locale);
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      this.isUserLoaded = true;
      if (user) {
        fire.database().ref("/users/" + user.uid).on("value", snapshot => {
          const user = snapshot.val();
          if (user) {
            this.setState({ user, dataLoaded: this.isTextLoaded });
            localStorage.setItem('user', user.uid);

            this.allMessage = fire.database().ref().child('conversation').child(user.webSiteName);
            this.allMessage.on('value', snapshot => {
              this.setState({
                chat: snapshot.val(),
              })
            })

            this.allMessage.child('messages').on("child_added", snapshot => {
              this.setState({
                chat: snapshot.val()
              });
            })

            this.allMessage.on('child_removed', snap => {
              let chat = this.state.chat
              delete chat.chatInstance
              this.setState({
                chat: this.state.chat,
              })
            })
          } 

        })
      }
      else {
        this.setState({ user: null, dataLoaded: this.isTextLoaded });
        localStorage.removeItem('user');
      }
    })
  }

  fetchData = (locale) => {
    if (this.state.locale !== locale) {
      this.isTextLoaded = false;
      this.setState({ locale });
      window.localStorage.setItem("lang", locale);
      fetch(`http://localhost:3002/Store/${locale}.json`)
        .then(res => res.json())
        .then(json => {
          this.isTextLoaded = true;
          this.setState({ texts: json, dataLoaded: this.isUserLoaded });
        })
        .catch(ex => {
          this.setState({ err: ex });
        });
    }

  }
  render() {
    return (
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
        value => <Component {...props} {...value} />
      }
    </MyContext.Consumer>
  )
}


export { MyConsumer, MyProvider };