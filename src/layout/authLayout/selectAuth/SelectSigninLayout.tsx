// import React from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "../../../component"

const SelectSigninLayout = () => {
  return (
    <div>
        
        <Header />

        <Outlet />
        
    </div>
  )
}

export default SelectSigninLayout