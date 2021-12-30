import React , {useState, useEffect , useContext} from 'react' 


function About() {
    return(
        <section className="snap-y snap-mandatory overflow-scroll h-screen w-screen">
            <section className="h-screen bg-blue-400 p-20 snap-start">
                <h2 className=""> Education </h2>

                <div className="h-full grid grid-cols-2 gap-4">
                    <div className="m-5 card bg-red-100 rounded-lg">
                        <h2> University of California, Irvine  </h2>
                        <h3> September 2015 - September 2018</h3>
                        <h2> Bachelors of Science, Mechanical Engineering </h2>
                        <img className="h-60 w-auto" src={require('../assets/ucilogo.jpeg')} />
                    </div>

                    <div className="m-5 card bg-red-100 border-r-8 rounded-lg">
                        <h2> Maryville University of Saint Louis  </h2>
                        <h3> September 2020 - December 2021 </h3>
                        <h2> Masters of Science, Software Development</h2>
                        <h2> Graduated with Honors, GPA : 4.0</h2>
                        <img className="h-60 w-auto " src={require('../assets/maryville.jpeg')} />
                    </div>

                </div>
            </section>
            

            <section className="h-screen bg-red-300 p-20 snap-start ">
                <div className="">Work Experience</div>
                <div className="h-full grid grid-rows-3 gap-4">
                    

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

            </section>




        </section>
        
    )
}

export default About ;