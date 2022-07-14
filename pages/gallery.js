import HEAD from 'next/head';
import Navbar  from './comp/Navbar';
import Footer  from './comp/Footer';
import LayoutGallery from './comp/gallery/LayoutGallery'


export default function About() {
  return (
    <div>
      <HEAD>
        <title>GALLERY | A CATALOGUE OF SOME OF OUR PROJECTS </title>
        <meta name="description" content="We have carried out a lot of projects. This shows just a few of our Project and design and showcases what we have to offer as a civil engineering company in cameroon"></meta>
        <meta name="keywords" content="Civil Engineering Cameroon, Construction Company Bamend, Construction Company Cameroon, Architecture Design, interior desing, Images of civil engineering, church design, duplex design, two floor story building design, deplux building"></meta>
        <meta name="author" content="NDONWI RENE"></meta>
        <link rel='icon' href='/favicon.ico' />
      </HEAD>
      <Navbar />
      <LayoutGallery />
      <Footer />
    </div>
  );
}