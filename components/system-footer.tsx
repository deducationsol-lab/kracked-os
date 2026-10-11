'use client'

import React, { useState, useEffect } from 'react'
import { Terminal, Shield, Wifi, Cpu, Heart, ExternalLink, Globe } from 'lucide-react'
import { cyberAudio } from '@/lib/cyber-audio'

interface SystemFooterProps {
  onOpenTerminal: () => void;
}

export function SystemFooter({ onOpenTerminal }: SystemFooterProps) {
  const [mytTime, setMytTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      // Format as Malaysia Time (MYT GMT+8)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kuala_Lumpur',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }
      setMytTime(new Intl.DateTimeFormat('en-GB', options).format(now))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="w-full border-t border-[#00F0FF]/20 bg-[#050508] font-mono text-xs">
      
      {/* Top Status Bar Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-zinc-400">
        
        {/* Col 1: System Identification */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white font-bold">
            <span className="text-[#00FF9F]">{'>_'}</span>
            <span>KRACKED_OS v2.0 BETA</span>
          </div>
          <p className="text-[11px] text-zinc-500 leading-relaxed">
            The sovereign operating system for Malaysian software engineers, AI builders, and hackers.
          </p>
          <div className="text-[10px] text-[#00F0FF] flex items-center space-x-1.5 pt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9F] animate-ping" />
            <span>KUALA LUMPUR FIBER BACKBONE</span>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="space-y-1.5 text-[11px]">
          <div className="text-white font-bold text-xs mb-2">SYSTEM PROTOCOLS</div>
          <div><a href="#manifesto" className="hover:text-[#00F0FF] transition-colors">// MANIFESTO</a></div>
          <div><a href="#school" className="hover:text-[#00F0FF] transition-colors">// AI_BUILDER_SCHOOL</a></div>
          <div><a href="#labs" className="hover:text-[#00F0FF] transition-colors">// KD_VENTURE_LABS</a></div>
          <div><a href="#atlas" className="hover:text-[#00F0FF] transition-colors">// REGIONAL_ATLAS</a></div>
          <div><a href="#guilds" className="hover:text-[#00F0FF] transition-colors">// GUILD_REGISTRY</a></div>
        </div>

        {/* Col 3: Live Telemetry */}
        <div className="space-y-1.5 text-[11px]">
          <div className="text-white font-bold text-xs mb-2">TELEMETRY & HARDWARE</div>
          <div className="flex justify-between">
            <span className="text-zinc-500">MYT TIME:</span>
            <span className="text-[#00FF9F] font-bold">{mytTime || '14:22:08'} MYT</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">STATUS:</span>
            <span className="text-[#00F0FF]">ALL_SYSTEMS_GO</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">NODES:</span>
            <span className="text-white">7 REGIONAL FORGES</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">COMMUNITY:</span>
            <span className="text-[#FF2D95]">3,408 OPERATIVES</span>
          </div>
        </div>

        {/* Col 4: Terminal Command Shortcut */}
        <div className="space-y-2">
          <div className="text-white font-bold text-xs mb-2">COMMAND PROMPT</div>
          <p className="text-[11px] text-zinc-500">
            Launch the interactive root terminal to test CLI commands or query builder passports.
          </p>
          <button
            onClick={() => {
              cyberAudio.playExecute()
              onOpenTerminal()
            }}
            className="w-full py-2 px-3 rounded bg-white/5 hover:bg-[#00F0FF]/15 border border-[#00F0FF]/30 hover:border-[#00F0FF] text-[#00F0FF] text-xs font-bold transition-all flex items-center justify-between"
          >
            <span>LAUNCH KRACKED_CLI</span>
            <span>{'>_'}</span>
          </button>
        </div>

      </div>

      {/* Bottom Thin Status Strip */}
      <div className="border-t border-white/5 bg-[#030306] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} KrackedDevs. Built with blood, sweat, and teh tarik in Malaysia.
          </div>
          <div className="flex items-center space-x-4">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => cyberAudio.playTerminalKey()}>
              TERMS_OF_SHIP
            </span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => cyberAudio.playTerminalKey()}>
              PRIVACY_CIPHER
            </span>
            <span className="text-[#00FF9F]">SYS_VER 2.0.4</span>
          </div>
        </div>
      </div>

    </footer>
  )
}
