import React from "react";
import { Figma, CheckCircle2, ArrowLeft, MousePointer2 } from "lucide-react";
import { Link } from "react-router-dom";
import FinalCTA from "../../components/FinalCTA";

const UiUxPage: React.FC = () => {
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
          <div className="order-2 lg:order-1 relative animate-fade-in-up animation-delay-400">
            <div className="gloss-card p-3 rounded-[3rem]">
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800"
                className="rounded-[2.5rem] w-full"
                alt="UI/UX Design"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-fade-in-up animation-delay-200">
            <div className="inline-block px-4 py-1.5 bg-[#FF0000]/10 border border-[#FF0000]/30 rounded-full mb-6">
              <span className="text-[10px] font-black text-[#FF0000] uppercase tracking-widest">
                3-4 Months Intensive
              </span>
            </div>
            <h1 className="oswald text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8">
              UI/UX <br />
              <span className="text-[#FF0000]">Design.</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed mb-10 font-medium">
              Understand how digital products are designed — from user thinking
              to interface design. You’ll practice designing screens, flows, and
              prototypes while learning how users actually interact with digital
              products.
            </p>

            <div className="space-y-4 mb-12">
              {[
                "UI basics using Figma",
                "Wireframing & prototyping",
                "Intro to user research & testing",
                "Practical design exercises",
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
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-32 reveal">
          <div className="bg-white/5 p-12 rounded-3xl border border-white/5 group hover:border-[#FF0000]/30 transition-all">
            <h3 className="oswald text-3xl font-bold uppercase mb-6">
              Core Modules
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Master the tools and psychological principles that drive modern
              app and web experiences.
            </p>
            <ul className="space-y-4">
              <li className="text-sm font-bold text-gray-300 flex items-center gap-3">
                <Figma size={16} className="text-[#FF0000]" /> High-Fidelity
                Design in Figma
              </li>
              <li className="text-sm font-bold text-gray-300 flex items-center gap-3">
                <MousePointer2 size={16} className="text-[#FF0000]" /> User
                Journey Mapping
              </li>
              <li className="text-sm font-bold text-gray-300 flex items-center gap-3">
                <Figma size={16} className="text-[#FF0000]" /> Design Systems &
                Components
              </li>
              <li className="text-sm font-bold text-gray-300 flex items-center gap-3">
                <MousePointer2 size={16} className="text-[#FF0000]" />{" "}
                Interactive Prototyping
              </li>
            </ul>
          </div>
          <div className="bg-[#FF0000]/5 p-12 rounded-3xl border border-[#FF0000]/10 group hover:border-[#FF0000]/50 transition-all">
            <h3 className="oswald text-3xl font-bold uppercase mb-6 text-[#FF0000]">
              The Outcome
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Launch your career in tech with a portfolio of case studies that
              prove you understand user needs and aesthetic precision.
            </p>
            <div className="p-6 bg-black rounded-2xl border border-white/5 text-center group-hover:scale-105 transition-transform">
              <div className="text-xs font-black text-gray-500 uppercase tracking-widest mb-2">
                Target Roles
              </div>
              <div className="text-lg font-bold text-white">
                Product Designer, UI/UX Designer, UX Researcher
              </div>
            </div>
          </div>
        </div>
      </div>
      <FinalCTA />
    </div>
  );
};

export default UiUxPage;
