import React from "react";
import hero1 from "../assets/images/SAVE_20250514_235636-01.jpeg";
import { Link } from "react-router-dom";

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
          <p className="text-xl ml-5 font-extralight animate-[slideDown_1.5s_ease-out]">
            --Deep Ranjan Sachan
          </p>
          <button className="text-xs border-2 p-3 ml-4 mt-4 rounded-2xl hover:opacity-70 cursor-pointer transition animate-[slideDown_1s_ease-out] duration-300">
            <a href="#About"> About me</a>
          </button>
        </h1>
      </div>
      <ul className="z-50 absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col gap-5 text-[#b0b2c3] ">
        <li className=" w-8 hover:text-white animate-[slideDown_2.5s_ease-out]">
          <a href="https://www.youtube.com/@deepranjansachan" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                fill="currentColor"
                d="M549.7 124.1c-6.3-23.7-24.9-42.4-48.6-48.6C456.2 64 288 64 288 64S119.8 64 74.9 75.5c-23.7 6.3-42.3 24.9-48.6 48.6C15.8 168.1 15.8 256 15.8 256s0 87.9 10.5 131.9c6.3 23.7 24.9 42.4 48.6 48.6C119.8 448 288 448 288 448s168.2 0 213.1-11.5c23.7-6.3 42.4-24.9 48.6-48.6 10.5-44 10.5-131.9 10.5-131.9s0-87.9-10.5-131.9zM232 334V178l142 78-142 78z"
              />
            </svg>
          </a>
        </li>
        <li className="w-8  hover:text-white animate-[slideDown_2s_ease-out]">
          <a href="https://www.instagram.com/deepranjansachan/" target="_blank">
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
            href="mailto:deepranjan19@gmail.com"
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
          <Link to="/Map" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="File-Map-Fill--Streamline-Rounded-Fill-Material"
              height="34"
              width="37"
            >
              <path
                fill="currentColor"
                d="M4.5 21c-0.4 0 -0.75 -0.15 -1.05 -0.45 -0.3 -0.3 -0.45 -0.65 -0.45 -1.05V4.5c0 -0.4 0.15 -0.75 0.45 -1.05C3.75 3.15 4.1 3 4.5 3h15c0.4 0 0.75 0.15 1.05 0.45 0.3 0.3 0.45 0.65 0.45 1.05v15c0 0.4 -0.15 0.75 -0.45 1.05 -0.3 0.3 -0.65 0.45 -1.05 0.45H4.5Zm7.5 -15.025c-1.28335 0 -2.4125 0.44165 -3.3875 1.325 -0.975 0.88335 -1.4625 2.08335 -1.4625 3.6 0 1.26665 0.50835 2.50415 1.525 3.7125 1.01665 1.20835 1.95835 2.19585 2.825 2.9625 0.08335 0.06665 0.16665 0.11665 0.25 0.15 0.08335 0.03335 0.16665 0.05 0.25 0.05 0.08335 0 0.16665 -0.0125 0.25 -0.0375 0.08335 -0.025 0.16665 -0.07085 0.25 -0.1375 0.88335 -0.76665 1.82915 -1.75835 2.8375 -2.975 1.00835 -1.21665 1.5125 -2.45835 1.5125 -3.725 0 -1.51665 -0.4875 -2.71665 -1.4625 -3.6 -0.975 -0.88335 -2.10415 -1.325 -3.3875 -1.325Zm0 6.325c-0.38335 0 -0.7125 -0.1375 -0.9875 -0.4125 -0.275 -0.275 -0.4125 -0.60415 -0.4125 -0.9875 0 -0.38335 0.1375 -0.7125 0.4125 -0.9875 0.275 -0.275 0.60415 -0.4125 0.9875 -0.4125 0.38335 0 0.7125 0.1375 0.9875 0.4125 0.275 0.275 0.4125 0.60415 0.4125 0.9875 0 0.38335 -0.1375 0.7125 -0.4125 0.9875 -0.275 0.275 -0.60415 0.4125 -0.9875 0.4125Z"
                stroke-width="0.5"
              ></path>
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Hero;





































