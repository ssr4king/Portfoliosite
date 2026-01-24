import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";
import TypeWriter from "@/components/TypeWriter";
import profileImage from "@assets/whatsapp3.png";

const Home = () => {
  const socialLinks = [
    { icon: "fab fa-github", href: "https://github.com/ssr4king", label: "GitHub" },
    { icon: "fab fa-twitter", href: "https://x.com/Shubhams_Stwt?t=k7YrLLNZysYZ5oYlLeNGEQ&s=09", label: "Twitter" },
    { icon: "fab fa-instagram", href: "https://www.instagram.com/singhshubham0001?igsh=bXR4eWdkdDYwc243", label: "Instagram" },
    { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/shubham-singh-rajput-876580243/", label: "LinkedIn" },
  ];

  const stats = [
    { value: 10, label: "Projects", sublabel: "completed" },
    { value: 8, label: "Technologies", sublabel: "mastered" },
    { value: 100, label: "DSA Problems", sublabel: "solved" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Profile Image Column */}
          <motion.div
            className="flex justify-center lg:justify-start order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96" data-testid="profile-image-container">
              <div className="profile-blob">
                <img
                  src={profileImage}
                  alt="Shubham Kumar - Frontend Developer"
                  data-testid="profile-image"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="text-center lg:text-left order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div>
                <motion.h2
                  className="text-lg sm:text-xl text-gray-300 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  data-testid="greeting-text"
                >
                  Hello, I'm
                </motion.h2>
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  data-testid="main-name"
                >
                  Shubham Kumar
                </motion.h1>
                <motion.div
                  className="text-xl sm:text-2xl lg:text-3xl text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  data-testid="role-text"
                >
                  And I'm a{" "}
                  <TypeWriter texts={["App Developer", "Full Stack Developer", "Web Developer", "Problem Solver"]} />
                </motion.div>
              </div>

              <motion.p
                className="text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                data-testid="description-text"
              >
                I am a passionate Computer Science Engineering graduate, and I build real-world applications with a strong focus on clean code and problem-solving.
                From learning the basics of web development to building complete projects, my journey has been driven by continuous learning and hands-on experience.
                I enjoy creating functional, user-friendly digital products and growing as a developer with every project.
              </motion.p>

              {/* Social Media Icons */}
              <motion.div
                className="flex justify-center lg:justify-start space-x-5 my-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                data-testid="social-links"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="social-icon w-12 h-12 bg-[#0F172A] rounded-xl flex items-center justify-center text-gray-400 border border-gray-800 relative overflow-hidden group"
                    whileHover={{
                      y: -5,
                      color: "white",
                      borderColor: "#3b82f6",
                    }}
                    whileTap={{ scale: 0.95 }}
                    data-testid={`social-${social.label.toLowerCase()}`}
                  >
                    {/* Inner Glow on Hover */}
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-[#3b82f6] blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <i className={`${social.icon} text-lg relative z-10`}></i>
                  </motion.a>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                data-testid="cta-buttons"
              >
                <Button
                  className="px-8 py-3 bg-[var(--cyan-glow)] text-[var(--navy)] font-semibold rounded-full hover-glow transition-all"
                  data-testid="hire-me-button"
                >
                  Hire Me
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="btn-outline px-8 py-3 font-semibold rounded-full"
                  data-testid="contact-me-button"
                >
                  Contact Me
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          className="mt-20 pt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="statistics-section"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`stat-${index}`}
              >
                <AnimatedCounter target={stat.value} />
                <div className="text-gray-400 mt-2">
                  <div className="text-sm">{stat.label}</div>
                  <div className="text-sm">{stat.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
