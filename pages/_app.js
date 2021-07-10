import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <Head>

      </Head>

      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-2">
            <Sidebar selected={router.pathname} />
          </div>
          <div className="col col-10">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MyApp;
