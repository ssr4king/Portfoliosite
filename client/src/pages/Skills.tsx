import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const technicalSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "Java", level: 90 },
    { name: "C++", level: 85 },
    { name: "Python", level: 80 },
    { name: "React", level: 75 },
  ];

  const coursework = [
    "Data Structures & Algorithms",
    "Database Management System (DBMS)",
    "Object-Oriented Programming (Java)",
    "Problem Solving"
  ];

  const softSkills = [
    "Leadership",
    "Adaptability",
    "Teamwork"
  ];

  const tools = [
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js-square" },
    { name: "Java", icon: "fab fa-java" },
    { name: "Python", icon: "fab fa-python" },
    { name: "Oracle SQL", icon: "fas fa-database" },
    { name: "Git", icon: "fab fa-git-alt" },
  ];

  const certifications = [
    {
      title: "JAVA & FRONTEND DEVELOPER",
      institution: "CODING THINKER",
      year: "2024"
    },
    {
      title: "Object Oriented Programming (Java & C++)",
      institution: "AUNPA CLASSES",
      year: "2023"
    }
  ];

  return (
    <section className="py-20 min-h-screen pt-32 theme-purple relative overflow-hidden">
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
          <h2 className="text-4xl font-bold text-gradient mb-4" data-testid="skills-title">My Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto" data-testid="skills-subtitle">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
          >
            <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-white mb-6" data-testid="technical-skills-title">Technical Skills</motion.h3>

            <div className="space-y-6" id="skills-bars">
              <motion.div variants={fadeInUp} className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Coursework</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {coursework.map((item, index) => (
                    <motion.div
                      key={`course-${index}`}
                      className="group flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-[var(--cyan-glow)] group-hover:scale-110 transition-transform">▹</span>
                      <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div className="mb-8">
                <motion.h4 variants={fadeInUp} className="text-lg font-semibold text-white mb-4">Programming Languages</motion.h4>
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={`tech-${index}`}
                    variants={fadeInUp}
                    className="mb-4 group"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium group-hover:text-[var(--cyan-glow)] transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[var(--cyan-glow)]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="skill-bar h-2 rounded-full group-hover:bg-[var(--cyan-glow)] transition-colors"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp}>
                <h4 className="text-lg font-semibold text-white mb-4">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <motion.span
                      key={`soft-${index}`}
                      className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
          >
            <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-white mb-6" data-testid="tools-title">Tools & Frameworks</motion.h3>

            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-xl text-center hover-glow card-hover transition-all cursor-pointer"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  data-testid={`tool-${index}`}
                >
                  <i className={`${tool.icon} text-4xl text-[var(--cyan-glow)] mb-4`}></i>
                  <h4 className="text-white font-semibold">{tool.name}</h4>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <motion.h4 variants={fadeInUp} className="text-xl font-semibold text-white mb-4" data-testid="certifications-title">
                Certifications & Education
              </motion.h4>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800/30 p-4 rounded-lg"
                    variants={fadeInUp}
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
      </motion.div>
    </section>
  );
};

export default Skills;
