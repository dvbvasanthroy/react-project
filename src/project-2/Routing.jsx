import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LayOut from './LayOut'
import Products from './Products'
import Cart from './Cart'
import Order from './Order'
import CheckOut from './CheckOut'
let route=createBrowserRouter([{
  path:"/",
  element:<LayOut/>,
  children:[
    {
      index:true,
      element:<Products/>
    },
    {
      path:"/cart/:id",
      element:<Cart/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"/order/:id",
      element:<Order/>
    },
    {
      path:"/order",
      element:<Order/>
    },
    {
      path:"/checkout",
      element:<CheckOut/>
    }
  ]
}])
const Routing = () => {
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default Routing