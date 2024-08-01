import React from 'react'
import './LoginPopup.css'
const LoginPopup = ({setShowLogin }) => {
  const[currentState,setCurrentState]=useState("Login")
  
  return (
    <div className='login-popup'>
    <form  className="login-popup-container">
    
    <div className="login-popup-title">

     <h2>{currentState}</h2>
      <img  onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
    </div>
    <div className="login-popup-inputs">
      {currentState==="Login"?<></>:<input type="text"placeholder='Your name' required/>}
      <input type="text" placeholder='Your email' required />
      <input type="text" placeholder='Password' required />
      
    </div>
    <button>{currentState==="Sign Up"?"Create account":"Login"}</button>
    <div className="login-popup-condition">
      <input type="checkbox" required />
      <p>I agree  to terms of use and private policy.</p>
    </div>
    {currentState==="Login"
    ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
    :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
  
  
  }
     
      


    </form>
    </div>
  )
}
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
export default LoginPopup
