import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home/Home"
import { ShopRoutes } from "./pages/Shop/ShopRoutes"
import { Pharmacy } from "./pages/Pharmacy/Pharmacy"
import { SignIn } from "./pages/SignIn/SignIn"
import { SignUp } from "./pages/SignUp/SignUp"


function App() {

  return (
    <>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path="/shop" element={<ShopRoutes/>}/>
        <Route path="/pharmacy" element={<Pharmacy/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App
