import { useState } from 'react'
import Footer from './components/common/Footer'
import './App.css'
import Navbar from './components/common/Navbar'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
