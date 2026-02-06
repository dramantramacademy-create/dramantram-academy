import React from 'react';
import { Briefcase, Globe, PenTool, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FinalCTA from '../../components/FinalCTA';

const GraphicDesignCareer: React.FC = () => {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-red-radial opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/courses" className="inline-flex items-center gap-2 text-gray-500 font-bold uppercase tracking-widest text-xs mb-10 hover:text-white transition-colors">
            Back to Programs
          </Link>
          <h1 className="oswald text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 animate-fade-in-up">
            Graphic Design <br /><span className="text-[#FFD700]">Career Paths.</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-xl font-medium leading-relaxed animate-fade-in-up animation-delay-200">
            From luxury branding to digital products, high-end graphic design is at the core of every industry. We train you to be more than just a software operator — we train you to be a visual strategist.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-32 reveal">
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <div className="gloss-card p-10 rounded-3xl border-red-500/10">
             <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 mb-8">
               <Briefcase size={32} />
             </div>
             <h3 className="oswald text-2xl font-bold uppercase mb-4">Designer Roles</h3>
             <ul className="space-y-4 text-gray-400 font-medium text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-red-500" size={16} /> Brand Identity Designer</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-red-500" size={16} /> Advertising Art Director</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-red-500" size={16} /> Layout & Print Specialist</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-red-500" size={16} /> Packaging Designer</li>
             </ul>
          </div>
          <div className="gloss-card p-10 rounded-3xl border-red-500/10">
             <div className="w-14 h-14 bg-[#FFD700]/10 rounded-2xl flex items-center justify-center text-[#FFD700] mb-8">
               <Globe size={32} />
             </div>
             <h3 className="oswald text-2xl font-bold uppercase mb-4">Agencies & Brands</h3>
             <ul className="space-y-4 text-gray-400 font-medium text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#FFD700]" size={16} /> Creative Agencies</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#FFD700]" size={16} /> In-house Brand Teams</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#FFD700]" size={16} /> Tech Startup Labs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#FFD700]" size={16} /> Fashion & Retail Groups</li>
             </ul>
          </div>
          <div className="gloss-card p-10 rounded-3xl border-red-500/10">
             <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-8">
               <PenTool size={32} />
             </div>
             <h3 className="oswald text-2xl font-bold uppercase mb-4">Freelance Pro</h3>
             <ul className="space-y-4 text-gray-400 font-medium text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-white" size={16} /> Global Remote Gigs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-white" size={16} /> Direct Client Strategy</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-white" size={16} /> Personal Studio Setup</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-white" size={16} /> High-Value Consulting</li>
             </ul>
          </div>
        </div>

        <div className="bg-white/5 rounded-[3rem] p-12 md:p-20 text-center border border-white/5 relative overflow-hidden">
           <div className="absolute inset-0 bg-red-radial opacity-20"></div>
           <h2 className="oswald text-4xl md:text-6xl font-black uppercase mb-8">Ready to <span className="text-[#FF0000]">Create?</span></h2>
           <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg font-medium leading-relaxed">
             Our Visual Communication program is the perfect entry point into these high-value careers. Skip the theory, master the craft.
           </p>
           <Link to="/courses/visual-communication" className="inline-flex items-center gap-4 px-12 py-5 bg-[#FF0000] text-white font-black uppercase tracking-widest text-xs rounded-xl hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] transition-all">
             Explore Course Syllabus <ArrowRight size={18} />
           </Link>
        </div>
      </div>
      <FinalCTA />
    </div>
  );
};

export default GraphicDesignCareer;