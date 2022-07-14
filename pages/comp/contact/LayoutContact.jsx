import Link from 'next/link'
import Testimonial from './../index/testimonial'
import EmblaCarousel from './../Carousel/emblaCarousel'

const images = [
    {
        alt: "Contact us word arranged using puzzle letters",
        src: "/img/contact3.jpg"
    },
    {
        alt: "Fixed phone",
        src: "/img/contact4.jpg"
    },
    {
        alt: "Message representation using papper drawing",
        src: "/img/contact2.jpg"
    },
    {
        alt: "Man drafting/studying blueprint",
        src: "/img/blueprint.jpg"
    },
      
  ];


  const myClass = "embla__slide relative  flex-[0_0_100%] h-[200px] md:h-[450px] rounded-3xl ";

  const textStyle = "px-[33%] py-[40%] text-xl md:text-4xl text-red-700 text-center font-bold ";

  const myStyle = {
      marginTop: "0px",
      visibility: "hidden",      
      
  };

  const textVisibility = "relative bg-white invisible ";
      
  


export default function LayoutContact () {
    return (
        <div className="w-full bg-cyan-500/25">
            <div className="bg-red-500 xl:flex flex-row xl:divide-x-4 divide-white">
                <div className="basis-2/5 mx-auto py-4 xl:ml-[100px] xl:mr-2 w-[90%] md:w-[95%]">
                    <EmblaCarousel props ={images} myStyle = {myStyle} myClass={myClass} textStyle={textStyle} textVisibility={textVisibility}/>
                </div>
                <div className="basis-3/5 pt-2 md:pt-16 pb-4 md:ml-24 md:pl-2 pl-4 md:pr-0 pr-4">
                    <p className="text-3xl md:text-8xl uppercase text-cyan-100 font-bold">Contact us</p>
                    <p className="text-xl md:text-3xl uppercase text-cyan-100 mt-4">get to us for more information </p>
                    
                        <div className="links basis-1/4 md:pl-4 md:w-[70%] md:py-8 md:border-2 rounded-xl md:mt-4 mr-2 ">
                            <div className="flex flex-row pt-4 font-bold md:font-semibold place-content-start text-md md:text-xl  md:pb-3 font-mono">
                                <svg className="w-6 h-6 text-cyan-200 md:ml-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinejoin="round" strokeLinejoin="round" strokeLinejoin="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                    </path>
                                </svg>
                                <h2 className="text-cyan-200 ml-3 text-wrap">(+237) 675-729-438, (+237) 697-279-497, (+237) 675-915-134</h2>
                            </div>
                            <div className="flex flex-row pt-4 font-bold md:font-semibold place-content-start text-md md:text-xl md:pb-3 font-mono">
                                <svg className="w-6 h-6 text-cyan-200 md:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinejoin="round" strokeLinejoin="round" strokeLinejoin="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                                    </path>
                                </svg>
                                <h2 className="text-cyan-200 ml-3 text-wrap">Mile 6, Nkwen, Bamenda, Cameroon</h2>
                            </div>
                            <div className="flex flex-row pt-4 font-bold md:font-semibold place-content-start text-md md:text-xl md:pb-3 font-mono">
                                <svg className="w-6 h-6 text-cyan-200 md:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinejoin="round" strokeLinejoin="round" strokeLinejoin="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                    </path>
                                </svg>
                                <h2 className="text-cyan-200 ml-3 text-wrap">Rennyblessedconstruction@gmail.com</h2>
                            </div>
                        </div>

                </div>
            </div>
            <div className="testimonial">
                <Testimonial />
            </div>
            
            
        </div>
        
    )
}