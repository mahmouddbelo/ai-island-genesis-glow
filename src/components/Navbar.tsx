
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
        <a href="#home" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-md bg-gradient-to-br from-aipurple-500 to-aiblue-500 flex items-center justify-center text-white font-bold text-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <span className="relative z-10">AI</span>
          </div>
          <span className="text-2xl font-bold shine-text">AI Island</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-aipurple-400 font-medium transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button 
            className="cyber-button bg-transparent border border-aipurple-500 text-aipurple-400 hover:text-white"
          >
            <span className="relative z-10">Get Started</span>
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
                  className="text-gray-300 hover:text-aipurple-400 block py-2 font-medium"
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
