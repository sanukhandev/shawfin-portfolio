import { useId } from "react";

type BrandLogoProps = {
  className?: string;
  isBrandHidden?: boolean;
};

export default function BrandLogo({
  className,
  isBrandHidden = false,
}: BrandLogoProps) {
  const gradientId = useId();

  return (
    <svg
      viewBox={isBrandHidden ? "0 0 110 32" : "0 0 180 32"}
      height="32"
      className={
        className ??
        (isBrandHidden ? "h-8 w-[110px]" : "h-8 w-[180px]")
      }
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C000FF" />
          <stop offset="50%" stopColor="#E056FD" />
          <stop offset="100%" stopColor="#7B2DFF" />
        </linearGradient>
      </defs>

      <text
        x="0"
        y="24"
        fontSize="22"
        fontWeight="700"
        letterSpacing="-0.8"
        fill={`url(#${gradientId})`}
        style={{
          fontFamily: "var(--font-josefin-sans), ui-sans-serif, sans-serif",
        }}
      >
        Shawfin
      </text>

      {!isBrandHidden && (
        <text
          x="84"
          y="24"
          fontSize="18"
          fontWeight="500"
          letterSpacing="-0.4"
          fill="#C000FF"
          opacity="0.9"
          style={{
            fontFamily:
              "var(--font-josefin-sans), ui-sans-serif, sans-serif",
          }}
        >
          .design
        </text>
      )}
    </svg>
  );
}