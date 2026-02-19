import React from 'react';
import { FaCalendarAlt, FaFolderOpen, FaArrowRight } from "react-icons/fa";
import blog1 from "../../assets/Blog_image/blog-1.jpg";
import blog2 from "../../assets/Blog_image/blog-2.jpg";
import "../About/About.css"; // Importing About.css for the custom button styles
import "./Blog.css"; // Importing Blog.css for layout and hover overrides

function Blog() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-y-[2px] xl:gap-0">

                {/* Item 1: Text Content */}
                <div className="h-full flex flex-col justify-center bg-[#C5A059] p-8 lg:p-10">
                    <p className="mb-2 text-sm flex items-center text-gray-800 font-medium">
                        <FaCalendarAlt className="mr-2" /> Jan 01, 2045
                        <span className="mx-2">|</span>
                        <FaFolderOpen className="mr-2" /> Hair Salon
                    </p>
                    <h3 className="mb-4 text-2xl font-serif font-bold text-[#1a1a1a]">
                        How to Extend The Life of Your Haircolor
                    </h3>
                    <p className="mb-6 text-gray-800 leading-relaxed font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero lobortis, auctor nisi quis, aliquet nunc. Nam dapibus interdum lacus.
                    </p>

                    {/* Custom Button Structure */}
                    <div className="blog-btn-wrapper self-start mt-2 relative inline-block p-2">
                        <a className="blog-btn text-xs px-6 py-3">
                            READ MORE <FaArrowRight />
                        </a>
                    </div>
                </div>

                {/* Item 2: Image */}
                <div className="h-full min-h-[300px]">
                    <img src={blog1} alt="Blog 1" className="w-full h-full object-cover" />
                </div>

                {/* Item 3: Text Content */}
                <div className="h-full flex flex-col justify-center bg-[#C5A059] p-8 lg:p-10">
                    <p className="mb-2 text-sm flex items-center text-gray-800 font-medium">
                        <FaCalendarAlt className="mr-2" /> Jan 01, 2045
                        <span className="mx-2">|</span>
                        <FaFolderOpen className="mr-2" /> Hair Salon
                    </p>
                    <h3 className="mb-4 text-2xl font-serif font-bold text-[#1a1a1a]">
                        Hottest Hairstyles and Haircuts in 2045
                    </h3>
                    <p className="mb-6 text-gray-800 leading-relaxed font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero lobortis, auctor nisi quis, aliquet nunc. Nam dapibus interdum lacus.
                    </p>
                    {/* Custom Button Structure */}
                    <div className="blog-btn-wrapper self-start mt-2 relative inline-block p-2">
                        <a className="blog-btn text-xs px-6 py-3">
                            READ MORE <FaArrowRight />
                        </a>
                    </div>
                </div>

                {/* Item 4: Image */}
                <div className="h-full min-h-[300px]">
                    <img src={blog2} alt="Blog 2" className="w-full h-full object-cover" />
                </div>

            </div>
        </div>
    );
}

export default Blog;
