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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4" data-testid="about-heading">
              I'm a <span className="text-gradient-pink">Creative Web Developer</span>
            </h3>
            <p className="text-gray-400 leading-relaxed" data-testid="about-description-1">
              With over 10 years of experience in web development, I specialize in creating 
              modern, responsive websites and web applications. My passion lies in transforming 
              ideas into digital experiences that not only look great but also perform exceptionally.
            </p>
            <p className="text-gray-400 leading-relaxed" data-testid="about-description-2">
              I believe in the power of clean code, user-centered design, and cutting-edge 
              technologies to build solutions that make a difference. Every project is an 
              opportunity to push boundaries and exceed expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  data-testid={`contact-info-${index}`}
                >
                  <h4 className="text-[var(--cyan-glow)] font-semibold mb-2 flex items-center gap-2">
                    <i className={`${info.icon} text-sm`}></i>
                    {info.label}
                  </h4>
                  <p className="text-gray-400">{info.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern workspace" 
              className="rounded-xl shadow-2xl w-full h-auto hover-glow transition-all" 
              data-testid="workspace-image"
            />
            
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-white mb-4" data-testid="approach-title">My Approach</h4>
              <ul className="space-y-3 text-gray-400">
                {approaches.map((approach, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    data-testid={`approach-${index}`}
                  >
                    <CheckCircle className="text-[var(--cyan-glow)] w-5 h-5 flex-shrink-0" />
                    <span>{approach}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
