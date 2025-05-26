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
            const el = entry.target;

            // Animate Bikes heading letter-by-letter
            if (el.dataset.type === "bikes-title") {
              const letters = el.querySelectorAll("span");
              letters.forEach((span, i) => {
                setTimeout(() => {
                  span.classList.remove("opacity-0", "translate-y-5");
                  span.classList.add("opacity-100", "translate-y-0");
                }, i * 100);
              });
            }

            // Animate Rider from left and right
            if (el.dataset.type === "rider-word") {
              const [left, right] = el.children;
              left.classList.add("animate-fade-in-left");
              right.classList.add("animate-fade-in-right");
            }

            // Animate each bike card
            if (el.dataset.type === "bike-card") {
              el.classList.remove("opacity-0", "translate-y-10");
              el.classList.add("opacity-100", "translate-y-0");
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const bikes = [
    { img: BMW, title: "BMW F 850 GSA", link: "#" },
    { img: Honda, title: "Honda H'ness CB350", link: "#" },
    { img: CB, title: "Honda CB500X", link: "#" },
  ];

  return (
    <div className="bg-white py-16 px-4">
      {/* Animated Heading: B I K E S */}
      <div
        className="flex justify-center space-x-2 text-4xl font-bold text-gray-800 pb-2  "
        data-type="bikes-title"
        ref={(el) => (refs.current[0] = el)}
      >
        {"Bikes".split("").map((char, i) => (
          <span
            key={i}
            className="opacity-0 translate-y-5 transition-all duration-500"
          >
            {char}
          </span>
        ))}
      </div>

      {/* Bikes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-12">
        {bikes.map((bike, index) => (
          <div
            key={index}
            ref={(el) => (refs.current[index + 2] = el)}
            data-type="bike-card"
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

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-100%); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(100%); }
            to { opacity: 1; transform: translateX(0); }
          }

          .animate-fade-in-left {
            animation: fadeInLeft 0.8s ease-out forwards;
          }

          .animate-fade-in-right {
            animation: fadeInRight 0.8s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}

export default Bike;
