import React from 'react'
import Lottie from "lottie-react";
import animation from '../../public/lottie.json'
import bgImage from "../../public/spark.png"
import TimelinePage from './Timeline';
import Navbar from '../components/Navbar';

const Events = () => {
  return (
    <>
      <Navbar/>
      <div className="relative bg-cover bg-center h-screen flex items-center" style={{backgroundImage: `url(${bgImage})`}}>

      <section className="grid mx-auto h-[90vh] px-4  sm:px-6 lg:px-8 max-w-full">
        <p className='text-center text-white text-5xl font-extrabold top-4'>Event <span className='text-orange text-5xl -ml-4'>s</span> </p>
        <p className='text-center text-white'><a href='/'>Home</a> /Events</p>
        <div className="grid mx-auto max-w-screen-xl px-4 py-8  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
             <p className="text-5xl text-white font-bold mb-16">
             <span className='text-orange text-5xl'>3</span> Days
            </p>
            <p className="text-4xl text-white font-bold mb-16">
            <span className='text-orange text-4xl'>9</span> Workshops
            </p>
            <p className="text-5xl text-white font-bold mb-16">
            <span className='text-orange text-5xl'>7</span>  Speakers
            </p>
            <p className="text-xl text-white font-medium">
            [April 12-14, IIT (BHU), Techno-Cultural Fest]
            </p>
          
           <a href="#events">
            <button
                           className="inline-flex items-center justify-centermr-3 font-medium text-center text-black  bg-orange mt-16   px-7 py-3   text-xl leading-snug rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
>Get Brochure
            </button>
            </a>
            <a href="#products">
            <button
                           className="inline-flex items-center justify-centermr-3 font-medium text-center text-white  bg-black mt-16   px-7 py-3   text-xl leading-snug rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-12"
>Guidelines
            </button>
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex" >
          <Lottie animationData={animation}/>   
          </div>
        </div>
      </section>
    </div>
    <TimelinePage/>
   </>
  )
}

export default Events