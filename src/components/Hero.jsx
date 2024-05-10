import React from 'react';
import CountUp from 'react-countup';

// import { ReactTyped } from 'react-typed';

import heroVid from '../assets/video.mp4';

const Hero = () => {
  return (
    <>
    <div className='w-full h-[90vh] top-[90px]'>
    <video
        className='object-cover h-full w-full absolute -z-10'
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h1 className='text-5xl bold  md:text-4xl lg:text-5xl  mt-10'>S.T    Agjensi Udhtimi</h1>
       
        <p className='text-xl   mt-10 py-4 shadow-md font-bold' style={{ textShadow: '0px 0.5px 1px rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(0.5px)' }}>
        Zbuloni Aventurën tendë te ardhshme me Selimi Travel <br></br>
        Bileta Avioni , Autobusi , Trageti
       </p>

       {/* <div   className='flex justify-center items-center '>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>PDF në lëndët e</p>
        <ReactTyped className='text-[#1C64F2]  md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4' strings={['Matematikes', 'Gjuhes Shqipe', 'Anglishtes']} typeSpeed={120} backSpeed={120} loop />
        </div> */}

        
        <div className=' mt-10'>
        <button type="button" className="text-black hover:border-blue-300 bg-white hover:bg-slate-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Sherbime</button>
        <button type="button" className="text-black hover:border-blue-300 bg-white hover:bg-slate-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Na kontaktoni</button>
        </div>
      </div>
      <div>
        <p className='text-center text-white text-2xl font-bold'>Klientet e Selimi Travel +<CountUp end={350} duration={5}/></p>
      </div>
    </div>
    
    
    
    
  
    
    
    
    
    
    
    </>
  );
};

export default Hero;