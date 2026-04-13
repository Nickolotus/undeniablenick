import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-dark.png";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Medicare", href: "/medicare" },
    { label: "Life & Annuities", href: "/life" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer style={{ backgroundColor: "#1e3a5f" }} className="text-white">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <Link to="/" aria-label="Chiasson Consulting - Home">
              <img
                src={logo}
                alt="Chiasson Consulting logo"
                className="h-auto object-contain mb-5"
                style={{ width: 160 }}
              />
            </Link>
            <p className="text-gray-300 text-base max-w-sm leading-relaxed">
              Independent guidance for Gulf South families.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col md:flex-row gap-10">
            {/* Contact Info */}
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:9852371310"
                  className="footer-link flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone size={16} />
                  (985) 237-1310
                </a>
                <a
                  href="mailto:nick@chiassonconsulting.com"
                  className="footer-link flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  nick@chiassonconsulting.com
                </a>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin size={16} />
                  Abita Springs, Louisiana
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg mb-4">Pages</h3>
              <nav className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="footer-link text-gray-300 hover:text-white transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-4 text-center text-gray-400 text-sm flex flex-col gap-1">
          <p>Licensed and serving clients in LA | TX | MS | AL | FL</p>
          <p>&copy; {year} Chiasson Consulting. All rights reserved. | <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors underline">Privacy Policy</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
