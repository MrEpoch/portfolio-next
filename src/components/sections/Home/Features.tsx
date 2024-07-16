import { HoverEffect } from "@/components/ui/card-hover-effect";
import React from "react";
export const projects = [
  {
    title: "Animace",
    description:
      "Mam zkušenosti s vytvářením profesionálních animací pro webové stránky.",
    imgSrc: "/assets/undraw-animation.svg",
    link: "/contact",
  },
  {
    title: "Design",
    description:
      "Výtvor kvalitních designu ve figmě, od minimalistických až do klasických stylů webových stránek.",
    imgSrc: "/assets/undraw-design.svg",
    link: "/contact",
  },
  {
    title: "Vývoj",
    description:
      "Většina mých webových projektů jsou psána kódově od čistého html + css až po komplexní NextJS ( + React knihovnu) framework.",
    imgSrc: "/assets/undraw-code.svg",
    link: "/contact",
  },
];

export default function Features() {
  return (
    <section className="min-h-screen w-full flex items-center gap-8 px-8 flex-col justify-between">
      <h2 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Moje zkušenosti
      </h2>
      <p className="text-sm font-normal text-gray-500 lg:text-lg dark:text-gray-400">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis.
      </p>
      <div className="w-full flex items-center gap-8 md:flex-row flex-col justify-between">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}
