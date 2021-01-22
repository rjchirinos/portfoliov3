import React from 'react';
import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import SocialRow from '../../components/SocialRow/SocialRow';
import config from "../../config/config"
import useWindowDimensions from '../../utils/useWindowDimensions';

import "./Header.scss"

const Header = ({ c }) => {

    const { isMedium } = useWindowDimensions();

    return (
        <section className="header" id="header">
            <Navbar />
            <div className="header-box">
                <p className="tint">{c("gretting")}</p>
                <h1 className="header-title mb-3">{c("titleName")}</h1>
                <h2 style={{ marginBottom: "1rem" }} className="header-subtitle mb-2">{c("subtitle.first")} <span className="tint">{c("subtitle.second")}</span></h2>
                <SocialRow iconSize={!isMedium ? "32px" : "24px"} margin={!isMedium ? "30px" : "20px"} />
                <Button className="mt-6">Say hello!</Button>
            </div>
        </section>
    );
}

export default config(Header);