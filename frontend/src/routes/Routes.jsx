import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import NGOS from '../Pages/NGOS'
import FAQS from '../Pages/FAQS'
import Anyonymous from '../Pages/Anyonymous'
import ReportChild from '../Pages/ReportChild'
import AnonymousFAQS from '../AnonymousPages/AnonymousFAQS'
import AnonymousHome from '../AnonymousPages/AnonymousHome'
import AnonymousLogin from '../AnonymousPages/AnonymousLogin'
import AnonymousNGOS from '../AnonymousPages/AnonymousNGOS'
import AnonymousReport from '../AnonymousPages/AnonymousReport'
import AnonymousSignup from '../AnonymousPages/AnonymousSignup'
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
  <Route path='/anonymousfaqs' element={<AnonymousFAQS />} />
  <Route path='/anonymoushome' element={<AnonymousHome />} />
  <Route path='/anonymouslogin' element={<AnonymousLogin /> } />
  <Route path='/anonymousngos' element={<AnonymousNGOS />} />
  <Route path='/anonymousreport' element={<AnonymousReport />} />
  <Route path='/anonymoussignup' element={<AnonymousSignup />} />
</Routes>
  )
}

export default AppRoutes;