import React from 'react';
import { Scissors, Sparkles, Hand, Footprints, Flower2, ArrowRight } from 'lucide-react';
import './Service.css';

const ServicesSection = () => {
  const title = "Explore Our Services";
  const subtitle = "Our Services";
  const services = [
    {
      id: 1,
      title: "Haircut",
      description: "Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo et tempor eirmod magna dolore erat amet",
      icon: <Scissors size={48} strokeWidth={1} className="text-[#C5A059]" />,
    },
    {
      id: 2,
      title: "Makeup",
      description: "Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo et tempor eirmod magna dolore erat amet",
      icon: <Sparkles size={48} strokeWidth={1} className="text-[#C5A059]" />,
    },
    {
      id: 3,
      title: "Manicure",
      description: "Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo et tempor eirmod magna dolore erat amet",
      icon: <Hand size={48} strokeWidth={1} className="text-[#C5A059]" />,
    },
    {
      id: 4,
      title: "Pedicure",
      description: "Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo et tempor eirmod magna dolore erat amet",
      icon: <Footprints size={48} strokeWidth={1} className="text-[#C5A059]" />,
    },
    {
      id: 5,
      title: "Massage",
      description: "Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo et tempor eirmod magna dolore erat amet",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#bbc646ff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 14c.5.5 1 1 2 1s2-1 3-1 2.5 1 3.5 1 1.5-.5 2-1" />
          <path d="M12 11c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
          <path d="M18 15c-1-1-2-1-3-1s-2 1-3 1-2-1-3-1-2 1-3 1" />
          <path d="M4 19c2-1 4-1 6-1s4 1 6 1 4-1 6-1" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Skin Care",
      description: "Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo et tempor eirmod magna dolore erat amet",
      icon: <Flower2 size={48} strokeWidth={1} className="text-[#C5A059]" />,
    },
  ];

  return (
    <section className="p-4 bg-white font-serif">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h4 className="text-[#C5A059] text-5xl mb-4 script-font">
          {subtitle}
        </h4>

        <h2 className="text-4xl md:text-5xl text-[#333] font-semibold tracking-tight">
          {title}
        </h2>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col items-center p-12 text-center transition-all duration-300 hover:bg-gray-50 border-[#e5e7eb]
              ${index !== services.length - 1 ? 'border-b' : ''}
              ${index >= 3 ? 'lg:border-b-0' : ''}
              ${index % 3 !== 2 ? 'lg:border-r' : ''}
            `}
          >
            <div className="mb-8 transform transition-transform duration-300 hover:scale-110">
              {service.icon}
            </div>

            <h3 className="text-2xl font-medium text-[#333] mb-4">
              {service.title}
            </h3>

            <p className="text-gray-500 leading-relaxed mb-8 max-w-xs text-sm">
              {service.description}
            </p>

            <div className="custom-button-wrapper">
              <button className="custom-button">
                READ MORE <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
