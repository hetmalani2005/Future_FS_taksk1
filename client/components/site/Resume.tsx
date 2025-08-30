import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export function Resume() {
  return (
    <Tabs defaultValue="experience" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
      </TabsList>
      <TabsContent value="experience" className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold">Fresher — B.Tech (Current)</h4>
          <p className="text-muted-foreground">B.Tech student building real projects including a Crop Recommendation System and Tic‑Tac‑Toe game. Seeking internships and entry‑level opportunities in frontend/full‑stack development.</p>
        </div>
      </TabsContent>
      <TabsContent value="skills">
        <div className="flex flex-wrap gap-2">
          {["React", "TypeScript", "Node.js", "Express", "MongoDB", "MySQL", "TailwindCSS", "Zod", "Vitest", "Vite", "Python (Basic)"].map((s) => (
            <Badge key={s} variant="secondary">{s}</Badge>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="education" className="space-y-3">
        <div>
          <h4 className="text-lg font-semibold">B.Tech — Ongoing</h4>
          <p className="text-muted-foreground">Currently pursuing Bachelor of Technology.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">10th — Oxford School of Science</h4>
          <p className="text-muted-foreground">Completed secondary education with a focus on science.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">12th — Vidhyaguru Science School</h4>
          <p className="text-muted-foreground">Higher secondary education (Science stream).</p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
