// import React from 'react'

import { HealthCheck, Hero, Order, Products, Quality, Search, Service, ShopByCondition } from "."


const LandingPage = () => {
  return (
    <div>
      
      <Hero />
      <Search />
      <Service />
      <Order />
      <Quality />
      <Products />
      <ShopByCondition />
      <HealthCheck />

    </div>
  )
}

export default LandingPage;