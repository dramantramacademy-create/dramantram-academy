import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  User,
  Mail,
  Phone,
  BookOpen,
  Linkedin,
  Award,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";

const BecomeMentorPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [experience, setExperience] = useState<number>(0);
  const [flexibility, setFlexibility] = useState<string>("hour");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_ENQUIRY_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials missing from .env");
      setStatus("error");
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

      setStatus("success");
      formRef.current?.reset();
      setExperience(0);
      setFlexibility("hour");
    } catch (error) {
      console.error("Failed to send mentor application:", error);
      setStatus("error");
    }
  };

  return (
    <div className="pt-28 pb-20 bg-black min-h-screen text-white">
      {/* Hero Header Section */}
      <div className="relative py-12 overflow-hidden text-center">
        <div className="absolute inset-0 bg-red-radial opacity-40"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="oswald text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Want to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-[#FFD700]">come onboard</span> for the ride?
          </h1>
          <h2 className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-red-500 mb-4">
            Your Hub for Continuous Learning and Growth
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            At Dramantram Academy, we believe that knowledge is the cornerstone of success. That's why we've
            curated a network of practical guides, insightful case studies, and valuable resources to help you
            master the art of design & animation and stay ahead in the ever-evolving creative industry.
          </p>
        </div>
      </div>

      {/* Main Card Section with Form Structure */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        <div className="gloss-card p-6 md:p-10 rounded-[2.5rem] border-white/10 relative overflow-hidden bg-zinc-950/40">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">

            {/* Left Column: Form */}
            <div className="flex flex-col justify-center">
              {status === "success" ? (
                <div className="text-center py-20 h-full flex flex-col justify-center items-center">
                  <CheckCircle className="text-green-500 mb-6 animate-bounce" size={80} />
                  <h2 className="oswald text-4xl font-black uppercase mb-4">
                    Application <span className="text-[#FFD700]">Received!</span>
                  </h2>
                  <p className="text-gray-400 mb-8 max-w-md">
                    Thank you for applying to become a mentor at Dramantram Academy. Our academic board will review your profile and reach out shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-red-500 font-bold uppercase text-xs tracking-widest border border-red-500/20 px-6 py-3 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                  >
                    Submit another application
                  </button>
                </div>
              ) : status === "error" ? (
                <div className="text-center py-20 h-full flex flex-col justify-center items-center">
                  <h2 className="oswald text-4xl font-black uppercase mb-4">
                    Submission <span className="text-[#FF0000]">Failed</span>
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Something went wrong. Please check your network connection and try again.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-red-500 font-bold uppercase text-xs tracking-widest border border-red-500/20 px-6 py-3 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                  >
                    Try again
                  </button>
                </div>
              ) : (
                <div>
                  <h2 className="oswald text-3xl md:text-4xl font-black uppercase mb-8 text-white">
                    Let's Become a Mentor
                  </h2>

                  <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                    {/* HIDDEN FIELDS FOR EMAILJS COMPATIBILITY AND SUBJECT */}
                    <input type="hidden" name="title" value="Mentor Application" />
                    <input type="hidden" name="subject" value="Mentor Application" />

                    {/* Name field */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                        Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                        <input
                          name="user_name"
                          required
                          type="text"
                          placeholder="Mike Sullivan"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:border-[#FFD700] focus:outline-none"
                        />
                        {/* Duplicate for {{name}} used in EmailJS From Name */}
                        <input type="hidden" name="name" value={formRef.current?.user_name?.value || ''} />
                      </div>
                    </div>

                    {/* Email field */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                        E-mail
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                        <input
                          name="user_email"
                          required
                          type="email"
                          placeholder="Email"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:border-[#FFD700] focus:outline-none"
                        />
                        {/* Duplicate for {{email}} used in EmailJS Reply-To */}
                        <input type="hidden" name="email" value={formRef.current?.user_email?.value || ''} />
                      </div>
                    </div>

                    {/* Phone field */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                        Phone No
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                        <input
                          name="user_phone"
                          required
                          type="tel"
                          placeholder="9876543210"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:border-[#FFD700] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Domain Expertise field */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                        Domain Expertise
                      </label>
                      <div className="relative">
                        <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                        <select
                          name="domain_expertise"
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white appearance-none focus:border-[#FFD700] focus:outline-none"
                          defaultValue=""
                        >
                          <option value="" disabled className="text-gray-500 bg-zinc-900">Domain Expertise</option>
                          <option value="2d-3d-animation" className="bg-zinc-900">2D & 3D Animation</option>
                          <option value="visual-design" className="bg-zinc-900">Visual Design & Brand Identity</option>
                          <option value="video-editing" className="bg-zinc-900">Cinematic Video Editing</option>
                          <option value="ui-ux-design" className="bg-zinc-900">UI/UX Design</option>
                          <option value="ai-marketing-automation" className="bg-zinc-900">AI Marketing & Automation</option>
                        </select>
                      </div>
                    </div>

                    {/* LinkedIn Profile field */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                        LinkedIn Profile
                      </label>
                      <div className="relative">
                        <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                        <input
                          name="linkedin_profile"
                          required
                          type="url"
                          placeholder="LinkedIn Profile URL"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:border-[#FFD700] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Enter Your Experience field */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center ml-1">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                          Enter Your Experience (Years)
                        </label>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="relative flex-grow flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 h-[50px]">
                          <Award className="text-gray-500 shrink-0" size={16} />
                          <input
                            name="experience"
                            type="range"
                            min="0"
                            max="30"
                            value={experience}
                            onChange={(e) => setExperience(parseInt(e.target.value))}
                            className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-[#FF0000] outline-none focus:outline-none"
                            style={{
                              background: `linear-gradient(to right, #FF0000 0%, #FF0000 ${
                                (experience / 30) * 100
                              }%, rgba(255, 255, 255, 0.1) ${
                                (experience / 30) * 100
                              }%, rgba(255, 255, 255, 0.1) 100%)`,
                            }}
                          />
                        </div>
                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center font-black text-[#FFD700] text-sm shrink-0">
                          {experience}
                        </div>
                      </div>
                    </div>

                    {/* Flexible mentorship, your way field */}
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                        Flexible mentorship, your way
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { id: "hour", label: "Have an hour?", val: "An hour a week" },
                          { id: "week", label: "Have a week?", val: "Few hours a week" },
                          { id: "month", label: "Have a month?", val: "Few hours a month" },
                          { id: "more", label: "Have more time?", val: "Flexible commitment" },
                        ].map((opt) => (
                          <label
                            key={opt.id}
                            className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${flexibility === opt.id
                                ? "bg-red-500/10 border-red-500 text-white"
                                : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20"
                              }`}
                          >
                            <input
                              type="radio"
                              name="mentorship_flexibility"
                              value={opt.val}
                              checked={flexibility === opt.id}
                              onChange={() => setFlexibility(opt.id)}
                              className="hidden"
                            />
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${flexibility === opt.id ? "border-red-500" : "border-gray-500"
                              }`}>
                              {flexibility === opt.id && (
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                              )}
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider">{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className={`relative w-full py-4 overflow-hidden rounded-xl font-black oswald uppercase tracking-[0.25em] text-xs transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer
                        ${
                          status === "sending"
                            ? "bg-zinc-800 text-zinc-500 cursor-not-allowed shadow-none scale-100"
                            : "bg-gradient-to-r from-[#FF0000] via-[#E60000] to-[#990000] text-white shadow-[0_4px_20px_rgba(255,0,0,0.2)] hover:shadow-[0_0_35px_rgba(255,0,0,0.5)] hover:scale-[1.02] active:scale-[0.98] group/btn before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 before:ease-in-out"
                        }
                      `}
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Applying...
                        </>
                      ) : (
                        <>
                          Apply{" "}
                          <Send
                            size={16}
                            className="transform group-hover/btn:translate-x-1.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                          />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Right Column: Visual Image & Quote */}
            <div className="hidden lg:flex relative rounded-[2rem] overflow-hidden group min-h-[500px] border border-white/5">
              <img
                src="/mentor_application_hero.png"
                alt="Dramantram Mentor Community"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-[2000ms]"
              />

              {/* Premium dark gradient overlay at the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10"></div>

              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12">
                {/* <blockquote className="space-y-4">
                  <p className="text-gray-200 text-base md:text-lg italic font-medium leading-relaxed">
                    "Dramantram Academy has transformed the way we nurture creative talent. The mentor-guided platform
                    makes the learning experience seamless, and we find creators perfectly aligned with our professional goals."
                  </p>
                  <footer className="text-white">
                    <cite className="not-italic font-black oswald uppercase tracking-wider text-[#FFD700] text-sm block">
                      — Priya Sharma
                    </cite>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mt-0.5">
                      Talent Acquisition Specialist
                    </span>
                  </footer>
                </blockquote> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeMentorPage;
