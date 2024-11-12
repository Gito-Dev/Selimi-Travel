import React, {useEffect} from 'react';
import heroVid from '../assets/video.mp4';
import plane from '../assets/plane.png'
import Content from './Content';
import Gallery from './Gallery';
import About from './About';
import CountUp from 'react-countup'
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import Contact from './Contact';


const Hero = () => {
   useEffect(()=>{
    Aos.init({duration:2000});

   },[])
  return (
    <>
    <div className='w-full h-[90vh] top-[90px]'>

    <video
  className='object-cover w-[500px] h-[500px] sm:w-full sm:h-full absolute -z-10'
  src={heroVid}
  autoPlay
  loop
  muted
  controls={false}
  disablePictureInPicture
  disableRemotePlayback
  playsInline 
/> 

      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
      <h1 class="max-w-2xl  text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Selimi Travel</h1>
       
        <p className='text-xl    mt-10 py-4 shadow-md font-bold' >
        Zbuloni Aventurën tendë te ardhshme me Selimi Travel <br></br>
        Bileta Avioni , Autobusi , Trageti
       </p>

     

        
        <div className=' mt-10'>
        <a href='#about' type="button" className="hover:border-white border-2  text-black hover:text-white  bg-white hover:bg-black rounded-lg px-5 py-2.5 me-2 mb-2 text-base font-medium ">Rreth Nesh</a>
        <a href='#services' type="button" className="hover:border-white border-2  text-black hover:text-white  bg-white hover:bg-black  rounded-lg  px-5 py-2.5 me-2 mb-2 text-base font-medium">Sherbimet</a>
        </div>

        
      </div>
      
    </div>
    
    
    
    
      {/* seciton */}

    
      <section class="bg-white pb-5 pt-5 ">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div data-aos="zoom-in" class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-gray-900">Zbuloni Botën me <br></br> Selimi Travel</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl ">Mirë se vini në Selimi Travel, partnerin tuaj të besuar për të gjitha nevojat e udhëtimeve! Ne ofrojmë guida të personalizuara, bileta avioni dhe autobusi, makina me qera, bileta trageti dhe siguracione udhëtimi, për të siguruar që udhëtimi juaj të jetë pa stres dhe plot me përvoja të paharrueshme.</p>
            <a href="#services" class="inline-flex items-center justify-center border-black px-5 py-3 mr-3 text-base font-medium text-center border-2 text-white bg-black hover:text-black hover:bg-white rounded-lg  ">
                Rreth Nesh
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
           
        </div>
        <div data-aos="zoom-in" class=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src={plane} alt="mockup" />
        </div>                

    </div>
</section>
<section class="bg-black ">
  <div  class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <dl class="grid max-w-screen-md gap-8 mx-auto text-white sm:grid-cols-3 ">
          <div  class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold"><CountUp end={2650} duration={7}/> +</dt>
              <dd class="font-light text-gray-300 ">Kliente</dd>
          </div>
          <div d class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold"> <CountUp end={56} duration={7}/> +</dt> 
              <dd class="font-light text-gray-300 ">Destinacione</dd>
          </div>
          <div d class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold"><CountUp end={1} duration={7}/></dt>
              <dd class="font-light text-gray-300 ">Zyra</dd>
          </div>
      </dl>
  </div>
</section>
       


       <Content />
       <About />
       <Contact />
       <Gallery />
       

    
    </>
  );
};

export default Hero;
