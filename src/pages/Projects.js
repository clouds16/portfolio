import React , {useState, useEffect , useContext} from 'react' 
import weight from '../assets/weightloss.jpeg'
import crypto from '../assets/crypto.jpeg'


function Projects() {

    const projects = [
        {
            name : "University Capstone Project",
            image : "https://www.boomfit.com/img/leoblog/b/1/22/lg-b-artigo%20apps.jpg", 
            link: "https://github.com/clouds16/capstone-mobileapp",
            description : "Fitness Application, Built to keep track of Gym Statistics and have a virtual Trainer. Built With React-Native, NodeJS , Express, MongoDB, Deployed using AWS Ubuntu server."
        }, 
        {
            name : "Weight Watching App",
            image : "https://static.toiimg.com/photo/71941372.cms", 
            link: "", 
            description: "Application for Weight documentation over time. Built in Ionic Angular"
        }, 
        {
            name : "Pizza Ordering System",
            image : "https://saboryestilo.com.mx/wp-content/uploads/elementor/thumbs/masa-para-pizza-3-1-os3aa3ck56334eoe88d8hkem59xt1jziomikxlzx34.jpg", 
            link: "https://github.com/clouds16/heroku-pizza-app",
            description: "Application Built For WebApps Class. Pizza ordering system such as Dominoes. Application built using Flask, CSS , HTML, JS. Purpose of the Project was to display knowledge of how to properly use OOP and create a website with proprietary class based system."
        },
      
        {
            name : "Cyrpto Mock Purchasing ",
            image : "https://image.cnbcfm.com/api/v1/image/106984655-1638720074358-gettyimages-1294303237-01_jan_01_005.jpeg?v=1641825196&w=929&h=523", 
            link: "",
            description: "Crypto Purchasing and Selling Application.",
        },
        {
            name : "Ionic Native Weather App",
            image : "https://assets.thehansindia.com/h-upload/2021/06/29/1085116-rain.webp", 
            link: "",
            description: "Wether and Location Application using React Native, NodeJS backend",
        },
        {
            name : "SQL Database",
            image : "https://dv-website.s3.amazonaws.com/uploads/2020/11/kf_graphdbupdates_011221.jpg", 
            link: "",
            description: "This is a SQL Database created for a potential Game server. The Database was made to show proper use of DataBase Design using Private/Foreight key principles, Table relationships (one to one, many to one)"
        }
    ]


    return(
        <section className="h-screen w-screen bg-gradient-to-b from-indigo-900 to-neutral-900 flex justify-center place-items-center ">
            <div className="h-4/5 w-5/6 flex justify-center place-items-center overflow-scroll " >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1"> 
                { projects.map( (item) => {
                    return (

                    <div className="flex flex-col h-4/5 w-4/5 items-center bg-indigo-300 rounded-2xl">
                        <div className='h-3/5 w-full overflow-hidden'>
                            <img src={item.image} className="w-full h-auto"></img>
                        </div>
                        
                        <div className="h-1/5 w-full overflow-hidden "> 
                            <h2 className="text-white">  {item.name} </h2>
                            <h3> {item.description} </h3>
                        </div>

                        <button className="h-1/5 w-full text-white border-2  p-3 m-3 border-slate-100 hover:text-black hover:bg-slate-100 hover:border-black overflow-hidden "> <a href={item.link}> Open Project on GitHub</a></button>
                        
                    
                    </div> 
                    )})
                }
            
                </div>

            </div>5
            

        </section>
    )
}

export default Projects ;


