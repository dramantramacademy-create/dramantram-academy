import React from 'react';
import Portfolio from '../components/Portfolio';
import FinalCTA from '../components/FinalCTA';
import { Layers, Monitor, Scissors, Target } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="relative py-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-red-radial opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="oswald text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 animate-fade-in-up">
            Student <span className="text-[#FFD700]">Work.</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl font-medium animate-fade-in-up animation-delay-200">
            Real projects. Practical assignments. Industry-standard outputs created by our students during their time at the Academy.
          </p>
        </div>
      </div>

      <div className="py-20 bg-black reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {[
              { icon: Monitor, label: 'Real Briefs', text: 'Assignments based on actual client requirements.' },
              { icon: Scissors, label: 'Studio Gear', text: 'Shot and edited using professional high-end equipment.' },
              { icon: Layers, label: 'Full Process', text: 'From conceptual wireframes to the final rendered output.' },
              { icon: Target, label: 'Industry Ready', text: 'Every piece is a portfolio-worthy asset for job hunting.' }
            ].map((item, i) => (
              <div key={i} className="p-8 gloss-card rounded-2xl border-white/5 group hover:border-[#FFD700]/30 transition-all">
                <item.icon className="text-[#FFD700] mb-6" size={32} />
                <h3 className="oswald text-xl font-bold uppercase mb-2">{item.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Portfolio />

      <section className="py-32 relative reveal">
         <div className="absolute inset-0 bg-red-glow opacity-30"></div>
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="oswald text-4xl md:text-6xl font-black uppercase">Practical <span className="text-gradient-red">Assignments.</span></h2>
               <p className="text-gray-400 mt-4 max-w-xl mx-auto">See how our students tackle complex creative challenges through hands-on learning.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
               <div className="relative group overflow-hidden rounded-3xl">
                  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Student project" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-10 flex flex-col justify-end">
                     <span className="text-[#FFD700] text-xs font-black uppercase tracking-widest mb-2">Assignment #12</span>
                     <h4 className="oswald text-2xl font-black uppercase">Commercial Product Shoot</h4>
                  </div>
               </div>
               <div className="relative group overflow-hidden rounded-3xl">
                  <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000" className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Student project" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-10 flex flex-col justify-end">
                     <span className="text-[#FFD700] text-xs font-black uppercase tracking-widest mb-2">Assignment #05</span>
                     <h4 className="oswald text-2xl font-black uppercase">Brand Identity Design</h4>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default PortfolioPage;