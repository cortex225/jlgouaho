'use client';

import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  locale: string;
  data: {
    name: string;
    title: string;
    email: string;
    github: string;
    linkedin: string;
    projects: string[];
    skills: string[];
    cvUrl: string;
  };
}

type OutputLine = { type: 'input' | 'output' | 'error' | 'success'; text: string };

const PROMPT = 'visitor@jlgouaho.com:~$ ';

export function Terminal({ locale, data }: TerminalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState<OutputLine[]>([
    {
      type: 'output',
      text: locale === 'fr'
        ? `Bienvenue sur le terminal de ${data.name}. Tapez "help" pour voir les commandes disponibles.`
        : `Welcome to ${data.name}'s terminal. Type "help" to see available commands.`
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  useEffect(() => {
    const handler = (e: globalThis.KeyboardEvent) => {
      if (e.key === '`' && (e.ctrlKey || e.metaKey)) {
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const fr = locale === 'fr';

  const commands: Record<string, () => OutputLine[]> = {
    help: () => [
      { type: 'output', text: fr ? '📋 Commandes disponibles :' : '📋 Available commands:' },
      { type: 'output', text: '  whoami      — ' + (fr ? 'Affiche mes infos' : 'Show my info') },
      { type: 'output', text: '  skills      — ' + (fr ? 'Liste mes compétences' : 'List my skills') },
      { type: 'output', text: '  projects    — ' + (fr ? 'Affiche mes projets' : 'Show my projects') },
      { type: 'output', text: '  contact     — ' + (fr ? 'Mes coordonnées' : 'My contact info') },
      { type: 'output', text: '  cv          — ' + (fr ? 'Télécharger mon CV' : 'Download my resume') },
      { type: 'output', text: '  open github — ' + (fr ? 'Ouvre mon GitHub' : 'Open my GitHub') },
      { type: 'output', text: '  clear       — ' + (fr ? 'Effacer le terminal' : 'Clear terminal') },
      { type: 'output', text: '  exit        — ' + (fr ? 'Fermer le terminal' : 'Close terminal') },
    ],
    whoami: () => [
      { type: 'success', text: `👤 ${data.name}` },
      { type: 'output', text: `   ${data.title}` },
      { type: 'output', text: `   📍 Québec, Canada` },
      { type: 'output', text: `   🌐 ${fr ? 'Disponible' : 'Available'} — ${fr ? 'Télétravail / Hybride' : 'Remote / Hybrid'}` },
      { type: 'output', text: `   🗣  ${fr ? 'Français (natif) · Anglais (avancé)' : 'French (native) · English (advanced)'}` },
    ],
    skills: () => [
      { type: 'success', text: fr ? '🛠 Compétences techniques :' : '🛠 Technical skills:' },
      ...data.skills.slice(0, 12).map(s => ({ type: 'output' as const, text: `  ▸ ${s}` })),
      { type: 'output', text: `  ... ${fr ? 'et plus' : 'and more'}` },
    ],
    projects: () => [
      { type: 'success', text: fr ? '🚀 Mes projets :' : '🚀 My projects:' },
      ...data.projects.map((p, i) => ({ type: 'output' as const, text: `  ${i + 1}. ${p}` })),
    ],
    contact: () => [
      { type: 'success', text: fr ? '📬 Coordonnées :' : '📬 Contact info:' },
      { type: 'output', text: `  📧 ${data.email}` },
      { type: 'output', text: `  💼 ${data.linkedin}` },
      { type: 'output', text: `  🐙 ${data.github}` },
    ],
    cv: () => {
      window.open(data.cvUrl, '_blank');
      return [{ type: 'success', text: fr ? '📄 Ouverture du CV...' : '📄 Opening resume...' }];
    },
    'open github': () => {
      window.open(data.github, '_blank');
      return [{ type: 'success', text: fr ? '🐙 Ouverture de GitHub...' : '🐙 Opening GitHub...' }];
    },
    clear: () => {
      setOutput([]);
      return [];
    },
    exit: () => {
      setTimeout(() => setIsOpen(false), 300);
      return [{ type: 'output', text: fr ? 'Au revoir ! 👋' : 'Goodbye! 👋' }];
    },
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: OutputLine[] = [{ type: 'input', text: `${PROMPT}${cmd}` }];

    if (trimmed === '') {
      setOutput(prev => [...prev, ...newLines]);
      return;
    }

    const handler = commands[trimmed];
    if (handler) {
      newLines.push(...handler());
    } else {
      newLines.push({
        type: 'error',
        text: fr
          ? `bash: ${trimmed}: commande introuvable. Tapez "help" pour l'aide.`
          : `bash: ${trimmed}: command not found. Type "help" for help.`
      });
    }
    setOutput(prev => [...prev, ...newLines]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setHistory(prev => [input, ...prev]);
      setHistoryIndex(-1);
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const nextIndex = historyIndex + 1;
      if (nextIndex < history.length) {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = historyIndex - 1;
      if (nextIndex >= 0) {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        title={fr ? 'Ouvrir le terminal (Ctrl+`)' : 'Open terminal (Ctrl+`)'}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-2xl bg-slate-900 dark:bg-slate-800 text-emerald-400 flex items-center justify-center shadow-2xl shadow-slate-900/30 hover:scale-110 transition-all border border-slate-700"
      >
        <TerminalIcon size={20} />
      </button>

      {/* Terminal window */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-8 pointer-events-none">
          <div
            className="w-full max-w-2xl h-[420px] bg-slate-950 rounded-2xl shadow-2xl border border-slate-800 flex flex-col overflow-hidden pointer-events-auto animate-in slide-in-from-bottom-4 duration-300"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800 shrink-0">
              <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors" />
              <button onClick={() => setOutput([])} className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-xs text-slate-400 font-mono ml-2">
                jlgouaho.com — terminal
              </span>
              <span className="ml-auto text-[10px] text-slate-600 font-mono">
                {fr ? 'Ctrl+` pour fermer' : 'Ctrl+` to close'}
              </span>
            </div>

            {/* Output */}
            <div className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-0.5">
              {output.map((line, i) => (
                <div
                  key={i}
                  className={
                    line.type === 'input' ? 'text-slate-300' :
                    line.type === 'success' ? 'text-emerald-400' :
                    line.type === 'error' ? 'text-red-400' :
                    'text-slate-400'
                  }
                >
                  {line.text}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 px-4 py-3 border-t border-slate-800 shrink-0">
              <span className="text-emerald-400 font-mono text-sm shrink-0">{PROMPT}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-slate-200 font-mono text-sm outline-none caret-emerald-400"
                autoComplete="off"
                spellCheck={false}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
