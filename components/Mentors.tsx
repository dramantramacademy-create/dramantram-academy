import React from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  InstagramIcon,
  ArrowUpRight,
} from "lucide-react";

const MENTORS = [
  // {
  //   name: "RUPAM BISWAS",
  //   role: "CREATIVE HEAD",
  //   bio: "Creative strategist leading visual direction, brand storytelling, and high-impact creative execution across projects.",
  //   img: "/rupam.jpeg",
  //   linkedin: "https://www.linkedin.com/in/rupam-biswas-75187952/",
  //   insta: "https://www.instagram.com/biswashinahihota/?hl=en",
  // },
  {
    name: "MOHAMMAD SHADAB",
    role: "SENIOR MENTOR - 2D & 3D ANIMATION",
    bio: "Specialist in 2D and 3D animation, guiding students through motion design, character animation, and industry-level production workflows.",
    img: "shadab.jpeg",
    linkedin: "https://www.linkedin.com/in/mohammad-shadab-258b84ba/",
    insta: "https://www.instagram.com/pixa.move/?hl=en",
  },
  // {
  //   name: "Lalan Kumar",
  //   role: "ANIMATION LEAD",
  //   bio: "Leads animation training with a focus on storytelling, technical precision, and studio-ready production skills.",
  //   img: "/lalan.jpeg",
  //   linkedin: "https://www.linkedin.com/in/lkshashi/",
  //   insta: "https://www.instagram.com/lkshashi.dramantram/?hl=en",
  // },
  // {
  //   name: "ANKIT RAJ",
  //   role: "DIGITAL STRATEGIST",
  //   bio: "Specializing in digital growth, brand positioning, and performance-driven marketing strategies across online platforms.",
  //   img: "/ankit.jpeg",
  //   linkedin: "https://www.linkedin.com/in/ankitraj18/",
  //   // No insta property here
  // },
  // {
  //   name: "KUNDAN KUMAR",
  //   role: "BRAND STRATEGIST",
  //   bio: "Helping brands find clarity, positioning, and strong visual direction through strategic thinking and market insight.",
  //   img: "/kundan.jpeg",
  //   linkedin: "https://www.linkedin.com/in/unbinarykundan/",
  //   insta: "https://www.instagram.com/unbinarykundan/?hl=en",
  // },
  // {
  //   name: "HARSH BANSAL",
  //   role: "HEAD – VISUAL MEDIA & SENIOR VIDEO EDITOR",
  //   bio: "Leads visual media production with expertise in professional video editing, storytelling, and industry-level post-production workflows.",
  //   img: "/harsh.jpeg",
  //   linkedin: "https://www.linkedin.com/in/harshdramantram/",
  //   insta: "https://www.instagram.com/harry.hn2/?hl=en",
  // },
  {
    name: "BHAVESH BHATIA",
    role: "SENIOR MENTOR – VISUAL DESIGN",
    bio: "Specializing in visual identity, layout design, and brand-focused creative execution across digital and print media.",
    img: "/bhavesh.jpeg",
    linkedin: "https://www.linkedin.com/in/bhavesh-bhatia-8075bb200/",
    insta: "https://www.instagram.com/bhaveshbhatia99/?hl=en",
  },
  {
    name: "TANISHTHA KATTA",
    role: "SENIOR MENTOR – ANIMATION",
    bio: "Blending graphic design and animation to create visually engaging, story-driven creative work across digital platforms.",
    img: "tanishtha.jpeg",
    linkedin: "https://www.linkedin.com/in/tanishtha-katta-3a8b6b1a5/",
    insta: "https://www.instagram.com/tanishthakatta/?hl=en",
  },
  {
    name: "ABDUL RAHMAN",
    role: "SENIOR MENTOR - VIDEO EDITOR",
    bio: "Specializing in cinematic storytelling, seamless editing, and industry-standard post-production techniques.",
    img: "/abdul.jpeg",
    linkedin: "https://www.linkedin.com/in/abdul-rahaman-854113216/",
    insta: "https://www.instagram.com/abdulrahaman7477/?hl=en",
  },
  {
    name: "KIRTI SINGH",
    role: "SENIOR MENTOR - AI MARKETING & AUTOMATION",
    bio: "Leading the charge in AI-driven marketing, Kirti helps students master automation, prompt engineering, and intelligent campaign strategies to scale growth in the AI era.",
    img: "/kirti.jpeg",
    linkedin: "https://www.linkedin.com/in/kirti-singh-53b47518a/ ",
    insta: "https://www.instagram.com/kirtisingh6452/",
  },
  {
    name: "RITIKA YADAV",
    role: "SENIOR MENTOR - AI MARKETING & AUTOMATION",
    bio: "Leading the charge in AI-driven marketing, Ritika helps students master automation, prompt engineering, and intelligent campaign strategies to scale growth in the AI era.",
    img: "/ritika.jpeg",
    linkedin: "https://www.linkedin.com/in/ritika-yadav-643779270/",
    insta: "https://www.instagram.com/ritikayadav0028/",
  },
];

