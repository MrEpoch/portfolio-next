import { getPosts } from "@/lib/posts";
import { getProjects } from "@/lib/projects";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();
  const posts = await getPosts();
  return [
    {
      url: "https://portfolio.stencukpage.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://portfolio.stencukpage.com/services",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://portfolio.stencukpage.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://portfolio.stencukpage.com/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://portfolio.stencukpage.com/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...projects.map((project: any) => ({
      url: `https://portfolio.stencukpage.com/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "never" as any,
      priority: 0.5,
    })),
    ...posts.map((post: any) => ({
      url: `https://portfolio.stencukpage.com/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.5,
    })),
  ];
}
