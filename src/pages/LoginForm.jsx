import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const LoginForm = () => {
    const [loginID, setLoginID] = useState('')
    const [password, setPassword] = useState('')

    const submitLogin = (e) => {
        e.preventDefault()
        const loginData = {loginID, password}
        console.log(loginData)
    }


  return (
    <>
    <Navbar/>

    <div className='FormContainer d-flex justify-content-center align-items-center vh-100'>
        <form onClick={submitLogin} action="" className='border rounded bg-light p-5'>
            <h2 className='text-center text-secondary'>Login</h2>
            <div className='input-container my-3'>
                <label htmlFor="">loginID:</label>
                <input
                 value={loginID} 
                 className='bg-white'
                 onChange={(e) => setLoginID(e.target.value)} 
                 type="text" 
                 placeholder='Enter your email address'/>

            </div>

            <div className='login-input my-3'>
                <label htmlFor="">password:</label>
                <input 
                className='bg-white'
                onChange={(e) => setPassword(e.target.value)} 
                value={password} 
                type="password" 
                placeholder='Enter your password'/>
            </div>

            <div className='btn btn-primary w-100'>
                <button className='btn btn-primary w-100'>Log In</button>
                
            </div>

        </form>

    </div>
    


    
    </>
  )
}

export default LoginForm