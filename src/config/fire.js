import firebase from 'firebase'

const  config = {
  apiKey: "AIzaSyBjfTMtD7iJtvec0SMAFTlRxm3RXLtzQfg",
  authDomain: "online-chat-dffd9.firebaseapp.com",
  databaseURL: "https://online-chat-dffd9.firebaseio.com",
  projectId: "online-chat-dffd9",
  storageBucket: "online-chat-dffd9.appspot.com",
  messagingSenderId: "256646374216"
  };
 const fire = firebase.initializeApp(config);

 export default fire 