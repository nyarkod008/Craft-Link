import React from "react";
import Counter from "./common/Counter";

const WhyChoose = () => {
  const reasons = [
    { 
      icon: "🛡️", 
      title: "Vetted Professionals", 
      desc: "Every artisan undergoes a strict review process to ensure top-tier quality and safety." 
    },
    { 
      icon: "⚡", 
      title: "Instant Booking", 
      desc: "Request exactly what you need in seconds with our CraftLink Flex engine." 
    },
    { 
      icon: "⭐", 
      title: "Community Driven", 
      desc: "Make decisions based on honest, verified reviews from real customers near you." 
    }
  ];

  return (
    <section id="features" className="py-32 px-4 bg-black">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Why Choose <span className="text-gold">CraftLink?</span>
        </h2>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
          We provide the most reliable and seamless marketplace for connecting with top-rated local professionals instantly.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <div key={index} className="bg-surface-2 p-12 rounded-3xl border border-white/5 transition-all hover:translate-y-[-10px] text-center">
            <div className="text-4xl mb-8 bg-gold w-20 h-20 flex items-center justify-center rounded-full mx-auto shadow-2xl">
              {reason.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">{reason.title}</h3>
            <p className="text-gray-500 text-lg leading-relaxed">{reason.desc}</p>
          </div>
        ))}
      </div>

      {/* Trust Stats Bar */}
      <div className="stats-bar mt-24 max-w-6xl mx-auto py-20 px-12 flex flex-col md:flex-row justify-between items-center text-center gap-12 md:gap-0">
        <div className="flex-1 w-full md:w-auto">
          <span className="text-6xl font-black text-gold block mb-4">
            <Counter end={500} suffix="+" />
          </span>
          <span className="text-gray-500 font-bold uppercase tracking-widest text-sm block">Vetted Artisans</span>
        </div>
        
        {/* Separator Line (Hidden on mobile) */}
        <div className="hidden md:block w-px h-16 bg-gold/20"></div>

        <div className="flex-1 w-full md:w-auto">
          <span className="text-6xl font-black text-gold block mb-4">
            <Counter end={10000} suffix="+" />
          </span>
          <span className="text-gray-500 font-bold uppercase tracking-widest text-sm block">Services Done</span>
        </div>

        {/* Separator Line (Hidden on mobile) */}
        <div className="hidden md:block w-px h-16 bg-gold/20"></div>

        <div className="flex-1 w-full md:w-auto">
          <span className="text-6xl font-black text-gold block mb-4">
            <Counter end={4.9} duration={2500} suffix="/5" />
          </span>
          <span className="text-gray-500 font-bold uppercase tracking-widest text-sm block">Average Rating</span>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
