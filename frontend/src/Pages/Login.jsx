import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  function handleLogin() {
    navigate("/")
  }
  return (
    <div className='login-container'>
      
      <form action="">
        <input type="text"  placeholder='email or username' className='login-email-or-username-input'/>
        <input type="text" placeholder='Enter password' className='login-passqord-input'/>
        <p className='login-page-ptag'>first time here <Link to='/signup'>signup</Link></p>
        <button className='login-button' onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default Login