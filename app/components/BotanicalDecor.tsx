export function BranchCorner({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      width="160"
      height="160"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* Main branch curving up from bottom-left */}
      <path d="M 20 180 Q 50 150 80 120 Q 110 90 140 50" />

      {/* Left side leaves */}
      <path d="M 30 165 Q 20 160 15 150" />
      <path d="M 50 145 Q 38 140 32 128" />
      <path d="M 75 110 Q 60 105 52 92" />

      {/* Right side leaves */}
      <path d="M 90 135 Q 105 132 115 120" />
      <path d="M 115 95 Q 132 95 145 80" />
      <path d="M 140 60 Q 155 58 165 45" />

      {/* Secondary branch */}
      <path d="M 95 125 Q 120 110 150 85" />
      <path d="M 105 115 Q 115 108 128 98" />
    </svg>
  );
}

export function LeafSeparator({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 80"
      width="100%"
      height="80"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="none"
      aria-hidden
    >
      {/* Center botanical sprig */}
      {/* Main stem */}
      <path d="M 600 60 Q 600 30 600 10" />

      {/* Left leaves */}
      <path d="M 600 50 Q 580 48 565 35" />
      <path d="M 600 40 Q 575 35 555 20" />
      <path d="M 600 30 Q 585 20 570 5" />

      {/* Right leaves */}
      <path d="M 600 50 Q 620 48 635 35" />
      <path d="M 600 40 Q 625 35 645 20" />
      <path d="M 600 30 Q 615 20 630 5" />

      {/* Left accent sprig */}
      <path d="M 300 55 Q 310 45 320 30" />
      <path d="M 310 50 Q 320 42 330 28" />
      <path d="M 290 55 Q 295 45 305 35" />

      {/* Right accent sprig */}
      <path d="M 900 55 Q 890 45 880 30" />
      <path d="M 890 50 Q 880 42 870 28" />
      <path d="M 910 55 Q 905 45 895 35" />
    </svg>
  );
}
