import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices for optimal performance and user experience.",
      features: ["Responsive Design", "Performance Optimization", "Cross-browser Compatibility"]
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver seamless user experiences across all devices and platforms.",
      features: ["React Native", "Progressive Web Apps", "App Store Optimization"]
    },
    {
      icon: "fas fa-paint-brush",
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality to create engaging digital experiences.",
      features: ["User Research", "Wireframing & Prototyping", "Design Systems"]
    },
    {
      icon: "fas fa-server",
      title: "Backend Development",
      description: "Robust server-side solutions with secure APIs, database design, and scalable architecture for your applications.",
      features: ["RESTful APIs", "Database Design", "Cloud Integration"]
    },
    {
      icon: "fas fa-search",
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies to improve your website's visibility and ranking in search engine results.",
      features: ["Technical SEO", "Content Optimization", "Performance Monitoring"]
    },
    {
      icon: "fas fa-headset",
      title: "Consulting",
      description: "Strategic technology consulting to help you make informed decisions about your digital transformation journey.",
      features: ["Technology Assessment", "Architecture Planning", "Team Training"]
    }
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
          <h2 className="text-4xl font-bold text-gradient mb-4" data-testid="services-title">My Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto" data-testid="services-subtitle">
            Comprehensive web development services tailored to meet your business needs
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800/50 p-8 rounded-xl hover-glow card-hover backdrop-blur-sm transition-all cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              data-testid={`service-${index}`}
            >
              <div className="w-16 h-16 bg-[var(--cyan-glow)]/20 rounded-lg flex items-center justify-center mb-6">
                <i className={`${service.icon} text-2xl text-[var(--cyan-glow)]`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4" data-testid={`service-title-${index}`}>
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6" data-testid={`service-description-${index}`}>
                {service.description}
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center space-x-2"
                    data-testid={`service-feature-${index}-${featureIndex}`}
                  >
                    <CheckCircle className="text-[var(--cyan-glow)] w-4 h-4 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
