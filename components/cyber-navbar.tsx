'use client'

import React, { useState, useEffect } from 'react'
import { Terminal, Shield, Zap, Volume2, VolumeX, Code2, Globe } from 'lucide-react'
import { cyberAudio } from '@/lib/cyber-audio'

interface NavbarProps {
  onOpenTerminal: () => void;
  activeSection: string;
}

export function CyberNavbar({ onOpenTerminal, activeSection }: NavbarProps) {
  const [audioMuted, setAudioMuted] = useState(false)
  const [systemUptime, setSystemUptime] = useState('99.98%')
  const [ping, setPing] = useState(12)

  useEffect(() => {
    const interval = setInterval(() => {
      setPing(Math.floor(8 + Math.random() * 8))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const toggleSound = () => {
    cyberAudio.enabled = audioMuted
    setAudioMuted(!audioMuted)
    if (audioMuted) {
      cyberAudio.playExecute()
    }
  }

  const navItems = [
    { label: 'MANIFESTO', href: '#manifesto' },
    { label: 'SCHOOL', href: '#school' },
    { label: 'LABS', href: '#labs' },
    { label: 'ATLAS', href: '#atlas' },
    { label: 'GUILDS', href: '#guilds' },
    { label: 'SHIPPED', href: '#shipped' },
  ]

  const handleNavClick = (href: string) => {
    cyberAudio.playTerminalKey()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#00F0FF]/20 bg-[#050508]/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Terminal Logo */}
        <div className="flex items-center space-x-3">
          <a 
            href="#"
            onClick={() => cyberAudio.playExecute()}
            className="group flex items-center space-x-2.5 font-mono text-sm tracking-wider text-white transition-all hover:text-[#00FF9F]"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded border border-[#00F0FF]/40 bg-[#00F0FF]/10 text-[#00F0FF] group-hover:border-[#00FF9F] group-hover:text-[#00FF9F] group-hover:shadow-[0_0_12px_rgba(0,255,159,0.4)] transition-all">
              <span className="font-bold text-xs">{'>_'}</span>
            </span>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-base text-white group-hover:text-[#00FF9F] transition-colors">
                KrackedDevs
              </span>
              <span className="text-[9px] text-[#00F0FF]/70 tracking-widest leading-none">
                KRACKED_OS // MY
              </span>
            </div>
          </a>

          <div className="hidden sm:flex items-center pl-3 border-l border-white/10 text-[10px] text-[#94a3b8] font-mono space-x-2">
            <span className="text-zinc-600">LOC:</span>
            <span className="text-[#00F0FF]">KUL-01</span>
            <span className="text-zinc-600">PING:</span>
            <span className="text-[#00FF9F]">{ping}ms</span>
          </div>
        </div>

        {/* Center / Right Navigation Items */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/5 rounded border border-transparent hover:border-[#00F0FF]/30 transition-all duration-150 flex items-center space-x-1"
            >
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Status indicator + Sound Toggle + Interactive Terminal Drawer Trigger */}
        <div className="flex items-center space-x-3">
          
          {/* Audio Synthesizer Feedback Toggle */}
          <button
            onClick={toggleSound}
            title={audioMuted ? "Enable Audio Feedback" : "Mute Audio Feedback"}
            className="p-1.5 rounded border border-white/10 bg-white/5 hover:border-[#00FF9F]/40 hover:text-[#00FF9F] text-zinc-400 transition-colors"
          >
            {audioMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#00FF9F]" />}
          </button>

          {/* System Online Badge */}
          <div className="hidden sm:flex items-center space-x-2 px-2.5 py-1 rounded-full border border-[#00FF9F]/30 bg-[#00FF9F]/5 text-[11px] font-mono text-[#00FF9F]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF9F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF9F]"></span>
            </span>
            <span className="font-semibold tracking-wider">SYS_ONLINE</span>
          </div>

          {/* Terminal Launcher Button */}
          <button
            onClick={() => {
              cyberAudio.playExecute()
              onOpenTerminal()
            }}
            className="group flex items-center space-x-2 px-3 py-1.5 rounded bg-[#00F0FF]/10 hover:bg-[#00F0FF]/20 border border-[#00F0FF]/50 hover:border-[#00F0FF] text-[#00F0FF] text-xs font-mono font-bold tracking-wider hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
          >
            <Terminal className="w-3.5 h-3.5 group-hover:rotate-6 transition-transform" />
            <span className="hidden sm:inline">TERMINAL</span>
            <span>{'>_'}</span>
          </button>
        </div>

      </div>
    </header>
  )
}
