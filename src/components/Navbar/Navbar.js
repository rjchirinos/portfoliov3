import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import SideMenu from '../SideMenu/SideMenu';
import Isotipo from "../../images/isotipo.png"
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
        <nav className="flex justify-between items-center py-6 md:py-0 md:pt-8 sm:px-12 lg:px-16">
            <button className="md:hidden mr-2" onClick={() => setSideMenuOpen(true)}>
                <FaBars className="md:hidden text-2xl text-primary" />
            </button>
            <img src={Isotipo} alt="logo" className="w-8 md:w-12" />
            <ul className={`md:flex md:justify-end font-sans uppercase hidden`.trim()}>
                {menuItems.map(i => (
                    <li className="ml-6">
                        <a className={i.class} href={i.href}>
                            {i.name}
                        </a>
                    </li>
                ))
                }
            </ul >
            <SideMenu items={menuItems} isOpen={isSideMenuOpen} close={() => setSideMenuOpen(false)} />
        </nav >
    );
}

export default Navbar;