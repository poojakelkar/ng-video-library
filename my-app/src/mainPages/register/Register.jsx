import React from 'react'
import './register.scss'

const Register = () => {
  return (
    <div className='registerUser'>
      <div className="topSide">
          <div className="logoImg">
            <img  classname="logo" src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504965.png?token=exp=1648048648~hmac=d2df562d22f6426df179628fbc24a780" alt="logo"></img>
            <div className="loginButton">Sign Up</div>
          </div>
      </div>
      <div className="container">
          <h1>Watch any Movie, Series, TV Shows, Drama and Many more</h1>
          <h4>In One Place, Subscribe now!</h4>
          <div className="inputs">
            <input type='email' placeholder='Email'></input>
            <button className="registerButton">Register</button>
          </div>
      </div>
    </div>
  )
}

export default Register
