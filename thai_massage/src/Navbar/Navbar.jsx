import React from 'react'
import './Navbar.css'
import logo from '../Images/Nhill Thai massage logo-02.jpg'

const Navbar = () => {
    return (
        <div className='navbar'>


            <img className='logo' src={logo} alt="Nhill Thai Massage Logo Healing Lamp" />
            <div className='store-name'>
                <h1> Nhill Thai Massage</h1>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar