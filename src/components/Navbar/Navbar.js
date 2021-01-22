import React from 'react';
import { FaBars } from "react-icons/fa";
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
    {
        href: "#projects",
        name: "Projects"
    },
    {
        href: "#contac",
        name: "Contact",
        class: "text-primary"
    },
]


const Navbar = () => {
    return (
        <nav className="py-6 md:py-0 md:pt-8 px-5 sm:px-16 md:px-28">
            <ul className={`md:flex md:justify-end font-sans uppercase hidden`.trim()}>
                {menuItems.map(i => (
                    <li className="ml-6">
                        <a className={i.class} href={i.href}>
                            {i.name}
                        </a>
                    </li>
                ))}
            </ul>
            <FaBars className="md:hidden text-2xl" />
        </nav>
    );
}

export default Navbar;