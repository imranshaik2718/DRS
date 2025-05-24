import React, { useState } from "react";
import ad from "../assets/Products/02-pdp-h12b-gallery-1920.webp";
import ad2 from "../assets/Products/41SZU5t4f1L._SY300_SX300_QL70_FMwebp_.webp";
const Advertisement = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className="transform text-center text-xs bg-[#f6f6f6] text-[#1f1f1f] pt-10">
        ADVERTISEMENT
      </div>
      <div className="font-sans bg-[#f6f6f6] text-[#1f1f1f]">
        {/* Hero Section */}
        <div className="flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl h-64 bg-gray-500 text-white flex overflow-hidden rounded shadow-lg">
            {/* Text Content */}
            <div className="w-1/2 p-6 flex flex-col justify-center space-y-4">
              <h1 className="text-4xl font-bold">
                <span className="text-blue-800">Every Moment</span>
              </h1>
              <h2 className="text-3xl font-medium">With GoPro HERO12</h2>
              <div className="flex items-center space-x-4 mt-4">
                <img
                  src={ad}
                  alt="SEMRush logo"
                  className="w-8 h-8"
                />
                <span className="text-xl font-semibold">GoPro Hero 12</span>
              </div>
              <button className="mt-4 bg-white text-black px-6 py-2 text-lg font-semibold rounded">
                Try For Free
              </button>
            </div>

            {/* Image Section */}
            <div className="w-1/2 relative h-full">
              <img
                src={ad}
                alt="Man on laptop"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-50 rounded-full w-6 h-6 flex items-center justify-center"
                aria-label="Close advertisement"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      </div>






      


    </>
  );
};

export default Advertisement;
