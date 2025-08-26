import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import NGOS from '../Pages/NGOS'
import FAQS from '../Pages/FAQS'
import Anyonymous from '../Pages/Anyonymous'
import ReportChild from '../Pages/ReportChild'
function AppRoutes() {
  return (
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/login' element ={<Login />} />
  <Route path='/signup' element={<SignUp />} />
  <Route path='/ngos' element={<NGOS />} />
  <Route  path='/faqs' element ={<FAQS />} />
  <Route path='/anonymousmode' element={<Anyonymous />} />  
  <Route path='/reportchild' element={<ReportChild />} /> 
</Routes>
  )
}

export default AppRoutes;