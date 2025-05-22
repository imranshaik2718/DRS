import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import BMW from "../assets/images/Bmw.webp";
import CB from "../assets/images/CB500.jpg";
import Honda from "../assets/images/Honda.jpg";

function Bike() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-12 relative">
        <h1
          className="text-4xl font-bold text-gray-800 inline-block border-b-4 border-gray-400 pb-2"
          data-aos="fade-down"
        >
          Bikes
        </h1>
      </div>

      {/* Bikes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* BMW */}
        <div className="text-center group" data-aos="fade-up">
          <Link to="/BMW">
            <img
              src={BMW}
              alt="BMW F 850 GSA"
              className="w-full h-auto max-w-md mx-auto rounded-lg  transition-transform duration-300 group-hover:scale-105 "
            />
          </Link>
          <p className="mt-4 text-lg font-semibold text-gray-700 transition-opacity duration-300 group-hover:opacity-80">
            BMW F 850 GSA
          </p>
        </div>

        {/* Honda H'ness */}
        <div className="text-center group" data-aos="fade-up" data-aos-delay="100">
          <img
            src={Honda}
            alt="Honda H'ness CB350"
            className="w-full h-auto max-w-md mx-auto rounded-lg  transition-transform duration-300 group-hover:scale-105 "
          />
          <p className="mt-4 text-lg font-semibold text-gray-700 transition-opacity duration-300 group-hover:opacity-80">
            Honda H'ness CB350
          </p>
        </div>

        {/* Honda CB500X */}
        <div className="text-center group" data-aos="fade-up" data-aos-delay="200">
          <img
            src={CB}
            alt="Honda CB500X"
            className="w-full h-auto max-w-md mx-auto rounded-lg transition-transform duration-300 group-hover:scale-105 "
          />
          <p className="mt-4 text-lg font-semibold text-gray-700 transition-opacity duration-300 group-hover:opacity-80">
            Honda CB500X
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bike;
