import { useEffect, useState } from "react";
import { Link, usePath } from "./Router";
import { ChevronRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import logo from "../assets/Logo.png";

export default function Navbar() {
  const currentPath = usePath();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    {
      name: "Engagements",
      path: "/representative-engagements",
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-border-grey bg-white/95 py-3 shadow-sm backdrop-blur-md"
            : "border-transparent bg-white py-4"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-5 md:px-8 lg:px-10 xl:px-12">
          <Link
            to="/"
            className="flex shrink-0 items-center"
            aria-label="Veridades Consulting Home"
          >
            <img
              src={logo}
              alt="Veridades Consulting"
              className="h-[72px] w-auto object-contain md:h-[78px]"
            />
          </Link>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex xl:gap-2">
            {navItems.map((item) => {
              const active = currentPath === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`whitespace-nowrap border-b-2 px-2.5 py-2 font-sans text-[14px] font-semibold tracking-wide transition-all duration-200 xl:px-3 ${
                    active
                      ? "border-navy-900 text-navy-900"
                      : "border-transparent text-gray-700 hover:border-gold-600 hover:text-gold-600"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden shrink-0 lg:block">
            <Link
              to="/contact"
              className="inline-flex min-w-[190px] items-center justify-center whitespace-nowrap bg-navy-900 px-5 py-3 font-sans text-[12px] font-semibold tracking-[0.08em] text-white transition-colors hover:bg-gold-600"
            >
              START A CONVERSATION
            </Link>
          </div>

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="p-2 text-navy-900 transition-colors hover:text-gold-600 focus:outline-none lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div className="h-[104px]" />

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-navy-900/20 backdrop-blur-xs lg:hidden"
            />

            <motion.div
              id="mobile-navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed bottom-0 right-0 top-0 z-50 flex w-4/5 max-w-sm flex-col justify-between bg-white p-6 shadow-2xl lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border-grey pb-6">
                  <img
                    src={logo}
                    alt="Veridades Consulting"
                    className="h-16 w-auto object-contain"
                  />

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-navy-900 transition-colors hover:text-gold-600 focus:outline-none"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  {navItems.map((item) => {
                    const active = currentPath === item.path;

                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center justify-between border-b py-3 font-sans text-sm font-bold uppercase tracking-wider transition-colors ${
                          active
                            ? "border-gold-300 pl-2 text-gold-600"
                            : "border-gray-100 text-navy-900/80 hover:text-gold-600"
                        }`}
                      >
                        <span>{item.name}</span>

                        <ChevronRight
                          size={16}
                          className={
                            active
                              ? "text-gold-600"
                              : "text-navy-900/40"
                          }
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-border-grey pt-6">
                <Link
                  to="/contact"
                  className="block w-full bg-navy-900 px-6 py-3.5 text-center font-sans text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-gold-600"
                >
                  START A CONVERSATION
                </Link>

                <div className="mt-4 text-center text-[10px] text-gray-500">
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