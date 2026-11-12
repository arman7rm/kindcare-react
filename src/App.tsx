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
      <ScrollManager />
      {/* Page content sits above the footer, which is revealed on large screens. */}
      <div className="bg-bg relative z-10 shadow-[0_30px_60px_-30px_rgb(22_33_26/0.35)] lg:rounded-b-[2.5rem]">
        <div className="sticky top-0 z-50 lg:hidden">
          <MobileMenuNav />
        </div>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
