import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Clients.css";
import client1 from "../../assets/Client_image/testimonial-1.jpg";
import client2 from "../../assets/Client_image/testimonial-2.jpg";
import client3 from "../../assets/Client_image/testimonial-3.jpg";
import client4 from "../../assets/Client_image/testimonial-4.jpg";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Regular Customer",
        image: client1,
        feedback: "The best salon experience I've ever had! The team is professional and the results are amazing.",
    },
    {
        id: 2,
        name: "Emily Davis",
        role: "Hair Care Client",
        image: client2,
        feedback: "I love my new haircut! The stylists here really listen to what you want.",
    },
    {
        id: 3,
        name: "Jessica Wilson",
        role: "Spa Guest",
        image: client3,
        feedback: "A wonderfully relaxing environment. The spa treatments are top-notch.",
    },
    {
        id: 4,
        name: "Jessica Wilson",
        role: "Spa Guest",
        image: client4,
        feedback: "A wonderfully relaxing environment. The spa treatments are top-notch.",
    }
];

export default function Clients() {
    const [activeIndex, setActiveIndex] = useState(1);
    const subtitle = "Testimonials";
    const title = "What Our Clients Say";

    // Auto-slide specifically for mobile
    useEffect(() => {
        const interval = setInterval(() => {
            if (window.innerWidth < 768) {
                setActiveIndex((prev) => (prev + 1) % testimonials.length);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const getVisibleTestimonials = () => {
        const len = testimonials.length;
        const prevIndex = (activeIndex - 1 + len) % len;
        const nextIndex = (activeIndex + 1) % len;

        return [
            { data: testimonials[prevIndex], isCenter: false },
            { data: testimonials[activeIndex], isCenter: true },
            { data: testimonials[nextIndex], isCenter: false },
        ];
    };

    const visibleItems = getVisibleTestimonials();

    return (
        <div className="clients-wrapper bg-[#f8f7f4] py-20">
            <div className="max-w-6xl mx-auto text-center mb-16 px-4">
                <h4 className="text-[#C5A059] text-5xl mb-4 script-font" style={{ fontFamily: "'Great Vibes', cursive" }}>
                    {subtitle}
                </h4>
                <h2 className="text-4xl md:text-5xl text-[#333] font-semibold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {title}
                </h2>
            </div>

            <div className="max-w-6xl mx-auto px-4 relative">
                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-3 text-[#C5A059] hover:text-[#b08e4f] bg-white shadow-md rounded-full z-20 transition-all transform hover:scale-110"
                    aria-label="Previous testimonial"
                >
                    <FaChevronLeft className="text-xl" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 p-3 text-[#C5A059] hover:text-[#b08e4f] bg-white shadow-md rounded-full z-20 transition-all transform hover:scale-110"
                    aria-label="Next testimonial"
                >
                    <FaChevronRight className="text-xl" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {visibleItems.map((item, index) => (
                        <div
                            key={item.data.id}
                            className={`relative p-8 h-[400px] shadow-lg text-center transition-all duration-300 transform overflow-hidden 
                                ${!item.isCenter ? "hidden md:block" : "block"} 
                                ${item.isCenter
                                    ? "bg-[#C5A059] text-white scale-105 z-10"
                                    : "bg-white text-gray-600 hover:-translate-y-2"
                                }`}
                        >
                            {/* Background Watermark */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-11">
                                <FaQuoteLeft className={`text-[300px] ${item.isCenter ? "text-white" : "text-gray-900"}`} />
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="mb-6 flex justify-center">
                                    <FaQuoteLeft className={`text-4xl ${item.isCenter ? "text-[#333]" : "text-[#555]"}`} />
                                </div>

                                <p className={`italic mb-6 leading-relaxed ${item.isCenter ? "text-white" : "text-gray-600"}`}>
                                    "{item.data.feedback}"
                                </p>

                                <div className={`w-24 h-24 mx-auto mb-6 p-1 border ${item.isCenter ? "border-white" : "border-[#C5A059]"}`}>
                                    <img src={item.data.image} alt={item.data.name} className="w-full h-full object-cover" />
                                </div>

                                <h3 className={`text-xl font-serif font-bold ${item.isCenter ? "text-[#333]" : "text-[#333]"}`}>
                                    {item.data.name}
                                </h3>
                                <span className={`text-sm font-medium ${item.isCenter ? "text-[#333]" : "text-[#C5A059]"}`}>
                                    {item.data.role}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
