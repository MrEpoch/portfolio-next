import React from "react";
import { BlogHeading as BlogHeadingTS } from "@/types/index";
import Link from "next/link";
import { Separator } from "../ui/separator";

export default function BlogHeading({
  BlogHeading,
}: {
  BlogHeading: BlogHeadingTS;
}) {
  return (
    <header>
      <div className="">
        <Link href="/blog" className="!text-primary !text-sm !font-bold">
          Blog
        </Link>
        <h1>{BlogHeading.heading}</h1>
        <div className="py-5 text-sm font-regular text-gray-900 flex flex-wrap w-full gap-4 items-center">
          <span className="flex flex-row items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              x="0"
              y="0"
              fill="currentColor"
              enableBackground="new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <path d="M256 0C114.837 0 0 114.837 0 256s114.837 256 256 256 256-114.837 256-256S397.163 0 256 0zm21.333 256c0 11.797-9.536 21.333-21.333 21.333h-85.333c-11.797 0-21.333-9.536-21.333-21.333s9.536-21.333 21.333-21.333h64v-128c0-11.797 9.536-21.333 21.333-21.333s21.333 9.536 21.333 21.333V256z"></path>
            </svg>
            <span className="">{BlogHeading.createdAt}</span>
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {BlogHeading.tags.map((tag, i) => (
              <Link
                key={i}
                href={`/blog?tag=${tag}`}
                className="flex bg-white shadow-lg !text-primary py-2 px-4 rounded-full gap-2 justify-center flex-row items-center"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Separator className="w-full h-[1px] bg-black" />
    </header>
  );
}
