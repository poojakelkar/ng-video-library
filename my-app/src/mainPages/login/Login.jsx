import React from 'react'
import './login.scss'

export const Login = () => {
  return (
    <div className='loginUser'>
      <div className="topSide">
          <div className="logoImg">
            <img  classname="logo" src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504965.png?token=exp=1648048648~hmac=d2df562d22f6426df179628fbc24a780" alt="logo"></img>
            <div className="loginButton">Sign Up</div>
          </div>
      </div>
      <div className="container">
         <form>
             <h1>Sign In</h1>
             <input type='email' placeholder='Email'></input>
             <input type='password' placeholder='Password'></input>
             <button className='loginButton'>Sign In</button>
             <span>New User? <b>Sign Up</b></span>
         </form>
      </div>
    </div>
  )
}
