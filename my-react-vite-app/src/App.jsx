import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import { Routes } from 'react-router-dom'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>

      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Cart/>} />
        <Route path='/' element={<PlaceOrder/>} />
      </Routes>
    </div>
  )
}

export default App
