import React , {useState, useEffect , useContext} from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Programming from '../assets/homepage.jpeg'
import './home.css'
import Background from './components/background'


function Home( props ) {



    return(
        <section className="h-screen w-full snap-y snap-mandatory overflow-scroll ">

            <section className="h-screen w-screen bg-gradient-to-b from-indigo-900 to-neutral-900 p-20 snap-start flex flex-row sm:flex- place-items-center justify-center text-white ">
                <div className="h-auto w-5/6 sm:h-3/5 sm:w-3/5 rounded-3xl flex justify-center place-items-center overflow-scroll border-white border-2" id="Border">
                    <div className="flex-1 m-4 flex flex-col "> 
                        <h1 className="text-4xl font-serif justify-left">Welcome </h1>
                        <h2 className='m-3'>Meet your new Software Engineer/Developer</h2>
                        <div className='m-3' title="Icons">
                        <div class="wrapper">
                            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" ></link>
                            <div class="icon facebook">
                                <div class="tooltip">Facebook</div>
                                <span><i class="fab fa-facebook-f"></i></span>
                            </div>
                            <div class="icon twitter">
                                <div class="tooltip">Twitter</div>
                                <span><i class="fab fa-twitter"></i></span>
                            </div>
                            <div class="icon instagram">
                                <div class="tooltip">Instagram</div>
                                <span><i class="fab fa-instagram"></i></span>
                            </div>
                            <div class="icon github">
                                <div class="tooltip">Github</div>
                                <span><i class="fab fa-github"></i></span>
                            </div>
                            <div class="icon youtube">
                                <div class="tooltip">Youtube</div>
                                <span><i class="fab fa-youtube"></i></span>
                            </div>
                            </div>
                        </div>
                        
                        <div> 
                            <a href="/about"> <button className="text-white border-2  p-3 m-3 border-slate-100 hover:text-black hover:bg-slate-100 hover:border-black" > Learn More </button></a>
                            <a href="/projects"> <button  className="text-white border-2  p-3 m-3 border-slate-100 hover:text-black hover:bg-slate-100 hover:border-black"> Check out Projects </button></a>
                            
                        </div>
                    </div>

               
                </div>
            </section>

        </section>
    )
}

export default Home ;

//discarded sections
// <section className="h-screen w-screen bg-amber-50 p-20 snap-start flex place-items-center justify-center">
// <div className=" h-3/4 w-3/4 bg-purple-200 rounded-3xl grid grid-cols-3  ">
//     <div className="h-300 w-300 bg-cyan-100 m-5"> item 1 </div>
//     <div className="h-300 w-300 bg-cyan-100 m-5"> item 2 </div>
//     <div className="h-300 w-300 bg-cyan-100 m-5"> item 3 </div>
    
// </div>
// </section>
