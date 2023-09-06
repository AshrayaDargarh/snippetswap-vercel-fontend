import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { logUser } from "./loginAPI"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

const initialState={
    logInfo:[],
    status:'idel',
    isVerified:true
}

export const loginAddAsync=createAsyncThunk(
    'login/logUser',
    async(user,{rejectWithValue})=>{
        try {
            const res=await logUser(user)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
const loginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        
        builder
        .addCase(loginAddAsync.pending,(state)=>{
            state.status='loading'
        })
        .addCase(loginAddAsync.rejected,(state,action)=>{
            state.status='idel',
            state.error=true
        })
        .addCase(loginAddAsync.fulfilled,(state,action)=>{
            
            state.status='idel',
            state.error=false
            state.logInfo=action.payload
            if(!action.payload.doc.isVerified){
                state.isVerified=false
            }
          
        })
        
    }
})

export default loginSlice.reducer