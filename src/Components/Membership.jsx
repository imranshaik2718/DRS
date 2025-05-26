import React, { useState, useRef, useEffect } from "react";
import vid from "../assets/Video/Membership.mp4";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Membership() {
  const [showVideo, setShowVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay failed:", err);
      });
    }
  }, [showVideo]);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="mx-auto overflow-hidden bg-[#f6f6f6] text-[#1f1f1f] mt-2 relative pb-3">
      <div className="flex items-center justify-center">
        {!showVideo && (
          <div className="flex">
            <button
              onClick={() => setShowVideo(true)}
              className="font-semibold gap-2 cursor-pointer text-[20px] group flex items-center justify-center text-yellow-600 border-gray-600 hover:text-gray-300 transition"
            >
              Membership
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m5-5h5v5m-11 11L21 3"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {showVideo && (
        <div className="w-full px-10 text-black rounded-lg overflow-hidden py-20 flex justify-center items-center gap-10 mx-auto">
          <div className="w-full md:w-1/2 relative">
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-4xl cursor-pointer"
              autoPlay
              playsInline
              muted={false}
              controls={false}
              onClick={handleVideoClick}
            >
              <source src={vid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Optional play/pause status */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 text-sm rounded-full pointer-events-none">
              {isPlaying ? "Pause" : "Play"}
            </div>
          </div>

          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 flex">
              Mauj Pack{" "}
              <DotLottieReact
                src="https://lottie.host/bf7e986b-4b97-4ac6-ad92-0316dec719d3/3CIbyNhrHD.lottie"
                loop
                className="w-[60px]"
                autoplay
              />
            </h2>
            <p className="text-blue-400 text-lg mb-4">₹89.00/month</p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4">
              <a href="https://www.youtube.com/@deepranjansachan/videos">
                Join
              </a>
            </button>

            <p className="text-sm text-gray-400 mb-4">
              Recurring payment. Cancel at any time. Creator may update perks.
            </p>

            <h3 className="text-md font-semibold mb-2">
              Loyalty badges next to your name in comments and live chat
            </h3>
            <div className="flex gap-2 mb-4">
              <span className="text-xl">🔷</span>
              <span className="text-xl">🔷</span>
              <span className="text-xl">🟡</span>
              <span className="text-xl">🟠</span>
              <span className="text-xl">🔴</span>
              <span className="text-xl">🟣</span>
            </div>

            <h3 className="text-md font-semibold mb-2">
              Custom emoji to use in comments and live chat
            </h3>
            <div className="flex gap-2 text-2xl mb-4">
              <span>👍</span>
              <span>💥</span>
              <span>🤘</span>
            </div>

            <ul className="text-sm space-y-2 mb-4">
              <li>✅ Priority reply to comments</li>
              <li>✅ Members-only live streams</li>
              <li>✅ Photos and status updates</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
