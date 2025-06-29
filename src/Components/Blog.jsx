import React, { useEffect, useRef, useState } from "react";

// Images
import L1 from "../assets/images/vlog/L1.jpg";
import L2 from "../assets/images/vlog/L2.jpg";
import L3 from "../assets/images/vlog/L3.jpg";
import L4 from "../assets/images/vlog/L4.jpg";
import L5 from "../assets/images/vlog/L5.jpg";
import L6 from "../assets/images/vlog/L6.jpg";
import L7 from "../assets/images/vlog/L7.jpg";
import L8 from "../assets/images/vlog/L8.jpg";
import latest8 from "../assets/images/vlog/latest3.jpg";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
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

const allVideos = {
  latest: [
    {
      title: "DELHI TO LEH NON STOP 1300 KMS IN 30 HRS | EP-01| DELHI-LEH..",
      views: "2.4M views",
      time: "1 year ago",
      thumbnail: L1,
      duration: "39:34",
      url: "https://youtu.be/VjDQykd0fU8?si=xsvuhG7DIcl6DXhe",
    },
    {
      title: "DELHI TO PUNE 1500 KMS NON STOP IN 27 HRS ...",
      views: "1.8M views",
      time: "2 years ago",
      thumbnail: L2,
      duration: "31:21",
      url: "https://youtu.be/XUEOGkWgnfI?si=HrbYurWKMFN2192h",
    },
    {
      title: "DELHI TO KOLKATA 1600 KMS NON STOP IN 30 HRS...",
      views: " 1.5M views",
      time: "2 years ago",
      thumbnail: L3,
      duration: "36:21",
      url: "https://youtu.be/bc-UXuYaXaw?si=DWdSusXIQMWnjVhP",
    },
    {
      title: "Delhi to Manali in Just 11 Hours at -7°C | Solo Ride |...",
      views: " 1.M views",
      time: "2 years ago",
      thumbnail: L4,
      duration: "28:42",
      url: "https://youtu.be/QJnZ6GbMjSc?si=SoXh1v8r5vOBDaYc",
    },
    {
      title: "DELHI TO KATHMANDU NEPAL IN JUST 22 HRS IN HEAVY RAIN 🔥 |...",
      views: "1.M views",
      time: "1 years ago",
      thumbnail: L5,
      duration: "39:17",
      url: "https://youtu.be/qOc7b7VvtiE?si=IBe70_JkPonfB4AU",
    },
    {
      title: "LADAKH RIDE 2021| Khardungla pass pe bike dead...",
      views: "771K views",
      time: "3 years ago",
      thumbnail: L6,
      duration: "25:36",
      url: "https://youtu.be/Fb5ORYtItK0?si=z8DCSYGJgGlXsY5h",
    },
    {
      title: "Khardungla Pass pe Snowfall ne Halat kharab Kar Di...",
      views: "665K views",
      time: "1 years ago",
      thumbnail: L7,
      duration: "24:09",
      url: "https://youtu.be/bGOL4nE5ByA?si=Zfe67X5EvA7dYJZC",
    },
    {
      title: "New RE Hunter 350 Vs Honda CB350 RS...",
      views: "582K views",
      time: "2 years ago",
      thumbnail: L8,
      duration: "16:33",
      url: "https://youtu.be/gVkOus8hOCQ?si=-zEW1jAFGlbJ0Ihj",
    },
  ],
  popular: [
    {
      title: "DELHI TO LEH NON STOP 1300 KMS IN 30 HRS | EP-01| DELHI-LEH..",
      views: "2.4M views",
      time: "1 year ago",
      thumbnail: L1,
      duration: "39:34",
      url: "https://youtu.be/VjDQykd0fU8?si=xsvuhG7DIcl6DXhe",
    },
    {
      title: "DELHI TO PUNE 1500 KMS NON STOP IN 27 HRS ...",
      views: "1.8M views",
      time: "2 years ago",
      thumbnail: L2,
      duration: "31:21",
      url: "https://youtu.be/XUEOGkWgnfI?si=HrbYurWKMFN2192h",
    },
    {
      title: "DELHI TO KOLKATA 1600 KMS NON STOP IN 30 HRS...",
      views: " 1.5M views",
      time: "2 years ago",
      thumbnail: L3,
      duration: "36:21",
      url: "https://youtu.be/bc-UXuYaXaw?si=DWdSusXIQMWnjVhP",
    },
    {
      title: "Delhi to Manali in Just 11 Hours at -7°C | Solo Ride |...",
      views: " 1.M views",
      time: "2 years ago",
      thumbnail: L4,
      duration: "28:42",
      url: "https://youtu.be/QJnZ6GbMjSc?si=SoXh1v8r5vOBDaYc",
    },
    {
      title: "DELHI TO KATHMANDU NEPAL IN JUST 22 HRS IN HEAVY RAIN 🔥 |...",
      views: "1.M views",
      time: "1 years ago",
      thumbnail: L5,
      duration: "39:17",
      url: "https://youtu.be/qOc7b7VvtiE?si=IBe70_JkPonfB4AU",
    },
    {
      title: "LADAKH RIDE 2021| Khardungla pass pe bike dead...",
      views: "771K views",
      time: "3 years ago",
      thumbnail: L6,
      duration: "25:36",
      url: "https://youtu.be/Fb5ORYtItK0?si=z8DCSYGJgGlXsY5h",
    },
    {
      title: "Khardungla Pass pe Snowfall ne Halat kharab Kar Di...",
      views: "665K views",
      time: "1 years ago",
      thumbnail: L7,
      duration: "24:09",
      url: "https://youtu.be/bGOL4nE5ByA?si=Zfe67X5EvA7dYJZC",
    },
    {
      title: "New RE Hunter 350 Vs Honda CB350 RS...",
      views: "582K views",
      time: "2 years ago",
      thumbnail: L8,
      duration: "16:33",
      url: "https://youtu.be/gVkOus8hOCQ?si=-zEW1jAFGlbJ0Ihj",
    },
  ],
  oldest: [
    {
      title: "DELHI TO LEH NON STOP 1300 KMS IN 30 HRS | EP-01| DELHI-LEH..",
      views: "2.4M views",
      time: "1 year ago",
      thumbnail: zip3,
      duration: "20:25",
      url: "https://www.youtube.com/watch?v=kG_W4xiJoKY",
    },
    {
      title: "Update After Pahalgam Attack...",
      views: "56K views",
      time: "4 weeks ago",
      thumbnail: latest8,
      duration: "6:23",
      url: "https://www.youtube.com/watch?v=rFg7FkPLqBg&t=79s",
    },
  ],
};

