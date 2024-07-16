import { AnimatedDiv } from "@/components/shared/AnimatedElements";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = {
  projects: [
    {
      imgSrc: "/assets/project1.png",
      link: "/",
      title: "Lexagos",
    },
    {
      imgSrc: "/assets/project2.png",
      link: "/",
      title: "Lyfier",
    },
    {
      imgSrc: "/assets/project3.png",
      link: "/",
      title: "Lexagos",
    },
  ],
};

export default function ProductSection() {
  return (
    <section className="min-h-screen w-full flex gap-8 flex-col px-8">
      <AnimatedDiv
        side="top"
        className="flex px-8 flex-col md:py-4 py-16 w-full md:items-start items-center justify-center gap-8 h-full"
      >
        <h2 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Moje projekty
        </h2>
      </AnimatedDiv>
      <Separator className="my-8 bg-black h-[2px]" />
      <div
        className="relative z-[0] px-4 mx-auto max-w-screen-2xl flex flex-col
        overflow-hidden items-center justify-center justify-items-center text-center lg:py-16 sm:grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-y-6
        sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-4"
      >
        {data.projects.map((item, i) => (
          <AnimatedDiv key={i} side="bottom" className="w-full h-full">
            <div
              className="w-full h-full hover:translate-y-1 hover:scale-[1.01] max-w-[400px] rounded transition-transform duration-300
    shadow-lg group"
            >
              <Link
                className="w-full h-full
          "
                href={item.link}
              >
                <div
                  className={`w-full h-48 overflow-hidden bg-gray-200 dark:bg-gray-800`}
                >
                  <Image
                    className="w-full object-cover h-full rounded group-hover:brightness-75 dark:group-hover:brightness-50 transition duration-300"
                    width={800}
                    height={800}
                    src={item.imgSrc}
                    alt={item.title}
                  />
                </div>
              </Link>
            </div>
          </AnimatedDiv>
        ))}
      </div>
        <AnimatedDiv side="bottom" className="w-full h-full flex justify-center items-center">
          <Link
            href="/projects"
            className="hover:-translate-y-1 transition inline-flex w-fit justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary hover:bg-primary-foreground focus:ring-4 focus:ring-primary dark:focus:ring-primary"
          >
            Více projektů
          </Link>
        </AnimatedDiv>

    </section>
  );
}
