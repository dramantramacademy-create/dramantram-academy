import React from "react";
import {
  MonitorPlay,
  CheckCircle2,
  ArrowLeft,
  Zap,
  Youtube,
  Tv,
} from "lucide-react";
import { Link } from "react-router-dom";
import FinalCTA from "../../components/FinalCTA";

const VideoEditingPage: React.FC = () => {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16 overflow-hidden">
        <Link
          to="/programs"
          className="inline-flex items-center gap-2 text-[#FF0000] font-bold uppercase tracking-widest text-xs mb-12 hover:translate-x-[-4px] transition-transform animate-fade-in-up"
        >
          <ArrowLeft size={16} /> Back to Programs
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="animate-fade-in-up animation-delay-200">
            <div className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
              <span className="text-[10px] font-black text-[#FF0000] uppercase tracking-widest">
                3-4 Months Intensive
              </span>
            </div>
            <h1 className="oswald text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8">
              Video <br />
              <span className="text-gradient-red">Editing.</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed mb-10 font-medium">
              Learn how to tell compelling stories through edits. This program
              focuses on video editing fundamentals, storytelling logic, and
              practical workflows for social media, ads, and films.
            </p>

            <div className="space-y-4 mb-12">
              {[
                "Video editing fundamentals",
                "Storytelling through edits",
                "Editing for social media & ads",
                "Premiere Pro & industry workflows",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs"
                >
                  <CheckCircle2 className="text-[#FF0000]" size={20} />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-up animation-delay-400">
            <div className="gloss-card p-3 rounded-[3rem]">
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800"
                className="rounded-[2.5rem] w-full grayscale hover:grayscale-0 transition-all duration-700"
                alt="Video Editing"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-32 reveal">
          <div className="bg-white/5 p-12 rounded-3xl border border-white/5 group hover:border-[#FF0000]/30 transition-all">
            <h3 className="oswald text-3xl font-bold uppercase mb-6">
              Course Focus
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Master the technical and creative aspects of modern
              post-production. You'll work on live-style projects from day one.
            </p>
            <ul className="space-y-4">
              <li className="text-sm font-bold text-gray-300 flex items-center gap-3">
                <MonitorPlay size={16} className="text-[#FF0000]" /> Narrative
                Pacing
              </li>
              <li className="text-sm font-bold text-gray-300 flex items-center gap-3">
                <Zap size={16} className="text-[#FFD700]" /> Sound Design &
                Color Grading
              </li>
              <li className="text-sm font-bold text-gray-300 flex items-center gap-3">
                <Youtube size={16} className="text-[#FF0000]" /> YouTube &
                Digital Content
              </li>
              <li className="text-sm font-bold text-gray-300 flex items-center gap-3">
                <Tv size={16} className="text-[#FF0000]" /> OTT & Film Standards
              </li>
            </ul>
          </div>
          <div className="bg-red-500/5 p-12 rounded-3xl border border-red-500/10 group hover:border-red-500/50 transition-all">
            <h3 className="oswald text-3xl font-bold uppercase mb-6 text-[#FF0000]">
              Career Paths
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Edit for the biggest names. Our alumni work in top agencies,
              production houses, and as high-paid freelance creators.
            </p>
            <div className="p-6 bg-black rounded-2xl border border-white/5 text-center group-hover:scale-105 transition-transform">
              <div className="text-xs font-black text-gray-500 uppercase tracking-widest mb-2">
                Job Roles
              </div>
              <div className="text-lg font-bold text-white">
                Film Editor, Ad Editor, YouTube Post-Producer
              </div>
            </div>
          </div>
        </div>
      </div>
      <FinalCTA />
    </div>
  );
};

export default VideoEditingPage;
