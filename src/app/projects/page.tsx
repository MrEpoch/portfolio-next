import ProductSection from "@/components/sections/Project/Products";
import React from "react";

export default function Page() {
  return (
    <div className="relative w-full min-h-screen">
      <div className="max-w-screen-xl flex-col py-16 gap-8 justify-between items-center flex mx-auto px-4 sm:px-6 lg:px-8 min-h-full">
        <ProductSection />
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
