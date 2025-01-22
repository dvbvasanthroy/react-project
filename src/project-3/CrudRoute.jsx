import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Lay from './Lay'
import Create from './Create'
import Data from './Data'
import View from './View'
import Update from './Update'

let crudRoute=createBrowserRouter([{
  path:"/",
  element:<Lay/>,
  children:[
    {
      index:true,
      element:<Create/>
    },
    {
      path:"/data",
      element:<Data/>
    },
    {
      path:"/view",
      element:<View/>
    },
    {
      path:"/view/:id",
      element:<View/>
    },
    {
      path:"/update",
      element:<Update/>
    },
    {
      path:"/update/:id",
      element:<Update/>
    }
  ]
}])

const CrudRoute = () => {
  return (
    <div>
      <RouterProvider router={crudRoute}></RouterProvider>
    </div>
  )
}

export default CrudRoute