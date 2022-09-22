import "../styles/globals.css";
import Head from "next/head";
import Menu from '../components/Menu';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title key="title">Soy Desarrollador</title>
        <meta key="description" name="description" content="Contactame!" />
      </Head>
      <Menu/>
      <Component {...pageProps} />
    </>
  );
}