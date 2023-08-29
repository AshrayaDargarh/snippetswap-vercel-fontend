import React from 'react'
import { Link } from 'react-router-dom'

const Unauthorized = () => {
  return (
    // <div className=' text-white overflow-hidden h-screen font-display flex justify-center pt-20'>
    //   <div className='w-96 h-36 bg-[#2E2E2E] flex flex-col  items-center rounded-lg shadow-2xl '>
    //   <h1 className='mt-5 text-2xl font-bold'>Unauthorized: 401</h1> 
    //   <p className='mt-2 w-80 text-lg text-center'>You are not authorized to access this page. Please log in with a valid account.</p>
    //   </div>
      
    // </div>
    <div className="flex  justify-center mt-20 ">
    <div className="bg-[#2E2E2E] p-8 rounded-lg shadow-lg max-w-md">
      <h3 className="text-2xl font-bold text-red-600 text-center">Unauthorized: 401</h3>
      <p className="mt-4  text-gray-300 text-center">
      You are not authorized to access this page. Please log in with a valid account.
      </p>
     <Link to={'/'}> <button type="button" className="mt-4 px-6 py-3 bg-blue-500 text-[#FFFFFF] rounded-lg hover:bg-blue-600 w-full">Home</button></Link>
    </div>
  </div>
  )
}

export default Unauthorized