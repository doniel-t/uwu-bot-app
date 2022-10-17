import type { NextPage } from 'next';
import { toast, ToastContainer } from 'react-toastify';
import UwUfy from '../components/commands/uwufy/UwUfy';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Ask from '../components/commands/ask/Ask';
import Choose from '../components/commands/choose/Choose';
import CommandContainer from '../components/CommandContainer';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <CommandContainer />
      <ToastContainer />
    </>
  );
};

export default Home;
