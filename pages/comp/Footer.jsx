import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Footer() {
    useEffect(() => {
        AOS.init({duration:1500});
    }, []);
    return (
        <>
        <div className="md:mb-2 md:min-h-1/2 relative inset-x-0 bottom-0">
            <div data-aos="fade-up" className="footer bg-[#002a30] pb-2">
                <div className="flex place-content-center mb-10 ">
                    <div className="header xl:w-1/3 md:w-1/2 sm:w-1 text-center uppercase text-3xl font-mono font-bold">
                        <p className="m-2 mx-16 py-2 bg-cyan-500 sm:py-1 sm:mx-2 text-black rounded">rennyblessed</p>
                        <p className="text-xl mx-28 mb-3 -mt-5 py-2 bg-[#002a30] text-cyan-100 border-2 border-cyan-500 rounded">construction</p>
                    </div>
                </div>
                
                <div className="xl:flex flex-row md:ml-8 ">
                    <div className="services basis-1/2">
                        <div data-aos="fade-up" className="test rounded p-4 text-white text-center md:text-left uppercase font-bold font-mono">
                            Services
                        </div>
                        <div className="md:flex flex-row md:pl-4">
                            <div className="text-cyan-200 font-normal text-md text-center md:text-left md:pb-20 md:mr-48">
                                <h2 data-aos="fade-up" className="mb-4">Construction, Repair and Renovation.</h2>
                                <h2 data-aos="fade-up" className="mb-4">Site Modeling</h2>
                                <h2 data-aos="fade-up" className="mb-4">Architectural Services</h2>
                                <h2 data-aos="fade-up" className="mb-4">Training of Technicians</h2>
                                <h2 data-aos="fade-up" className="mb-4">Engineering Services</h2>
                                <h2 data-aos="fade-up" className="mb-4">Import and Export</h2>
                            </div>
                            <div className="text-cyan-200 font-normal text-md text-center md:text-left md:pb-20">
                                <h2 data-aos="fade-up" className="mb-4">Interior Design</h2>
                                <h2 data-aos="fade-up" className="mb-4">Supplies</h2>
                                <h2 data-aos="fade-up" className="mb-4">Real Estate Management</h2>
                                <h2 data-aos="fade-up" className="mb-4">Consultancy Services</h2>
                                <h2 data-aos="fade-up" className="mb-4">Contracts</h2>
                            </div>
                        </div>
                        
                    </div>
                    <div className="links basis-1/4">
                        <div data-aos="fade-up" className="test rounded p-4 text-white text-center md:text-left uppercase font-bold font-mono">
                            Contact us
                        </div>
                        <div data-aos="fade-up" className="flex flex-row pt-4 font-normal place-content-center text-center md:place-content-start text-sm  md:pb-3 font-mono">
                            <svg className="w-6 h-6 text-cyan-200 ml-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinejoin="round" strokeLinejoin="round" strokeLinejoin="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                </path>
                            </svg>
                            <h2 className="text-cyan-200 ml-3">(+237) 675-729-438, (+237) 697-279-497, (+237) 675-915-134 </h2>
                        </div>
                        <div data-aos="fade-up" className="flex flex-row pt-4 font-normal place-content-center md:place-content-start text-sm md:pb-3 font-mono">
                            <svg className="w-6 h-6 text-cyan-200 md:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinejoin="round" strokeLinejoin="round" strokeLinejoin="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                                </path>
                            </svg>
                            <h2 className="text-cyan-200 ml-3">Mile 6, Nkwen, Bamenda, Cameroon</h2>
                        </div>
                        <div data-aos="fade-up" className="flex flex-row pt-4 font-normal place-content-center md:place-content-start text-sm md:pb-3 font-mono">
                            <svg className="w-6 h-6 text-cyan-200 md:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinejoin="round" strokeLinejoin="round" strokeLinejoin="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                </path>
                            </svg>
                            <h2 className="text-cyan-200 ml-3">Rennyblessedconstruction@gmail.com</h2>
                        </div>
                        <div data-aos="fade-up" className="flex flex-row pt-4 font-normal place-content-center md:place-content-start text-sm md:pb-3 font-mono">
                            <svg className="w-6 h-6 text-cyan-200 md:ml-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinejoin="2">
                                <path strokeLinejoin="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                            <h2 className="text-cyan-200 ml-3">P.O.Box 5181 Nkwen Bamenda</h2>
                        </div>
                    </div>
                    <div className="contact basis-1/4 pb-4">
                        <div data-aos="fadep-up" className="test rounded p-4 text-white text-center md:text-left uppercase font-bold font-mono">
                            Quick LInks
                        </div>
                        <div className="items ml-4 text-cyan-200 text-center md:text-left font-normal">
                            <div className="link md:mb-3 pt-2">
                                <Link href='/'>
                                    <a data-aos="fadep-up" className='hover:font-bold'>
                                        Home
                                    </a> 
                                </Link>
                            </div>
                            <div className="link md:mb-3 pt-2">
                                <Link href='/about'>
                                    <a data-aos="fadep-up" className='hover:font-bold'>
                                        About us
                                    </a> 
                                </Link>
                            </div>
                            <div className="link md:mb-3 pt-2">
                                <Link href='/gallery'>
                                    <a data-aos="fadep-up" className='hover:font-bold'>
                                        Gallery
                                    </a>
                                </Link>
                            </div>
                            <div className="link md:mb-3 pt-2">
                                <Link href='/contact'>
                                    <a data-aos="fadep-up" className='hover:font-bold'>
                                        Contact
                                    </a>
                                </Link>
                            </div>                    
                        </div>
                    </div>
                </div>
                      
            </div>
            <div data-aos="fadep-up" className="circle p-20 bg-blue-600 rounded-b-[100%] text-center text-cyan-100">
                Copyright 2022 @ RennyBlessed Construction and Engineering Associates Plc.
            </div> 
        </div>

        </>        
    )
}
