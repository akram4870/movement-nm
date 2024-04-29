import React, { useEffect } from 'react';
import "./HeroParallax.css"; // Import CSS for styling

const HeroParallax = () => {
  useEffect(() => {
    const hero = document.querySelector(".hero-parallax");

    window.addEventListener("scroll", () => {
      let offset = window.pageYOffset;
      hero.style.backgroundPositionY = offset * 0.7 + "px";
    });
  }, []);
  return (
    <div className="hero-parallax">
      <div className="hero-content">
        <h1 className="hero-title">About Us</h1>
        <p className="hero-description">
          We're not just revolutionizing rehabilitation; we're redefining
          resilience
        </p>
        <p className="hero-caption">
          With a fusion of cutting-edge technology and heartfelt empathy, our
          team is dedicated to empowering stroke survivors on their journey to
          recovery. Together, we're turning challenges into triumphs and
          restoring hope, one movement at a time.
        </p>
      </div>
    </div>
  );
};

export default HeroParallax;
