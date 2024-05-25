import React from 'react';
import CountUp from 'react-countup';

// import { ReactTyped } from 'react-typed';

import heroVid from '../assets/video.mp4';

const Hero = () => {
  return (
    <>
    <div className='w-full h-[90vh] top-[90px]'>
    <video
        className='object-cover h-full w-full  absolute -z-10 ' 
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h1 className='text-5xl bold  md:text-4xl lg:text-5xl  mt-10'>S.T    Agjensi Uedhtimi</h1>
       
        <p className='text-xl   mt-10 py-4 shadow-md font-bold' >
        Zbuloni Aventurën tendë te ardhshme me Selimi Travel <br></br>
        Bileta Avioni , Autobusi , Trageti
       </p>

     

        
        <div className=' mt-10'>
        <button type="button" className="text-black hover:border-blue-300 bg-white hover:bg-slate-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Sherbime</button>
        <button type="button" className="text-black hover:border-blue-300 bg-white hover:bg-slate-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Na kontaktoni</button>
        </div>

        <div>
        <p className='text-center text-white text-2xl font-bold pt-10'>Klientet e Selimi Travel +<CountUp end={350} duration={5}/></p>
      </div>
      </div>
      
    </div>
    
    
    
    
  
    
    
    
    
    
    
    </>
  );
};

export default Hero;