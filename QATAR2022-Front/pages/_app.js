import "../styles/globals.css";
import Head from "next/head";
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title key="title">Prode Qatar 2022</title>
        <link rel="icon" href="/faviconCopa.png" />
        <meta key="description" name="description" content="Contactame!" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}