export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
};

export type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
};

export type Experience = {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
};

export type SocialLink = {
  label: string;
  url: string;
  icon: string;
};
