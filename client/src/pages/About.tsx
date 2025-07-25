import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
                alt="About me" 
                className="w-full h-full object-cover rounded-full" 
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
              <h4 className="text-2xl font-semibold text-[var(--cyan-glow)] mb-6">Full Stack Developer!</h4>
            </div>
            
            <p className="text-gray-400 leading-relaxed text-sm" data-testid="about-description">
              I am a skilled web designer with over 3 years of experience in the industry. My passion lies in 
              creating captivating website designs and implementing them through frontend development. I take 
              pride in staying up-to-date with current design trends and always strive for creativity and 
              uniqueness in my work.
              <br /><br />
              Throughout my career, I have developed a deep understanding of user experience (UX) principles. 
              By putting myself in the shoes of the end-users, I strive to create intuitive and seamless 
              browsing experiences. I believe that a well-designed website should not only look visually 
              appealing but also provide a smooth and enjoyable interaction for visitors. When starting a 
              new project, I thoroughly research and analyze the target audience and the client's specific 
              requirements. This enables me to tailor my designs to meet their expectations and deliver a 
              unique online presence that aligns with their brand identity.
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
      </div>
    </section>
  );
};

export default About;
