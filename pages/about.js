import HEAD from 'next/head';
import Navbar  from './comp/Navbar';
import Footer  from './comp/Footer';
import Layoutabout from './comp/about/aboutLayout';


export default function About() {
  return (
    <div>
      <HEAD>
        <title>ABOUT US | RENNYBLESSED CONSTRUCTION AND ENGINEERING ASSOCIATES PLC.</title>
        <meta name="description" content="RennyBlessed construction and engineering associates has been operational for the past 3 years and has carried out numerous projects in Cameroon. Offering services like real estate mananagement and a lot more. Rennyblessed construction is one of the best civil engineering companies in Cameroon."></meta>
        <meta name="keywords" content="Civil Engineering Cameroon, Rennyblessed Construction, Construction Company Bamend, Construction Company Cameroon, Architecture Design, Interior Design, Construction Company, About us"></meta>
        <meta name="author" content="NDONWI RENE"></meta>
        <link rel='icon' href='/favicon.ico' />
      </HEAD>
      <Navbar />
      <Layoutabout />
      <Footer />
    </div>
  );
}