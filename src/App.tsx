import { useEffect } from "react";
import Home from "./pages/Home";
import AOS from "aos";

import "aos/dist/aos.css";
import MobileMenuNav from "./components/MobileMenuNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Faq from "./pages/Faq";
import Legal from "./pages/Legal";
import Careers from "./pages/Careers";
import ScrollManager from "./components/ScrollManager";
import RouteMeta from "./components/RouteMeta";
import NotFound from "./pages/NotFound";

// Lets keyboard and screen-reader users jump past the navigation.
const SkipLink = () => (
  <a
    href="#main"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById("main")?.focus();
    }}
    className="bg-fg text-bg fixed top-3 left-3 z-[100] -translate-y-24 rounded-full px-5 py-3 text-sm font-medium focus:translate-y-0"
  >
    Skip to main content
  </a>
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      offset: 60,
      once: true,
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);
  return (
    <BrowserRouter>
      <SkipLink />
      <ScrollManager />
      <RouteMeta />
      {/* Page content sits above the footer, which is revealed on large screens. */}
      <div className="bg-bg relative z-10 shadow-[0_30px_60px_-30px_rgb(22_33_26/0.35)] lg:rounded-b-[2.5rem]">
        <div className="sticky top-0 z-50 lg:hidden">
          <MobileMenuNav />
        </div>
        <Header />

        <main id="main" tabIndex={-1} className="scroll-mt-20 outline-none">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
