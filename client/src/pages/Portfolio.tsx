import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string[];
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1
      }
    }
  };

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "frontend", label: "Frontend" },
    { id: "ecommerce", label: "E-Commerce" },
  ];

  const projects: Project[] = [
    {
      id: 5,
      title: "Medicine Reminder & BMI Calculator",
      description: "A comprehensive Flutter app for medication management and health tracking",
      fullDescription: "A feature-rich mobile application built with Flutter that helps users manage their medication schedules and track their BMI. Features include custom reminders, local notifications, database storage using Hive, and a user-friendly interface for tracking health metrics.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      category: ["mobile"],
      technologies: ["Flutter", "Dart", "Hive", "Local Notifications"],
      githubUrl: "https://github.com/ssr4king/medicine_tracker",
      year: "2024"
    },
    {
      id: 6,
      title: "Expense Tracker App",
      description: "Personal finance management app for tracking daily expenses",
      fullDescription: "A mobile application designed to help users track their daily expenses and manage their personal finances. Built with Flutter, it offers an intuitive interface for adding transactions, viewing spending history, and visualizing expenses through charts.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      category: ["mobile"],
      technologies: ["Flutter", "Dart", "Hive", "Charts"],
      githubUrl: "https://github.com/ssr4king/ExpanseTracker",
      year: "2024"
    },
    {
      id: 1,
      title: "Starbucks Frontend Webpage",
      description: "Fully responsive and visually appealing Starbucks website clone",
      fullDescription: "Created a fully responsive and visually appealing Starbucks website clone as a frontend web development project. This project demonstrates proficiency in modern web development techniques, responsive design principles, and attention to detail in recreating a popular brand's web presence. The website includes navigation menu, promotional sections, and announcement areas, all built with clean, semantic HTML and styled with modern CSS techniques.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      category: ["frontend", "web"],
      technologies: ["HTML", "CSS", "FontAwesome"],
      githubUrl: "https://github.com/ssr4king/Starbucks-Project",
      year: "2024"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript",
      fullDescription: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases my skills in frontend development, including state management, responsive design, and modern UI/UX principles. The website features a clean, professional design with smooth animations and interactive elements.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      category: ["web", "frontend"],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/ssr4king/PortfolioSite",
      liveUrl: "#",
      year: "2024"
    },
    {
      id: 3,
      title: "E-Commerce Frontend Website",
      description: "Responsive E-Commerce website clone with modern UI/UX design",
      fullDescription: "Created a fully responsive and visually appealing E-Commerce website clone as a frontend web development project. This project demonstrates expertise in building commercial-grade web applications with focus on user experience, responsive design, and modern web standards. The website features product navigation, promotional sections, shopping cart functionality, and responsive design that works seamlessly across all devices.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      category: ["ecommerce", "web", "frontend"],
      technologies: ["HTML", "CSS", "FontAwesome"],
      githubUrl: "https://github.com/ssr4king/Ecommerce-website",
      year: "2023"
    },
    {
      id: 4,
      title: "Daily Global Insights",
      description: "A real-time news aggregation dashboard with search functionality",
      fullDescription: "Developed a responsive news dashboard using modern web technologies. Features include real-time news fetching from multiple sources, category-based filtering, search functionality, and a clean, dark-themed UI with smooth animations. Built with React, TypeScript, and Tailwind CSS, this project demonstrates proficiency in API integration and state management.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      category: ["frontend", "web"],
      technologies: ["React", "TypeScript", "Tailwind CSS", "NewsAPI"],
      githubUrl: "https://github.com/ssr4king/Daily-Global-Insights",
      liveUrl: "https://daily-scoop--csshubham157.replit.app/",
      year: "2024"
    }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section className="py-20 min-h-screen pt-32 theme-orange relative overflow-hidden">
      {/* Animated Background Glows */}
      <motion.div
        className="absolute top-40 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-[100px]"
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"
        animate={{
          y: [0, -40, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-gradient mb-4" data-testid="portfolio-title">My Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto" data-testid="portfolio-subtitle">
            A showcase of my recent projects and creative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={fadeInUp}
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 font-semibold rounded-full transition-all ${activeFilter === filter.id
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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="card-hover h-full"
              data-testid={`project-${project.id}`}
            >
              <div
                className="bg-gray-800/50 rounded-xl overflow-hidden hover-glow backdrop-blur-sm transition-colors cursor-pointer h-full flex flex-col border border-gray-700/50 hover:border-[var(--cyan-glow)]/50"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    data-testid={`project-image-${project.id}`}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
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
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white" data-testid={`project-title-${project.id}`}>
                      {project.title}
                    </h3>
                    <span className="text-sm text-[var(--cyan-glow)]">{project.year}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 flex-1" data-testid={`project-description-${project.id}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[var(--cyan-glow)]/20 text-[var(--cyan-glow)] text-xs rounded-full"
                        data-testid={`project-tech-${project.id}-${techIndex}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          variants={fadeInUp}
        >
          <Button
            className="px-8 py-3 bg-[var(--cyan-glow)] text-[var(--navy)] font-semibold rounded-full hover-glow transition-all"
            data-testid="view-all-projects"
          >
            View All Projects
          </Button>
        </motion.div>
      </motion.div>

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
