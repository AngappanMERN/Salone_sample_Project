import React from "react";
import "./Members.css";

// Import images from assets as requested
import tememeb1 from "../../assets/Member_image/team-1.jpg";
import tememeb2 from "../../assets/Member_image/team-2.jpg";
import tememeb3 from "../../assets/Member_image/team-3.jpg";
import tememeb4 from "../../assets/Member_image/team-4.jpg"; // Assuming a 4th image exists based on "list_dir" output

// Social Icons
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// Data Array
const members = [
    {
        id: 1,
        name: "Lily Taylor",
        role: "Hair Specialist",
        image: tememeb1,
    },
    {
        id: 2,
        name: "Olivia Smith",
        role: "Nail Designer",
        image: tememeb2,
    },
    {
        id: 3,
        name: "Ava Brown",
        role: "Beauty Specialist",
        image: tememeb3,
    },
    {
        id: 4,
        name: "Amelia Jones",
        role: "Spa Specialist",
        image: tememeb4,
    },
];

export default function Members() {
    const subtitle = "Team Members";
    const title = "Our Experienced Specialists";

    return (
        <div className="members-grid-wrapper bg-white py-20 relative overflow-hidden">

            {/* Header Section (Reusing style from Gallery) */}
            <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
                <h4 className="text-[#C5A059] text-5xl mb-4 script-font" style={{ fontFamily: "'Great Vibes', cursive" }}>
                    {subtitle}
                </h4>
                <h2 className="text-4xl md:text-5xl text-[#333] font-semibold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {title}
                </h2>
            </div>

            {/* Gold Background Strip */}
            <div className="absolute top-[60%] left-0 w-full h-48 bg-[#c79a5b] -translate-y-1/2 z-0 hidden lg:block"></div>

            {/* Grid Container */}
            <div className="members-grid relative z-10 px-4">
                {members.map((member) => (
                    <div key={member.id} className="members-grid__item group bg-white shadow-lg overflow-hidden">
                        {/* Image Container with Zoom Effect */}
                        <div className="overflow-hidden relative">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay Content */}
                            <div className="member-info-overlay">
                                <p className="text-[#c79a5b] italic font-semibold text-base mb-1">{member.role}</p>
                                <h3 className="text-2xl font-serif font-bold text-[#333] mb-4">{member.name}</h3>

                                {/* Social Icons with Frame Style */}
                                <div className="member-socials">
                                    <div className="member-social-wrapper">
                                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="member-social-box">
                                            <FaFacebookF size={14} />
                                        </a>
                                    </div>

                                    <div className="member-social-wrapper">
                                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="member-social-box">
                                            <FaInstagram size={14} />
                                        </a>
                                    </div>

                                    <div className="member-social-wrapper">
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="member-social-box">
                                            <FaLinkedinIn size={14} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
