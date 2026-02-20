import React from "react";
import { FaPhoneAlt, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import about_img from "../../assets/about_img.png";
import "./About.css";

function About() {
  return (
    <section className="bg-[#f5f1ed] py-10 lg:py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-20 items-center">

        {/* LEFT COLUMN (Image & Contact) - Order 2 on Mobile, Order 1 on Desktop */}
        <div className="flex flex-col items-center space-y-8 order-2 lg:order-1 w-full">

          {/* Image Wrapper */}
          <div className="about-img-container w-full">
            <div className="w-full h-[300px] lg:h-[520px] overflow-hidden">
              <img
                src={about_img}
                alt="Salon Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>


          {/* Contact Box */}
          <div className="w-full bg-[#e9e6e2] flex items-stretch">

            {/* Icon */}
            <div className="bg-[#c79a5b] w-[80px] lg:w-[110px] flex items-center justify-center shrink-0">
              <FaPhoneAlt className="text-3xl lg:text-4xl text-[#2d2b2b]" style={{ transform: 'scaleX(-1)' }} />
            </div>

            {/* Text */}
            <div className="p-6 lg:px-8 lg:py-7 flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl font-serif text-[#1a1a1a]">
                +91 9876543210
              </h3>
              <p className="text-sm lg:text-base text-gray-600 mt-1">
                Call us direct 24/7 for get a free consultation
              </p>
            </div>

          </div>

        </div>


        {/* RIGHT COLUMN (Text & Stats) - Order 1 on Mobile, Order 2 on Desktop */}
        <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 w-full">

          {/* Headings */}
          <div>
            <h4 className="text-[#c79a5b] text-4xl lg:text-5xl about-script-text mb-4">
              About Us
            </h4>

            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-black leading-tight">
              Why People Choose Us!
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas eget libero lobortis, auctor nisi quis, aliquet nunc.
            Nam dapibus interdum lacus, suscipit tempor odio viverra
            aliquam. Etiam non ex ex.
          </p>

          {/* Stats Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">

            <div className="bg-[#e9e6e2] p-8 lg:p-10 text-center">
              <FaCalendarAlt className="text-4xl lg:text-5xl text-[#c79a5b] mx-auto mb-4" />
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-black">
                25
              </h3>
              <p className="text-gray-600 uppercase text-xs lg:text-sm mt-2">
                YEARS EXPERIENCE
              </p>
            </div>

            <div className="bg-[#e9e6e2] p-8 lg:p-10 text-center">
              <FaUsers className="text-4xl lg:text-5xl text-[#c79a5b] mx-auto mb-4" />
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-black">
                999
              </h3>
              <p className="text-gray-600 uppercase text-xs lg:text-sm mt-2">
                HAPPY CUSTOMERS
              </p>
            </div>

          </div>

          {/* Read More Button */}
          <div className="custom-button-wrapper">
            <Link to="/about" className="custom-button">
              READ MORE
            </Link>
          </div>



        </div>

      </div>
    </section>
  );
}

export default About;
