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
