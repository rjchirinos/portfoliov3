import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import SideMenu from '../SideMenu/SideMenu';
import Logo from "../../images/logo.png"
// import "./Navbar.scss"

const menuItems = [
    {
        href: "#about",
        name: "About Me"
    },
    {
        href: "#articles",
        name: "Articles"
    },
    // {
    //     href: "#projects",
    //     name: "Projects"
    // },
    {
        href: "#contact",
        name: "Contact",
        class: "text-primary"
    },
]


const Navbar = () => {
    const [isSideMenuOpen, setSideMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center py-6 md:py-0 md:pt-8 sm:px-16 md:px-20 lg:px-28">
            <button className="md:hidden mr-2" onClick={() => setSideMenuOpen(true)}>
                <FaBars className="md:hidden text-2xl text-primary" />
            </button>
            <img src={Logo} alt="logo" className="w-44 hidden md:block" />
            <ul className={`md:flex md:justify-end font-sans uppercase hidden`.trim()}>
                {menuItems.map(i => (
                    <li className="ml-6">
                        <a className={i.class} href={i.href}>
                            {i.name}
                        </a>
                    </li>
                ))}
            </ul>
            <SideMenu items={menuItems} isOpen={isSideMenuOpen} close={() => setSideMenuOpen(false)} />
        </nav>
    );
}

export default Navbar;