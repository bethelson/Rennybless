import HEAD from 'next/head';
import Navbar  from './comp/Navbar';
import Footer  from './comp/Footer';
import LayoutContact from './comp/contact/LayoutContact';


export default function About() {
  return (
    <div>
      <HEAD>
        <title>CONTACT US | RENNYBLESSED CONSTRUCTION AND ENGINEERING ASSOCIATES PLC.</title>
        <meta name="description" content="Get in touch with an agent from Rennyblessed Construction and Engineering Associates and find out any information which you need."></meta>
        <meta name="keywords" content="Civil Engineering Cameroon, Construction Company Bamend, Construction Company Cameroon, Architecture Design, Interior Design, Construction Company, Contact us, Telephone, Email"></meta>
        <meta name="author" content="NDONWI RENE"></meta>
        <link rel='icon' href='/favicon.ico' />
      </HEAD>
      <Navbar />
      <LayoutContact />
      <Footer />
    </div>
  );
}