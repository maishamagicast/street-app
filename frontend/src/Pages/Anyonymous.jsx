import React from 'react'
import { Link } from 'react-router-dom'

function Anyonymous() {
  return (
    <div>
        <nav>
        <Link to='/anonymoushome'>Home</Link>
        <Link to='/anonymouslogin'>Login</Link>
        <Link to='/anonymoussignup'>Sign Up</Link>
        <Link to='/anonymousngos'>NGOS</Link>
        <Link to='/anonymousfaqs'>FAQS</Link>
        <Link to='/anonymousreport'>Reportchild</Link>
      </nav>
    </div>
  )
}

export default Anyonymous