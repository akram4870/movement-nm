import React from 'react';

const BentoGrid = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* First Row */}
      <div className="flex flex-col md:flex-row gap-8 p-2">
        <div className="md:w-[40%]">
          <img src="sample.jpeg" alt="Mission" className="w-full h-auto p-10 " />
        </div>
        <div className="md:w-[50%] flex flex-col m-10 justify-start ">
          <h2 className="text-3xl font-bold text-[#7440DE]">Mission</h2>
          <p className="text-lg mt-4">
            Our mission is to provide personalized rehabilitation services to improve the quality of life for our clients.
          </p>
        </div>
      </div>
      
      {/* Second Row */}
      <div className="flex flex-col md:flex-row gap-8 p-2 bg-[#E5D8FF]">
        <div className="md:w-[50%] flex flex-col m-10 justify-start">
        <h2 className="text-3xl font-bold text-[#7440DE]">Vision</h2>
          <p className="text-lg">
            MoveMate is dedicated to helping individuals recover and regain independence through innovative and effective rehabilitation programs.
          </p>
        </div>
        <div className="md:w-[40%]">
          <img src="sample.jpeg" alt="Vision" className="w-full h-auto p-10" />
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
