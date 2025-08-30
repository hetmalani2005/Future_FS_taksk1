import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="text-lg font-bold">
          <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">Het Malani</span>
        </a>
        <nav className={cn("hidden gap-6 md:flex")}> 
          <a className="text-sm text-muted-foreground hover:text-foreground" href="#about">About</a>
          <a className="text-sm text-muted-foreground hover:text-foreground" href="#projects">Projects</a>
          <a className="text-sm text-muted-foreground hover:text-foreground" href="#skills">Skills</a>
          <a className="text-sm text-muted-foreground hover:text-foreground" href="#education">Education</a>
          <a className="text-sm text-muted-foreground hover:text-foreground" href="#resume">Resume</a>
          <a className="text-sm text-muted-foreground hover:text-foreground" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
          <Button className="hidden md:inline-flex" asChild>
            <a href="#contact">Hire me</a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            <Menu />
          </Button>
        </div>
      </div>
      {open && (
        <div className="border-t md:hidden">
          <nav className="container grid gap-2 py-3">
            <a onClick={() => setOpen(false)} className="text-sm" href="#about">About</a>
            <a onClick={() => setOpen(false)} className="text-sm" href="#projects">Projects</a>
            <a onClick={() => setOpen(false)} className="text-sm" href="#skills">Skills</a>
            <a onClick={() => setOpen(false)} className="text-sm" href="#education">Education</a>
            <a onClick={() => setOpen(false)} className="text-sm" href="#resume">Resume</a>
            <a onClick={() => setOpen(false)} className="text-sm" href="#contact">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
