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
    // Clone testimonials to allow infinite scrolling effect
    const clonedTestimonials = [...testimonials, ...testimonials, ...testimonials];

    // Start at exactly the first element of the middle cloned block
    const [active, setActive] = useState(testimonials.length);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const subtitle = "Testimonials";
    const title = "What Our Clients Say";

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // set initial state
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActive((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActive((prev) => prev - 1);
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        // Reset position silently when reaching the clones to maintain infinite loop
        if (active <= testimonials.length - 1) {
            setActive(active + testimonials.length);
        } else if (active >= testimonials.length * 2) {
            setActive(active - testimonials.length);
        }
    };

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
                {/* Carousel Track */}
                <div className="w-full overflow-hidden py-10">
                    <div
                        className={`flex items-center ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                        style={{
                            transform: `translateX(calc(-${(active - (isMobile ? 0 : 1)) * (isMobile ? 100 : 33.333333)}%))`
                        }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {clonedTestimonials.map((item, index) => {
                            const isCenter = index === active;

                            return (
                                <div
                                    key={index}
                                    className="w-full md:w-1/3 flex-shrink-0 px-4"
                                >
                                    <div
                                        className={`relative p-8 h-[400px] shadow-lg text-center transition-all duration-500 transform overflow-hidden 
                                            ${isCenter
                                                ? "bg-[#c29555] text-white scale-105 z-10"
                                                : "bg-[#f5f5f5] text-gray-600 hover:-translate-y-2 scale-95 opacity-80"
                                            }`}
                                    >
                                        {/* Background Watermark */}
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                                            <FaQuoteLeft className={`text-[250px] ${isCenter ? "text-black" : "text-gray-400"}`} />
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10 flex flex-col items-center justify-between h-full py-4">
                                            <div className="mb-4">
                                                <FaQuoteLeft className={`text-4xl mx-auto ${isCenter ? "text-[#2d2b2b]" : "text-[#2d2b2b]"}`} />
                                            </div>

                                            <p className={`mb-6 leading-relaxed flex-grow text-[15px] ${isCenter ? "text-[#1a1a1a]" : "text-gray-600"}`}>
                                                {item.feedback}
                                            </p>

                                            <div className={`w-20 h-20 mx-auto mb-4 p-1 border ${isCenter ? "border-white" : "border-white"}`}>
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>

                                            <div>
                                                <h3 className={`text-xl font-serif mb-1 ${isCenter ? "text-[#1a1a1a]" : "text-[#1a1a1a]"}`}>
                                                    {item.name}
                                                </h3>
                                                <span className={`text-sm tracking-widest uppercase ${isCenter ? "text-[#1a1a1a]" : "text-gray-500"}`}>
                                                    {item.role}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-6">
                    <button
                        onClick={prevSlide}
                        className="bg-[#c29555] text-[#1a1a1a] w-12 h-12 flex items-center justify-center hover:bg-[#b0854c] transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <FaChevronLeft className="text-lg" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="bg-[#c29555] text-[#1a1a1a] w-12 h-12 flex items-center justify-center hover:bg-[#b0854c] transition-colors"
                        aria-label="Next testimonial"
                    >
                        <FaChevronRight className="text-lg" />
                    </button>
                </div>
            </div>
        </div>
    );
}
