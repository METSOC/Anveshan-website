import React from 'react'
import {Link} from 'react-router-dom'
import Anveshan_Logo from '../../public/AnvLogo.svg'

const Navbar = () => {
    return (
        <div className=' bg-transparent  fixed  z-10 w-100%  m-auto top-0 left-0  right-0'>
            <div className=' bg-transparent pt-6'>
        <div className=' w-100  flex flex-row items-center  justify-around rounded-full   '>
            <img src={Anveshan_Logo} alt='Anveshan_Logo' className=' w-10 h-auto '></img>
            <div className="flex flex-row items-center  justify-evenly bg-black h-[50px] w-[700px] rounded-full gap-6 md:gap-20 text-white font-jost text-xl font-bold	px-8 ">
                <Link to="/"><button className='hover:text-orange '>Home</button></Link>
                <Link to="/events#events"><button className='hover:text-orange'>Events</button></Link>
                <Link to="/about#about"> <button className='hover:text-orange'>About</button></Link>
                <Link to="/contact#contact"><button className='hover:text-orange'>Contact</button></Link>
            </div>
            <button className='w-22 h-auto p-2 bg-white text-black rounded-full text-md md:text-xl font-jost font-semibold '>get started</button>
        </div>
        </div>
        </div>
        
    )
}
export default Navbar