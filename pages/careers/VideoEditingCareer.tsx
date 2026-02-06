import React from 'react';
import { MonitorPlay, Play, Youtube, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FinalCTA from '../../components/FinalCTA';

const VideoEditingCareer: React.FC = () => {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-red-radial opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/courses" className="inline-flex items-center gap-2 text-gray-500 font-bold uppercase tracking-widest text-xs mb-10 hover:text-white transition-colors">
            Back to Programs
          </Link>
          <h1 className="oswald text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 animate-fade-in-up">
            Video Editing <br /><span className="text-white">Professional Future.</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-xl font-medium leading-relaxed animate-fade-in-up animation-delay-200">
            Editors are the final storytellers. In an era dominated by video content, the ability to cut and pace a narrative is a superpower. We train you for high-end cinematic standards.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-32 reveal">
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <div className="gloss-card p-10 rounded-3xl border-red-500/10">
             <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 mb-8">
               <Play size={32} />
             </div>
             <h3 className="oswald text-2xl font-bold uppercase mb-4">Film & OTT</h3>
             <ul className="space-y-4 text-gray-400 font-medium text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-red-500" size={16} /> Short Film Editor</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-red-500" size={16} /> Web-Series Assembly</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-red-500" size={16} /> Narrative Storyteller</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-red-500" size={16} /> Color Grading Artist</li>
             </ul>
          </div>
          <div className="gloss-card p-10 rounded-3xl border-red-500/10">
             <div className="w-14 h-14 bg-[#FFD700]/10 rounded-2xl flex items-center justify-center text-[#FFD700] mb-8">
               <Youtube size={32} />
             </div>
             <h3 className="oswald text-2xl font-bold uppercase mb-4">Digital Creators</h3>
             <ul className="space-y-4 text-gray-400 font-medium text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#FFD700]" size={16} /> High-End YouTube Editor</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#FFD700]" size={16} /> Social Media Strategist</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#FFD700]" size={16} /> Viral Content Creator</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#FFD700]" size={16} /> Educational Content Post</li>
             </ul>
          </div>
          <div className="gloss-card p-10 rounded-3xl border-red-500/10">
             <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-8">
               <MonitorPlay size={32} />
             </div>
             <h3 className="oswald text-2xl font-bold uppercase mb-4">Agencies & Ads</h3>
             <ul className="space-y-4 text-gray-400 font-medium text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-white" size={16} /> Commercial Ad Editor</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-white" size={16} /> Corporate Video Lead</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-white" size={16} /> Event Highlight Specialist</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-white" size={16} /> Music Video Editor</li>
             </ul>
          </div>
        </div>

        <div className="bg-white/5 rounded-[3rem] p-12 md:p-20 text-center border border-white/5 relative overflow-hidden">
           <div className="absolute inset-0 bg-red-radial opacity-20"></div>
           <h2 className="oswald text-4xl md:text-6xl font-black uppercase mb-8">Master the <span className="text-[#FF0000]">Final Cut.</span></h2>
           <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg font-medium leading-relaxed">
             Our Video Editing program takes you from the basics of software to the psychological depths of storytelling.
           </p>
           <Link to="/courses/video-editing" className="inline-flex items-center gap-4 px-12 py-5 bg-[#FF0000] text-white font-black uppercase tracking-widest text-xs rounded-xl hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] transition-all">
             View Editing Syllabus <ArrowRight size={18} />
           </Link>
        </div>
      </div>
      <FinalCTA />
    </div>
  );
};

export default VideoEditingCareer;