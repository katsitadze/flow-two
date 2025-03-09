import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import HomePage from '../components/pages/HomePage'
import MuiNavbar from '../components/navbars/MuiNavbar'
import { rautes } from './routes'
import AboutPage from '../components/pages/AboutPage'
import ContactPage from '../components/pages/ContactPage'
import LoginPage from '../components/pages/LoginPage'
import Register from '../components/pages/Register'
import ProtectRoute from './ProtectRoute'
import UsersPage from '../components/pages/UsersPage'
import ProfilePage from '../components/pages/ProfilePage'

const Router:React.FC = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<MuiNavbar routes={rautes}/>}>
        <Route index element={<HomePage/>} />
        <Route path='about' element={<AboutPage/>} />
        <Route path='users' element={<UsersPage/>} />
       
        </Route>
         <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<Register/>} />  

           <Route element={<ProtectRoute/>}/>
           <Route path="/contact" element={<ContactPage />} />
           <Route path="/profile" element={<ProfilePage />} />
     
    </Routes>
   
    </>
  )
}

export default Router