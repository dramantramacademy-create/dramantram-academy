import React from "react";
import {
  PenTool,
  CheckCircle2,
  ArrowLeft,
  Briefcase,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import FinalCTA from "../../components/FinalCTA";

const VisualCommunicationPage: React.FC = () => {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16 overflow-hidden">
        <Link
          to="/programs"
          className="inline-flex items-center gap-2 text-[#FFD700] font-bold uppercase tracking-widest text-xs mb-12 hover:translate-x-[-4px] transition-transform animate-fade-in-up"
        >
          <ArrowLeft size={16} /> Back to Programs
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="animate-fade-in-up animation-delay-200">
            <div className="inline-block px-4 py-1.5 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full mb-6">
              <span className="text-[10px] font-black text-[#FFD700] uppercase tracking-widest">
                3-4 Months Intensive
              </span>
            </div>
            <h1 className="oswald text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8">
              Visual <br />
              <span className="text-gradient-red">Communication.</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed mb-10 font-medium">
              Learn how visual ideas are planned, designed, and communicated —
              from branding basics to real design projects. This program focuses
              on building strong fundamentals, practical thinking, and
              portfolio-ready work.
            </p>

            <div className="space-y-4 mb-12">
              {[
                "Graphic design fundamentals",
                "Branding & visual identity basics",
                "Hands-on design projects",
                "Portfolio development support",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs"
                >
                  <CheckCircle2 className="text-[#FFD700]" size={20} />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-up animation-delay-400">
            <div className="gloss-card p-3 rounded-[3rem] border-red-500/20">
              <img
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800"
                className="rounded-[2.5rem] w-full grayscale hover:grayscale-0 transition-all duration-700"
                alt="Visual Communication"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-32 reveal">
          <div className="bg-white/5 p-12 rounded-3xl border border-white/5 group hover:border-red-500/30 transition-all">
            <h3 className="oswald text-3xl font-bold uppercase mb-6">
              What You'll Master
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our curriculum is designed by working pros to ensure you only
              learn what matters in the creative industry.
            </p>
            <ul className="space-y-4">
              <li className="text-sm font-bold text-gray-300 flex items-center gap-3">
                <PenTool size={16} className="text-red-500" /> Typography &
                Branding
              </li>
              <li className="text-sm font-bold text-gray-300 flex items-center gap-3">
                <PenTool size={16} className="text-red-500" /> Commercial Layout
                Design
              </li>
              <li className="text-sm font-bold text-gray-300 flex items-center gap-3">
                <PenTool size={16} className="text-red-500" /> Social Media
                Identity
              </li>
            </ul>
          </div>
          <div className="bg-red-500/5 p-12 rounded-3xl border border-red-500/10 group hover:border-red-500/50 transition-all">
            <h3 className="oswald text-3xl font-bold uppercase mb-6 text-red-500">
              Career Options
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Launch into the world of creative agencies or start your own
              high-value freelance design business.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-black rounded-xl border border-white/5 group-hover:scale-105 transition-transform">
                <Briefcase size={16} className="text-red-500 mb-2" />
                <div className="text-[10px] font-black text-gray-500 uppercase">
                  Jobs
                </div>
                <div className="text-sm font-bold">Brand Designer</div>
              </div>
              <div className="p-4 bg-black rounded-xl border border-white/5 group-hover:scale-105 transition-transform">
                <Globe size={16} className="text-[#FFD700] mb-2" />
                <div className="text-[10px] font-black text-gray-500 uppercase">
                  Global
                </div>
                <div className="text-sm font-bold">Freelance Pro</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FinalCTA />
    </div>
  );
};

export default VisualCommunicationPage;
