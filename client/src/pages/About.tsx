import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import profileImage from "@assets/WhatsApp Image 2025-07-19 at 11.09.06 AM_1753471708316.jpeg";

const About = () => {
  const contactInfo = [
    { label: "Email:", value: "hello@chandni.dev", icon: "fas fa-envelope" },
    { label: "Phone:", value: "+1 (555) 123-4567", icon: "fas fa-phone" },
    { label: "Location:", value: "San Francisco, CA", icon: "fas fa-map-marker-alt" },
    { label: "Availability:", value: "Available", icon: "fas fa-calendar-check" },
  ];

  const approaches = [
    "User-centered design thinking",
    "Agile development methodology", 
    "Performance optimization focus",
    "Continuous learning and adaptation"
  ];

  return (
    <section className="py-20 bg-[var(--dark-blue)]/30 min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="profile-glow-static w-80 h-80 sm:w-96 sm:h-96" data-testid="about-profile-image-container">
              <img 
                src={profileImage}
                alt="Shubham Kumar - About me" 
                className="w-full h-full object-cover object-center rounded-full" 
                data-testid="about-profile-image"
              />
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
              <h4 className="text-2xl font-semibold text-[var(--cyan-glow)] mb-6">Frontend Developer!</h4>
            </div>
            
            <p className="text-gray-400 leading-relaxed text-sm" data-testid="about-description">
              I am a dedicated Computer Science Engineering student at IES College of Technology Bhopal with a 
              passion for frontend web development. Currently pursuing my B.Tech with a CGPA of 7.60, I specialize 
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
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="social-icon w-10 h-10 bg-gray-800 hover:bg-[var(--cyan-glow)] rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all"
                data-testid="about-social-facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="social-icon w-10 h-10 bg-gray-800 hover:bg-[var(--cyan-glow)] rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all"
                data-testid="about-social-twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="social-icon w-10 h-10 bg-gray-800 hover:bg-[var(--cyan-glow)] rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all"
                data-testid="about-social-instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="social-icon w-10 h-10 bg-gray-800 hover:bg-[var(--cyan-glow)] rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all"
                data-testid="about-social-linkedin"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
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
              className="bg-gray-800/50 p-6 rounded-xl hover-glow backdrop-blur-sm transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              data-testid="education-degree"
            >
              <div className="w-12 h-12 bg-[var(--cyan-glow)]/20 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-graduation-cap text-2xl text-[var(--cyan-glow)]"></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">B.Tech Computer Science Engineering</h4>
              <p className="text-[var(--cyan-glow)] font-semibold mb-2">IES College of Technology Bhopal</p>
              <p className="text-gray-400 text-sm mb-3">2021 - 2025</p>
              <p className="text-gray-400 text-sm">
                Currently pursuing Bachelor of Technology in Computer Science with CGPA 7.60. 
                Specialized in Data Structures, Algorithms, Database Management, and Object-Oriented Programming.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-800/50 p-6 rounded-xl hover-glow backdrop-blur-sm transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              data-testid="education-certification"
            >
              <div className="w-12 h-12 bg-[var(--cyan-glow)]/20 rounded-lg flex items-center justify-center mb-4">
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
              className="bg-gray-800/50 p-6 rounded-xl hover-glow backdrop-blur-sm transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              data-testid="education-aws"
            >
              <div className="w-12 h-12 bg-[var(--cyan-glow)]/20 rounded-lg flex items-center justify-center mb-4">
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
              className="bg-gray-800/50 p-6 rounded-xl hover-glow backdrop-blur-sm transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              data-testid="education-google"
            >
              <div className="w-12 h-12 bg-[var(--cyan-glow)]/20 rounded-lg flex items-center justify-center mb-4">
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
    </section>
  );
};

export default About;
