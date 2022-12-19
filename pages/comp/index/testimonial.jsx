
import Carousel from './carousel'
const images = [
    {
        src: "/img/mini1.jpg",
        alt: "First Image of the Carousel",
        user: "Mr. Philip Simon",
        text: "They are very efficient, time conscious and proffesional. I definitely recommend anyone needing construction services to contact RennyBlessed Construction Company"
    },
    {
        src: "/img/mini2.jpg",
        alt: "Second Image of the Carousel",
        user: "Mr. Enow Matthew",
        text: "Very nice experience working with RennyBlessed construction, I am very satisfied with the result."
    },
    {
        src: "/img/mini3.jpg",
        alt: "Third Image of the Carousel",
        user: "Mrs. Ngwa Emmanuella",
        text: "The carried out my renovations and repaire work in a very short time, the cost was very affordable too..."
    },
    {
        src: "/img/mini4.jpg",
        alt: "Fourth Image of the Carousel",
        user: "Mr. Sonfack",
        text: "I was surprised to see that they work very efficiently even in regions other than the Northwest region of Cameroon. They are certainly one of the best available to us"
    }
  
  ];
 


export default function Testimonial () {
    return (
        <div className=" w-[100%] bg-black text-cyan-100 pb-8">
            <div className=" text-2xl font-bold md:pt-12 pl-6 font-sans uppercase">What people say about us</div>
            <Carousel images={images} />
        </div>
    )
}