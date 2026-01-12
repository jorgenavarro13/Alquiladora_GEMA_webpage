import { useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="site-main">
        <div className="site-container">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/services' element={<Services />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
