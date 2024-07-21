import ContactSection from "@/components/sections/Home/ContactSection";
import Landing from "@/components/sections/Home/Features";
import SpecificService from "@/components/sections/Services/SpecificService";
import {
  AudioLines,
  Cable,
  Cloud,
  Component,
  Gauge,
  MonitorSmartphone,
} from "lucide-react";
import React from "react";

const services = [
  {
    heading: "Animace",
    description: `
     Mám zkušenosti s výrobou nádherných a rychlých animací webových stránek. 
     Většina animací co používám jsou minimalistické aby padli pěkně do oka. Snažím se udržet
    styl minimalistických animací. Většina animací je v JavaScriptu a jsou optimalizované pro výkon.
    `,
    svg1: Cloud,
    svg2: AudioLines,
    dlHeading: "Rychlé",
    dlHeading2: "Přitažlivé",
    dlText: "Rychlé a minimalistké animace s cílem potěšení očí uživatele.",
    dlText2: "Dokonale navazující animace zapadající do stránek.",
    mainImg: "/assets/polaroid.svg",
  },
  {
    heading: "Design",
    description: `
      Velká část mých designu je minimalistická, spoléhají na symetrii textu, sekcí a obrázků.
      Vybírám hlavní barvu a pak její odstíny, to kombinuji buď se světlím designem bílé barvy nebo
      tmavým černé barvy. Design je postavenym způsobem aby byl responsivní pro mobilní i desktopová
      zařízení.
    `,
    svg1: Component,
    svg2: MonitorSmartphone,
    dlHeading: "Minimalistická",
    dlHeading2: "Responsivní",
    dlText:
      "Symetrický a minimalistícký design s důrazem na obsah textu a obrázků.",
    dlText2: "Responsivní design na mobilní i desktopová zařízení",
    mainImg: "/assets/undraw-design.svg",
  },
  {
    heading: "Vývoj",
    description: `
      Vývoj rychlých a optimalizovaných webových stránek za pomocí next.js frameworku.
      Rychlý načítání webů, optimalizace obrázků. Moderní aplikace s výkonem na prvním
      místě. Web je první načte na serveru a uživatel dostane už plně načtenou stránku.
      Optimalizované SEO a výkon. Psaní HTML způsobem na lehkou indexaci stránek pro vyšší SEO výsledky.
    `,
    svg1: Gauge,
    svg2: Cable,
    dlHeading: "Rychlost",
    dlHeading2: "Optimalizované",
    dlText:
      "Rychlé načítající se weby, psané způsobem pro lehkou indexaci stránek.",
    dlText2:
      "Optimalizované obrázky i soubory pro zrychlení a zlechčení velikosti webu.",
    mainImg: "/assets/undraw-code.svg",
  },
];

export default function Page() {
  return (
    <div className="relative w-full min-h-screen py-16">
      <div className="max-w-screen-xl flex-col gap-8 justify-between items-center flex mx-auto px-4 sm:px-6 lg:px-8 min-h-full">
        <Landing />
        {services.map((data, index) => (
          <SpecificService i={index} key={index} data={data} />
        ))}
        <ContactSection />
      </div>
    </div>
  );
}
