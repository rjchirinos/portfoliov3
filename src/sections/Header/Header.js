import React from 'react';
import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import SocialRow from '../../components/SocialRow/SocialRow';
import config from "../../config/config"

const Header = ({ c }) => {
    return (
        <section className="h-screen px-5 max-h-sm-phone md:max-h-screen md:bg-hero-vector md:bg-hero md:bg-contain md:bg-no-repeat" id="header">
            <Navbar />
            <div className="header-box mt-12 sm:mt-0 sm:px-16 md:px-20 lg:px-28 md:h-5/6 flex flex-col items-start justify-center">
                <p className="tint">{c("gretting")}</p>
                <h1 className="header-title mb-3">{c("titleName")}</h1>
                <h2 className="header-subtitle mb-6">{c("subtitle.first")} <span className="tint">{c("subtitle.second")}</span></h2>
                <SocialRow />
                <Button className="mt-6">{c("headerBtn")}</Button>
            </div>
        </section>
    );
}

export default config(Header);