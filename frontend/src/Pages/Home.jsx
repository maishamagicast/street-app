import React from 'react'

function Home() {
  return (
    <div> 
        <header className='homepage-header'>Street App</header>
        <nav className='homepage-navbar'>
                <a href="anonymousmode" className='anonymousmode-link'>Anonymous mode </a>
                <a href="faqs" className='faqs-link'>FAQS </a>
                <a href="reportchild" className='reportchild-link'>Report Child </a>
                <a href="ngos" className='ngos-link'>NGOS</a>
            
            <button className='login-button'>Login</button>
            <button className='signup-button'>Sign Up</button>
        </nav>
        <p className='welcoming-ptag'>Welcome to our App where we aim to change the state of streets in society</p>

    </div>
  )
}

export default Home