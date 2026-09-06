"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#222222] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Brand */}
        <Link
          href="#home"
          className="text-lg font-medium tracking-widest text-[#ffffff] hover:text-[#a67c1e] transition-colors"
        >
          MUKESH KUMAR
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium uppercase tracking-wider text-[#aaaaaa] hover:text-[#ffffff] transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Resume Dropdown */}
          <div className="relative">
            <button
              onClick={() => setResumeDropdownOpen(!resumeDropdownOpen)}
              className="text-[13px] font-medium uppercase tracking-wider text-[#aaaaaa] hover:text-[#ffffff] transition-colors flex items-center gap-1"
            >
              Resume
              <span className={`transition-transform ${resumeDropdownOpen ? 'rotate-180' : ''}`}>▾</span>
            </button>

            {resumeDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-[#111111] border border-[#222222] py-2 shadow-xl">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-[#aaaaaa] hover:text-[#ffffff] hover:bg-[#1a1a1a] transition-colors"
                >
                  Download PDF
                </a>
                <a
                  href="#certifications"
                  className="block px-4 py-2 text-sm text-[#aaaaaa] hover:text-[#ffffff] hover:bg-[#1a1a1a] transition-colors"
                >
                  View Certifications ↗
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#ffffff] text-2xl"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-[#222222] py-6 px-6">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-wider text-[#aaaaaa] hover:text-[#ffffff] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium uppercase tracking-wider text-[#aaaaaa] hover:text-[#ffffff] transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
