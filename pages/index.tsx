import type { NextPage } from 'next';
import { toast, ToastContainer } from 'react-toastify';
import UwUfy from '../components/commands/uwufy/UwUfy';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CommandContainer from '../components/CommandContainer';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>UwU Bot!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <Navbar />
      <CommandContainer />
      <ToastContainer />
    </>
  );
};

export default Home;
