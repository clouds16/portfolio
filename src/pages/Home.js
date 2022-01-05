import React , {useState, useEffect , useContext} from 'react' 


function Home() {
    return(
        <section className="snap-y snap-mandatory overflow-scroll h-screen w-screen  ">

            <section className="h-screen w-screen bg-blue-400 p-20 snap-start flex place-items-center justify-center">
                <div className=" h-1/2 w-3/4 bg-purple-200 rounded-3xl flex justify-center place-items-center ">
                    <div className="flex-1 m-4 flex flex-col "> Hello </div>
                    <div className="flex-1 m-4"> hello 2</div>
                </div>
            </section>
        

            <section className="h-screen w-screen font-sansbg-red-300 p-20 snap-start ">
                <h2 className=" font-sans"> Skills </h2>
            </section>


            <section className="h-screen w-screen bg-green-300 p-20 snap-start ">
                <h2> Jump to Projects </h2>
            </section>

            <section className="h-screen w-screen bg-green-300 p-20 snap-start ">
                <h2> Jump to contact page </h2>
            </section>
    
        </section>
    )
}

export default Home ;