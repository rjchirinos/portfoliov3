import React from 'react';

const Layout = ({ title, children, preventPadding }) => {
    return (
        <div className={`flex flex-col lg:flex-row px-5 ${preventPadding ? "" : "sm:px-12 md:px-16 lg:pr-28"}`}>
            <div className="flex lg:flex-col sm:w-16 md:w-28 items-center">
                <h2 className="uppercase text-vertical ">
                    {title}
                </h2>
                <div className="w-28 h-1 ml-4 lg:w-2 lg:h-32 lg:mt-6 lg:ml-0 bg-text"></div>
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}

export default Layout;