import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'

const SignupPage = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        const formData = {fullName, email, phoneNumber, password}
    }
    
  return (
    <>
    <Navbar/>

    <div className='FormContainer d-flex justify-content-center align-items-center vh-100'>
        <form action="" className='border rounded bg-light p-5'>
            <h2 className='text-center text-secondary'>Register</h2>
            <div className='input-container my-3'>
                <label htmlFor="">Fullname:</label>
                <input
                 value={fullName} 
                 className='bg-white'
                 onChange={(e) => setFullName(e.target.value)} 
                 type="text" 
                 placeholder='Enter your fullname'/>

            </div>

            <div className='input-container my-3'>
                <label htmlFor="">Phone:</label>
                <input 
                value={phoneNumber} 
                className='bg-white'
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="tel" 
                placeholder='Enter your phone number'/>
            </div>

            <div className='input-container my-3'>
                <label htmlFor="">E-mail:</label>
                <input 
                className='bg-white'
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
                type="email" 
                placeholder='Enter your Email Address'/>
            </div>

            <div className='input-container my-3'>
                <label htmlFor="">Password:</label>
                <input 
                className='bg-white'
                onChange={(e) => setPassword(e.target.value)}  
                value={password} 
                type="password" 
                placeholder='Enter your Password'/>
            </div>

            <div className='btn-container my-3'>
                <button className='btn btn-primary w-100'>Sign Up</button>
            </div>





        </form>
    </div>
    
    </>
  )
}

export default SignupPage