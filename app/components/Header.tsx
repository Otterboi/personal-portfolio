"use client";

import { useEffect, useState } from "react";
import { Home, Settings, Folder } from "lucide-react"

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-slate-200 transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
      <nav className="max-w-7xl mx-auto py-4 flex justify-center sm:justify-start gap-12">
        <a href="#home" className="text-slate-600 hover:text-slate-900 font-semibold text-lg transition flex item-center gap-2">
          <Home />
          Home
        </a>
        <a href="#skills" className="text-slate-600 hover:text-slate-900 font-semibold text-lg transition flex item-center gap-2">
          <Settings />
          Skills
        </a>
        <a href="#projects" className="text-slate-600 hover:text-slate-900 font-semibold text-lg transition flex item-center gap-2">
          <Folder />
          Projects
        </a>
      </nav>
    </header>
  );
}