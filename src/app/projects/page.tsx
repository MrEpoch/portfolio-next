import ProductSection from "@/components/sections/Project/Products";
import { getProjects } from "@/lib/projects";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio Projekty",
  description:
    "Projekty mého portfolio, kódové projekty s linky na jejich popisek.",
};

export default async function Page() {
  const projects = await getProjects();

  return (
    <div className="relative w-full min-h-screen">
      <div className="max-w-screen-xl overflow-x-hidden flex-col py-16 gap-8 justify-between items-center flex mx-auto px-4 sm:px-6 lg:px-8 min-h-full">
        <ProductSection projects={projects} />
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
