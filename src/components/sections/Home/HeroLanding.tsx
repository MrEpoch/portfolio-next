import React from "react";
import { AnimatedDiv } from "@/components/shared/AnimatedElements";
import { LinkPreview } from "@/components/ui/link-preview";
import Image from "next/image";

export default function HeroLanding() {
  return (
    <section className="min-h-screen w-full flex items-center gap-8 md:flex-row flex-col justify-between">
      <AnimatedDiv
        side="left"
        className="flex px-8 flex-col md:py-4 py-16 w-full md:items-start items-center justify-center gap-8 h-full"
      >
        <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Delší{" "}
          <span className="bg-primary text-white rounded-xl px-2">text</span>{" "}
          mého druhu
        </h1>
        <p className="text-sm font-normal text-gray-500 lg:text-md dark:text-gray-400">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <LinkPreview
          isStatic
          url="/projects"
          imageSrc="/assets/shots-projects.png"
          className="hover:-translate-y-1 transition inline-flex w-fit justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary hover:bg-primary-foreground focus:ring-4 focus:ring-primary dark:focus:ring-primary"
        >
          Projekty
        </LinkPreview>
      </AnimatedDiv>
      <AnimatedDiv
        side="right"
        className="w-full flex items-center justify-center h-full relative rounded px-8"
      >
        <Image
          src="/assets/shots-projects.png"
          alt="Projects picture"
          width={1400}
          height={1400}
          className="h-full md:max-w-xl rounded w-full"
        />
      </AnimatedDiv>
      &nbsp;
    </section>
  );
}
