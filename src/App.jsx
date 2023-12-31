import { useState } from 'react'
import Header from './components/Header'
import Create from './components/Create'
import Profile from './components/Profile'
import Error from './components/Error'
// import Login from './components/Login'
import Login from './features/auth/Login'
import Home from './components/Home'
// import Register from './components/Register'
import Register from './features/auth/Register'
import { createBrowserRouter,Outlet } from 'react-router-dom'
// import ForgotPassword from './components/ForgotPassword'
import ForgotPassword from './features/auth/ForgotPassword'
// import ResetPassword from './components/ResetPassword'
import ResetPassword from './features/auth/ResetPassword'
import { AuthProvider } from './context/AuthContext'
import ViewList from './components/ViewList'
import ViewUpdate from './components/ViewUpdate'
import ViewPublic from './components/ViewPublic'
import Unauthorized from './components/Unauthorized'
import DefaultVerify from './components/DefaultVerify'
// import VerifyEmail from './components/VerifyEmail'
import VerifyEmail from './features/auth/VerifyEmail'
function App() {
  const [count, setCount] = useState(true)
  // const token=useLongIn()
  return (
    <>
    <div className=" text-white  font-display">
    <AuthProvider>
    <Header/>
     <Outlet/>
     </AuthProvider>
    </div>
    </>
  )
}
export const appRouter=createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<Error/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:'/signup',
      element:<Register/>
    },
    {
      path:'/login',
      element:<Login/>
    },
   {
    path:'/forgotpassword',
    element:<ForgotPassword/>
   },
    {
    path:'/auth/reset-passwordFront/:resetToken',
    element:<ResetPassword/>
    }, 
    {
      path:'/auth/verifyFront/:token',
      element:<DefaultVerify/>
    },
    {
      path:'/verifyemail',
      element:<VerifyEmail/>
    },
    {
      path:"/create",
      element:<Create/>
    },
    {
      path:"/view",
      element:<ViewList/>
    },
    {
      path:"/viewupdate/:id",
      element:<ViewUpdate/>
    },
    {
      path:"/profile",
      element:<Profile/>
    },
    {
      path:"/error",
      element:<Error/>
    },
    {
        path:"/publicAccess/:id",
        element:<ViewPublic/>,
    }
  ]
}
,
    {
      path:'/unauthorized',
      element:<Unauthorized/>,
    errorElement:<Error/>
    }

])
export default App
