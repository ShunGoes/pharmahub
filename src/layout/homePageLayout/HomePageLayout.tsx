// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer, Headerr } from "../../component"

const HomePageLayout = () => {
  return (
    <div>

        <Headerr />

        <Outlet />

        <Footer />

    </div>
  )
}

export default HomePageLayout