import React, { useState } from "react";
import { getCareerAdvice } from "../services/geminiService";
import { Sparkles, Loader2 } from "lucide-react";

const GeminiAdvisor: React.FC = () => {
  const [interest, setInterest] = useState("");
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!interest.trim()) return;

    setLoading(true);
    const result = await getCareerAdvice(interest);
    setAdvice(result || "");
    setLoading(false);
  };

  return (
    <section className="px-4 md:px-6 bg-black relative reveal">
      <div className="absolute inset-0 bg-red-radial opacity-30"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="gloss-card p-6 md:p-12 rounded-[2rem] relative overflow-hidden group hover:border-[#FFD700]/30 transition-all duration-700">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-50"></div>

          <div className="flex flex-col md:flex-row items-center gap-6 mb-10 text-center md:text-left">
            <div className="p-4 bg-[#FFD700]/10 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
              <Sparkles className="text-[#FFD700]" size={32} />
            </div>
            <div>
              <h3 className="oswald text-2xl md:text-3xl font-bold uppercase mb-1">
                AI Career Oracle
              </h3>
              <p className="text-gray-500 text-xs md:text-sm font-medium tracking-wide">
                Discover creative career paths based on your interests.
              </p>
            </div>
          </div>

          <form onSubmit={handleConsult} className="space-y-6">
            <div className="relative">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#FFD700] mb-3">
                Not sure what to do next? Just tell us what you enjoy, we’ll
                guide you from there.
              </label>
              <input
                type="text"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                placeholder="e.g. Visual storytelling, cinematic editing, brand strategy..."
                className="w-full bg-white/5 border border-white/10 p-5 rounded-xl text-white focus:outline-none focus:border-[#FFD700]/50 focus:bg-white/[0.08] transition-all text-sm"
              />
            </div>

            <button
              disabled={loading}
              className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-xs md:text-sm rounded-xl hover:bg-[#FFD700] hover:scale-[1.02] transition-all disabled:opacity-50 flex items-center justify-center gap-3 active:scale-95"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                "Get Personalized Advice"
              )}
            </button>
          </form>

          {advice && (
            <div className="mt-10 p-6 md:p-8 bg-red-600/5 border-l-2 border-red-500 rounded-r-xl animate-fade-in-up">
              <p className="text-gray-300 italic leading-relaxed text-sm md:text-base font-medium">
                {advice}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeminiAdvisor;
