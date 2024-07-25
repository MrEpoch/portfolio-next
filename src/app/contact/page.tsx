import ContactsTable from "@/components/sections/Contact/ContactTable";
import ContactSection from "@/components/sections/Home/ContactSection";
import FaqSection from "@/components/sections/Home/Faq";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio kontakt",
  description:
    "Kontakt na Alexandra Stenčuka, vývojář, freelancer, email a github.",
};

export default function Page() {
  return (
    <div className="relative w-full min-h-screen py-4">
      <div className="max-w-screen-xl flex-col gap-8 justify-between items-center flex mx-auto px-4 sm:px-6 lg:px-8 min-h-full">
        <ContactSection isHeading1 />
        <ContactsTable />
        <FaqSection />
      </div>
    </div>
  );
}
