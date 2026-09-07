import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import TerminalSection from './components/TerminalSection';
import { resumeData } from './data/resumeData';
import { ExternalLink, GraduationCap, ChevronRight } from 'lucide-react';

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

function ProjectCard3D({ proj }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="flex flex-col justify-between p-6 rounded-2xl bg-surface border border-white/10 hover:border-primaryCrimson/50 hover:shadow-crimson-glow transition duration-300"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono text-primaryCrimson bg-primaryCrimson/10 px-3 py-1 rounded-full">
            {proj.subtitle}
          </span>
          <div className="flex items-center gap-3">
            {proj.githubUrl && (
              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                title="View GitHub Repository"
              >
                <GithubIcon />
              </a>
            )}
            {proj.liveUrl && (
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primaryCrimson transition"
                title="Open Live Deployment"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{proj.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {proj.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
        {proj.tech.map((t, i) => (
          <span key={i} className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-300 rounded border border-white/5">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primaryCrimson selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section id="about" className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primaryCrimson/30 bg-primaryCrimson/10 text-primaryCrimson font-mono text-xs tracking-wide">
              <span className="w-2 h-2 rounded-full bg-primaryCrimson animate-ping" />
              AVAILABLE FOR ROLES & COLLABORATIONS
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Crafting Scalable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">
                Backend & AI Systems
              </span>
            </h1>

            <p className="text-gray-400 text-lg max-w-xl font-sans leading-relaxed">
              I'm <span className="text-white font-semibold">{resumeData.name}</span>. {resumeData.tagline}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 bg-primaryCrimson hover:bg-neonRed text-white font-mono text-sm font-semibold rounded-lg shadow-crimson-glow hover:shadow-neon-hover transition duration-300 flex items-center gap-2"
              >
                View Selected Works <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#terminal"
                className="px-6 py-3 bg-surface border border-white/10 hover:border-primaryCrimson text-gray-300 hover:text-white font-mono text-sm rounded-lg transition duration-200"
              >
                Launch CLI Terminal
              </a>
            </div>
          </div>

          {/* Right 3D Visual */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-primaryCrimson/10 blur-[120px] rounded-full pointer-events-none" />
            <Hero3D />
          </div>
        </div>
      </section>

      {/* METRICS / CP STATS SECTION (Interactive Links) */}
      <section id="metrics" className="py-12 bg-[#090D17] border-y border-mutedBorder">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {resumeData.metrics.map((item, idx) => {
            const CardContent = (
              <div className="p-5 rounded-xl bg-surface border border-white/5 hover:border-primaryCrimson/40 transition group h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-red-400 group-hover:to-rose-400 font-mono">
                    {item.value}
                  </div>
                  {item.link && (
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-primaryCrimson transition-colors" />
                  )}
                </div>
                <div className="text-xs font-mono text-gray-400 mt-2 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            );

            return item.link ? (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer block"
              >
                {CardContent}
              </a>
            ) : (
              <div key={idx}>{CardContent}</div>
            );
          })}
        </div>
      </section>

      {/* PROJECTS SECTION (With 3D Perspective Tilt) */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="space-y-4 mb-16">
          <span className="text-primaryCrimson font-mono text-sm uppercase tracking-widest">// Portfolios & Architecture</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Featured Engineering Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resumeData.projects.map((proj, idx) => (
            <ProjectCard3D key={idx} proj={proj} />
          ))}
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="space-y-4 mb-12">
          <span className="text-primaryCrimson font-mono text-sm uppercase tracking-widest">// Technical Repertoire</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Skills & Frameworks</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(resumeData.skills).map(([category, items], idx) => (
            <div key={idx} className="p-6 rounded-xl bg-surface border border-white/5 hover:border-primaryCrimson/30 transition">
              <h3 className="text-sm font-mono uppercase tracking-wider text-primaryCrimson mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, sIdx) => (
                  <span key={sIdx} className="text-xs font-mono px-3 py-1.5 bg-[#141B2D] text-gray-200 rounded-lg border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="text-primaryCrimson w-6 h-6" />
          <h2 className="text-2xl font-bold tracking-tight">Education</h2>
        </div>
        <div className="p-6 rounded-xl bg-surface border border-white/5 max-w-2xl">
          <h3 className="text-lg font-bold text-white">{resumeData.education.school}</h3>
          <p className="text-sm text-gray-400 mt-1">{resumeData.education.degree}</p>
          <div className="flex items-center gap-4 mt-4 text-xs font-mono text-primaryCrimson">
            <span>{resumeData.education.period}</span>
            <span>•</span>
            <span>CGPA: {resumeData.education.cgpa}</span>
          </div>
        </div>
      </section>

      {/* INTERACTIVE TERMINAL SECTION */}
      <section id="terminal" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center mb-8">
          <span className="text-primaryCrimson font-mono text-sm uppercase tracking-widest">// Interactive CLI</span>
          <h2 className="text-3xl font-extrabold tracking-tight mt-1">Terminal Access</h2>
          <p className="text-gray-400 text-sm mt-2">Recruiter shortcut: Query my profile directly from the command line.</p>
        </div>
        <TerminalSection />
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-mutedBorder text-center font-mono text-xs text-gray-500">
        <p>© 2026 {resumeData.name}. Designed in Deep Sea Crimson.</p>
      </footer>
    </div>
  );
}