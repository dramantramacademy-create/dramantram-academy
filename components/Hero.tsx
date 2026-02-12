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

      {/* Bottom smooth transition mask - moved to z-0 so it doesn't overlap text */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">
        <div className="text-center lg:text-left relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/30 border border-red-500/30 rounded-full mb-8 backdrop-blur-sm animate-fade-in-up">
            <span className="w-2 h-2 bg-[#FF0000] rounded-full animate-ping"></span>
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-[#FF0000]">
              Admissions Open 2026 | Studio Learning
            </span>
          </div>

          <h1 className="oswald text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.85] tracking-tighter mb-8 animate-fade-in-up animation-delay-200">
            Turn Your <br />
            <span className="text-gradient-red">Creativity</span> <br />
            Into a Career
          </h1>

          <p className="text-base md:text-xl text-gray-300 max-w-lg mb-12 leading-relaxed font-medium mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
            Learn industry-relevant creative skills through{" "}
            {/* Added whitespace-nowrap here */}
            <span className="text-white whitespace-nowrap">
              hands-on training
            </span>
            , real projects, and mentorship from working professionals. <br />{" "}
            <br />
            <span className="text-[#FFD700]">
              No theory overload. Only skills that actually matter.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16 animate-fade-in-up animation-delay-600">
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

          <div className="flex items-center justify-center lg:justify-start gap-12 border-t border-white/10 pt-10 animate-fade-in-up animation-delay-600">
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="oswald text-4xl font-black text-white">100%</div>
              <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                Practical Learning
              </div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="oswald text-4xl font-black text-white">4.9/5</div>
              <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                Student Satisfaction
              </div>
            </div>
          </div>
        </div>

        <div className="relative order-first lg:order-last animate-fade-in-up animation-delay-400">
          <div className="relative group p-1 bg-gradient-to-br from-red-500/40 via-transparent to-red-500/20 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div className="aspect-[4/5] relative rounded-[2.3rem] overflow-hidden bg-black">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000"
                alt="Creatives at work"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-[#FF0000]/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 cursor-pointer shadow-[0_0_50px_rgba(255,0,0,0.5)]">
                  <Play fill="white" size={32} className="ml-1" />
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 glass-card px-8 py-6 rounded-2xl border-white/20 backdrop-blur-3xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF0000] rounded-lg flex items-center justify-center shadow-lg animate-pulse">
                    <CheckCircle2 size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-gray-300 uppercase tracking-widest mb-1">
                      Studio Status
                    </div>
                    <div className="text-lg font-black oswald text-white uppercase">
                      Industry Ready{" "}
                      <span className="text-[#FFD700]">Output</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
