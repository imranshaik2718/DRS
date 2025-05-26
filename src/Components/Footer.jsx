import { FaYoutube, FaInstagram, FaTwitter, FaDiscord } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
  };

  return (
    <footer className="bg-black text-white py-10 px-4 flex flex-col items-center space-y-6 text-sm">
      
      {/* Animate the logo container */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="w-[200px]"
      >
        <DotLottieReact
          src="https://lottie.host/32b8cc8f-6e91-47bd-bc0b-00fe88a07311/v1hdishb3S.lottie"
          loop
          autoplay
          className="w-full"
        />
      </motion.div>

      {/* Social Icons */}
      <div className="flex space-x-6 text-xl">
        <a href="https://www.youtube.com/@deepranjansachan"><FaYoutube className="hover:text-gray-400 cursor-pointer" /></a>
        <a href="https://www.instagram.com/deepranjansachan/"><FaInstagram className="hover:text-gray-400 cursor-pointer" /></a>
        <HiOutlineMail className="hover:text-gray-400 cursor-pointer" />
        <FaDiscord className="hover:text-gray-400 cursor-pointer" />
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        <span className="cursor-pointer hover:underline">+</span>
        <span className="cursor-pointer hover:underline">Contact</span>
        <span className="cursor-pointer hover:underline">Privacy Policy</span>
        <span className="cursor-pointer hover:underline">Terms of Service</span>
        <span className="cursor-pointer hover:underline">Returns & FAQ</span>
        <span className="cursor-pointer hover:underline">+</span>
      </div>

      {/* Bottom Info */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 items-center">
        <span className="cursor-pointer hover:underline">+</span>
        <span>© 2025 DRS</span>
        <span>Powered by *****</span>
        <span className="cursor-pointer hover:underline">+</span>
      </div>
    </footer>
  );
}
