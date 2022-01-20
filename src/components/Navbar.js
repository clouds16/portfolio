import React from 'react';
import "../index.css" ;

const Navbar = () => {

    const navbar = "h-full p-4 w-min hover:bg-indigo-500  hover:text-black overflow-hidden "

    return (
        <div className="w-full h-auto  bg-slate-700 font-serif text-white flex fixed  justify-left place-items-center">
                <div className="h-full w-auto p-2  overflow-hidden font-sans text-xl mx-10"> Hector Alvarez </div>
                <div className={navbar}> <a className="float-left" href="/"> Home </a></div>
                <div className={navbar} ><a className="float-left " href="/about"> About </a></div>
                <div className={navbar} ><a className="float-left" href="/projects"> Projects </a></div>
                <div className={navbar} ><a className="float-right" href="/contact"> Contact </a></div>
                
        </div>
    );
};

export default Navbar;
