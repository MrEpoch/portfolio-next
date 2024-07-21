import { Post } from "@/types";
import { readdir } from "fs/promises";

export async function getPosts(): Promise<Post[]> {
  // Retrieve slugs from post routes
  const slugs = (
    await readdir("./src/app/(blog)/blog/(posts)", { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  // Retrieve metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(
        `../app/(blog)/blog/(posts)/${name}/page.mdx`
      );
      return { slug: name, ...metadata };
    }),
  );

  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}
