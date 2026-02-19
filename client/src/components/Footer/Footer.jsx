import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaPaperPlane, FaAngleRight } from 'react-icons/fa';
import { BsScissors } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-[#191919] text-white-50 pt-20 pb-10" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-14">

                    {/* Left Column */}
                    <div className="lg:w-1/2 px-18">
                        <Link to="/" className="inline-block mb-6">
                            <h1 className="text-4xl text-[#c79a5b] font-serif font-bold flex items-center gap-2">
                                <BsScissors /> Salone
                            </h1>
                        </Link>
                        <p className="mb-6 leading-relaxed">
                            Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.
                        </p>
                        <p className="mb-3 flex items-center gap-3"><FaMapMarkerAlt className="text-white" /> 123 Street, New York, USA</p>
                        <p className="mb-3 flex items-center gap-3"><FaPhoneAlt className="text-white" /> +012 345 67890</p>
                        <p className="mb-6 flex items-center gap-3"><FaEnvelope className="text-white" /> info@example.com</p>

                        <div className="flex gap-4">
                            <div className="footer-icon-wrapper">
                                <a href="https://twitter.com/" className="footer-social-icon">
                                    <FaTwitter />
                                </a>
                            </div>
                            <div className="footer-icon-wrapper">
                                <a href="https://www.facebook.com/" className="footer-social-icon">
                                    <FaFacebookF />
                                </a>
                            </div>
                            <div className="footer-icon-wrapper">
                                <a href="https://www.linkedin.com/" className="footer-social-icon">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                            <div className="footer-icon-wrapper">
                                <a href="https://www.instagram.com/" className="footer-social-icon">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Vertical Divider (Desktop) */}
                    <div className="hidden lg:block w-px bg-gray-700"></div>

                    {/* Right Column */}
                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h5 className="text-[#c79a5b] text-xl font-bold mb-6 font-serif">Quick Links</h5>
                                <div className="flex flex-col gap-3">
                                    {['About Us', 'Contact Us', 'Our Services', 'Terms & Condition'].map((item) => (
                                        <Link key={item} to="" className="hover:text-[#c79a5b] transition-colors flex items-center gap-2">
                                            <FaAngleRight /> {item}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h5 className="text-[#c79a5b] text-xl font-bold mb-6 font-serif">Popular Links</h5>
                                <div className="flex flex-col gap-3">
                                    {['About Us', 'Contact Us', 'Our Services', 'Terms & Condition'].map((item) => (
                                        <Link key={item} to="" className="hover:text-[#c79a5b] transition-colors flex items-center gap-2">
                                            <FaAngleRight /> {item}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h5 className="text-[#c79a5b] text-xl font-bold mb-6 font-serif">Newsletter</h5>
                            <div className="relative max-w-md">
                                <input
                                    type="text"
                                    placeholder="Enter Your Email"
                                    className="w-full h-14 bg-transparent border border-gray-600 px-4 text-white focus:outline-none focus:border-[#c79a5b]"
                                />
                                <button className="absolute top-2 right-2 h-10 w-10 text-[#c79a5b] flex items-center justify-center hover:text-white transition-colors">
                                    <FaPaperPlane className="text-xl" />
                                </button>
                            </div>
                            <p className="mt-3 text-sm">Diam sed sed dolor stet amet eirmod</p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; <a href="#" className="border-b border-white text-[#c79a5b] hover:text-white">Your Site Name</a>, All Right Reserved.</p>
                    <p className="mt-2 md:mt-0">Designed By <a href="https://htmlcodex.com" className="border-b border-white text-[#c79a5b] hover:text-white">HTML Codex</a>, Distributed By <a href="https://themewagon.com" className="border-b border-white text-[#c79a5b] hover:text-white">ThemeWagon</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
