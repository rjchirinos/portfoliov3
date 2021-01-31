import React from 'react';
import Footer from '../../components/Footer/Footer';
import About from '../About/About';
import Articles from '../Articles/Articles';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';

const App = () => {
    return (
        <>
            <div className="max-w-screen-xl m-auto">
                <Header />
                <About />
                <Articles />
                <Contact />
            </div>
            <Footer />
        </>
    );
}

export default App;