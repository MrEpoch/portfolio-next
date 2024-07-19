"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AnimatedDiv({
  className,
  children,
  animationLength = 0.5,
  side = "bottom",
}: {
  className?: string;
  children: React.ReactNode;
  animationLength?: number;
  side?: "top" | "bottom" | "left" | "right";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  function setSide(sideM: "top" | "bottom" | "left" | "right") {
    switch (sideM) {
      case "top":
        return "translateY(-20px)";
      case "bottom":
        return "translateY(20px)";
      case "left":
        return "translateX(-20px)";
      case "right":
        return "translateX(20px)";
    }
  }

  return (
    <div
      className={className}
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : setSide(side),
        transition: `all ${animationLength}s cubic-bezier(0.17, 0.55, 0.55, 1)`,
      }}
    >
      {children}
    </div>
  );
}
