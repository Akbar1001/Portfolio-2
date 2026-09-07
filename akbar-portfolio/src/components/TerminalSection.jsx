import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';

export default function TerminalSection() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { cmd: 'welcome', res: 'Type "help" to see available commands.' }
  ]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cleanCmd = input.trim().toLowerCase();
      let res = '';

      switch (cleanCmd) {
        case 'help':
          res = 'Available commands: about, skills, projects, metrics, contact, clear';
          break;
        case 'about':
          res = `${resumeData.name} - ${resumeData.role}. ${resumeData.tagline}`;
          break;
        case 'skills':
          res = Object.entries(resumeData.skills)
            .map(([cat, sk]) => `${cat}: ${sk.join(', ')}`)
            .join(' | ');
          break;
        case 'projects':
          res = resumeData.projects.map(p => p.title).join(', ');
          break;
        case 'metrics':
          res = resumeData.metrics.map(m => `${m.label}: ${m.value}`).join(' | ');
          break;
        case 'contact':
          res = `Email: ${resumeData.contacts.email} | Phone: ${resumeData.contacts.phone}`;
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        default:
          res = `Command not recognized: "${cleanCmd}". Type "help" for a list of commands.`;
      }

      setHistory(prev => [...prev, { cmd: input, res }]);
      setInput('');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 p-4 font-mono text-sm bg-[#090D1A] border border-mutedBorder rounded-xl shadow-crimson-glow">
      <div className="flex items-center gap-2 pb-3 border-b border-white/10 text-xs text-gray-400">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <span className="ml-2">akbar@portfolio:~ (bash)</span>
      </div>

      <div className="pt-4 space-y-3 max-h-64 overflow-y-auto">
        {history.map((item, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-2 text-primaryCrimson">
              <span>➜</span>
              <span className="text-gray-300">~</span>
              <span className="text-white font-semibold">{item.cmd}</span>
            </div>
            <p className="text-gray-400 pl-4 mt-1 leading-relaxed">{item.res}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-4 pt-2 border-t border-white/5">
        <span className="text-primaryCrimson font-bold">➜</span>
        <span className="text-gray-400">~</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          placeholder='Type a command (e.g. "help")...'
          className="w-full bg-transparent text-white outline-none placeholder-gray-600"
        />
      </div>
    </div>
  );
}