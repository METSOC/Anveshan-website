import React from 'react'
import { Route,Routes,Link } from 'react-router-dom'
import Anveshan_Logo from '../../../public/Anveshan_Logo.png'
import Events from '../../pages/Events'
const Navbar = () => {
  return (


    <div className=' w-[1100px]  flex flex-row items-center  justify-around rounded-full  '>
<img src={Anveshan_Logo} alt='Anveshan_Logo' className=' w-[50px] h-auto '></img>
    <div className="flex flex-row items-center justify-center bg-[#1B1B1B] w-[600px] h-[50px] rounded-full gap-20  text-white font-jost text-xl">
   
    <Link to="/"><button className='hover:text-orange  '>Home</button></Link>
    <Link to="Events"><button className='hover:text-orange'   >  Events
</button></Link>
  <Link tp="/">  <button className='hover:text-orange'>About  us</button></Link>
 <Link to="/">   <button className='hover:text-orange'> Contact us
</button></Link>
  

   
  
</div>
<button className='w-[125px] h-[40px] bg-white text-black rounded-full text-xl font-jost  '>get started</button>
    </div>
  )
}

export default Navbar
