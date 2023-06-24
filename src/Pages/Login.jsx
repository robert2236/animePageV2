import React, { useState } from 'react'
import '../../src/App.css';
import { Navbar } from '../Components/Navbar';
import bglogin from '../img/bglogin.jpg';




export  function Login() {

    const [isLoginFormActive, setLoginFormActive] = useState(true);

    const toggleForm = () => {
      setLoginFormActive(!isLoginFormActive);
    };


  return (
    <body style={{ width: '100%', height: '100vh', backgroundImage: `url(${bglogin})` }}>
        
   
    <div className="container">
        <Navbar/>
        <div className={`login-wrap ${isLoginFormActive ? 'active' : ''}`}>
          <div className="title">
            <h1>Login</h1>
          </div>

          <form action="#">
            <div className="input-area">
              <input type="email" id="email" autoComplete="off" required />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-area">
              <input type="password" id="password" required />
              <label htmlFor="password">Password</label>
            </div>

            <div className="forgot-pass">
              <a href="#">Forgot password?</a>
            </div>

            <div className="button-area ">
              <button type="submit" className="login-btn button1">Login</button>
            </div>
          </form>

          <div className="form-toggle-area">
            <p>
              Not a member? <span id="toggle-signup" onClick={toggleForm}>Signup now</span>
            </p>
          </div>
        </div>

        <div className={`signup-wrap ${isLoginFormActive ? '' : 'active'}`}>
          <div className="title">
            <h1>Signup</h1>
          </div>

          <form action="#">
            <div className="input-area">
              <input type="text" id="name" autoComplete="off" required />
              <label htmlFor="name">Name</label>
            </div>

            <div className="input-area">
              <input type="email" id="email" autoComplete="off" required />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-area">
              <input type="password" id="password" required />
              <label htmlFor="password">Password</label>
            </div>

            <div className="button-area ">
              <button type="submit" className="signup-btn button1">Signup</button>
            </div>
          </form>

          <div className="form-toggle-area">
            <p>
              Have an account? <span id="toggle-login" onClick={toggleForm}>Login now</span>
            </p>
          </div>
        </div>
      </div>
      </body>
  )
}
