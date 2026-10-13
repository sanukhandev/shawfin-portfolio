import { useId } from "react";

type BrandLogoProps = {
  className?: string;
  isBrandHidden?: boolean;
  tone?: "white" | "black";
};

/** A continuous handwritten wordmark, with context-specific solid colours. */
export default function BrandLogo({
  className,
  isBrandHidden = false,
  tone = "white",
}: BrandLogoProps) {
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
      <text
        x="4"
        y="43"
        fontSize="47"
        fontWeight="700"
        letterSpacing="-0.5"
        fill={tone === "black" ? "#000000" : "#FFFFFF"}
        style={{ fontFamily: "var(--font-dancing-script), cursive" }}
      >
        {isBrandHidden ? "Shawfin" : "Shawfin.design"}
      </text>
    </svg>
  );
}
