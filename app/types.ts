export type ProjectLink = {
  label: 'npm' | 'GitHub' | 'Live';
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
};

export type Role = {
  title: string;
  company: string;
  dates: string;
  location: string;
  summary: string;
  companyHref?: string;
};
