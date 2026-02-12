import React from "react";
import { ExternalLink } from "lucide-react";

const WORK = [
  {
    id: 1,
    title: "Cinematic Ad",
    category: "Production",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "Brand Identity",
    category: "Graphic Design",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "Music Video",
    category: "Direction",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    title: "UI Concept",
    category: "Design",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 5,
    title: "Short Film",
    category: "Cinema",
    img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 6,
    title: "Social Campaign",
    category: "Marketing",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="px-4 md:px-6 bg-red-radial reveal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="oswald text-[#FF0000] uppercase tracking-[0.4em] text-xs mb-4 font-bold">
              Showcase
            </h2>
            <h3 className="oswald text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Work by our <br />
              <span className="text-gradient-red">Students.</span>
            </h3>
          </div>
          <p className="max-w-md text-gray-500 text-sm md:text-base italic font-medium text-center md:text-right">
            "We don't just teach. We build the industry standard through every
            frame we render."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORK.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden aspect-video cursor-pointer rounded-2xl gloss-card border-none hover:shadow-[0_0_40px_rgba(255,0,0,0.3)] transition-all duration-500"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF0000]/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-[#FFD700] text-xs font-black tracking-widest uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.category}
                </span>
                <h4 className="oswald text-white text-3xl font-black uppercase leading-none mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.title}
                </h4>
                <div className="w-12 h-1 bg-white mb-6 group-hover:w-full transition-all duration-700"></div>
                <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all delay-200">
                  Explore Project <ExternalLink size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
