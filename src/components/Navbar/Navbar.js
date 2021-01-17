import React from 'react';

import "./Navbar.scss"


const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar_menu">
                <li className="navbar_menu-item"><a href="#about">About me</a></li>
                <li className="navbar_menu-item"><a href="#articles">Articles</a></li>
                <li className="navbar_menu-item"><a href="#projects">Projects</a></li>
                <li className="navbar_menu-item tint"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;