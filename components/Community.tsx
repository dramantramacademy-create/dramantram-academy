import React from "react";
import { MessageSquare } from "lucide-react";

const Community: React.FC = () => {
  return (
    <section className="py-24 bg-black relative reveal">
      <div className="absolute inset-0 bg-glow-tr opacity-25"></div>
      <div className="absolute inset-0 bg-red-radial opacity-15"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="oswald text-5xl font-black uppercase mb-8 leading-tight">
          A Community For The <span className="text-[#9333ea]">Next-Gen</span>{" "}
          <br /> Professionals of India
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16 font-medium">
          We've multiple social channels where you can join and network with
          other like-minded professionals and grow together as a community.
        </p>

        <div className="relative h-[450px] mb-20 overflow-hidden flex justify-center items-end gap-2 md:gap-4">
          <div className="folder-card w-1/4 h-[80%] bg-[#FFD700] p-6 text-black flex flex-col justify-end">
            {/* <h4 className="oswald text-xl font-bold uppercase">Juned Ali</h4> */}
            {/* <div className="text-[10px] font-black uppercase tracking-tighter opacity-70">
              Founder
            </div> */}
          </div>
          <div className="folder-card w-1/4 h-[90%] bg-[#00FF85] p-6 text-black flex flex-col justify-end">
            {/* <h4 className="oswald text-xl font-bold uppercase">Mohd Qaiser</h4> */}
            {/* <div className="text-[10px] font-black uppercase tracking-tighter opacity-70">
              Co-Founder
            </div> */}
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <div className="gloss-card p-10 rounded-3xl border-white/20 text-center shadow-2xl">
              <h3 className="oswald text-2xl font-bold uppercase mb-4">
                Join the Growing <br /> Community
              </h3>
              <a
                href="https://chat.whatsapp.com/GT8IRbAU0H3GXw7syc9w6n"
                className="px-8 py-3 bg-[#00FF85] text-black font-bold rounded-lg flex items-center gap-2 hover:scale-105 transition-all"
              >
                <MessageSquare size={18} /> Become a Part Today!
              </a>
            </div>
          </div>

          <div className="folder-card w-1/4 h-[95%] bg-[#ff5e5e] p-6 text-black flex flex-col justify-end">
            {/* <h4 className="oswald text-xl font-bold uppercase">
              Eshika Duggal
            </h4> */}
            {/* <div className="text-[10px] font-black uppercase tracking-tighter opacity-70">
              SDR (Entry-Level)
            </div> */}
          </div>
          <div className="folder-card w-1/4 h-[85%] bg-[#9333ea] p-6 text-white flex flex-col justify-end">
            {/* <h4 className="oswald text-xl font-bold uppercase">Dr. Sonal</h4> */}
            {/* <div className="text-[10px] font-black uppercase tracking-tighter opacity-70">
              Founder
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
