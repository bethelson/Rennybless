import Image from "next/image";
import { useState } from "react";
import  Swipe  from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";



/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="relative">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />
      <div className="w-full h-[37vh] sm:h-[32vh] flex overflow-hidden relative m-auto ">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative w-[100%] mt-2 md:mt-16 md:mt-24 text-center"
        >
          {images?.map((image, index) => {
            if (index === currentSlide) {
              return (
                <div className="md:flex flex-row pt-1">
                  <div className="basis-1/3">
                    <div className="w-[25%] mx-auto">
                      <Image
                      key={index}
                      src = {image.src}
                      alt = {image.alt}
                      height="25px"
                      width="25px"
                      layout="responsive"
                      className="animate-fadeIn rounded-full"
                      />
                    </div>
                    <span className="md:text-2xl md:font-bold text-md pt-2">{image.user}</span>
                    
                  </div>
                  <div className="w-[80%] text-sm mx-auto basis-2/3 sm:ml-4 md:pt-16 sm:mr-16 text-white">
                    <h1><i>{image.text}</i></h1>
                  </div>
                </div>
                
    
              
                
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />

      <div className="relative flex justify-center p-2">
        {images?.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}