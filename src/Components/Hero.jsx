import React from "react";
import hero1 from "../assets/images/SAVE_20250514_235636-01.jpeg";

function Hero() {
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Cinematic background image */}
      <img
        src={hero1}
        alt="Hero"
        className="w-full h-full object-cover brightness-75 saturate-125"
      />

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40"></div>

      {/* Cinematic text */}
        <style>
        {`
          @keyframes slideDown {
            0% {
              opacity: 0;
              transform: translateY(-40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

    
      <div className="absolute inset-0 flex items-center px-10 md:px-20 ">
        <h1 className="text-white text-4xl md:text-5xl font-[Georgia,serif] tracking-wide drop-shadow-2xl leading-tight animate-[slideDown_2s_ease-out]">
          Till now,
          <br />
          journey is just wow
          <p className="text-xl ml-5 font-extralight animate-[slideDown_1.5s_ease-out]">--Deep Ranjan Sachan</p>
          
          <button className="text-xs border-2 p-3 ml-4 mt-4 rounded-2xl hover:opacity-70 cursor-pointer transition animate-[slideDown_1s_ease-out] duration-300">
           <a href="/About"> About me</a>
          </button>
          
        </h1>
      </div>
      <ul className="z-50 absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col gap-5 text-[#b0b2c3] ">
        <li className=" w-8 hover:text-white animate-[slideDown_2.5s_ease-out]">
          <a
            href="https://www.youtube.com/@deepranjansachan"
            target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                fill="currentColor"
                d="M549.7 124.1c-6.3-23.7-24.9-42.4-48.6-48.6C456.2 64 288 64 288 64S119.8 64 74.9 75.5c-23.7 6.3-42.3 24.9-48.6 48.6C15.8 168.1 15.8 256 15.8 256s0 87.9 10.5 131.9c6.3 23.7 24.9 42.4 48.6 48.6C119.8 448 288 448 288 448s168.2 0 213.1-11.5c23.7-6.3 42.4-24.9 48.6-48.6 10.5-44 10.5-131.9 10.5-131.9s0-87.9-10.5-131.9zM232 334V178l142 78-142 78z"
              />
            </svg>
          </a>
        </li>
        <li className="w-8  hover:text-white animate-[slideDown_2s_ease-out]">
          <a
            href="https://www.instagram.com/deepranjansachan/"
            target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </a>
        </li>
        <li className=" hover:text-white animate-[slideDown_1.5s_ease-out]">
          <a
            href="deepranjan19@gmail.com"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-at-sign"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
            </svg>
          </a>
        </li>
        <li className="w-8  hover:text-white animate-[slideDown_1s_ease-out]">
          <a href="https://github.com/imranshaik2718" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Hero;
