'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { MALAYSIA_NODES, MalaysiaNode } from '@/lib/kracked-data'
import { cyberAudio } from '@/lib/cyber-audio'
import { MapPin, Activity, Zap, Cpu, Users, Layers, ShieldCheck, Terminal, Compass } from 'lucide-react'

export function CommunityAtlas() {
  const [selectedNode, setSelectedNode] = useState<MalaysiaNode>(MALAYSIA_NODES[0])
  const [regionFilter, setRegionFilter] = useState<'ALL' | 'WEST' | 'EAST'>('ALL')

  const filteredNodes = regionFilter === 'ALL' 
    ? MALAYSIA_NODES 
    : MALAYSIA_NODES.filter((n) => n.region === regionFilter)

  const handleSelectNode = (node: MalaysiaNode) => {
    cyberAudio.playTerminalKey()
    setSelectedNode(node)
  }

  return (
    <section id="atlas" className="relative w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#00F0FF]/20 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-[#00F0FF] mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>GEO_RADAR // SYSTEM_GRID</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-sans text-white tracking-tight">
            Community Atlas
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-1">
            Real-time telemetry of builder clusters, guild fortresses, and regional shipping velocity across Malaysia.
          </p>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex items-center space-x-1.5 p-1 rounded-lg bg-black/60 border border-white/10 font-mono text-xs">
          {(['ALL', 'WEST', 'EAST'] as const).map((r) => (
            <button
              key={r}
              onClick={() => {
                cyberAudio.playTerminalKey()
                setRegionFilter(r)
              }}
              className={`px-3 py-1.5 rounded transition-all ${
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
        
        {/* Left Interactive Visual Map Viewport (8 Columns on desktop) */}
        <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[480px] lg:min-h-[520px] bg-[#020206] border-b lg:border-b-0 lg:border-r border-[#00F0FF]/20 flex items-center justify-center p-4 overflow-hidden">
          
          {/* Background Map Graphic with Neon Glow */}
          <div className="relative w-full h-full min-h-[360px] flex items-center justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20261011-230827-v2cHm1bYdpQa46xQHJILu1poeKf9pI.png"
              alt="Malaysia Builder Density Network Map"
              fill
              className="object-contain object-center opacity-85 transition-opacity"
            />
            <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

            {/* Interactive Overlay Nodes on map */}
            {MALAYSIA_NODES.map((node) => {
              const isSelected = selectedNode.id === node.id
              return (
                <button
                  key={node.id}
                  onClick={() => handleSelectNode(node)}
                  style={{
                    left: `${node.coords.x}%`,
                    top: `${node.coords.y}%`,
                  }}
                  className={`group absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 transition-all ${
                    isSelected ? 'scale-125' : 'hover:scale-110 opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* Ping Ring */}
                  <div className="relative flex items-center justify-center">
                    <span className={`animate-ping absolute inline-flex h-6 w-6 rounded-full opacity-75 ${
                      isSelected ? 'bg-[#00FF9F]' : 'bg-[#00F0FF]'
                    }`} />
                    <span className={`relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-black ${
                      isSelected 
                        ? 'bg-[#00FF9F] shadow-[0_0_15px_#00FF9F]' 
                        : 'bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]'
                    }`} />
                  </div>

                  {/* Label tooltip */}
                  <span className={`mt-1 font-mono text-[10px] px-1.5 py-0.5 rounded border whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-black/90 text-[#00FF9F] border-[#00FF9F]/80 font-bold shadow-[0_0_10px_rgba(0,255,159,0.4)]'
                      : 'bg-black/70 text-zinc-300 border-white/10 group-hover:border-[#00F0FF]/50'
                  }`}>
                    {node.name.split('/')[0]} <span className="text-zinc-500">({node.builders})</span>
                  </span>
                </button>
              )
            })}
          </div>

          {/* Map Top Status Bar */}
          <div className="absolute top-3 left-3 font-mono text-[10px] text-zinc-400 bg-black/80 px-2.5 py-1 rounded border border-white/10 flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9F] animate-ping" />
            <span>GRID_RESOLUTION: 4K_TOPOLOGICAL</span>
            <span className="text-zinc-600">|</span>
            <span className="text-[#00F0FF]">ACTIVE NODES: {MALAYSIA_NODES.length}</span>
          </div>

        </div>

        {/* Right Telemetry & Node Inspection Panel (5 Columns on desktop) */}
        <div className="lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between space-y-6 bg-[#080812]">
          
          <div className="space-y-4">
            
            {/* Header of selected Node */}
            <div className="pb-3 border-b border-white/10">
              <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                <span className="text-zinc-500">SECTOR_ID: #{selectedNode.id.toUpperCase()}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#00FF9F]/10 text-[#00FF9F] border border-[#00FF9F]/30">
                  {selectedNode.status}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-white">
                {selectedNode.name}
              </h3>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                {selectedNode.state}
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 font-mono">
              <div className="p-3 rounded bg-black/50 border border-white/10">
                <div className="text-[10px] text-zinc-500 uppercase">ACTIVE BUILDERS</div>
                <div className="text-xl font-black text-[#00FF9F] mt-0.5">
                  {selectedNode.builders.toLocaleString()}
                </div>
              </div>

              <div className="p-3 rounded bg-black/50 border border-white/10">
                <div className="text-[10px] text-zinc-500 uppercase">PAYLOADS SHIPPED</div>
                <div className="text-xl font-black text-[#00F0FF] mt-0.5">
                  {selectedNode.shipped}
                </div>
              </div>

              <div className="p-3 rounded bg-black/50 border border-white/10">
                <div className="text-[10px] text-zinc-500 uppercase">REGISTERED GUILDS</div>
                <div className="text-xl font-black text-[#FF2D95] mt-0.5">
                  {selectedNode.guilds}
                </div>
              </div>

              <div className="p-3 rounded bg-black/50 border border-white/10">
                <div className="text-[10px] text-zinc-500 uppercase">LOCAL LATENCY</div>
                <div className="text-xl font-black text-white mt-0.5">
                  {selectedNode.ping}ms
                </div>
              </div>
            </div>

            {/* Specialization Detail */}
            <div className="p-3.5 rounded bg-black/60 border border-[#00F0FF]/20 space-y-2 font-mono text-xs">
              <div className="flex items-center space-x-1.5 text-[#00F0FF]">
                <Cpu className="w-3.5 h-3.5" />
                <span className="font-bold">PRIMARY SPECIALIZATION</span>
              </div>
              <p className="text-zinc-300 leading-relaxed text-[11px]">
                {selectedNode.dominantSpecialty}
              </p>
              
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
                <span className="text-zinc-500">LATEST_DEPLOY:</span>
                <span className="text-[#00FF9F] font-bold">{selectedNode.recentDeployment}</span>
              </div>
            </div>

          </div>

          {/* Quick Node Switcher Tabs */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
              SWITCH REGIONAL FORGE:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {filteredNodes.map((n) => (
                <button
                  key={n.id}
                  onClick={() => handleSelectNode(n)}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                    selectedNode.id === n.id
                      ? 'bg-[#00FF9F] text-black font-bold shadow-[0_0_10px_rgba(0,255,159,0.5)]'
                      : 'bg-black/60 text-zinc-400 hover:text-white border border-white/10'
                  }`}
                >
                  {n.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}
