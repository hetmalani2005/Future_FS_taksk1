export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-3 py-8 text-center md:flex-row md:text-left">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Het Malani. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a className="hover:underline" href="#home">Home</a>
          <a className="hover:underline" href="#projects">Projects</a>
          <a className="hover:underline" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
