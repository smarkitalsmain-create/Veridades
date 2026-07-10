import { useState, useEffect } from "react";
import { Link, usePath } from "./Router";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../assets/Logo.png";

export default function Navbar() {
  const currentPath = usePath();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll listener to make the navbar elegant on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer when path changes
  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Frameworks", path: "/frameworks" },
    { name: "Leadership", path: "/leadership" },
    { name: "Engagements", path: "/representative-engagements" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/95 backdrop-blur-md py-4 shadow-sm border-border-grey"
            : "bg-white py-5 border-transparent"
        }`}
      >
        <div className="container mx-auto md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo Brand in Luxury / Prestige Styling */}
          <Link to="/" className="flex items-center">
  <img
    src={logo}
    alt="Veridades Consulting"
    className="h-25 w-auto"
  />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const active = currentPath === item.path;
              return (
                <Link
                  ey={item.path}
  to={item.path}
  className={`px-4 py-2 text-[15px] font-semibold tracking-wide transition-all duration-200 ${
    active
      ? "text-navy-900 font-bold border-b-2 border-navy-900"
      : "text-gray-700 hover:text-gold-600 border-b-2 border-transparent"
  }`}
>
  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="navy-bg text-white px-6 py-2.5 text-[12px] font-semibold tracking-wide uppercase hover:bg-opacity-90 transition-all duration-300 shadow-xs"
            >
              START A CONVERSATION
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-navy-900 hover:text-gold-600 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Spacer to push content below the fixed header */}
      <div className="h-20" />

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-navy-900/20 backdrop-blur-xs z-40 lg:hidden"
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white z-50 p-6 shadow-2xl flex flex-col justify-between lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-border-grey">
                  <div className="flex flex-col">
                    <span className="serif-heading text-lg font-bold text-navy-900">
                      VERIDADES
                    </span>
                    <span className="micro-caps -mt-0.5 text-gold-600">
                      CONSULTING
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-navy-900 hover:text-gold-600 focus:outline-none"
                    aria-label="Close Menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item, idx) => {
                    const active = currentPath === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center justify-between py-2 text-sm font-sans uppercase tracking-wider font-bold border-b border-gray-50 transition-colors ${
                          active
                            ? "text-gold-600 font-extrabold pl-2 border-gold-300"
                            : "text-navy-900/80 hover:text-gold-600"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronRight size={16} className={active ? "text-gold-600" : "text-navy-900/40"} />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-border-grey">
                <Link
                  to="/contact"
                  className="w-full text-center block navy-bg text-white hover:bg-opacity-90 font-sans text-xs tracking-widest uppercase font-semibold py-3.5 px-6 transition-all shadow-xs"
                >
                  START A CONVERSATION
                </Link>
                <div className="text-[10px] text-gray-500 text-center mt-4">
                  Delhi · Jaipur
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
