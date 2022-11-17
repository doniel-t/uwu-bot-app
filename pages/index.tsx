import type { NextPage } from 'next';
import { toast, ToastContainer } from 'react-toastify';
import UwUfy from '../components/commands/uwufy/UwUfy';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const CommandContainer = dynamic(
  () => import('../components/CommandContainer'),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>UwU Bot!</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <div className="w-screen min-w-screen">
        <Hero />
        <Navbar />
        <CommandContainer />
        <ToastContainer />
      </div>
    </>
  );
};

export default Home;
