import React, { useState, useRef, useEffect } from 'react';
import { resumeData } from '../data/resumeData';

export default function TerminalSection() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { cmd: 'whoami', res: `${resumeData.name} - ${resumeData.role}` },
    { cmd: 'help', res: 'Available commands: about, skills, projects, metrics, contact, clear' }
  ]);
  const terminalBoxRef = useRef(null);
  const inputRef = useRef(null);
  const isFirstRender = useRef(true);

  // Auto-scroll ONLY the terminal container, and only AFTER the user enters a command
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (terminalBoxRef.current) {
      terminalBoxRef.current.scrollTop = terminalBoxRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmed = input.trim();
      const cleanCmd = trimmed.toLowerCase();
      let res = '';

      if (!trimmed) return;

      switch (cleanCmd) {
        case 'help':
          res = 'Commands: about, skills, projects, metrics, contact, clear, sudo';
          break;
        case 'about':
          res = `${resumeData.name} | ${resumeData.tagline}`;
          break;
        case 'skills':
          res = Object.entries(resumeData.skills)
            .map(([cat, sk]) => `[${cat}]: ${sk.join(', ')}`)
            .join('\n');
          break;
        case 'projects':
          res = resumeData.projects
            .map(p => `• ${p.title} (${p.subtitle}) -> Stack: ${p.tech.join(', ')}`)
            .join('\n');
          break;
        case 'metrics':
          res = resumeData.metrics
            .map(m => `• ${m.label}: ${m.value}`)
            .join('\n');
          break;
        case 'contact':
          res = `Email: ${resumeData.contacts.email} | Phone: ${resumeData.contacts.phone}`;
          break;
        case 'sudo':
          res = 'Permission denied: Recruiter privileges only.';
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        default:
          res = `Command not recognized: "${trimmed}". Type "help" for valid commands.`;
      }

      setHistory(prev => [...prev, { cmd: trimmed, res }]);
      setInput('');
    }
  };

  return (
    <div 
      onClick={() => inputRef.current?.focus()}
      className="w-full max-w-4xl mx-auto my-8 p-5 font-mono text-sm bg-[#090D1A] border border-mutedBorder rounded-xl shadow-crimson-glow cursor-text"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-gray-400 select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="ml-2 text-gray-300 font-semibold">akbar@portfolio:~ (bash)</span>
        </div>
        <span className="text-[11px] text-gray-500 hidden sm:inline">Click anywhere inside to type</span>
      </div>

      {/* Terminal Output Log Container */}
      <div ref={terminalBoxRef} className="pt-4 space-y-3 max-h-72 overflow-y-auto pr-2">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-primaryCrimson">
              <span>➜</span>
              <span className="text-gray-400 font-sans text-xs">~</span>
              <span className="text-white font-semibold">{item.cmd}</span>
            </div>
            <pre className="text-gray-300 pl-4 whitespace-pre-wrap font-mono text-xs leading-relaxed">
              {item.res}
            </pre>
          </div>
        ))}
      </div>

      {/* Command Input Line */}
      <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10">
        <span className="text-primaryCrimson font-bold">➜</span>
        <span className="text-gray-400 font-sans text-xs">~</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          placeholder='type "projects", "skills", or "help" and press enter...'
          className="w-full bg-transparent text-white focus:outline-none placeholder-gray-600 font-mono text-xs caret-primaryCrimson"
        />
      </div>
    </div>
  );
}