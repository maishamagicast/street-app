import React, { useState } from 'react'
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

        <p className='welcoming-ptag'>Welcome to our App where we aim to change the state of streets in society</p>

    </div>
  )
}

export default Home