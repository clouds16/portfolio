import React , {useState, useEffect , useContext} from 'react' 
import weight from '../assets/weightloss.jpeg'
import crypto from '../assets/crypto.jpeg'


function Projects() {

    const projects = [
        {
            name : "University Capstone: Crypto Mock Purchasing ",
            image : "https://image.cnbcfm.com/api/v1/image/106984655-1638720074358-gettyimages-1294303237-01_jan_01_005.jpeg?v=1641825196&w=929&h=523", 
            github: "https://github.com/clouds16/crypto-app",
            project: "https://cranky-villani-fd5375.netlify.app/",
            description: "Crypto Purchasing and Selling Application.",
        },
        {
            name : "University Advanced Topics Project",
            image : "https://www.boomfit.com/img/leoblog/b/1/22/lg-b-artigo%20apps.jpg", 
            github: "https://github.com/clouds16/capstone-mobileapp",
            description : "Fitness Application, Built to keep track of Gym Statistics and have a virtual Trainer. Built With React-Native, NodeJS , Express, MongoDB, Deployed using AWS Ubuntu server."
        }, 
   
        {
            name : "Pizza Ordering System",
            image : "https://saboryestilo.com.mx/wp-content/uploads/elementor/thumbs/masa-para-pizza-3-1-os3aa3ck56334eoe88d8hkem59xt1jziomikxlzx34.jpg", 
            github: "https://github.com/clouds16/heroku-pizza-app",
            description: "Application Built For WebApps Class. Pizza ordering system such as Dominoes. Application built using Flask, CSS , HTML, JS. Purpose of the Project was to display knowledge of how to properly use OOP and create a website with proprietary class based system."
        },
      
       
        {
            name : "Python Hand Tracking Machine Vision Program",
            image : "https://imageio.forbes.com/specials-images/imageserve/5da005827fa7e00007cb3db4/What-is-Machine-Vision-And-How-Is-It-Used-In-Business-Today-/960x0.jpg?fit=bounds&format=jpg&width=960", 
            github: "https://github.com/clouds16/handtracking",
            description: "Python hand tracking program, using computer vision program OpenCV",
        },
        {
            name : "SQL Database",
            image : "https://dv-website.s3.amazonaws.com/uploads/2020/11/kf_graphdbupdates_011221.jpg", 
            github: "https://github.com/clouds16/sql-db",
            description: "This is a SQL Database created for a potential Game server. The Database was made to show proper use of DataBase Design using Private/Foreight key principles, Table relationships (one to one, many to one)"
        },
        {
            name : "University Capstone: Crypto Mock Purchasing ",
            image : "https://image.cnbcfm.com/api/v1/image/106984655-1638720074358-gettyimages-1294303237-01_jan_01_005.jpeg?v=1641825196&w=929&h=523", 
            github: "https://cranky-villani-fd5375.netlify.app/",
            description: "Crypto Purchasing and Selling Application.",
        }
    ]


    return(
        <section className="h-auto w-screen bg-gradient-to-b from-indigo-900 to-neutral-900 flex justify-center place-items-center ">
            <div className="h-full w-full flex justify-center place-items-center p-10 my-10 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20"> 
                { projects.map( (item) => {
                    return (

                    <div className=" border-2 border-white rounded-2xl p-5 ">
                        <div className='h-3/5 w-full overflow-hidden text-white'>
                            <img src={item.image} className="w-full h-auto text-white"></img>
                        </div>
                        
                        <div className="h-1/5 w-full overflow-hidden "> 
                            <h2 className="text-white">  {item.name} </h2>
                            <h3 className="text-white"> {item.description} </h3>
                        </div>
                        
                        <div className="h-1/5 w-full flex flex-col place-items-center justify-center">
                            <button className="m-2 h-full w-full flex-1 text-white border-2   border-slate-100 hover:text-black hover:bg-slate-100 hover:border-black overflow-hidden "> <a href={item.github}> Open Project on GitHub</a></button>
                            <button className="m-2 h-ful w-full flex-1 text-white border-2   border-slate-100 hover:text-black hover:bg-slate-100 hover:border-black overflow-hidden "> <a href={item.project}> Open Project</a></button>
                        </div>
                    
                    </div> 
                    )})
                }
            
                </div>

            </div>
            

        </section>
    )
}

export default Projects ;


