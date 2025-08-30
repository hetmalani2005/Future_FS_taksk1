// Simplified database functions - no actual database connections
export interface ProjectDoc {
  title: string;
  description: string;
  tags: string[];
}

export interface ContactDoc {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

// Mock data for projects
const mockProjects: ProjectDoc[] = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and TypeScript",
    tags: ["React", "TypeScript", "TailwindCSS"]
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce application with payment integration",
    tags: ["Node.js", "React", "MongoDB"]
  }
];

export async function saveContact(doc: ContactDoc): Promise<boolean> {
  // In a real app, this would save to a database
  console.log("Contact form submission:", doc);
  return true;
}

export async function listProjects(): Promise<ProjectDoc[]> {
  // Return mock projects instead of database query
  return mockProjects;
}

export async function addProject(p: ProjectDoc): Promise<boolean> {
  // In a real app, this would save to a database
  console.log("Adding project:", p);
  return true;
}
