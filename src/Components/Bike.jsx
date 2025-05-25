import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BMW from "../assets/images/Bmw.webp";
import CB from "../assets/images/CB500.jpg";
import Honda from "../assets/images/Honda.jpg";

function Bike() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.8 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const bikes = [
    {
      img: BMW,
      title: "BMW F 850 GSA",
      link: "#",
    },
    {
      img: Honda,
      title: "Honda H'ness CB350",
      link: "#",
    },
    {
      img: CB,
      title: "Honda CB500X",
      link: "#",
    },
  ];

  return (
    <div className="bg-white py-12 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 inline-block border-b-4 border-gray-400 pb-2">
          Bikes
        </h1>
      </div>

      {/* Bikes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {bikes.map((bike, index) => (
          <div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            className="text-center group opacity-0 translate-y-10 transform transition-all duration-700 ease-out"
          >
            <Link to={bike.link}>
              <img
                src={bike.img}
                alt={bike.title}
                className="w-full h-auto max-w-md mx-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="mt-4 text-lg font-semibold text-gray-700 group-hover:opacity-80">
              {bike.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bike;
