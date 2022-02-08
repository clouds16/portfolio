import React , {useState, useEffect , useContext} from 'react' 
import emailjs , { init } from '@emailjs/browser';
import apiKey from './emailkey'
import './home.css'

function Contact() {

    init("user_5kqJcXY0OCb6pE936pQR9");

    let User_ID=   'user_5kqJcXY0OCb6pE936pQR9'
    let Access_Token ='f478f849b1d2aa8b86fc4fee4289a4b0';
    let ServiceID = 'service_8qupk3k'
    let TemplateID = 'template_one'


    let [email, setEmail] = useState("")
    let [name, setName] = useState('')
    let [message , setMessage] = useState('')

    let submitForm = {
        name : name,
        message : message,
        email : email,
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default refresh by the browser

        emailjs.send(ServiceID , TemplateID , submitForm , User_ID )
        .then((result) => {
        alert("Message Successfully Sent, I will get back to you shortly", result.text);
        },
        (error) => {
        alert("An error occurred, Please try again", error.text);
        });
        };


    return(
        <section className="h-screen w-screen bg-gradient-to-b from-indigo-900 to-neutral-900">
            <div className="antialiased bg-gradient-to-b from-indigo-900 to-neutral-900">
                <div className="flex w-full min-h-screen justify-center items-center">
                    <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 border-2 border-white w-full max-w-4xl p-5 sm:p-8 rounded-lg shadow-lg text-white overflow-hidden">
                    <div className="flex flex-col md:flex-1 space-y-8 justify-between">
                        <div>
                        <h1 className="font-bold text-4xl tracking-wide">Get in Touch </h1>
                        <p className="pt-2 text-green-100 text-sm"></p>
                        </div>
                        <div className="flex flex-col space-y-4 sm:space-y-6">
                        <div className="inline-flex space-x-2 items-center">
                            <ion-icon name="call" className="text-green-300 text-xl"></ion-icon>
                            <span>(805) 717-7738</span>
                        </div>
                        <div className="inline-flex space-x-2 items-center">
                            <ion-icon name="mail" className="text-green-300 text-xl"></ion-icon>
                            <span> hect16@gmail.com </span>
                        </div>
                        <div className="inline-flex space-x-2 items-center">
                            <ion-icon name="location" className="text-green-300 text-xl"></ion-icon>
                            <span> Santa Barbara, CA</span>
                        </div>
                        <div className="inline-flex space-x-2 items-center">
                            <ion-icon name="location" className="text-green-300 text-xl"></ion-icon>
                            <span> hector-alvarez-toledo , LinkedIn</span>
                        </div>

                        <div class="wrapper">
                            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" ></link>
                            <div class="icon facebook">
                                <div class="tooltip">Facebook</div>
                                <span><i class="fab fa-facebook-f"></i></span>
                            </div>
                            <div class="icon twitter">
                                <div class="tooltip">Twitter</div>
                                <span><i class="fab fa-twitter"></i></span>
                            </div>
                            <div class="icon instagram">
                                <div class="tooltip">Instagram</div>
                                <span><i class="fab fa-instagram"></i></span>
                            </div>
                            <div class="icon github">
                                <div class="tooltip">Github</div>
                                <span><i class="fab fa-github"></i></span>
                            </div>
                            <div class="icon youtube">
                                <div class="tooltip">Youtube</div>
                                <span><i class="fab fa-youtube"></i></span>
                            </div>
                            </div>

                        </div>
                        <div className="flex space-x-4 text-lg">
                        <a href="#">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                        </div>
                    </div>
                    <div className="relative" >
                        <div className="absolute invisible md:visible z-0 w-40 h-40 bg-green-400 rounded-full -right-28 -top-28"></div>
                        <div className="absolute invisible md:visible z-0 w-40 h-40 bg-green-400 rounded-full -left-28 -bottom-16"></div>
                        <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-full">
                        <form className="flex flex-col space-y-4">
                            <div>
                            <label for="" className="text-sm">Your Name</label>
                            <input  onChange={ (e) => { setName(e.target.value); console.log(name) } } type="text" placeholder="Name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"/>
                            </div>
                            <div>
                            <label for="" className="text-sm">Your Email</label>
                            <input onChange={ (e) => {setEmail(e.target.value) ; console.log(email) }} type="email" placeholder="Email" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"/>
                            </div>
                            <div>
                            <label for="" className="text-sm">Your Message</label>
                            <textarea onChange={ e => setMessage(e.target.value)} type="email" placeholder="Message" rows="4" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"></textarea>
                            </div>
                            <button onClick={handleSubmit} className="inline-block self-end bg-green-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm" onSubmit={handleSubmit}>Send Message</button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact ;