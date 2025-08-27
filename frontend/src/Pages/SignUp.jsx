import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='signup-container'>
    <div className='signup-image-container' >
      <img src="https://i.pinimg.com/736x/82/b4/5d/82b45d49f1063fcdeb41f268730b4cc9.jpg" alt="side-image-for-signup-page" className='signup-image' />
    </div>
    <div className='signup-form-container'>
      <h1 id='create-account-h1'>Create Account</h1>
      <p id='signup-page-ptag' > Already Have account? <Link to='/login'>login</Link></p>
       <form action="">
        <input type="text" name="" id="signup-firstname-input" placeholder='First Name'  />
        <input type="text" name="" id="signup-lastname-input" placeholder='Last Name' />
        <input type="text" name="" id="signup-username-input" placeholder='Enter username' />
        <input type="email" name="" id="signup-email-input" placeholder='Enter email' />
        <input type="password" name="" id="signup-password-input"  placeholder='Enter your password'/>
        <input type="checkbox" name="" id="signup-checkbox-input" p />
        <p className='signup-page-remember-me-ptag' >Remember me</p>
        <button className='create-account-button' >Create account</button>
       </form>
    </div>
    </div>
  )
}

export default SignUp