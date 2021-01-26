import React from 'react';
// import "./Button.scss"

const Button = ({ children, onClick, className }) => {
    return (
        <button
            className={`btn border-4 border-primary text-primary font-bold py-3 px-8 md:px-12 inline-block transition duration-200 hover:border-secondary hover:text-secondary ${className}`.trim()}
            onCLick={onClick}>
            {children}
        </button>
    );
}

export default Button;