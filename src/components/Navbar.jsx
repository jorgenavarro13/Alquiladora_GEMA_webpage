import {useLayoutEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo_alquiladora2.png';
const Navbar = () => {
  
    return (
        <div>
            <header className="site-header">
            <div className="site-container header-inner">
                <img className="site-logo" src={logo} alt="Logo" />

                <ul className="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                </ul>
            </div>    
            </header>
        </div>
    )
}
    
export default Navbar;