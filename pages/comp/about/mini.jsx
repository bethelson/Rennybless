import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Mini({images}){
    useEffect(() => {
        AOS.init({duration:2000});
    }, []);
  return (
    <div>
        <div className="bg-white pt-4 pb-2">
            <div className="sm:grid grid-cols-4 gap-2 pt-2 pb-1 bg-white">
                {images?.map((image) =>{
                    return (
                        <div data-aos="fade-up" className="pb-4 w-[95%] mx-auto hover:border-1 hover:border-white hover:cursor-pointer">
                            <Image
                                src = {image.src}
                                alt = {image.alt}
                                height="10px"
                                width="15px"
                                layout="responsive"
                                className="xl:rounded-2xl rounded"
                            />
                        </div>
                        )
                })}
            </div>
            
        </div>
    </div>
  )
}

