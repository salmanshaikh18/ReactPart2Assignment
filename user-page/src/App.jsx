import { useState } from 'react'

import './App.css'

import logo from './assets/instagram.png'

function App() {
  const [login, setLogin] = useState(true)

  const loginSwitch = () => {
    setLogin(!login)
  }
  return (
    <div id='Container'>
      <div id='user'>

        <img src={logo} alt="logo" />

        <input hidden={login} type="text" placeholder='Mobile Number Or Email' />

        <input hidden={login} type="text" placeholder='Full Name' />

        <input type="email" placeholder='Phone Number, Username, Or Email' />

        <input type="password" placeholder='Password'/>

        <button>{login ? "Sign In" : "Sign Up" }</button>
      
      <div id="footer">
        {login ? "Don't have an accound?" : "have an account?"} <span onClick={loginSwitch}>{login ? "Sign Up": "Log In"}</span>
      </div>
      </div>
    </div>
  )
}

export default App
