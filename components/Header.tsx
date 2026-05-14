import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Bootcamp", path: "/bootcamp" },
    { label: "Webinar", path: "/webinar" },
    { label: "About", path: "/about" },
    { label: "Programs", path: "/programs" },
    { label: "Mentors", path: "/mentors" },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex flex-col transition-all duration-300">
      {/* PREMIUM TOP CONTACT BANNER */}
      <div className="bg-zinc-950 border-b border-white/5 relative z-[110] overflow-hidden">
        {/* Subtle red glow in the center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF0000]/15 via-transparent to-transparent opacity-80" />
        
        <div className="max-w-7xl mx-auto px-4 py-2 sm:py-2.5 flex flex-wrap items-center justify-center gap-2 sm:gap-4 relative z-10">
          <div className="flex items-center gap-2 text-zinc-400 text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.2em]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0000] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FF0000]"></span>
            </span>
            Request a call or connect directly
          </div>
          <span className="hidden sm:inline text-zinc-800 text-[10px]">|</span>
          <div className="flex items-center gap-1.5 text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 group">
            <Phone size={12} className="text-[#FF0000] group-hover:scale-110 transition-transform" />
            <span className="relative">
              +91 95995 71599
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FFD700] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#FFD700]"></span>
            </span>
          </div>
          <span className="hidden sm:inline text-zinc-800 text-[10px]">|</span>
          <Link 
            to="/callback" 
            className="px-3 py-1 sm:px-4 sm:py-1.5 bg-gradient-to-r from-[#FF0000] to-[#990000] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest rounded hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all duration-300"
          >
            Request a Callback
          </Link>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="bg-black/40 backdrop-blur-md border-b border-white/10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* LOGO SECTION */}
        <Link
          to="/"
          className="flex items-center gap-2 md:gap-3 relative z-[110] shrink-0"
        >
          <img
            src="/dramantram-logo.png"
            className="w-8 md:w-12 h-auto logo-mask"
            alt="Dramantram Logo"
          />
          <div className="flex flex-col">
            <span className="oswald text-base md:text-xl font-black tracking-tighter uppercase block leading-none text-white">
              Dramantram
            </span>
            <span className="text-[7px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] text-[#FFD700] uppercase font-bold">
              Academy
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] font-bold tracking-widest uppercase">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                transition-colors relative group
                ${isActive ? "text-[#FFD700]" : "text-white hover:text-[#FFD700]"}
              `}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1px] bg-[#FFD700] transition-all group-hover:w-full ${isActive ? "w-full" : "w-0"}`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ACTION BUTTONS & MOBILE TOGGLE */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 relative z-[110]">
          <Link
            to="/admissions"
            className="hidden sm:block text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#FFD700] hover:text-white transition-colors whitespace-nowrap"
          >
            Apply Now
          </Link>

          <a
            href="https://wa.me/919599571599"
            target="_blank"
            rel="noreferrer"
            className="px-2.5 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 bg-[#FF0000] text-white text-[8px] sm:text-[9px] md:text-[11px] font-bold uppercase tracking-wider sm:tracking-widest rounded-lg hover:bg-[#d00000] hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] transition-all flex items-center shrink-0 whitespace-nowrap"
          >
            WhatsApp
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1.5 text-white hover:text-[#FFD700] transition-colors shrink-0"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION OVERLAY */}
        <div
          className={`absolute inset-0 bg-black fixed inset-0 z-[105] lg:hidden flex flex-col items-center justify-start pt-5 transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-full opacity-0 invisible"
          }`}
        >
          {/* Full Black Background */}
          <div className="absolute inset-0 bg-black"></div>

          {/* Navigation Content */}
          <nav className="bg-black/90 backdrop-blur-xl relative z-10 flex flex-col items-center gap-6 sm:gap-8 py-10 px-6 w-full max-w-md">
            {navItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  oswald text-2xl sm:text-3xl font-black uppercase tracking-widest transition-all duration-300
                  ${isActive ? "text-[#FFD700] scale-110" : "text-white hover:text-[#FFD700] hover:scale-105"}
                `}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? "translateY(0)" : "translateY(-20px)",
                }}
              >
                {item.label}
              </NavLink>
            ))}

            {/* Mobile Apply Now Button */}
            <Link
              to="/admissions"
              className="mt-12 px-8 sm:px-10 py-3 sm:py-4 border-2 border-[#FFD700] text-[#FFD700] oswald text-lg sm:text-xl font-black uppercase tracking-widest rounded-xl hover:bg-[#FFD700] hover:text-black transition-all"
              style={{
                transitionDelay: isMenuOpen
                  ? `${navItems.length * 50}ms`
                  : "0ms",
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? "translateY(0)" : "translateY(-20px)",
              }}
            >
              Apply Now
            </Link>

            {/* Mobile WhatsApp Button */}
            <a
              href="https://wa.me/919599571599"
              target="_blank"
              rel="noreferrer"
              className="mt-4 px-8 sm:px-10 py-3 sm:py-4 bg-[#FF0000] text-white oswald text-lg sm:text-xl font-black uppercase tracking-widest rounded-xl hover:bg-[#d00000] hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] transition-all"
              style={{
                transitionDelay: isMenuOpen
                  ? `${(navItems.length + 1) * 50}ms`
                  : "0ms",
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? "translateY(0)" : "translateY(-20px)",
              }}
            >
              Join WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;
