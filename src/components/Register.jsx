import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BACKEND_API } from '../config';
const Register = () => {
  const [user,setUser]=useState({})
  const [verify,setVerify]=useState(null)
  const navigate=useNavigate()
  function handleChange(e)
  {
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  async function handleSubmit(e)
  {
    e.preventDefault()
    try
    {
      const res= axios.post(`${BACKEND_API}/auth/signUp`,user)
      toast.promise(res, {
        pending: "Please wait your profile is being created...",
        success: "Please Verify your email.", 
        error: "user already exist or invalid credentials!", 
      }).then(()=>{
        setVerify(true)
      })
     
    }catch(error)
    {
      if(error.response)
      {
        navigate('/error')
      }
    }
  }
  useEffect(()=>{
    if(verify)
    {
      setTimeout(()=>{
        setVerify(false)
      },3000)
    }
  },[verify])
  return (
    <div className="flex items-center justify-center mt-14 mb-8">
    <div className="bg-[#2E2E2E] p-8 rounded-lg shadow-lg max-w-md">
      <h3 className="text-2xl font-bold text-[#FFFFFF] text-center">Create your account</h3>
      <form className="mt-4" onSubmit={handleSubmit}>

        <div className="flex flex-col space-y-2">
          <label htmlFor="userName" className=" text-[#FFFFFF]">User Name</label>
          <input type="text"  placeholder='Enter user name' name="userName" id="userName" className="px-4 py-2 border bg-[#1d1b1b] border-gray-300 rounded-lg"  onChange={handleChange} required/>
        </div>

        <div className="flex flex-col space-y-2 mt-2">
              <label htmlFor="firstName" className=" text-[#FFFFFF]">
                First Name
              </label>
              <input type="text" placeholder='Enter your first name' name="firstName" id="firstName" className="px-4 py-2 border  bg-[#1d1b1b] border-gray-300 rounded-lg"   onChange={handleChange}  required/>
            </div>

            <div className="flex flex-col space-y-2 mt-2">
              <label htmlFor="lastName"  className=" text-[#FFFFFF]">
                Last Name
              </label>
              <input type="text" placeholder='Enter your last name' name="lastName" id="lastName" className="px-4 py-2 border bg-[#1d1b1b] border-gray-300 rounded-lg" onChange={handleChange} required/>
            </div>

            <div className="flex flex-col  space-y-2 mt-2">
              <label htmlFor="email" className=" text-[#FFFFFF]">
                Your email
              </label>
              <input type="text" placeholder='name@company.com' name="email" id="email" className="px-4 py-2 border bg-[#1d1b1b] border-gray-300 rounded-lg" onChange={handleChange} required/>
            </div>
           

        <div className="flex flex-col space-y-2 mt-2">
          <label htmlFor="password" className="text-[#FFFFFF]">Password</label>
          <input type="password" placeholder="• • • • • • • • "  id="password" name="password" className="px-4 py-2 border bg-[#1d1b1b]  border-gray-300 rounded-lg"  onChange={handleChange} required/>
        </div>
        <p className='text-green-500 text-sm animate-pulse'>{verify&& 'Please verify your email.'}</p>
        <button type="submit" className="mt-4 px-6 py-3 bg-blue-500 text-[#FFFFFF] rounded-lg hover:bg-blue-600 w-full">Sign up</button>
      </form>
      <p className="mt-4 text-gray-300 text-center">Already have an account?  <Link to="/login" className=" text-[#64B5F6] hover:text-[#FFFFFF]">Sign in</Link></p>
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
    // <div className='h-screen'>
    //   <div className="flex justify-center mt-10">
    //     <div className="bg-slate-800 drop-shadow-2xl rounded-md sm:p-10 p-5 flex">
    //       <form onSubmit={handleSubmit}>
    //         <p className='text-xl'>Create your account</p>
    //         <div className='mt-5'>
    //           <label htmlFor="userName" className="block text-sm">
    //             User Name
    //           </label>
    //           <input type="text" placeholder='Enter user name' name="userName" id="userName" className='bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg' onChange={handleChange} required/>
    //         </div>
            // <div className='mt-5'>
            //   <label htmlFor="firstName" className="block text-sm">
            //     First Name
            //   </label>
            //   <input type="text" placeholder='Enter your first name' name="firstName" id="firstName" className='bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg' onChange={handleChange}  required/>
            // </div>
            // <div className='mt-5'>
            //   <label htmlFor="lastName" className="block text-sm">
            //     Last Name
            //   </label>
            //   <input type="text" placeholder='Enter your last name' name="lastName" id="lastName" className='bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg' onChange={handleChange} required/>
            // </div>
            // <div className='mt-5'>
            //   <label htmlFor="email" className="block text-sm">
            //     Your email
            //   </label>
            //   <input type="text" placeholder='name@company.com' name="email" id="email" className='bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg' onChange={handleChange} required/>
            // </div>
            // <div className='mt-3'>
            //   <label htmlFor="password" className="block text-sm">
            //     Password
            //   </label>
            //   <input type="password" placeholder="• • • • • • • • "name="password" id="password" className='bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg' onChange={handleChange} required/>
            // </div>
          
    //         <div className='mt-3 text-sm'>
    //           <Link to='/forgotpassword' className='text-blue-500'>Forgot password</Link>
    //         </div>
    //       <p className='text-green-500 animate-pulse'>{verify&& 'Please verify your email.'}</p>

    //         <div className="mt-3 flex flex-col items-center justify-center">
    //           <button className="bg-sky-700 px-20 py-1 rounded-lg">Sign up</button>
    //         </div>
    //         <p className='mt-4 text-sm'>
    //            Already have an account? <Link to="/login" className='text-blue-500'>Sign in</Link>
    //           </p>
    //       </form>
    //     </div>
    //   </div>
      // <ToastContainer
      //   position="top-center"
      //   autoClose={4000}
      //   hideProgressBar={false}
      //   newestOnTop={false}
      //   closeOnClick
      //   rtl={false}
      //   pauseOnFocusLoss
      //   draggable
      //   pauseOnHover
      //   theme="dark"
      // />
    // </div>
  )
}

export default Register