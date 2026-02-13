import React from "react";
import {
  Linkedin,
  InstagramIcon,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Added Navigation

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Added Navigation styles

const MENTORS = [
  {
    name: "RUPAM BISWAS",
    role: "CREATIVE HEAD",
    bio: "Creative strategist leading visual direction, brand storytelling, and high-impact creative execution across projects.",
    img: "/rupam.jpeg",
    linkedin: "https://www.linkedin.com/in/rupam-biswas-75187952/",
    insta: "#",
  },
  {
    name: "MOHAMMAD SHADAB",
    role: "SENIOR ARTIST - 2D & 3D ANIMATION",
    bio: "Specialist in 2D and 3D animation, guiding students through motion design, character animation, and industry-level production workflows.",
    img: "shadab.jpeg",
    linkedin: "https://www.linkedin.com/in/mohammad-shadab-258b84ba/",
    insta: "#",
  },
  {
    name: "Lalan Kumar",
    role: "ANIMATION LEAD",
    bio: "Leads animation training with a focus on storytelling, technical precision, and studio-ready production skills.",
    img: "/lalan.jpeg",
    linkedin: "https://www.linkedin.com/in/lkshashi/",
    insta: "#",
  },
  {
    name: "ANKIT RAJ",
    role: "DIGITAL STRATEGIST",
    bio: "Specializing in digital growth, brand positioning, and performance-driven marketing strategies across online platforms.",
    img: "/ankit.jpeg",
    linkedin: "https://www.linkedin.com/in/ankitraj18/",
    insta: "#",
  },
  {
    name: "KUNDAN KUMAR",
    role: "BRAND STRATEGIST",
    bio: "Helping brands find clarity, positioning, and strong visual direction through strategic thinking and market insight.",
    img: "/kundan.jpeg",
    linkedin: "https://www.linkedin.com/in/unbinarykundan/",
    insta: "#",
  },
  {
    name: "HARSH BANSAL",
    role: "HEAD – VISUAL MEDIA & SENIOR VIDEO EDITOR",
    bio: "Leads visual media production with expertise in professional video editing, storytelling, and industry-level post-production workflows.",
    img: "/harsh.jpeg",
    linkedin: "https://www.linkedin.com/in/harshdramantram/",
    insta: "#",
  },
  {
    name: "BHAVESH BHATIA",
    role: "SENIOR ARTIST – GRAPHIC DESIGN",
    bio: "Specializing in visual identity, layout design, and brand-focused creative execution across digital and print media.",
    img: "/bhavesh.jpeg",
    linkedin: "https://www.linkedin.com/in/bhavesh-bhatia-8075bb200/",
    insta: "#",
  },
  {
    name: "TANISHTHA KATTA",
    role: "SENIOR ARTIST – GRAPHIC & ANIMATION",
    bio: "Blending graphic design and animation to create visually engaging, story-driven creative work across digital platforms.",
    img: "tanishtha.jpeg",
    linkedin: "https://www.linkedin.com/in/tanishtha-katta-3a8b6b1a5/",
    insta: "#",
  },
  {
    name: "ABDUL RAHMAN",
    role: "SENIOR VIDEO EDITOR",
    bio: "Specializing in cinematic storytelling, seamless editing, and industry-standard post-production techniques.",
    img: "/abdul.jpeg",
    linkedin: "https://www.linkedin.com/in/abdul-rahaman-854113216/",
    insta: "#",
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

        {/* Increased horizontal padding (px-16) to create space for buttons */}
        <div className="relative px-4 md:px-16">
          {/* Custom Navigation Buttons - adjusted 'left' and 'right' values */}
          <button className="prev-btn absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-red-500/20 bg-black/50 text-white hover:bg-red-600 transition-all group shadow-xl">
            <ChevronLeft size={24} />
          </button>
          <button className="next-btn absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-red-500/20 bg-black/50 text-white hover:bg-red-600 transition-all group shadow-xl">
            <ChevronRight size={24} />
          </button>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoHeight={false} // Ensure slides don't jump in height
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            // Standardizing slide heights
            className="mentor-swiper !pb-20 !static"
          >
            {MENTORS.map((m, i) => (
              <SwiperSlide key={i} className="!h-auto">
                {/* h-full ensures the card fills the SwiperSlide height */}
                <div className="gloss-card p-8 md:p-10 rounded-[2.5rem] group relative border border-red-500/10 hover:border-red-500/50 transition-all duration-500 h-full flex flex-col">
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
                  {/* flex-grow pushes the footer icons to the bottom regardless of bio length */}
                  <p className="text-gray-500 text-sm font-medium leading-relaxed mb-10 flex-grow">
                    {m.bio}
                  </p>

                  <div className="flex justify-center gap-6 pt-6 border-t border-white/5 mt-auto">
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin
                        size={18}
                        className="text-gray-600 hover:text-red-500 cursor-pointer transition-colors"
                      />
                    </a>
                    <a href={m.insta}>
                      <InstagramIcon
                        size={18}
                        className="text-gray-600 hover:text-red-500 cursor-pointer transition-colors"
                      />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-12">
          <button className="px-10 py-4 border border-red-500/20 text-[#FFD700] oswald font-bold uppercase tracking-[0.3em] text-[11px] rounded-xl hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all group">
            Meet the Whole Squad{" "}
            <ArrowUpRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        /* Force all slides to be the same height as the tallest slide */
        .mentor-swiper .swiper-wrapper {
          display: flex;
        }
        .mentor-swiper .swiper-pagination-bullet {
          background: #333;
          opacity: 1;
        }
        .mentor-swiper .swiper-pagination-bullet-active {
          background: #ff0000 !important;
        }
        @media (max-width: 768px) {
          .prev-btn,
          .next-btn {
            display: none; /* Hide chevrons on mobile for better touch experience */
          }
        }
      `}</style>
    </section>
  );
};

export default Mentors;
