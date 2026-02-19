import { Link } from "react-router-dom";
import { BsScissors } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isMobilePagesOpen, setIsMobilePagesOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full flex items-center justify-between bg-[#e9e6e2] h-20 pr-8 z-50 shadow-md">
            {/* Left Logo Section */}
            <div className="flex items-center gap-4 bg-[#c79a5b] h-20 px-4 lg:px-16">
                <BsScissors className="text-2xl md:text-4xl text-black" />

                <h1 className="text-2xl md:text-4xl font-serif font-semibold tracking-wide text-black">
                    Salone
                </h1>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex gap-8 text-sm font-medium tracking-wide text-bold">
                <Link to="/#home" className="text-black hover:text-[#c79a5b] transition duration-300 active:text-[#c79a5b]">HOME</Link>
                <Link to="/#about" className="text-black hover:text-[#c79a5b] transition duration-300">ABOUT</Link>
                <Link to="/#service" className="text-black hover:text-[#c79a5b] transition duration-300">SERVICE</Link>
                <Link to="/#price" className="text-black hover:text-[#c79a5b] transition duration-300">PRICE</Link>

                {/* Pages Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="text-black hover:text-[#c79a5b] transition duration-300 flex items-center gap-1"
                    >
                        PAGES
                        <span className={`transform transition-transform text-xs ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 bg-white border-2 border-[#c79a5b] rounded shadow-lg z-50 min-w-max">
                            <Link
                                to="/#gallery"
                                className="block px-4 py-2 text-black hover:bg-[#c79a5b] hover:text-white transition duration-300 border-b-2 border-[#e9e6e2]"
                                onClick={() => setIsDropdownOpen(false)}
                            >
                                Gallery
                            </Link>
                            <Link
                                to="/#clients"
                                className="block px-4 py-2 text-black hover:bg-[#c79a5b] hover:text-white transition duration-300 border-b-2 border-[#e9e6e2]"
                                onClick={() => setIsDropdownOpen(false)}
                            >
                                Clients
                            </Link>
                            <Link
                                to="/#members"
                                className="block px-4 py-2 text-black hover:bg-[#c79a5b] hover:text-white transition duration-300"
                                onClick={() => setIsDropdownOpen(false)}
                            >
                                Members
                            </Link>
                        </div>
                    )}
                </div>

                <Link to="/#contact" className="text-black hover:text-[#c79a5b] transition duration-300">CONTACT</Link>
            </nav>

            {/* Social Icons (Desktop) */}
            <div className="hidden lg:flex items-center gap-8">
                {/* Facebook */}
                <div className="social-cross-wrapper scale-75"> {/* Scaled down slightly for desktop header if needed */}
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-link-box">
                        <FaFacebookF size={20} />
                    </a>
                </div>

                {/* Instagram */}
                <div className="social-cross-wrapper scale-75">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link-box">
                        <FaInstagram size={20} />
                    </a>
                </div>

                {/* LinkedIn */}
                <div className="social-cross-wrapper scale-75">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link-box">
                        <FaLinkedinIn size={20} />
                    </a>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden text-2xl text-black z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>

            {/* Mobile Menu Overlay (Dropdown Style) */}
            <div className={`absolute top-full left-0 w-full bg-[#e9e6e2] z-40 flex flex-col items-center gap-6 py-8 shadow-xl transition-all duration-300 ease-in-out origin-top lg:hidden ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 pointer-events-none'}`}>
                <Link to="/#home" className="text-xl font-medium text-black hover:text-[#c79a5b]" onClick={() => setIsMenuOpen(false)}>HOME</Link>
                <Link to="/#about" className="text-xl font-medium text-black hover:text-[#c79a5b]" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
                <Link to="/#service" className="text-xl font-medium text-black hover:text-[#c79a5b]" onClick={() => setIsMenuOpen(false)}>SERVICE</Link>
                <Link to="/#price" className="text-xl font-medium text-black hover:text-[#c79a5b]" onClick={() => setIsMenuOpen(false)}>PRICE</Link>

                {/* Mobile Pages Links (Dropdown Style) */}
                <div className="w-full flex flex-col items-center">
                    <button
                        onClick={() => setIsMobilePagesOpen(!isMobilePagesOpen)}
                        className="text-xl font-medium text-black hover:text-[#c79a5b] flex items-center gap-2"
                    >
                        PAGES
                        <span className={`transform transition-transform text-sm ${isMobilePagesOpen ? 'rotate-180' : ''}`}>▼</span>
                    </button>

                    <div className={`flex flex-col items-center w-full overflow-hidden transition-all duration-300 ease-in-out ${isMobilePagesOpen ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                        <Link to="/#gallery" className="block w-full text-center py-2 text-lg text-gray-700 hover:bg-[#c79a5b] hover:text-white active:bg-[#c79a5b] active:text-white transition duration-300" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                        <Link to="/#clients" className="block w-full text-center py-2 text-lg text-gray-700 hover:bg-[#c79a5b] hover:text-white active:bg-[#c79a5b] active:text-white transition duration-300" onClick={() => setIsMenuOpen(false)}>Clients</Link>
                        <Link to="/#members" className="block w-full text-center py-2 text-lg text-gray-700 hover:bg-[#c79a5b] hover:text-white active:bg-[#c79a5b] active:text-white transition duration-300" onClick={() => setIsMenuOpen(false)}>Members</Link>
                    </div>
                </div>

                <Link to="/#contact" className="text-xl font-medium text-black hover:text-[#c79a5b]" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>



                {/* icon buttons - Mobile with Layout Styles */}
                <div className="flex gap-6 p-4 bg-[#f8f7f4] rounded-lg mt-2">
                    {/* Facebook */}
                    <div className="hero-icon-wrapper scale-75">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hero-icon-box w-[45px] h-[45px]">
                            <FaFacebookF size={14} />
                        </a>
                    </div>

                    {/* Instagram */}
                    <div className="hero-icon-wrapper scale-75">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hero-icon-box w-[45px] h-[45px]">
                            <FaInstagram size={14} />
                        </a>
                    </div>

                    {/* LinkedIn */}
                    <div className="hero-icon-wrapper scale-75">
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hero-icon-box w-[45px] h-[45px]">
                            <FaLinkedinIn size={14} />
                        </a>
                    </div>
                </div>

            </div>
        </header>
    );
}
