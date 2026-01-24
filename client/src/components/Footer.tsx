import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
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
    }
  };

  const socialLinks = [
    { icon: "fab fa-github", href: "https://github.com/ssr4king", label: "Github" },
    { icon: "fab fa-twitter", href: "https://x.com/Shubhams_Stwt?t=k7YrLLNZysYZ5oYlLeNGEQ&s=09", label: "Twitter" },
    { icon: "fab fa-instagram", href: "https://www.instagram.com/singhshubham0001?igsh=bXR4eWdkdDYwc243", label: "Instagram" },
    { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/shubham-singh-rajput-876580243/", label: "LinkedIn" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <motion.footer
      className="bg-[#020617] border-t border-gray-800 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Top Glowing Beam Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent blur-[2px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[4px] bg-[#3b82f6] blur-[10px] opacity-50" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div className="col-span-1 md:col-span-2" variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-6">
              <span className="text-white">Port</span>
              <span className="text-[#3b82f6]">folio</span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed text-base">
              Passionate web developer dedicated to creating exceptional digital experiences
              through innovative design and cutting-edge technology.
            </p>
            <div className="flex space-x-5">
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
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Inner Glow on Hover */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-[#3b82f6] blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <i className={`${social.icon} text-lg relative z-10`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-6 text-xl">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <motion.button
                    onClick={() => scrollToSection(link.path)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group w-full text-left"
                    whileHover={{ x: 5 }}
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                  >
                    <span className="w-0 h-[2px] bg-[#3b82f6] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300 rounded-full opacity-0 group-hover:opacity-100" />
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-6 text-xl">Contact Info</h4>
            <ul className="space-y-5 text-gray-400">
              <motion.li
                className="flex items-start space-x-4 group cursor-default"
                data-testid="footer-email"
                whileHover={{ x: 5 }}
              >
                <div className="mt-1 w-5 flex-shrink-0 flex items-center justify-center">
                  <i className="fas fa-envelope text-[#3b82f6] text-lg group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all"></i>
                </div>
                <span className="flex-1 text-sm group-hover:text-white transition-colors pt-0.5">s.shubham999000@gmail.com</span>
              </motion.li>
              <motion.li
                className="flex items-center space-x-4 group cursor-default"
                data-testid="footer-phone"
                whileHover={{ x: 5 }}
              >
                <div className="w-5 flex-shrink-0 flex items-center justify-center">
                  <i className="fas fa-phone text-[#3b82f6] text-lg group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all"></i>
                </div>
                <span className="group-hover:text-white transition-colors">6265037768</span>
              </motion.li>
              <motion.li
                className="flex items-center space-x-4 group cursor-default"
                data-testid="footer-location"
                whileHover={{ x: 5 }}
              >
                <div className="w-5 flex-shrink-0 flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-[#3b82f6] text-lg group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all"></i>
                </div>
                <span className="group-hover:text-white transition-colors">Patna, Bihar</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="relative mt-20 pt-8 text-center"
          variants={itemVariants}
        >
          {/* Bottom Glowing Divider */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6]/50 to-transparent blur-[1px]" />

          <p className="text-gray-500 text-sm flex items-center justify-center gap-1" data-testid="footer-copyright">
            © {currentYear} Portfolio. All rights reserved. Built with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="inline-block text-red-500 mx-1"
            >
              <Heart fill="currentColor" size={14} />
            </motion.span>
            by Shubham Kumar.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
