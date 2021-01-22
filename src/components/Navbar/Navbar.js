import React from 'react';
import useWindowDimensions from '../../utils/useWindowDimensions';

import "./Navbar.scss"


const Navbar = () => {
    const { isMedium } = useWindowDimensions()

    const generateMenu = () => (
        <ul className="navbar_menu">
            <li className="navbar_menu-item"><a href="#about">About me</a></li>
            <li className="navbar_menu-item"><a href="#articles">Articles</a></li>
            <li className="navbar_menu-item"><a href="#projects">Projects</a></li>
            <li className="navbar_menu-item tint"><a href="#contact">Contact</a></li>
        </ul>
    );

    return (
        <nav className="navbar">
            {!isMedium && generateMenu()}
        </nav>
    );
}

export default Navbar;