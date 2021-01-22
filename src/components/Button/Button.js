import React from 'react';
import "./Button.scss"

const Button = ({ children, onClick }) => {
    return (
        <button className={`btn`} onCLick={onClick}>{children}</button>
    );
}

export default Button;