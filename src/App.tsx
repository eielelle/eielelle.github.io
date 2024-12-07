import "./App.css";
import About from "./components/About";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";
import { loadFireflyPreset } from "@tsparticles/preset-firefly";

function App() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadBasic(engine);
      await loadFireflyPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <main className="min-h-screen text-white">
      {init && (
        <Particles
          id="tsparticles"
          options={{
            preset: "firefly",
            particles: {
              color: {
                value: "#624a94"
              }
            }
          }}
        />
      )}
      <div id="particles-js"></div>
      <div className="max-w-6xl mx-auto h-screen">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Cta />
        <Footer />
      </div>
    </main>
  );
}

export default App;
