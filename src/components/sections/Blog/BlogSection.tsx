import { AnimatedDiv } from "@/components/shared/AnimatedElements";
import BlogCard from "@/components/shared/BlogCard";
import { Separator } from "@/components/ui/separator";
import { Post } from "@/types";
import React from "react";

export default function BlogSection({ posts }: { posts: Post[] }) {
  return (
    <section className="min-h-screen w-full flex items-center gap-4 px-8 flex-col">
      <AnimatedDiv
        side="top"
        className="flex px-8 flex-col md:py-4 py-16 w-full md:items-start items-center justify-center gap-8 h-full"
      >
        <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Můj blog
        </h1>
      </AnimatedDiv>
      <Separator className="my-8 bg-black h-[2px]" />
      <div
        className="relative z-[0] px-4 mx-auto max-w-screen-2xl flex flex-col
        overflow-hidden items-center justify-center justify-items-center text-center lg:py-16 sm:grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-y-6
        sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-4"
      >
        {posts.map((item, i) => (
          <BlogCard key={i} data={item} i={i} />
        ))}
      </div>
    </section>
  );
}
