import React from 'react';
import { FaDev, FaExternalLinkAlt } from 'react-icons/fa';

const Article = ({ href, title, desc }) => {
    return (
        <div className="bg-background-light sm:w-9/20 max-w-100 lg:w-3/10 shadow h-72 p-2 overflow-hidden mb-4 mx-2">
            <div className="w-100 flex justify-between text-2xl items-center">
                <span className="text-primary-t2 text-4xl"><FaDev /></span>
                <a className="text-text-t2 hover:text-secondary transition duration-300" href={href} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                </a>
            </div>
            <div className="px-2 py-4 overflow-hidden">
                <h3 className="py-2">{title}</h3>
                <p className="text-xs h-28 overflow-hidden py-2">{desc}</p>
            </div>
        </div>
    );
}

export default Article;