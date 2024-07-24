import BlogSection from "@/components/sections/Blog/BlogSection";
import { getPosts } from "@/lib/posts";
import { Post } from "@/types";
import React from "react";

export default async function Page({ searchParams }) {
  let posts = await getPosts();
  console.log(searchParams);
  if (searchParams.tag) {
    posts = posts.filter((post: Post) =>
      post.categories.includes(searchParams.tag),
    );
  }

  return (
    <div className="relative w-full min-h-screen py-16">
      <div className="max-w-screen-xl flex-col gap-8 justify-between items-center flex mx-auto sm:px-6 lg:px-8 min-h-full">
        <BlogSection posts={posts} />
      </div>
    </div>
  );
}
