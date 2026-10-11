'use client'

import React, { useEffect, useState } from 'react'
import { Terminal, Zap, Flame, Radio, Code2, ShieldAlert } from 'lucide-react'
import { cyberAudio } from '@/lib/cyber-audio'

const TICKER_ITEMS = [
  { id: '1', loc: 'KUL-01', user: '@faris.dev', action: 'shipped AgentLah v2.1 (Multi-agent router)', xp: '+250 XP', tag: 'AI_AGENT' },
  { id: '2', loc: 'PENANG', user: '@silicon_wong', action: 'verified ESP32 LoRa Gateway firmware', xp: '+180 XP', tag: 'HARDWARE' },
  { id: '3', loc: 'SARAWAK', user: '@borneo_hacker', action: 'deployed RinggitZK on Solana testnet', xp: '+400 XP', tag: 'WEB3' },
  { id: '4', loc: 'CYBERJAYA', user: '@aisyah_ai', action: 'fine-tuned MamakOrder Malay-English LLM', xp: '+320 XP', tag: 'LLM' },
  { id: '5', loc: 'JB-FORGE', user: '@hazim_shippers', action: 'unlocked SHIPPER RARE passport status', xp: '+500 XP', tag: 'BADGE' },
  { id: '6', loc: 'KUL-02', user: '@dev_syed', action: 'submitted KD Labs Micro-Grant application', xp: 'PENDING', tag: 'LABS' },
]

export function LiveTicker() {
  const [tickerIndex, setTickerIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % TICKER_ITEMS.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full bg-[#030308] border-y border-[#00F0FF]/20 py-2.5 px-4 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono gap-3">
        
        {/* Left Live Pulse Label */}
        <div className="flex items-center space-x-2 shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF9F] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF9F]"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-[#00FF9F] tracking-wider uppercase">
            LIVE_FEED //
          </span>
        </div>

        {/* Center Animated Activity Stream */}
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center space-x-2 text-zinc-300 transition-all duration-300">
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30 shrink-0">
              [{TICKER_ITEMS[tickerIndex].loc}]
            </span>
            <span className="text-white font-bold shrink-0">
              {TICKER_ITEMS[tickerIndex].user}
            </span>
            <span className="text-zinc-400 truncate">
              {TICKER_ITEMS[tickerIndex].action}
            </span>
            <span className="text-[#00FF9F] font-bold shrink-0 hidden sm:inline">
              {TICKER_ITEMS[tickerIndex].xp}
            </span>
          </div>
        </div>

        {/* Right Stats Quick Pill */}
        <div className="hidden md:flex items-center space-x-3 text-[10px] text-zinc-500 shrink-0">
          <span className="text-zinc-400">NETWORK TPS: <span className="text-[#00F0FF]">1,420</span></span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400">NEXT DEMO NIGHT: <span className="text-[#FF2D95]">FRI 9PM</span></span>
        </div>

      </div>
    </div>
  )
}
