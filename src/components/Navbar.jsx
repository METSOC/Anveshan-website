import React from 'react'
import {Link} from 'react-router-dom'
import Anveshan_Logo from '../../public/AnvLogo.svg'
import { useState } from 'react';
import { Menu,X } from 'lucide-react';
import '../App.css'
const Navbar = () => {
    const [isOpen, setIsOpen]=useState(false);

    const toggleNavbar=()=>{
        setIsOpen(!isOpen);
    }

    return (
        <div className='nav md:bg-transparent fixed  z-10 w-100%  m-auto top-0 left-0  right-0'>
            <div className=' bg-transparent pt-6 flex justify-evenly'>
        <div className=' w-100  flex flex-row items-center  justify-around rounded-full  '>
            <img  src={Anveshan_Logo} alt='Anveshan_Logo' className=' w-10 h-auto mr-10 '></img>
           
            <div className="hidden md:flex flex-row items-center   bg-black h-[50px] w-[700px] rounded-full gap-6 md:gap-20 text-white font-jost text-xl font-bold	px-8 lg: fle items bg-center justify-evenly">
                <Link to="/"><button className='hover:text-orange '>Home</button></Link>
                <Link to="/events#events"><button className='hover:text-orange'>Events</button></Link>
                <Link to="/about#about"> <button className='hover:text-orange'>About</button></Link>
                <Link to="/contact"><button className='hover:text-orange'>Contact</button></Link>
            </div>
            
            <button className='w-22 h-auto  bg-white text-black rounded-full text-md md:text-xl font-jost font-semibold md:flex hidden ml-10 p-4'>get started</button>
        </div>
        <div className='md:hidden'>
       <button className='button' onClick={toggleNavbar}>{isOpen?<X/>:<Menu/>}</button>
        </div>
        </div>
        {isOpen && (
            <div className='text-white font-jost flex flex-col  font-semibold basis-full items-center md:hidden'>
             <Link to="/"><button className='hover:text-orange py-3 '>Home</button></Link>
                <Link to="/events#events"><button className='hover:text-orange py-3'>Events</button></Link>
                <Link to="/about#about"> <button className='hover:text-orange py-3'>About</button></Link>
                <Link to="/contact#contact"><button className='hover:text-orange py-3'>Contact</button></Link>
            </div>
        )}
       

        </div>
     
        
    )
}
export default Navbar