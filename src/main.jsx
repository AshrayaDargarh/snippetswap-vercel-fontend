import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Provider store={store}>
    <RouterProvider router={appRouter} />
    </Provider>
  </>,
)
