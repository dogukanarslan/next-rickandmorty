import Head from 'next/head';

import '../styles/globals.css';

import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Rick and Morty</title>
      </Head>
      <div className="app">
        <Navbar />
        <main>
          <div className="app__main">
            <Component {...pageProps} />
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default MyApp;
