
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Logo from "@/components/Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 ${
        isScrolled 
          ? "bg-background/80 shadow-md backdrop-blur-md border-b border-aipurple-800/30" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="transition-transform hover:scale-105 duration-300">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative font-medium transition-colors overflow-hidden group ${
                    activeSection === link.href.substring(1) 
                      ? "text-aipurple-400" 
                      : "text-gray-300 hover:text-aipurple-400"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-[-2px] left-0 h-[2px] bg-aipurple-400 transition-all duration-300 ${
                    activeSection === link.href.substring(1) 
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}></span>
                </a>
              </li>
            ))}
          </ul>
          <Button 
            className="cyber-button bg-transparent border border-aipurple-500 text-aipurple-400 hover:text-white relative overflow-hidden group"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-gradient-to-r from-aipurple-600/20 via-aiblue-500/20 to-aipurple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-aipurple-400 to-aiblue-400 group-hover:w-full transition-all duration-300"></span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-aipurple-400"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg p-4 border-t border-aipurple-800/30">
          <ul className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`block py-2 font-medium ${
                    activeSection === link.href.substring(1) 
                      ? "text-aipurple-400" 
                      : "text-gray-300 hover:text-aipurple-400"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <Button 
                className="w-full cyber-button bg-transparent border border-aipurple-500 text-aipurple-400 hover:text-white mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">Get Started</span>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
