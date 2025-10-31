import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Products from './pages/Products'
import Register from './pages/Register'
import AdminHome from './pages/adminPages/AdminHome'
import AdminMedicines from './pages/adminPages/AdminMedicines'
import AdminUsers from './pages/adminPages/AdminUsers'
import LabBooking from './pages/LabBooking'
import AdminLab from './pages/adminPages/AdminLab'


function App() {

  return (
    <>
    
     <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/adminHome" element={<AdminHome/>}/>
      <Route path="/adminHome/adminMedicines" element={<AdminMedicines/>}/>
      <Route path="/adminHome/adminUsers" element={<AdminUsers/>}/>
      <Route path="/labtest" element={<LabBooking/>}/>
      <Route path="/adminHome/labDetails" element={<AdminLab/>}/>
      
     
     </Routes>
    </>
  )
}

export default App
