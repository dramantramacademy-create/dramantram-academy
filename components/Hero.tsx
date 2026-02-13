import React from "react";
import { ArrowRight, Download, Play, CheckCircle2 } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden bg-black">
      {/* Intense Red Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#FF0000]/25 blur-[140px] rounded-full z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF0000]/15 blur-[120px] rounded-full z-0"></div>
      <div className="absolute inset-0 bg-red-glow opacity-40 z-0"></div>
      <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>

      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full z-10">
        <div className="text-center max-w-4xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/30 border border-red-500/30 rounded-full mb-8 backdrop-blur-sm animate-fade-in-up">
            <span className="w-2 h-2 bg-[#FF0000] rounded-full animate-ping"></span>
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-[#FF0000]">
              Admissions Open 2026 | Studio Learning
            </span>
          </div>

          {/* UPDATED: Changed leading-[0.85] to leading-[1.1] or leading-tight for consistency */}
          <h1 className="oswald text-5xl md:text-7xl lg:text-9xl font-black uppercase leading-[1.1] tracking-tighter mb-8 animate-fade-in-up animation-delay-200">
            Turn Your <br />
            <span className="text-gradient-red">Creativity</span> <br />
            Into a Career
          </h1>

          {/* UPDATED: Ensured paragraph leading is also consistent */}
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed font-medium mx-auto animate-fade-in-up animation-delay-400">
            Learn industry-relevant creative skills through{" "}
            <span className="text-white whitespace-nowrap">
              hands-on training
            </span>
            , real projects, and mentorship from working professionals. <br />{" "}
            <br />
            <span className="text-[#FFD700]">
              No theory overload. Only skills that actually matter.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up animation-delay-600">
            <a
              href="#apply"
              className="w-full sm:w-auto px-12 py-5 bg-[#FF0000] text-white font-black uppercase tracking-widest rounded-xl hover:shadow-[0_0_40px_rgba(255,0,0,0.6)] transition-all flex items-center justify-center gap-3 group"
            >
              Apply Now{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <button className="w-full sm:w-auto px-12 py-5 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest rounded-xl hover:text-[#FFD700] hover:border-[#FFD700] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] transition-all flex items-center justify-center gap-3 group">
              <Download
                size={18}
                className="group-hover:scale-110 transition-transform"
              />{" "}
              Get Brochure
            </button>
          </div>

          <div className="flex items-center justify-center gap-12 border-t border-white/10 pt-10 animate-fade-in-up animation-delay-600">
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="oswald text-4xl md:text-6xl font-black text-white leading-none">
                100%
              </div>
              <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                Practical Learning
              </div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="oswald text-4xl md:text-6xl font-black text-white leading-none">
                4.9/5
              </div>
              <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                Student Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
