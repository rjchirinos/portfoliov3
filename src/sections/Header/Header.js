import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import config from "../../config/config"

const Header = ({ c }) => {
    return (
        <>
            <Navbar />
            <div className="header-box">
                <p className="tint">{c("gretting")}</p>
                <h1 className="header-title">{c("titleName")}</h1>
                <h2 className="header-subtitle">{c("subtitle.first")} <span className="tint">{c("subtitle.second")}</span></h2>
            </div>
        </>
    );
}

export default config(Header);