import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerHeight = window.innerHeight; 
      setScrolled(scrollTop > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-4 flex items-center justify-between text-sm font-medium uppercase">
        <div className="hidden md:flex space-x-5">
          <a href="#" className=" hover:opacity-60">Home</a>
          <a href="#Vlog" className=" hover:opacity-60">Vlogs</a>
          <a href="#Contact" className=" hover:opacity-60">Contact</a>
        </div>

        <div className="text-xl tracking-widest hover:scale-102 duration-800 font-semibold">
          <a href="#">DRS</a>
        </div>

        <div className="flex space-x-6">
          <a href="/" className="hover:opacity-60">Gallery</a>
          <a href="/Store" className="hover:opacity-60 hidden md:inline">Store</a>
          <a href="/Login" className="hover:opacity-60">Login</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
