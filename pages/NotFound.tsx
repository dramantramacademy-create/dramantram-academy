import React from "react";
import { Link } from "react-router-dom";
import { Home, MoveLeft, Scissors } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden px-6 text-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-red-radial opacity-40"></div>
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      {/* Glitchy 404 Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <span className="oswald text-[20rem] md:text-[30rem] font-black leading-none">
          404
        </span>
      </div>

      <div className="relative z-10 animate-fade-in-up">
        <div className="w-20 h-20 bg-red-600/10 border border-red-500/30 rounded-2xl flex items-center justify-center text-red-500 mx-auto mb-8 shadow-[0_0_30px_rgba(255,0,0,0.2)]">
          <Scissors size={40} className="animate-pulse" />
        </div>

        <h1 className="oswald text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4">
          Scene <span className="text-gradient-red">Missing.</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl font-medium max-w-lg mx-auto mb-12 leading-relaxed">
          The page you're looking for was cut in post-production. It either
          doesn't exist or has been moved to a different timeline.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-10 py-4 bg-[#FF0000] text-white font-black uppercase tracking-widest text-xs rounded-xl hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all flex items-center justify-center gap-3 group"
          >
            <Home size={18} /> Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:border-red-500 hover:text-red-500 transition-all flex items-center justify-center gap-3 group"
          >
            <MoveLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />{" "}
            Go Back
          </button>
        </div>
      </div>

      {/* Industrial Footer Detail */}
      <div className="absolute bottom-12 left-0 right-0">
        <div className="text-[10px] font-black text-gray-700 uppercase tracking-[0.5em]">
          Error Code: 404_PAGE_NOT_FOUND // Dramantram_Academy
        </div>
      </div>
    </div>
  );
};

export default NotFound;
