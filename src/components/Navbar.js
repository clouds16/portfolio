import React from 'react';
import "../index.css" ;

const Navbar = () => {

    const navbar = "h-full p-4 w-min hover:bg-purple-500  hover:text-black overflow-hidden "

    return (
        <div className="w-full h-auto bg-indigo-400 font-serif text-white flex fixed">
            
                <div className={navbar}> <a className="float-left  " href="/"> Home </a></div>
                <div className={navbar} ><a className="float-left " href="/about"> About </a></div>
                <div className={navbar} ><a className="float-left" href="/projects"> Projects </a></div>
                <div className={navbar} ><a className="float-right" href="/contact"> Contact </a></div>
                
        </div>
    );
};

export default Navbar;
