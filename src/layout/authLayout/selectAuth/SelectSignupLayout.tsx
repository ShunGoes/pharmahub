// import React from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "../../../component"

const SelectSignupLayout = () => {
  return (
    <div>
        
        <Header />

        <Outlet />
        
    </div>
  )
}

export default SelectSignupLayout;