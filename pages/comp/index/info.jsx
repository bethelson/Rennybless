import Link from 'next/link'
import Image from 'next/image'
import EmblaCarousel from './../Carousel/emblaCarousel'

const images = [
    {
      alt: "Consultancy",
      src: "/img/consulting.jpg"
    },
    {
        alt: "Architectural Services",
        src: "/img/architecture.jpg"
    },
    {
        alt: "Engineering Services",
        src: "/img/engineering.jpg"
    },
    {
        alt: "Construction and Repair",
        src: "/img/construction.jpg"
    },
    {
        alt: "Real Estate Management",
        src: "/img/realestate.jpg"
    },
    {
        alt: "General Supplies",
        src: "/img/supplies.jpg"
    },
    {
        alt: "Contracts",
        src: "/img/contracts.jpg"
    },
    {
        alt: "Import and Export",
        src: "/img/import.jpg"
    },
    {
        alt: "Training",
        src: "/img/training.jpg"
    }
  
  ];


  const myClass = "embla__slide relative  flex-[0_0_80%] xl:flex-[0_0_30%] h-[230px] md:h-[350px] rounded-3xl ";

  const textStyle = "px-[33%] py-[50%] text-xl text-center font-bold";

  const myStyle = {
      marginTop: "1335px"
  };
  const textVisibility = "relative bg-white text-center";
      
  


export default function Info () {
    return (
        <div className="mb-12 bg-blue-100 pb-1 xl:mt-0 md:mt-[420px]">
            <div className="title mb-4 md:mb-12 flex flex-row pt-8 md:pt-32 mt-8">
                <span className="small-object md:ml-4 md:ml-20 px-2 py-4 bg-red-500">
                </span>
                <Link href="/about">
                    <div className="text py-1 px-2 md:text-3xl text-2xl uppercase text-[#002a30] cursor-pointer hover:bg-blue-400 font-black font-mono ">
                        <a className="">What is RennyBlessed construction?</a> 
                    </div>
                </Link>
            </div>
            <div className="xl:flex flex-row justify-content-center xl:ml-4 md:mr-4 mx-1 xl:ml-20 mb-4">
                <div className=" basis-1/2  mx-auto text-xl md:text-2xl text-left md:text-justify md:px-4 md:px-12 mb-4 leading-relaxed">
                    <p>
                        RennyBlessed construction and engineering Plc. is one of the leading construction and architectural companies in Cameroon. Located in Bamenda, Northwest Region of Cameroon, we offer<b><i> High Qaulity </i></b>
                        output at the<b><i> best rates </i></b>for each job. This company is made of up young, energetic and highly skills engineers and technicians. 
                        The following services and more are offered at RennyBlessed Constructions.
                    </p>
                    {images.map((image, index) => {
                        return (
                            <ol className="list-disc ml-8 md:ml-12">
                                <li key={index}>{image.alt}</li>
                            </ol>
                        )})}
                </div>
                <div className="basis-1/2 ">
                    <Image className="rounded-xl" src="/img/blueprint.jpg" alt="Blueprint Document being interpreted" height="500" width="900" layout="responsive"/>
                </div>
            </div>

            <EmblaCarousel props ={images} myStyle = {myStyle} myClass={myClass} textStyle={textStyle} textVisibility={textVisibility}/>
        </div>
    )
}