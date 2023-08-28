import React, { useState } from 'react'
import './navbar.css';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png'
import { Fab } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import menu from '../../assets/icons8-hamburger-menu-100.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' className='logo' />
            <div className='desktopMenu'>
                <Link onClick={() => {
                    const about = document.getElementById("intro");
                    about.scrollIntoView({ behavior: "smooth", block: "center" });
                }} className='desktopMenuItem' offset={-100}>Home</Link>
                <Link onClick={() => {
                    const about = document.getElementById("about");
                    about.scrollIntoView({ behavior: "smooth", block: "center" });
                }} className='desktopMenuItem' offset={-500}>About</Link>
                <Link onClick={() => {
                    const about = document.getElementById("skills");
                    about.scrollIntoView({ behavior: "smooth", block: "center" });
                }} className='desktopMenuItem' offset={-50}>Skills</Link>
            </div>
            <Fab className='desktopMenuButton' variant='extended' size='medium' sx={{
                backgroundColor: '#1E1E1E',
                textTransform: 'capitalize',
                fontSize: '1.1rem',
                fontWeight: 500,
                boxShadow: 0,
                color: '#f5f5f5',
                border: '2px solid #f5f5f5',
                ":hover": {
                    backgroundColor: '#f5f5f5',
                    color: '#1E1E1E',
                },
            }} onClick={() => {
                const about = document.getElementById("contact");
                about.scrollIntoView({ behavior: "smooth" });
            }} target='_blank'><FontAwesomeIcon icon="fa-regular fa-comment" />Contact Me</Fab>
            <img src={menu} alt='Menu' className='mobMenu' onClick={() => { setShowMenu(!showMenu) }}></img>
            <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link to='intro' spy={true} smooth={true} duration={0} className='mobileMenuItem' onClick={() => { setShowMenu(!showMenu) }}>Home</Link>
                <Link to='about' spy={true} smooth={true} duration={0} className='mobileMenuItem' onClick={() => { setShowMenu(!showMenu) }}>About</Link>
                <Link to='experience' spy={true} smooth={true} duration={0} className='mobileMenuItem' onClick={() => { setShowMenu(!showMenu) }}>Skills</Link>
            </div>
        </nav>
    )
}

export default Navbar;