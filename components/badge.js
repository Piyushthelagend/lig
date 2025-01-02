const Badge = ({ type }) => (
    <span
      className={`absolute top-4 right-4 flex items-center gap-1 text-sm font-semibold ${
        type === "premium" ? "text-yellow-400" : "text-cyan-400"
      } bg-gray-800 px-2 py-1 rounded z-40`}
    >
      {type === "premium" ? <PremiumSVG /> : <FreeSVG />}
      {type.toUpperCase()}
    </span>
  );
  const PremiumSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-yellow-400"
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
  const FreeSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-cyan-400"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13H7v-2h10v2zm0-4H7V9h10v2z" />
    </svg>
  );
export default Badge;      