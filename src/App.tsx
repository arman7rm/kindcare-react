import { useEffect } from "react";
import "./App.css";
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

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <BrowserRouter>
      <header className="lg:hidden">
        <MobileMenuNav />
      </header>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/legal" element={<Legal/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
