import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented or declined
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay before showing the banner for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 flex justify-center pointer-events-none" style={{ animation: 'slideUp 0.6s ease-out forwards' }}>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      
      <div className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] p-5 md:p-6 max-w-5xl w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pointer-events-auto relative overflow-hidden group">
        
        {/* Subtle red glow effect on hover */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF0000]/10 rounded-full blur-[80px] -z-10 group-hover:bg-[#FF0000]/20 transition-colors duration-700" />

        <div className="flex items-start md:items-center gap-4 relative z-10 w-full">
          <div className="bg-zinc-800/80 p-3 rounded-xl border border-zinc-700/50 shrink-0 shadow-inner">
            <Cookie className="w-6 h-6 text-[#FF0000]" />
          </div>
          <div className="flex-grow pr-6 md:pr-0">
            <h3 className="text-white font-semibold text-lg mb-1 tracking-tight">We value your privacy</h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto shrink-0 relative z-10">
          <button
            onClick={handleDecline}
            className="flex-1 md:flex-none px-5 py-2.5 rounded-xl border border-zinc-700/80 text-zinc-300 font-medium text-sm hover:bg-zinc-800 hover:text-white transition-all duration-300 hover:border-zinc-600 focus:ring-2 focus:ring-zinc-700 outline-none"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none px-6 py-2.5 rounded-xl bg-[#FF0000] text-white font-medium text-sm hover:bg-[#E60000] transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.25)] hover:shadow-[0_0_25px_rgba(255,0,0,0.4)] hover:-translate-y-0.5 focus:ring-2 focus:ring-[#FF0000]/50 outline-none"
          >
            Accept All
          </button>
        </div>

        {/* Mobile close button */}
        <button 
          onClick={handleDecline}
          className="absolute top-4 right-4 md:hidden p-1 text-zinc-500 hover:text-zinc-300 transition-colors rounded-full hover:bg-zinc-800"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
