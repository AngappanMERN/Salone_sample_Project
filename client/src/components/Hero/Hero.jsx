import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import heroImage from "../../assets/hero_image.png";
import heroImg2 from "../../assets/hero_img2.png";
import heroImg3 from "../../assets/hero_img3.png";
import heroImg4 from "../../assets/hero_img4.png";
import heroBg from "../../assets/Hero_backgrount_img.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="min-h-[85vh] lg:min-h-screen h-auto lg:h-[calc(100vh-15px)] bg-[#f5f1ed] flex items-center overflow-hidden">
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full h-full">

        {/* LEFT SIDE */}
        <div className="relative flex flex-col justify-center items-start text-left px-6 lg:px-20 py-16 md:py-32 lg:py-0 space-y-6 lg:space-y-12 overflow-hidden">
          {/* Background Image (Light/Faint) */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroBg}
              alt="Decorative Background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl">

            {/* Welcome */}
            <h2 className="text-[#c79a5b] text-5xl md:text-6xl welcome-text mb-4">
              Welcome
            </h2>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-semibold text-black leading-tight">
              Beauty Salon <br />
              Fashion for <br />
              Women
            </h1>

            {/* Contact Section */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 pt-8 sm:pt-12 justify-start items-start">

              {/* Call */}
              <div className="flex items-center gap-6">
                <div className="hero-icon-wrapper">
                  <div className="hero-icon-box">
                    <FaPhoneAlt className="text-xl" style={{ transform: 'scaleX(-1)' }} />
                  </div>
                </div>

                <div className="text-left">
                  <p className="text-xl font-serif text-[#c79a5b]">Call Us</p>
                  <p className="text-lg font-medium text-black">
                    +91 9876543210
                  </p>
                </div>
              </div>

              {/* Mail */}
              <div className="flex items-center gap-6">
                <div className="hero-icon-wrapper">
                  <div className="hero-icon-box">
                    <FaEnvelope className="text-xl" />
                  </div>
                </div>

                <div className="text-left">
                  <p className="text-xl font-serif text-[#c79a5b]">Mail Us</p>
                  <p className="text-lg font-medium text-black">
                    info@domain.com
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* RIGHT SIDE: Auto slider with right-side thumbnails */}
        <div className="relative h-[40vh] lg:h-full overflow-hidden">
          <div className="w-full h-full relative">
            <SliderController />
          </div>
        </div>

      </div>
    </section>
  );
}

function SliderController() {
  const images = [
    { src: heroImage, alt: "Beauty Salon 1" },
    { src: heroImg2, alt: "Beauty Salon 2" },
    { src: heroImg3, alt: "Beauty Salon 3" },
    { src: heroImg4, alt: "Beauty Salon 4" },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((s) => (s + 1) % images.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={img.alt}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${idx === active ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-20">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`w-20 h-14 overflow-hidden rounded-md border-2 transition-transform duration-200 focus:outline-none ${idx === active ? "scale-105 border-[#c79a5b]" : "border-white/60"
              }`}
            aria-label={`Show slide ${idx + 1}`}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </>
  );
}

export default Hero;
