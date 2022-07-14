import Link from 'next/link'
import Image from 'next/image'
 


export default function Gallery () {
    return (
        <div className="pb-4">
            <div className="title flex mt-16 mb-1 flex-row ">
                <span className="small-object md:ml-4 md:ml-20 px-2 py-4 bg-red-500">
                </span>
                <Link href="/about">
                    <div className="text py-1 px-2 md:text-3xl text-2xl uppercase text-[#002a30] cursor-pointer hover:bg-red-400 font-black font-mono ">
                        <a className="">Some Projects</a> 
                    </div>
                </Link>
            </div>
            <div className="title mb-1 md:mb-1 flex flex-row md:w-[80%] mx-auto">
                <div className="basis-1/3 p-2">
                    <div className="img">
                    <Image data-aos="fade-in" className="rounded-xl" src="/img/mini1.jpg" alt="Blueprint Document being interpreted" height="700" width="900" layout="responsive"/>
                    </div>
                    <div className="img mt-1">
                    <Image data-aos="fade-in" className="rounded-xl" src="/img/mini2.jpg" alt="Blueprint Document being interpreted" height="600" width="900" layout="responsive"/>
                    </div>
                </div>
                <div className="basis-1/3 p-2">
                    <div className="img">
                    <Image data-aos="fade-in" className="rounded-xl" src="/img/architecture.jpg" alt="Blueprint Document being interpreted" height="500" width="900" layout="responsive"/>
                    </div>
                    <div className="img mt-1">
                    <Image data-aos="fade-in" className="rounded-xl" src="/img/mini4.jpg" alt="Blueprint Document being interpreted" height="800" width="900" layout="responsive"/>
                    </div>
                </div>
                <div className="basis-1/3 p-2">
                    <div className="img">
                    <Image data-aos="fade-in" className="rounded-xl" src="/img/mini5.jpg" alt="Blueprint Document being interpreted" height="800" width="900" layout="responsive"/>
                    </div>
                    <div className="img mt-1">
                    <Image data-aos="fade-in" className="rounded-xl" src="/img/mini6.jpg" alt="Blueprint Document being interpreted" height="500" width="900" layout="responsive"/>
                    </div>
                </div>
                
                
            </div>
            <div className="btn flex md:w-[80%] w-[100%] mx-auto  justify-end mb-8">
                <Link href="/gallery">
                    <button className="flex flex-row bg-blue-500 px-4 py-1 md:px-8 md:py-3 mr-2 text-white uppercase font-semibold text-md md:text-xl border-2 border-cyan-500 rounded hover:bg-white hover:text-red-500">
                        <h1>Gallery</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pl-2 md:pt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinejoin="2">
                            <path strokeLinejoin="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </Link>
                
            </div>
            
        </div>
    )
}