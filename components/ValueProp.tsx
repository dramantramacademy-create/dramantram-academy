import React from "react";

const ValueProp: React.FC = () => {
  return (
    <section className="px-4 md:px-6 relative overflow-hidden reveal">
      <div className="absolute inset-0 bg-red-radial opacity-50"></div>
      <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-glow-tr-yellow opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="text-center lg:text-left">
            <div className="oswald text-[#FFD700] uppercase tracking-[0.4em] text-xs mb-4 font-bold">
              The Reality
            </div>
            <h2 className="oswald text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-8 leading-tight">
              What's missing & <br />{" "}
              <span className="text-gradient-red">How we fix it</span>
            </h2>
            <div className="space-y-6 max-w-lg mx-auto lg:mx-0">
              <div className="p-6 md:p-8 gloss-card rounded-2xl border-l-4 border-l-[#FFD700] text-left hover:border-l-[#FF0000] transition-all duration-500">
                <h4 className="font-bold text-lg mb-2 text-white uppercase tracking-widest">
                  The <span className="text-[#FFD700]">Value</span> You Get:
                </h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                  Our <span className="text-white">Micro MBA-like</span> crash
                  course is built to help you bridge the gap so you can land
                  better gigs, level up, and get paid for your worth.
                </p>
              </div>
              <p className="text-gray-500 italic text-sm md:text-base">
                "Helping creators transform from raw talent into{" "}
                <span className="text-[#FFD700]">award-winning</span> industry
                professionals."
              </p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end py-1 lg:py-0 group overflow-hidden">
            {/* Changed aspect-square to aspect-video to reduce vertical footprint */}
            <div className="relative w-full max-w-md aspect-video bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/India_map_blank.svg/800px-India_map_blank.svg.png')] bg-contain bg-no-repeat bg-center opacity-20 grayscale invert group-hover:opacity-40 transition-opacity duration-700"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-auto lg:right-0 lg:translate-x-0 text-center lg:text-right">
              {/* Reduced text size slightly for better fit in the shorter container */}
              <div className="text-6xl md:text-8xl font-black oswald leading-none text-[#FF0000] group-hover:scale-105 transition-transform duration-700">
                60%
              </div>
              <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase max-w-[200px] ml-auto">
                of Indian creatives lacking professional training. <br />
                <span className="text-[9px] text-[#FFD700]">— NSDC Report</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
