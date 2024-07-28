import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import LoginPopup from './Components/LoginPopup/LoginPopup'
const App = () => {

  //  const[showLogin,setShowLogin]= useState(false)

   return (
     <>
      {/* {showLogin?<LoginPopup/>:<></>} */}
      <div className='app'>
       <Navbar/>
      {/* <Navbar setShowLogin={setShowLogin}/> */}
      {/* <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>  */}
      </div>
      </>
  )
}

export default App

