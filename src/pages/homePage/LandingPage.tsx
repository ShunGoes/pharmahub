// import React from 'react'

import { HealthCheck, Hero, News, Order, Products, Quality, Search, Service, ShopByCondition } from "."


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
      <News />

    </div>
  )
}

export default LandingPage;