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
          MoveMate is dedicated to transforming stroke rehabilitation by providing gamified exercises that are both fun and effective. Our mission is to leverage cutting-edge technology to deliver personalized, data-driven therapy that motivates patients, tracks their progress, and bridges the gap between healthcare providers and patients, regardless of their location.
          </p>
        </div>
      </div>
      
      {/* Second Row */}
      <div className="flex flex-col md:flex-row gap-8 p-2 bg-[#E5D8FF]">
        <div className="md:w-[50%] flex flex-col m-10 justify-start">
        <h2 className="text-3xl font-bold text-[#7440DE]">Vision</h2>
          <p className="text-lg">
          To transform the landscape of stroke rehabilitation by offering cutting-edge, interactive, and personalized therapy that improves patient outcomes and quality of life, ensuring every patient receives engaging and effective care.
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
