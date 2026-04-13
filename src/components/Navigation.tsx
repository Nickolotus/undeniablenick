import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-light.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-shadow duration-200"
        style={{ height: 88, boxShadow: isScrolled ? "0 2px 4px rgba(0,0,0,0.08)" : "none" }}
      >
        <div className="max-w-7xl mx-auto px-5 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0" aria-label="Chiasson Consulting - Home">
            <img
              src={logo}
              alt="Chiasson Consulting logo"
              className="h-auto w-auto object-contain"
              style={{ maxWidth: 260, maxHeight: 64 }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <Link
              to="/"
              className={`text-base font-medium transition-colors hover:text-navy ${isActive("/") ? "text-navy font-semibold" : "text-navy/80"}`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className={`flex items-center gap-1 text-base font-medium transition-colors hover:text-navy ${
                  isActive("/medicare") || isActive("/life") ? "text-navy font-semibold" : "text-navy/80"
                }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services <ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 pt-2 w-48"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                    <Link
                      to="/medicare"
                      className="block px-4 py-3 text-sm font-medium text-navy hover:bg-cream transition-colors"
                    >
                      Medicare
                    </Link>
                    <Link
                      to="/life"
                      className="block px-4 py-3 text-sm font-medium text-navy hover:bg-cream transition-colors border-t border-gray-100"
                    >
                      Life & Annuities
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className={`text-base font-medium transition-colors hover:text-navy ${isActive("/blog") ? "text-navy font-semibold" : "text-navy/80"}`}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className={`text-base font-medium transition-colors hover:text-navy ${isActive("/about") ? "text-navy font-semibold" : "text-navy/80"}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-base font-medium transition-colors hover:text-navy ${isActive("/contact") ? "text-navy font-semibold" : "text-navy/80"}`}
            >
              Contact
            </Link>
            <a href="https://calendly.com/nick-chiassonconsulting" target="_blank" rel="noopener noreferrer" className="btn-nav">
              Book Consultation
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 w-80 max-w-full bg-white shadow-2xl transform transition-transform duration-300 md:hidden flex flex-col ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ paddingTop: 80 }}
      >
        <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-1">
          <Link
            to="/"
            className="block py-3 text-lg font-medium text-navy border-b border-gray-100"
          >
            Home
          </Link>
          <div className="border-b border-gray-100">
            <button
              className="flex items-center justify-between w-full py-3 text-lg font-medium text-navy"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown size={18} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pb-2 pl-4">
                <Link to="/medicare" className="block py-2 text-base text-navy/80 font-medium">
                  Medicare
                </Link>
                <Link to="/life" className="block py-2 text-base text-navy/80 font-medium">
                  Life & Annuities
                </Link>
              </div>
            )}
          </div>
          <Link to="/blog" className="block py-3 text-lg font-medium text-navy border-b border-gray-100">
            Blog
          </Link>
          <Link to="/about" className="block py-3 text-lg font-medium text-navy border-b border-gray-100">
            About
          </Link>
          <Link to="/contact" className="block py-3 text-lg font-medium text-navy border-b border-gray-100">
            Contact
          </Link>
        </div>
        <div className="p-6">
          <a href="https://calendly.com/nick-chiassonconsulting" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">
            Book Consultation
          </a>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div style={{ height: 88 }} />
    </>
  );
};

export default Navigation;
