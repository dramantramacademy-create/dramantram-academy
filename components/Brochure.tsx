import React from "react";
import {
  Target,
  Rocket,
  Sparkles,
  Briefcase,
  Shield,
  BookOpen,
  Layers,
  Users,
  PenTool,
  Video,
  MonitorPlay,
  Figma,
  CheckCircle2,
  Star,
  TrendingUp,
  GraduationCap,
  Award,
  Globe,
  Phone,
  Mail,
  MapPin,
  QrCode,
  ArrowRight,
  Play,
  Box,
  Youtube,
  Tv,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const Brochure: React.FC = () => {
  return (
    <div className="bg-black min-h-screen pt-20 selection:bg-red-500 selection:text-white">
      {/* GLOBAL PRINT OVERRIDES */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            background-color: black !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .a4-section {
            height: 297mm !important;
            width: 210mm !important;
            page-break-after: always !important;
            break-after: page !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            overflow: hidden !important;
            position: relative !important;
            background-color: black !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          /* Ensure all text is visible against black bg in print engines */
          h1, h2, h3, h4, span, p, div {
             -webkit-print-color-adjust: exact !important;
             print-color-adjust: exact !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `,
        }}
      />

      {/* SECTION 1: COVER */}
      <section className="a4-section min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 text-center border-b border-red-900/20">
        <div className="absolute inset-0 bg-red-radial opacity-40 pointer-events-none"></div>
        <div className="relative z-10 w-full max-w-5xl my-auto">
          <div className="w-24 h-24 bg-[#FF0000] rounded-2xl transform rotate-45 flex items-center justify-center shadow-[0_0_60px_rgba(255,0,0,0.6)] mx-auto mb-20">
            <img
              src="/dramantram-logo.png"
              alt="Logo"
              className="w-16 -rotate-45"
            />
          </div>
          <h1 className="oswald text-8xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-6 text-white">
            Dramantram <br /> <span className="text-[#FFD700]">Academy</span>
          </h1>
          <p className="oswald text-2xl md:text-3xl text-gray-400 uppercase tracking-[0.4em] font-bold mb-12">
            Turn Your Creativity Into a Career
          </p>
          <div className="w-12 h-[2px] bg-red-600 mx-auto mb-12"></div>
          <p className="text-gray-500 text-sm font-black uppercase tracking-widest max-w-sm mx-auto">
            The Official 2026 Academic Prospectus <br /> & Digital Brochure
          </p>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="a4-section py-20 px-6 bg-black relative border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center my-auto">
          <div className="text-[11px] font-black text-[#FF0000] uppercase tracking-[0.5em] mb-8">
            SECTION 02 / ABOUT
          </div>
          <h2 className="oswald text-7xl font-black uppercase mb-10 tracking-tighter text-white">
            Who We <span className="text-red-600">Are.</span>
          </h2>
          <p className="text-gray-400 text-2xl leading-relaxed font-medium mb-12">
            We are the educational branch of Dramantram — a working creative
            agency. We bridge the gap between passion and professional
            expectations.
          </p>
          <div className="grid grid-cols-3 gap-8">
            {["AGENCY", "PRACTICAL", "LUCKNOW"].map((title, i) => (
              <div
                key={i}
                className="p-8 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="oswald text-3xl font-black text-white mb-2">
                  {title}
                </div>
                <div className="text-[10px] font-bold text-red-500 uppercase tracking-widest">
                  {i === 0
                    ? "Driven Pedagogy"
                    : i === 1
                      ? "First Mentorship"
                      : "HQ Campus"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PHILOSOPHY */}
      <section className="a4-section py-20 px-6 bg-black relative border-b border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-20 items-center my-auto">
          <div className="text-left">
            <div className="text-[11px] font-black text-[#FF0000] uppercase tracking-[0.5em] mb-6">
              SECTION 03 / PHILOSOPHY
            </div>
            <h2 className="oswald text-7xl font-black uppercase mb-10 tracking-tighter text-white leading-none">
              The Career-First <span className="text-red-600">Method.</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <Target className="text-red-500 shrink-0" size={32} />
                <div>
                  <h4 className="oswald text-xl font-bold text-white">
                    Industry-Aligned
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Reverse-engineered from actual job requirements.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <Rocket className="text-red-500 shrink-0" size={32} />
                <div>
                  <h4 className="oswald text-xl font-bold text-white">
                    Skill → Career
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Build your professional showreel while you learn.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-red-600/10 p-12 rounded-[3rem] border border-red-500/20 text-center">
            <div className="oswald text-8xl font-black text-red-600 mb-4 opacity-20">
              2026
            </div>
            <p className="text-white font-bold text-2xl">
              "The industry is fast. We help you skip the line."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: DIFFERENTIATION (Tightened for A4) */}
      <section className="a4-section py-10 px-6 bg-black relative border-b border-white/5">
        <div className="max-w-6xl mx-auto my-auto text-center">
          <div className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em] mb-6">
            SECTION 04 / WHY US
          </div>
          <h2 className="oswald text-7xl font-black uppercase mb-12 tracking-tighter text-white">
            Why <span className="text-red-600">Us?</span>
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                icon: Briefcase,
                title: "Career-focused",
                text: "Priority on industry requirements.",
              },
              {
                icon: Target,
                title: "Real Projects",
                text: "Solve actual creative agency briefs.",
              },
              {
                icon: BookOpen,
                title: "Curriculum",
                text: "Constant updates to match standards.",
              },
              {
                icon: Layers,
                title: "Portfolio",
                text: "Graduate with a high-end showreel.",
              },
              {
                icon: Users,
                title: "Mentors",
                text: "Learn from active practitioners.",
              },
              {
                icon: Sparkles,
                title: "Small Batches",
                text: "Direct feedback for everyone.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white/5 rounded-3xl border border-white/5"
              >
                <item.icon className="text-[#FFD700] mb-4 mx-auto" size={32} />
                <h3 className="oswald text-lg font-bold uppercase mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PROGRAMS */}
      <section className="a4-section py-20 px-6 bg-black relative border-b border-white/5">
        <div className="max-w-6xl mx-auto my-auto text-center w-full">
          <div className="text-[11px] font-black text-[#FFD700] uppercase tracking-[0.5em] mb-6">
            SECTION 05 / PROGRAMS
          </div>
          <h2 className="oswald text-7xl font-black uppercase mb-16 tracking-tighter text-white">
            Our <span className="text-red-600">Bootcamps.</span>
          </h2>
          <div className="grid grid-cols-3 gap-8">
            {["Graphic Design", "Animation & VFX", "Filmmaking"].map((p, i) => (
              <div
                key={i}
                className="p-10 bg-white/5 rounded-2xl text-left border border-white/10 h-full"
              >
                <div className="text-[10px] font-black uppercase text-red-500 mb-2">
                  3-4 Months
                </div>
                <h4 className="oswald text-3xl font-black uppercase mb-4 text-white">
                  {p}
                </h4>
                <p className="text-gray-500 text-sm mb-6">
                  Professional industry-ready certification.
                </p>
                <div className="h-[2px] w-12 bg-[#FFD700]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 & 7: GRAPHIC DESIGN */}
      <section className="a4-section py-20 px-6 bg-black relative border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20 items-center my-auto">
          <div className="text-left">
            <div className="text-[11px] font-black text-[#FF0000] uppercase tracking-[0.5em] mb-6">
              SECTION 06 / DESIGN
            </div>
            <h2 className="oswald text-7xl font-black uppercase mb-8 text-white leading-none">
              Visual <br />
              <span className="text-red-600">Communication.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Master design thinking and brand psychology.
            </p>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h4 className="oswald text-xl font-bold uppercase mb-4 text-[#FFD700]">
                Roles
              </h4>
              <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase text-gray-400">
                {["Brand Designer", "Art Director", "UI Specialist"].map(
                  (r) => (
                    <span
                      key={r}
                      className="px-3 py-1 bg-black rounded border border-white/10"
                    >
                      {r}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden border border-white/10 aspect-square">
            <img
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800"
              className="w-full h-full object-cover grayscale"
              alt="Design"
            />
          </div>
        </div>
      </section>

      {/* SECTION 8 & 9: ANIMATION & MOTION GRAPHICS */}
      <section className="a4-section py-20 px-10 bg-black relative border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16 items-center my-auto">
          <div className="rounded-[3rem] overflow-hidden border border-white/10 aspect-square">
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000"
              className="w-full h-full object-cover grayscale"
              alt="Animation"
            />
          </div>
          <div className="text-left">
            <div className="text-[11px] font-black text-[#FFD700] uppercase tracking-[0.5em] mb-6">
              SECTION 08 & 09 / ANIMATION
            </div>
            <h2 className="oswald text-7xl font-black uppercase mb-8 text-white leading-none">
              Motion <br /> <span className="text-[#FFD700]">Graphics.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Master 2D/3D workflows, After Effects mastery, and high-end
              cinematic storytelling.
            </p>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h4 className="oswald text-xl font-bold uppercase mb-4 text-[#FF0000]">
                Growth Paths
              </h4>
              <div className="flex flex-wrap gap-3 text-[10px] font-black uppercase text-gray-400">
                {[
                  "VFX Artist",
                  "Motion Designer",
                  "3D Modeler",
                  "Studio Lead",
                ].map((path) => (
                  <span
                    key={path}
                    className="px-3 py-1 bg-black rounded border border-white/10"
                  >
                    {path}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 & 11: FILMMAKING & VIDEO EDITING */}
      <section className="a4-section py-20 px-10 bg-black relative border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center my-auto w-full">
          <div className="text-[11px] font-black text-[#FF0000] uppercase tracking-[0.5em] mb-6">
            SECTION 10 & 11 / FILMMAKING
          </div>
          <h2 className="oswald text-7xl font-black uppercase mb-16 tracking-tighter text-white">
            Cinematic <span className="text-red-600">Storytelling.</span>
          </h2>
          <div className="grid grid-cols-2 gap-10">
            <div className="text-left p-10 bg-white/5 rounded-[3rem] border border-red-500/10">
              <h3 className="oswald text-4xl font-black uppercase mb-6 text-white">
                Filmmaking
              </h3>
              <p className="text-gray-400 text-sm mb-8">
                Live action production, cinematography basics, and on-set
                experience.
              </p>
              <div className="flex items-center gap-2 text-red-500 font-bold uppercase text-[10px] tracking-widest">
                <Play size={16} fill="currentColor" /> Studio Ready
              </div>
            </div>
            <div className="text-left p-10 bg-white/5 rounded-[3rem] border border-red-500/10">
              <h3 className="oswald text-4xl font-black uppercase mb-6 text-white">
                Video Editing
              </h3>
              <p className="text-gray-400 text-sm mb-8">
                OTT standards, commercial editing, and narrative pacing
                workflows.
              </p>
              <div className="flex items-center gap-2 text-[#FFD700] font-bold uppercase text-[10px] tracking-widest">
                <MonitorPlay size={16} fill="currentColor" /> Industry Pro
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: MENTORS & FACULTY */}
      <section className="a4-section py-20 px-10 bg-black relative border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center my-auto w-full">
          <div className="text-[11px] font-black text-[#FF0000] uppercase tracking-[0.5em] mb-8">
            SECTION 12 / FACULTY
          </div>
          <h2 className="oswald text-7xl font-black uppercase tracking-tighter text-white mb-16">
            Learn from <span className="text-red-600">Working Pros.</span>
          </h2>
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Juned Ali", role: "Creative Lead" },
              { name: "Mohd Qaiser", role: "Visual Lead" },
              { name: "Eshika Duggal", role: "SDR & Coach" },
              { name: "Dr. Sonal", role: "Strategy" },
            ].map((m, i) => (
              <div
                key={i}
                className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center"
              >
                <div className="w-20 h-20 bg-red-600/10 rounded-full mx-auto mb-4 flex items-center justify-center border border-red-500/20">
                  <Users size={28} className="text-red-500" />
                </div>
                <h4 className="oswald text-2xl font-black uppercase mb-1 text-white">
                  {m.name}
                </h4>
                <div className="text-[10px] font-black text-[#FFD700] uppercase tracking-widest">
                  {m.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: SHOWCASE */}
      <section className="a4-section py-20 px-10 bg-black relative">
        <div className="max-w-7xl mx-auto text-center my-auto w-full">
          <div className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em] mb-6">
            SECTION 13 / SHOWCASE
          </div>
          <h2 className="oswald text-7xl font-black uppercase tracking-tighter text-white mb-12">
            The Studio <span className="text-red-600">Output.</span>
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-video bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative"
              >
                <img
                  src={`https://images.unsplash.com/photo-${i % 2 === 0 ? "1492691527719-9d1e07e534b4" : "1558655146-d09347e92766"}?auto=format&fit=crop&q=80&w=400`}
                  className="w-full h-full object-cover grayscale"
                  alt="Work"
                />
                <div className="absolute bottom-2 left-2 text-[8px] font-black text-white/40 uppercase">
                  Project Sample #0{i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: ALUMNI JOURNEY */}
      <section className="a4-section py-20 px-10 bg-black relative border-b border-white/5">
        <div className="max-w-4xl mx-auto my-auto w-full text-center">
          <div className="text-[11px] font-black text-[#FFD700] uppercase tracking-[0.5em] mb-6">
            SECTION 14 / ALUMNI
          </div>
          <h2 className="oswald text-7xl font-black uppercase tracking-tighter text-white mb-16">
            Success <span className="text-white">Stories.</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "The Grinding",
                desc: "4 months of high-intensity training with agency-style briefs.",
              },
              {
                title: "The Showreel",
                desc: "Crafting a professional portfolio that makes recruiters take notice.",
              },
              {
                title: "The Launch",
                desc: "Transitioning to placements or starting high-value businesses.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="flex gap-8 items-center p-8 bg-white/5 rounded-2xl border border-white/10 text-left"
              >
                <div className="oswald text-5xl font-black text-[#FFD700] opacity-30">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="oswald text-2xl font-bold uppercase mb-1 text-white">
                    {s.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 15: CAREER SUPPORT */}
      <section className="a4-section py-20 px-10 bg-black relative border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center my-auto w-full">
          <div className="text-[11px] font-black text-red-600 uppercase tracking-[0.5em] mb-6">
            SECTION 15 / CAREER SUPPORT
          </div>
          <h2 className="oswald text-7xl font-black uppercase tracking-tighter mb-16 text-white">
            Launch <span className="text-red-600">Ready.</span>
          </h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Internships",
                text: "Direct connections with leading studios.",
              },
              {
                icon: Globe,
                title: "Freelancing",
                text: "Global client acquisition strategies.",
              },
              {
                icon: Target,
                title: "Assistance",
                text: "Resume audits and mock interviews.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-10 bg-white/5 rounded-[3rem] border border-red-500/10"
              >
                <item.icon className="text-red-500 mb-6 mx-auto" size={40} />
                <h4 className="oswald text-2xl font-bold uppercase mb-4 text-white">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 16: ADMISSIONS (Final Page) */}
      <section className="a4-section py-20 px-6 bg-[#FF0000] relative">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center my-auto">
          <div className="text-[11px] font-black text-black uppercase tracking-[0.5em] mb-6">
            SECTION 16 / APPLY
          </div>
          <h2 className="oswald text-9xl font-black uppercase tracking-tighter mb-12 text-black leading-none">
            Admissions <br /> Open.
          </h2>
          <div className="grid grid-cols-2 gap-12 text-left">
            <div className="bg-black p-12 rounded-[3rem] shadow-2xl">
              <h3 className="oswald text-4xl font-black uppercase mb-10 text-white">
                Contacts
              </h3>
              <div className="space-y-6 text-white text-xs font-bold uppercase tracking-widest">
                <div className="flex gap-4 items-center">
                  <Phone size={20} className="text-[#FFD700]" /> +91 91401 10443
                </div>
                <div className="flex gap-4 items-center">
                  <Mail size={20} className="text-[#FFD700]" />{" "}
                  admission@dramantram.com
                </div>
                <div className="flex gap-4 items-center">
                  <MapPin size={20} className="text-[#FFD700]" /> Summit
                  Building, Lucknow
                </div>
              </div>
            </div>
            <div className="bg-black p-12 rounded-[3rem] flex flex-col items-center justify-center">
              <div className="w-40 h-40 bg-white p-2 rounded-xl mb-6">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://dramantram.com/apply"
                  alt="QR"
                  className="w-full h-full"
                />
              </div>
              <div className="text-[10px] font-black uppercase text-gray-500 tracking-widest">
                Scan to Apply
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="py-20 text-center bg-black no-print">
        <Link
          to="/"
          className="text-gray-600 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Brochure;
