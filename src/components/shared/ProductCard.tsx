import React from "react";
import { AnimatedDiv } from "./AnimatedElements";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({
  data,
  i,
}: {
  data: {
    imgSrc: string;
    title: string;
    link: string;
  };
  i: number;
}) {
  return (
    <AnimatedDiv
      key={i}
      side="bottom"
      className="w-full h-full"
      animationLength={0.3 * (i + 1)}
    >
      <div
        className="w-full h-full hover:translate-y-1 hover:scale-[1.01] max-w-[400px] rounded transition-transform duration-300
    shadow-lg group"
      >
        <Link
          className="w-full h-full
          "
          href={data.link}
        >
          <div
            className={`w-full h-48 overflow-hidden bg-gray-200 dark:bg-gray-800`}
          >
            <Image
              className="w-full object-cover h-full rounded group-hover:brightness-75 dark:group-hover:brightness-50 transition duration-300"
              width={800}
              height={800}
              src={data.imgSrc}
              alt={data.title}
            />
          </div>
        </Link>
      </div>
    </AnimatedDiv>
  );
}
