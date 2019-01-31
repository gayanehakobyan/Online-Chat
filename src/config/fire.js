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
 let chat=fire.database().ref().child('conversation')
 chat.on('value', inup=>{
  console.log(inup.val())
})



//  let chatList=chat.child('messages')
 chat.on('child_removed', snap=>{
     console.log(snap)
 })

export default fire 

