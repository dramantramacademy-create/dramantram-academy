import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  QrCode,
  ArrowRight,
} from "lucide-react";

const AdmissionsPage: React.FC = () => {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-red-radial opacity-40"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-[#FF0000]/10 border border-[#FF0000]/30 rounded-full mb-8 animate-fade-in-up">
            <span className="text-[10px] font-black text-[#FF0000] uppercase tracking-[0.4em]">
              Admissions 2026
            </span>
          </div>
          <h1 className="oswald text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 animate-fade-in-up animation-delay-200">
            Apply <span className="text-[#FFD700]">Today.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed animate-fade-in-up animation-delay-400">
            Secure your slot for the upcoming batch. Limited seats available for
            dedicated creative aspirers in Lucknow.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enrollment Details */}
          <div className="reveal">
            <h2 className="oswald text-3xl font-black uppercase mb-10 border-b border-red-900/20 pb-4">
              Enrollment <span className="text-[#FF0000]">Details</span>
            </h2>
            <div className="space-y-8 mb-12">
              {[
                {
                  step: "01",
                  title: "Fill the Form",
                  desc: "Click Apply Now or scan the QR to fill your basic details.",
                },
                {
                  step: "02",
                  title: "Counseling Call",
                  desc: "Our mentors will call you to discuss your career goals.",
                },
                {
                  step: "03",
                  title: "Studio Visit",
                  desc: "Visit our Lucknow campus to see the environment firsthand.",
                },
                {
                  step: "04",
                  title: "Registration",
                  desc: "Pay the seat booking fee to confirm your admission.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="oswald text-4xl font-black text-red-600/30">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="gloss-card p-10 rounded-3xl border-red-500/10">
              <h3 className="oswald text-2xl font-bold uppercase mb-6 flex items-center gap-3">
                <QrCode className="text-[#FFD700]" /> Scan to Apply
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-48 h-48 bg-white p-2 rounded-xl">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://chat.whatsapp.com/GT8IRbAU0H3GXw7syc9w6n"
                    alt="QR Code"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-gray-400 text-sm mb-6 font-medium">
                    Scan this code with your phone camera to open the
                    application form instantly.
                  </p>
                  <a
                    href="https://chat.whatsapp.com/GT8IRbAU0H3GXw7syc9w6n"
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-[#FF0000] text-white font-black uppercase tracking-widest text-xs rounded-xl hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all"
                  >
                    WhatsApp Us <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="reveal">
            <h2 className="oswald text-3xl font-black uppercase mb-10 border-b border-red-900/20 pb-4">
              Full <span className="text-[#FF0000]">Contact</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="gloss-card p-8 rounded-2xl border-white/5">
                <Phone className="text-[#FFD700] mb-4" size={24} />
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">
                  Phone
                </div>
                <div className="text-lg font-black">+91 91401 10443</div>
              </div>
              <div className="gloss-card p-8 rounded-2xl border-white/5">
                <Mail className="text-[#FFD700] mb-4" size={24} />
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">
                  Email
                </div>
                <div className="text-sm font-black break-all">
                  admission@dramantram.com
                </div>
              </div>
            </div>

            <div className="gloss-card p-8 rounded-2xl border-white/5 mb-12">
              <MapPin className="text-[#FF0000] mb-4" size={28} />
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">
                Academy Address
              </div>
              <p className="text-white font-bold leading-relaxed">
                Summit Building, 10th Floor, <br />
                Vibhuti Khand, Gomti Nagar, <br />
                Lucknow, Uttar Pradesh 226010
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { Icon: Instagram, link: "#" },
                { Icon: Youtube, link: "#" },
                { Icon: Twitter, link: "#" },
                { Icon: Linkedin, link: "#" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="w-16 h-16 rounded-2xl gloss-card border-white/5 flex items-center justify-center text-gray-500 hover:text-[#FFD700] hover:border-[#FFD700] hover:scale-110 transition-all"
                >
                  <item.Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;
