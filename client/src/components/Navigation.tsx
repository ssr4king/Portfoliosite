import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Download, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import cvFile from "@assets/Shubham157CS_CV (3).pdf";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Services", path: "services" },
    { name: "Portfolio", path: "portfolio" },
    { name: "Contact", path: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  const isActive = (path: string) => activeSection === path;

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.path);
      const scrollPosition = window.scrollY + 100; // Offset for fixed navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Shubham_Kumar_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--navy)]/90 dark:bg-[var(--navy)]/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={() => scrollToSection('home')} className="flex-shrink-0">
            <h1 className="text-2xl font-bold">
              <span className="text-gray-900 dark:text-white">Port</span>
              <span className="text-[var(--cyan-glow)]">folio</span>
            </h1>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => scrollToSection(item.path)}
                  className={`nav-link px-3 py-2 text-sm font-medium transition-colors ${isActive(item.path)
                      ? "text-[var(--cyan-glow)] active"
                      : "text-gray-900 dark:text-white hover:text-[var(--cyan-glow)]"
                    }`}
                  data-testid={`nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button
              onClick={handleDownloadCV}
              className="bg-[var(--cyan-glow)] hover:bg-[var(--cyan-bright)] px-6 py-2 rounded-full text-gray-900 font-medium flex items-center space-x-2 transition-colors"
              data-testid="download-cv-desktop"
            >
              <span>Download CV</span>
              <Download className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" data-testid="mobile-menu-trigger">
                  <Menu className="w-5 h-5 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-[var(--navy)] border-gray-800">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b border-gray-800">
                    <h2 className="text-xl font-bold text-gradient">Menu</h2>
                  </div>

                  <nav className="flex-1 p-4">
                    <div className="space-y-4">
                      {navItems.map((item) => (
                        <button
                          key={item.path}
                          onClick={() => scrollToSection(item.path)}
                          className={`block py-3 px-4 rounded-lg transition-colors w-full text-left ${isActive(item.path)
                              ? "text-[var(--cyan-glow)] bg-[var(--dark-blue)]"
                              : "text-white hover:text-[var(--cyan-glow)] hover:bg-[var(--dark-blue)]"
                            }`}
                          data-testid={`mobile-nav-${item.name.toLowerCase()}`}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </nav>

                  <div className="p-4 border-t border-gray-800">
                    <Button
                      onClick={handleDownloadCV}
                      className="btn-pink w-full px-6 py-3 rounded-full text-white font-medium flex items-center justify-center space-x-2"
                      data-testid="download-cv-mobile"
                    >
                      <span>Download CV</span>
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
