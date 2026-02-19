import React from 'react'
import { ArrowRight } from 'lucide-react'
import './Price.css'
import haircutImg from '../../assets/Price_images/price_harecut.png'
import makeupImg from '../../assets/Price_images/price_makeup.png'
import manicureImg from '../../assets/Price_images/price_manicure.png'
import pedicureImg from '../../assets/Price_images/price_pedicure.png'
import massageImg from '../../assets/Price_images/price_massage.png'
import skincareImg from '../../assets/Price_images/price_skincare.png'

const pricingData = [
  {
    id: 1,
    title: "HAIRCUT",
    price: "$49",
    image: haircutImg
  },
  {
    id: 2,
    title: "MAKEUP",
    price: "$79",
    image: makeupImg
  },
  {
    id: 3,
    title: "MANICURE",
    price: "$59",
    image: manicureImg
  },
  {
    id: 4,
    title: "PEDICURE",
    price: "$49",
    image: pedicureImg
  },
  {
    id: 5,
    title: "MASSAGE",
    price: "$39",
    image: massageImg
  },
  {
    id: 6,
    title: "SKIN CARE",
    price: "$99",
    image: skincareImg
  }
];

function Price() {
  return (
    <section className="flex flex-col lg:flex-row w-full lg:h-screen bg-[#222]">
      {/* Left Columns - Gold Background */}
      <div className="w-full lg:w-1/2 bg-[#cc9e48] p-8 lg:p-12 xl:p-24 flex flex-col justify-center relative lg:overflow-hidden items-center text-center lg:items-start lg:text-left">
        <div className="mb-2">
          <h4 className="text-white text-4xl lg:text-5xl script-font mb-2">Pricing</h4>
        </div>

        <h2 className="text-[#333] text-3xl lg:text-4xl font-serif mb-2">Beauty Salon</h2>
        <h1 className="text-[#333] text-5xl lg:text-7xl xl:text-8xl font-serif tracking-widest uppercase mb-8 lg:mb-12">
          PRICING
        </h1>

        <div className="flex flex-col xl:flex-row gap-8 items-center xl:items-start">
          {/* Black Offer Box */}
          <div className="bg-[#222] p-6 lg:p-8 text-center min-w-[160px] lg:min-w-[180px] flex flex-col justify-center items-center aspect-square shrink-0">
            <h3 className="text-white text-lg lg:text-xl font-serif mb-2">Enjoy</h3>
            <div className="text-white text-4xl lg:text-6xl font-bold mb-2">20%</div>
            <h3 className="text-white text-lg lg:text-xl font-serif">Off</h3>
          </div>

          <div className="flex flex-col justify-center h-full pt-2 max-w-sm items-center text-center xl:items-start xl:text-left">
            <p className="text-[#333] mb-6 lg:mb-8 leading-relaxed text-sm lg:text-base">
              Lorem ipsum dolor sit, consectetur adipiscing elit.
              Maecenas eget libero lobortis, auctor nisi quis, aliquet nunc.
              Nam dapibus lacus.
            </p>

            <div className="custom-button-wrapper mt-auto self-center xl:self-start">
              <button className="custom-button border-white hover:bg-white hover:text-black">
                Get 20% Off <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Dark List */}
      <div className="w-full lg:w-1/2 bg-[#222] p-8 lg:p-12 xl:p-24 flex flex-col justify-center lg:h-screen">

        <div className="space-y-4">
          {pricingData.map((item) => (
            <div key={item.id} className="flex items-center group">

              {/* Image */}
              <div className="w-20 h-20 lg:w-24 lg:h-24 overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Box */}
              <div className="flex-1 bg-[#2a2a2a] h-20 lg:h-24 flex items-center justify-between px-4 lg:px-6 border-l-4 border-[#C5A059]">
                <div className="flex flex-col items-end w-full">
                  <h3 className="text-[#C5A059] text-xs lg:text-sm font-bold tracking-widest uppercase mb-1 text-right">
                    {item.title}
                  </h3>
                  <div className="text-white text-xl lg:text-2xl text-right">
                    {item.price}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
export default Price
