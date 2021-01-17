import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SocialRow from '../../components/SocialRow/SocialRow';
import config from "../../config/config"

import "./Header.scss"

const Header = ({ c }) => {
    return (
        <section className="header" id="header">
            <Navbar />
            <div className="header-box">
                <p className="tint">{c("gretting")}</p>
                <h1 className="header-title">{c("titleName")}</h1>
                <h2 style={{ marginBottom: "1rem" }} className="header-subtitle">{c("subtitle.first")} <span className="tint">{c("subtitle.second")}</span></h2>
                <SocialRow iconSize="32px" margin="30px" />
            </div>
        </section>
    );
}

export default config(Header);