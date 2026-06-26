export interface Section {
  id: string;
  label: string;
  shortLabel: string;
}

export const SECTIONS: Section[] = [
  { id: 'experience', label: 'Experience', shortLabel: 'Exp' },
  { id: 'skills', label: 'Skills', shortLabel: 'Skills' },
  { id: 'projects', label: 'OSS Projects', shortLabel: 'Projects' },
  { id: 'contact', label: 'Contact', shortLabel: 'Contact' },
];
