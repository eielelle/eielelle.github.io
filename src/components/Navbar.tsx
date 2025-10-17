import anime from "animejs/lib/anime.es.js";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  anime({
    targets: ".up",
    translateY: [30, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeInOutSine",
  });

  anime({
    targets: "nav .item .anim",
    width: [0, "100%", 0],
    left: ["0%", "0%", "100%"],
    duration: 1000,
    easing: "easeInOutSine",
    complete: function () {
      // After the first animation completes, trigger the opacity animation
      anime({
        targets: "nav .item a",
        opacity: [0, 1, 0, 1], // Animate opacity from 0 to 1, then back to 0 and 1 again
        duration: 600,
        easing: "easeInOutSine",
      });
    },
  });

  return (
    <header className="fixed top-0 left-0 w-full bg-black z-50">
      <div className="container mx-auto flex justify-between items-center p-6">
        <a href="" className="font-semibold up">
          Eleazar
        </a>

        <nav>
          {/* Hamburger Button (visible on small screens) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col items-center text-white"
          >
            <span className="block w-6 h-0.5 bg-white mb-2"></span>
            <span className="block w-6 h-0.5 bg-white mb-2"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>

          {/* Full Page Overlay Menu (visible on small screens) */}
          <div
            className={`lg:hidden fixed inset-0 bg-black bg-opacity-80 z-50 transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
            onClick={toggleMenu} // Close the menu when clicking outside
          >
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              &times;
            </button>

            {/* Navigation Menu */}
            <ul
              className="flex flex-col items-center justify-center h-full gap-6 text-white"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <li className="item">
                <span className="anim"></span>
                <a href="">
                  <span className="num">01.</span> About
                </a>
              </li>
              <li className="item">
                <span className="anim"></span>
                <a href="">
                  <span className="num">02.</span> Projects
                </a>
              </li>
              <li className="item">
                <span className="anim"></span>
                <a href="">
                  <span className="num">03.</span> Contact
                </a>
              </li>
              <li className="item">
                <a
                  href="/Eleazar-Romero-Resume.pdf"
                  className="btn border-accent border p-3"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Regular Navigation (visible on large screens) */}
          <ul className="hidden lg:flex items-center gap-6 text-white">
            <li className="item">
              <span className="anim"></span>
              <a href="#about">
                <span className="num">01.</span> About
              </a>
            </li>
            <li className="item">
              <span className="anim"></span>
              <a href="#projects">
                <span className="num">02.</span> Projects
              </a>
            </li>
            <li className="item">
              <span className="anim"></span>
              <a href="#cta">
                <span className="num">03.</span> Contact
              </a>
            </li>
            <li className="item">
              <a
                href="/Eleazar-Romero-Resume.pdf"
                className="btn border-accent border p-3"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
