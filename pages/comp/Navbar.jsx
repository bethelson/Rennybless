import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/img/logo.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Navbar() {
    useEffect(() => {
        AOS.init({duration:1000});
    }, []);
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };
    return (
    <>
        <nav className='flex items-center flex-wrap bg-blue-500 md:bg-gradient-to-r from-blue-500 to-cyan-500'>
            <Link href='/'>
                <a data-aos="fade-right" className="inline-flex items-center p-2 pr-0 md:mr-4xl xl:ml-32">
                    <Image src={logo} alt="Line Building Structure" width width={60} height={60} className="border-6 rounded"/>
                    <span className='text-xl text-white font-bold uppercase tracking-wide md:pl-4 pl-1'>
                        <p className='text-2xl leading-none'>RENNYBLESSED</p>
                        <p className='leading-none'>Construction</p>
                    </span>                    
                </a>
            </Link>
            <button className=' inline-flex md:p-3 hover:bg-blue-400 rounded lg:hidden text-white ml-auto mr-4 xl:mr-32 hover:text-white outline-none' onClick={handleClick}>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path strokeLinejoin='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16'/>
                </svg>
            </button>
            <div className={`${active ? '' : 'hidden' } w-full lg:inline-flex mr-4 xl:mr-32 lg:flex-grow lg:w-auto`}>
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                    <Link href='/'>
                        <a data-aos="fade-left" className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gradient-to-r from-blue-600 to-cyan-500 hover:text-white '>
                            Home
                        </a>
                    </Link>
                    <Link href='/about'>
                        <a data-aos="fade-left" className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gradient-to-r from-blue-600 to-cyan-500 hover:text-white'>
                            About us
                        </a> 
                    </Link>
                    <Link href='/gallery'>
                        <a data-aos="fade-left" className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gradient-to-r from-blue-600 to-cyan-500 hover:text-white'>
                            Gallery
                        </a>
                    </Link>
                    <Link href='/contact'>
                        <a data-aos="fade-left" className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gradient-to-r from-blue-600 to-cyan-500 hover:text-white'>
                            Contact us
                        </a>
                    </Link>
          </div>
        </div>
        
        </nav>
        <div className="border-b border-blue-400 ">
            
        </div>
    </>
    )
}