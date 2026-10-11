'use client'

import React, { useState } from 'react'
import { MessageSquare, Terminal, Rocket, Users, Shield, Zap, Flame, Code, Cpu, ChevronRight, CheckCircle2 } from 'lucide-react'
import { cyberAudio } from '@/lib/cyber-audio'

interface ThreeDoorsProps {
  onOpenTerminal: () => void;
  onSelectDoor?: (door: string) => void;
}

export function ThreeDoors({ onOpenTerminal, onSelectDoor }: ThreeDoorsProps) {
  const [activeTab, setActiveTab] = useState<'community' | 'school' | 'labs'>('community')

  return (
    <section id="three-doors" className="relative w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="mb-10 text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF]">
          <span>SYSTEM_ARCHITECTURE // THREE_PILLARS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-sans text-white tracking-tight">
          Three Doors. One Unified OS.
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 font-mono max-w-2xl mx-auto">
          Whether you want raw builder camaraderie, structured cutting-edge AI apprenticeships, or venture venture incubation with grant capital.
        </p>
      </div>

      {/* Grid of Three Distinct System Windows */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        
        {/* DOOR 1: Community (Magenta #FF2D95 Theme) */}
        <div className="group relative rounded-xl border border-[#FF2D95]/30 bg-[#080812] p-6 lg:p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(255,45,149,0.15)] hover:shadow-[0_0_40px_rgba(255,45,149,0.3)] hover:border-[#FF2D95] transition-all duration-300">
          
          {/* Top Window Bar */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center space-x-2 text-[#FF2D95]">
                <MessageSquare className="w-4 h-4" />
                <span className="font-bold">SYSTEM_01 // COMMUNITY</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#FF2D95]/20 text-[#FF2D95] font-bold border border-[#FF2D95]/40">
                OPEN_GATE
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-sans text-white group-hover:text-[#FF2D95] transition-colors">
                The War Room
              </h3>
              <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                24/7 high-octane voice channels, midnight shipping marathons, bounty drops, and cross-state builder meetups in KL, Penang & JB.
              </p>
            </div>

            {/* Feature Bullet Points */}
            <div className="space-y-2.5 pt-2 text-xs font-mono text-zinc-300">
              <div className="flex items-start space-x-2">
                <span className="text-[#FF2D95] font-bold">{'>'}</span>
                <span><strong>Ship-or-Die Demo Nights:</strong> Every Friday 9PM. Pitch code or get muted.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[#FF2D95] font-bold">{'>'}</span>
                <span><strong>Bounty Drops:</strong> Real cash rewards posted by SEA tech startups.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[#FF2D95] font-bold">{'>'}</span>
                <span><strong>Guild Factions:</strong> Form 4-person strike squads for hackathons.</span>
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-6 mt-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-zinc-500">
              <span>STATUS: 1,420 ONLINE NOW</span>
              <span className="text-[#FF2D95]">FREE ENTRY</span>
            </div>
            <button
              onClick={() => {
                cyberAudio.playExecute()
                onOpenTerminal()
              }}
              className="w-full py-3 rounded bg-[#FF2D95]/10 hover:bg-[#FF2D95] border border-[#FF2D95]/50 hover:border-[#FF2D95] text-[#FF2D95] hover:text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all duration-200"
            >
              <span>JOIN_DISCORD_WAR_ROOM</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* DOOR 2: AI Builder School (Cyan #00F0FF Theme) */}
        <div className="group relative rounded-xl border border-[#00F0FF]/30 bg-[#080812] p-6 lg:p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(0,240,255,0.15)] hover:shadow-[0_0_40px_rgba(0,240,255,0.3)] hover:border-[#00F0FF] transition-all duration-300">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center space-x-2 text-[#00F0FF]">
                <Terminal className="w-4 h-4" />
                <span className="font-bold">SYSTEM_02 // SCHOOL</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#00F0FF]/20 text-[#00F0FF] font-bold border border-[#00F0FF]/40">
                COHORT_V4
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-sans text-white group-hover:text-[#00F0FF] transition-colors">
                AI Builder School
              </h3>
              <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                Terminal-driven curriculum. Go from zero to deploying multi-agent swarms, custom fine-tunes, and fullstack production apps in 6 weeks.
              </p>
            </div>

            {/* Feature Bullet Points */}
            <div className="space-y-2.5 pt-2 text-xs font-mono text-zinc-300">
              <div className="flex items-start space-x-2">
                <span className="text-[#00F0FF] font-bold">{'>'}</span>
                <span><strong>Agent Architectures:</strong> LangGraph, Vercel AI SDK, Tool Calling, MCPs.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[#00F0FF] font-bold">{'>'}</span>
                <span><strong>Cursor & Claude Speedrunning:</strong> 10x shipping velocity workflows.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[#00F0FF] font-bold">{'>'}</span>
                <span><strong>Proof-of-Ship Credential:</strong> Verified on-chain builder certificate.</span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-zinc-500">
              <span>ACCEPTANCE: MERIT BASED</span>
              <span className="text-[#00F0FF]">APPLICATIONS OPEN</span>
            </div>
            <button
              onClick={() => {
                cyberAudio.playExecute()
                onOpenTerminal()
              }}
              className="w-full py-3 rounded bg-[#00F0FF]/10 hover:bg-[#00F0FF] border border-[#00F0FF]/50 hover:border-[#00F0FF] text-[#00F0FF] hover:text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all duration-200"
            >
              <span>ACCESS_SYLLABUS & ENROLL</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* DOOR 3: KD Labs (Cyber Green #00FF9F Theme) */}
        <div className="group relative rounded-xl border border-[#00FF9F]/30 bg-[#080812] p-6 lg:p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(0,255,159,0.15)] hover:shadow-[0_0_40px_rgba(0,255,159,0.3)] hover:border-[#00FF9F] transition-all duration-300">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center space-x-2 text-[#00FF9F]">
                <Rocket className="w-4 h-4" />
                <span className="font-bold">SYSTEM_03 // KD LABS</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#00FF9F]/20 text-[#00FF9F] font-bold border border-[#00FF9F]/40">
                VENTURE_INCUBATOR
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-sans text-white group-hover:text-[#00FF9F] transition-colors">
                KD Labs & Grants
              </h3>
              <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                Product foundry backing the top 1% Malaysian builders. Micro-grants, GPU compute clusters, legal structure, and VC Demo Days.
              </p>
            </div>

            {/* Feature Bullet Points */}
            <div className="space-y-2.5 pt-2 text-xs font-mono text-zinc-300">
              <div className="flex items-start space-x-2">
                <span className="text-[#00FF9F] font-bold">{'>'}</span>
                <span><strong>RM 50,000 Zero-Equity Grants:</strong> Backing early experimental MVPs.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[#00FF9F] font-bold">{'>'}</span>
                <span><strong>H100 & Claude GPU Credits:</strong> Free API compute pipeline for prototypes.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[#00FF9F] font-bold">{'>'}</span>
                <span><strong>Direct VC Introductions:</strong> Backed by top SEA & Silicon Valley angels.</span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10">
            {/* Live Seat Capacity Gauge */}
            <div className="mb-3 space-y-1">
              <div className="flex justify-between text-[11px] font-mono">
                <span className="text-zinc-400">LABS CAPACITY:</span>
                <span className="text-[#00FF9F] font-bold">12 / 16 SEATS FILLED</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-black/60 overflow-hidden border border-white/10">
                <div className="h-full bg-gradient-to-r from-[#00FF9F] to-[#00F0FF] w-[75%]" />
              </div>
            </div>

            <button
              onClick={() => {
                cyberAudio.playExecute()
                onOpenTerminal()
              }}
              className="w-full py-3 rounded bg-[#00FF9F]/10 hover:bg-[#00FF9F] border border-[#00FF9F]/50 hover:border-[#00FF9F] text-[#00FF9F] hover:text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all duration-200"
            >
              <span>SUBMIT_PROJECT_FOR_GRANT</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </section>
  )
}
