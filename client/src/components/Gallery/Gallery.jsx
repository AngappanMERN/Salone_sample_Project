import React from "react";
import "./Gallery.css";
import img1 from "../../assets/Gallery_image/gallery-1.jpg";
import img2 from "../../assets/Gallery_image/gallery-2.jpg";
import img3 from "../../assets/Gallery_image/gallery-3.jpg";
import img4 from "../../assets/Gallery_image/gallery-4.jpg";
import img5 from "../../assets/Gallery_image/gallery-5.jpg";
import img6 from "../../assets/Gallery_image/gallery-6.jpg";

const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
];

export default function GalleryGrid() {
    const subtitle = "Gallery";
    const title = "Explore Our Gallery";

    return (
        <div className="gallery-grid-wrapper">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h4 className="text-[#C5A059] text-5xl mb-4 script-font">
                    {subtitle}
                </h4>

                <h2 className="text-4xl md:text-5xl text-[#333] font-semibold tracking-tight">
                    {title}
                </h2>
            </div>

            <div className="gallery-grid">
                {images.map((img, index) => (
                    <div key={index} className="gallery-grid__item">
                        <img src={img} alt={`Gallery Image ${index + 1}`} loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    );
}