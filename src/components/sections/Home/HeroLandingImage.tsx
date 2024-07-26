"use client";

import React, { useEffect } from "react";
import Image from "next/image";

export default function HeroLandingImage() {
  const [size, setSize] = React.useState({ width: 1024, height: 1024 });

  useEffect(() => {
    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Image
      src="/assets/shots-projects.webp"
      alt="Projects picture"
      priority
      blurDataURL="/assets/shots-projects.webp"
      placeholder="blur"
      loading="eager"
      width={size.width}
      height={size.height}
      className="h-full md:max-w-xl rounded w-full"
    />
  );
}
