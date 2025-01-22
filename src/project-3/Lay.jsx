import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarForCrud from './NavBarForCrud'

const Lay = () => {
  return (
    <div>
      <NavBarForCrud/>
      <Outlet/>
    </div>
  )
}

export default Lay