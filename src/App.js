import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './components/home.js'
import AboutPage from './components/about.js'
import ServicesPage from './components/services.js'
import ContactPage from './components/contact.js'
import Navbar from './components/navbar.js'

export default function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </Router>
  )
}
