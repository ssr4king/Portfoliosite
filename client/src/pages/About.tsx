import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import profileImage from "@assets/whatsapp3.png";

const About = () => {
  const contactInfo = [
    { label: "Email:", value: "s.shubham999000@gmail.com", icon: "fas fa-envelope" },
    { label: "Phone:", value: "6265037768", icon: "fas fa-phone" },
    { label: "Location:", value: "Patna", icon: "fas fa-map-marker-alt" },
    { label: "Availability:", value: "Available", icon: "fas fa-calendar-check" },
  ];

  const approaches = [
    "User-centered design thinking",
    "Agile development methodology",
    "Performance optimization focus",
    "Continuous learning and adaptation"
  ];

  return (
    <section
      className="py-20 min-h-screen pt-32 theme-green relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, transparent, #000000 150px, #000000 90%, transparent)' }}
    >
      {/* Subtle Top Glow Band */}
      <div className="absolute top-0 left-0 w-full h-[50px] bg-gradient-to-b from-[var(--cyan-glow)]/20 to-transparent blur-xl pointer-events-none z-20" />

      {/* Flash Effect Overlay */}
      <motion.div
        className="absolute inset-0 bg-white pointer-events-none z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.15, 0] }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gradient mb-4" data-testid="about-title">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto" data-testid="about-subtitle">
            Discover more about my journey, passion, and the skills that drive my work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Profile Image Column */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96" data-testid="about-profile-image-container">
              <div className="profile-blob">
                <img
                  src={profileImage}
                  alt="Shubham Kumar - About me"
                  data-testid="about-profile-image"
                />
              </div>
            </div>

          </motion.div>


          {/* Content Column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-4xl font-bold mb-2" data-testid="about-heading">
                About <span className="text-gradient-pink">Me</span>
              </h3>
              <h4 className="text-2xl font-semibold text-[var(--cyan-glow)] mb-6">App Developer</h4>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm" data-testid="about-description">
              I am a dedicated Computer Science Engineering graduate from IES College of Technology Bhopal with a
              passion for frontend web development. I have completed my B.Tech with a CGPA of 7.60, and I specialize
              in creating responsive and visually appealing web applications.
              <br /><br />
              My technical expertise includes proficiency in HTML, CSS, JavaScript, Java, C++, and basic React.
              I have hands-on experience with Oracle SQL and have successfully completed multiple frontend projects
              including Starbucks webpage clone, E-commerce website, and my personal portfolio. I have solved over
              100+ coding problems on various platforms, demonstrating strong problem-solving skills in Data
              Structures and Algorithms. I believe in continuous learning and staying updated with the latest
              web development trends and technologies.
            </p>

            {/* Social Links */}
            <div className="flex space-x-5 mt-6">
              {[
                { icon: "fab fa-github", href: "https://github.com/ssr4king", label: "GitHub" },
                { icon: "fab fa-twitter", href: "https://x.com/Shubhams_Stwt?t=k7YrLLNZysYZ5oYlLeNGEQ&s=09", label: "Twitter" },
                { icon: "fab fa-instagram", href: "https://www.instagram.com/singhshubham0001?igsh=bXR4eWdkdDYwc243", label: "Instagram" },
                { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/shubham-singh-rajput-876580243/", label: "LinkedIn" }
              ].map((social, index) => (
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
                  data-testid={`about-social-${social.label.toLowerCase()}`}
                >
                  {/* Inner Glow on Hover */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-[#3b82f6] blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <i className={`${social.icon} text-lg relative z-10`}></i>
                </motion.a>
              ))}
            </div>

            <div className="mt-8">
              <motion.button
                className="px-8 py-3 bg-[var(--cyan-glow)] text-[var(--navy)] font-semibold rounded-full hover-glow transition-all"
                whileHover={{ y: -2 }}
                data-testid="more-about-me-button"
              >
                More About Me
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          className="mt-20 pt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gradient mb-4" data-testid="education-title">Education</h3>
            <p className="text-gray-400 max-w-2xl mx-auto" data-testid="education-subtitle">
              My academic journey and professional certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gray-800/50 p-6 rounded-xl hover-glow backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[var(--cyan-glow)]/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              data-testid="education-degree"
            >
              <div className="w-12 h-12 bg-[var(--cyan-glow)]/20 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <i className="fas fa-graduation-cap text-2xl text-[var(--cyan-glow)]"></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">B.Tech Computer Science Engineering</h4>
              <p className="text-[var(--cyan-glow)] font-semibold mb-2">IES College of Technology Bhopal</p>
              <p className="text-gray-400 text-sm mb-3">2021 - 2025</p>
              <p className="text-gray-400 text-sm">
                Completed Bachelor of Technology in Computer Science with CGPA 7.60.
                Specialized in Data Structures, Algorithms, Database Management, and Object-Oriented Programming.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-800/50 p-6 rounded-xl hover-glow backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[var(--cyan-glow)]/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              data-testid="education-certification"
            >
              <div className="w-12 h-12 bg-[var(--cyan-glow)]/20 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <i className="fas fa-certificate text-2xl text-[var(--cyan-glow)]"></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">CBSE Class XII</h4>
              <p className="text-[var(--cyan-glow)] font-semibold mb-2">Holy Kids Intl School, Bihar</p>
              <p className="text-gray-400 text-sm mb-3">2020</p>
              <p className="text-gray-400 text-sm">
                Completed Higher Secondary Education with 66.6% marks.
                Strong foundation in Mathematics and Science subjects that led to pursuing engineering.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-800/50 p-6 rounded-xl hover-glow backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[var(--cyan-glow)]/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              data-testid="education-aws"
            >
              <div className="w-12 h-12 bg-[var(--cyan-glow)]/20 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <i className="fab fa-aws text-2xl text-[var(--cyan-glow)]"></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">NSS Volunteer</h4>
              <p className="text-[var(--cyan-glow)] font-semibold mb-2">National Service Scheme</p>
              <p className="text-gray-400 text-sm mb-3">2020</p>
              <p className="text-gray-400 text-sm">
                Actively participated as a volunteer in National Service Scheme, contributing to
                community service and social development activities.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-800/50 p-6 rounded-xl hover-glow backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[var(--cyan-glow)]/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              data-testid="education-google"
            >
              <div className="w-12 h-12 bg-[var(--cyan-glow)]/20 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <i className="fab fa-google text-2xl text-[var(--cyan-glow)]"></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">CBSE Class X</h4>
              <p className="text-[var(--cyan-glow)] font-semibold mb-2">AND Public School, Bihar</p>
              <p className="text-gray-400 text-sm mb-3">2018</p>
              <p className="text-gray-400 text-sm">
                Completed Secondary Education with 64.6% marks.
                Built strong fundamentals in core subjects including Mathematics, Science, and English.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Bottom Glow Band */}
      <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-[var(--cyan-glow)]/20 to-transparent blur-xl pointer-events-none z-20" />
    </section>
  );
};

export default About;
