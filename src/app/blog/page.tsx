import BlogSection from "@/components/sections/Blog/BlogSection";
import { getPosts } from "@/lib/posts";
import { Post } from "@/types";
import { redirect } from "next/navigation";
import React from "react";
import { z } from "zod";

export default async function Page({
  searchParams,
}: {
  searchParams: { tag: string };
}) {
  let posts = await getPosts();

  if (searchParams.tag) {
    const tagValidation = z.string().min(1);
    const tagValidationResult = tagValidation.safeParse(searchParams.tag);

    if (!tagValidationResult.success) {
      redirect("/blog");
    }

    posts = posts.filter((post: Post) =>
      post.categories.includes(tagValidationResult.data),
    );
  }

  return (
    <div className="relative w-full min-h-screen py-16">
      <div className="max-w-screen-xl overflow-x-hidden flex-col gap-8 justify-between items-center flex mx-auto sm:px-6 lg:px-8 min-h-full">
        <BlogSection posts={posts} />
      </div>
    </div>
  );
}
