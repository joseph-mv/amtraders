"use client";

import { useState, useEffect } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * **ScrollToTop Component**
 * - Displays a button to scroll back to the top of the page.
 */
const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled beyond a certain point
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smoothly scrolls the page back to the top.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-40 right-5 bottom-5 group   bg-gray-500 text-white  w-12  h-12 flex items-center justify-center  rounded-full shadow-md hover:bg-gray-600  transition  duration-500 ${
        isVisible
          ? "opacity-100 translate-0"
          : "opacity-0 translate-10 pointer-events-none "
      }`}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon className="text-2xl group-hover:-translate-y-0.5" icon={faArrowUp} />
    </button>
  );
};

export default ScrollToTop;
