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
  QrCode,
  ArrowRight,
  User,
  ChevronRight,
  Loader2,
  CheckCircle,
} from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

const AdmissionsPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const courses = [
    { id: "uiux", label: "Visual Design", icon: "📱" },
    { id: "vfx", label: "Animation 2D & 3D", icon: "🎬" },
    { id: "editing", label: "Video Editing", icon: "✂️" },
    { id: "visual", label: "AI Marketing & Automation", icon: "📈" },
    { id: "bootcamp", label: "Bootcamp", icon: "🎓" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse) {
      alert("Please select a course first!");
      return;
    }
    setStatus("sending");
    if (!captchaToken) {
      alert("Please verify that you are a human!");
      return;
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Use the new universal ID
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setCaptchaToken(null); // Reset captcha on success
      recaptchaRef.current?.reset();
      formRef.current?.reset();
      setSelectedCourse("");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="pt-20 bg-black min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-red-radial opacity-40"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-[#FF0000]/10 border border-[#FF0000]/30 rounded-full mb-8">
            <span className="text-[10px] font-black text-[#FF0000] uppercase tracking-[0.4em]">
              Admissions 2026
            </span>
          </div>
          <h1 className="oswald text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8">
            Apply <span className="text-[#FFD700]">Today.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            Secure your slot for the upcoming batch in Lucknow.
          </p>
        </div>
      </div>

      {/* --- FORM SECTION --- */}
      <div className="max-w-4xl mx-auto px-6 mb-32">
        <div className="gloss-card p-8 md:p-12 rounded-[2.5rem] border-red-500/20 relative overflow-hidden">
          {status === "success" ? (
            <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
              <CheckCircle className="text-green-500 mx-auto mb-6" size={80} />
              <h2 className="oswald text-4xl font-black uppercase mb-2">
                Application <span className="text-[#FFD700]">Sent!</span>
              </h2>
              <p className="text-gray-400 mb-8">
                We have received your details. Our mentors will call you
                shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-red-500 font-bold uppercase tracking-widest text-xs hover:underline"
              >
                Send another response
              </button>
            </div>
          ) : (
            <>
              <h2 className="oswald text-4xl font-black uppercase mb-2">
                Registration <span className="text-[#FF0000]">Form</span>
              </h2>
              <p className="text-gray-500 mb-10 font-medium">
                Provide your details and select your specialization.
              </p>

              <form ref={formRef} className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
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
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-[#FF0000] focus:outline-none transition-all"
                      />
                      <input
                        type="hidden"
                        name="registration_type"
                        value="Full Admission"
                      />
                    </div>
                  </div>

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
                        // Regex for standard email validation
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        title="Please enter a valid email address (e.g., name@email.com)"
                        placeholder="Email Address"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-[#FF0000] outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        size={18}
                      />
                      <input
                        name="user_phone"
                        required
                        type="tel"
                        // Validates 10 digits starting with 6, 7, 8, or 9
                        pattern="^[6-9]\d{9}$"
                        title="Please enter a valid 10-digit Indian phone number"
                        placeholder="Phone Number (10 Digits)"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-[#FF0000] outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <input
                    type="hidden"
                    name="selected_course"
                    value={selectedCourse}
                  />
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                    Select Your Course
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {courses.map((course) => (
                      <button
                        key={course.id}
                        type="button"
                        onClick={() => setSelectedCourse(course.label)}
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${
                          selectedCourse === course.label
                            ? "bg-[#FF0000]/20 border-[#FF0000] shadow-[0_0_15px_rgba(255,0,0,0.2)]"
                            : "bg-white/5 border-white/10 hover:border-white/30"
                        }`}
                      >
                        <span className="text-2xl">{course.icon}</span>
                        <span
                          className={`font-bold uppercase text-xs tracking-wider ${selectedCourse === course.label ? "text-white" : "text-gray-400"}`}
                        >
                          {course.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <div className="flex justify-center mb-6">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6Le5HYgsAAAAAOnb6-8A_7CISxjGrj7l5WjTJawW" // Put your actual Site Key here
                      onChange={onCaptchaChange}
                      theme="dark" // Matches your black/red aesthetic
                    />
                  </div>
                </div>

                <button
                  disabled={status === "sending"}
                  className="w-full py-5 bg-[#FF0000] text-white font-black uppercase tracking-[0.2em] rounded-xl hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {status === "sending" ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      Submit Application{" "}
                      <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-center text-xs font-bold">
                    Something went wrong. Check console for details.
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enrollment Details */}
          <div className="reveal">
            <h2 className="oswald text-3xl font-black uppercase mb-10 border-b border-red-900/20 pb-4">
              Enrollment <span className="text-[#FF0000]">Details</span>
            </h2>
            <div className="space-y-8 mb-12">
              {[
                {
                  step: "01",
                  title: "Fill the Form",
                  desc: "Click Apply Now or scan the QR to fill your basic details.",
                },
                {
                  step: "02",
                  title: "Counseling Call",
                  desc: "Our mentors will call you to discuss your career goals.",
                },
                {
                  step: "03",
                  title: "Studio Visit",
                  desc: "Visit our Lucknow campus to see the environment firsthand.",
                },
                {
                  step: "04",
                  title: "Registration",
                  desc: "Pay the seat booking fee to confirm your admission.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="oswald text-4xl font-black text-red-600/30">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="gloss-card p-10 rounded-3xl border-red-500/10">
              <h3 className="oswald text-2xl font-bold uppercase mb-6 flex items-center gap-3">
                <QrCode className="text-[#FFD700]" /> Scan to Apply
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-48 h-48 bg-white p-2 rounded-xl">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://chat.whatsapp.com/GT8IRbAU0H3GXw7syc9w6n"
                    alt="QR Code"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-gray-400 text-sm mb-6 font-medium">
                    Scan this code with your phone camera to open the
                    application form instantly.
                  </p>
                  <a
                    href="https://chat.whatsapp.com/GT8IRbAU0H3GXw7syc9w6n"
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-[#FF0000] text-white font-black uppercase tracking-widest text-xs rounded-xl hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all"
                  >
                    WhatsApp Us <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="reveal">
            <h2 className="oswald text-3xl font-black uppercase mb-10 border-b border-red-900/20 pb-4">
              Full <span className="text-[#FF0000]">Contact</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="gloss-card p-8 rounded-2xl border-white/5">
                <Phone className="text-[#FFD700] mb-4" size={24} />
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">
                  Phone
                </div>
                <div className="text-base font-black text-white">
                  <a
                    href="tel:+919599571599"
                    className="hover:text-[#FFD700] transition-colors"
                  >
                    +91 95995 71599
                  </a>
                </div>
              </div>
              <div className="gloss-card p-8 rounded-2xl border-white/5 gloss-card w-fit min-w-[200px]">
                <Mail className="text-[#FFD700] mb-4" size={24} />
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">
                  Email
                </div>
                <div className="text-[16px] font-black text-white whitespace-nowrap tracking-tighter leading-tight">
                  <a
                    href="mailto:admission@dramantramacademy.com"
                    className="hover:text-[#FFD700] transition-colors"
                  >
                    admission@dramantramacademy.com
                  </a>
                </div>
              </div>
            </div>

            <div className="gloss-card p-8 rounded-2xl border-white/5 mb-12">
              <MapPin className="text-[#FF0000] mb-4" size={28} />
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">
                Academy Address
              </div>
              <p className="text-white font-bold leading-relaxed">
                Summit Building, 10th Floor, <br />
                Vibhuti Khand, Gomti Nagar, <br />
                Lucknow, Uttar Pradesh 226010
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { Icon: Instagram, link: "#" },
                { Icon: Youtube, link: "#" },
                { Icon: Twitter, link: "#" },
                { Icon: Linkedin, link: "#" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="w-16 h-16 rounded-2xl gloss-card border-white/5 flex items-center justify-center text-gray-500 hover:text-[#FFD700] hover:border-[#FFD700] hover:scale-110 transition-all"
                >
                  <item.Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;
