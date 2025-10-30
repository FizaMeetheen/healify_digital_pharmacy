import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Products from './pages/Products'


function App() {

  return (
    <>
    
     <Routes>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/products" element={<Products/>}/>


     
     </Routes>
    </>
  )
}

export default App
