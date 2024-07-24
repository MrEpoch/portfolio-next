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

export interface Project {
  slug: string;
  projectUrl: string;
  githubUrl: string;
  title: string;
  publishDate: string;
  description: string;
  technologies: string[];
  imgSrc: string;
}

export interface ContactInfo {
  contactType: string;
  contactIsLink: boolean;
  contactLink?: string;
  contactData?: string;
  Svg: any;
}
