import Link from 'next/link'
import Testimonial from './../index/testimonial'
import EmblaCarousel from './../Carousel/emblaCarousel'
import Mini from './mini';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const images = [
    {
        alt: "CEO of RennyBlessed construction on site",
        src: "/img/construction.jpg"
    },
    {
        alt: "Image of a construction worker doing some machine work",
        src: "/img/fireworks.jpg"
    },
    {
        alt: "Senior technician giving guidlines to junior technicians",
        src: "/img/training.jpg"
    },
    {
        alt: "Man studyin/drafting a blueprint",
        src: "/img/blueprint.jpg"
    },
      
  ];


  const imagesMini = [
    {
        alt: "Design of a luxury apartment building",
        src: "/img/architecture1.jpg"
    },
    {
        alt: "Small home building design",
        src: "/img/architecture.jpg"
    },
    {
        alt: "Caterpillar working on a construction site",
        src: "/img/engineering.jpg"
    },
    {
        alt: "Completed project located in Bamenda, Cameroon",
        src: "/img/mini.jpg"
    }
  ];


  const myClass = "embla__slide relative  flex-[0_0_100%] h-[200px] md:h-[450px] rounded-3xl ";

  const textStyle = "px-[33%] py-[40%] text-xl md:text-4xl text-red-700 text-center font-bold ";

  const myStyle = {
      marginTop: "0px",
      
  }
  
  const textVisibility = "relative bg-white invisible";
      
  


export default function Layoutabout () {
    useEffect(() => {
        AOS.init({duration:1500});
    }, []);
    return (
        <div className="w-full bg-cyan-500/25">
            <div className="bg-orange-500 lg:flex flex-row xl:divide-x-4 divide-white">
                <div className="basis-2/5 mx-auto py-4 ml-4  lg:ml-0 lg:mr-4 xl:ml-[100px] mr-4">
                    <EmblaCarousel props ={images} myStyle = {myStyle} myClass={myClass} textStyle={textStyle} textVisibility={textVisibility}/>
                </div>
                <div className="basis-3/5 pt-2 xl:pt-32 pb-4 items-center ml-8 xl:ml-24 pl-8">
                    <p className="text-3xl md:text-8xl uppercase text-cyan-100 font-bold">welcome to</p>
                    <p className="text-xl md:text-5xl uppercase text-cyan-100 font-bold">rennyblessed construction</p>
                    <p className="text-md md:text-xl md:uppercase text-cyan-200 pt-2 md:pt-8 font-bold italic">"Your satisfaction is our priority!"</p>
                </div>
            </div>

            
            <div data-aos="fade-up" className="xl:w-[70%] mx-auto text-xl text-justify md:pt-16 text-center pb-16">
                <div className="title mb-4 md:mb-12 flex flex-row pt-8">
                    <span className="small-object px-2 py-4 bg-red-500">
                    </span>
                    <Link href="/about">
                        <div className="text py-1 px-2 text-3xl uppercase text-[#002a30] cursor-pointer font-black font-mono ">
                            <a className="">about us</a> 
                        </div>
                    </Link>
                </div>
                <p className="px-2"><span className="font-bold text-xl md:text-2xl">RennyBlessed Construction and Engineering Plc.</span>  is a private limited civil engineering company located in the town of Bamenda, Northwest region of Cameroon.
                This company has been operational since the year 2019 and has carried out so many projects in the field of civil engineering and architectural development. Headed by its founder and CEO Mr. NDONWI Rene,
                a Civil engineer with more than 10years of working experience in the field of civil engineering in Cameroon. RennyBlessed construction is made up of highly skilled and well trained professionals. We offer the following services
                </p>
                <div className="sm:flex flex-row w-[90%] mx-auto pt-4">
                    <div className="basis-1/2">
                        <ul className="list-[circle] font-semibold leading-normal sm:leading-loose text-justify md:pr-12">
                            <li key="1">
                                Constructions, Repair and Renovation.
                            </li>
                            <li key="2">
                                Consultancy services.
                            </li>
                            <li key="3">
                                Contracts.
                            </li>
                            <li key="4">
                                Technician training for both the public and private sectors.
                            </li>
                            <li key="5">
                                Architectural services.
                            </li>
                        </ul>
                    </div>
                    <div className="basis-1/2">
                        <ul className="list-[circle] font-semibold leading-normal text-justify sm:leading-loose">
                            <li key="6">
                                Import and Export of goods.
                            </li>
                            <li key="7">
                                Supply of construction material.
                            </li>
                            <li key="8">
                                Real estate management.
                            </li>
                            <li key="9">
                                Partnerships.
                            </li>
                            <li key="10">
                                Engineering Services.
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div data-aos="fade-up" className="text-3xl pl-12 text-[#002a30] font-bold uppercase bg-white pt-16">Some of our Projects</div>
            <Mini images={imagesMini}/>
            <div className="bg-white pb-4">
                <div className="btn flex w-[97%] mx-auto justify-end">
                    <Link href="/gallery">
                        <button className="flex flex-row bg-blue-500 px-4 py-1 md:px-8 md:py-3 mr-2 text-white uppercase font-semibold text-md md:text-xl border-2 border-cyan-500 rounded hover:bg-white hover:text-red-500">
                            <h1>More Projects</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pl-2 md:pt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinejoin="2">
                                <path strokeLinejoin="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
            
            <div data-aos="fade-up" className="testimonial">
                <Testimonial />
            </div>
            
            
        </div>
        
    )
}