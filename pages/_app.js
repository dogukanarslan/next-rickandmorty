import Head from 'next/head';
import { useRouter } from 'next/router';

import '../styles/globals.css';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Rick and Morty</title>
      </Head>
      <div className="app">
        <Navbar />
        <main>
          <div className="app__sidebar">
            <Sidebar selected={router.pathname} />
          </div>
          <div className="app__main">
            <Component {...pageProps} />
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default MyApp;
