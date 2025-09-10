import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
function handleFormSubmit(event) {
  event.preventDefault()

  const newUser = {
    firstName,
    lastName,
    userName,
    email,
    password
  }
fetch("http://localhost:3000/users", {
method: 'POST',
headers: {
  'Content-Type' : 'application/json'
},
body:JSON.stringify(newUser)
})
.then (response => response.json())
.then(data => console.log(data))

}
  const navigate = useNavigate()

  function handleCreateAccount() {
    if ( firstName!= '' || lastName!='' ||userName != '' || email != '' || password!= '') {
     navigate("/") 
    } else {
      alert("Please fill in all credentials")
    }
  }
  return (
    <div className='signup-container'>
    <div className='signup-image-container' >
      <img src="https://i.pinimg.com/736x/82/b4/5d/82b45d49f1063fcdeb41f268730b4cc9.jpg" alt="side-image-for-signup-page" className='signup-image' />
    </div>
    <div className='signup-form-container'>
      <h1 id='create-account-h1'>Create Account</h1>
      <p id='signup-page-ptag' > Already Have account? <Link to='/login'>login</Link></p>
       <form action="" onSubmit={handleFormSubmit} >
        <input 
        type="text"
         id="signup-firstname-input" 
         placeholder='First Name'  
         value={firstName}
         onChange={(event) => setFirstName(event.target.value)}
         />

        <input
         type="text" 
        id="signup-lastname-input" 
        placeholder='Last Name'
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        />

        <input 
        type="text" 
        id="signup-username-input" 
        placeholder='Enter username' 
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
        />

        <input 
        type="email" 
        id="signup-email-input" 
        placeholder='Enter email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
         />

        <input
        type="password" 
         id="signup-password-input"  
         placeholder='Enter your password'
         value={password}
         onChange={(event) => setPassword(event.target.value)}
         />

        <input
        type="checkbox" 
        id="signup-checkbox-input" 
         />
        <p className='signup-page-remember-me-ptag' >Remember me</p>
        <button className='create-account-button' type='submit' 
        onClick={handleCreateAccount}
         >Create account</button>
       </form>
    </div>
    </div>
  )
}

export default SignUp