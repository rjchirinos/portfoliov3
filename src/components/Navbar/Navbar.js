import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import SideMenu from '../SideMenu/SideMenu';
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
        <nav className="py-6 md:py-0 md:pt-8 sm:px-16 md:px-20 lg:px-28">
            <ul className={`md:flex md:justify-end font-sans uppercase hidden`.trim()}>
                {menuItems.map(i => (
                    <li className="ml-6">
                        <a className={i.class} href={i.href}>
                            {i.name}
                        </a>
                    </li>
                ))}
            </ul>
            <button onClick={() => setSideMenuOpen(true)}>
                <FaBars className="md:hidden text-2xl text-primary" />
            </button>
            <SideMenu items={menuItems} isOpen={isSideMenuOpen} close={() => setSideMenuOpen(false)} />
        </nav>
    );
}

export default Navbar;