import { AnimatedDiv } from "@/components/shared/AnimatedElements";
import ProductCard from "@/components/shared/ProductCard";
import { Separator } from "@/components/ui/separator";
import { Project } from "@/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ProductSection({ projects }: { projects: Project[] }) {
  return (
    <section className="min-h-screen w-full flex gap-8 items-center flex-col px-8">
      <AnimatedDiv
        side="top"
        className="flex flex-col py-8 w-full md:items-start items-center justify-center gap-8 h-full"
      >
        <h2 className="text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Moje projekty
        </h2>
      </AnimatedDiv>
      <Separator className="w-full h-1 mx-auto my-8 bg-black border-0 rounded md:my-12 dark:bg-gray-700" />
      <div
        className="relative z-[0]  mx-auto max-w-screen-xl flex flex-col
        overflow-hidden items-center justify-center justify-items-center text-center lg:py-8 sm:grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-y-6
        sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-4"
      >
        {projects.map((item, i) => (
          <ProductCard key={i} data={item} i={i} />
        ))}
      </div>
      <AnimatedDiv
        side="bottom"
        className="w-full h-full flex justify-center items-center"
      >
        <Link
          href="/projects"
          className="shadow-lg gap-1 group transition inline-flex w-fit justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary hover:bg-primary-foreground focus:ring-4 focus:ring-primary dark:focus:ring-primary"
        >
          <span>Více projektů</span>
          <ChevronRight className="group-hover:translate-x-0.5 transition" />
        </Link>
      </AnimatedDiv>
    </section>
  );
}
