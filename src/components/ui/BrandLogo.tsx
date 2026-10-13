import { useId } from "react";

type BrandLogoProps = {
  className?: string;
  isBrandHidden?: boolean;
};

/**
 * A continuous handwritten wordmark. The Nero-to-gold gradient
 * is defined here once and reused by the header and footer.
 */
export default function BrandLogo({
  className,
  isBrandHidden = false,
}: BrandLogoProps) {
  const gradientId = useId();
  const titleId = useId();

  return (
    <svg
      viewBox={isBrandHidden ? "0 0 190 56" : "0 0 315 56"}
      className={className ?? (isBrandHidden ? "h-8 w-[110px]" : "h-8 w-[180px]")}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby={titleId}
      preserveAspectRatio="xMinYMid meet"
    >
      <title id={titleId}>{isBrandHidden ? "Shawfin" : "Shawfin.design"}</title>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#CBB291" />
          <stop offset="30%" stopColor="#B78A4E" />
          <stop offset="58%" stopColor="#262626" />
          <stop offset="82%" stopColor="#B78A4E" />
          <stop offset="100%" stopColor="#CBB291" />
        </linearGradient>
      </defs>
      <text
        x="4"
        y="43"
        fontSize="47"
        fontWeight="700"
        letterSpacing="-0.5"
        fill={`url(#${gradientId})`}
        stroke="#CBB291"
        strokeOpacity="0.36"
        strokeWidth="0.65"
        paintOrder="stroke"
        style={{
          fontFamily: "var(--font-dancing-script), cursive",
        }}
      >
        {isBrandHidden ? "Shawfin" : "Shawfin.design"}
      </text>
    </svg>
  );
}
