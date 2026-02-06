import React from 'react';
import FinalCTA from '../components/FinalCTA';
import { Briefcase, Target, BookOpen, Layers, Users, Rocket, CheckCircle2 } from 'lucide-react';

const WhyChooseUsPage: React.FC = () => {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="relative py-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-red-radial opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="oswald text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 animate-fade-in-up">
            What Makes Us <br /><span className="text-[#FFD700]">Different.</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 reveal">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { icon: Briefcase, title: "Career-Focused Education", text: "We prioritize industry requirements over academic fluff. Every module is designed to build employability." },
            { icon: Target, title: "Hands-on, Real-world Projects", text: "No theory in isolation. You solve actual creative briefs from our production studio's archives." },
            { icon: BookOpen, title: "Industry-Relevant Curriculum", text: "We update our syllabus every quarter to keep pace with evolving software and trends." },
            { icon: Layers, title: "Portfolio-Driven Learning", text: "The end goal of every course is a professional-grade showreel that works as your passport to the industry." },
            { icon: Users, title: "Mentors from the Industry", text: "Learn directly from practitioners who are active in the commercial creative space." },
            { icon: Rocket, title: "Small Batches & Mentorship", text: "We keep intake low to ensure every student gets personal attention and critical feedback on their work." }
          ].map((item, i) => (
            <div key={i} className="p-10 gloss-card rounded-[2.5rem] border-red-500/10 hover:border-red-500/40 group">
              <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 mb-8 group-hover:scale-110 transition-transform">
                <item.icon size={28} />
              </div>
              <h3 className="oswald text-2xl font-bold uppercase mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                {item.text}
              </p>
              <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#FFD700]">
                 <CheckCircle2 size={14} /> The Dramantram Advantage
              </div>
            </div>
          ))}
        </div>
      </div>
      <FinalCTA />
    </div>
  );
};

export default WhyChooseUsPage;