import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {

  return (
    <>
    
     <Routes>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
     </Routes>
    </>
  )
}

export default App
