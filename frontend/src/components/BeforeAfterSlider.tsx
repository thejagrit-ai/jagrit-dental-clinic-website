"use client";

import { useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  comparisonSrc?: string;
  alt: string;
};

/**
 * A keyboard-accessible before/after comparison. The source photographs contain
 * baked-in corner captions, so the clean-up strips are deliberately part of the
 * image frame rather than extra visible labels in the UI.
 */
export function BeforeAfterSlider({ beforeSrc, afterSrc, comparisonSrc, alt }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const sharedBackground = comparisonSrc
    ? {
        backgroundImage: `url(${comparisonSrc})`,
        backgroundSize: "200% 100%",
      }
    : undefined;

  return (
    <div className="before-after" style={{ "--slider-position": `${position}%` } as React.CSSProperties}>
      <div
        className="before-after-pane before-after-before"
        style={sharedBackground ?? { backgroundImage: `url(${beforeSrc})` }}
        aria-hidden="true"
      />
      <div
        className="before-after-pane before-after-after"
        style={{
          ...(sharedBackground ?? { backgroundImage: `url(${afterSrc})` }),
          backgroundPosition: comparisonSrc ? "right center" : "center",
          clipPath: `inset(0 0 0 ${position}%)`,
        }}
        aria-hidden="true"
      />
      <div className="before-after-divider" aria-hidden="true">
        <span>↔</span>
      </div>
      <input
        className="before-after-input"
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={`Compare before and after: ${alt}`}
      />
    </div>
  );
}
