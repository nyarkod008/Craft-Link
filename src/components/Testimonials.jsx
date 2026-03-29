import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      content: "The best way to find a plumber in Accra. Fast and reliable service every time. Found an amazing electrician within minutes. CraftLink is a lifesaver for home emergencies!",
      author: "Adobea M.",
      location: "East Legon, ACC"
    },
    {
      content: "Quality artisans are hard to find, but CraftLink makes it easy. I'll never go back to random calls. Verified reviews gave me peace of mind when hiring for my office setup.",
      author: "Kofi B.",
      location: "Kumasi, ASH"
    },
    {
      content: "I used the Flex service for a quick cleaning job and it was perfect. The matching was spot on. A game changer for local professionals. I've grown my business significantly.",
      author: "Sarah E.",
      location: "Osu, ACC"
    }
  ];

  return (
    <section className="py-24 px-4 bg-black">
      <div className="text-center mb-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          What Our <span className="text-gold">Users</span> Say
        </h2>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          Real stories from real customers and professionals on CraftLink.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-surface-2 p-12 rounded-3xl border border-white/5 hover:translate-y-[-10px] transition-all">
            <div className="text-gold mb-6 text-xl">★★★★★</div>
            <p className="text-white text-lg italic leading-relaxed mb-8">
              "{review.content}"
            </p>
            
            <div className="border-t border-white/5 pt-6">
              <h4 className="text-xl font-bold text-white">{review.author}</h4>
              <p className="text-gray-500 text-sm uppercase tracking-wider">{review.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
