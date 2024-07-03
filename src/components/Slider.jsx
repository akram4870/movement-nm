import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([
    { title: "Devthon 1st Runners up", src: "Devthon.jpg" },
    { title: "CodeSprint Winners 2024", src: "codesprint1.jpg" },
    { title: "CodeSprint Winners 2024", src: "codesprint2.jpg" },
    { title: "CodeSprint Winners 2024", src: "codesprint3.jpg" },
    { title: "Dialog Innovation Challenge 2024", src: "Dialog.jpg" },
    { title: "Team", src: "Team.jpg" },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const getImagesToShow = () => {
    const indices = [
      currentIndex,
      (currentIndex + 1) % images.length,
      (currentIndex + 2) % images.length,
    ];

    return indices.map((index) => images[index]);
  };

  return (
    <div className="text-center mb-8 bg-[#D4BFFF] py-7">
      <h2 className="text-2xl font-semibold text-[#7440DE] mb-1 ">
        Our Achievements
      </h2>
      <p className="text-gray-700 m-auto w-[70%]">
        moveMate has gained recognition by winning multiple competitions for its innovative approach to brain-stroke hand-motor rehabilitation.
      </p>
      <div className="flex flex-wrap justify-center mt-8">
        {getImagesToShow().map((image, index) => (
          <div key={index} className="max-w-xs mx-4 my-4">
            <img src={image.src} alt={image.title} className="w-full h-auto rounded-md" />
            <p className="text-center text-gray-800 font-semibold mt-2">{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
