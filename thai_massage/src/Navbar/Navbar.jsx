import React from 'react'
import './Navbar.css'
import logo from '../Images/Nhill Thai massage logo-02.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>

            <img className='logo' src={logo} alt="Nhill Thai Massage Logo Healing Lamp" />
            <div className='store-name'>
                <h1> Nhill Thai Massage</h1>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar