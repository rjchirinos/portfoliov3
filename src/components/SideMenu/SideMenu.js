import React from 'react';
import SocialRow from "../SocialRow/SocialRow"
import { FaTimes } from 'react-icons/fa';

const SideMenu = ({ isOpen, close, items }) => {
    return (
        <div className={`z-50 fixed transition-all duration-1000 top-0 left-0 h-full  
        ${isOpen ? "w-3/5" : "w-0"} shadow bg-background-light overflow-hidden`}>
            {/* <div className={`${isOpen ? "" : "hidden"}`}> */}
            <button className="py-6 px-5" onClick={close}>
                <span className="md:hidden text-2xl text-primary" ><FaTimes /></span>
            </button>
            <ul className="pl-11 mt-4 uppercase font-sans whitespace-nowrap">
                {items.map(i => (
                    <li onCLick={close} className="mb-6">
                        <a className={i.class} href={i.href}>
                            {i.name}
                        </a>
                    </li>
                ))}
            </ul>
            <SocialRow
                containerClassName="absolute bottom-0 pl-11"
                iconClassname="mb-6 text-xl"
                vertical
            />
            {/* </div> */}
        </div>
    );
}

export default SideMenu;