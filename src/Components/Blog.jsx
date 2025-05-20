import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";

export default function Blog() {
  const containerRef = useRef(null);
  const requestRef = useRef(null);
  const scrollX = useRef(0);
  const isPaused = useRef(true);

  const [slideWidth, setSlideWidth] = useState(0);
  const containerOuterRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const pauseDuration = 3000;
  const speed = 2.5;

  const slides = [
    {
      img: img1,
      title: "📍Ride to Kashmir",
      desc: "An unforgettable ride through the Himalayas.",
      no: "Ep-01 to Ep-06",
      link: "https://www.youtube.com/playlist?list=PLIy74-6iwMPbtkjl8wsEo2jl-9Ipt3Y1Z",
    },
    {
      img: img2,
      title: "📍SOUTH INDIA RIDE",
      desc: "Paradise of kerala.",
      no: "Ep-01 to Ep-07",
      link: "https://www.youtube.com/playlist?list=PLIy74-6iwMPZ3yMN5bxO-25U-KjrPxP30",
    },
    {
      img: img3,
      title: "📍North East Ride",
      desc: "The Land of Dawn-Lit Mountains",
      no: "Ep-01 to Ep-21",
      link: "https://www.youtube.com/playlist?list=PLIy74-6iwMPa9RqDiywC9op3Kx2JJtd1B",
    },
    {
      img: img4,
      title: "📍Monsoon Maharashtra Ride",
      desc: "A Blend of Heritage and Nature.",
      no: "Ep-01 to Ep-09",
      link: "https://www.youtube.com/playlist?list=PLIy74-6iwMPYisrKg5zeCCqJOrTQWaYr6",
    },
    {
      img: img5,
      title: "📍Ladakh Zanskar Ride",
      desc: "The Hidden Gem of the Himalayas.",
      no: "Ep-01 to Ep-09",
      link: "https://www.youtube.com/playlist?list=PLIy74-6iwMPYktZP3Pn1Ak-vla9oM1xha",
    },
    {
      img: img6,
      title: "📍Winter Spiti Ride",
      desc: "A high-altitude motorbike challenge.",
      no: "Ep-01 to Ep-08",
      link: "https://www.youtube.com/playlist?list=PLIy74-6iwMPYrNmKS6MKTf-f-GCh7gj2M",
    },
  ];

  const totalSlides = slides.length;
  const totalWidth = slideWidth * totalSlides;

  const animate = () => {
    if (!isPaused.current) {
      scrollX.current += speed;

      if (scrollX.current >= totalWidth) {
        scrollX.current = 0;
      }

      const modScroll = scrollX.current % totalWidth;
      const nearSlide = Math.round(modScroll / slideWidth);
      const boundary = nearSlide * slideWidth;

      if (Math.abs(modScroll - boundary) < speed) {
        isPaused.current = true;
        scrollX.current = scrollX.current - modScroll + boundary;

        setCurrentIndex(nearSlide % totalSlides);

        setTimeout(() => {
          isPaused.current = false;
          requestRef.current = requestAnimationFrame(animate);
        }, pauseDuration);

        if (containerRef.current) {
          containerRef.current.style.transform = `translateX(-${scrollX.current}px)`;
        }
        return;
      }
    }

    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${scrollX.current}px)`;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const updateWidth = () => {
      if (containerOuterRef.current) {
        setSlideWidth(containerOuterRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && slideWidth > 0) {
      isPaused.current = false;
      requestRef.current = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(requestRef.current);
  }, [isInView, slideWidth]);

  return (
    <div
      ref={sectionRef}
      className="pb-10 mx-auto w-full bg-[#f6f6f6] text-[#1f1f1f]"
    >
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-gray-700 to-gray-700 bg-clip-text">
          Latest Vlogs
        </h2>
        <p className="text-gray-500 mt-2 text-lg mb-5">
          Explore epic motorcycle adventures
        </p>
      </div>

      {/* Slideshow + Info + Zigzag Images in Row */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 mx-auto mt-10 max-w-7xl">
        {/* Slideshow */}
        <div
          ref={containerOuterRef}
          className="w-full md:w-[53vw] h-[45vh] overflow-hidden rounded-xl shadow-lg"
        >
          <div
            ref={containerRef}
            className="flex"
            style={{ width: "max-content", height: "100%" }}
          >
            {[...slides, ...slides].map((slide, i) => (
              <div
                key={i}
                className="flex-shrink-0"
                style={{ width: slideWidth, height: "100%" }}
              >
                <img
                  src={slide.img}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover block"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Slide info */}
        <div className="w-full md:w-[33%] text-left space-y-3">
          <h1 className="text-2xl font-bold text-black/55 mb-5">Playlist →</h1>
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-black transition">
            {slides[currentIndex].title}
          </h3>
          <p className="mt-3 text-gray-600 text-base group-hover:text-gray-800 transition">
            {slides[currentIndex].desc}
          </p>
          <p className="text-gray-600 text-base group-hover:text-gray-800 transition">
            {slides[currentIndex].no}
          </p>
          <a
            href={slides[currentIndex].link}
            className="inline-block mt-5 px-5 py-2 text-white bg-black rounded-full hover:bg-gray-800 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Now →
          </a>
        </div>

        {/* Zigzag Images */}
        <div className="relative w-full md:w-[33%] h-[500px]">
          <div className="absolute top-0 left-0 w-[240px] h-[160px] shadow-lg rotate-[-2deg] overflow-hidden z-30">
            <img
              src="https://via.placeholder.com/240x160"
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-[100px] right-0 w-[240px] h-[160px] shadow-xl rotate-[3deg] overflow-hidden z-20">
            <img
              src="https://via.placeholder.com/240x160"
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-[200px] left-[10px] w-[240px] h-[160px] shadow-md rotate-[-1deg] overflow-hidden z-10">
            <img
              src="https://via.placeholder.com/240x160"
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-[300px] right-[10px] w-[240px] h-[160px] shadow-md rotate-[2deg] overflow-hidden z-10">
            <img
              src="https://via.placeholder.com/240x160"
              alt="Image 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
