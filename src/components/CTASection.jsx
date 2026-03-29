import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 px-6 mx-4 mb-20">
      <div className="max-w-6xl mx-auto rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden bg-gradient-to-br from-gold/10 via-surface-2 to-black border border-gold/15 shadow-2xl">
        {/* Background Glare */}
        <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-gold/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-gold/5 blur-[120px] rounded-full"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            Ready to get your <br />
            <span className="text-gold italic underline decoration-gold/30 underline-offset-8">job done?</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium">
            Join thousands of satisfied users and professional artisans on the most trusted platform in Ghana.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/service-request" className="bg-gold hover:bg-gold-light text-black px-10 py-5 rounded-2xl font-black text-xl transition-all hover:scale-105 shadow-xl shadow-gold/20 active:scale-95">
              Post a Job
            </Link>
            <Link to="/signup?role=artisan" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-2xl font-black text-xl transition-all hover:scale-105 backdrop-blur-md active:scale-95">
              Join as Artisan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
