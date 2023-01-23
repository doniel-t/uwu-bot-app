import type { NextPage } from 'next';
import { toast, ToastContainer } from 'react-toastify';
import UwUfy from '../components/commands/uwufy/UwUfy';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import useMediaQuery from '../utils/hooks/isMobile';

const CommandContainer = dynamic(
  () => import('../components/CommandContainer'),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  const isMobile = useMediaQuery(1000);
  const isFullScreenToast = useMediaQuery(500);

  return (
    <>
      <Head>
        <title>UwU Bot!</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          lang="en"
        />
      </Head>
      <div className="w-full max-w-[100vw]">
        <div className="min-w-[100vw] h-[20px] drag"></div>
        <Hero />
        {!isMobile ? <Navbar /> : null}
        <CommandContainer />
        <ToastContainer className={`${isFullScreenToast ? "min-w-[100%] justify-center align-center" : ""}`}/>
      </div>
    </>
  );
};

export default Home;