const Mentors: React.FC = () => {
  return (
    <section className="py-32 bg-black relative border-t border-red-900/10 reveal overflow-hidden">
      <div className="absolute inset-0 bg-red-radial opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="mb-24">
          <div className="text-[11px] font-black text-[#FF0000] uppercase tracking-[0.5em] mb-6">
            FACULTY & EXPERTS
          </div>
          <h2 className="oswald text-5xl md:text-8xl font-black uppercase mb-8 leading-[0.9] tracking-tighter text-white">
            Learn from <br />
            <span className="text-gradient-red">Working Pros.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            Our mentors don't just teach—they do. You'll be guided by creators
            who are active in the commercial industry every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {MENTORS.map((m, i) => (
            <div
              key={i}
              className="gloss-card p-8 md:p-10 rounded-[2.5rem] group relative border border-red-500/10 hover:border-red-500/50 transition-all duration-500 h-full flex flex-col"
            >
              <div className="relative mb-10 mx-auto w-40 h-40">
                <div className="absolute -inset-4 rounded-full border border-red-500/10 group-hover:border-red-500/40 group-hover:scale-105 transition-all duration-700"></div>
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full rounded-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 shadow-2xl"
                />
              </div>

              <h3 className="oswald text-2xl font-black uppercase mb-2 group-hover:text-[#FF0000] transition-colors text-white">
                {m.name}
              </h3>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFD700] mb-6 min-h-[30px]">
                {m.role}
              </div>
              <p className="text-gray-500 text-sm font-medium leading-relaxed mb-10 flex-grow">
                {m.bio}
              </p>

              <div className="flex justify-center gap-6 pt-6 border-t border-white/5 mt-auto">
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin
                      size={18}
                      className="text-gray-600 hover:text-red-500 cursor-pointer transition-colors"
                    />
                  </a>
                )}
                {/* Conditionally rendering the Instagram Icon */}
                {m.insta && (
                  <a
                    href={m.insta}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <InstagramIcon
                      size={18}
                      className="text-gray-600 hover:text-red-500 cursor-pointer transition-colors"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Become a Mentor CTA Section */}
        <div className="mt-24 border-t border-red-500/10 pt-16 text-center max-w-3xl mx-auto reveal">
          <h3 className="oswald text-4xl font-black uppercase mb-4 tracking-tight text-white">
            Want to share your expertise?
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            We are always looking for passionate creators, working professionals, and industry veterans to guide the next generation of designers, animators, and digital marketers.
          </p>
          <Link
            to="/become-mentor"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#FF0000] to-[#E60000] hover:from-[#E60000] hover:to-[#B30000] text-white font-black oswald uppercase tracking-[0.2em] text-xs rounded-xl shadow-lg hover:shadow-red-500/20 hover:scale-[1.02] transition-all duration-300"
          >
            Become a Mentor <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
