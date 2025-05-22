import { FaYoutube, FaInstagram, FaTwitter, FaDiscord } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4 flex flex-col items-center space-y-6 text-sm">
      {/* Logo */}
      <div>
         <DotLottieReact
      src="https://lottie.host/3f611734-cc3b-4e43-9fce-40d5f13daf6b/vHSzNcaVbN.lottie"
      loop
      autoplay
      className='w-[300px]'
    />
      </div>

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
