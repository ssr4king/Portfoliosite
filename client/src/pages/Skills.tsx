import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Skills = () => {
  const [inView, setInView] = useState(false);

  const technicalSkills = [
    { name: "JavaScript", level: 95 },
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "CSS/SCSS", level: 95 },
  ];

  const tools = [
    { name: "React", icon: "fab fa-react" },
    { name: "Vue.js", icon: "fab fa-vuejs" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "MongoDB", icon: "fas fa-database" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "Docker", icon: "fab fa-docker" },
  ];

  const certifications = [
    {
      title: "Full Stack Web Development",
      institution: "University of Technology",
      year: "2018"
    },
    {
      title: "AWS Certified Developer",
      institution: "Amazon Web Services",
      year: "2022"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById("skills-bars");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gradient mb-4" data-testid="skills-title">My Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto" data-testid="skills-subtitle">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6" data-testid="technical-skills-title">Technical Skills</h3>
            
            <div className="space-y-6" id="skills-bars">
              {technicalSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  data-testid={`skill-${index}`}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-[var(--cyan-glow)]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <motion.div 
                      className="skill-bar h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.2 * index }}
                      data-testid={`skill-bar-${index}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Tools & Technologies */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6" data-testid="tools-title">Tools & Frameworks</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-xl text-center hover-glow card-hover transition-all cursor-pointer"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  data-testid={`tool-${index}`}
                >
                  <i className={`${tool.icon} text-4xl text-[var(--cyan-glow)] mb-4`}></i>
                  <h4 className="text-white font-semibold">{tool.name}</h4>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4" data-testid="certifications-title">
                Certifications & Education
              </h4>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-800/30 p-4 rounded-lg"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * index }}
                    data-testid={`certification-${index}`}
                  >
                    <h5 className="text-[var(--cyan-glow)] font-semibold">{cert.title}</h5>
                    <p className="text-gray-400 text-sm">{cert.institution} • {cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
