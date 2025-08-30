import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden transition-colors hover:border-primary/50">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-xl">
          {project.title}
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" aria-label="Visit project">
              <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Badge key={t} variant="secondary">{t}</Badge>
          ))}
        </div>
        <div className="flex gap-2">
          {project.link && (
            <Button asChild size="sm">
              <a href={project.link} target="_blank" rel="noreferrer">Live</a>
            </Button>
          )}
          {project.repo && (
            <Button asChild variant="outline" size="sm">
              <a href={project.repo} target="_blank" rel="noreferrer">Code</a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
