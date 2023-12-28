import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { element } from './routes/AllRoutes'
import { RouterProvider } from "react-router-dom"
import IsLoading from './pages/isLoading/IsLoading'
import { CartContextProvider } from './context/cart-context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<IsLoading />}>
      <CartContextProvider>
        <RouterProvider router={element} />
      </CartContextProvider>
    {/* <App /> */}
    </Suspense>
  </React.StrictMode>,
)
