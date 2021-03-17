import React, { useContext } from 'react'
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FirebaseConfig';
import  {useState} from 'react'
import { UserContext } from '../../App';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  }

function Lonin() {
  

  const [logInUser,setLogInUser]=useContext(UserContext)
  console.log("logInUser",logInUser)

  const [newUser,setnewUser] =useState(false);
  // const [singoutuser,setSingoutuser]=useState()
  const [user,setUser]=useState({
    isSignIN:false,
    name: '',
    email: '',
    password: '',
    phone: '',
  
  })



  const provider = new firebase.auth.GoogleAuthProvider();
  const fbprovider = new firebase.auth.FacebookAuthProvider();

  const handlesignin=()=>{
      firebase.auth()
      .signInWithPopup(provider)
      .then(results=>{

        const {email,displayName}=results.user
        // console.log(email,displayName)
        const isSigninUser ={
          isSignIN:true,
          name:displayName,
          email:email
        }
        setUser(isSigninUser)
      })
      .catch(err=>{
        console.log(err)
        console.log(err.message)
      })
      console.log("hellow")
    
  }

  const handelSingOut=()=>{
    console.log("singout")

    firebase.auth().signOut()
    .then(results=>{
     const singoutuser={
       isSignIN:false,
       name:'',
       email:'',
       error: '',
       success:false

     }
   setUser(singoutuser)
    })
    .catch(err=>{
      console.log(err)
      console.log(err.message)
    })
  }

  const handleSubmit=(e)=>{
   
if(newUser && user.email && user.email){


  firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  .then((userCredential) => {
    // Signed in 
    
       const newUserinfo={...user};
       newUserinfo.error = '';
       newUserinfo.success =true
     setUser(newUserinfo)
     updateUserinfo(user.name)


   
    // ...
  })
  .catch((error) => {
const newUserinfo={...user}
newUserinfo.error=error.message;
newUserinfo.success=false

   setUser(newUserinfo)
    // ..
  });

}
if(!newUser && user.email && user.password){

  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then((userCredential) => {
    // Signed in
    const newUserinfo={...user};
    newUserinfo.error = '';
    newUserinfo.success =true
  setUser(newUserinfo)
  setLogInUser(newUserinfo)
  console.log(newUserinfo,"setLogInUser")
  // console.log(" sing in update user",userCredential.user)
    // ...
  })
  .catch((error) => {
    const newUserinfo={...user}
    newUserinfo.error=error.message;
    newUserinfo.success=false
    
     
  });

}

e.preventDefault()
  }

  const hendleonchane=(event)=>{
let isFormvalid=true;
    // console.log(event.target.value,event.target.name)

    if(event.target.name==='email'){
      isFormvalid= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(event.target.value)
        
    }
    if(event.target.name==='password'){
            //  const isPasswordvalid=event.target.value.length>6

            isFormvalid=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(event.target.value)

          
    }
    if(isFormvalid){
    const newUserinfo={...user};
    newUserinfo[event.target.name]=event.target.value
    setUser(newUserinfo)

    }
  }

  const updateUserinfo=name=>{
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(function() {
      console.log('username update')
    }).catch(function(error) {
      // An error happened.
    });
  }

  //facebook update//////////////////

  const handelFbdsignin=()=>{
    firebase
  .auth()
  .signInWithPopup(fbprovider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    console.log(user,accessToken)

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });
  }
  return (
    <div className="App">

{
  user.isSignIN ? <button onChange={()=>handelSingOut()}>sign out</button> :
  <button onChange={()=>handlesignin()}>sign in</button>
}
<br/>
  
  <button onClick={handelFbdsignin}>Facebook login</button>

  {
    user.isSignIN && <div>
      <p>welcome:{user.name}</p>
      <p>email:{user.email}</p>
      </div>
  }
  <p>email: {user.email}</p>
  <p>password: {user.password}</p>
           <input type="checkbox" onChange={()=>setnewUser(!newUser)} name="name" value=""/>
           <label htmlFor="newUser">user sing up</label>
  <div>
    
          <form onSubmit={handleSubmit}>
       {
          newUser && <input type="text" name="" onBlur={hendleonchane} placeholder="name" /> 
       }
       <br/>
      <input type="text" onBlur={hendleonchane} name="email" required placeholder="email"/> <br/>
            <input type="password"  required name="password" onBlur={hendleonchane}  placeholder="password"/> <br/>
            <input type="submit" setContext={setLogInUser} value={newUser ? 'sign up': 'sign in'}/>
          </form>

          <p>{user.error}</p>
          {
            user.success && <p style={{color: 'green'}}>user {newUser ? ' creat' : 'log in'} success</p>
          }

  </div>

    </div>
  );
}




export default Lonin;

