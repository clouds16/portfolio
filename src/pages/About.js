import React , {useState, useEffect , useContext} from 'react' 


function About() {
    function printOut(){
        console.log("Button work")
    }

    return(
        <section className="snap-y snap-mandatory overflow-scroll h-screen w-screen " id="aboutme" >

            <section className="h-screen bg-amber-50 p-20 snap-start  flex place-items-center justify-center ">
                <div className="h-3/4 w-1/2 bg-gray-50 rounded-3xl flex justify-center place-items-center flex-col p-5 " > 
                    <h2 className="font-serif text-5xl m-4">About me </h2>
                    <p>
                    I am a recent graduate of Masters Program in Softare Development (GPA 4.0).
                    I am a highly motivated software engineer looking to bring my perspective to a company that thrives on presenting their employees with challenges everyday.

                    </p>
                </div>
            </section>

            <section className="h-screen bg-amber-50 p-20 snap-start  flex place-items-center justify-center " id="timeline">
                <div className="h-3/4 w-1/2 bg-gray-50 rounded-3xl flex justify-center place-items-center flex-col " > 
                    <h2 className="font-serif text-5xl"> Timeline </h2>
                    <p>
                        Timeline Items
                    </p>
                </div>
            </section>

            <section className="h-screen bg-gray-200 p-20 snap-start" id="education">
                <h2 className=""> Education </h2>

                <div className="h-full grid grid-cols-2 gap-4">
                    <div className="m-5 card bg-red-100 rounded-lg flex flex-col">
                        <div className='flex-1 flex flex-col place-items-center justify-center' id="text">
                            <h2> University of California, Irvine  </h2>
                            <h3> September 2015 - September 2018</h3>
                            <h2> Bachelors of Science, Mechanical Engineering </h2>
                        </div>
                        
                        <div className="flex-1 flex place-items-center justify-center">
                            <img className="h-full w-auto" src={require('../assets/ucilogo.jpeg')} />
                        </div>
                    </div>
                    
                    <div className="m-5 card bg-red-100 rounded-lg flex flex-col">
                        <div className='flex-1 flex flex-col place-items-center justify-center' id="text">
                            <h2> Maryville University of Saint Louis  </h2>
                            <h3> September 2020 - December 2021 </h3>
                            <h2> Masters of Science, Software Development</h2>
                            <h2> Graduated with Honors, GPA : 4.0</h2>
                        </div>
                        
                        <div className="flex-1 flex place-items-center justify-center">
                            <img className="h-full w-full" src={require('../assets/maryville.jpeg')} />
                        </div>
                    </div>

                </div>
            </section>
            

            <section className="h-screen bg-red-300 p-20 snap-start " id="work-experience">
                <div className="">Work Experience</div>
                <div className="h-full grid grid-rows-3 gap-4">
                    

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
            </section>

            <section className="h-screen bg-green-300 p-20 snap-start ">
                <h2> Skills </h2>
            </section>

            <section className="h-screen bg-purple-200 p-20 snap-start ">
                <h2> Hobbies</h2>
            </section>


            <section className="h-screen bg-amber-100 p-20 snap-start ">
                <h2> Resume</h2>
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