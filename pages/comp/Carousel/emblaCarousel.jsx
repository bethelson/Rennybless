import { React, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function EmblaCarousel({ props, myStyle, myClass, textStyle, textVisibility }){
  useEffect(() => {
    AOS.init({duration:1500});
  }, []);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const scrollPrev = useCallback(() => {    if (emblaApi) emblaApi.scrollPrev()  }, [emblaApi])
  const scrollNext = useCallback(() => {    if (emblaApi) emblaApi.scrollNext()  }, [emblaApi])

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex flex-row ">
      
      {props?.map((image, index) => {
        return (
          <div className={myClass} key={index}>
            <div className={textStyle} key={index}>
              <Image key={index} data-aos="fade-up"  className="rounded-2xl" src={image.src} alt={image.alt} layout="fill"/>
              <span className={textVisibility}>{image.alt}</span>
            </div>            
          </div>
      )})}
      </div>
      <button className="embla__prev absolute invisible xl:visible top-48 left-0 m-auto cursor-pointer hover:bg-red-800/20 py-40" style={myStyle} onClick={scrollPrev}>
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinejoin="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7">
          </path>
        </svg>
      </button>
      <button className="embla__next absolute invisible xl:visible top-48 right-0 m-auto cursor-pointer hover:bg-red-800/20 py-40" style={myStyle} onClick={scrollNext}>
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinejoin="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7">
          </path>
        </svg>
      </button>
      
    </div>
  )
}

//"relative bg-white "