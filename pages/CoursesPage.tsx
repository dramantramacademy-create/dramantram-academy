import React from "react";
import Courses from "../components/Courses";
import { Briefcase, GraduationCap, Zap } from "lucide-react";

const CoursesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-[#FF0000]/5 py-24 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-radial opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="oswald text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 animate-fade-in-up">
            CREATIVE <span className="text-[#FFD700]">PROGRAMS.</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed animate-fade-in-up animation-delay-200">
            Hands-on, studio-led programs designed to help you learn faster and
            build real creative skills.
          </p>
        </div>
      </div>

      <div className="py-20 bg-black reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-white/5 transition-all">
              <div className="w-12 h-12 bg-[#FFD700]/10 rounded-xl flex items-center justify-center text-[#FFD700] group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase text-gray-500 tracking-widest">
                  Speed
                </div>
                <div className="text-sm font-bold">3-4 Month Intensive</div>
              </div>
            </div>
            <div className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-white/5 transition-all">
              <div className="w-12 h-12 bg-[#FF0000]/10 rounded-xl flex items-center justify-center text-[#FF0000] group-hover:scale-110 transition-transform">
                <Briefcase size={24} />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase text-gray-500 tracking-widest">
                  Outcome
                </div>
                <div className="text-sm font-bold">Placement Guidance</div>
              </div>
            </div>
            <div className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-white/5 transition-all">
              <div className="w-12 h-12 bg-[#FFD700]/10 rounded-xl flex items-center justify-center text-[#FFD700] group-hover:scale-110 transition-transform">
                <GraduationCap size={24} />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase text-gray-500 tracking-widest">
                  Mentors
                </div>
                <div className="text-sm font-bold">Working Professionals</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Courses />

      <section className="py-24 bg-white/5 border-y border-white/5 reveal">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="oswald text-4xl font-bold uppercase mb-8">
            Internship & Career Support
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 font-medium">
            Graduates don't just leave with a certificate; they leave with a
            professional trajectory. We provide active internship guidance and
            connect our best students with top-tier creative agencies and
            studios.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center group">
              <div className="text-3xl font-black oswald text-[#FFD700] group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">
                Portfolio Review
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-black oswald text-[#FF0000] group-hover:scale-110 transition-transform">
                Agency
              </div>
              <div className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">
                Network Access
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-black oswald text-[#FFD700] group-hover:scale-110 transition-transform">
                Real
              </div>
              <div className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">
                Live Projects
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
