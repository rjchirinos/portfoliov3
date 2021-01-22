import React from 'react';
import "./Button.scss"

const Button = ({ children, onClick, className }) => {
    return (
        <button className={`btn ${className}`.trim()} onCLick={onClick}>{children}</button>
    );
}

export default Button;