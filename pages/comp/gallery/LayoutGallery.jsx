import Mini from '../about/mini';
import Link from 'next/link';



const imagesConstruction = [
    {
        alt: "CEO of RennyBlessed construction on site",
        src: "/img/construction.jpg"
    },
    {
        alt: "Two Technicians discussing...",
        src: "/img/cons2.jpg"
    },
    {
        alt: "Construction site",
        src: "/img/cons5.jpg"
    },
    {
        alt: "During the elevation of two floor story building",
        src: "/img/cons6.jpg"
    },
    {
        alt: "Pillar neatly finished in mashy area",
        src: "/img/cons7.jpg"
    },
    {
        alt: "Setting of decking blocks for the elevation of structure",
        src: "/img/cons10.jpg"
    },
    {
        alt: "finished duplex structure painted yellow and white",
        src: "/img/cons12.jpg"
    },
    {
        alt: "Night view of duplex story building",
        src: "/img/cons14.jpg"
    },
    {
        alt: "Duplex under construction after decking",
        src: "/img/cons17.jpeg"
    },
    {
        alt: "interior window and wall design hexagonal house structure",
        src: "/img/cons18.jpeg"
    },
    {
        alt: "External view of duplex structure under construction",
        src: "/img/cons19.jpeg"
    },
    {
        alt: "Septic tank construction finishing",
        src: "/img/cons23.jpeg"
    },
    {
        alt: "3-story building under construction Cameroon",
        src: "/img/cons24.jpeg"
    },
    {
        alt: "CEO at work-site side-view of duplex structure",
        src: "/img/cons25.jpeg"
    },
    {
        alt: "side view showing stair case of duplex building under construction",
        src: "/img/cons26.jpeg"
    },
    {
        alt: "Rounded wall building under construction",
        src: "/img/cons29.jpeg"
    }

];

const imagesFinishing = [
    {
        alt: "Staff designed finishing",
        src: "/img/fin1.jpg"
    },
    {
        alt: "Worker finishing the staff design",
        src: "/img/fin2.jpg"
    },
    {
        alt: "Staff and lighting completed",
        src: "/img/fin3.jpg"
    },
    {
        alt: "Interior design of bedroom",
        src: "/img/fin4.jpg"
    },
    {
        alt: "Interior finishing and installing of chandellier",
        src: "/img/fin5.jpg"
    },
    {
        alt: "Fireworks",
        src: "/img/fireworks.jpg"
    },

]

const imagesDesign = [
    {
        alt: "Design low bongalo house side view",
        src: "/img/des1.jpg"
    },
    {
        alt: "Design of luxury apartment building front view",
        src: "/img/des2.jpg"
    },
    {
        alt: "Compound Fence design side view",
        src: "/img/des3.jpg"
    },
    {
        alt: "Luxury building front view design",
        src: "/img/des4.jpg"
    },
    {
        alt: "Design of luxury apartment building top view",
        src: "/img/des5.jpg"
    },
    {
        alt: "Bongalo design top view",
        src: "/img/des6.jpg"
    },
    {
        alt: "Bongalo design side view",
        src: "/img/des7.jpg"
    },
    {
        alt: "Bongalo design fron view",
        src: "/img/des8.jpg"
    },
    {
        alt: "Design of a duplex home apartment side view",
        src: "/img/des9.jpg"
    },
    {
        alt: "Two floor building side view design",
        src: "/img/des10.jpg"
    },
    {
        alt: "Two floor story building side view with green roof",
        src: "/img/des11.jpg"
    },
    {
        alt: "Church structure top view design",
        src: "/img/des12.jpg"
    },
    {
        alt: "Church structure front view design",
        src: "/img/des13.jpg"
    },
    {
        alt: "Top view design of a home with terass view",
        src: "/img/des14.jpg"
    },
    {
        alt: "Front view of a simple home design",
        src: "/img/des15.jpg"
    },
    {
        alt: "Side view of a beautiful business center design",
        src: "/img/des16.jpg"
    },
    {
        alt: "Design of luxury two floor apartment building side view outside fence",
        src: "/img/des17.jpg"
    },
    {
        alt: "Luxury two floor home design with fence and road side view",
        src: "/img/des21.jpg"
    }
    

];


export default function LayoutGallery () {
    return (
        <div className="bg-cyan-700/20 px-2">
            <div className="xl:w-[80%] mx-auto pt-4">
                <div className="">
                    <div className="text-3xl pl-12 text-[#002a30] font-bold uppercase bg-white pt-12">Construction</div>
                    <Mini images={imagesConstruction} />  
                </div>
                <div className="border-t-2 border-blue-200"></div>
                <div className="">
                    <div  className="text-3xl pl-12 text-[#002a30] font-bold uppercase bg-white pt-12">Interior Design</div>
                    <Mini images={imagesFinishing} />  
                </div>
                <div className="border-t-2 border-blue-200"></div>

                <div className="">
                    <div className="text-3xl pl-12 text-[#002a30] font-bold uppercase bg-white pt-12">Architectural Designs</div>
                    <Mini images={imagesDesign} />  
                </div>
                   
            </div>
        </div>
        
    )
}

