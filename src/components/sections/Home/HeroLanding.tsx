import React from "react";
import { AnimatedDiv } from "@/components/shared/AnimatedElements";
import Link from "next/link";
import HeroLandingImage from "./HeroLandingImage";
import { ChevronRight } from "lucide-react";

export default function HeroLanding() {
  return (
    <section className="min-h-screen w-full flex items-center gap-16 sm:gap-8 md:flex-row flex-col sm:justify-between">
      <AnimatedDiv
        side="left"
        className="flex px-8 flex-col md:pt-4 pt-16 w-full md:items-start items-center justify-center gap-8 h-full"
      >
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-start text-center leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Začni{" "}
          <span className="gradient-bg text-white rounded-xl px-2">cestu</span>{" "}
          se mnou
        </h1>
        <p className="text-sm font-normal text-gray-500 lg:text-lg dark:text-gray-400">
          Pomohu vám nastartovat váš web s nejnovější technikou, animacemi a
          propracovaným designem
        </p>
        <Link
          href="/projects"
          className="group transition inline-flex w-fit gap-1 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded gradient-bg hover:bg-primary-foreground focus:ring-4 focus:ring-primary dark:focus:ring-primary"
        >
          Projekty
          <ChevronRight
            width={20}
            height={20}
            className="w-5 h-5 group-hover:translate-x-[2px] transition"
          />
        </Link>
      </AnimatedDiv>
      <div className="w-full flex items-center justify-center h-full relative rounded px-8">
        <HeroLandingImage />
      </div>
    </section>
  );
}
