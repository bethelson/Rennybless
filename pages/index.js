import Head from 'next/head';
import Navbar  from './comp/Navbar';
import Footer  from './comp/Footer';
import Index  from './comp/index/indexLayout';


export default function Home() {
  return (
    <div>
      <Head>
        <title>HOME | RENNY BLESSED CONSTRUCTION AND ENGINEERING PLC.</title>
        <meta name="description" content="RennyBlessed construction and engineering PLC is a Cameroonian based Civil engineering company based in Bamenda. With highly skilled technicians, the company offers quality building and construction services at very affordable prices"></meta>
        <meta name="keywords" content="Civil Engineering Cameroon, Construction Company Bamend, Construction Company Cameroon, Architecture Design, Interior Design, Construction Company, Homepage"></meta>
        <meta name="author" content="NDONWI RENE"></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Index />
      <Footer />
    </div>
  );
}