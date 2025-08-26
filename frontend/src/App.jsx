import React from 'react'
import './App.css'
import AppRoutes from './routes/Routes'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/ngos'>NGOS</Link>
        <Link to='/faqs'>FAQS</Link>
        <Link to='/anonymousmode'>Anonymousmode</Link>
        <Link to='/reportchild'>Reportchild</Link>
      </nav>
      <AppRoutes />
    </div>
  )
}

export default App