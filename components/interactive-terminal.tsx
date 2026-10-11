'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles, Shield, Cpu, RefreshCw } from 'lucide-react'
import { cyberAudio } from '@/lib/cyber-audio'
import { MALAYSIA_NODES, SHIPPED_PROJECTS, GUILDS_DATA } from '@/lib/kracked-data'

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  type: 'input' | 'output' | 'error' | 'system';
  content: string | React.ReactNode;
}

export function InteractiveTerminal({ isOpen, onClose }: InteractiveTerminalProps) {
  const [inputVal, setInputVal] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      type: 'system',
      content: 'KRACKED_OS [Version 2.0.4 - BETA-RELEASE // MALAYSIA KUL-CORE]',
    },
    {
      id: 'init-2',
      type: 'system',
      content: 'Kernel connected to 3,408 active builders across 24 guilds.',
    },
    {
      id: 'init-3',
      type: 'system',
      content: 'Type "help" to display available terminal commands or "manifesto" to read core tenets.',
    },
  ])

  const inputRef = useRef<HTMLInputElement>(null)
  const terminalEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [logs])

  if (!isOpen) return null

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase()
    cyberAudio.playExecute()

    const newLogs: CommandLog[] = [
      ...logs,
      {
        id: `cmd-${Date.now()}`,
        type: 'input',
        content: `guest@kracked_os:~$ ${rawCmd}`,
      },
    ]

    if (rawCmd.trim()) {
      setHistory((prev) => [...prev, rawCmd.trim()])
      setHistoryIndex(-1)
    }

    switch (cmd) {
      case 'help':
        newLogs.push({
          id: `out-${Date.now()}`,
          type: 'output',
          content: (
            <div className="space-y-1 text-zinc-300">
              <div className="text-[#00FF9F] font-bold">AVAILABLE COMMANDS:</div>
              <div><span className="text-[#00F0FF]">help</span> - Display this guide</div>
              <div><span className="text-[#00F0FF]">manifesto</span> - Read the KrackedDevs builder philosophy</div>
              <div><span className="text-[#00F0FF]">stats</span> - View real-time nationwide telemetry</div>
              <div><span className="text-[#00F0FF]">nodes</span> - List regional hubs (KL, Penang, Sarawak, Sabah, JB)</div>
              <div><span className="text-[#00F0FF]">guilds</span> - Display active builder factions</div>
              <div><span className="text-[#00F0FF]">shipped</span> - View recent high-rarity deployments</div>
              <div><span className="text-[#00F0FF]">join</span> - Authenticate builder passport & Discord link</div>
              <div><span className="text-[#00F0FF]">neofetch</span> - Render KRACKED_OS system banner</div>
              <div><span className="text-[#00F0FF]">clear</span> - Clear terminal buffer</div>
              <div><span className="text-[#00F0FF]">exit</span> - Close terminal window</div>
            </div>
          ),
        })
        break

      case 'manifesto':
        newLogs.push({
          id: `out-${Date.now()}`,
          type: 'output',
          content: (
            <div className="p-3 bg-black/60 rounded border border-[#00F0FF]/30 space-y-2 text-zinc-300">
              <div className="text-[#00F0FF] font-bold text-sm">THE KRACKED DEVS MANIFESTO:</div>
              <p>1. <strong>We build for production, not for slide decks.</strong> Proof-of-ship is the only resume that matters.</p>
              <p>2. <strong>Malaysia is a tier-1 engineering powerhouse.</strong> We refuse to be just passive consumers of Western or East-Asian tech; we forge our own LLMs, payment rails, hardware and protocols.</p>
              <p>3. <strong>Zero Gatekeeping.</strong> High school hackers ship alongside seasoned staff engineers. XP is awarded purely on pull requests and deployments.</p>
              <p className="text-[#00FF9F] font-bold pt-1">{'// SHIP CODE. EARN XP. MAKE MALAYSIA BUILD.'}</p>
            </div>
          ),
        })
        break

      case 'stats':
        newLogs.push({
          id: `out-${Date.now()}`,
          type: 'output',
          content: (
            <div className="p-3 bg-black/60 rounded border border-[#00FF9F]/30 space-y-1">
              <div className="text-[#00FF9F] font-bold">NATIONWIDE TELEMETRY METRICS:</div>
              <div>• Total Builders: <span className="text-white font-bold">3,408 Verified Operatives</span></div>
              <div>• Projects Shipped: <span className="text-[#00F0FF] font-bold">546 Production Releases</span></div>
              <div>• Active Guilds: <span className="text-[#FF2D95] font-bold">24 Factions</span></div>
              <div>• Network Latency: <span className="text-[#00FF9F]">8ms (KUL-1 Fiber Core)</span></div>
              <div>• Grant Capital Allocated: <span className="text-amber-400 font-bold">RM 1,250,000+</span></div>
            </div>
          ),
        })
        break

      case 'nodes':
        newLogs.push({
          id: `out-${Date.now()}`,
          type: 'output',
          content: (
            <div className="space-y-1.5 text-zinc-300">
              <div className="text-[#00F0FF] font-bold">MALAYSIA REGIONAL FORGES:</div>
              {MALAYSIA_NODES.map((n) => (
                <div key={n.id} className="text-xs">
                  <span className="text-[#00FF9F] font-bold">[{n.id.toUpperCase()}]</span> {n.name} — {n.builders} Devs | {n.shipped} Shipped ({n.ping}ms ping)
                </div>
              ))}
            </div>
          ),
        })
        break

      case 'guilds':
        newLogs.push({
          id: `out-${Date.now()}`,
          type: 'output',
          content: (
            <div className="space-y-1.5 text-zinc-300">
              <div className="text-[#FF2D95] font-bold">ACTIVE BUILDER FACTIONS:</div>
              {GUILDS_DATA.map((g) => (
                <div key={g.id} className="text-xs">
                  <span className="text-[#00F0FF]">#{g.tag}</span> - <strong>{g.name}</strong> ({g.members} members, {g.projectsShipped} shipped)
                </div>
              ))}
            </div>
          ),
        })
        break

      case 'shipped':
        newLogs.push({
          id: `out-${Date.now()}`,
          type: 'output',
          content: (
            <div className="space-y-1.5 text-zinc-300">
              <div className="text-[#00FF9F] font-bold">LATEST NOTABLE RELEASES:</div>
              {SHIPPED_PROJECTS.slice(0, 4).map((p) => (
                <div key={p.id} className="text-xs">
                  <span className="text-amber-400">[{p.rarity}]</span> <strong>{p.title}</strong> by {p.builder} — {p.tagline}
                </div>
              ))}
            </div>
          ),
        })
        break

      case 'neofetch':
        newLogs.push({
          id: `out-${Date.now()}`,
          type: 'output',
          content: (
            <pre className="text-[11px] leading-tight text-[#00F0FF] font-mono select-none overflow-x-auto">
{`   ____  ______  ___   ________ __ __________  ____  _______
  / __ \\/ ____/ /   | / ____/ //_// ____/ __ \\/ __ \\/ ___/
 / /_/ / /     / /| |/ /   / ,<  / __/ / / / / / / /\\__ \\ 
/ ____/ /___  / ___ / /___/ /| |/ /___/ /_/ / /_/ /___/ / 
/_/   \\____/ /_/  |_\\____/_/ |_/_____/_____/\\____//____/  
                                                        
OS: KRACKED_OS v2.0 (Malaysian Builder Distribution)
Host: Vercel Edge Serverless / Next.js 16
Kernel: Node 22 / Turbopack Stable / React 19
Uptime: 99.98% (24/7 War Room Active)
Packages: 546 Shipped Payloads
Shell: KRACKED_BASH 5.2.15
Theme: Cyberpunk Terminal [Green #00FF9F / Cyan #00F0FF]`}
            </pre>
          ),
        })
        break

      case 'join':
        newLogs.push({
          id: `out-${Date.now()}`,
          type: 'output',
          content: (
            <div className="p-3 bg-[#00FF9F]/10 rounded border border-[#00FF9F]/40 space-y-2 text-zinc-200">
              <div className="text-[#00FF9F] font-bold">AUTHENTICATION INITIATED:</div>
              <p>Welcome to the resistance, Operative. Join our Discord server and introduce yourself in #ship-or-die.</p>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-3 py-1.5 bg-[#00FF9F] text-black font-bold rounded text-xs hover:bg-[#00F0FF] transition-colors"
              >
                JOIN OFFICIAL DISCORD [EXTERNAL]
              </a>
            </div>
          ),
        })
        break

      case 'clear':
        setLogs([])
        setInputVal('')
        return

      case 'exit':
        onClose()
        return

      case '':
        break

      default:
        newLogs.push({
          id: `err-${Date.now()}`,
          type: 'error',
          content: `kracked_os: command not found: "${rawCmd}". Type "help" for a list of valid commands.`,
        })
        break
    }

    setLogs(newLogs)
    setInputVal('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    cyberAudio.playTerminalKey()

    if (e.key === 'Enter') {
      handleCommand(inputVal)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length > 0) {
        const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(nextIndex)
        setInputVal(history[nextIndex] || '')
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (history.length > 0 && historyIndex !== -1) {
        const nextIndex = historyIndex + 1
        if (nextIndex >= history.length) {
          setHistoryIndex(-1)
          setInputVal('')
        } else {
          setHistoryIndex(nextIndex)
          setInputVal(history[nextIndex])
        }
      }
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
      
      {/* Terminal Window Box */}
      <div className="relative w-full max-w-4xl h-[80vh] max-h-[700px] rounded-xl border border-[#00F0FF]/40 bg-[#080812] shadow-[0_0_60px_rgba(0,240,255,0.25)] flex flex-col overflow-hidden font-mono text-xs sm:text-sm">
        
        {/* Top Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0c0c1a] border-b border-white/10 select-none">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5">
              <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400" title="Close" />
              <button className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-400" title="Minimize" />
              <button className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400" title="Expand" />
            </div>
            <div className="flex items-center space-x-2 text-xs text-zinc-400">
              <TerminalIcon className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span className="font-bold text-white">KRACKED_CLI v2.0</span>
              <span className="text-zinc-600">|</span>
              <span className="text-[#00FF9F]">ROOT_SESSION</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-xs text-zinc-500">
            <span className="hidden sm:inline">ESC to close</span>
            <button 
              onClick={onClose} 
              className="p-1 rounded hover:bg-white/10 text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Terminal Output Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2 bg-[#05050a]/95 scanlines">
          {logs.map((log) => (
            <div
              key={log.id}
              className={`leading-relaxed ${
                log.type === 'input'
                  ? 'text-white font-bold'
                  : log.type === 'error'
                  ? 'text-rose-400'
                  : log.type === 'system'
                  ? 'text-[#00F0FF]/80'
                  : 'text-zinc-300'
              }`}
            >
              {log.content}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Command Input Prompt Bar */}
        <div className="p-3 bg-[#0a0a16] border-t border-white/10 flex items-center space-x-2">
          <span className="text-[#00FF9F] font-bold whitespace-nowrap">
            guest@kracked_os:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'help', 'manifesto', 'shipped', 'stats'..."
            className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder:text-zinc-600"
            autoFocus
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="px-2.5 py-1 rounded bg-[#00F0FF]/20 hover:bg-[#00F0FF] text-[#00F0FF] hover:text-black font-bold text-xs transition-colors flex items-center space-x-1"
          >
            <span>EXEC</span>
            <CornerDownLeft className="w-3 h-3" />
          </button>
        </div>

      </div>

    </div>
  )
}
