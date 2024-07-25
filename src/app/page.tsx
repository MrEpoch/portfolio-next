import ContactSection from "@/components/sections/Home/ContactSection";
import FaqSection from "@/components/sections/Home/Faq";
import Features from "@/components/sections/Home/Features";
import HeroLanding from "@/components/sections/Home/HeroLanding";
import ProductSection from "@/components/sections/Home/ProductSection";
import { getProjects } from "@/lib/projects";

export default async function Page() {
  const projects = await getProjects();
  return (
    <div className="relative w-full min-h-screen py-4">
      <div className="max-w-screen-xl overflow-x-hidden flex-col gap-8 justify-between items-center flex mx-auto px-4 sm:px-6 lg:px-8 min-h-full">
        <HeroLanding />
        <Features />
        <FaqSection />
        <ProductSection projects={projects.slice(0, 3)} />
        <ContactSection />
      </div>
    </div>
  );
}
