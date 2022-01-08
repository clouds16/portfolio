import React , {useState, useEffect , useContext} from 'react' 


function About() {
    function printOut(){
        console.log("Button work")
    }

    return(
        <section className="snap-y snap-mandatory overflow-scroll h-screen w-screen " id="aboutme" >

            <section className="h-screen bg-amber-50 p-20 snap-start  flex place-items-center justify-center ">
                <div className="h-3/4 w-5/6 bg-gray-50 rounded-3xl flex justify-center place-items-center flex-col p-5 " > 
                    <h2 className="font-serif text-5xl m-4">About me </h2>
                    <p>
                    I graduated with a Bachelors degree in Mechanical Engineering from University of California, Irvine in 2018.

                    <br/>
                    I 

                    </p>
                </div>
            </section>

            <section className="h-screen bg-amber-50 p-20 snap-start  flex place-items-center justify-center " id="timeline">
                <div class="min-h-screen flex items-center justify-center">
                    <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2">
                        <div class="flex flex-row-reverse md:contents">
                        <div class="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-gray-300">
                            <h3 class="font-semibold text-xl mb-1 text-gray-900">2018</h3>
                            <p class="text-gray-600">Graduated with a Bachelors in Mechanical Engineering. Began working in Santa Barbara Public Works as a Civil Engineer Tech</p>
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
                            <h3 class="font-semibold text-xl mb-1 text-gray-900">2019</h3>
                            <p class="text-gray-600">Began working as a Mechanical/Design Engineer at North American Fire Hose</p>
                        </div>
                        </div>

                        <div class="flex flex-row-reverse md:contents">
                        <div class="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-gray-300">
                            <h3 class="font-semibold text-xl mb-1 text-gray-900">2020</h3>
                            <p class="text-gray-600">Was promoted to Manufacturing Engineer with Managerial responsibilties. Began Masters Program in Software Development in late 2020</p>
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
                            <h3 class="font-semibold text-xl mb-1 text-gray-900">2021</h3>
                            <p class="text-gray-600"> Left Manufacturing Engineer position to finish masters program at an accelerated rate. Graduated in December of 2021</p>
                        </div>
                        </div>
                    </div>
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
            



            <section className="h-screen bg-green-300 p-20 snap-start ">
                

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