const slides = [
  {
    img: img1,
    title: "📍Ride to Kashmir",
    desc: "An unforgettable ride through the Himalayas.",
    no: "Ep-01 to Ep-06",
    link: "https://www.youtube.com/playlist?list=PLIy74-6iwMPbtkjl8wsEo2jl-9Ipt3Y1Z",
    zigzag: [zip2, zip1, zip3],
    views: "Views: 308,238",
  },
  {
    img: img2,
    title: "📍SOUTH INDIA RIDE",
    desc: "Paradise of Kerala.",
    no: "Ep-01 to Ep-07",
    link: "https://www.youtube.com/playlist?list=PLIy74-6iwMPZ3yMN5bxO-25U-KjrPxP30",
    zigzag: [zip4, zip5, zip6],
    views: "Views: 881,208",
  },
  {
    img: img3,
    title: "📍North East Ride",
    desc: "The Land of Dawn-Lit Mountains",
    no: "Ep-01 to Ep-21",
    link: "https://www.youtube.com/playlist?list=PLIy74-6iwMPa9RqDiywC9op3Kx2JJtd1B",
    zigzag: [zip8, zip7, zip9],
    views: "Views: 2,020,612",
  },
  {
    img: img4,
    title: "📍Monsoon Maharashtra Ride",
    desc: "A Blend of Heritage and Nature.",
    no: "Ep-01 to Ep-09",
    link: "https://www.youtube.com/playlist?list=PLIy74-6iwMPYisrKg5zeCCqJOrTQWaYr6",
    zigzag: [zip10, zip11, zip12],
    views: "Views: 663,514",
  },
  {
    img: img5,
    title: "📍Ladakh Zanskar Ride",
    desc: "The Hidden Gem of the Himalayas.",
    no: "Ep-01 to Ep-09",
    link: "https://www.youtube.com/playlist?list=PLIy74-6iwMPYktZP3Pn1Ak-vla9oM1xha",
    zigzag: [zip13, zip14, zip15],
    views: "Views: 929,846",
  },
  {
    img: img6,
    title: "📍Winter Spiti Ride",
    desc: "A high-altitude motorbike challenge.",
    no: "Ep-01 to Ep-08",
    link: "https://www.youtube.com/playlist?list=PLIy74-6iwMPYrNmKS6MKTf-f-GCh7gj2M",
    zigzag: [zip16, zip17, zip18],
    views: "Views: 802,694",
  },
];



