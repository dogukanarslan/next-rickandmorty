import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
