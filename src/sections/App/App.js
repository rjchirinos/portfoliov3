import React from 'react';
import About from '../About/About';
import Articles from '../Articles/Articles';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';

const App = () => {
    return (
        <div className="max-w-screen-xl m-auto">
            <Header />
            <About />
            <Articles />
            <Contact />
        </div>
    );
}

export default App;