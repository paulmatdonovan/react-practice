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
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar