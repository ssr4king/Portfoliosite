import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  year: string;
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "frontend", label: "Frontend" },
    { id: "ecommerce", label: "E-Commerce" },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Starbucks Frontend Webpage",
      description: "Fully responsive and visually appealing Starbucks website clone",
      fullDescription: "Created a fully responsive and visually appealing Starbucks website clone as a frontend web development project. This project demonstrates proficiency in modern web development techniques, responsive design principles, and attention to detail in recreating a popular brand's web presence. The website includes navigation menu, promotional sections, and announcement areas, all built with clean, semantic HTML and styled with modern CSS techniques.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      category: "frontend",
      technologies: ["HTML", "CSS", "FontAwesome"],
      githubUrl: "#",
      year: "2024"
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description: "A professionally crafted portfolio highlighting career achievements and skills",
      fullDescription: "A professionally crafted Portfolio website that highlights career achievements, skills, and projects in a visually appealing format. This web development project showcases modern frontend development practices, responsive design, and user experience considerations. The portfolio includes interactive elements, smooth animations, and a clean, professional design that effectively communicates technical skills and project experience.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript", "Basic React", "FontAwesome"],
      liveUrl: "#",
      year: "2024"
    },
    {
      id: 3,
      title: "E-Commerce Frontend Website",
      description: "Responsive E-Commerce website clone with modern UI/UX design",
      fullDescription: "Created a fully responsive and visually appealing E-Commerce website clone as a frontend web development project. This project demonstrates expertise in building commercial-grade web applications with focus on user experience, responsive design, and modern web standards. The website features product navigation, promotional sections, shopping cart functionality, and responsive design that works seamlessly across all devices.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      category: "ecommerce",
      technologies: ["HTML", "CSS", "FontAwesome"],
      githubUrl: "#",
      year: "2024"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gradient mb-4" data-testid="portfolio-title">My Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto" data-testid="portfolio-subtitle">
            A showcase of my recent projects and creative solutions
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 font-semibold rounded-full transition-all ${
                activeFilter === filter.id
                  ? "bg-[var(--cyan-glow)] text-[var(--navy)] hover-glow"
                  : "bg-gray-800 text-white hover-glow"
              }`}
              data-testid={`filter-${filter.id}`}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="card-hover"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              layout
              data-testid={`project-${project.id}`}
            >
              <div 
                className="bg-gray-800/50 rounded-xl overflow-hidden hover-glow backdrop-blur-sm transition-all cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    data-testid={`project-image-${project.id}`}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-[var(--cyan-glow)] rounded-full hover:bg-[var(--cyan-bright)] transition-colors"
                        data-testid={`project-live-${project.id}`}
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                        data-testid={`project-github-${project.id}`}
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white" data-testid={`project-title-${project.id}`}>
                      {project.title}
                    </h3>
                    <span className="text-sm text-[var(--cyan-glow)]">{project.year}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4" data-testid={`project-description-${project.id}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[var(--cyan-glow)]/20 text-[var(--cyan-glow)] text-xs rounded-full"
                        data-testid={`project-tech-${project.id}-${techIndex}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            className="px-8 py-3 bg-[var(--cyan-glow)] text-[var(--navy)] font-semibold rounded-full hover-glow transition-all"
            data-testid="view-all-projects"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white mb-4">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img 
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[var(--cyan-glow)]/20 text-[var(--cyan-glow)] text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-[var(--cyan-glow)] font-semibold">{selectedProject.year}</span>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Project Details</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>
                
                <div className="flex gap-4">
                  {selectedProject.liveUrl && (
                    <Button 
                      asChild
                      className="bg-[var(--cyan-glow)] text-[var(--navy)] hover:bg-[var(--cyan-bright)]"
                    >
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live Site
                      </a>
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button 
                      asChild
                      variant="outline"
                      className="border-gray-600 text-white hover:bg-gray-800"
                    >
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
