'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { MALAYSIA_NODES, MalaysiaNode } from '@/lib/kracked-data'
import { cyberAudio } from '@/lib/cyber-audio'
import { Compass, Cpu, Wifi, Activity, Terminal, ShieldCheck, Zap } from 'lucide-react'

export function CommunityAtlas() {
  const [selectedNode, setSelectedNode] = useState<MalaysiaNode>(MALAYSIA_NODES[0])
  const [regionFilter, setRegionFilter] = useState<'ALL' | 'WEST' | 'EAST'>('ALL')
  const [isPinging, setIsPinging] = useState(false)
  const [livePingResult, setLivePingResult] = useState<number | null>(null)

  const filteredNodes = regionFilter === 'ALL' 
    ? MALAYSIA_NODES 
    : MALAYSIA_NODES.filter((n) => n.region === regionFilter)

  const handleSelectNode = (node: MalaysiaNode) => {
    cyberAudio.playTerminalKey()
    setSelectedNode(node)
    setLivePingResult(null)
  }

  const handlePingTest = () => {
    cyberAudio.playExecute()
    setIsPinging(true)
    setTimeout(() => {
      setIsPinging(false)
      setLivePingResult(Math.floor(selectedNode.ping + (Math.random() * 4 - 2)))
    }, 600)
  }

  return (
    <section id="atlas" className="relative w-full py-12 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 pb-4 border-b border-[#00F0FF]/20 gap-3 sm:gap-4">
        <div>
          <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono text-[#00F0FF] mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>GEO_RADAR // SYSTEM_GRID</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-sans text-white tracking-tight">
            Community Atlas
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-1">
            Calibrated telemetry of builder clusters, guild fortresses, and regional shipping velocity across Malaysia.
          </p>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex items-center space-x-1.5 p-1 rounded-lg bg-black/60 border border-white/10 font-mono text-[11px] sm:text-xs overflow-x-auto no-scrollbar">
          {(['ALL', 'WEST', 'EAST'] as const).map((r) => (
            <button
              key={r}
              onClick={() => {
                cyberAudio.playTerminalKey()
                setRegionFilter(r)
              }}
              className={`px-2.5 sm:px-3 py-1.5 rounded transition-all whitespace-nowrap ${
                regionFilter === r
                  ? 'bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/40 font-bold shadow-[0_0_10px_rgba(0,240,255,0.3)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {r === 'ALL' ? 'ALL_MALAYSIA' : r === 'WEST' ? 'PENINSULAR (WEST)' : 'BORNEO (EAST)'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Atlas Terminal Frame */}
      <div className="rounded-xl border border-[#00F0FF]/30 bg-[#080812] shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Interactive Visual Map Viewport */}
        <div className="lg:col-span-7 relative bg-[#020206] border-b lg:border-b-0 lg:border-r border-[#00F0FF]/20 flex flex-col justify-center p-2 sm:p-4 overflow-hidden">
          
          {/* Top Status Telemetry Tag */}
          <div className="flex items-center justify-between mb-2 px-1 font-mono text-[9px] sm:text-[10px] text-zinc-400">
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9F] animate-ping" />
              <span className="text-[#00FF9F] font-bold">GRID_LOCK: ACTIVE</span>
              <span className="text-zinc-600">|</span>
              <span>CALIBRATED 2:1 SECTOR</span>
            </div>
            <div className="text-zinc-500 hidden sm:block">
              {'[COORDS: 04.21°N, 101.97°E]'}
            </div>
          </div>

          {/* Locked Aspect Ratio Map Stage (Strict 2:1 Aspect Ratio to Lock Coordinate Grid) */}
          <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden border border-[#00F0FF]/20 bg-black/80">
            
            {/* Base Glowing Malaysia Particle Graphic */}
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20261011-230827-v2cHm1bYdpQa46xQHJILu1poeKf9pI.png"
              alt="Malaysia Builder Density Network Map"
              fill
              priority
              className="object-cover object-center opacity-90 transition-opacity"
            />
            
            {/* Scanlines Effect */}
            <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

            {/* SVG Precision Telemetry & Fiber Grid Lines (1000 x 500 Coordinate Space) */}
            <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full pointer-events-none z-10">
              <defs>
                <linearGradient id="fiberGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#00FF9F" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.8" />
                </linearGradient>

                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Grid Coordinate Matrix Lines */}
              <g stroke="rgba(0, 240, 255, 0.08)" strokeWidth="0.5">
                <line x1="200" y1="0" x2="200" y2="500" strokeDasharray="3,6" />
                <line x1="400" y1="0" x2="400" y2="500" strokeDasharray="3,6" />
                <line x1="600" y1="0" x2="600" y2="500" strokeDasharray="3,6" />
                <line x1="800" y1="0" x2="800" y2="500" strokeDasharray="3,6" />
                <line x1="0" y1="125" x2="1000" y2="125" strokeDasharray="3,6" />
                <line x1="0" y1="250" x2="1000" y2="250" strokeDasharray="3,6" />
                <line x1="0" y1="375" x2="1000" y2="375" strokeDasharray="3,6" />
              </g>

              {/* Peninsular Malaysia Fiber Spine */}
              <path
                d="M 205 132 L 240 207 L 285 290 L 335 347 L 385 397"
                fill="none"
                stroke="#00F0FF"
                strokeWidth="1.2"
                strokeDasharray="4,3"
                opacity="0.6"
              />

              {/* Subsea Fiber Cables (West to East Malaysia) */}
              <path
                d="M 285 290 Q 400 240 520 320"
                fill="none"
                stroke="#00FF9F"
                strokeWidth="1.5"
                strokeDasharray="5,4"
                opacity="0.7"
                filter="url(#glow)"
              />
              <path
                d="M 285 290 Q 520 160 765 127"
                fill="none"
                stroke="#00F0FF"
                strokeWidth="1.2"
                strokeDasharray="6,4"
                opacity="0.5"
              />

              {/* Borneo East Malaysia Trunk */}
              <path
                d="M 520 320 L 765 127"
                fill="none"
                stroke="#00FF9F"
                strokeWidth="1.2"
                strokeDasharray="4,4"
                opacity="0.6"
              />

              {/* Active Selection Target Reticle */}
              <circle
                cx={selectedNode.coords.x * 10}
                cy={selectedNode.coords.y * 5}
                r="18"
                fill="none"
                stroke="#00FF9F"
                strokeWidth="1"
                strokeDasharray="3,3"
                className="animate-spin"
                style={{ transformOrigin: `${selectedNode.coords.x * 10}px ${selectedNode.coords.y * 5}px` }}
              />
              <circle
                cx={selectedNode.coords.x * 10}
                cy={selectedNode.coords.y * 5}
                r="28"
                fill="none"
                stroke="#00F0FF"
                strokeWidth="0.5"
                opacity="0.4"
              />
            </svg>

            {/* Interactive Calibrated Overlay Nodes */}
            {MALAYSIA_NODES.map((node) => {
              const isSelected = selectedNode.id === node.id
              const isFiltered = regionFilter !== 'ALL' && node.region !== regionFilter

              return (
                <button
                  key={node.id}
                  onClick={() => handleSelectNode(node)}
                  style={{
                    left: `${node.coords.x}%`,
                    top: `${node.coords.y}%`,
                  }}
                  className={`group absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 transition-all ${
                    isFiltered ? 'opacity-25 pointer-events-none' : 'opacity-100'
                  } ${
                    isSelected ? 'scale-110 sm:scale-125 z-30' : 'hover:scale-110'
                  }`}
                >
                  {/* Ping Ring */}
                  <div className="relative flex items-center justify-center">
                    <span className={`animate-ping absolute inline-flex h-4 w-4 sm:h-5 sm:w-5 rounded-full opacity-80 ${
                      isSelected ? 'bg-[#00FF9F]' : 'bg-[#00F0FF]'
                    }`} />
                    <span className={`relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 border-2 border-black ${
                      isSelected 
                        ? 'bg-[#00FF9F] shadow-[0_0_15px_#00FF9F]' 
                        : 'bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]'
                    }`} />
                  </div>

                  {/* Node Label Tooltip */}
                  <span className={`mt-0.5 font-mono text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0.2 rounded border whitespace-nowrap transition-all shadow-md pointer-events-none ${
                    isSelected
                      ? 'bg-black/95 text-[#00FF9F] border-[#00FF9F] font-bold shadow-[0_0_10px_rgba(0,255,159,0.5)]'
                      : 'bg-black/85 text-zinc-300 border-white/20 group-hover:border-[#00F0FF]/80 group-hover:text-white'
                  }`}>
                    {node.name.split('/')[0].trim()}
                  </span>
                </button>
              )
            })}

          </div>

          {/* Sector Calibration Footer */}
          <div className="mt-2 px-1 flex items-center justify-between font-mono text-[9px] text-zinc-500">
            <span>GRID_NODE_COUNT: {filteredNodes.length} ACTIVE</span>
            <span className="text-[#00FF9F]">ALL SECTORS ONLINE</span>
          </div>

        </div>

        {/* Right Telemetry & Node Inspection Panel */}
        <div className="lg:col-span-5 p-4 sm:p-6 lg:p-7 flex flex-col justify-between space-y-4 sm:space-y-6 bg-[#080812]">
          
          <div className="space-y-4">
            
            {/* Header of selected Node */}
            <div className="pb-3 border-b border-white/10">
              <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                <span className="text-zinc-500">SECTOR_ID: #{selectedNode.id.toUpperCase()}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#00FF9F]/10 text-[#00FF9F] border border-[#00FF9F]/30">
                  {selectedNode.status}
                </span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold font-sans text-white">
                {selectedNode.name}
              </h3>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                {selectedNode.state}
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-2.5 font-mono">
              <div className="p-2.5 sm:p-3 rounded bg-black/50 border border-white/10">
                <div className="text-[9px] sm:text-[10px] text-zinc-500 uppercase">ACTIVE BUILDERS</div>
                <div className="text-base sm:text-xl font-black text-[#00FF9F] mt-0.5">
                  {selectedNode.builders.toLocaleString()}
                </div>
              </div>

              <div className="p-2.5 sm:p-3 rounded bg-black/50 border border-white/10">
                <div className="text-[9px] sm:text-[10px] text-zinc-500 uppercase">PAYLOADS SHIPPED</div>
                <div className="text-base sm:text-xl font-black text-[#00F0FF] mt-0.5">
                  {selectedNode.shipped}
                </div>
              </div>

              <div className="p-2.5 sm:p-3 rounded bg-black/50 border border-white/10">
                <div className="text-[9px] sm:text-[10px] text-zinc-500 uppercase">REGISTERED GUILDS</div>
                <div className="text-base sm:text-xl font-black text-[#FF2D95] mt-0.5">
                  {selectedNode.guilds}
                </div>
              </div>

              <div className="p-2.5 sm:p-3 rounded bg-black/50 border border-white/10">
                <div className="text-[9px] sm:text-[10px] text-zinc-500 uppercase">LOCAL LATENCY</div>
                <div className="text-base sm:text-xl font-black text-white mt-0.5 flex items-center justify-between">
                  <span>{livePingResult !== null ? livePingResult : selectedNode.ping}ms</span>
                  <button
                    onClick={handlePingTest}
                    disabled={isPinging}
                    className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 hover:bg-[#00F0FF]/20 text-[#00F0FF] transition-colors"
                  >
                    {isPinging ? 'PING...' : 'TEST'}
                  </button>
                </div>
              </div>
            </div>

            {/* Specialization Detail */}
            <div className="p-3 sm:p-3.5 rounded bg-black/60 border border-[#00F0FF]/20 space-y-2 font-mono text-xs">
              <div className="flex items-center space-x-1.5 text-[#00F0FF]">
                <Cpu className="w-3.5 h-3.5" />
                <span className="font-bold">PRIMARY SPECIALIZATION</span>
              </div>
              <p className="text-zinc-300 leading-relaxed text-[11px]">
                {selectedNode.dominantSpecialty}
              </p>
              
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
                <span className="text-zinc-500">LATEST_DEPLOY:</span>
                <span className="text-[#00FF9F] font-bold truncate max-w-[180px]">{selectedNode.recentDeployment}</span>
              </div>
            </div>

          </div>

          {/* Quick Node Switcher Tabs */}
          <div className="space-y-1.5 pt-2 border-t border-white/10">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
              SWITCH REGIONAL FORGE:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {filteredNodes.map((n) => (
                <button
                  key={n.id}
                  onClick={() => handleSelectNode(n)}
                  className={`px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-mono transition-all ${
                    selectedNode.id === n.id
                      ? 'bg-[#00FF9F] text-black font-bold shadow-[0_0_10px_rgba(0,255,159,0.5)]'
                      : 'bg-black/60 text-zinc-400 hover:text-white border border-white/10'
                  }`}
                >
                  {n.name.split('/')[0].split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}
