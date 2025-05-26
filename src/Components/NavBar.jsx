import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import defaultProfile from "../assets/images/Gallery/img12.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerHeight = window.innerHeight;
      setScrolled(scrollTop > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem("loggedInUser");
    if (userData) {
      setLoggedInUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    const handleLogin = () => {
      const userData = localStorage.getItem("loggedInUser");
      if (userData) {
        setLoggedInUser(JSON.parse(userData));
      }
    };
    window.addEventListener("loginStatusChanged", handleLogin);
    return () => window.removeEventListener("loginStatusChanged", handleLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/");
  };

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-white  text-black shadow-md" : "bg-transparent text-white"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-4 flex items-center justify-between text-sm font-medium uppercase">
        <div className="hidden md:flex space-x-5">
          <a href="#" className="hover:opacity-60">Home</a>
          <a href="#Vlog" className="hover:opacity-60">Vlogs</a>
          <a href="#Contact" className="hover:opacity-60">Contact</a>
        </div>

       <div className={`text-xl tracking-widest font-semibold group cursor-pointer transition-all ${
  scrolled ? "hover:text-black" : "hover:text-white/60"
}`}>
  <Link to="/" className={`flex items-center hover:gap-5 hover:duration-500 ${
  scrolled ? "text-black" : "text-white"
}`}>

    <div className="flex items-center">
      <span className="transform transition-all duration-500 group-hover:translate-x-1">D</span>
      <span className="overflow-hidden transition-all duration-500 lowercase  max-w-0 group-hover:max-w-[80px] group-hover:ml-1">
        eep
      </span>
    </div>
    <div className="flex items-center">
      <span>R</span>
      <span className="overflow-hidden transition-all duration-500 lowercase  max-w-0 group-hover:max-w-[80px] group-hover:ml-1">
        anjan
      </span>
    </div>
    <div className="flex items-center">
      <span className="transform transition-all duration-500 group-hover:translate-x-1">S</span>
      <span className="overflow-hidden transition-all duration-500 lowercase  max-w-0 group-hover:max-w-[80px] group-hover:ml-1">
        achin
      </span>
    </div>
  </Link>
</div>




        <div className="flex space-x-6 items-center">
          <Link to="/Gallery" className="hover:opacity-60">Gallery</Link>
          <Link to="/Store" className="hover:opacity-60 hidden md:inline">Store</Link>

          {!loggedInUser ? (
            <Link to="/login" className="hover:opacity-60 hidden md:inline">Login</Link>
          ) : (
            <div className="relative inline-block text-left">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="bg-gray-800 rounded-full focus:outline-none w-8 h-8"
              >
                <img
                  className="rounded-full w-8 h-8 object-cover"
                  src={loggedInUser.profilePic || defaultProfile}
                  alt="User"
                />
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 shadow-lg border-white border-2 rounded-3xl z-50  text-white/80">
                  <div className="px-4 py-3">
                    <p className="text-sm ">
                      {loggedInUser?.fullName || "User"}
                    </p>
                    <p className="text-sm  truncate">
                      {loggedInUser?.email}
                    </p>
                  </div>
                  <div className="py-1">
                    <Link to="/Dashboard" className="block px-4 py-2 text-sm  hover:bg-gray-100 hover:text-black/70">Dashboard</Link>
                    <Link to="/settings" className="block px-4 py-2 text-sm  hover:bg-gray-100 hover:text-black/70">Settings</Link>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-red-600 ">Logout</button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
