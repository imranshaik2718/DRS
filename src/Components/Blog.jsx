import React, { useEffect, useRef, useState } from "react";

// Main slideshow images
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";

// Zigzag images (3 per slide)
import zip1 from "../assets/images/vlog/1st.jpg";
import zip2 from "../assets/images/vlog/2nd.jpg";
import zip3 from "../assets/images/vlog/3rd.jpg";
import zip4 from "../assets/images/vlog/4th.jpg";
import zip5 from "../assets/images/vlog/5th.jpg";
import zip6 from "../assets/images/vlog/6th.jpg";
import zip7 from "../assets/images/vlog/7th.jpg";
import zip8 from "../assets/images/vlog/8th.jpg";
import zip9 from "../assets/images/vlog/9th.jpg";
import zip10 from "../assets/images/vlog/10th.jpg";
import zip11 from "../assets/images/vlog/11th.jpg";
import zip12 from "../assets/images/vlog/12th.jpg";
import zip13 from "../assets/images/vlog/13th.jpg";
import zip14 from "../assets/images/vlog/14th.jpg";
import zip15 from "../assets/images/vlog/15th.jpg";
import zip16 from "../assets/images/vlog/16th.jpg";
import zip17 from "../assets/images/vlog/17th.jpg";
import zip18 from "../assets/images/vlog/18th.jpg";

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
      zigzag: [zip2,zip1,  zip3],
    },
    {
      img: img2,
      title: "📍SOUTH INDIA RIDE",
      desc: "Paradise of Kerala.",
      no: "Ep-01 to Ep-07",
      link: "https://www.youtube.com/playlist?list=PLIy74-6iwMPZ3yMN5bxO-25U-KjrPxP30",
      zigzag: [zip4, zip5, zip6],
    },
    {
      img: img3,
      title: "📍North East Ride",
      desc: "The Land of Dawn-Lit Mountains",
      no: "Ep-01 to Ep-21",
      link: "https://www.youtube.com/playlist?list=PLIy74-6iwMPa9RqDiywC9op3Kx2JJtd1B",
      zigzag: [zip8,zip7,  zip9],
    },
    {
      img: img4,
      title: "📍Monsoon Maharashtra Ride",
      desc: "A Blend of Heritage and Nature.",
      no: "Ep-01 to Ep-09",
      link: "https://www.youtube.com/playlist?list=PLIy74-6iwMPYisrKg5zeCCqJOrTQWaYr6",
      zigzag: [zip10, zip11, zip12],
    },
    {
      img: img5,
      title: "📍Ladakh Zanskar Ride",
      desc: "The Hidden Gem of the Himalayas.",
      no: "Ep-01 to Ep-09",
      link: "https://www.youtube.com/playlist?list=PLIy74-6iwMPYktZP3Pn1Ak-vla9oM1xha",
      zigzag: [zip13, zip14, zip15],
    },
    {
      img: img6,
      title: "📍Winter Spiti Ride",
      desc: "A high-altitude motorbike challenge.",
      no: "Ep-01 to Ep-08",
      link: "https://www.youtube.com/playlist?list=PLIy74-6iwMPYrNmKS6MKTf-f-GCh7gj2M",
      zigzag: [zip16, zip17, zip18],
    },
  ];

  const totalSlides = slides.length;
  const totalWidth = slideWidth * totalSlides;

  const animate = () => {
    if (!isPaused.current) {
      scrollX.current += speed;

      if (scrollX.current >= totalWidth) scrollX.current = 0;

      const modScroll = scrollX.current % totalWidth;
      const nearSlide = Math.round(modScroll / slideWidth);
      const boundary = nearSlide * slideWidth;

      if (Math.abs(modScroll - boundary) < speed) {
        isPaused.current = true;
        scrollX.current = boundary;

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

  const { zigzag } = slides[currentIndex];

  return (
    <div ref={sectionRef} className=" mx-auto w-full bg-[#f6f6f6] text-[#1f1f1f]">
      <div className="text-center mb-15">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-gray-700 to-gray-700 bg-clip-text" id="Vlog">
          Latest Vlogs
        </h2>
        <p className="text-gray-500 mt-2 text-lg mb-5">
          Explore epic motorcycle adventures
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-10 mx-auto mt-10 max-w-7xl">
        {/* Slideshow */}
        <div
          ref={containerOuterRef}
          className="w-full md:w-[53vw] h-[45vh] overflow-hidden rounded-xl shadow-lg"
        >
          <div ref={containerRef} className="flex" style={{ width: "max-content", height: "100%" }}>
            {[...slides, ...slides].map((slide, i) => (
              <div key={i} className="flex-shrink-0" style={{ width: slideWidth, height: "100%" }}>
                <img src={slide.img} alt={`Slide ${i + 1}`} className="w-full h-full object-cover block" />
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
        <div className="relative w-full md:w-[35%] h-[500px] -mt-5 ">
          <div className="absolute top-0 left-0 w-[240px] h-[160px] shadow-lg rotate-[-2deg] overflow-hidden z-30">
            <img src={zigzag[0]} alt="Zigzag 1" className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div className="absolute top-[100px] right-0 w-[240px] h-[160px] shadow-xl rotate-[3deg] overflow-hidden z-20">
            <img src={zigzag[1]} alt="Zigzag 2" className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div className="absolute top-[200px] left-[10px] w-[240px] h-[160px] shadow-md rotate-[-1deg] overflow-hidden z-10">
            <img src={zigzag[2]} alt="Zigzag 3" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
