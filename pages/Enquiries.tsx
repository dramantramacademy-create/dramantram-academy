import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  MessageSquare,
  Send,
  User,
  ChevronRight,
  Loader2,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

const EnquiryPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

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
      // We use sendForm which automatically captures all input fields with 'name' attributes
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey,
      );

      setStatus("success");
      formRef.current?.reset();
    } catch (error) {
      console.error("Failed to send:", error);
      setStatus("error");
    }
  };

  return (
    <div className="pt-20 bg-black min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-red-radial opacity-40"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full mb-8">
            <span className="text-[10px] font-black text-[#FFD700] uppercase tracking-[0.4em]">
              Support & Help
            </span>
          </div>
          <h1 className="oswald text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8">
            Have <span className="text-[#FF0000]">Questions?</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            Whether it's about curriculum, fees, or placements—we're here to
            help you navigate your creative journey.
          </p>
        </div>
      </div>

      {/* --- ENQUIRY FORM SECTION --- */}
      <div className="max-w-4xl mx-auto px-6 mb-32">
        <div className="gloss-card p-8 md:p-12 rounded-[2.5rem] border-red-500/20 relative overflow-hidden">
          {status === "success" ? (
            /* ... Success State Code ... */
            <div className="text-center py-20">
              <CheckCircle className="text-green-500 mx-auto mb-6" size={80} />
              <h2 className="oswald text-4xl font-black uppercase mb-2">
                Message <span className="text-[#FFD700]">Sent!</span>
              </h2>
              <button
                onClick={() => setStatus("idle")}
                className="text-red-500 font-bold uppercase text-xs"
              >
                Send another
              </button>
            </div>
          ) : (
            <>
              <h2 className="oswald text-4xl font-black uppercase mb-2">
                General <span className="text-[#FF0000]">Enquiry</span>
              </h2>

              <form ref={formRef} className="space-y-8" onSubmit={handleSubmit}>
                {/* HIDDEN FIELD FOR {{title}} variable in your Subject line */}
                <input type="hidden" name="title" value="General Web Enquiry" />
                {/* Hidden fields for unified template compatibility */}
                <input type="hidden" name="user_phone" value="N/A" />
                <input type="hidden" name="domain_expertise" value="N/A" />

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name field: Maps to {{user_name}} and {{name}} */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        size={18}
                      />
                      <input
                        name="user_name"
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-[#FF0000] focus:outline-none"
                      />
                      {/* Duplicate for {{name}} used in EmailJS From Name */}
                      <input
                        type="hidden"
                        name="name"
                        value={formRef.current?.user_name?.value}
                      />
                    </div>
                  </div>

                  {/* Email field: Maps to {{user_email}} and {{email}} */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        size={18}
                      />
                      <input
                        name="user_email"
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-[#FF0000] focus:outline-none"
                      />
                      {/* Duplicate for {{email}} used in EmailJS Reply-To */}
                      <input
                        type="hidden"
                        name="email"
                        value={formRef.current?.user_email?.value}
                      />
                    </div>
                  </div>
                </div>

                {/* Message field: Maps to {{enquiry}} */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                    Your Enquiry
                  </label>
                  <div className="relative">
                    <MessageSquare
                      className="absolute left-4 top-6 text-gray-500"
                      size={18}
                    />
                    <textarea
                      name="enquiry"
                      required
                      rows={5}
                      placeholder="Your message..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-[#FF0000] focus:outline-none resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  disabled={status === "sending"}
                  className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.2em] rounded-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-2 group"
                >
                  {status === "sending" ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Quick Help */}
          <div>
            <h2 className="oswald text-3xl font-black uppercase mb-10 border-b border-red-900/20 pb-4">
              Quick <span className="text-[#FF0000]">Help</span>
            </h2>
            <div className="space-y-4">
              {[
                "How do I schedule a demo class?",
                "Are there weekend batches available?",
                "What software do I need to install?",
                "Do you provide certificates upon completion?",
              ].map((faq, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-red-500/30 transition-all cursor-pointer group"
                >
                  <span className="font-bold text-sm uppercase tracking-wider text-gray-300 group-hover:text-white">
                    {faq}
                  </span>
                  <HelpCircle size={20} className="text-red-600" />
                </div>
              ))}
            </div>
          </div>

          {/* Contact Details (Repeated for Consistency) */}
          <div>
            <h2 className="oswald text-3xl font-black uppercase mb-10 border-b border-red-900/20 pb-4">
              Contact <span className="text-[#FF0000]">Info</span>
            </h2>
            <div className="gloss-card p-8 rounded-2xl border-white/5 mb-6">
              <p className="text-gray-400 text-sm font-medium leading-relaxed">
                Prefer a direct conversation? Our office is open Mon-Sat, 10 AM
                to 7 PM. Visit us for a cup of coffee and a career roadmap
                session.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="gloss-card p-8 rounded-2xl border-white/5 flex flex-col items-center text-center">
                <Phone className="text-[#FFD700] mb-4" size={24} />
                <div className="text-lg font-black">+91 95995 71599</div>
              </div>
              <div className="gloss-card p-8 rounded-2xl border-white/5 flex flex-col items-center text-center w-fit min-w-[200px]">
                <Mail className="text-[#FFD700] mb-4" size={24} />
                <div className="text-sm font-black truncate w-full">
                  admission@dramantramacademy.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPage;
