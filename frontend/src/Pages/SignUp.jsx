import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div>
      <img src="" alt="" />
      <h1>Create Account</h1>
      <p> Already Have account? <Link to='/login'>login</Link></p>
       <form action="">
        <input type="text" name="" id="" placeholder='First Name'/>
        <input type="text" name="" id="" placeholder='Last Name' />
        <input type="text" name="" id="" placeholder='Enter username' />
        <input type="email" name="" id="" placeholder='Enter email' />
        <input type="password" name="" id=""  placeholder='Enter your password'/>
        <input type="checkbox" name="" id="" />
        <p>Remember me</p>
        <button>Create account</button>
       </form>
    </div>
  )
}

export default SignUp