import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { element } from './routes/AllRoutes'
import { RouterProvider } from "react-router-dom"
import IsLoading from './pages/isLoading/IsLoading'
// import { CartProvider } from '../context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     {/* <CartProvider> */}
    <Suspense fallback={<IsLoading />}>
    <RouterProvider router={element} />
    {/* <App /> */}
    </Suspense>
    {/* </CartProvider> */}
  </React.StrictMode>,
)
