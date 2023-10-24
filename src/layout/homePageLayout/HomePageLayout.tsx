// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer, Header } from "../../component"

const HomePageLayout = () => {
  return (
    <div>

        <Header />

        <Outlet />

        <Footer />

    </div>
  )
}

export default HomePageLayout