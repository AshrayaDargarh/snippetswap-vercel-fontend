import React from 'react'
import { useMemo,useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BACKEND_API } from '../config'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
const useSnippets = () => {
    const [snippets,setSnippets]=useState([])
  const {logout}=useAuth()

    const navigate=useNavigate()
    useEffect(()=>{
        getSnippets()
    },[])
    async function getSnippets()
    {
        try {
        const token=localStorage.getItem('token')
        const res=await axios.get(`${BACKEND_API}/view`,{headers:{'Authorization':`Bearer ${token}`}})
        console.log('data is',res.data[0])
            setSnippets(res.data)
            // console.log('user=',res.data[0].user)
        } 
        catch (error) {
            logout()
             navigate('/unauthorized')
            console.log(error.response)
        }
    }
    const memorizedSnippets=useMemo(()=>snippets,[snippets])
  return memorizedSnippets
}

export default useSnippets