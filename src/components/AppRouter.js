import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../router/Home'
import Login from '../router/Login'
import Register from '../router/Register'
import Available from '../router/Available'
import Sold from '../router/Sold'



export default function AppRouter() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/available" element={<Available />} />
      <Route path="/sold" element={<Sold />} />

    </Routes>
  </BrowserRouter>
  )
}