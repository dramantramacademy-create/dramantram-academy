import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { 
  User, 
  Mail, 
  Play, 
  Briefcase, 
  FileImage, 
  Lightbulb, 
  CheckCircle, 
  Clock, 
  Phone, 
  BarChart,
  ChevronDown,
  ChevronUp,
  Target,
  Award,
  TrendingUp,
  Eye,
  MessageSquare,
  ShieldAlert,
  HelpCircle
} from "lucide-react";
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
          <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border border-white/10 rounded-lg text-xl sm:text-2xl font-black oswald bg-white/5 relative overflow-hidden group">
            <span className="relative z-10">{item.value.toString().padStart(2, "0")}</span>
            <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

interface Subsection {
  title?: string;
  slides: string[];
}

interface CurriculumSegment {
  segment: string;
  topic: string;
  duration: string;
  purpose: string;
  subsections: Subsection[];
}

const WEBINAR_CURRICULUM: CurriculumSegment[] = [
  {
    segment: "Introduction",
    topic: "Welcome, Context & Expectations",
    duration: "15 min",
    purpose: "Set context and establish the central question of the webinar",
    subsections: [
      {
        slides: [
          "Welcome & Introduction",
          "About Dramantram Academy",
          "Audience Poll",
          "Why This Webinar?",
          "The Question We Are Exploring Today",
          "What This Webinar Is Not",
          "Session Roadmap"
        ]
      }
    ]
  },
  {
    segment: "Segment 1",
    topic: "Why Some Creatives Grow Faster Than Others",
    duration: "15 min",
    purpose: "Challenge common assumptions about career growth",
    subsections: [
      {
        slides: [
          "The Common Belief About Success",
          "Same Skills, Different Outcomes",
          "Why Talent Alone Doesn't Explain Growth",
          "Growth Beyond Software Skills",
          "The Hidden Side of Professional Growth",
          "The Core Question: What Creates Career Growth?"
        ]
      }
    ]
  },
  {
    segment: "Segment 2",
    topic: "Learning Skills vs Building a Career",
    duration: "15 min",
    purpose: "Separate technical growth from professional growth",
    subsections: [
      {
        slides: [
          "The Learning Journey",
          "The Career Journey",
          "Student Mindset vs Professional Mindset",
          "Learning Tasks vs Solving Problems",
          "Software Skills vs Professional Skills",
          "Why Most Creatives Focus Only on Technical Growth",
          "The Skills Nobody Explicitly Teaches"
        ]
      }
    ]
  },
  {
    segment: "Segment 3",
    topic: "Professional Behaviours That Influence Growth",
    duration: "30 min",
    purpose: "Introduce key behaviours that affect opportunities and career progression",
    subsections: [
      {
        title: "Communication",
        slides: [
          "What Communication Really Means",
          "Common Communication Mistakes",
          "Why Communication Creates Trust"
        ]
      },
      {
        title: "Reliability",
        slides: [
          "Reliability vs Talent",
          "Consistency Matters",
          "Becoming Someone People Can Depend On"
        ]
      },
      {
        title: "Ownership",
        slides: [
          "Waiting for Instructions vs Taking Initiative",
          "Problem Solvers vs Task Completers",
          "Professional Responsibility"
        ]
      },
      {
        title: "Feedback",
        slides: [
          "Why Feedback Matters",
          "Receiving Feedback Professionally",
          "Growth Through Iteration"
        ]
      },
      {
        title: "Visibility",
        slides: [
          "Being Skilled vs Being Seen",
          "Showing Your Work",
          "Creating Opportunities Through Visibility"
        ]
      },
      {
        title: "Reflection Activity",
        slides: [
          "Self-Rating Exercise"
        ]
      }
    ]
  },
  {
    segment: "Segment 4",
    topic: "Why Good Work Still Gets Ignored",
    duration: "15 min",
    purpose: "Introduce portfolio thinking, presentation and visibility",
    subsections: [
      {
        slides: [
          "The Portfolio Myth",
          "Quantity vs Quality",
          "Presentation Matters",
          "Process Matters",
          "Clarity Matters",
          "Visibility Matters",
          "Why Good Work Sometimes Gets Missed"
        ]
      }
    ]
  },
  {
    segment: "Segment 5",
    topic: "Identify Your Biggest Growth Bottleneck",
    duration: "10 min",
    purpose: "Help attendees diagnose their primary growth challenge",
    subsections: [
      {
        slides: [
          "Skill Gap",
          "Communication Gap",
          "Reliability Gap",
          "Portfolio Gap",
          "Visibility Gap",
          "Professional Mindset Gap",
          "Self Assessment Matrix",
          "Identify Your Primary Bottleneck"
        ]
      }
    ]
  },
  {
    segment: "Segment 6",
    topic: "What Should You Focus On Next?",
    duration: "10 min",
    purpose: "Provide direction and next steps",
    subsections: [
      {
        slides: [
          "Don't Fix Everything At Once",
          "One Bottleneck, One Focus",
          "Choosing The Right Next Step",
          "30-Day Improvement Mindset",
          "Building Professional Momentum",
          "Growth Is Intentional"
        ]
      }
    ]
  },
  {
    segment: "Q&A + Dramantram Academy",
    topic: "Wrap Up, Questions & Academy Introduction",
    duration: "10 min",
    purpose: "Consolidate learning and introduce future growth pathways",
    subsections: [
      {
        slides: [
          "Key Takeaways",
          "What We Learned Today",
          "What We Didn't Cover Today",
          "Future Webinar Topics",
          "Dramantram Academy Approach",
          "Community & Learning Path",
          "Q&A",
          "Closing Thoughts"
        ]
      }
    ]
  }
];

const WebinarPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [expandedSegment, setExpandedSegment] = useState<number | null>(0); // Default first one open

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };
  
  // Set target date to Sunday, June 28, 2026 11:00 AM (relative to local time June 13, 2026)
  const webinarDate = new Date("2026-06-28T10:30:00");

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

  const toggleSegment = (index: number) => {
    setExpandedSegment(expandedSegment === index ? null : index);
  };

  return (
    <div className="pt-20 bg-black min-h-screen text-white font-inter">
      {/* 1. HERO SECTION */}
      <section className="relative py-16 md:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black opacity-80" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div className="flex flex-col justify-start lg:pt-4">
            <div className="flex items-center gap-6 mb-6 text-sm font-bold text-gray-300 uppercase tracking-widest border-b border-white/10 pb-4 inline-flex w-fit">
              <div>
                <span className="text-[#FFD700] block text-[10px]">Date</span>
                27 June, 2026
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div>
                <span className="text-[#FFD700] block text-[10px]">Time</span>
                10:30 AM IST
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div>
                <span className="text-[#FFD700] block text-[10px]">Duration</span>
                120 Mins
              </div>
            </div>

            <h1 className="oswald text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.1] mb-6">
              The Difference Between a <span className="text-[#FF3B30] drop-shadow-[0_0_15px_rgba(255,59,48,0.2)]">₹25K</span> and a <span className="text-[#39FF14] drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]">₹1 Lakh</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Designer & Animator</span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
              Why do some creatives plateau at ₹25K/month while others scale to ₹1 Lakh/month and beyond? Join this 120-minute masterclass to learn the professional behaviors, mindsets, and portfolio strategies that bridge the gap.
            </p>

            <div className="mb-8">
              <h3 className="oswald text-xl uppercase tracking-widest font-bold text-white">Webinar Starts In:</h3>
              <CountdownTimer targetDate={webinarDate} />
            </div>
          </div>

          {/* Right: Video & Form */}
          <div className="flex flex-col max-w-[470px] mx-auto lg:mr-0 w-full">
            {/* Video Placeholder */}
            <div
              className={`bg-zinc-950 w-full aspect-square rounded-t-2xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group ${!isPlaying ? 'cursor-pointer' : ''}`}
              onClick={!isPlaying ? handlePlayVideo : undefined}
            >
              <img src="/webinar.jpeg" alt="Webinar" className="w-full h-full object-cover"/>
              {/* <video
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
              )} */}
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
                  <input type="hidden" name="title" value="Webinar #2: ₹25K vs ₹1L Designer" />
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

                  <button type="submit" disabled={status === "sending"} className="w-full py-4 mt-2 bg-gradient-to-r from-[#111] to-[#222] border border-white/20 hover:border-white/50 text-white font-black uppercase tracking-widest rounded-lg transition-all flex items-center justify-center cursor-pointer">
                    {status === "sending" ? "Registering..." : "Register Now"}
                  </button>
                  {status === "error" && <p className="text-red-500 text-xs text-center mt-2">Error sending registration. Try again.</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPEAKERS SECTION */}
      <section className="py-24 bg-zinc-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="oswald text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16 text-center">
            Webinar Speakers
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-6 items-center p-6 bg-white/5 border border-white/10 rounded-2xl">
              <div className="w-24 h-24 bg-zinc-800 rounded-xl overflow-hidden shrink-0">
                <img src="/shadab.jpeg" alt="Expert Mentor" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="oswald text-2xl font-black uppercase mb-1">Mohammad Shadab</h3>
                <p className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-3">Senior 3D Artist & Mentor</p>
                <p className="text-gray-400 text-sm">
                  Specializes in teaching advanced workflows, scene-building pipelines, and professional standards that command premium industry salaries.
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
                  Direct recruiter and studio lead, sharing years of hiring insights on what separates standard portfolios from top-tier professionals.
                </p>
              </div>
            </div>
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
              <h3 className="oswald text-2xl font-black uppercase mb-4">Professional vs Software Skills</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Understand why raw tool mastery (Maya, Blender, Unreal) is only 30% of your career growth, and how the unseen 70% of professional skills drives salary jumps.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#FF0000]">
                <Briefcase size={28} />
              </div>
              <h3 className="oswald text-2xl font-black uppercase mb-4">Gaining Professional Trust</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Discover the behavioral archetypes (Ownership, Speed, Communication) that build trust, allowing you to bypass typical gatekeepers and command high-value roles.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
                <FileImage size={28} />
              </div>
              <h3 className="oswald text-2xl font-black uppercase mb-4">High-Value Portfolio Strategy</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Learn why standard tutorial renders fail to attract premium jobs, and how to structure process-driven case studies that show you solve real business problems.
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
                title: "Spot Your Core Bottleneck",
                desc: "Accurately diagnose if your career plateau is due to a skill gap, portfolio gap, visibility gap, reliability gap, or communication gap."
              },
              {
                number: "02",
                title: "Transition to Value-Provider",
                desc: "Adopt a professional mindset, moving from waiting for task sheets to taking active ownership and solving complex studio problems."
              },
              {
                number: "03",
                title: "Build Process-Rich Case Studies",
                desc: "Shift your portfolio strategy from output quantity to process quality, documenting your design path to impress studio directors."
              },
              {
                number: "04",
                title: "Execute Flawless Communication",
                desc: "Apply clean communication templates, manage critiques professionally, and establish consistency that turns clients into repeat accounts."
              },
              {
                number: "05",
                title: "Launch a Focused 30-Day Plan",
                desc: "Leave the masterclass with a customized 30-day action plan that systematically solves your single most critical growth bottleneck."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-6 items-center p-6 bg-white/5 border border-[#FF0000]/30 rounded-2xl hover:border-[#FF0000]/80 transition-colors ${idx === 4 ? "md:col-span-2 md:w-[calc(50%-12px)] md:mx-auto" : ""
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

      {/* 5. INTERACTIVE SCHEDULE/STRUCTURE SECTION */}
      <section className="py-24 bg-zinc-950 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 lg:gap-12">

          {/* Left side text */}
          <div className="lg:col-span-5 lg:pr-8 flex flex-col justify-between">
            <div>
              <h2 className="oswald text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Webinar Curriculum</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Click through the modules of our 120-minute masterclass curriculum to explore the exact topics, slides, and learning goals covered in each segment.
              </p>
              <button onClick={scrollToForm} className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest rounded hover:bg-gray-200 transition-colors mb-12 cursor-pointer">
                Register Now
              </button>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3 className="oswald text-xl uppercase tracking-widest font-bold text-white mb-4">Webinar Starts In:</h3>
              <CountdownTimer targetDate={webinarDate} />
            </div>
          </div>

          {/* Right side interactive Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {WEBINAR_CURRICULUM.map((segment, idx) => {
              const isOpen = expandedSegment === idx;
              
              // Custom icons for the segments to make it visually premium
              let Icon = Award;
              if (idx === 0) Icon = HelpCircle;
              else if (idx === 1) Icon = TrendingUp;
              else if (idx === 2) Icon = Lightbulb;
              else if (idx === 3) Icon = ShieldAlert;
              else if (idx === 4) Icon = Eye;
              else if (idx === 5) Icon = Target;
              else if (idx === 6) Icon = MessageSquare;
              
              return (
                <div 
                  key={idx} 
                  className={`border rounded-xl transition-all duration-300 ${
                    isOpen 
                      ? "bg-[#FF0000]/5 border-[#FF0000]/40 shadow-[0_0_20px_rgba(255,0,0,0.05)]" 
                      : "bg-zinc-900/40 border-white/5 hover:border-white/15"
                  }`}
                >
                  <button 
                    onClick={() => toggleSegment(idx)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? "bg-[#FF0000] text-white" : "bg-white/5 text-gray-400"
                      }`}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#FFD700] block mb-1">
                          {segment.segment} • {segment.duration}
                        </span>
                        <h4 className="oswald text-lg font-bold uppercase text-white tracking-wide">
                          {segment.topic}
                        </h4>
                      </div>
                    </div>
                    <div>
                      {isOpen ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[1000px] border-t border-white/5" : "max-h-0"
                  }`}>
                    <div className="p-5 space-y-5">
                      <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/5">
                        <Target size={16} className="text-[#FFD700] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-[#FFD700] block mb-0.5">LEARNING PURPOSE</span>
                          <p className="text-gray-300 text-sm leading-relaxed">{segment.purpose}</p>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-3">COVERED MODULES & SLIDES</span>
                        
                        {/* Render Segment 3's grouped subheadings if it's segment index 3 */}
                        {idx === 3 ? (
                          <div className="grid sm:grid-cols-2 gap-4">
                            {segment.subsections.map((sub, sIdx) => (
                              <div key={sIdx} className="bg-white/5 p-4 rounded-lg border border-white/5 flex flex-col justify-between">
                                <div>
                                  <span className="text-[11px] font-bold text-[#FFD700] uppercase tracking-wider block mb-2 pb-1 border-b border-white/10">
                                    {sub.title}
                                  </span>
                                  <ul className="space-y-1.5">
                                    {sub.slides.map((slide, slIdx) => (
                                      <li key={slIdx} className="text-xs text-gray-400 flex items-start gap-2">
                                        <span className="text-[#FF0000] font-black shrink-0 mt-0.5">•</span>
                                        <span>{slide}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                            {segment.subsections[0].slides.map((slide, slIdx) => (
                              <li key={slIdx} className="text-sm text-gray-400 flex items-start gap-2">
                                <span className="text-[#FF0000] font-black shrink-0 mt-0.5">•</span>
                                <span>{slide}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. AI NEWS SECTION */}
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

      {/* 7. FINAL CTA SECTION */}
      <section className="py-24 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-red-radial opacity-30"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="oswald text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Register Today!</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
            Don't miss out on this opportunity to identify your growth bottlenecks and bridge the gap to high-value design salaries. Secure your spot now.
          </p>
          <button onClick={scrollToForm} className="px-10 py-5 bg-[#FF0000] hover:bg-[#CC0000] text-white text-lg font-black uppercase tracking-widest rounded-lg transition-colors shadow-[0_0_30px_rgba(255,0,0,0.3)] cursor-pointer">
            Register Now
          </button>
        </div>
      </section>

    </div>
  );
};

export default WebinarPage;
