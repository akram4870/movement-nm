import React from 'react';

const Hero = () => {
  return (
    <div className=" py-10 lg:py-15">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        {/* Left Column */}
        <div className="lg:w-[50%] px-4 lg:px-13">
        <h1 className="text-2xl lg:text-xl text-[#FF725E] mb-4 lg:mb-4 font-bold">Welcome to moveMate!</h1>
        <h2 className="text-lg lg:text-4xl text-black font-bold mb-3 lg:mb-5">Empowering Your Recovery Journey</h2>
          <p>Experience the power of personalized recovery with moveMate. Our app uses advanced hand-tracking technology to provide engaging games and tailored exercises, helping you regain mobility and independence. Transform your rehabilitation into an enjoyable and motivating journey with moveMate.
          </p>
        </div>
        {/* Right Column */}
        <div className="p-5 lg:w-1/2">
          <img src="amico.png" alt="Amico" className="w-full h-auto" />
        </div>
      </div>
    </div>  
  );
}

export default Hero;
