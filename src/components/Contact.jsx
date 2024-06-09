import React , {useEffect} from 'react';
import map from '../assets/map.png';
import Aos from 'aos';
import 'aos/dist/aos.css'; 

function Contact() {

    useEffect(()=>{
        Aos.init({duration:2000});
    
       },[])
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 max-w-full mx-auto p-4 bg-white shadow-lg overflow-hidden pt-[100px] pb-[100px]">
      <div data-aos="fade-right" >
        <img src={map} alt="Description" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div data-aos="fade-left" className='sm:max-h-[500px]'>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11986.520958839094!2d19.4544078!3d41.3169069!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134fdba92fd2d117%3A0xf4314fe715b14ea1!2sSelimi%20travel!5e0!3m2!1sen!2s!4v1717928445425!5m2!1sen!2s"
    width="100%"
    height="400px" // Adjust this height for mobile
    className="border-0 rounded-lg mt-4 sm:mt-0"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Selimi Travel Location"
  ></iframe>
</div>

    </div>
  );
}

export default Contact;
