import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useAuth } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BACKEND_API } from '../config';
import { TailSpin } from 'react-loader-spinner';

const Login = () => {
  const[user,setUser]=useState({})
  const[isValid,setIsValid]=useState(true)
  const[verify,setVerify]=useState(true)

  const {login}=useAuth()
  const navigate=useNavigate()
  
  function handleChange(e)
  {
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  async function  handleSubmit(e)
  {
    e.preventDefault()
    try
    {
      const res= axios.post(`${BACKEND_API}/auth/login`,user)
      toast.promise(res, {
        pending: "Please wait for a while...",
        error: "Invalid credentials or user does not exist!", 
      }).then((res)=>{
        if(res.data.doc.isVerified)
        {
          // console.log('Token',res.data.token)
          // console.log('isVerified',res.data.doc.isVerified)
         
         setIsValid(true)
          setVerify(true)
          login(res.data.token)
         navigate('/create')  
        }
        else
        {
          setVerify(false)
          setTimeout(()=>{
            setVerify(true)
          },10000)
        }
       
      })    
    }
    catch(err)
    {
      if(err.response)
      {
        const {status,data}=err.response

        if(status===400)
        {
          setIsValid(false)
        }
      }
    }
  }
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
              <span className='text-xs text-red-500'>{isValid?'':'Please enter correct email or password'}</span>
            </div>
            <div className='mt-2'>
              <span className='text-xs text-red-500'>{verify?'':'Please Verify your email.'}</span>
            </div>
            <div className='mt-1 text-xs'>
            {verify?'':<Link to='/verifyemail' className='text-[#64B5F6] underline'>Verify Email</Link>}
            </div>
          <button type="submit" className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-[#FFFFFF] rounded-lg  w-full">Sign in</button>
        </form>
        <p className="mt-4 text-gray-300 text-center">Don't have an account yet? <Link to='/signup' className=" text-[#64B5F6] hover:text-[#FFFFFF]">Sign up</Link></p>
      </div>
    </div>
      {/* <div className="flex justify-center mt-10">
        <div className=" bg-[#1E1E1E] drop-shadow-2xl rounded-md sm:p-10 p-5 flex">
          <form onSubmit={handleSubmit}>
            <p className='text-xl'>Sign in to your account</p>
            <div className='mt-5'>
              <label htmlFor="emailOrUsername" className="block text-sm">
                Your email or username
              </label>
              <input type="text" placeholder='name@company.com' name="emailOrUsername" id="emailOrUsername" className='bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg' onChange={handleChange} required />
            </div>
            <div className='mt-3'>
              <label htmlFor="password" className="block text-sm">
                Password
              </label>
              <input type="password" placeholder="• • • • • • • • " name="password" id="password" className='bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg' onChange={handleChange} required/>
            </div>
            <div className='mt-2'>
              <span className='text-xs text-red-500'>{isValid?'':'Please enter correct email or password'}</span>
            </div>
            <div className='mt-2'>
              <span className='text-xs text-red-500'>{verify?'':'Please Verify your email first.'}</span>
            </div>
            <div className='mt-1 text-xs'>
            {verify?'':<Link to='/verifyemail' className='text-blue-500 underline'>Verify Email</Link>}
            </div>
            <div className='mt-3 text-sm'>
              <Link to='/forgotpassword' className='text-blue-500'>Forgot password</Link>
            </div>
            <div className='mt-3 text-sm'>
            
            </div>
            <div className="mt-3 flex flex-col items-center justify-center">
              <button className="bg-sky-700 px-20 py-1 rounded-lg" type='submit' >Sign in</button>
            </div>
            <p className='mt-4 text-sm'>
                Don't have an account yet? <Link to='/signup' className='text-blue-500'>Sign up</Link>
              </p>
          </form>
        </div>
      </div> */}
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