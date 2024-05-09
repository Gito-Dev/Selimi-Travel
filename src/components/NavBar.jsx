import React , {useState} from 'react'
import { MdModeOfTravel , MdOutlineTravelExplore } from "react-icons/md";
import { Link } from 'react-router-dom';


function NavBar() {
 
    const [nav, setNav] = useState (false)

    const handelNav = () => {
      setNav(!nav)
    }

    const closeNav = () => {
      setNav(false);
    };

  return (
    <div className='text-white items-center h-24 max-w-[1240px] px-4 mx-auto flex justify-between'>
     
      <h1 id="hero" className='w-full text-3xl font-bold text-[white]'>MFC PDF</h1>
      
      
       <ul className='hidden md:flex'>
        <Link to="/" className='p-4 transition-transform duration-300 ease-in-out transform hover:scale-110  hover:text-[#676767]'><li>Home</li></Link>
        <Link to="/about" className='p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-[#676767] '><li>About</li></Link>
        <Link to="/pdf" className='p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-[#676767] '><li>PDF</li></Link>
        <Link to="/contact" className='p-4 transition-transform duration-300 ease-in-out transform hover:scale-110  hover:text-[#676767]'><li>Services</li></Link>
       </ul>

       {/* menu burger */}
      <div onClick={handelNav} className='block md:hidden'>
        {nav ? <MdModeOfTravel size={25 } /> :   <MdOutlineTravelExplore size={25 } /> }
      </div>


      {/*  mobile styling */}
      <div className={nav ? ' fixed left-0 top-0 w-[60%] border-r border-r-[white] h-full bg-[black]' : 'fixed left-[-100%]' } >
       
        <h1 id="hero" className='w-full text-3xl font-bold text-[white] m-4'>MFC PDF</h1>

        <ul className=' p-1'>
         <Link to="/" onClick={closeNav}><li className='p-4 border-b border-b-[white] hover:text-[#676767] '>Home</li></Link>
         <Link to="/about" onClick={closeNav}><li className='p-4 border-b border-b-[white] hover:text-[#676767]'>About</li></Link>
         <Link to="/pdf" onClick={closeNav}><li className='p-4 border-b border-b-[white] hover:text-[#676767] '>Services</li></Link>
         <Link to="/contact" onClick={closeNav}><li className='p-4 border-b border-b-[white] hover:text-[#676767] '>Contact</li></Link>
        </ul>

      </div>



    </div>
  )
}

export default NavBar