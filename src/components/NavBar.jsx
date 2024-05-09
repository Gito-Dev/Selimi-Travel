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
            <li className="mr-4">Platform</li>
            <li className="mr-4">Developers</li>
            <li className="mr-4">Community</li>
            <li className="mr-4">About</li>
            <button className='ml-4'>Use Defi</button>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <MdModeOfTravel size={30} className='text-white' /> : <MdOutlineTravelExplore size={30} className='text-white' />}
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center ' : 
    'hidden md:hidden'}>
          <ul>
            <li className='text-2xl pb-4'>Platform</li>
            <li className='text-2xl pb-4'>Developers</li>
            <li className='text-2xl pb-4'>Community</li>
            <li className='text-2xl pb-4'>About</li>
            <button className='m-8'>Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;  
