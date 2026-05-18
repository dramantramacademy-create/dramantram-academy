import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { User, Mail, Play, Briefcase, FileImage, Lightbulb, CheckCircle, Clock, Phone, PieChart, FileSpreadsheet, Smartphone, BookOpen, BarChart } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

// Countdown component helper
const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-2 sm:gap-4 mt-6">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border-2 border-white/20 rounded-lg text-xl sm:text-2xl font-black oswald bg-white/5">
            {item.value.toString().padStart(2, "0")}
          </div>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-400 mt-2 font-bold">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

// Add your image URLs here
const AI_NEWS_IMAGES = [
  { id: 1, url: "https://be10x.com/wp-content/uploads/2026/01/Untitled-design-1-1-1.avif?gad_source=1&gad_campaignid=23719132075&gbraid=0AAAABCdTOUhgWnZCYMyWYv-s5gqf_KMUE&gclid=CjwKCAjwn4vQBhBsEiwAq3hhN8cW9-uLrplt1JM3SWYd2ZsW-P9lAUVekBh0rxsrwYjlOLJ_ImEHyBoCxjEQAvD_BwE" },
  { id: 2, url: "https://be10x.com/wp-content/uploads/2026/01/2-2.avif?gad_source=1&gad_campaignid=23719132075&gbraid=0AAAABCdTOUhgWnZCYMyWYv-s5gqf_KMUE&gclid=CjwKCAjwn4vQBhBsEiwAq3hhN8cW9-uLrplt1JM3SWYd2ZsW-P9lAUVekBh0rxsrwYjlOLJ_ImEHyBoCxjEQAvD_BwE" },
  { id: 3, url: "https://be10x.com/wp-content/uploads/2026/01/31-ezgif.com-gif-maker.avif?gad_source=1&gad_campaignid=23719132075&gbraid=0AAAABCdTOUhgWnZCYMyWYv-s5gqf_KMUE&gclid=CjwKCAjwn4vQBhBsEiwAq3hhN8cW9-uLrplt1JM3SWYd2ZsW-P9lAUVekBh0rxsrwYjlOLJ_ImEHyBoCxjEQAvD_BwE" },
  { id: 4, url: "https://be10x.com/wp-content/uploads/2026/01/444.avif?gad_source=1&gad_campaignid=23719132075&gbraid=0AAAABCdTOUhgWnZCYMyWYv-s5gqf_KMUE&gclid=CjwKCAjwn4vQBhBsEiwAq3hhN8cW9-uLrplt1JM3SWYd2ZsW-P9lAUVekBh0rxsrwYjlOLJ_ImEHyBoCxjEQAvD_BwE" },
  { id: 5, url: "https://be10x.com/wp-content/uploads/2026/01/5555.avif?gad_source=1&gad_campaignid=23719132075&gbraid=0AAAABCdTOUhgWnZCYMyWYv-s5gqf_KMUE&gclid=CjwKCAjwn4vQBhBsEiwAq3hhN8cW9-uLrplt1JM3SWYd2ZsW-P9lAUVekBh0rxsrwYjlOLJ_ImEHyBoCxjEQAvD_BwE" },
  { id: 6, url: "https://be10x.com/wp-content/uploads/2026/01/666.avif?gad_source=1&gad_campaignid=23719132075&gbraid=0AAAABCdTOUhgWnZCYMyWYv-s5gqf_KMUE&gclid=CjwKCAjwn4vQBhBsEiwAq3hhN8cW9-uLrplt1JM3SWYd2ZsW-P9lAUVekBh0rxsrwYjlOLJ_ImEHyBoCxjEQAvD_BwE" },
];

const WebinarPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };
  // Set target date to May 30, 2026 11:00 AM
  const webinarDate = new Date("2026-05-30T11:00:00");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaToken) {
      alert("Please verify that you are a human!");
      return;
    }

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
      await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey);
      setStatus("success");
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
      formRef.current?.reset();
    } catch (error) {
      console.error("Failed to send:", error);
      setStatus("error");
    }
  };

  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlayVideo = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="pt-20 bg-black min-h-screen text-white font-inter">
      {/* 1. HERO SECTION */}
      <section className="relative py-16 md:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black opacity-80" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-6 mb-6 text-sm font-bold text-gray-300 uppercase tracking-widest border-b border-white/10 pb-4 inline-flex w-fit">
              <div>
                <span className="text-[#FFD700] block text-[10px]">Date</span>
                30 May, 2026
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div>
                <span className="text-[#FFD700] block text-[10px]">Time</span>
                11:00 AM
              </div>
            </div>

            <h1 className="oswald text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.1] mb-6">
              3D Creatives: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-[#FFD700]">Freelancing vs Job</span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
              You've been learning 3D. You can make renders. So why does it still feel like you're going nowhere? Get clarity on your career direction, portfolio first steps, and real industry expectations.
            </p>

            <div className="mb-8">
              <h3 className="oswald text-xl uppercase tracking-widest font-bold text-white">Webinar Starts In:</h3>
              <CountdownTimer targetDate={webinarDate} />
            </div>
            
            {/* 
            <button onClick={scrollToForm} className="hidden lg:inline-block w-fit px-8 py-4 bg-white text-black font-black uppercase tracking-widest rounded hover:bg-gray-200 transition-colors">
              Learn More
            </button> */}
            
          </div>

          {/* Right: Video & Form */}
          <div className="flex flex-col">
            {/* Video Placeholder */}
            <div 
              className={`bg-zinc-950 w-full aspect-video rounded-t-2xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group ${!isPlaying ? 'cursor-pointer' : ''}`}
              onClick={!isPlaying ? handlePlayVideo : undefined}
            >
              <video 
                ref={videoRef}
                src="/reel.mp4" 
                className={`absolute inset-0 w-full h-full ${isPlaying ? 'object-contain bg-black' : 'object-cover opacity-40 group-hover:opacity-50 transition-opacity'}`}
                controls={isPlaying}
                playsInline
                preload="metadata"
              />
              {!isPlaying && (
                <>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors pointer-events-none"></div>
                  <div className="w-16 h-16 bg-[#FF0000] text-white rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,0,0,0.5)] pointer-events-none">
                    <Play className="ml-1" size={24} fill="currentColor" />
                  </div>
                </>
              )}
            </div>

            {/* Registration Form */}
            <div className="bg-zinc-950 border border-white/10 border-t-0 p-8 rounded-b-2xl shadow-2xl relative" id="registration-form">
              {status === "success" ? (
                <div className="text-center py-12">
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                  <h3 className="oswald text-2xl font-black uppercase mb-2">Registered!</h3>
                  <p className="text-gray-400 text-sm">We've sent the webinar link to your email.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="title" value="Webinar" />
                  <input type="hidden" name="domain_expertise" value="N/A" />
                  <input type="hidden" name="enquiry" value="N/A" />
                  
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                      <input name="user_name" required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-11 pr-4 text-sm focus:border-[#FFD700] focus:outline-none" />
                      <input type="hidden" name="name" value={formRef.current?.user_name?.value || ''} />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                      <input name="user_email" required type="email" placeholder="example@email.com" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-11 pr-4 text-sm focus:border-[#FFD700] focus:outline-none" />
                      <input type="hidden" name="email" value={formRef.current?.user_email?.value || ''} />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                      <input name="user_phone" required type="tel" placeholder="+91 0000000000" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-11 pr-4 text-sm focus:border-[#FFD700] focus:outline-none" />
                      <input type="hidden" name="phone" value={formRef.current?.user_phone?.value || ''} />
                    </div>
                  </div>

                  <div className="flex justify-center mt-4">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6Le5HYgsAAAAAOnb6-8A_7CISxjGrj7l5WjTJawW"
                      onChange={onCaptchaChange}
                      theme="dark"
                    />
                  </div>

                  <button type="submit" disabled={status === "sending"} className="w-full py-4 mt-2 bg-gradient-to-r from-[#111] to-[#222] border border-white/20 hover:border-white/50 text-white font-black uppercase tracking-widest rounded-lg transition-all flex items-center justify-center">
                    {status === "sending" ? "Registering..." : "Register Now"}
                  </button>
                  {status === "error" && <p className="text-red-500 text-xs text-center mt-2">Error sending registration. Try again.</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. AI NEWS SECTION */}
      <section className="py-20 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="oswald text-4xl md:text-5xl font-black tracking-tighter">
              AI is reshaping jobs faster than ever
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
            {AI_NEWS_IMAGES.map((image, index) => (
              <div key={image.id} className="bg-zinc-900 border border-white/10 group relative flex items-center justify-center overflow-hidden">
                <span className="text-gray-500 text-sm font-medium z-0 absolute">Paste Image URL {index + 1} Here</span>
                <img src={image.url} alt={`AI News ${index + 1}`} className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500 z-10 opacity-0" 
                  onLoad={(e) => (e.currentTarget.style.opacity = '1')} 
                  onError={(e) => (e.currentTarget.style.opacity = '0')}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BENEFITS SECTION */}
      <section className="py-20 bg-zinc-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="oswald text-4xl md:text-5xl font-black uppercase tracking-tighter">What Will You Learn?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#FFD700]">
                <Lightbulb size={28} />
              </div>
              <h3 className="oswald text-2xl font-black uppercase mb-4">Industry Reality Check</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Understand what companies actually want from freshers: problem-solvers, not just software operators.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#FF0000]">
                <Briefcase size={28} />
              </div>
              <h3 className="oswald text-2xl font-black uppercase mb-4">Freelancing vs Job</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Compare realistic paths, income timelines, and learn how to position yourself for success.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
                <FileImage size={28} />
              </div>
              <h3 className="oswald text-2xl font-black uppercase mb-4">Portfolio Creation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Learn how to build your first 3 portfolio pieces that actually get you hired or win clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUTCOMES SECTION */}
      <section className="py-24 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="oswald text-4xl md:text-5xl font-black tracking-tighter">
              After this <span className="text-[#FF0000]">webinar</span> you will be able to
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                number: "01",
                title: "Clarity on YOUR Path",
                desc: "A clear, honest picture of which path — freelancing or studio — actually fits your situation right now."
              },
              {
                number: "02",
                title: "Realistic Expectations",
                desc: "What freelancing and studio jobs look like in the beginning. Not the Instagram version. The real one."
              },
              {
                number: "03",
                title: "Portfolio Direction",
                desc: "What your portfolio needs to say, and what's holding most fresher portfolios back."
              },
              {
                number: "04",
                title: "Mistakes to Avoid",
                desc: "The 6 most common traps that keep freshers stuck for months — and how to skip past them."
              },
              {
                number: "05",
                title: "A Concrete Starting Plan",
                desc: "A 90-day action plan you can begin this week, regardless of which path you choose."
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`flex gap-6 items-center p-6 bg-white/5 border border-[#FF0000]/30 rounded-2xl hover:border-[#FF0000]/80 transition-colors ${
                  idx === 4 ? "md:col-span-2 md:w-[calc(50%-12px)] md:mx-auto" : ""
                }`}
              >
                <div className="w-16 h-16 bg-[#FF0000] rounded-xl flex items-center justify-center shrink-0 text-white oswald text-3xl font-black shadow-[0_0_15px_rgba(255,0,0,0.5)]">
                  {item.number}
                </div>
                <div>
                  <h3 className="oswald text-2xl font-black mb-2 tracking-wide text-[#FFD700]">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SCHEDULE SECTION */}
      <section className="py-24 bg-zinc-950 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-8">
          
          {/* Left side text */}
          <div className="lg:pr-12">
            <h2 className="oswald text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Webinar Schedule</h2>
            <p className="text-gray-400 mb-10 leading-relaxed max-w-md">
              Provide an overview of the webinar's structure so participants gain an in-depth understanding of what to expect during the session.
            </p>
            <button onClick={scrollToForm} className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest rounded hover:bg-gray-200 transition-colors mb-12">
              Register Now
            </button>
            
            <div className="pt-8 border-t border-white/10">
              <h3 className="oswald text-xl uppercase tracking-widest font-bold text-white mb-4">Webinar Starts In:</h3>
              <CountdownTimer targetDate={webinarDate} />
            </div>
          </div>

          {/* Right side timeline */}
          <div className="relative border-l border-white/20 pl-8 space-y-12 pb-12">
            {[
              { time: "11:00 AM", title: "Welcome & Opening Hook", desc: "Setting the stage: Why does it feel like you're going nowhere in 3D?" },
              { time: "11:20 AM", title: "Creative Industry Reality Check", desc: "The bar is rising. What companies really want from freshers today." },
              { time: "11:30 AM", title: "Freelancing vs Job Path", desc: "The real comparison. Income timelines, hiring processes, and making a choice." },
              { time: "11:50 AM", title: "Portfolio Creation for 3D Freshers", desc: "Why you don't need 20 projects, just 3 great ones. Avoiding the tutorial trap." },
              { time: "12:05 PM", title: "What Makes You Industry-Ready", desc: "Technical skill + professional skill. How Dramantram Academy closes the gap." },
              { time: "12:15 PM", title: "Live Q&A Session", desc: "We answer your direct questions about pricing, software, and getting jobs." },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[41px] top-1 w-4 h-4 bg-black border-2 border-[#FFD700] rounded-full"></div>
                
                <div className="inline-block px-3 py-1 bg-white/10 text-[#FFD700] text-[10px] font-black tracking-widest uppercase rounded mb-3">
                  {item.time}
                </div>
                <h4 className="oswald text-xl font-bold uppercase mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm max-w-sm">{item.desc}</p>
              </div>
            ))}
            <div className="absolute -left-[41px] bottom-0 w-4 h-4 bg-black border-2 border-white/20 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 4. SPEAKERS SECTION */}
<section className="py-24 bg-zinc-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          {/* Added text-center here to center the heading */}
          <h2 className="oswald text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16 text-center">
            Webinar Speakers
          </h2>
          
          {/* Added mx-auto here to center the grid block itself */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-6 items-center p-6 bg-white/5 border border-white/10 rounded-2xl">
              <div className="w-24 h-24 bg-zinc-800 rounded-xl overflow-hidden shrink-0">
                <img src="/shadab.jpeg" alt="Expert Mentor" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="oswald text-2xl font-black uppercase mb-1">Mohammad Shadab</h3>
                <p className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-3">Senior 3D Artist</p>
                <p className="text-gray-400 text-sm">
                  Years of experience helping freshers land their first studio job and navigate the complex 3D industry.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-center p-6 bg-white/5 border border-white/10 rounded-2xl">
              <div className="w-24 h-24 bg-zinc-800 rounded-xl overflow-hidden shrink-0">
                <img src="/kundan.jpeg" alt="Industry Expert" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="oswald text-2xl font-black uppercase mb-1">Kundan Kumar</h3>
                <p className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-3">Co-Founder, Dramantram</p>
                <p className="text-gray-400 text-sm">
                  Insights into the real hiring process, art tests, and what makes a portfolio stand out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="py-24 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-red-radial opacity-30"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="oswald text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Register Today!</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
            Don't miss out on this opportunity to clarify your 3D career path. Space is limited, secure your spot now.
          </p>
          <button onClick={scrollToForm} className="px-10 py-5 bg-[#FF0000] hover:bg-[#CC0000] text-white text-lg font-black uppercase tracking-widest rounded-lg transition-colors shadow-[0_0_30px_rgba(255,0,0,0.3)]">
            Register Now
          </button>
        </div>
      </section>

    </div>
  );
};

export default WebinarPage;
