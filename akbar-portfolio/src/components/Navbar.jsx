import React, { useState } from 'react';
import { Terminal, Mail, Menu, X, Code } from 'lucide-react';
import { resumeData } from '../data/resumeData';

// Custom inline SVG icons for GitHub & LinkedIn to guarantee 100% stability
const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Metrics", href: "#metrics" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Terminal", href: "#terminal" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070A12]/80 backdrop-blur-md border-b border-mutedBorder">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-mono text-lg font-bold text-white tracking-wider">
          <Terminal className="text-primaryCrimson w-5 h-5 animate-pulse" />
          <span>AKBAR<span className="text-primaryCrimson">.DEV</span></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-mono text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-primaryCrimson transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={resumeData.contacts.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-mutedBorder transition"
          >
            <GithubIcon />
          </a>
          <a
            href={resumeData.contacts.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-mutedBorder transition"
          >
            <LinkedinIcon />
          </a>
          <a
            href={`mailto:${resumeData.contacts.email}`}
            className="px-4 py-2 text-xs font-mono font-semibold bg-primaryCrimson hover:bg-neonRed text-white rounded-md shadow-crimson-glow transition duration-200"
          >
            GET IN TOUCH
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 p-2 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0D1322] border-b border-mutedBorder px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-primaryCrimson font-mono text-sm"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`mailto:${resumeData.contacts.email}`}
            className="w-full text-center py-2 text-xs font-mono font-semibold bg-primaryCrimson text-white rounded-md mt-2"
          >
            GET IN TOUCH
          </a>
        </div>
      )}
    </nav>
  );
}