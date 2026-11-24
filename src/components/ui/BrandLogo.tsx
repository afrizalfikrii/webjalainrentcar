export function BrandLogo() {
  return (
    <div className="flex items-center gap-2.5 flex-shrink-0">
      <div className="w-9 h-9 rounded-xl shadow-sm shadow-primary/25 flex items-center justify-center overflow-hidden flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          fill="none"
          className="w-full h-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="jalaninLogoGrad"
              x1="4"
              y1="4"
              x2="36"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="55%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
          </defs>
          <rect width="40" height="40" rx="11" fill="url(#jalaninLogoGrad)" />
          <path
            d="M11 26.5C15.5 26.5 19.5 23.2 21.8 18.2L24.2 13H29.5L25.4 21.6C22.4 27.9 16.9 31 11 31V26.5Z"
            fill="#FFFFFF"
          />
          <path
            d="M11 19.5H17.5L19.4 15.5H12.9L11 19.5Z"
            fill="#38BDF8"
          />
          <circle cx="28" cy="27.5" r="2.75" fill="#38BDF8" />
        </svg>
      </div>
      <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-extrabold whitespace-nowrap">
        JALAN<span className="text-primary">.IN</span>
      </span>
    </div>
  );
}
