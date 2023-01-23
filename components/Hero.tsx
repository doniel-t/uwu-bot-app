import React from 'react';
import Wave from 'react-wavify';
import useMediaQuery from '../utils/hooks/isMobile';

export default function Hero() {
  return (
    <>
      <div className="flex w-full flex-col min-w-[500px]">
        <div id="home" className={`hero mt-16 min-h-[85vh]`}>
          <div className="hero-content flex-col lg:flex-col">
            <img
              src="./gigachad.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-center text-5xl font-bold">UwU Bot!</h1>
              <p className="py-6 text-center">
                These commands truly are useless
              </p>
              <div className="relative mb-24 flex justify-center">
                <a
                  href="#textCommandContainer"
                  className="btn btn-primary drop-shadow-md">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
<div className="mb-32" >
          <Wave
            fill="#FF7AC6"
            className="z-0"
            options={{
              height: 20,
              amplitude: 60,
              speed: 0.15,
              points: 2,
            }}
          />
          <Wave
            fill="#FF7AC6"
            className="z-0 -mt-4 rotate-180"
            options={{
              height: 20,
              amplitude: 60,
              speed: 0.15,
              points: 4,
            }}
        
          />
          </div>
      </div>
    </>
  );
}

