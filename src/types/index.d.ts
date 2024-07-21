export interface BlogHeading {
  heading: string;
  tags: string[];
  category: string;
  createdAt: string;
}

export interface Post {
  slug: string;
  title: string;
  publishDate: string;
  categories: Category[];
}
