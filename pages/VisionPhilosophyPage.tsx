import React from 'react';
import FinalCTA from '../components/FinalCTA';
import { Target, Rocket, Sparkles, CheckCircle2 } from 'lucide-react';

const VisionPhilosophyPage: React.FC = () => {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="relative py-24 overflow-hidden border-b border-red-900/10">
        <div className="absolute inset-0 bg-red-radial opacity-40"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full mb-8 animate-fade-in-up">
            <span className="text-[10px] font-black text-[#FF0000] uppercase tracking-[0.4em]">Our Core Values</span>
          </div>
          <h1 className="oswald text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-10 animate-fade-in-up animation-delay-200">
            Vision & <br /><span className="text-gradient-red">Philosophy.</span>
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-32 reveal">
        <div className="grid gap-16">
          <div className="gloss-card p-12 rounded-[3rem] border-red-500/10">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500">
                <Target size={32} />
              </div>
              <h2 className="oswald text-3xl font-black uppercase">Career-First Approach</h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
              At Dramantram, we don't start with textbooks. We start with the job description. Every lesson is reverse-engineered from the skills required to succeed in the modern creative industry.
            </p>
          </div>

          <div className="gloss-card p-12 rounded-[3rem] border-[#FFD700]/10">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-[#FFD700]/10 rounded-2xl flex items-center justify-center text-[#FFD700]">
                <Rocket size={32} />
              </div>
              <h2 className="oswald text-3xl font-black uppercase">Practical + Industry-Aligned</h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed font-medium mb-8">
              Learning is purely experiential. Students work on actual industry gear and solve real creative problems faced by agencies today.
            </p>
            <div className="flex flex-wrap gap-4">
               {['Real Studio Workflows', 'Commercial Standards', 'Agency Mentorship'].map((tag, i) => (
                 <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500">{tag}</span>
               ))}
            </div>
          </div>

          <div className="text-center py-20 bg-red-600/5 rounded-[4rem] border border-red-600/10">
             <h3 className="oswald text-4xl md:text-6xl font-black uppercase mb-10">Skill → Portfolio → <span className="text-red-600">Career</span></h3>
             <div className="flex justify-center items-center gap-8 md:gap-16">
                <div className="flex flex-col items-center">
                   <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4"><CheckCircle2 className="text-[#FFD700]" /></div>
                   <span className="text-[10px] font-black uppercase tracking-widest">Skill</span>
                </div>
                <div className="w-8 h-[2px] bg-white/20"></div>
                <div className="flex flex-col items-center">
                   <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4"><CheckCircle2 className="text-[#FFD700]" /></div>
                   <span className="text-[10px] font-black uppercase tracking-widest">Portfolio</span>
                </div>
                <div className="w-8 h-[2px] bg-white/20"></div>
                <div className="flex flex-col items-center">
                   <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,0,0,0.4)]"><Sparkles className="text-white" /></div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Career</span>
                </div>
             </div>
          </div>
        </div>
      </div>
      <FinalCTA />
    </div>
  );
};

export default VisionPhilosophyPage;