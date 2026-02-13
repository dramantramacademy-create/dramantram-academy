import React, { useState, useRef } from "react";
import { Star, PlayCircle, PauseCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TESTIMONIALS = [
  {
    name: "Ankit Choudhary",
    text: "Dramantram Academy helped me understand how things actually work in the industry, not just theory. The sessions were practical, engaging, and very relevant.",
  },
  {
    name: "Zainab",
    text: "I liked how the mentors focused on real projects and career guidance. It gave me clarity about my next steps.",
  },
  {
    name: "Soyel Saha",
    text: "This wasn’t a typical classroom experience. The learning felt hands-on and aligned with real industry expectations.",
  },
  {
    name: "Himanshu",
    text: "What stood out for me was the mentorship. The sessions were interactive, realistic, and focused on career growth rather than just certificates.",
  },
  {
    name: "Parv",
    text: "The learning environment was very open and supportive. I could ask questions freely and understand concepts with real examples.",
  },
  {
    name: "Priya Das",
    text: "Dramantram Academy focuses on practical learning that actually prepares you for the industry. The sessions helped me connect theory with real-world applications.",
  },
  {
    name: "Karan Mehta",
    text: "What I liked most was the mentorship approach. The mentors guided us with honest feedback and real insights, which made the experience more meaningful.",
  },
  {
    name: "Ishaan Gupta",
    text: "This program helped me move beyond classroom learning. I gained practical exposure, confidence, and a clearer direction on how to build skills.",
  },
  {
    name: "Meera Reddy",
    text: "The learning environment was open and interactive. Every doubt was addressed with real examples, making the sessions easy to understand.",
  },
  {
    name: "Sahil Khan",
    text: "This was not a typical training program. The sessions were practical, interactive, and aligned with real industry needs.",
  },
];

const VIDEO_SLIDES = [
  {
    id: 1,
    title: "Success Story #01",
    videoUrl: "/Testimony_Ankit.mp4",
    thumbnail: "",
  },
  {
    id: 2,
    title: "Career Impact #02",
    videoUrl: "/Testimony_Himanshu.mp4",
    thumbnail: "",
  },
  {
    id: 3,
    title: "Learning Journey #03",
    videoUrl: "/Testimony_Parv.mp4",
    thumbnail: "",
  },
  {
    id: 4,
    title: "Industry Shift #04",
    videoUrl: "/Testimony_Soyel.mp4",
    thumbnail: "",
  },
  {
    id: 5,
    title: "Studio Experience #05",
    videoUrl: "/Testimony_Zainab.mp4",
    thumbnail: "",
  },
];

const AlumniSpeak: React.FC = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const togglePlay = (id: number) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingId === id) {
      video.pause();
      setPlayingId(null);
    } else {
      if (playingId !== null && videoRefs.current[playingId]) {
        videoRefs.current[playingId]?.pause();
      }
      video.play();
      setPlayingId(id);
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-black reveal">
      <div className="absolute inset-0 bg-red-radial opacity-15"></div>
      <div className="absolute inset-0 bg-glow-bl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="oswald text-5xl md:text-7xl font-black uppercase mb-20 text-center text-white">
          Alumni <span className="text-gradient-red">Speak.</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Testimonials */}
          <div className="flex flex-col gap-6 max-h-[700px] overflow-y-auto pr-4 custom-scrollbar order-2 lg:order-1">
            {TESTIMONIALS.map((item, i) => (
              <div
                key={i}
                className="gloss-card p-6 rounded-2xl flex items-start gap-6 text-left group hover:bg-red-600/5 transition-all duration-500 border-red-900/10 hover:border-red-500/30"
              >
                {/* <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-red-500 overflow-hidden shrink-0">
                  <img
                    src={`https://i.pravatar.cc/100?u=${item.name}`}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div>
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={10} fill="#FFD700" stroke="none" />
                    ))}
                  </div>
                  <h4 className="font-bold text-white mb-1 group-hover:text-red-500 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-400 italic leading-relaxed">
                    "{item.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Compact Vertical Video Carousel */}
          <div className="lg:sticky lg:top-32 order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-[320px] md:max-w-[380px]">
              {" "}
              {/* Controlled width for vertical video */}
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="video-swiper rounded-[2rem] overflow-hidden"
              >
                {VIDEO_SLIDES.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="relative gloss-card p-3 rounded-[2rem] border-red-500/10 group shadow-2xl bg-white/5 backdrop-blur-sm">
                      <div className="aspect-[9/16] relative rounded-2xl overflow-hidden bg-gray-950 flex items-center justify-center">
                        <video
                          ref={(el) => (videoRefs.current[slide.id] = el)}
                          src={slide.videoUrl}
                          poster={slide.thumbnail}
                          className={`w-full h-full object-cover transition-opacity duration-500 ${
                            playingId === slide.id
                              ? "opacity-100"
                              : "opacity-40 grayscale group-hover:opacity-60"
                          }`}
                          playsInline
                          onEnded={() => setPlayingId(null)}
                        />

                        {/* Play/Pause Overlay */}
                        <div
                          onClick={() => togglePlay(slide.id)}
                          className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
                        >
                          <div
                            className={`transition-all duration-500 ${
                              playingId === slide.id
                                ? "opacity-0 hover:opacity-100 scale-90"
                                : "opacity-100 scale-100"
                            }`}
                          >
                            {playingId === slide.id ? (
                              <PauseCircle
                                size={64}
                                className="text-white/80"
                              />
                            ) : (
                              <PlayCircle
                                size={64}
                                className="text-red-500 drop-shadow-[0_0_30px_rgba(255,0,0,0.5)]"
                              />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 text-center px-2 pb-2">
                        <h4 className="oswald text-xl font-black uppercase text-white group-hover:text-red-500 transition-colors">
                          {slide.title}
                        </h4>
                        <p className="text-[12px] text-gray-500 font-medium leading-tight mt-1">
                          Alumni Success Story
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ff0000;
          border-radius: 10px;
        }
        .video-swiper .swiper-button-next,
        .video-swiper .swiper-button-prev {
          color: #ff0000;
          transform: scale(0.4); /* Smaller nav arrows */
        }
        .video-swiper .swiper-pagination-bullet-active {
          background: #ff0000;
        }
      `}</style>
    </section>
  );
};

export default AlumniSpeak;
