import React from 'react';
import FinalCTA from '../components/FinalCTA';
import { Briefcase, Globe, Target, CheckCircle2, Award, Users } from 'lucide-react';

const CareerSupportPage: React.FC = () => {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="relative py-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-red-radial opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="oswald text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 animate-fade-in-up">
            Career <span className="text-[#FFD700]">Support.</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl font-medium animate-fade-in-up animation-delay-200">
            We don't just teach you skills; we help you launch your career. From placements in top agencies to starting your own freelance business.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 reveal">
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          {/* Internships */}
          <div className="p-10 gloss-card rounded-3xl border-red-500/10 hover:border-red-500/40 group">
             <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-500 mb-8 group-hover:scale-110 transition-transform">
               <Briefcase size={32} />
             </div>
             <h3 className="oswald text-2xl font-bold uppercase mb-4">Internships</h3>
             <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                Active connections with leading creative studios and production houses for internships that turn into full-time roles.
             </p>
             <ul className="space-y-3 text-[10px] font-black uppercase tracking-widest text-gray-500">
               <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-500" /> Agency Tie-ups</li>
               <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-500" /> Studio Access</li>
               <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-500" /> Real Projects</li>
             </ul>
          </div>

          {/* Freelancing Guidance */}
          <div className="p-10 gloss-card rounded-3xl border-[#FFD700]/10 hover:border-[#FFD700]/40 group">
             <div className="w-16 h-16 bg-[#FFD700]/10 rounded-2xl flex items-center justify-center text-[#FFD700] mb-8 group-hover:scale-110 transition-transform">
               <Globe size={32} />
             </div>
             <h3 className="oswald text-2xl font-bold uppercase mb-4">Freelance Guide</h3>
             <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                Learn how to build a high-value personal brand and land global remote clients. We teach you how to price your work and find the right projects.
             </p>
             <ul className="space-y-3 text-[10px] font-black uppercase tracking-widest text-gray-500">
               <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FFD700]" /> Client Acquisition</li>
               <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FFD700]" /> Pricing Strategy</li>
               <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FFD700]" /> Global Gigs</li>
             </ul>
          </div>

          {/* Placement Assistance */}
          <div className="p-10 gloss-card rounded-3xl border-white/10 hover:border-white/40 group">
             <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
               <Target size={32} />
             </div>
             <h3 className="oswald text-2xl font-bold uppercase mb-4">Placement Help</h3>
             <ul className="space-y-4 text-gray-400 font-medium text-sm">
                <li className="flex items-center gap-3"><Award className="text-red-500" size={18} /> Resume & Showreel Audits</li>
                <li className="flex items-center gap-3"><Users className="text-red-500" size={18} /> Mock Interview Sessions</li>
                <li className="flex items-center gap-3"><Award className="text-red-500" size={18} /> Direct Career Assistance</li>
             </ul>
          </div>
        </div>

        <div className="bg-white/5 rounded-[4rem] p-16 md:p-24 text-center border border-white/5 relative overflow-hidden">
           <div className="absolute inset-0 bg-red-radial opacity-30"></div>
           <h2 className="oswald text-4xl md:text-7xl font-black uppercase mb-8">Ready to <span className="text-gradient-red">Launch?</span></h2>
           <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg font-medium leading-relaxed">
             Our career support doesn't end when the course does. We stay connected with our alumni to help them grow indefinitely.
           </p>
        </div>
      </div>
      <FinalCTA />
    </div>
  );
};

export default CareerSupportPage;