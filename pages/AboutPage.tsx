import React from 'react';
import About from '../components/About';
import Community from '../components/Community';
import FinalCTA from '../components/FinalCTA';
import { Sparkles, Briefcase, Shield, Target, Rocket, Users, BookOpen, Layers } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 bg-black min-h-screen">
      {/* Vision & Learning Philosophy Section */}
      <div className="relative py-12 md:py-20 lg:py-24 overflow-hidden border-b border-red-900/10">
        <div className="absolute inset-0 bg-red-radial opacity-40"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full mb-8 animate-fade-in-up">
            <span className="text-[10px] font-black text-[#FF0000] uppercase tracking-[0.4em]">Our Vision & Philosophy</span>
          </div>
          <h1 className="oswald text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-10 animate-fade-in-up animation-delay-200">
            Career-First <br /><span className="text-gradient-red">Learning.</span>
          </h1>
          <div className="grid md:grid-cols-2 gap-12 items-start animate-fade-in-up animation-delay-400">
            <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed">
              Dramantram Academy is built on the belief that traditional education is too slow for the creative world. 
              Our philosophy is simple: <span className="text-white font-bold">Skill → Portfolio → Career.</span>
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <Target className="text-red-500" /> 
                <span className="font-bold uppercase text-sm tracking-widest">Practical + Industry-Aligned Learning</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Rocket className="text-red-500" /> 
                <span className="font-bold uppercase text-sm tracking-widest">Immediate Industry Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us & What Makes Us Different */}
      <div className="py-32 relative bg-black reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="oswald text-4xl md:text-6xl font-black uppercase">Why <span className="text-red-600">Choose Us?</span></h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto font-medium">What sets us apart from traditional colleges and generic online courses.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Briefcase, title: "Career-Focused Education", text: "Every lecture, every assignment, and every piece of gear is chosen to help you get hired." },
              { icon: Target, title: "Hands-on, Real-World Projects", text: "You don't just 'learn' cinematography—you shoot commercials using our agency's actual gear." },
              { icon: BookOpen, title: "Industry-Relevant Curriculum", text: "We constantly update our courses to match what top studios are looking for today." },
              { icon: Layers, title: "Portfolio-Driven Learning", text: "You leave with more than a certificate—you leave with a high-end professional showreel." },
              { icon: Users, title: "Industry Mentors", text: "Learn from creators who are active in the commercial industry every single day." },
              { icon: Rocket, title: "Small Batches & Personal Mentorship", text: "We limit intake to ensure every student gets direct feedback from senior mentors." }
            ].map((item, i) => (
              <div key={i} className="p-10 gloss-card rounded-3xl border-red-900/10 group">
                <item.icon className="text-[#FFD700] mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="oswald text-2xl font-bold uppercase mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <About />
      <Community />
      <FinalCTA />
    </div>
  );
};

export default AboutPage;