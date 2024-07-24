"use client";
import { ContactInfo } from "@/types";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function ContactCard({
  contactInfo,
}: {
  contactInfo: ContactInfo;
}) {
  return (
    <>
      {contactInfo.contactIsLink ? (
        <Link
          href={contactInfo.contactLink || ""}
          className="w-full"
          target="_blank"
          rel="noopener noreferrer"
        ></Link>
      ) : (
        <Button className="w-full"></Button>
      )}
    </>
  );
}
