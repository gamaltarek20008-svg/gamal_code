import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, X } from "lucide-react";

const projects = [
  { id: 1, image: "https://gamaltare.github.io/GamalTarek/img/1.png", title: "Project 1", category: "web" },
  { id: 2, image: "https://gamaltare.github.io/GamalTarek/img/2.png", title: "Project 2", category: "design" },
  { id: 3, image: "https://gamaltare.github.io/GamalTarek/img/3.png", title: "Project 3", category: "web" },
  { id: 4, image: "https://gamaltare.github.io/GamalTarek/img/4.png", title: "Project 4", category: "design" },
  { id: 5, image: "https://gamaltare.github.io/GamalTarek/img/5.png", title: "Project 5", category: "web" },
  { id: 6, image: "https://gamaltare.github.io/GamalTarek/img/6.png", title: "Project 6", category: "design" },
  { id: 7, image: "https://gamaltare.github.io/GamalTarek/img/7.png", title: "Project 7", category: "web" },
  { id: 8, image: "https://gamaltare.github.io/GamalTarek/img/8.png", title: "Project 8", category: "design" },
  { id: 9, image: "https://gamaltare.github.io/GamalTarek/img/9.png", title: "Project 9", category: "web" },
];

const categories = ["all", "web", "design"];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-20 md:py-32"
      data-testid="section-portfolio"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Here are some of my recent projects. Each project represents my dedication 
            to creating beautiful and functional websites.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="capitalize"
                data-testid={`button-filter-${category}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden cursor-pointer hover-elevate"
              onClick={() => setSelectedProject(project)}
              data-testid={`portfolio-card-${project.id}`}
            >
              <div className="relative aspect-video overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="text-center text-primary-foreground">
                    <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-medium">View Project</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground capitalize">{project.category}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedProject?.title || "Project Preview"}
          </DialogTitle>
          {selectedProject && (
            <div className="relative">
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
                data-testid="button-close-modal"
              >
                <X className="w-4 h-4" />
              </Button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto"
                data-testid="img-modal-project"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
