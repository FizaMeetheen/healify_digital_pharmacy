import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'

function App() {

  return (
    <>
    
     <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      


     
     </Routes>
    </>
  )
}

export default App
