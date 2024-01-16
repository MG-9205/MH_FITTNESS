import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import About from './component/About/About'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Facilities from './component/Facilities/Facilities.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<About/>
      },
      {
        path:'Facilities',
        element:<Facilities/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
