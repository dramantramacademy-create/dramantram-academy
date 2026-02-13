import React from "react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const WORK = [
  {
    id: 1,
    slug: "excellence-driving-office",
    title: "Excellence Driving Office",
    category: "Architectural Visualization",
    img: "https://cdna.artstation.com/p/assets/images/images/092/559/216/large/mohammx-shadab-ed-building-01-v02.webp?1759994069",
  },
  {
    id: 2,
    slug: "crompton-iron-3d",
    title: "Crompton Iron 3D",
    category: "Product Visualization",
    img: "https://cdna.artstation.com/p/assets/images/images/068/608/548/large/mohammx-shadab-cr-001.jpg?1698234111",
  },
  {
    id: 3,
    slug: "living-room-interior",
    title: "Living Room Interior",
    category: "Interior Rendering",
    img: "https://cdna.artstation.com/p/assets/images/images/068/491/146/large/mohammx-shadab-r-001.jpg?1697955558",
  },
  {
    id: 4,
    slug: "jungle-statue",
    title: "The Jungle Statue",
    category: "3D Animation",
    img: "https://cdnb.artstation.com/p/assets/images/images/068/394/991/large/mohammx-shadab-statue-in-a-jungle-scene-01.jpg?1697696926",
  },
  {
    id: 5,
    slug: "enchanted-jungle",
    title: "Enchanted Jungle",
    category: "Environment Rendering",
    img: "https://cdna.artstation.com/p/assets/images/images/068/394/674/large/mohammx-shadab-landscape-02.jpg?1697696027",
  },
  {
    id: 6,
    slug: "modern-office-interior",
    title: "Modern Office Interior",
    category: "Interior Design",
    img: "https://cdna.artstation.com/p/assets/images/images/068/394/342/large/mohammx-shadab-r-0006.jpg?1697695107",
  },
  {
    id: 2,
    slug: "aventador-forest-run",
    title: "Aventador Forest Run",
    category: "Automotive CGI",
    img: "https://cdna.artstation.com/p/assets/images/images/068/354/972/large/mohammx-shadab-back-shot-single.jpg?1697607199",
  },
  {
    id: 8,
    slug: "mountain-bike-3d",
    title: "Mountain Bike 3D",
    category: "Product Animation",
    img: "https://cdna.artstation.com/p/assets/images/images/068/370/236/large/mohammx-shadab-bicycle-01.jpg?1697639405",
  },
  {
    id: 9,
    slug: "cinematic-living-space",
    title: "Cinematic Living Space",
    category: "ArchViz Animation",
    img: "https://cdnb.artstation.com/p/assets/images/images/068/371/451/large/mohammx-shadab-room-arcviz-02.jpg?1697641827",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="py-2 px-4 md:px-6 bg-black relative overflow-hidden reveal"
    >
      <div className="absolute inset-0 bg-red-radial opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* UPDATED: Centered alignment for headings and paragraph */}
        <div className="flex flex-col items-center text-center mb-20 gap-6">
          <div className="w-full">
            <h2 className="oswald text-[#FF0000] uppercase tracking-[0.4em] text-xs mb-4 font-bold">
              Student Portfolio
            </h2>
            <h3 className="oswald text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
              Work by our <br />
              <span className="text-gradient-red">Students.</span>
            </h3>
          </div>
          <p className="max-w-2xl text-gray-400 text-sm md:text-base italic font-medium leading-relaxed">
            "Directly learning from industry-level artists like Mohammad Shadab,
            transforming raw skill into studio-ready portfolios."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {WORK.map((item) => (
            <Link
              key={item.id}
              to={`/portfolio/${item.slug}`}
              className="group relative overflow-hidden aspect-video rounded-3xl gloss-card border-white/5 hover:border-red-500/50 transition-all duration-700"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:from-red-900/90 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-[#FFD700] text-xs font-black tracking-[0.2em] uppercase mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  {item.category}
                </span>
                <h4 className="oswald text-white text-3xl font-black uppercase leading-none mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.title}
                </h4>
                <div className="w-0 h-1 bg-red-600 mb-6 group-hover:w-full transition-all duration-700 delay-100"></div>
                <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                  Explore Project
                  <ExternalLink size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
