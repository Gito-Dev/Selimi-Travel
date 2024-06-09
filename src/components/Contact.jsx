import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Contact() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div id='contact' data-aos="fade-right" className="flex flex-col sm:flex-row max-w-full mx-auto p-4 bg-white shadow-sm overflow-hidden pt-[100px] pb-[100px]">
            <section className="bg-white w-full sm:w-1/2">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Na Kontakoni</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Keni ndonjë pyetje? Doni të jepni përshtypje për një veçori? Ju duhen detaje për biznesin tonë? Na tregoni.</p>
                    <form action="" method="POST" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Emaili juaj</label>
                            <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Tema</label>
                            <input type="text" id="subject" name="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-black shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Mesazhi juaj</label>
                            <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-black focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" className="px-3.5 py-2.5 hover:border-black border-2  text-white hover:text-black  bg-black hover:bg-white  rounded-lg   me-2 mb-2 text-base font-medium ">Dergo Mesazhin</button>
                    </form>
                </div>
            </section>
            <div data-aos="fade-left" className="w-full sm:w-1/2 flex">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11986.520958839094!2d19.4544078!3d41.3169069!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134fdba92fd2d117%3A0xf4314fe715b14ea1!2sSelimi%20travel!5e0!3m2!1sen!2s!4v1717928445425!5m2!1sen!2s"
                    width="100%"
                    height="85%"
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
