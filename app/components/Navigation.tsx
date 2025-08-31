"use client";

import { X, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <span className="text-xl font-bold">LOGGA</span>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hem")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Hem
            </button>
            <button
              onClick={() => scrollToSection("tjanster")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Tjänster
            </button>
            <button
              onClick={() => scrollToSection("omOss")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Om Oss
            </button>
            <button
              onClick={() => scrollToSection("fragor")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Frågor
            </button>
            <Button
              onClick={() => scrollToSection("kontakt")}
              variant="default"
              size="sm"
            >
              Kontakta Oss För Offert
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-2 space-y-1 bg-card border-t border-border">
              <button
                onClick={() => scrollToSection("hem")}
                className="block px-3 py-2 text-foreground hover:text-primary w-full text-left transition-colors"
              >
                Hem
              </button>
              <button
                onClick={() => scrollToSection("tjanster")}
                className="block px-3 py-2 text-foreground hover:text-primary w-full text-left transition-colors"
              >
                Tjänster
              </button>
              <button
                onClick={() => scrollToSection("omOss")}
                className="block px-3 py-2 text-foreground hover:text-primary w-full text-left transition-colors"
              >
                Om Oss
              </button>
              <button
                onClick={() => scrollToSection("fragor")}
                className="block px-3 py-2 text-foreground hover:text-primary w-full text-left transition-colors"
              >
                Vanliga Frågor
              </button>

              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection("kontakt")}
                  variant="default"
                  size="sm"
                  className="w-full"
                >
                  Kontakta Oss För Offert
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
