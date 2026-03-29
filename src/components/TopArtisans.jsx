import React from "react";
import RatingStars from "./RatingStars";

const TopArtisans = () => {
  const artisans = [
    {
      name: "Kwame Boateng",
      skill: "Lead Plumber",
      rating: 4.9,
      location: "East Legon, Accra",
      image: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg"
    },
    {
      name: "Abena Mansa",
      skill: "Expert Electrician",
      rating: 4.8,
      location: "Kumasi, Ashanti",
      image: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg"
    },
    {
      name: "Yaw Mensah",
      skill: "Master Carpenter",
      rating: 5.0,
      location: "Takoradi, Western",
      image: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg"
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Our Top <span className="text-gold">Artisans</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Hire the most skilled and highly-rated professionals for your home and office.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artisans.map((artisan, index) => (
          <div key={index} className="bg-surface-2 border border-white/5 p-6 rounded-3xl hover:translate-y-[-8px] transition-all hover:border-gold/30 group">
            <div className="flex items-center gap-6 mb-6">
              <img
                src={artisan.image}
                alt={artisan.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-transparent group-hover:border-gold transition-colors"
              />
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">{artisan.name}</h3>
                <p className="text-gold-light text-sm font-semibold">{artisan.skill}</p>
                <div className="flex items-center gap-2 mt-1">
                  <RatingStars value={artisan.rating} />
                  <span className="text-gray-400 text-xs">({artisan.rating})</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-6 bg-surface-3/50 p-3 rounded-xl">
              <span>📍</span>
              {artisan.location}
            </div>

            <button className="w-full bg-surface-3 hover:bg-gold hover:text-black py-4 rounded-xl font-bold transition-all transform active:scale-95 border border-white/5">
              Hire Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopArtisans;
