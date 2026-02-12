import React from "react";
import { Video, CheckCircle2, ArrowLeft, Briefcase, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import FinalCTA from "../../components/FinalCTA";

const AnimationVfxPage: React.FC = () => {
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
            <div className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
              <span className="text-[10px] font-black text-[#FFD700] uppercase tracking-widest">
                3-4 Months Intensive
              </span>
            </div>
            <h1 className="oswald text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8">
              Animation <br />
              <span className="text-gradient-red">& VFX.</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed mb-10 font-medium">
              Learn how motion brings visuals to life — through animation, video
              editing, and visual effects basics. This program focuses on
              practice, experimentation, and understanding motion workflows.
            </p>

            <div className="space-y-4 mb-12">
              {[
                "Motion graphics fundamentals",
                "After Effects & Premiere basics",
                "Intro to 3D & visual effects",
                "Project-based learning",
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
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800"
                className="rounded-[2.5rem] w-full grayscale hover:grayscale-0 transition-all duration-700"
                alt="Animation & VFX"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-32 reveal">
          <div className="bg-white/5 p-12 rounded-3xl border border-white/5 group hover:border-red-500/30 transition-all">
            <h3 className="oswald text-3xl font-bold uppercase mb-6">
              The Workflow
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Enter the world of motion. You'll master the software and
              cinematic logic used by top production houses.
            </p>
            <ul className="space-y-4">
              <li className="text-sm font-bold text-gray-300 flex items-center gap-3">
                <Video size={16} className="text-red-500" /> After Effects
                Mastery
              </li>
              <li className="text-sm font-bold text-gray-300 flex items-center gap-3">
                <Zap size={16} className="text-red-500" /> 3D Motion Basics
              </li>
              <li className="text-sm font-bold text-gray-300 flex items-center gap-3">
                <Video size={16} className="text-red-500" /> VFX Compositing
              </li>
            </ul>
          </div>
          <div className="bg-red-500/5 p-12 rounded-3xl border border-red-500/10 group hover:border-[#FFD700]/50 transition-all">
            <h3 className="oswald text-3xl font-bold uppercase mb-6 text-[#FFD700]">
              Career Paths
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Join animation studios or production houses as a professional
              motion designer or junior VFX artist.
            </p>
            <div className="p-6 bg-black rounded-2xl border border-white/5 text-center group-hover:scale-105 transition-transform">
              <div className="text-xs font-black text-gray-500 uppercase tracking-widest mb-2">
                Target Roles
              </div>
              <div className="text-lg font-bold text-white">
                Motion Designer, VFX Artist, Game Artist
              </div>
            </div>
          </div>
        </div>
      </div>
      <FinalCTA />
    </div>
  );
};

export default AnimationVfxPage;
