import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import AOS from "aos";

import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return <Home />;
}

export default App;
