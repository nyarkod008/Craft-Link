import React from "react";
import acRepairImg from "../assets/ac_repair.png";
import cleaningImg from "../assets/cleaning.png";
import handymanImg from "../assets/artisan-advanced-renovation.png";

const PopularProjects = () => {
  const projects = [
    {
      title: "Handyperson for Small Projects",
      rating: "4.6 (599k+)",
      price: "from $158",
      img: handymanImg
    },
    {
      title: "One-time Cleaning Service",
      rating: "4.5 (314k+)",
      price: "from $102",
      img: cleaningImg
    },
    {
      title: "Air Conditioning Service & Repair",
      rating: "4.7 (306k+)",
      price: "from $350",
      img: acRepairImg
    }
  ];

  return (
    <section className="popular-projects py-32 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center">
          Popular <span className="text-gold">projects in your area</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-surface-2 rounded-3xl overflow-hidden border border-white/5 hover:border-gold/20 transition-all group">
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{project.title}</h3>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gold">★ {project.rating}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-300 font-semibold">{project.price}</span>
                </div>
              </div>
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-500 text-sm mt-12 max-w-2xl mx-auto">
          Price shown is the national median price of minimum job size for CraftLink's pre-priced offering. Actual pricing may vary.
        </p>
      </div>
    </section>
  );
};

export default PopularProjects;
