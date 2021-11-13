
import {createUserWithEmailAndPassword,
signOut
,onAuthStateChanged,
signInWithEmailAndPassword
} from "firebase/auth/"
import {useState} from 'react';
import {auth } from "./firebase-config"
function App() {
const [user,setUser]=useState({});
onAuthStateChanged(auth,(currentUser)=>{
  setUser(currentUser)
})


 const [SignUpEmail,setSignUpEmail]=useState("")
 const [password1,setPassword]=useState("")


 const [loginSignin,setloginSignin]=useState("")
 const [password12,setPassword2]=useState("")

const register = async ()=>{
  try {
    const user =await createUserWithEmailAndPassword(auth,SignUpEmail,password1);
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}


const login = async ()=>{
  try {
    const user =await signInWithEmailAndPassword(auth,loginSignin,password12);
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}



const logout = async ()=>{
  await signOut(auth)
}






  return (
  <>


  <h1>sinup stuff</h1>
  <input type="text" placeholder="Email....." value={SignUpEmail} onChange={
    (event)=>{
      setSignUpEmail(event.target.value)}
  } />
    <input type="text" placeholder="Enter Password" value={password1} onChange={
    (event)=>{
      setPassword(event.target.value)}
  } />
  <button type="submit" onClick={register}>Login</button>



  <h1>login stuff</h1>
  <input type="text" placeholder="Email....." value={loginSignin} onChange={
    (event)=>{
      setloginSignin(event.target.value)}
  } />
    <input type="text" placeholder="Enter Password" value={password12} onChange={
    (event)=>{
      setPassword2(event.target.value)}
  } />
  <button type="submit" onClick={login}>Login</button>




  <p> User Logined is : </p>
  <p>{user?.email}</p>
  <button type="submit" onClick={logout}>Logout </button>
  
  
  </>
  );
}

export default App;
