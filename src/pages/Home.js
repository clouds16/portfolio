import React , {useState, useEffect , useContext} from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Programming from '../assets/homepage.jpeg'
import backend from '../assets/backend.jpeg'
import database from '../assets/database.png'
import frontend from '../assets/frontend.png'
import language from '../assets/languages.jpeg'
import cloudtech from '../assets/cloudtech.jpeg'
import agile from '../assets/agile.jpeg'


function Home() {

    const skills = [
        {
            title : "Programming Languages",
            detail: "Python, JavaScript/TypeScript , C#, HTML , CSS" ,
            image : language
        }, 
        {
            title : "Front End Development",
            detail: "Frameworks: ReactJS/ReactNative, Angular (Ionic), Styling:  SCSS , Tailwind" ,
            image : frontend
        },
        {
            title : "Back End Development",
            detail: "NodeJS, Express" ,
            image : backend
        }, 
        {
            title : "Databases",
            detail: "MongoDB , DynoDB , SQL , PostGres" ,
            image : database
        }, 
        {
            title : "Cloud Technologies",
            detail: "AWS, Terraform , Jenkins , CI/CD , Docker, Kubernetes , Linux" ,
            image : cloudtech  
        },
        {
            title : "Team Work and Leadership",
            detail: "Git, Github, Agile, Scrum, Kanban" ,
            image : agile
        }
    ]

    return(
        <section className="snap-y snap-mandatory overflow-scroll h-screen w-screen  ">

            <section className="h-screen w-screen bg-amber-50 p-20 snap-start flex place-items-center justify-center ">
                <div className="h-4/5 w-4/5 bg-purple-200 rounded-3xl flex justify-center place-items-center ">
                    <div className="flex-1 m-4 flex flex-col "> 
                        <h1 className="text-4xl font-serif justify-left">Welcome </h1>
                        <h2 className='m-3'>Meet your new Software Engineer/Developer</h2>
                        <div className='m-3' title="Icons">
                            <button> <FontAwesomeIcon icon={faFacebookF} /></button>
                        </div>
                    </div>

                    <div className="flex-1 m-4" id="Right-image"> 
                        <img src={Programming} className=" rounded-3xl outline-2 border-black shadow-md ring-offset-2" />
                    </div>
                </div>
            </section>
        

            <section className="h-screen w-screen bg-gray-200 p-20 snap-start flex place-items-center justify-center overflow-scroll" id="skills">
                <div className="h-full w-full flex flex-col place-items-center justify-center">
                    <div className="font-sans text-4xl "> Skills </div>
                    <div className="h-full w-full grid grid-cols-3 grid-gap-5 p-5" > 
                    {
                    skills.map( (item)=> {
                        return (
                            <div className="h-5/6 w-5/6 flex flex-col grow flex-wrap place-items-center justify-center bg-white p-2 m-3 rounded-3xl shadow-2xl overflow-y-hidden hover:scale-125 hover:transition-transform hover:bg-amber-300 hover:text-white" id="card">
                                <div className="flex-1 h-full w-full  overflow-y-hidden flex flex-col justify-center place-items-center" >
                                    <h2 className=" font-serif text-2xl">{item.title}</h2>
                                    <h2 className= "font-serif text-base ">{item.detail}</h2>
                                </div>
                                <div className="flex-1 h-full w-full overflow-y-hidden rounded-xl ">
                                     <img className="object-cover" src={item.image} /> 
                                </div>
                            </div>
                        )
                    } )
                }
                    </div>
                </div>
                
                
            </section>


            <section className="h-screen w-screen bg-amber-50 p-20 snap-start flex place-items-center justify-center">
                <div className=" h-3/4 w-3/4 bg-purple-200 rounded-3xl grid grid-cols-3  ">
                    <div className="h-300 w-300 bg-cyan-100 m-5"> item 1 </div>
                    <div className="h-300 w-300 bg-cyan-100 m-5"> item 2 </div>
                    <div className="h-300 w-300 bg-cyan-100 m-5"> item 3 </div>
                    
                </div>
            </section>

            <section className="h-screen w-screen bg-green-300 p-20 snap-start ">
                <h2> Jump to contact page </h2>
            </section>
    
        </section>
    )
}

export default Home ;