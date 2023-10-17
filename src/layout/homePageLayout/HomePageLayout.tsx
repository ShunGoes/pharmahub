// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer } from "../../component"
import Header from "../../component/block/homePageBlock/Header"

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