import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Home() {
  const [bgColor, setBgColor] = useState("white")

function handleBgColor () {
  if (bgColor =="white") {
    setBgColor("black")
  }

  if (bgColor == "black") {
    setBgColor ("white")
  }
}
  return (
    <div> 
        <header className='homepage-header'>Street App</header>
            <nav>
        {/* <Link to='/'>Home</Link> */}
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/ngos'>NGOS</Link>
        <Link to='/faqs'>FAQS</Link>
        <Link to='/anonymousmode'>Anonymousmode</Link>
        <Link to='/reportchild'>Reportchild</Link>
      </nav>

        <p className='welcoming-ptag'>Welcome to our App where we aim to change the state of streets in society</p>

    </div>
  )
}

export default Home