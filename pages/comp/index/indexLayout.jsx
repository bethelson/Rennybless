import Image from 'next/image';
import pic from '../../../public/img/pic1.jpg';
import Info from './info';
import Link from 'next/link';
import Gallery from './gallery';
import Testimonial from './testimonial';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const images = [
    {
        src: "/img/pic1.jpg",
        alt: "First Image of the Carousel"
    },
    {
        src: "/img/pic2.jpg",
        alt: "Second Image of the Carousel"
    },
    {
        src: "/img/pic1.jpg",
        alt: "Third Image of the Carousel"
    },
    {
        src: "/img/pic2.jpg",
        alt: "Fourth Image of the Carousel"
    }
  
  ];
  

export default function Index() {
    useEffect(() => {
        AOS.init({duration:2000});
    }, []);
    return (
            <div>
                <div className="bg-blue-500 md:h-1/2 min-h-full bg-left-top md:mb-0 -mb-[250px]" style={{backgroundImage: "url(/img/svg2.png)", height:"720px"}}>
                    <div className="xl:flex flex-row place-content-center text-[#002a30]">
                        <div className="basis-2/5 xl:mt-32">
                            <div data-aos="fade-up" className="flex flex-row w-[50%] mx-auto xl:ml-32 uppercase">                       
                                <div className="basic-2/3 md:border-4 border-2 border-[#002a30] text-center p-1 rounded-md md:rounded-xl w-[215px] md:w-[450px] mr-1 md:mt-10 mt-6 md:mr-32 md:mr-2">
                                    <h1 className="font-black text-2xl md:text-9xl font-mono md:tracking-tighter ">renny</h1>
                                    <h1 className="font-black text-2xl md:text-9xl font-mono md:tracking-tighter leading-[5px] md:leading-[60px]">blessed</h1>
                                    <h1 className="text-normal md:text-2xl font-normal pt-3 md:pl-2 font-mono leading-[15px]">construction</h1>
                                </div>
                            </div>
                            <div className="w-[85%] mx-auto  text-black-500 text-center text-xs md:text-xl font-sans xl:ml-32 font-semibold md:font-semibold leading-[13px] mt-2 md:mt-14 md:mr-12 rounded-md md:rounded-xl py-1 md:p-4 bg-[#f2f2f2]">
                                <h1>Providing the best quality construction services at the best prices!</h1>
                            </div>
                            <div className="btn flex flex-row place-content-center">
                                <Link href="/about">
                                    <button data-aos="fade-up" className="flex flex-row bg-red-500 mt-4 px-4 py-1 md:px-8 md:py-3 text-white uppercase font-semibold text-md md:text-xl border-2 border-white rounded hover:text-red-500 hover:bg-blue-500">
                                        <h1>Services</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pl-2 md:mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinejoin="2">
                                            <path strokeLinejoin="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </Link>
                                <Link href="/gallery">
                                    <button data-aos="fade-up" className="flex flex-row bg-white-500 mt-4 px-4 py-1 md:px-8 md:py-3 ml-4 text-black uppercase font-semibold text-md md:text-xl border-2 border-white rounded hover:bg-white hover:text-red-500">
                                        <h1>Gallery</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pl-2 md:mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinejoin="2">
                                            <path strokeLinejoin="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </Link>
                                
                            </div>
                            
                            
                        </div>
                        <div className="basis-3/5 flex place-content-end xl:ml-12 text-blue-300">
                            <div className="mt-8 md:mt-[165px] ">
                                <Image className="md:rounded-l-[30px]" src={pic} alt="Line Building Structure" layout="intrinsic"/>
                            </div>
                        </div>
                    </div>
                </div>
                    <div data-aos="fade-up" className="info">
                        <Info />
                    </div>
                    <div data-aos="fade-up" className="gallery">
                        <Gallery />
                    </div>
                    <div data-aos="fade-up" className="testimonial">
                        <Testimonial />
                    </div>
            </div>
    )
}
