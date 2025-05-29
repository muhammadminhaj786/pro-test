import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import CartTable from './component/Cart'

function App() {
  

return (

  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/cart' element={<CartTable/>} />
  </Routes>
)
}

export default App
