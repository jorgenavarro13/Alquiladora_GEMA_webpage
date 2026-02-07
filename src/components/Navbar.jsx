import {useLayoutEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {LogoHorizontal,Diamante} from '@/assets/img';
import PillNav from './PillNav';
const Navbar = () => {
  
    return (
        <div>
                {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6 site-container">
                <header>
                <div className="site-container header-inner justify-center" >
                    <img className="site-logo m-3" src={LogoHorizontal} alt="Logo" />

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

            {/* Mobile Navigation */}
        
            <div className="md:hidden">
                <PillNav 
                        logo={Diamante}
                        logoAlt="GEMA"
                        items={[
                            { label: 'Home', href: '/' },
                            { label: 'About', href: '/about' },
                            { label: 'Services', href: '/services' },
                            { label: 'Contact', href: '/contact' },
                            { label: 'Admin', href: '/admin' }
                        ]}
                        activeHref="/"
                        className="custom-nav"
                        ease="power2.easeOut"
                        baseColor="#000000"
                        pillColor="#ffffff"
                        hoveredPillTextColor="#ffffff"
                        pillTextColor="#000000"
                        theme="light"
                        initialLoadAnimation={false} 
                />
            </div> 

        </div>
    )
}
    
export default Navbar;