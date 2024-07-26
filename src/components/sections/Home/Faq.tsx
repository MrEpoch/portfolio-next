import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { AnimatedDiv } from "@/components/shared/AnimatedElements";

const initialData = {
  heading: "Klíčové informace",
  description:
    "Výpis nejdůležitějších informacích k mému vývoji, můj proces od designu do vývoje až po hosting webu.",
  contactText: "Kontakt",
  content: [
    {
      title: "Design",
      text: `Soustředím se většinou na minimalistický design dvou barev černá bílá a k tomu přidávám nějákou barvu které dáva dané stránce život.
Design dělám ve figmě abych ilustroval co chci převést do webových stránek.
      `,
    },
    {
      title: "Responsivní",
      text: `Většina mých webových stránek je responsivní na nejmenší mobilní displaje (aka iphone 5) 320px. Stavím web ve stylu toho aby to všechno bylo později lehce responsivní na mobilech, tabletech a PC.`,
    },
    {
      title: "Animace",
      text: `Většinou jsou mé animace rozděleny do dvou skupin, jednoduché a komplikované. Jednoduché jsou většinou CSS animace jako tranzise a maličkosti. Komplikované jsou napřiklad objevení textu při načtené nebo při scrollu.`,
    },
    {
      title: "Vývoj",
      text: `Největší zkušenost mám s psaním webů ve formě kódu dává mi to větší flexibilitu když chci lépe na stylovat webovou stránku. Mám zkušenost i s provozem no-code alternativ jako wordpress.`,
    },
    {
      title: "Hosting",
      text: `V současné době teď většinu svých výtvorů hostuji na VPS nebo vercelu. Nemám problém s použitím hostingových řešení jako je hostinger a další.`,
    },
  ],
};

export default function FaqSection({ data = initialData }) {
  return (
    <section className="min-h-screen py-16 w-full flex h-full" id="faq">
      <div className="max-w-screen-xl  justify-center items-center flex-1 flex md:flex-row flex-col mx-auto  min-h-full">
        <AnimatedDiv
          side="left"
          className="w-full p-8 flex flex-col gap-8 h-full"
        >
          <h2 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {data.heading}
          </h2>
          <p className=" text-sm sm:w-3/4 font-normal text-gray-500 lg:text-lg sm:text-md dark:text-gray-400">
            {data.description}
          </p>
          <Link
            href={"/contact"}
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary hover:-translate-y-0.5 hover:bg-primary-foreground transition focus:ring-4 focus:ring-blue-300 w-fit dark:focus:ring-blue-900"
          >
            {data.contactText}
          </Link>
        </AnimatedDiv>
        <AnimatedDiv side="right" className="w-full h-full">
          {data.content.map((item) => (
            <Accordion key={item.title} type="single" collapsible>
              <AccordionItem value={item.title} className="w-full p-8">
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.text}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </AnimatedDiv>
      </div>
    </section>
  );
}
