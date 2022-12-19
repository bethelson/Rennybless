import '../styles/globals.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const script = props => {
    useScript('https://www.googletagmanager.com/gtag/js?id=UA-173599195-1')
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-173599195-1');
  };
  return <Component {...pageProps} />
}