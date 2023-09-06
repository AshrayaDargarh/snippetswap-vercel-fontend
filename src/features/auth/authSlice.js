import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import { logUser } from "./loginAPI"
import { regUser } from "./registerAPI"
import { resetPassUser } from "./resetPasswordAPI"

const initialState={
    logInfo:[],
    status:'idel',
    isVerified:true
}

export const loginAddAsync=createAsyncThunk(
    'auth/logUser',
    async(user,{rejectWithValue})=>{
        try {
            const res=await logUser(user)            
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const registerAddAsync=createAsyncThunk(
    'auth/regUser',
    async(user,{rejectWithValue})=>{
        try {
            const res=await regUser(user);
            return res.data
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)
export const resetPasswordAsync=createAsyncThunk(
    'auth/resetPassUser',
    async({id,password})=>{
        try {
            const res=await resetPassUser(id,password)
            return res.data
        } catch (error) {
            console.log('Error Reset=',error)
        }
    }
)

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
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
        .addCase(registerAddAsync.fulfilled,(state,action)=>{
            state.status='idel'
            state.error=false
        })
        .addCase(registerAddAsync.rejected,(state,action)=>{
            state.status='idel',
            state.error=true
        })
        .addCase(registerAddAsync.pending,(state)=>{
            state.status='loading'
        })
    }
})

export default authSlice.reducer