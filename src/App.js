import React,{Component} from 'react';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: "AIzaSyB9nDkBrq00LeyjXltaBda90DBy-UVjjK0",
  authDomain: "trial-817f5.firebaseapp.com"
})
class App extends Component {
  state={isSignedIn:false}
  uiConfig={
    signInFlow: "redirect",
    signInOptions:[firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks:{signInSuccess:()=> false}
  }
  componentDidMount=()=>{
   
    firebase.auth().onAuthStateChanged(user=>{
      this.setState({isSignedIn:!!user})
      console.log("user",user)
    })
  }
render(){
  return (
    <div className="App">

      {this.state.isSignedIn ?(
        <span>
      <div>Signed In!</div>
      <button onClick={()=>firebase.auth().sigpopupnOut()}>Sign out</button>
<h1>WELCOME {firebase.auth().currentUser.displayName}</h1>
<img alt="" src={firebase.auth().currentUser.photoURL}/>
      </span>
      ) : (
        // <div>Not Signed In!</div>
        <StyledFirebaseAuth 
        uiConfig={this.uiConfig}
        firebaseAuth={firebase.auth()}
        />
      )}
      
    </div>
  );
}
}

export default App;
