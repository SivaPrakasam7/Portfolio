/// <reference types="vite/client" />

interface Child {
  children: React.ReactNode;
}

interface projects {
  image: string;
  title: string;
  collaborators: string[];
  content: string;
  github: string;
  deployed_url?: string;
  framework: string;
  time: string;
  maintanance?: boolean;
}

interface experience {
  logo: string;
  position: string;
  time: string;
  company: string;
  description: string;
}
