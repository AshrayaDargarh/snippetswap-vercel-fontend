import React, { useEffect, useState } from 'react'
import View from './View'
import { Link,useNavigate } from 'react-router-dom'
import useSnippets from '../utils/useSnippets'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'
import { BACKEND_API } from '../config'
import { TailSpin } from 'react-loader-spinner'
const ViewList = () => {
   
    const [snippets,setSnippets]=useState([])
    const[loading,setLoading]=useState(false)
    const {logout}=useAuth()
  
      const navigate=useNavigate()
      useEffect(()=>{
        setLoading(true)
          getSnippets()
      },[])
      async function getSnippets()
      {
          try {
          const token=localStorage.getItem('token')
          const res= axios.get(`${BACKEND_API}/view`,{headers:{'Authorization':`Bearer ${token}`}})
          .then(res=>{
            setSnippets(res.data)
            setLoading(false)
          })
          .catch(err=>{
            setLoading(false)
             logout()
               navigate('/unauthorized')
          })
             
          } 
          catch (error) {
              logout()
               navigate('/unauthorized')
              console.log(error)
          }
      }

  return (
    <section className="md:px-32 px-4 py-8 mt-4 overflow-hidden">
     <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {loading?(
         <div className='w-screen flex justify-center'> 
         
         <TailSpin
         height="80"
         width="80"
         color="#64B5F6"
         ariaLabel="tail-spin-loading"
         radius="1"
         wrapperStyle={{}}
         wrapperClass=""
         visible={true}
       /></div>
        ):
        snippets.length===0? (<div className='w-screen'><p className='text-center' >No snippet found!</p></div>):
        (snippets.map(snippet=>(<Link to={'/viewupdate/'+snippet._id} key={snippet._id}><View key={snippet._id}  {...snippet}/> </Link> )))
      }
    </div>
    </section>
  )
}

export default ViewList