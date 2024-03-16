import React from 'react'
import { Route,Routes,Link } from 'react-router-dom'
const Navbar = () => {
  return (

    <div className="flex flex-row items-center justify-center bg-[#1B1B1B] w-[1000px] h-[50px] rounded-full gap-20  text-white font-jost ">
   
    <Link to="/"><button className='hover:text-orange  '>Home</button></Link>
    <Link to="/"><button className='hover:text-orange'   >  Events
</button></Link>
  <Link tp="/">  <button className='hover:text-orange'>About  us</button></Link>
 <Link to="/">   <button className='hover:text-orange'> Contact us
</button></Link>
  
  
    </div>
  )
}

export default Navbar
