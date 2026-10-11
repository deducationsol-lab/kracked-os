'use client'

import React, { useState } from 'react'
import { GUILDS_DATA, Guild } from '@/lib/kracked-data'
import { cyberAudio } from '@/lib/cyber-audio'
import { Shield, Users, Rocket, Award, ChevronRight, Hash, Flame } from 'lucide-react'

interface GuildsSectionProps {
  onOpenTerminal: () => void;
}

export function GuildsSection({ onOpenTerminal }: GuildsSectionProps) {
  return (
    <section id="guilds" className="relative w-full py-12 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="mb-8 sm:mb-10 text-center space-y-2 sm:space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-[#FF2D95]">
          <Shield className="w-3.5 h-3.5" />
          <span>GUILDS & FACTIONS // SPECIALIZED_STRIKE_SQUADS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-sans text-white tracking-tight">
          Find Your Faction. Ship Together.
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-zinc-400 font-mono max-w-2xl mx-auto">
          Guilds are autonomous builder syndicates within KrackedDevs. Pool knowledge, share compute credits, and deploy collective projects.
        </p>
      </div>

      {/* Guilds Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {GUILDS_DATA.map((guild) => (
          <div
            key={guild.id}
            className="group relative rounded-xl border border-white/10 bg-[#080812] hover:border-[#00FF9F]/40 p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(0,255,159,0.15)] transition-all duration-300"
          >
            <div className="space-y-3.5">
              
              {/* Guild Header */}
              <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <span className="p-1 sm:p-1.5 rounded bg-white/5 border border-white/10 font-mono text-xs font-bold" style={{ color: guild.color }}>
                    #{guild.tag}
                  </span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-zinc-500">
                  TIER LVL {guild.level}
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-sans text-white group-hover:text-[#00FF9F] transition-colors">
                  {guild.name}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-1 leading-relaxed">
                  {guild.description}
                </p>
              </div>

              {/* Focus tags */}
              <div className="p-2.5 sm:p-3 rounded bg-black/50 border border-white/5 text-[10px] sm:text-[11px] font-mono text-zinc-300">
                <span className="text-zinc-500 block mb-0.5">FOCUS MATRIX:</span>
                {guild.focus}
              </div>

              {/* Guild Stats */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2 sm:p-2.5 rounded bg-white/5 border border-white/5">
                  <span className="text-[9px] sm:text-[10px] text-zinc-500 block">MEMBERS:</span>
                  <span className="text-white font-bold">{guild.members} BUILDERS</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded bg-white/5 border border-white/5">
                  <span className="text-[9px] sm:text-[10px] text-zinc-500 block">SHIPPED:</span>
                  <span className="text-[#00FF9F] font-bold">{guild.projectsShipped} RELEASES</span>
                </div>
              </div>

            </div>

            {/* Bottom Action */}
            <div className="pt-3.5 sm:pt-4 mt-4 sm:mt-5 border-t border-white/10">
              <button
                onClick={() => {
                  cyberAudio.playExecute()
                  onOpenTerminal()
                }}
                className="w-full py-2.5 rounded bg-white/5 hover:bg-[#00FF9F]/20 border border-white/10 hover:border-[#00FF9F]/50 text-zinc-300 hover:text-[#00FF9F] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all"
              >
                <span>REQUEST_GUILD_PASSPORT</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}
