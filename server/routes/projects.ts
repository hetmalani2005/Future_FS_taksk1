import type { RequestHandler } from "express";
import { addProject, listProjects, type ProjectDoc } from "./db";
import { z } from "zod";

const projectSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().min(1).max(2000),
  tags: z.array(z.string()).default([]),
});

export const listProjectsRoute: RequestHandler = async (_req, res) => {
  try {
    const rows = await listProjects();
    if (!rows || rows.length === 0) {
      return res.json({
        projects: [
          {
            title: "Crop Recommendation System",
            description: "MERN + ML app recommending optimal crops based on soil, weather, and region data.",
            tags: ["MongoDB", "Express", "React", "Node.js", "ML"],
            link: "#",
            repo: "#",
          },
          {
            title: "Tic‑Tac‑Toe Game",
            description: "Classic tic‑tac‑toe with clean UI and optimal move logic for single player mode.",
            tags: ["React", "TypeScript"],
            link: "#",
            repo: "#",
          },
          {
            title: "AI‑Powered Portfolio",
            description: "Personal site with headless CMS, MDX blog, and AI‑generated case studies.",
            tags: ["React", "Vite", "Tailwind"],
            link: "#",
            repo: "#",
          },
        ],
      });
    }
    return res.json({ projects: rows });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Failed to load projects" });
  }
};

export const addProjectRoute: RequestHandler = async (req, res) => {
  const parsed = projectSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid input", details: parsed.error.flatten() });
  try {
    // Ensure all required fields are present
    const projectData: ProjectDoc = {
      title: parsed.data.title,
      description: parsed.data.description,
      tags: parsed.data.tags || [],
    };
    await addProject(projectData);
    return res.json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Failed to save" });
  }
};
