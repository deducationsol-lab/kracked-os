'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Terminal, Users, Rocket, Shield, Star, Sparkles, ExternalLink, ArrowRight, Zap, Radio, CornerDownRight, X, Layers, Cpu } from 'lucide-react'
import { cyberAudio } from '@/lib/cyber-audio'
import { HERO_OPERATIVES, Operative } from '@/lib/kracked-data'

interface HeroSectionProps {
  onOpenTerminal: () => void;
  onJoinClick: () => void;
}

export function HeroSection({ onOpenTerminal, onJoinClick }: HeroSectionProps) {
  const [selectedOperative, setSelectedOperative] = useState<Operative | null>(null)

  const handleHeroBtnClick = () => {
    cyberAudio.playExecute()
    onOpenTerminal()
  }

  return (
    <section className="relative w-full flex flex-col justify-between overflow-hidden pt-4 sm:pt-6 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background Ambience: Subtle Neon Gradients & Scanlines */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#00FF9F]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#FF2D95]/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0 cyber-grid opacity-70" />
      </div>

      {/* Main Terminal Frame Wrapper with Cyber Corners */}
      <div className="relative w-full rounded-xl border border-[#00F0FF]/25 bg-[#080812]/90 backdrop-blur-xl p-4 sm:p-8 lg:p-10 shadow-[0_0_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden">
        
        {/* Frame Top Header Bar */}
        <div className="flex items-center justify-between pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-white/10 text-xs font-mono text-zinc-400">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF2D95]/80 shadow-[0_0_8px_#FF2D95]" />
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#00F0FF]/80 shadow-[0_0_8px_#00F0FF]" />
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#00FF9F]/80 shadow-[0_0_8px_#00FF9F]" />
            <span className="text-zinc-500 pl-1 sm:pl-2 text-[11px] sm:text-xs truncate">ROOT@KRACKED_OS: ~//malaysia.builder.grid</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 text-[10px] sm:text-[11px] text-zinc-500">
            <span className="hidden sm:inline">MEM: 14.2%</span>
            <span className="text-[#00FF9F] flex items-center space-x-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00FF9F] animate-pulse" />
              <span>SYS_ONLINE</span>
            </span>
          </div>
        </div>

        {/* Hero Grid: Left Content + Right Glow Map with Floating Operatives */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Column: Headlines, Ecosystem Brief, Actions & HUD Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-6 z-10">
            
            {/* Version Badge */}
            <div className="inline-flex items-center space-x-2 px-2.5 sm:px-3 py-1 rounded bg-white/5 border border-white/10 w-fit text-[11px] sm:text-xs font-mono">
              <span className="text-[#00FF9F] font-bold">{'>_'}</span>
              <span className="text-zinc-300 font-semibold tracking-wider">KRACKED_OS v2.0 BETA</span>
              <span className="text-zinc-600">•</span>
              <span className="text-[#00F0FF] text-[10px] tracking-widest font-mono">MALAYSIA CHAPTER</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black font-sans tracking-tight text-white leading-[1.1]">
                KRACKED_OS v2.0 BETA. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#00FF9F] to-[#00F0FF] text-glow-cyan">
                  Where Malaysia comes to build.
                </span>
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-zinc-300 font-mono leading-relaxed pt-1 max-w-xl">
                A self-sustaining builder ecosystem. <span className="text-white font-medium">Community + School + Labs.</span> Free to join. XP for shipping, not for showing up.
              </p>
            </div>

            {/* Terminal Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              
              {/* Primary Cyber Button */}
              <button
                onClick={handleHeroBtnClick}
                onMouseEnter={() => cyberAudio.playTerminalKey()}
                className="group relative inline-flex items-center space-x-2.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded bg-[#00F0FF] hover:bg-[#00FF9F] text-[#050508] font-mono font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,255,159,0.6)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>ENTER_THE_TERMINAL</span>
                <span className="font-bold text-sm sm:text-base transition-transform group-hover:translate-x-1">{'>_'}</span>
              </button>

              {/* Secondary Join Guild / Manifesto Button */}
              <button
                onClick={() => {
                  cyberAudio.playTerminalKey()
                  const el = document.getElementById('three-doors')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#00F0FF]/50 text-zinc-300 hover:text-white font-mono text-xs font-semibold tracking-wider transition-all"
              >
                <span>EXPLORE DOORS</span>
                <CornerDownRight className="w-3.5 h-3.5 text-[#00F0FF]" />
              </button>
            </div>

            {/* Bottom HUD Box: 3 Major Stats */}
            <div className="pt-2 sm:pt-4">
              <div className="rounded-lg border border-[#00FF9F]/30 bg-[#050508]/80 p-3 sm:p-5 shadow-[inset_0_0_20px_rgba(0,255,159,0.05)]">
                <div className="text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-widest pb-2.5 flex items-center justify-between border-b border-white/5">
                  <span className="flex items-center space-x-1.5">
                    <Radio className="w-3 h-3 text-[#00FF9F] animate-pulse" />
                    <span className="text-zinc-400">TELEMETRY_STREAM // LIVE</span>
                  </span>
                  <span className="text-[#00FF9F]">24H VERIFIED ON-CHAIN</span>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-2.5">
                  
                  {/* Builders */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2.5">
                    <div className="p-1.5 sm:p-2 rounded bg-[#00FF9F]/10 border border-[#00FF9F]/30 text-[#00FF9F] shrink-0">
                      <Users className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-base sm:text-2xl font-black font-mono text-[#00FF9F] tracking-tight">
                        3,408
                      </div>
                      <div className="text-[9px] sm:text-xs font-mono uppercase text-zinc-400 font-semibold tracking-wider">
                        BUILDERS
                      </div>
                    </div>
                  </div>

                  {/* Shipped */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2.5">
                    <div className="p-1.5 sm:p-2 rounded bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] shrink-0">
                      <Rocket className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-base sm:text-2xl font-black font-mono text-[#00F0FF] tracking-tight">
                        546
                      </div>
                      <div className="text-[9px] sm:text-xs font-mono uppercase text-zinc-400 font-semibold tracking-wider">
                        SHIPPED
                      </div>
                    </div>
                  </div>

                  {/* Guilds */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2.5">
                    <div className="p-1.5 sm:p-2 rounded bg-[#FF2D95]/10 border border-[#FF2D95]/30 text-[#FF2D95] shrink-0">
                      <Shield className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-base sm:text-2xl font-black font-mono text-[#FF2D95] tracking-tight">
                        24
                      </div>
                      <div className="text-[9px] sm:text-xs font-mono uppercase text-zinc-400 font-semibold tracking-wider">
                        GUILDS
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Stylized Particle Map of Malaysia + Layered Floating Operatives */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center space-y-4">
            
            {/* Glowing Malaysia Particle Image with Cyber Overlays */}
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[#00F0FF]/25 bg-[#020205] shadow-[0_0_40px_rgba(0,240,255,0.15)] group">
              
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20261011-230827-v2cHm1bYdpQa46xQHJILu1poeKf9pI.png"
                alt="Cyberpunk Glowing Particle Map of Malaysia"
                fill
                priority
                className="object-contain object-center scale-105 group-hover:scale-110 transition-transform duration-700 opacity-90"
              />

              {/* Scanlines & Particle Grid Overlay */}
              <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" />

              {/* Cyber Matrix Code Floaters over the map */}
              <div className="absolute top-3 left-3 font-mono text-[8px] sm:text-[9px] text-[#00F0FF]/70 space-y-0.5 pointer-events-none">
                <div>{'<node_12>'}</div>
                <div>{'inode/tcp:active'}</div>
                <div>{'init_build();'}</div>
              </div>

              <div className="absolute top-3 right-3 font-mono text-[8px] sm:text-[9px] text-[#00FF9F]/70 text-right space-y-0.5 pointer-events-none">
                <div>{'10010107010310'}</div>
                <div>{'v0.4010VAtp'}</div>
              </div>

              <div className="absolute bottom-3 left-3 font-mono text-[8px] sm:text-[9px] text-zinc-500 space-y-0.5 pointer-events-none">
                <div>{'// malaysia.builder.grid'}</div>
                <div className="text-[#00FF9F]">{'EST_ACTIVE_NODES: 3,408'}</div>
              </div>

              {/* Interactive Pulsing Hotspots on Map */}
              <div className="absolute top-[58%] left-[28%] pointer-events-none">
                <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-[#00F0FF]"></span>
                </span>
                <span className="absolute left-3.5 -top-1 font-mono text-[8px] sm:text-[9px] text-[#00F0FF] whitespace-nowrap bg-black/80 px-1 rounded border border-[#00F0FF]/30">
                  KL / CYBERJAYA
                </span>
              </div>

              <div className="absolute top-[40%] right-[32%] pointer-events-none">
                <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF9F] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-[#00FF9F]"></span>
                </span>
                <span className="absolute left-3.5 -top-1 font-mono text-[8px] sm:text-[9px] text-[#00FF9F] whitespace-nowrap bg-black/80 px-1 rounded border border-[#00FF9F]/30">
                  BORNEO TECH
                </span>
              </div>

              {/* Desktop Floating Operative Cards (Overlaid in Desktop, Responsive Grid in Mobile) */}
              <div className="hidden lg:block absolute right-3 top-3 w-52 z-20 space-y-2.5 pointer-events-auto">
                {/* SHIPPER RARE */}
                <div 
                  onClick={() => {
                    cyberAudio.playTerminalKey()
                    setSelectedOperative(HERO_OPERATIVES[0])
                  }}
                  className="p-3 rounded-lg border border-[#FF2D95]/40 bg-[#080812]/95 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.8),0_0_15px_rgba(255,45,149,0.25)] hover:border-[#FF2D95] hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10">
                    <div className="flex items-center space-x-1">
                      <span className="px-1.5 py-0.2 rounded text-[8px] font-mono font-bold bg-[#FF2D95]/20 text-[#FF2D95] border border-[#FF2D95]/40">
                        SHIPPER
                      </span>
                      <span className="px-1.5 py-0.2 rounded text-[8px] font-mono font-bold bg-purple-950/60 text-purple-300 border border-purple-500/30">
                        RARE
                      </span>
                    </div>
                    <span className="text-[9px] font-mono text-zinc-400">LVL 4</span>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded bg-black/60 border border-[#FF2D95]/30 flex items-center justify-center p-1 text-[#FF2D95]">
                      <Rocket className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold font-mono text-white">
                        SHIPPER
                      </div>
                      <div className="text-[9px] font-mono text-zinc-400 flex items-center space-x-1">
                        <span>PWR_LEVEL</span>
                        <span className="text-[#FF2D95] font-bold">78</span>
                      </div>
                      <div className="flex items-center space-x-0.5 text-[#FF2D95] pt-0.5">
                        <Star className="w-2 h-2 fill-current" />
                        <Star className="w-2 h-2 fill-current" />
                        <Star className="w-2 h-2 fill-current" />
                        <Star className="w-2 h-2 fill-current" />
                        <Star className="w-2 h-2 text-zinc-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* BUILDER RARE */}
                <div 
                  onClick={() => {
                    cyberAudio.playTerminalKey()
                    setSelectedOperative(HERO_OPERATIVES[1])
                  }}
                  className="p-3 rounded-lg border border-[#00FF9F]/40 bg-[#080812]/95 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.8),0_0_15px_rgba(0,255,159,0.25)] hover:border-[#00FF9F] hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10">
                    <div className="flex items-center space-x-1">
                      <span className="px-1.5 py-0.2 rounded text-[8px] font-mono font-bold bg-[#00FF9F]/20 text-[#00FF9F] border border-[#00FF9F]/40">
                        BUILDER
                      </span>
                      <span className="px-1.5 py-0.2 rounded text-[8px] font-mono font-bold bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                        RARE
                      </span>
                    </div>
                    <span className="text-[9px] font-mono text-zinc-400">LVL 4</span>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded bg-black/60 border border-[#00FF9F]/30 flex items-center justify-center p-1 text-[#00FF9F]">
                      <Zap className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold font-mono text-white">
                        BUILDER
                      </div>
                      <div className="text-[9px] font-mono text-zinc-400 flex items-center space-x-1">
                        <span>PWR_LEVEL</span>
                        <span className="text-[#00FF9F] font-bold">65</span>
                      </div>
                      <div className="flex items-center space-x-0.5 text-[#00FF9F] pt-0.5">
                        <Star className="w-2 h-2 fill-current" />
                        <Star className="w-2 h-2 fill-current" />
                        <Star className="w-2 h-2 fill-current" />
                        <Star className="w-2 h-2 fill-current" />
                        <Star className="w-2 h-2 text-zinc-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Mobile / Tablet Operatives Grid: Rendered below the map cleanly without blocking view */}
            <div className="grid grid-cols-2 gap-3 w-full lg:hidden">
              {/* Card 1: SHIPPER */}
              <div 
                onClick={() => {
                  cyberAudio.playTerminalKey()
                  setSelectedOperative(HERO_OPERATIVES[0])
                }}
                className="p-2.5 sm:p-3 rounded-lg border border-[#FF2D95]/40 bg-[#080812] shadow-[0_0_15px_rgba(255,45,149,0.2)] active:scale-95 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10 text-[9px] font-mono">
                  <span className="px-1.5 py-0.5 rounded bg-[#FF2D95]/20 text-[#FF2D95] font-bold border border-[#FF2D95]/30">SHIPPER</span>
                  <span className="text-zinc-400">LVL 4</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="p-1 rounded bg-black/60 border border-[#FF2D95]/30 text-[#FF2D95]">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold font-mono text-white">SHIPPER</div>
                    <div className="text-[9px] font-mono text-[#FF2D95] font-bold">PWR 78</div>
                  </div>
                </div>
              </div>

              {/* Card 2: BUILDER */}
              <div 
                onClick={() => {
                  cyberAudio.playTerminalKey()
                  setSelectedOperative(HERO_OPERATIVES[1])
                }}
                className="p-2.5 sm:p-3 rounded-lg border border-[#00FF9F]/40 bg-[#080812] shadow-[0_0_15px_rgba(0,255,159,0.2)] active:scale-95 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10 text-[9px] font-mono">
                  <span className="px-1.5 py-0.5 rounded bg-[#00FF9F]/20 text-[#00FF9F] font-bold border border-[#00FF9F]/30">BUILDER</span>
                  <span className="text-zinc-400">LVL 4</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="p-1 rounded bg-black/60 border border-[#00FF9F]/30 text-[#00FF9F]">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold font-mono text-white">BUILDER</div>
                    <div className="text-[9px] font-mono text-[#00FF9F] font-bold">PWR 65</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Operative Modal Popup if clicked */}
      {selectedOperative && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md rounded-xl border border-[#00F0FF]/40 bg-[#080814] p-5 sm:p-6 shadow-[0_0_50px_rgba(0,240,255,0.3)] font-mono text-xs">
            <div className="flex justify-between items-center pb-3 mb-3 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <span className="text-[#00F0FF]">{'>_'} OPERATIVE_PROFILE</span>
                <span className="text-[10px] px-2 py-0.5 bg-white/10 rounded text-zinc-300">{selectedOperative.rarity}</span>
              </div>
              <button 
                onClick={() => setSelectedOperative(null)}
                className="text-zinc-400 hover:text-white px-2 py-1 rounded bg-white/5"
              >
                [CLOSE]
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">{selectedOperative.codename}</h3>
                  <p className="text-[11px] text-zinc-400">{selectedOperative.location}</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-black text-[#00FF9F]">PWR {selectedOperative.pwrLevel}</div>
                  <div className="text-[10px] text-zinc-500">{selectedOperative.guild}</div>
                </div>
              </div>

              <div className="p-3 rounded bg-black/60 border border-white/10 space-y-1">
                <div className="text-zinc-500 text-[10px]">SIGNATURE SPECIALTY:</div>
                <div className="text-zinc-200">{selectedOperative.specialty}</div>
                <div className="text-zinc-500 text-[10px] pt-1">SHIPPED COUNT: <span className="text-[#00F0FF] font-bold">{selectedOperative.shippedCount} Verified Apps</span></div>
              </div>

              <div className="flex flex-wrap gap-1">
                {selectedOperative.badges.map((b) => (
                  <span key={b} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-zinc-300">
                    {b}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  cyberAudio.playExecute()
                  setSelectedOperative(null)
                  onOpenTerminal()
                }}
                className="w-full mt-2 py-2.5 rounded bg-[#00F0FF] text-black font-bold uppercase tracking-wider hover:bg-[#00FF9F] transition-colors"
              >
                INSPECT ON-CHAIN PASSPORT {'>_'}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
