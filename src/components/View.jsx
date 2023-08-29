import React from 'react'

const View = ({title,data}) => {
 
  return (
    // <div className='bg-slate-900 border border-gray-500 sm:w-80 h-56 mx-5 px-3 shadow-xl rounded-md relative'>
    //   <div className='pt-2 '>
    //     <p className='text-xl font-bold text-slate-100'>{title}</p>
    //   </div>
    //   <div className='mt-4 p-2 w-52 border rounded border-gray-500'>
    //     <p className='text-sm text-slate-300 leading-7'>{data.substring(0, 70)}...</p>
    //   </div>
    //   <div className='absolute top-44 right-2 '>
    //     <button className='btn bg-slate-800 shadow-md shadow-slate-700 px-2 py-2  rounded'>View/Edit</button>
    //   </div>
    // </div>
  
      <>
      <div className=" bg-[#2E2E2E]  p-4 rounded-lg shadow-lg flex flex-col ">
        <h4 className="mt-4 text-xl font-bold text-gray-200">{title}</h4>
        <p className="mt-2  border leading-7 overflow-hidden h-28 text-gray-300  p-2">
        {data.substring(0, 150)}...
        </p>
        <button
          className="mt-4 px-6 py-3 bg-blue-500 text-FFFFFF rounded-lg hover:bg-blue-600 w-full"
        >
          View/Edit
        </button>
      </div>
      </>
  
  )
}

export default View