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
            image : "image 2", 
            link: "require('../assets/weightloss.jpeg')", 
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
            image : "image 3", 
            link: "https://image.cnbcfm.com/api/v1/image/106984655-1638720074358-gettyimages-1294303237-01_jan_01_005.jpeg?v=1641825196&w=929&h=523",
            description: "Crypto Purchasing and Selling Application.",
        },
        {
            name : "Ionic Native Weather App",
            image : "image 3", 
            link: "https://assets.thehansindia.com/h-upload/2021/08/17/1102463-pain.webp",
            description: "Wether and Location Application using React Native, NodeJS backend",
        },
        {
            name : "SQL Database",
            image : "image 3", 
            link: "https://dv-website.s3.amazonaws.com/uploads/2020/11/kf_graphdbupdates_011221.jpg",
            description: "This is a SQL Database created for a potential Game server. The Database was made to show proper use of DataBase Design using Private/Foreight key principles, Table relationships (one to one, many to one)"
        }
    ]


    return(
        <section className="h-screen w-screen bg-gradient-to-b from-indigo-900 to-neutral-900 flex justify-center place-items-center ">
            <div className="h-4/5 w-5/6 flex justify-center place-items-center " >
                <div className="grid grid-cols-3 gap-5"> 
                { projects.map( (item) => {
                    return (

                    <div className="flex flex-col h-4/5 w-4/5 items-center bg-gray-100  m-4 rounded-2xl ">
                        <img src={item.image} className="fill "></img>
                        <div className="flex-5 "> 
                            <h2 className="">  {item.name} </h2>
                            <h3> {item.description} </h3>
                            
                        </div>
                        <button className="flex-1 bg-emerald-500 p-3 m-2 rounded-xl border-2 "> <a href={item.link}> Open Project on GitHub</a></button>
                        
                    
                    </div> 
                    )})
                }
            
                </div>

            </div>
            

        </section>
    )
}

export default Projects ;


