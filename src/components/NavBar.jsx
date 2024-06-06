import React, {useState} from 'react';
import { MdModeOfTravel , MdOutlineTravelExplore } from "react-icons/md";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='w-full h-[90px] bg-black'>
      <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div>
          <h1 className='text-white text-3xl bold'>Selimi Travel</h1>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex'>
          <ul className='flex text-white items-center'>
          <li className="mr-4 hover:text-gray-400">
            <a href="#about">Rreth Nesh</a>
          </li>
          <li className="mr-4 hover:text-gray-400">
            <a href="#services">Sherbimet</a>
          </li>
          <li className="mr-4 hover:text-gray-400">
            <a href="#contact">Kontakt</a>
          </li>

           <button 
           type="button" 
           className="text-black hover:text-white hover:border-white border-2 bg-white hover:bg-black text-base font-medium rounded-lg px-5 py-2.5 me-2 mb-2" 
           onClick={() => window.location.href='tel:+0692732026'}>
           Telefononi
           </button>

          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <MdModeOfTravel size={30} className='text-white' /> : <MdOutlineTravelExplore size={30} className='text-white' />}
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center ' :  'hidden md:hidden'}>
          
          <ul className='pb-5'>
          <li className='text-2xl pb-4 hover:text-gray-400'>
           <a href="#about">Rreth Nesh</a>
          </li>
          <li className='text-2xl pb-4 hover:text-gray-400'>
           <a href="#services">Sherbimet</a>
          </li>
          <li className='text-2xl pb-4 hover:text-gray-400'>
           <a href="#kontakti">Kontakti</a>
          </li>

            <button type="button" className="text-black hover:text-white  bg-white hover:bg-black hover:border-white border-2   rounded-lg text-base font-medium px-5 py-2.5 me-2 mb-2"  onClick={() => window.location.href='tel:+0692732026'}>Telefononi</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;  
