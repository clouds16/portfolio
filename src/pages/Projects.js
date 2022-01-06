import React , {useState, useEffect , useContext} from 'react' 


function Projects() {

    const projects = [
        {
            name : "Project X",
            image : "image 1"
        }, 
        {
            name : "Project Y",
            image : "image 2"
        }, 
        {
            name : "Project Z",
            image : "image 3"
        },
        {
            name : "Project X",
            image : "image 1"
        }, 
        {
            name : "Project Y",
            image : "image 2"
        }, 
        {
            name : "Project Z",
            image : "image 3"
        },
        {
            name : "Project Z",
            image : "image 3"
        },
        {
            name : "Project Z",
            image : "image 3"
        }
    ]


    return(
        <section className="h-screen w-screen bg-red-100 flex justify-center place-items-center ">
            <div className="h-4/5 w-5/6 flex justify-center place-items-center bg-sky-400" >
                <div className="grid grid-cols-4 gap-5"> 
                { projects.map( (item) => {
                    return (
                    <div className="flex flex-col h-60 w-60 items-center bg-sky-300 m-4 rounded-2xl">
                        <h2 className="flex-1">  {item.name} </h2>
                        <div className="flex-1 "> {item.image} </div>
                    </div> 
                    )})
                }
            
                </div>

            </div>
            

        </section>
    )
}

export default Projects ;


