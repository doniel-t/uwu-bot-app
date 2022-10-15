import type { NextPage } from 'next';
import { toast, ToastContainer } from 'react-toastify';
import UwUfy from '../components/commands/uwufy/UwUfy';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Ask from '../components/commands/ask/Ask';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-evenly mt-24">
        {/* <Hero /> */}
        <UwUfy />
        <Ask />
        <ToastContainer />
      </div>
    </>
  );
};

export default Home;
