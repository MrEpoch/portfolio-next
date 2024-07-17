'use client';

import { ParallaxProvider as Parallax } from 'react-scroll-parallax';

export default function ParallaxProvider({ children }: { children: React.ReactNode }) {
  return <Parallax>{children}</Parallax>;
}
