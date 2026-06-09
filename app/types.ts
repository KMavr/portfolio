export type ProjectLink = {
  label: 'npm' | 'GitHub' | 'Live';
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  slug?: string;
};

export type ProjectDetailBlock =
  | { type: 'prose'; text: string }
  | { type: 'code'; code: string }
  | { type: 'list'; items: string[] };

export type ProjectDetailSection = {
  heading: string;
  blocks: ProjectDetailBlock[];
};

export type ProjectDetail = {
  slug: string;
  tagline: string;
  sections: ProjectDetailSection[];
};

export type Role = {
  title: string;
  company: string;
  dates: string;
  location: string;
  summary: string;
  companyHref?: string;
};

export type SkillGroup = {
  label: string;
  skills: string[];
};

export type SocialLink = {
  label: 'GitHub' | 'LinkedIn';
  href: string;
};
