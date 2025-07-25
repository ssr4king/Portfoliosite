import { Link } from "wouter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#", label: "Facebook" },
    { icon: "fab fa-twitter", href: "#", label: "Twitter" },
    { icon: "fab fa-instagram", href: "#", label: "Instagram" },
    { icon: "fab fa-linkedin-in", href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[var(--navy)] border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Port</span>
              <span className="text-[var(--cyan-glow)]">folio</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Passionate web developer dedicated to creating exceptional digital experiences
              through innovative design and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="social-icon w-10 h-10 bg-gray-800 hover:bg-[var(--cyan-glow)] rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-[var(--cyan-glow)] transition-colors"
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2" data-testid="footer-email">
                <i className="fas fa-envelope text-[var(--cyan-glow)] w-4"></i>
                <span>hello@chandni.dev</span>
              </li>
              <li className="flex items-center space-x-2" data-testid="footer-phone">
                <i className="fas fa-phone text-[var(--cyan-glow)] w-4"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2" data-testid="footer-location">
                <i className="fas fa-map-marker-alt text-[var(--cyan-glow)] w-4"></i>
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400" data-testid="footer-copyright">
            © {currentYear} Portfolio. All rights reserved. Built with ❤️ by Chandni Chauhan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
