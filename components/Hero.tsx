import React from 'react';
import Wave from 'react-wavify';

export default function Hero() {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-col">
          <img src="./gigachad.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl text-center font-bold">UwU Bot!</h1>
            <p className="py-6 text-center">These commands truly are useless</p>
            <div className="flex justify-center z-10 mb-24">
              <a href="#commandContainer" className="btn drop-shadow-md btn-primary">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      <Wave
        fill="#FF7AC6"
        className="-translate-y-full z-0 mt-8"
        options={{
          height: 20,
          amplitude: 60,
          speed: 0.15,
          points: 5,
        }}
      />
    </>
  );
}
