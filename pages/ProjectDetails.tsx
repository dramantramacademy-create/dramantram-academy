import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Monitor,
  Cpu,
  Target,
  Rocket,
  LayoutGrid,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FinalCTA from "../components/FinalCTA";

const PROJECTS_DATA: Record<string, any> = {
  "excellence-driving-office": {
    title: "Excellence Driving Office",
    category: "Architectural Visualization",
    heroImage:
      "https://cdna.artstation.com/p/assets/images/images/092/559/216/large/mohammx-shadab-ed-building-01-v02.webp?1759994069",
    description:
      "A professional 3D architectural visualization for the Excellence Driving Office, showcasing a modern exterior with a sleek facade design.",
    challenge:
      "Highlighting detailed textures and professional rendering techniques to bring the commercial building design to life.",
    solution:
      "Utilized advanced lighting setups and high-resolution textures to create a lifelike representation suitable for client presentations.",
    tools: ["Blender", "Cycles", "Adobe Photoshop"],
    results: [
      "100% Client Satisfaction",
      "Enhanced Marketing Material",
      "Studio-Ready Visualization",
    ],
    gallery: [
      "https://cdn.artstation.com/p/video_sources/002/874/833/ed-building-archviz.mp4",
      "https://cdna.artstation.com/p/assets/images/images/092/559/216/large/mohammx-shadab-ed-building-01-v02.webp?1759994069",
      "https://cdnb.artstation.com/p/assets/images/images/092/559/221/large/mohammx-shadab-ed-building-03-v02.webp?1759994078",
      "https://cdna.artstation.com/p/assets/images/images/092/559/234/large/mohammx-shadab-ed-fascade-night-01.webp?1759994094",
      "https://cdna.artstation.com/p/assets/images/images/092/559/236/large/mohammx-shadab-ed-fascade-night-02.webp?1759994103",
    ],
  },
  "crompton-iron-3d": {
    title: "Crompton Iron 3D",
    category: "Product Visualization",
    heroImage:
      "https://cdna.artstation.com/p/assets/images/images/068/608/548/large/mohammx-shadab-cr-001.jpg?1698234111",
    description:
      "An immersive 3D product render for the Crompton Iron, focusing on sleek design and innovative technological details.",
    challenge:
      "Capturing every contour and feature with precision to ensure a lifelike representation of a household appliance.",
    solution:
      "Meticulous 3D modeling and the play of light and shadow to accentuate the sophistication and innovation of the product.",
    tools: ["Blender", "Substance Painter", "Keyshot"],
    results: [
      "High-impact visual content",
      "Versatile usage across e-commerce",
      "Precision-perfect detailing",
    ],
    gallery: [
      "https://cdn.artstation.com/p/video_sources/001/610/717/press-crompton.mp4",
      "https://cdna.artstation.com/p/assets/images/images/068/608/548/large/mohammx-shadab-cr-001.jpg?1698234111",
      "https://cdna.artstation.com/p/assets/images/images/068/608/556/large/mohammx-shadab-cr-001b.jpg?1698234125",
      "https://cdnb.artstation.com/p/assets/images/images/068/608/563/large/mohammx-shadab-cr-002.jpg?1698234130",
      "https://cdnb.artstation.com/p/assets/images/images/068/608/567/large/mohammx-shadab-cr-003.jpg?1698234137",
    ],
  },
  "living-room-interior": {
    title: "Living Room Interior",
    category: "Interior Rendering",
    heroImage:
      "https://cdna.artstation.com/p/assets/images/images/068/491/146/large/mohammx-shadab-r-001.jpg?1697955558",
    description:
      "A sanctuary of style where contemporary design meets timeless elegance, focusing on sophisticated simplicity.",
    challenge:
      "Creating a harmonious space through a balanced color palette and strategic lighting to achieve a dream-like quality.",
    solution:
      "Used soft neutrals and lush green elements to infuse a fresh organic vibe into the minimalist interior architecture.",
    tools: ["Blender", "Adobe Photoshop", "Substance Painter"],
    results: [
      "Sophisticated portfolio asset",
      "Mastery of lighting & shadow",
      "Refined 3D material workflow",
    ],
    gallery: [
      "https://cdnb.artstation.com/p/assets/images/images/068/491/151/large/mohammx-shadab-r-003.jpg?1697955572",
      "https://cdnb.artstation.com/p/assets/images/images/068/491/149/large/mohammx-shadab-r-002.jpg?1697955566",
      "https://cdnb.artstation.com/p/assets/images/images/068/491/155/large/mohammx-shadab-r-004.jpg?1697955579",
    ],
  },
  "jungle-statue": {
    title: "The Jungle Statue",
    category: "3D Animation",
    heroImage:
      "https://cdnb.artstation.com/p/assets/images/images/068/394/991/large/mohammx-shadab-statue-in-a-jungle-scene-01.jpg?1697696926",
    description:
      "A stunning 3D animation bringing a statue to life within a lush jungle, featuring vibrant foliage and dynamic wildlife interaction.",
    challenge:
      "Animating intricate nature elements like rustling leaves and dancing light rays in high detail.",
    solution:
      "Meticulous rendering in Blender followed by post-processing in After Effects for vivid colors and atmospheric effects.",
    tools: ["Blender", "After Effects", "Cinema 4D"],
    results: [
      "Immersive 3D narrative",
      "Breathtaking visual spectacle",
      "Seamless tech-art integration",
    ],
    gallery: [
      "https://cdn.artstation.com/p/video_sources/001/600/738/statue-in-a-jungle-scene-video-render.mp4",
      "https://cdnb.artstation.com/p/assets/images/images/068/394/991/large/mohammx-shadab-statue-in-a-jungle-scene-01.jpg?1697696926",
    ],
  },
  "enchanted-jungle": {
    title: "Enchanted Jungle",
    category: "Environment Rendering",
    heroImage:
      "https://cdna.artstation.com/p/assets/images/images/068/394/674/large/mohammx-shadab-landscape-02.jpg?1697696027",
    description:
      "A breathtaking jungle landscape where reality meets imagination, capturing the essence of vibrant greenery.",
    challenge:
      "Creating an expansive realistic environment with intricate textures that remain high-performance for rendering.",
    solution:
      "Leveraged lifelike atmosphere and color grading to create an experience that invites exploration from the screen.",
    tools: ["Blender", "Gaea", "Unreal Engine"],
    results: [
      "Lifelike nature textures",
      "Frozen-in-time realism",
      "Expansive environment mastery",
    ],
    gallery: [
      "https://cdna.artstation.com/p/assets/images/images/068/394/674/large/mohammx-shadab-landscape-02.jpg?1697696027",
    ],
  },
  "modern-office-interior": {
    title: "Modern Office Interior",
    category: "Interior Design",
    heroImage:
      "https://cdna.artstation.com/p/assets/images/images/068/394/342/large/mohammx-shadab-r-0006.jpg?1697695107",
    description:
      "A 3D interior design for a corporate office space, blending professional aesthetics with functional layouts.",
    challenge:
      "Ensuring the professional office environment feels both spacious and technically accurate.",
    solution:
      "Implemented modern architectural concepts and façade studies into the internal layout for a cohesive design.",
    tools: ["Blender", "Archicad", "Photoshop"],
    results: [
      "Functional corporate layout",
      "Studio-ready professional design",
      "Realistic lighting studies",
    ],
    gallery: [
      "https://cdna.artstation.com/p/assets/images/images/068/394/342/large/mohammx-shadab-r-0006.jpg?1697695107",
      "https://cdnb.artstation.com/p/assets/images/images/068/394/313/large/mohammx-shadab-layout-02-3.jpg?1697695050",
      "https://cdnb.artstation.com/p/assets/images/images/068/394/301/large/mohammx-shadab-layout-02-1.jpg?1697695026",
      "https://cdna.artstation.com/p/assets/images/images/068/394/336/large/mohammx-shadab-r-0004.jpg?1697695089",
      "https://cdnb.artstation.com/p/assets/images/images/068/394/347/large/mohammx-shadab-r-0007.jpg?1697695115",
      "https://cdnb.artstation.com/p/assets/images/images/068/394/339/large/mohammx-shadab-r-0005.jpg?1697695099",
      "https://cdnb.artstation.com/p/assets/images/images/068/394/355/large/mohammx-shadab-r-0011.jpg?1697695145",
      "https://cdnb.artstation.com/p/assets/images/images/068/394/377/large/mohammx-shadab-r-0014.jpg?1697695173",
    ],
  },
  "aventador-forest-run": {
    title: "Aventador Forest Run",
    category: "Automotive CGI",
    heroImage:
      "https://cdna.artstation.com/p/assets/images/images/068/354/972/large/mohammx-shadab-back-shot-single.jpg?1697607199",
    description:
      "Cinematic 3D render images of the Lamborghini Aventador driving through a dense, realistic forest road.",
    challenge:
      "Achieving high-quality automotive reflections and integrating a complex vehicle model into a natural environment.",
    solution:
      "Used cinematic camera angles and realistic light interaction between the forest canopy and the car's bodywork.",
    tools: ["Blender", "Octane Render", "Photoshop"],
    results: [
      "High-impact automotive art",
      "Cinematic texture integration",
      "Advanced lighting mastery",
    ],
    gallery: [
      "https://cdnb.artstation.com/p/assets/images/images/068/394/377/large/mohammx-shadab-r-0014.jpg?1697695173",
      "https://cdnb.artstation.com/p/assets/images/images/068/354/993/large/mohammx-shadab-lamb-0682.jpg?1697607227",
      "https://cdna.artstation.com/p/assets/images/images/068/355/002/large/mohammx-shadab-lamb-0775.jpg?1697607252",
      "https://cdna.artstation.com/p/assets/images/images/068/355/014/large/mohammx-shadab-lamb-0646.jpg?1697607295",
      "https://cdna.artstation.com/p/assets/images/images/068/355/024/large/mohammx-shadab-lamb-move-0062.jpg?1697607363",
    ],
  },
  "mountain-bike-3d": {
    title: "Mountain Bike 3D",
    category: "Product Animation",
    heroImage:
      "https://cdna.artstation.com/p/assets/images/images/068/370/236/large/mohammx-shadab-bicycle-01.jpg?1697639405",
    description:
      "A technical 3D product animation of a mountain bike, focusing on mechanical precision and material realism.",
    challenge:
      "Modeling complex mechanical parts like gears and chains and making them look studio-ready.",
    solution:
      "Leveraged Blender for high-fidelity modeling and After Effects for advanced post-production storytelling.",
    tools: ["Blender", "Substance Painter", "After Effects"],
    results: [
      "Professional product workflow",
      "Realistic mechanical physics",
      "Studio-grade post-production",
    ],
    gallery: [
      "https://cdn.artstation.com/p/video_sources/001/599/569/bicycles-render-v002.mp4",
      "https://cdnb.artstation.com/p/assets/images/images/068/370/261/large/mohammx-shadab-bicycle-05.jpg?1697639437",
      "https://cdna.artstation.com/p/assets/images/images/068/370/256/large/mohammx-shadab-bicycle-04.jpg?1697639430",
      "https://cdna.artstation.com/p/assets/images/images/068/370/242/large/mohammx-shadab-bicycle-02.jpg?1697639412",
      "https://cdna.artstation.com/p/assets/images/images/068/370/248/large/mohammx-shadab-bicycle-03.jpg?1697639420",
    ],
  },
  "cinematic-living-space": {
    title: "Cinematic Living Space",
    category: "ArchViz Animation",
    heroImage:
      "https://cdnb.artstation.com/p/assets/images/images/068/371/451/large/mohammx-shadab-room-arcviz-02.jpg?1697641827",
    description:
      "A 3D render for architectural visualization of a living room, focusing on color correction and cinematic mood.",
    challenge:
      "Transitioning a raw render into a color-corrected masterpiece while maintaining photo-realism.",
    solution:
      "Entirely modeled in Blender with heavy color correction and atmospheric editing in After Effects.",
    tools: ["Blender", "Cycles", "After Effects"],
    results: [
      "Mastery of ArchViz pipelines",
      "Atmospheric visual narrative",
      "High-end cinematic quality",
    ],
    gallery: [
      "https://cdn.artstation.com/p/video_sources/001/599/648/interior-room-architecture.mp4",
      "https://cdnb.artstation.com/p/assets/images/images/068/371/457/large/mohammx-shadab-room-arcviz-03.jpg?1697641833",
      "https://cdnb.artstation.com/p/assets/images/images/068/371/451/large/mohammx-shadab-room-arcviz-02.jpg?1697641827",
      "https://cdnb.artstation.com/p/assets/images/images/068/371/511/large/mohammx-shadab-room-arcviz-01.jpg?1697641946",
    ],
  },
};

const ProjectDetailsPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? PROJECTS_DATA[projectId] : null;

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="bg-black min-h-screen pt-16 md:pt-20">
      {/* Hero Section - Responsive height */}
      <div className="relative h-[50vh] md:h-[75vh] overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="absolute bottom-6 md:bottom-12 left-0 right-0 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-4 md:mb-6 hover:text-white transition-colors"
            >
              <ArrowLeft size={12} /> Back to Showcase
            </Link>
            <div className="text-[9px] md:text-[11px] font-black text-[#FFD700] uppercase tracking-[0.3em] md:tracking-[0.5em] mb-2 md:mb-4">
              {project.category}
            </div>
            {/* Responsive Heading: tight leading for mobile */}
            <h1 className="oswald text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-white animate-fade-in-up leading-[1.1]">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section - Grid collapses to 1 column on mobile */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          {/* Main Content - Column 1 on mobile */}
          <div className="lg:col-span-8 space-y-12 md:space-y-24">
            {/* Gallery Section */}
            <section className="reveal">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-10 gap-2">
                <h2 className="oswald text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
                  <LayoutGrid size={20} className="text-red-600" /> Studio
                  Showcase
                </h2>
                <span className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  Swipe to explore project views
                </span>
              </div>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 1.1 },
                  1024: { slidesPerView: 1.5 },
                }}
                className="project-gallery-swiper rounded-2xl md:rounded-[2rem] overflow-visible"
              >
                {project.gallery?.map((item: string, idx: number) => {
                  const isVideo = item.endsWith(".mp4");
                  return (
                    <SwiperSlide key={idx}>
                      <div className="relative group overflow-hidden rounded-2xl md:rounded-[2rem] border border-white/5 gloss-card aspect-video bg-zinc-900">
                        {isVideo ? (
                          <video
                            src={item}
                            className="w-full h-full object-cover"
                            controls
                            playsInline
                            muted
                            loop
                            autoPlay
                          />
                        ) : (
                          <img
                            src={item}
                            alt={`${project.title} view ${idx + 1}`}
                            className="w-full h-full object-cover transition-all duration-1000"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 md:p-8 pointer-events-none">
                          <p className="oswald text-white text-base md:text-lg font-bold uppercase tracking-wider">
                            {isVideo
                              ? "Cinematic Walkthrough"
                              : `Angle ${idx + 1}`}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </section>

            {/* Mission Section */}
            <section className="reveal">
              <h2 className="oswald text-2xl md:text-3xl font-black uppercase mb-4 md:mb-6 flex items-center gap-3">
                <Target size={20} className="text-red-600" /> The Mission
              </h2>
              <p className="text-gray-400 text-base md:text-xl leading-relaxed font-medium">
                {project.description}
              </p>
            </section>

            {/* Challenge & Solution Grid - 1 column on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <div className="gloss-card p-6 md:p-10 rounded-2xl md:rounded-3xl border-white/5 reveal">
                <h3 className="oswald text-lg md:text-xl font-bold uppercase mb-3 md:mb-4 text-[#FFD700]">
                  The Challenge
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div className="gloss-card p-6 md:p-10 rounded-2xl md:rounded-3xl border-white/5 reveal">
                <h3 className="oswald text-lg md:text-xl font-bold uppercase mb-3 md:mb-4 text-red-500">
                  The Solution
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Results Grid - Responsive 1 to 3 columns */}
            <section className="reveal">
              <h2 className="oswald text-2xl md:text-3xl font-black uppercase mb-6 md:mb-10 flex items-center gap-3">
                <Rocket size={20} className="text-red-600" /> Impact & Results
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {project.results.map((res: string, idx: number) => (
                  <div
                    key={idx}
                    className="p-4 md:p-6 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 group hover:border-red-500/30 transition-all"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-red-600 mb-3 md:mb-4"
                    />
                    <p className="text-white font-bold text-xs md:text-sm leading-tight">
                      {res}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - Pushed to bottom on mobile */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="sticky top-24 md:top-32 space-y-6 md:space-y-12">
              <div className="gloss-card p-6 md:p-10 rounded-2xl md:rounded-3xl border-red-500/10">
                <h3 className="oswald text-lg md:text-xl font-black uppercase mb-6 md:mb-8 flex items-center gap-2">
                  <Cpu size={18} className="text-red-600" /> Studio Stack
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {project.tools.map((tool: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between group"
                    >
                      <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-[11px] group-hover:text-white transition-colors">
                        {tool}
                      </span>
                      <div className="w-4 md:w-8 h-[1px] bg-red-600/30 group-hover:w-full transition-all"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Programs CTA - Compact on mobile */}
              <div className="p-6 md:p-10 rounded-2xl md:rounded-3xl bg-red-600/5 border border-red-600/10">
                <Monitor size={32} className="text-red-600 mb-4 md:mb-6" />
                <h3 className="oswald text-lg md:text-xl font-black uppercase mb-3 md:mb-4">
                  Want a project like this?
                </h3>
                <p className="text-gray-500 text-xs md:text-sm mb-6 md:mb-8">
                  Learn the exact workflows used here in our intensive
                  bootcamps.
                </p>
                <Link
                  to="/programs"
                  className="block w-full py-3 md:py-4 bg-red-600 text-white text-center font-black uppercase tracking-widest text-[9px] md:text-[10px] rounded-lg md:rounded-xl hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all"
                >
                  Explore Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FinalCTA />

      {/* Responsive Swiper Customization Styles */}
      <style jsx global>{`
        .project-gallery-swiper .swiper-button-next,
        .project-gallery-swiper .swiper-button-prev {
          transform: scale(0.4) !important; /* Smaller on mobile */
        }
        @media (min-width: 768px) {
          .project-gallery-swiper .swiper-button-next,
          .project-gallery-swiper .swiper-button-prev {
            transform: scale(0.6) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetailsPage;
