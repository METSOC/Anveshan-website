import React from 'react'
import {Link} from 'react-router-dom'
import Anveshan_Logo from '../../public/AnvLogo.svg'

const Navbar = () => {
    return (
        <div className='bg-black'>
        <div className=' w-100  flex flex-row items-center  justify-around rounded-full  '>
            <img src={Anveshan_Logo} alt='Anveshan_Logo' className=' w-10 h-auto '></img>
            <div className="flex flex-row items-center justify-center h-[50px] rounded-full gap-6 md:gap-20 text-white font-jost text-xl">
                <Link to="/"><button className='hover:text-orange '>Home</button></Link>
                <Link to="/events#events"><button className='hover:text-orange'>Events</button></Link>
                <Link to="/about#about"> <button className='hover:text-orange'>About</button></Link>
                <Link to="/contact#contact"><button className='hover:text-orange'>Contact</button></Link>
            </div>
            <button className='w-22 h-auto p-2 bg-white text-black rounded-full text-md md:text-xl font-jost  '>Get started</button>
        </div>
        </div>
    )
}
export default Navbar