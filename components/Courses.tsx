import React from "react";
import {
  Figma,
  Video,
  PenTool,
  CheckCircle2,
  ArrowRight,
  MonitorPlay,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";

const COURSES = [
  {
    id: "1",
    slug: "visual-communication",
    careerPath: "/careers/graphic-design",
    category: "DESIGN",
    title: "Visual Communication",
    duration: "3-4 Months",
    desc: "Learn how visual ideas are planned and designed — from branding basics to real design projects.",
    features: [
      "Graphic design fundamentals",
      "Branding & visual identity",
      "Portfolio support",
    ],
    color: "#FF0000",
    icon: PenTool,
  },
  {
    id: "2",
    slug: "ui-ux-design",
    careerPath: "/careers/ui-ux",
    category: "PRODUCT",
    title: "UI/UX Design",
    duration: "3-4 Months",
    desc: "Understand how digital products are designed — from user thinking to interface design with Figma.",
    features: [
      "UI basics using Figma",
      "Wireframing & prototyping",
      "User research",
    ],
    color: "#FF0000",
    icon: Figma,
  },
  {
    id: "3",
    slug: "animation-vfx",
    careerPath: "/careers/animation",
    category: "MOTION",
    title: "Animation & VFX",
    duration: "3-4 Months",
    desc: "Learn how motion brings visuals to life — through animation, video editing, and VFX basics.",
    features: [
      "Motion graphics",
      "After Effects & Premiere",
      "3D fundamentals",
    ],
    color: "#FF0000",
    icon: Video,
  },
  {
    id: "4",
    slug: "video-editing",
    careerPath: "/careers/video-editing",
    category: "PRODUCTION",
    title: "Video Editing",
    duration: "3-4 Months",
    desc: "Master the art of storytelling through edits. Learn cutting for social media, ads, and films.",
    features: [
      "Editing Fundamentals",
      "Storytelling logic",
      "Commercial Workflows",
    ],
    color: "#FF0000",
    icon: MonitorPlay,
  },
];

const Courses: React.FC = () => {
  return (
    <section
      id="courses"
      className="py-32 relative overflow-hidden bg-black reveal"
    >
      <div className="absolute inset-0 bg-red-glow opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="text-[11px] font-black text-[#FF0000] uppercase tracking-[0.5em] mb-4">
            OUR PROGRAMS
          </div>
          <h2 className="oswald text-5xl md:text-8xl font-black uppercase mb-8 leading-[0.9] tracking-tighter">
            Programs <br />
            <span className="text-gradient-red">Overview.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            Intensive bootcamps designed to transform your passion into a
            professional edge. No theory overload, just pure skill acquisition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="group relative gloss-card rounded-[2rem] p-8 hover:translate-y-[-10px] flex flex-col items-start text-left border-red-900/10 overflow-hidden"
            >
              <div className="mb-6 p-4 rounded-xl bg-red-950/20 text-red-500 group-hover:bg-[#FF0000] group-hover:text-white transition-all duration-500 shadow-xl">
                <course.icon size={36} strokeWidth={1.5} />
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-[2px] bg-red-500"></div>
                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-[#FFD700]">
                  {course.category}
                </div>
              </div>

              <h3 className="oswald text-2xl font-black uppercase mb-4 leading-tight group-hover:text-[#FF0000] transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium min-h-[60px]">
                {course.desc}
              </p>

              <div className="space-y-3 mb-8 w-full">
                {course.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-gray-400"
                  >
                    <CheckCircle2 size={14} className="text-red-500" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3 w-full">
                <Link
                  to={`/programs/${course.slug}`}
                  className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-red-950/20 border border-red-500/20 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all"
                >
                  View Details <ArrowRight size={14} />
                </Link>
                <Link
                  to={course.careerPath}
                  className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-white/5 border border-white/10 rounded-xl font-black uppercase tracking-widest text-[10px] hover:border-[#FFD700] hover:text-[#FFD700] transition-all"
                >
                  View Career Options <Briefcase size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
