import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import About from './component/About/About'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Facilities from './component/Facilities/Facilities.jsx'
import Service from './component/Service/Service.jsx'
import Membership from './component/Membership/Membership.jsx'
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
      },
      {
        path:'Services',
        element:<Service/>
      },
      {
        path:'Membership',
        element:<Membership/>
      }
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
