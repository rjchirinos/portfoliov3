import React from 'react';
import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import SocialRow from '../../components/SocialRow/SocialRow';
import config from "../../config/config"
import ChangingWord from './ChangingWord';

const Header = ({ c }) => {
    return (
        <section className="h-screen px-5 max-h-sm-phone md:max-h-screen md:bg-hero-vector md:bg-hero md:bg-contain md:bg-no-repeat" id="header">
            <Navbar />
            <div className="header-box mt-12 sm:mt-0 sm:px-16 md:px-20 lg:px-28 md:h-5/6 flex flex-col items-start justify-center">
                <p className="animate-appear tint">{c("gretting")}</p>
                <h1 className="animate-appear header-title mb-3">{c("titleName")}</h1>
                <h2 className="animate-appear header-subtitle mb-4">{c("subtitle.first")} <ChangingWord className="hidden lg:block" /><span className="tint lg:hidden">{c("subtitle.second")}</span></h2>
                {/* <h2 className="animate-appear header-subtitle mb-6">{c("subtitle.first")} <span className="tint">{c("subtitle.second")}</span></h2> */}
                <SocialRow containerClassName="animate-appear" />
                <Button onClick={() => window.open("mailto:raulstuf@gmail.com")} className="animate-appear mt-6">{c("headerBtn")}</Button>
            </div>
        </section>
    );
}

export default config(Header);