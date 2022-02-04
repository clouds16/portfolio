import React from 'react'
import './footer.css'

function Footer(){
    return (

        <section class="bg-zinc-700 h-auto w-screen flex flex-col sm:flex-row justify-center place-items-center">
            <div className="flex justify-center place-items-center p-3"> 
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <a href="hect16@gmail.com"><i class="fa fa-google google" id="apple"></i></a>
            
                <a href="https://www.github.com/clouds16"> <i class="fa fa-github-square github" id="github"></i></a>
                <a href="https://www.linkedin.com/in/hector-alvarez-toledo/"> <i class="fa fa-linkedin-square linkedin" id="facebook"></i></a>
            
            </div>
 
            <div className="m-2 p-2"> email : hect16@gmail.com</div>
            <div className="m-2 p-2"> Personal Website : 2022  </div>
            <div className="m-2"> </div>
           


            
        </section>

    )
}

export default Footer;

//<a href=""><i class="fa fa-twitter" id="twitter"></i></a>