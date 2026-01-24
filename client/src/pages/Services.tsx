import { motion } from "framer-motion";
import { CheckCircle, Smartphone, Globe, BarChart3, BrainCircuit } from "lucide-react";

const Services = () => {
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

  const services = [
    {
      icon: <Smartphone className="w-8 h-8 text-[var(--cyan-glow)]" />,
      title: "Application Development",
      description: "I build modern, scalable, and high-performance mobile applications with clean UI and smooth user experience.",
      features: ["Flutter / Android App Development", "API Integration & Backend Connectivity", "Performance Optimization"]
    },
    {
      icon: <Globe className="w-8 h-8 text-[var(--cyan-glow)]" />,
      title: "Web Development",
      description: "I create responsive, user-friendly, and modern websites using latest frontend technologies.",
      features: ["Responsive Web Design", "Frontend Development (HTML, CSS, JS, Tailwind)", "Cross-Browser Compatibility"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[var(--cyan-glow)]" />,
      title: "Data Analysis",
      description: "I analyze and visualize data to extract meaningful insights for better decision-making.",
      features: ["Data Cleaning & Processing", "Data Visualization", "Python, SQL & Excel Analysis"]
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-[var(--cyan-glow)]" />,
      title: "Problem Solving",
      description: "I focus on building real-world solutions using optimized and maintainable code.",
      features: ["Logical & Analytical Thinking", "Real-World Project Experience", "Code Optimization"]
    }
  ];

  return (
    <section className="py-20 bg-[var(--dark-blue)]/30 min-h-screen pt-32 theme-pink relative overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -60, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-gradient mb-4" data-testid="services-title">My Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto" data-testid="services-subtitle">
            Specialized technical services tailored to deliver high-quality digital solutions
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card-3d bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm cursor-pointer border border-gray-700/50"
              variants={fadeInUp}
              data-testid={`service-${index}`}
            >
              <div className="service-icon-wrapper w-16 h-16 bg-[var(--cyan-glow)]/10 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" data-testid={`service-title-${index}`}>
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed" data-testid={`service-description-${index}`}>
                {service.description}
              </p>
              <ul className="space-y-3 text-gray-300">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3"
                    data-testid={`service-feature-${index}-${featureIndex}`}
                  >
                    <CheckCircle className="text-[var(--cyan-glow)] w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Services;
