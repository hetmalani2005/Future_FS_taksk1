import { useEffect, useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectCard, type Project } from "@/components/site/ProjectCard";
import { ContactForm } from "@/components/site/ContactForm";
import { Resume } from "@/components/site/Resume";
import { ArrowRight, Download } from "lucide-react";
import type { ProjectsResponse } from "@shared/api";

export default function Index() {
  const [projects] = useState<Project[]>([
    {
      title: "Crop Recommendation System",
      description:
        "MERN + ML app recommending optimal crops based on soil, weather, and region data.",
      tags: ["MongoDB", "Express", "React", "Node.js", "ML"],
      link: "#",
      repo: "#",
    },
    {
      title: "Tic‑Tac‑Toe Game",
      description:
        "Classic tic‑tac‑toe with clean UI and optimal move logic for single player mode.",
      tags: ["React", "TypeScript"],
      link: "#",
      repo: "#",
    },
  ]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-dvh bg-gradient-to-br from-background via-background to-background">
      <a id="home" className="sr-only">Home</a>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="container grid gap-6 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-violet-500" />
              Available for freelance & full‑time
            </div>
            <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Hi, I’m <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">Het Malani</span>.
              <br /> I build delightful web experiences.
            </h1>
            <p className="text-pretty text-muted-foreground md:text-lg">
              B.Tech student and frontend developer crafting accessible, performant applications. Full‑stack capable with Node.js and databases.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="#projects">View projects <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#resume"><Download className="mr-1 h-4 w-4" /> View resume</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {["React", "TypeScript", "Node.js", "MongoDB", "MySQL", "Python (Basic)"].map((t) => (
                <Badge key={t} variant="secondary">{t}</Badge>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-primary/20 via-fuchsia-500/10 to-violet-500/20 blur-2xl" />
            <div className="aspect-square w-full rounded-3xl border bg-card shadow-xl md:aspect-[4/3]" />
          </div>
        </section>

        {/* Achievements */}
        <section className="container py-8">
          <div className="grid gap-4 md:grid-cols-1">
            {[{k:"Experience",v:"Fresher"}].map((s) => (
              <Card key={s.k}>
                <CardContent className="flex items-center justify-between p-6">
                  <p className="text-sm text-muted-foreground">{s.k}</p>
                  <p className="text-2xl font-bold">{s.v}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="container scroll-mt-24 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
              <p className="mt-3 text-muted-foreground">
                I’m Het Malani, a B.Tech student and aspiring full‑stack developer focused on building
                clean, accessible interfaces and robust MERN backends. I enjoy solving real problems—like a
                crop recommendation system—and continuously leveling up my skills.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                <li>• Strong foundation in React, TypeScript, Node.js, Express, and MongoDB</li>
                <li>• Interested in ML integrations and data‑driven features</li>
                <li>• Open to internships and entry‑level roles</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-xl font-semibold">Quick facts</h3>
              <div className="mt-4 grid gap-3 text-sm">
                <div className="flex items-center justify-between"><span className="text-muted-foreground">Status</span><span>Fresher · B.Tech (ongoing)</span></div>
                <div className="flex items-center justify-between"><span className="text-muted-foreground">Primary stack</span><span>MERN</span></div>
                <div className="flex items-center justify-between"><span className="text-muted-foreground">Availability</span><span>Internships · Part‑time · Full‑time</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="container scroll-mt-24 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          <p className="mt-1 text-muted-foreground">Technologies I work with.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["React", "TypeScript", "JavaScript", "Node.js", "Express", "MongoDB", "MySQL", "TailwindCSS", "Python (Basic)"].map((s) => (
              <Badge key={s} variant="secondary">{s}</Badge>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="container scroll-mt-24 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-1 text-muted-foreground">A selection of recent work.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </section>

        {/* Resume (interactive) + Education */}
        <section id="resume" className="container scroll-mt-24 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Interactive Resume</h2>
              <p className="mt-1 text-muted-foreground">Experience, skills, and education at a glance.</p>
              <div className="mt-6"><Resume /></div>
            </div>
            <div id="education" className="md:pl-6">
              <h3 className="text-2xl font-semibold">Education</h3>
              <ol className="mt-4 space-y-4 border-l pl-6">
                <li>
                  <div className="-ml-[9px] h-2 w-2 rounded-full bg-primary" />
                  <p className="mt-2 font-medium">B.Tech — Ongoing</p>
                  <p className="text-sm text-muted-foreground">Currently pursuing Bachelor of Technology</p>
                </li>
                <li>
                  <div className="-ml-[9px] h-2 w-2 rounded-full bg-primary" />
                  <p className="mt-2 font-medium">10th — Oxford School of Science</p>
                  <p className="text-sm text-muted-foreground">Secondary education (Science)</p>
                </li>
                <li>
                  <div className="-ml-[9px] h-2 w-2 rounded-full bg-primary" />
                  <p className="mt-2 font-medium">12th — Vidhyaguru Science School</p>
                  <p className="text-sm text-muted-foreground">Higher secondary education (Science)</p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container scroll-mt-24 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Let’s work together</h2>
              <p className="mt-1 text-muted-foreground">Have a project in mind or just want to say hi? I’ll get back within 24 hours.</p>
              <div className="mt-6 rounded-lg border bg-card p-6">
                <ContactForm />
                <p className="mt-3 text-xs text-muted-foreground">Email notifications are sent via your SMTP settings. If not configured, messages are still received on the server.</p>
              </div>
            </div>
            <div className="md:pl-6">
              <h3 className="text-xl font-semibold">What I offer</h3>
              <ul className="mt-3 grid gap-3 text-sm text-muted-foreground">
                <li>• Responsive, accessible UI with React + Tailwind</li>
                <li>• Backend for contact & blog with Node.js</li>
                <li>• MySQL/MongoDB integration for content and forms</li>
                <li>• SEO optimization (meta, OpenGraph, structured data)</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
