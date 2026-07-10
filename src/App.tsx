import { RouterProvider, usePath } from "./components/Router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CTASection } from "./components/Common";

// Import Views
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ServicesView from "./components/ServicesView";
import IndustriesView from "./components/IndustriesView";
import FrameworksView from "./components/FrameworksView";
import LeadershipView from "./components/LeadershipView";
import EngagementsView from "./components/EngagementsView";
import ContactView from "./components/ContactView";

import { motion, AnimatePresence } from "motion/react";

function AppContent() {
  const currentPath = usePath();

  // Simple, robust path-to-page router logic
  const renderView = () => {
    switch (currentPath) {
      case "/":
        return <HomeView />;
      case "/about":
        return <AboutView />;
      case "/services":
        return <ServicesView />;
      case "/industries":
        return <IndustriesView />;
      case "/frameworks":
        return <FrameworksView />;
      case "/leadership":
        return <LeadershipView />;
      case "/representative-engagements":
        return <EngagementsView />;
      case "/contact":
        return <ContactView />;
      default:
        // Graceful fallback for single page application robustness
        return <HomeView />;
    }
  };

  const isContactPage = currentPath === "/contact";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top sticky navbar */}
      <Navbar />

      {/* Main animated route content area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Reusable CTA engagement panel - shown everywhere except contact view */}
      {!isContactPage && <CTASection />}

      {/* Global institutional footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
