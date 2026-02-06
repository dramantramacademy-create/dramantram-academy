import React from 'react';
import AlumniSpeak from '../components/AlumniSpeak';
import FinalCTA from '../components/FinalCTA';
import { Briefcase, GraduationCap, TrendingUp, CheckCircle2, Star } from 'lucide-react';

const AlumniSuccessPage: React.FC = () => {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="relative py-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-red-radial opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="oswald text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 animate-fade-in-up">
            Alumni <span className="text-[#FFD700]">Success.</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl font-medium animate-fade-in-up animation-delay-200">
            From the Academy to the industry. See where our students have landed and how they transformed their creative career paths.
          </p>
        </div>
      </div>

      {/* Where Alumni Are Now */}
      <div className="py-24 bg-black reveal">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="oswald text-3xl font-black uppercase mb-12 text-center text-gray-500 tracking-[0.3em]">Where They Are Now</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
             {/* Mock Partner Logos */}
             {['Studio Alpha', 'Creative Junction', 'Motion Pulse', 'Brand Lab', 'Visual Story Co.'].map((name, i) => (
               <div key={i} className="oswald text-2xl font-black tracking-tighter uppercase border px-6 py-2 border-white/10 rounded-lg">{name}</div>
             ))}
          </div>
        </div>
      </div>

      {/* Short Testimonials */}
      <section className="py-24 bg-white/5 reveal">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="oswald text-4xl font-black uppercase mb-16 text-center">Short <span className="text-red-600">Testimonials.</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { name: "Aman Gupta", role: "UI Designer @ TechHub", text: "The portfolio I built here got me hired within a week of graduating." },
                 { name: "Sara Khan", role: "VFX Artist @ PixelStudio", text: "Practical tasks made the transition to professional work seamless." },
                 { name: "Rohan Singh", role: "Brand Designer @ AgencyX", text: "Mentorship here is real. They teach you how the industry actually works." }
               ].map((t, i) => (
                 <div key={i} className="p-8 gloss-card rounded-2xl border-white/5">
                    <div className="flex gap-1 mb-4 text-[#FFD700]"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
                    <p className="text-gray-400 italic mb-6">"{t.text}"</p>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-red-500 mt-1">{t.role}</div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Step-by-Step Growth Journey (Merged Alumni + Training Journey) */}
      <section className="py-32 relative reveal">
         <div className="absolute inset-0 bg-red-glow opacity-20"></div>
         <div className="max-w-5xl mx-auto px-6">
            <h2 className="oswald text-4xl md:text-6xl font-black uppercase mb-20 text-center">The Student <span className="text-gradient-red">Growth Journey.</span></h2>
            <div className="relative space-y-12">
               <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-red-600/20 md:-translate-x-1/2"></div>
               
               {[
                 { step: '01', title: 'The Initiation', desc: 'Starting from raw passion, students enter our immersive bootcamp environment to learn the basics.', icon: GraduationCap },
                 { step: '02', title: 'The Grinding', desc: '4 months of high-intensity training with real agency-style briefs and hands-on assignments.', icon: CheckCircle2 },
                 { step: '03', title: 'Portfolio Build', desc: 'Crafting a professional-grade showreel that proves you can execute at an industrial level.', icon: TrendingUp },
                 { step: '04', title: 'The Launch', desc: 'Transitioning to the industry through placements or starting high-value freelance creative businesses.', icon: Briefcase }
               ].map((item, i) => (
                 <div key={i} className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 text-center md:text-right">
                       {i % 2 === 0 && (
                         <div className="hidden md:block">
                           <h3 className="oswald text-2xl font-bold uppercase mb-2">{item.title}</h3>
                           <p className="text-gray-500 font-medium">{item.desc}</p>
                         </div>
                       )}
                    </div>
                    
                    <div className="relative z-10 w-16 h-16 rounded-full bg-black border-2 border-red-600 flex items-center justify-center shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                       <item.icon className="text-red-500" size={24} />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                       {(i % 2 !== 0 || window.innerWidth < 768) && (
                         <div>
                           <h3 className="oswald text-2xl font-bold uppercase mb-2">{item.title}</h3>
                           <p className="text-gray-500 font-medium">{item.desc}</p>
                         </div>
                       )}
                       {i % 2 === 0 && window.innerWidth >= 768 && <div className="hidden md:block"></div>}
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default AlumniSuccessPage;