import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { User, Mail, Phone, BookOpen, MessageSquare, Send } from "lucide-react";

const CallbackPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

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
    } catch (error) {
      console.error("Failed to send:", error);
      setStatus("error");
    }
  };

  return (
    <div className="pt-28 pb-20 bg-black min-h-screen text-white">
      {/* Hero Header Section */}
      <div className="relative py-12 overflow-hidden text-center">
        <div className="absolute inset-0 bg-red-radial opacity-40"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-gray-300 mb-2">
            Need Assistance?
          </h2>
          <h1 className="oswald text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-[#FFD700]">Request</span> a Callback!
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-medium">
            At Dramantram Academy, we're dedicated to empowering your creative journey. Whether you're a beginner seeking guidance or a professional looking to upskill, we've got you covered.
          </p>
        </div>
      </div>

      {/* Main Card Section with Form Structure */}
      <div className="max-w-5xl mx-auto px-6 mt-8">
        <div className="gloss-card p-6 md:p-10 rounded-[2.5rem] border-white/10 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            
            {/* Left Column: Form */}
            <div className="flex flex-col justify-center">
              {status === "success" ? (
                <div className="text-center py-20 h-full flex flex-col justify-center items-center">
                  <h2 className="oswald text-4xl font-black uppercase mb-4">
                    Request <span className="text-[#FFD700]">Received!</span>
                  </h2>
                  <p className="text-gray-400 mb-8">We will call you back shortly.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-red-500 font-bold uppercase text-xs"
                  >
                    Submit another request
                  </button>
                </div>
              ) : status === "error" ? (
                <div className="text-center py-20 h-full flex flex-col justify-center items-center">
                  <h2 className="oswald text-4xl font-black uppercase mb-4">
                    Send <span className="text-[#FF0000]">Failed</span>
                  </h2>
                  <p className="text-gray-400 mb-8">Something went wrong. Please try again later.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-red-500 font-bold uppercase text-xs"
                  >
                    Try again
                  </button>
                </div>
              ) : (
                <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                  <input type="hidden" name="title" value="Callback Request" />
                  
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
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-[#FFD700] focus:outline-none"
                      />
                      {/* For EmailJS compat if template expects 'name' */}
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
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-[#FFD700] focus:outline-none"
                      />
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
                        placeholder="0876543210"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-[#FFD700] focus:outline-none"
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
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white appearance-none focus:border-[#FFD700] focus:outline-none"
                        defaultValue=""
                      >
                        <option value="" disabled className="text-gray-500 bg-zinc-900">Domain Expertise</option>
                        <option value="ui-ux" className="bg-zinc-900">UI/UX Design</option>
                        <option value="animation" className="bg-zinc-900">Animation & VFX</option>
                        <option value="video-editing" className="bg-zinc-900">Video Editing</option>
                        <option value="graphic-design" className="bg-zinc-900">Graphic Design</option>
                      </select>
                    </div>
                  </div>

                  {/* Request field */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                      Request
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 text-gray-500" size={16} />
                      <textarea
                        name="enquiry"
                        required
                        rows={4}
                        placeholder="Enter Your Comment"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-[#FFD700] focus:outline-none resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-4 bg-gradient-to-r from-[#0047AB] to-[#002244] hover:from-[#003388] hover:to-[#001122] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    {status === "sending" ? "Sending..." : "Request"}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Image */}
            <div className="hidden md:flex relative rounded-3xl overflow-hidden group min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600/80 to-green-400/80 z-10 mix-blend-multiply transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-black/20 z-10"></div>
              
              <img 
                src="/abdul.jpeg" 
                alt="Support Representative" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="oswald text-5xl font-black uppercase text-white leading-none shadow-sm drop-shadow-lg">
                  Eager<br/>to<br/>assist!
                </h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CallbackPage;
