import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Testimonial from './pages/Testimonial'
import SignupPage from './pages/SignupPage'
import ProductPage from './pages/ProductPage'
import LoginForm from './pages/LoginForm'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/testimonial' element={<Testimonial/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/login' element={<LoginForm/>}/>


    </Routes >
    </BrowserRouter>
    
    </>
  )
}

export default App
