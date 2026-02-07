import {useLayoutEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {LogoHorizontal} from '@/assets/img';
const Navbar = () => {
  
    return (
        <div>
            <header>
            <div className="site-container header-inner">
                <img className="site-logo" src={LogoHorizontal} alt="Logo" />

                <ul className="navbar font-google-sans">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {/* Add more navigation links as needed
                    <li><Link to="/login">Login</Link></li>
                     */}
                    <li><Link to="/admin">Admin</Link></li>
                </ul>
            </div>    
            </header>
        </div>
    )
}
    
export default Navbar;