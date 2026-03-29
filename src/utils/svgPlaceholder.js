// Creates a data-URI SVG placeholder for images.
// This avoids build-time failures when `src/assets/*` files are missing.
export const svgPlaceholder = (label, options = {}) => {
  const {
    width = 1200,
    height = 800,
    frameColor = "#D4AF37",
    bgStart = "#0B1220",
    bgEnd = "#111827",
  } = options;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${bgStart}"/>
          <stop offset="1" stop-color="${bgEnd}"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#g)"/>
      <rect x="70" y="100" width="${width - 140}" height="${height - 200}" rx="36"
        fill="rgba(212,175,55,0.08)" stroke="rgba(212,175,55,0.25)"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        fill="${frameColor}" font-size="64" font-family="Arial, sans-serif" font-weight="700">
        ${label}
      </text>
    </svg>
  `.trim();

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

