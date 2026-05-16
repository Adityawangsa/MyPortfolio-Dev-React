import { useEffect } from "react";

import Hero from "./layouts/Hero";
import About from "./layouts/About";
import Project from "./layouts/Project";
import Contact from "./layouts/Contact";

export default function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </>
  );
}
