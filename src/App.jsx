import { useState } from 'react';
import { HashRouter , Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import AdminDashBoard from './components/AdminDashBoard';

function App() {
  return (
    <HashRouter>
      <Navbar />

      <main className=" flex-1
    w-full
    block
    box-border
    py-14
    min-h-[calc(100vh-(var(--nav-height)*2))]
    bg-gradient-to-b
    from-gray-200
    via-gray-300
    to-gray-500
    text-gray-900 
    ">
        <div className="site-container">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/services' element={<Services />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact'element={<Contact/>}/>
            <Route path='/admin' element={<AdminDashBoard/>}/>
          </Routes>
        </div>
      </main>

      <Footer />
    </HashRouter>
  )
}

export default App