export default function Blog() {
  const containerRef = useRef(null);
  const containerOuterRef = useRef(null);
  const requestRef = useRef(null);
  const scrollX = useRef(0);
  const isPaused = useRef(true);
  const sectionRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [filter, setFilter] = useState("latest");

  const pauseDuration = 3000;
  const speed = 2.5;

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
        if (containerRef.current) {
          containerRef.current.style.transform = `translateX(-${scrollX.current}px)`;
        }
        setTimeout(() => {
          isPaused.current = false;
          requestRef.current = requestAnimationFrame(animate);
        }, pauseDuration);
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
      requestAnimationFrame(() => {
        if (containerOuterRef.current) {
          setSlideWidth(containerOuterRef.current.offsetWidth);
        }
      });
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true);
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && slideWidth > 0) {
      isPaused.current = false;
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isInView, slideWidth]);

  const { zigzag } = slides[currentIndex];
  const filteredVideos = allVideos[filter];

  const goToSlide = (index) => {
  isPaused.current = true;
  scrollX.current = index * slideWidth;
  setCurrentIndex(index % totalSlides);
  if (containerRef.current) {
    containerRef.current.style.transform = `translateX(-${scrollX.current}px)`;
  }
  setTimeout(() => {
    isPaused.current = false;
    requestRef.current = requestAnimationFrame(animate);
  }, pauseDuration);
};


  return (
    <div ref={sectionRef} className="mx-auto w-full bg-[#f6f6f6] text-[#1f1f1f]">
      {/* Slide Section */}
      {/* ...Unchanged code from above... */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-gray-700 to-gray-700 bg-clip-text">
          Latest Vlogs
        </h2>
        <p className="text-gray-500 mt-2 text-lg mb-5">Explore epic motorcycle adventures</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-10 mx-auto mt-10 max-w-7xl">
        <div className="relative w-full md:w-[53vw] h-[45vh] overflow-hidden rounded-xl shadow-lg" ref={containerOuterRef}>
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

  {/* Navigation buttons */}
  <button
    onClick={() => goToSlide((currentIndex - 1 + totalSlides) % totalSlides)}
    className="absolute top-1/2 left-0 transform -translate-y-1/2   text-white/40 hover:text-white  rounded-full p-2 z-10"
  >
    ◀
  </button>
  <button
    onClick={() => goToSlide((currentIndex + 1) % totalSlides)}
    className="absolute top-1/2 right-0 transform -translate-y-1/2   text-white/40 hover:text-white rounded-full p-2 z-10"
  >
    ▶
  </button>
        </div>

        <div className="w-full md:w-[33%] text-left space-y-3">
          <h1 className="text-2xl font-bold text-black/55 mb-5">Playlist →</h1>
          <h3 className="text-2xl font-bold text-gray-800">{slides[currentIndex].title}</h3>
          <p className="mt-3 text-gray-600 text-base">{slides[currentIndex].desc}</p>
          <p className="text-gray-600 text-base">{slides[currentIndex].no}</p>
          <p className="text-gray-600 text-base">{slides[currentIndex].views}</p>
          <a
            href={slides[currentIndex].link}
            className="inline-block mt-5 px-5 py-2 text-white bg-black rounded-full hover:bg-gray-800 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Now →
          </a>
        </div>

        <div className="relative w-full md:w-[39%] h-[500px] -mt-5">
          <div className="absolute top-0 left-0 w-[280px] h-[160px] shadow-2xl shadow-black rotate-[-2deg] overflow-hidden z-30 rounded-2xl">
            <img src={zigzag[0]} alt="Zigzag 1" className="w-full h-full object-cover " />
          </div>
          <div className="absolute top-[100px] right-0 w-[280px] h-[160px] rotate-[3deg] shadow-2xl shadow-black overflow-hidden z-20 rounded-2xl">
            <img src={zigzag[1]} alt="Zigzag 2" className="w-full h-full object-cover " />
          </div>
          <div className="absolute top-[200px] left-[10px] w-[280px] h-[160px] shadow-2xl shadow-black rotate-[-1deg] overflow-hidden z-10 rounded-2xl">
            <img src={zigzag[2]} alt="Zigzag 3" className="w-full h-full object-cover " />
          </div>
        </div>
      </div>

      {/* YouTube Clone Section */}
      <div className="text-white p-4 -mt-25">
        <div className="flex justify-start gap-4 mb-6 mx-25">
          {["popular" ].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1 rounded-full ${
                filter === f ? "bg-black text-white" : "bg-neutral-800 text-gray-300"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-25 text-black/80">
          {filteredVideos.map((video, index) => (
            <a
              key={index}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full overflow-hidden block"
            >
              <img src={video.thumbnail} alt={video.title} className="w-full h-[180px] object-cover rounded-lg" />
              <div className="mt-2">
                <h3 className="text-base font-semibold">{video.title}</h3>
                <p className="text-sm text-gray-600">{video.views} • {video.time}</p>
              </div>
              <span className="absolute bottom-21  right-2 bg-black/40 text-white text-xs px-2 py-0.5 rounded">
                {video.duration}
              </span>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}

