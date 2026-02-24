export interface ExperienceRole {
  title: string;
  description: string[];
}

export interface Experience {
  jobTitle: string;
  jobTitles?: string[];
  roles?: ExperienceRole[];
  summary?: string[];
  company: string;
  jobDates: string;
  description: string[];
  mobileName?: string;
  linkTag?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface CarouselImageData {
  path: string;
  alt: string;
  objectFit?: 'cover';
}

export interface Copy {
  hero: {
    heading: string;
    subheading: string;
    body: string;
  };
  aboutMe: {
    heading: string;
    paragraphs: string[];
    technologiesLabel: string;
    technologies: [string[], string[]];
    carouselImages: CarouselImageData[];
  };
  contact: {
    heading: string;
    bodyTemplate: string;
    buttonText: string;
    buttonTextCopied: string;
    email: string;
  };
  experience: {
    heading: string;
    viewDetails: string;
    collapse: string;
    ariaLabelTabs: string;
  };
  nav: NavLink[];
}

export interface ProjectData {
  experience: Experience[];
  copy: Copy;
}
