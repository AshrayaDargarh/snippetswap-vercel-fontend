import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { verifyEmailAsync } from './authSlice';
const VerifyEmail = () => {
  const [email,setEmail]=useState('')
  const dispatch=useDispatch()
    function handleChange(e)
    {
      setEmail({
        [e.target.name]:e.target.value
      })
    }
    async function handleSubmit(e)
    {
      e.preventDefault()
      try {
        const res= dispatch(verifyEmailAsync(email)).unwrap()
        toast.promise(res, {
          pending: "Please wait email is on the way...",
          success: "Please check your mail.", 
          error: "Email does not exist.", 
        });
      } catch (error) {
        console.log(error.response)
      }
    }
  return (
    <div className="flex items-center justify-center mt-20">
    <div className="bg-[#2E2E2E] p-8 rounded-lg shadow-lg max-w-md">
      <h3 className="text-2xl font-bold text-[#FFFFFF] text-center">Verify your email</h3>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className=" text-[#FFFFFF]">Enter your email</label>
          <input type="email" placeholder='name@company.com' name="email" id="email" className="px-4 py-2 border bg-[#1d1b1b] border-gray-300 rounded-lg"  onChange={handleChange} required/>
        </div>
      
        <button type="submit" className="mt-4 px-6 py-3 bg-blue-500 text-[#FFFFFF] rounded-lg hover:bg-blue-600 w-full">Verify Email</button>
      </form>
    </div>
      <ToastContainer
         position="top-center"
         autoClose={4000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         theme="dark"
         draggable
         pauseOnHover
      />
  </div>
  )
}

export default VerifyEmail