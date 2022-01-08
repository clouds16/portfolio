import React , {useState, useEffect , useContext} from 'react' 


function Contact() {
    return(
        <section className="h-screen w-screen bg-red-500">
            <div class="antialiased bg-gray-100">
                <div class="flex w-full min-h-screen justify-center items-center">
                    <div class="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-green-700 w-full max-w-4xl p-5 sm:p-8 rounded-lg shadow-lg text-white overflow-hidden">
                    <div class="flex flex-col md:flex-1 space-y-8 justify-between">
                        <div>
                        <h1 class="font-bold text-4xl tracking-wide">Get in Touch </h1>
                        <p class="pt-2 text-green-100 text-sm"></p>
                        </div>
                        <div class="flex flex-col space-y-4 sm:space-y-6">
                        <div class="inline-flex space-x-2 items-center">
                            <ion-icon name="call" class="text-green-300 text-xl"></ion-icon>
                            <span>(805) 717-7738</span>
                        </div>
                        <div class="inline-flex space-x-2 items-center">
                            <ion-icon name="mail" class="text-green-300 text-xl"></ion-icon>
                            <span> hect16@gmail.com </span>
                        </div>
                        <div class="inline-flex space-x-2 items-center">
                            <ion-icon name="location" class="text-green-300 text-xl"></ion-icon>
                            <span> Santa Barbara, CA</span>
                        </div>
                        <div class="inline-flex space-x-2 items-center">
                            <ion-icon name="location" class="text-green-300 text-xl"></ion-icon>
                            <span> hector-alvarez-toledo , LinkedIn</span>
                        </div>
                        </div>
                        <div class="flex space-x-4 text-lg">
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
                    <div class="relative">
                        <div class="absolute invisible md:visible z-0 w-40 h-40 bg-green-400 rounded-full -right-28 -top-28"></div>
                        <div class="absolute invisible md:visible z-0 w-40 h-40 bg-green-400 rounded-full -left-28 -bottom-16"></div>
                        <div class="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-full">
                        <form class="flex flex-col space-y-4">
                            <div>
                            <label for="" class="text-sm">Your Name</label>
                            <input type="text" placeholder="Name" class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"/>
                            </div>
                            <div>
                            <label for="" class="text-sm">Your Email</label>
                            <input type="email" placeholder="Email" class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"/>
                            </div>
                            <div>
                            <label for="" class="text-sm">Your Message</label>
                            <textarea type="email" placeholder="Message" rows="4" class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"></textarea>
                            </div>
                            <button class="inline-block self-end bg-green-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">Send Message</button>
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