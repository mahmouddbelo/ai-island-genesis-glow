
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll button to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-50 p-3 rounded-full cyber-button bg-aipurple-600/20 border border-aipurple-500/70",
        "shadow-lg transition-all duration-300 transform", 
        "hover:scale-110 hover:bg-aipurple-600/40 focus:outline-none",
        "group",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <span className="relative z-10">
        <ArrowUp className="h-6 w-6 text-aipurple-300 group-hover:text-white transition-colors" />
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-aipurple-600/30 to-aiblue-600/30 rounded-full blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
    </button>
  );
};

export default ScrollToTop;
