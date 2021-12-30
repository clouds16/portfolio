import React from 'react' 
import {BrowserRouter , Route , Router, Routes , Switch } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'

function PageRouter() {
    return(
        <BrowserRouter > 
            
            <Routes> 
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/projects" element={<Projects/>} />
                <Route exact path="/contact" component={<Contact/>} />
            </Routes> 
            
        </BrowserRouter>
    )
}

export default PageRouter;