import React from "react";
import { AnimatedDiv } from "@/components/shared/AnimatedElements";
import Image from "next/image";
import Link from "next/link";

export default function HeroLanding() {
  return (
    <section className="min-h-screen w-full flex items-center gap-8 md:flex-row flex-col justify-between">
      <AnimatedDiv
        side="left"
        className="flex px-8 flex-col md:py-4 py-16 w-full md:items-start items-center justify-center gap-8 h-full"
      >
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-start text-center leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Začni{" "}
          <span className="bg-primary text-white rounded-xl px-2">cestu</span>{" "}
          se mnou
        </h1>
        <p className="text-sm font-normal text-gray-500 lg:text-lg dark:text-gray-400">
          Pomohu vám nastartovat váš web s nejnovější technikou, animacemi a
          propracovaným designem
        </p>
        <Link
          href="/projects"
          className="hover:-translate-y-1 transition inline-flex w-fit justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary hover:bg-primary-foreground focus:ring-4 focus:ring-primary dark:focus:ring-primary"
        >
          Projekty
        </Link>
      </AnimatedDiv>
      <AnimatedDiv
        side="right"
        className="w-full flex items-center justify-center h-full relative rounded px-8"
      >
        <Image
          src="/assets/shots-projects.webp"
          alt="Projects picture"
          priority
          blurDataURL="/assets/shots-projects.webp"
          placeholder="blur"
          loading="eager"
          width={1400}
          height={1400}
          className="h-full md:max-w-xl rounded w-full"
        />
      </AnimatedDiv>
      &nbsp;
    </section>
  );
}
