import React, { useEffect, useRef, useState } from "react";

/* ── Professional SVG Icons ─────────────────────────────────── */
const IconArtisan = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const IconJobs = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4"/>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>
);

const IconRating = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const IconRegions = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const stats = [
  { icon: <IconArtisan />, value: 5000,  suffix: "+",  label: "Verified Artisans" },
  { icon: <IconJobs />,    value: 10000, suffix: "+",  label: "Jobs Completed" },
  { icon: <IconRating />,  value: 4.8,   suffix: "/5", label: "Average Rating", isDecimal: true },
  { icon: <IconRegions />, value: 12,    suffix: "",   label: "Regions Covered" },
];

/* ── Count-up hook ──────────────────────────────────────────── */
function useCountUp(target, duration = 1800, isDecimal = false) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;
            setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, isDecimal]);

  return { count, ref };
}

/* ── Stat Item ──────────────────────────────────────────────── */
const StatItem = ({ icon, value, suffix, label, isDecimal }) => {
  const { count, ref } = useCountUp(value, 1800, isDecimal);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-icon-wrapper">
        <div className="stat-icon">{icon}</div>
      </div>
      <div className="stat-number">
        {isDecimal ? count.toFixed(1) : count.toLocaleString()}
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

/* ── Stats Bar ──────────────────────────────────────────────── */
const StatsBar = () => (
  <section className="stats-bar-section">
    <div className="stats-bar-inner">
      {stats.map((stat, i) => (
        <React.Fragment key={stat.label}>
          <StatItem {...stat} />
          {i < stats.length - 1 && <div className="stats-divider" />}
        </React.Fragment>
      ))}
    </div>
  </section>
);

export default StatsBar;
