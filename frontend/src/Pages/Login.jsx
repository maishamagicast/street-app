import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleFormSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(users => {
      const user = users.find(

        u => u.userName === userName && u.password === password
      );
       if (!userName.trim() || !password.trim()) {
      alert("Please enter both username and password")
    }
      if (user) {
        navigate("/")
      }else {
        alert("Invalid username or password")
      }
    })

   
  }
  return (
    <div className='login-container'>
      
      <form action=""  onSubmit={handleFormSubmit}>
        <input
         type="text"
           placeholder='Username' 
           className='login-email-or-username-input'
           value={userName}
           onChange={(e) => setUserName(e.target.value)}
           />
        <input 
        type="text" 
        placeholder='Enter password' 
        className='login-password-input'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <p className='login-page-ptag'>first time here <Link to='/signup'>signup</Link></p>
        <button className='login-button'>Login</button>
      </form>
    </div>
  )
}

export default Login