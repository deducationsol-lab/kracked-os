'use client'

import React, { useState } from 'react'
import { SHIPPED_PROJECTS, ShippedProject } from '@/lib/kracked-data'
import { cyberAudio } from '@/lib/cyber-audio'
import { Rocket, Star, ExternalLink, Github, Code, Sparkles, Filter, Terminal, Zap } from 'lucide-react'

export function ShippedPayloads() {
  const [filterCategory, setFilterCategory] = useState<string>('ALL')
  const [activeProject, setActiveProject] = useState<ShippedProject | null>(null)

  const categories = ['ALL', 'AI_AGENT', 'WEB3_PROTOCOL', 'DEVELOPER_TOOLS', 'HARDWARE_IOT', 'FINTECH']

  const filteredProjects = filterCategory === 'ALL'
    ? SHIPPED_PROJECTS
    : SHIPPED_PROJECTS.filter((p) => p.category === filterCategory)

  const getRarityBadge = (rarity: ShippedProject['rarity']) => {
    switch (rarity) {
      case 'MYTHIC':
        return 'bg-purple-950/80 text-purple-300 border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.4)]'
      case 'LEGENDARY':
        return 'bg-amber-950/80 text-amber-300 border-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.4)]'
      case 'EPIC':
        return 'bg-cyan-950/80 text-cyan-300 border-cyan-500/50 shadow-[0_0_10px_rgba(0,240,255,0.4)]'
      default:
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50'
    }
  }

  return (
    <section id="shipped" className="relative w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#00FF9F]/20 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-[#00FF9F] mb-1">
            <Rocket className="w-3.5 h-3.5" />
            <span>PROOF_OF_SHIP // LIVE_REGISTRY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-sans text-white tracking-tight">
            Shipped Payloads
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-1">
            Real software, smart contracts, and hardware nodes created by Malaysian builders in KrackedDevs.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                cyberAudio.playTerminalKey()
                setFilterCategory(cat)
              }}
              className={`px-3 py-1.5 rounded transition-all ${
                filterCategory === cat
                  ? 'bg-[#00FF9F]/20 text-[#00FF9F] border border-[#00FF9F]/50 font-bold shadow-[0_0_12px_rgba(0,255,159,0.3)]'
                  : 'bg-black/60 text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Shipped Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-xl border border-white/10 bg-[#080812] hover:border-[#00F0FF]/50 p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300"
          >
            
            {/* Top metadata */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${getRarityBadge(project.rarity)}`}>
                  {project.rarity}
                </span>
                <span className="text-zinc-500 text-[11px]">{project.date}</span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-lg font-bold font-sans text-white group-hover:text-[#00F0FF] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <span className="text-[11px] font-mono text-[#00FF9F] font-bold">
                    +{project.pwrBoost} PWR
                  </span>
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-1.5 line-clamp-2 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Builder Info */}
              <div className="p-2.5 rounded bg-black/50 border border-white/5 flex items-center justify-between font-mono text-[11px]">
                <div className="text-zinc-400">
                  BUILDER: <span className="text-white font-bold">{project.builder}</span>
                </div>
                <div className="text-[#00F0FF] text-[10px]">
                  {project.location}
                </div>
              </div>

              {/* Highlights / Stats */}
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                {project.stats.users && (
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <span className="text-zinc-500 block">TRAFFIC:</span>
                    <span className="text-emerald-400 font-bold">{project.stats.users}</span>
                  </div>
                )}
                {project.stats.speed && (
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <span className="text-zinc-500 block">PERF:</span>
                    <span className="text-cyan-400 font-bold">{project.stats.speed}</span>
                  </div>
                )}
                {project.stats.volume && (
                  <div className="p-2 rounded bg-white/5 border border-white/5 col-span-2">
                    <span className="text-zinc-500 block">SETTLED:</span>
                    <span className="text-amber-400 font-bold">{project.stats.volume}</span>
                  </div>
                )}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-1 font-mono text-[11px] text-[#00FF9F]">
                <Zap className="w-3.5 h-3.5" />
                <span>{project.bountyXP} XP REWARD</span>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                onClick={() => cyberAudio.playTerminalKey()}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-white/5 hover:bg-[#00F0FF]/20 border border-white/10 hover:border-[#00F0FF]/50 text-xs font-mono text-zinc-300 hover:text-[#00F0FF] transition-all"
              >
                <span>INSPECT</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}
