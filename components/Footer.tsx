import React from "react";
import {
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-32 pb-16 border-t border-red-900/10 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-[#FF0000]/10 blur-[150px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16 mb-24">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-4 mb-10 group">
            <div className="w-12 h-12 bg-[#FF0000] rounded-xl transform rotate-45 flex items-center justify-center shadow-[0_0_20px_rgba(255,0,0,0.4)] group-hover:rotate-0 transition-all duration-500">
              <img
                src="/dramantram-logo.png"
                className="text-white font-black oswald text-2xl -rotate-45 group-hover:rotate-0 transition-all duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="oswald text-3xl font-black tracking-tighter uppercase leading-none">
                Dramantram
              </span>
              <span className="text-[10px] tracking-[0.5em] text-[#FFD700] uppercase font-bold">
                Academy
              </span>
            </div>
          </Link>

          <p className="text-gray-400 max-w-sm mb-12 text-lg leading-relaxed font-medium">
            Lucknow's place for students who want to{" "}
            <span className="text-white">learn by doing</span>. We focus on real
            skills, agency mentorship, and creative confidence.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-xl bg-red-600/10 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">
                  Lucknow Campus
                </div>
                <span className="text-gray-300 text-sm font-bold">
                  Summit Building, Vibhuti Khand, <br />
                  Gomti Nagar, Lucknow, UP 226010
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="oswald text-white uppercase tracking-[0.3em] font-black mb-10 text-xs">
            Explore
          </h4>
          <ul className="space-y-5 text-gray-500 text-[11px] font-black uppercase tracking-widest">
            <li>
              <Link
                to="/about"
                className="hover:text-red-500 transition-colors flex items-center justify-between group"
              >
                About Us{" "}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </li>
            <li>
              <Link
                to="/vision-philosophy"
                className="hover:text-red-500 transition-colors flex items-center justify-between group"
              >
                Vision & Philosophy{" "}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </li>
            <li>
              <Link
                to="/why-choose-us"
                className="hover:text-red-500 transition-colors flex items-center justify-between group"
              >
                Why Choose Us{" "}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="hover:text-red-500 transition-colors flex items-center justify-between group"
              >
                Our Programs{" "}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </li>
            <li>
              <Link
                to="/alumni"
                className="hover:text-red-500 transition-colors flex items-center justify-between group"
              >
                Alumni Success{" "}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </li>
            <li>
              <Link
                to="/career-support"
                className="hover:text-red-500 transition-colors flex items-center justify-between group"
              >
                Career Support{" "}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </li>
            <li>
              <Link
                to="/admissions"
                className="hover:text-red-500 transition-colors flex items-center justify-between group"
              >
                Admissions{" "}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-5">
          <h4 className="oswald text-white uppercase tracking-[0.3em] font-black mb-10 text-xs">
            Let's Talk
          </h4>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="gloss-card p-8 rounded-3xl border-red-500/10 hover:border-red-500/40">
              <Phone className="text-red-500 mb-4" size={24} />
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">
                Inquiry
              </div>
              <div className="text-base font-black text-white">
                +91 91401 10443
              </div>
            </div>
            <div className="gloss-card p-8 rounded-3xl border-red-500/10 hover:border-red-500/40">
              <Mail className="text-red-500 mb-4" size={24} />
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">
                Admissions
              </div>
              <div className="text-xs font-black text-white break-all">
                admission@dramantram.com
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {[Instagram, Youtube, Twitter, Linkedin].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-14 h-14 rounded-2xl gloss-card border-red-500/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] hover:scale-110 transition-all"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
          &copy; 2026 Dramantram Academy. A Lucknow-Based Creative Agency
          School.
        </p>
        <div className="flex gap-10 text-[10px] text-gray-600 font-black uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-[#FFD700] transition-colors">
            Career Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
