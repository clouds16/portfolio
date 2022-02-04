import React , {useState, useEffect , useContext} from 'react' 
import backend from '../assets/backend.jpeg'
import database from '../assets/database.png'
import frontend from '../assets/frontend.png'
import language from '../assets/languages.jpeg'
import cloudtech from '../assets/cloudtech.jpeg'
import agile from '../assets/agile.jpeg'
import Comet from  './components/comettrail'
import Footer from './components/footer'

function About() {
    function printOut(){
        console.log("Button work")
    }

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
        <section className="snap-y snap-mandatory overflow-scroll h-screen w-screen " id="aboutme" >

            <section className="h-screen w-screen bg-gradient-to-b from-indigo-900 to-neutral-900 p-20 snap-start  flex place-items-center justify-center ">
                <div className="flex-1 h-3/4 w-1/3 rounded-3xl flex flex-col justify-center place-items-center p-5 text-white " > 
                    <div className="flex-1 h-full w-full overflow-y-hidden text-white flex place-items-center  justify-center">
                      
                        <img className="h-full w-auto rounded-full" src={require('../assets/selfpic.jpeg')} />
                        
                        
                    </div>
                    
                    <div className="flex-2 overflow-scroll ">
                        <h2 className="font-serif text-5xl m-4">About me </h2>
                        <p className="m-3">
                            I graduated with a Bachelors degree in Mechanical Engineering from University of California, Irvine in 2018. While in this program, I
                            learned programming principles using languages such as Python, Matlab and C#. The purpose of learning programming as a Mechanical Engineer
                            was to learn digital controls and robotics principles, data analysis, and general engineering problem solving. Fairly late into my Engineering 
                            program, I realized that I had a passion for Programming.
                        </p>

                        <p className="m-3"> 
                            In my professional experience, I worked as a mechanical engineer, focused on Design and prototyping. Over the next few years, I learned 
                            more about control systems, and machine programming with PLC ladder logic. Throught this experience, I taught myself digital control principles
                            and digital logic. I tried to keep my passion for programming alive, using data science principles (in Python) to collect and analyze machine data. 
                        </p>

                        <p className="m-3">
                            Over the next few years I would also keep myself active off work by taking Udemy courses online. I have always had a passion for education, and this 
                            platform was a gream means to continue to pick up new skills. I started by learning C#, and learning how to use the unity engine to make games. Using my 
                            skills in CAD modeling, I taught myself to make 3D models using unity, and create game assets. Through this I programmed a few games. As, my interest in 
                            programming grew more and more, i began takign more courses on other languages, including advanced Python and JavaScript classes, react, node, and .net courses.
                        </p>

                        <p className="m-3">
                            At the start of the pandemic, I had ultimately decided that it was a great time to go back to school and pursue higher education and my passion in programming. 
                            My workload had significantly decreased, and like many, I had to work from home for a period of a few months. I enrolled in a Software Development program and 
                            began my official journey into the world of software. I have since graduated in December of 2021, with a 4.0 GPA. 
                            Through my program, I refined my knowledge of languages such as JavaScript, and Python, while also learning new ones such as TypeScript and PHP. I picked up mordern
                            technologies, such as FrontEnd frameworks such as React Angular and Ionic, and BackEnd Technologies such as NodeJS and RESTAPI , Databases such as SQL, PostGres, and MongoDB. 
                            Additionally, I learned cloud computing principles using AWS and IaC technologies such as Ansible. CI/CD principles and methologies, along with technologies such as Git, Jenkins, Docker and Kubernetes.
                            Software Development Agile principles and frameworks of such methodologies such as Scrum and Kanban.
                        </p>
                    </div>

                    
                </div>
            </section>

            <section className="h-screen w-screen bg-gradient-to-b from-indigo-900 to-neutral-900 p-20 snap-start flex place-items-center justify-center " id="skills">
                <div className="h-full w-full flex flex-col place-items-center justify-center sm:h-auto overflow-scroll">
                    <div className="font-sans text-4xl text-white"> Skills </div>
                    <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-gap-2 md:grid-gap-5 p-5 " > 
                    {
                    skills.map( (item)=> {
                        return (
                            <div className="h-5/6 w-5/6 flex flex-col grow flex-wrap place-items-center justify-center bg-white p-2 m-3 rounded-3xl shadow-2xl overflow-y-hidden hover:scale-125 hover:transition-transform hover:bg-amber-400 hover:text-white" id="card">
                                <div className="flex-1 h-full w-full  overflow-y-hidden flex flex-col justify-center place-items-center" >
                                    <h2 className=" font-serif text-2xl">{item.title}</h2>
                                    <h2 className= "font-serif text-base text-white">{item.detail}</h2>
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


            <section className="h-screen bg-gradient-to-b from-indigo-900 to-neutral-900 p-20 snap-start  flex place-items-center justify-center overflow-y-hidden " id="timeline">
                <div class="min-h-screen flex items-center justify-center overflow-scroll ">
                    <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2">
                        <div class="flex flex-row-reverse md:contents">
                        <div class="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-gray-300">
                            <h3 class="font-semibold text-xl mb-1 text-white">2018</h3>
                            <p class="text-white">Graduated with a Bachelors in Mechanical Engineering. Began working in Santa Barbara Public Works as a Civil Engineer Tech</p>
                        </div>

                        <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div class="h-full w-6 flex items-center justify-center">
                            <div class="h-full w-0.5 bg-gray-100 pointer-events-none"></div>
                            </div>

                            <div class="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-600 rounded-full bg-gray-100 shadow"></div>
                        </div>
                        </div>

                        <div class="flex md:contents">
                        <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div class="h-full w-6 flex items-center justify-center">
                            <div class="h-full w-0.5 bg-gray-100 pointer-events-none"></div>
                            </div>

                            <div class="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-600 rounded-full bg-gray-100 shadow"></div>
                        </div>

                        <div class="w-full col-start-6 col-end-10 my-4 mr-auto p-4 border border-gray-300 rounded-xl">
                            <h3 class="font-semibold text-xl mb-1 text-white">2019</h3>
                            <p class="text-white">Began working as a Mechanical/Design Engineer at North American Fire Hose</p>
                        </div>
                        </div>

                        <div class="flex flex-row-reverse md:contents">
                        <div class="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-gray-300">
                            <h3 class="font-semibold text-xl mb-1 text-white">2020</h3>
                            <p class="text-white">Was promoted to Manufacturing Engineer with Managerial responsibilties. Began Masters Program in Software Development in late 2020</p>
                        </div>

                        <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div class="h-full w-6 flex items-center justify-center">
                            <div class="h-full w-0.5 bg-gray-100 pointer-events-none"></div>
                            </div>

                            <div class="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-600 rounded-full bg-gray-100 shadow"></div>
                        </div>
                        </div>

                        <div class="flex md:contents">
                        <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div class="h-full w-6 flex items-center justify-center">
                            <div class="h-full w-0.5 bg-gray-100 pointer-events-none"></div>
                            </div>

                            <div class="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-600 rounded-full bg-gray-100 shadow"></div>
                        </div>

                        <div class="w-full col-start-6 col-end-10 my-4 mr-auto p-4 border border-gray-300 rounded-xl">
                            <h3 class="font-semibold text-xl mb-1 text-white">2021</h3>
                            <p class="text-white"> Left Manufacturing Engineer position to finish masters program at an accelerated rate. Graduated in December of 2021</p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-screen bg-gradient-to-b from-indigo-900 to-neutral-900 p-20 snap-start flex flex-col place-items-center justify-center" id="education">
                <h2 className="text-white text-6xl font-mono"> Education </h2>

                <div className="h-4/5 w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white overflow-scroll scroll-m-0">
                    <div className="m-5 card rounded-lg flex flex-col">
                        <div className='flex-1 flex flex-col place-items-center justify-center' id="text">
                            <h3 className=" text-3xl font-bold"> Santa Barbara City College </h3>
                            <h2 className="font-medium"> Associates Degrees in Engineering, Math, Physics </h2>
                            <h2 className="italic"> August 2012 - June 2015 </h2>
                            <h2 className="font-medium"> Active in LeaderShip groups SHPE, and Robotics Club</h2>
                        </div>
                        
                        <div className="flex-1 flex place-items-center justify-center overflow-y-hidden">
                            <img className="h-full w-auto rounded-full" src={require('../assets/sbcc.jpeg')} />
                        </div>
                    </div>
                    
                    
                    <div className="m-5 card  rounded-lg flex flex-col">
                        <div className='flex-1 flex flex-col place-items-center justify-center' id="text">
                            <h3 className=" text-3xl font-bold"> University of California, Irvine  </h3>
                            <h2 className="font-medium"> Bachelors of Science, Mechanical Engineering </h2>
                            <h2 className="italic"> September 2015 - September 2018</h2>
                            <h2 className="font-medium"> Active in LeaderShip groups SHPE, UAV Design and Electric Vehicle Groups</h2>
                        </div>
                        
                        <div className="flex-1 flex place-items-center justify-center overflow-y-hidden">
                            <img className="h-full w-auto rounded-full" src={require('../assets/ucilogo.jpeg')} />
                        </div>
                    </div>
                    
                    <div className="m-5 card rounded-lg flex flex-col">
                        <div className='flex-1 flex flex-col place-items-center justify-center' id="text">
                            <h3 className=" text-3xl font-bold"> Maryville University of Saint Louis  </h3>
                            <h2 className="font-medium"> Masters of Science, Software Development</h2>
                            <h2 className="italic"> September 2020 - December 2021 </h2>
                            <h2 className="font-medium"> Graduated with Honors, GPA : 4.0</h2>
                        </div>
                        
                        <div className="flex-1 flex place-items-center justify-center overflow-y-hidden">
                            <img className="h-full w-auto rounded-full" src={require('../assets/maryville.jpeg')} />
                        </div>
                    </div>

                </div>
            </section>
            
       
            
        </section>
        
    )
}

export default About ;


// <div className=" flex-1 bg-blue-100 h-screen  flex flex-col"> 
// <button className="" onClick={printOut}> Jump To Education </button>
// <button> Jump To Work History </button>
// <a href="#work-experience" > Jump To work experience</a>
// <button> Jump To Skills  </button>
// <button> Jump Resume  </button>
// </div>


{/* <section className="h-screen bg-red-300 p-20 snap-start " id="work-experience">
<div className="">Work Experience</div> */}
{/* <div className="h-full grid grid-rows-3 gap-4">
    

    <div className="m-5 card bg-red-100 border-r-8 rounded-lg text-left">
        <h2 className=""> Santa Barbara Public Works </h2>
        <h3> Santa Barbara, CA </h3>
        <h2> August 2015 - August 2018 (Part Time) </h2>
        <h2> Civil Engineering/Tech  </h2>
        <ul className="p-5">
            <li className="list-disc"> Item Item Item</li>
            <li className="list-disc"> Item Item Item</li>
            <li className="list-disc"> Item Item Item</li> 
        </ul>
    </div>

    <div className="m-5 card bg-red-100 border-r-8 rounded-lg text-left">
        <h2> Santa Barbara Public Works </h2>
        <h3> Santa Barbara, CA </h3>
        <h2> August 2015 - August 2018 (Part Time) </h2>
        <h2> Civil Engineering/Tech  </h2>
        <ul className="p-5">
            <li className="list-disc"> Item Item Item</li>
            <li className="list-disc"> Item Item Item</li>
            <li className="list-disc"> Item Item Item</li> 
        </ul>
    </div>


    <div className="m-5 card bg-red-100 border-r-8 rounded-lg text-left">
        <h2> North American Fire Hose Corp. </h2>
        <h2> Santa Maria, CA</h2>
        <h3> March 2019 - May 2021 </h3>
        <h2> Mechanical/ Manufacturing Engineer</h2>
       
        <ul className="p-5">
            <li className="list-disc"> Item Item Item</li>
            <li className="list-disc"> Item Item Item</li>
            <li className="list-disc"> Item Item Item</li> 
        </ul>
    </div>

</div>
</section> */}