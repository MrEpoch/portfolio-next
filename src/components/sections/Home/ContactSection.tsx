import { AnimatedDiv } from "@/components/shared/AnimatedElements";
import React from "react";

import dynamic from "next/dynamic";

const DynamicContactForm = dynamic(
  () => import("@/components/shared/ContactForm"),
  {
    ssr: false,
  },
);

export default function ContactSection({ isHeading1 = false }) {
  return (
    <section className="min-h-screen py-16 w-full flex h-full">
      <AnimatedDiv className="justify-center items-center flex-1 flex gap-8 flex-col mx-auto px-4 sm:px-6 lg:px-8 min-h-full">
        {isHeading1 ? (
          <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Kontakt
          </h1>
        ) : (
          <h2 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Kontakt
          </h2>
        )}
        <p className="text-sm font-normal text-gray-500 lg:text-lg sm:text-md dark:text-gray-400 text-center">
          Chcete vytvořit nové webové stránky? Chcete vytvořit moderní design
          pro web nebo animace? Neváhej a kontaktuj mě! Mám zkušenosti s vývojem
          moderních webů spolu s Next.js a tailwindcss, kde vytvářím nádherné
          animace.
        </p>
        <div className="sm:p-8 p-4 mx-auto max-w-xl w-full bg-white flex items-center font-[sans-serif] shadow-lg rounded-lg">
          <DynamicContactForm />
        </div>
      </AnimatedDiv>
    </section>
  );
}
