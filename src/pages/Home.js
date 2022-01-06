import React , {useState, useEffect , useContext} from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Programming from '../assets/homepage.jpeg'
function Home() {

    const skills = [
        {
            title : "Programming Languages",
            detail: "Python, JavaScript/TypeScript , C#, HTML , CSS" ,
            image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zdnet.com%2Feducation%2Fcomputers-tech%2Feasiest-programming-languages-to-learn%2F&psig=AOvVaw3P1IzZ9ykmTpKr4TJZ_Z7i&ust=1641522801068000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjLvI6LnPUCFQAAAAAdAAAAABAD"
        }, 
        {
            title : "Front End Development",
            detail: "Frameworks: ReactJS/ReactNative, Angular (Ionic), Styling:  SCSS , Tailwind" ,
            image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mindinventory.com%2Fblog%2Ftop-front-end-development-tools%2F&psig=AOvVaw2roSlHzlaJ_RrrMYzqQU4T&ust=1641522835048000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjE556LnPUCFQAAAAAdAAAAABAI"
        },
        {
            title : "Back End Development",
            detail: "NodeJS, Express" ,
            image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcodecondo.com%2Fawesome-facts-that-will-make-you-be-a-back-end-developer%2F&psig=AOvVaw2jaB_snhKAudex84LWTx5o&ust=1641522868039000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDEqq6LnPUCFQAAAAAdAAAAABAD"
        }, 
        {
            title : "Databases",
            detail: "MongoDB , DynoDB , SQL , PostGres" ,
            image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.toptal.com%2Fdatabase%2Fdatabase-design-bad-practices&psig=AOvVaw0xBWYLl-tCwyTIRtbbbg7X&ust=1641522890318000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPD4mbqLnPUCFQAAAAAdAAAAABAD"
        }, 
        {
            title : "Cloud Technologies",
            detail: "AWS, Terraform , Jenkins , CI/CD , Docker, Kubernetes , Linux" ,
            image : ""   
        },
        {
            title : "Team Work and Leadership",
            detail: "Git, Github, Agile, Scrum, Kanban" ,
            image : ""
        }
    ]

    return(
        <section className="snap-y snap-mandatory overflow-scroll h-screen w-screen  ">

            <section className="h-screen w-screen bg-amber-50 p-20 snap-start flex place-items-center justify-center">
                <div className="bg-purple-200 rounded-3xl flex justify-center place-items-center ">
                    <div className="flex-1 m-4 flex flex-col "> 
                        <h1 className="text-4xl font-serif justify-left">Welcome </h1>
                        <h2>Meet your new Software Engineer/Developer</h2>
                        <div title="Icons">
                            <button> <FontAwesomeIcon icon={faFacebookF} /></button>
                        </div>
                    </div>

                    <div className="flex-1 m-4" id="Right-image"> 
                        <img src={Programming} className=" rounded-3xl outline-2 border-black shadow-md ring-offset-2" />
                    </div>
                </div>
            </section>
        

            <section className="h-screen w-screen font-sansbg-red-300 p-20 snap-start flex place-items-center justify-center" id="skills">
                <div className="h-4/5 w-4/5 flex flex-col bg-sky-200">
                    <div className="font-sans text-4xl "> Skills </div>
                    <div className="grid grid-cols-3"> 
                    {
                    skills.map( (item)=> {
                        return (
                            <div className="flex flex-col place-items-center justify-center bg-yellow-200 p-2 m-5 rounded-3xl" id="card">
                                <div className="flex-1" >
                                    <h2>{item.title}</h2>
                                    <h2>{item.detail}</h2>
                                </div>
                                <div className="flex-1">
                                    <img src={item.image} />
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