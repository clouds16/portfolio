import React , {useState, useEffect , useContext} from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Programming from '../assets/homepage.jpeg'


function Home() {

    return(
        <section className="snap-y snap-mandatory overflow-scroll h-screen w-screen  ">

            <section className="h-screen w-screen bg-gradient-to-b from-indigo-900 to-neutral-900 p-20 snap-start flex flex-row sm:flex- place-items-center justify-center text-white ">
                <div className="h-4/5 w-4/5 rounded-3xl flex justify-center place-items-center overflow-scroll">
                    <div className="flex-1 m-4 flex flex-col "> 
                        <h1 className="text-4xl font-serif justify-left">Welcome </h1>
                        <h2 className='m-3'>Meet your new Software Engineer/Developer</h2>
                        <div className='m-3' title="Icons">
                            <button> <FontAwesomeIcon icon={faFacebookF} /></button>
                        </div>
                        
                        <div> 
                            <button className="text-white border-2  p-3 m-3 border-slate-100 hover:text-black hover:bg-slate-100 hover:border-black" > Learn More </button>
                            <button className="text-white border-2  p-3 m-3 border-slate-100 hover:text-black hover:bg-slate-100 hover:border-black"> Check out Projects </button>
                        </div>
                    </div>

                    <div className="flex-1 m-4" id="Right-image"> 
                        <img src={Programming} className=" rounded-3xl outline-2 border-black shadow-md ring-offset-2" />
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
