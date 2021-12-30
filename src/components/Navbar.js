import React from 'react';
import "../index.css" ;

const Navbar = () => {
    return (
        <div className="w-full h-auto bg-indigo-400 font-serif text-white flex">
            
                <div className="h-full p-4 w-min hover:bg-purple-500  hover:text-black overflow-hidden "> <a className="float-left  " href="/"> Home </a></div>
                <div className="h-full p-4 w-min hover:bg-purple-500  hover:text-black overflow-hidden" ><a className="float-left " href="/about"> About </a></div>
                <div className="h-full p-4 w-min hover:bg-purple-500  hover:text-black overflow-hidden" ><a className="float-left" href="/projects"> Projects </a></div>
                <div className="h-full p-4 w-min hover:bg-purple-500  hover:text-black overflow-hidden float-right" ><a className="float-right" href="/contact"> Contact </a></div>
                
        </div>
    );
};

export default Navbar;