import { Project } from "@/types";
import { readdir } from "fs/promises";

export async function getProjects(): Promise<Project[]> {
  // Retrieve slugs from post routes
  const slugs = (
    await readdir("./src/app/projects/(projects)", { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  // Retrieve metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(
        `../app/projects/(projects)/${name}/page.mdx`
      );
      return { slug: name, ...metadata };
    }),
  );

  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}
