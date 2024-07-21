import { AnimatedDiv } from "@/components/shared/AnimatedElements";
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
    <section className="min-h-screen w-full flex items-center gap-8 px-8 flex-col justify-center">
      <AnimatedDiv side="top" className="flex flex-col gap-8 items-center">
        <h2 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Moje služby
        </h2>
        <p className="text-sm font-normal text-gray-500 lg:text-lg dark:text-gray-400">
          Pro mně jako vývojáře je nejdůležitější vědet směr vývoje který
          zákazník potřebuje vytvořit. Ať až jsou to minimalistické weby nebo
          více komplikované moderní styly, jsou schopný je vytvořit.
          Optimalizuji obrázky, SEO, a výkon stránky. Mám zkušenost s vytvářením
          nádherných animací pro váš web. Vyvýjím web s responsivním designem na
          desktop i mobilní zařízení. Dokážů naladit VPS hosting nebo hostinger
          a jiné alternativy. Pokud dělém design tak většinou ve figmě.
        </p>
      </AnimatedDiv>
      <div className="w-full flex items-center gap-8 md:flex-row flex-col justify-between">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}
