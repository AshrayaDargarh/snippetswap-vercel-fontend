import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BACKEND_API } from '../config'
const useView = (viewId) => {
    const [snippet,setSnippet]= useState(null)
    useEffect(()=>{
        getSnippet()
    },[])
    async function getSnippet()
    {
        try{
            const token=localStorage.getItem('token')
            const res=await axios.get(`${BACKEND_API}/view/${viewId}`,{headers:{'Authorization':`Bearer ${token}`}})
            console.log(res.data)
            setSnippet(res.data)
        }
        catch(error)
        {
            console.log(error.response)
        }
    }
  return snippet
}

export default useView
 // const [snippets,setSnippets]=useState([])
    // const navigate=useNavigate()
    // useEffect(()=>{
    //     getSnippets()
    // },[])
    // async function getSnippets()
    // {
    //     try {
    //     const token=localStorage.getItem('token')
    //     const res=await axios.get('https://snippetswap-api.onrender.com/view',{headers:{'Authorization':`Bearer ${token}`}})
    //         setSnippets(res.data)
    //         // console.log('user=',res.data[0].user)
    //     } 
    //     catch (error) {
    //          navigate('/unauthorized')
    //         console.log(error.response)
    //     }
    // }