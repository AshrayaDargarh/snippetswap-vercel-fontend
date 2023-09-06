import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { loginAddAsync } from './loginSlice';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const[user,setUser]=useState({})
  const isVerified=useSelector(state=>state.login.isVerified)
  const logInfo=useSelector(state=>state.login.logInfo)
  const isValid=useSelector(state=>state.login.error)
  const dispatch=useDispatch()
  const {login}=useAuth()
  const navigate=useNavigate()
  function handleChange(e)
  {
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  function handleSubmit(e)
  {
    e.preventDefault()
    dispatch(loginAddAsync(user))  
  }

  useEffect(()=>{
    console.log(logInfo)
    if(logInfo.doc)
    {
    login(logInfo.token)
    navigate('/create')  
    }

  },[logInfo])

  return (
    <div className=''>
      <div className="flex items-center justify-center mt-20">
      <div className="bg-[#2E2E2E] p-8 rounded-lg shadow-lg max-w-md">
        <h3 className="text-2xl font-bold text-[#FFFFFF] text-center">Sign in to your account</h3>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2">
            <label htmlFor="emailOrUsername" className=" text-[#FFFFFF]">Your email or username</label>
            <input type="text" placeholder='name@company.com' id="emailOrUsername" name="emailOrUsername" className="px-4 py-2 border bg-[#1d1b1b] border-gray-300 rounded-lg"  onChange={handleChange} required/>
          </div> 
          <div className="flex flex-col space-y-2 mt-2">
            <label htmlFor="password" className="text-[#FFFFFF]">Password</label>
            <input type="password" placeholder="• • • • • • • • "  id="password" name="password" className="px-4 py-2 border bg-[#1d1b1b] border-gray-300 rounded-lg"  onChange={handleChange} required/>
          </div>
          <div className="flex items-center justify-end mt-2">
            <Link to='/forgotpassword'  className="text-[#64B5F6] hover:text-[#FFFFFF]">Forgot password?</Link>
          </div>
          <div className='mt-2'>
              <span className='text-xs text-red-500'>{isValid&&'Invalid credentials or user does not exist!'}</span>
            </div>
            <div className='mt-2'>
              <span className='text-xs text-red-500'>{isVerified?'':'Please Verify your email.'}</span>
            </div>
            <div className='mt-1 text-xs'>
            {isVerified?'':<Link to='/verifyemail' className='text-[#64B5F6] underline'>Verify Email</Link>}
            </div>
          <button type="submit" className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-[#FFFFFF] rounded-lg  w-full">Sign in</button>
        </form>
        <p className="mt-4 text-gray-300 text-center">Don't have an account yet? <Link to='/signup' className=" text-[#64B5F6] hover:text-[#FFFFFF]">Sign up</Link></p>
      </div>
    </div>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      </div>
  );
}

export default Login