'use client'

import React, { useState } from 'react'
import { GUILDS_DATA, Guild } from '@/lib/kracked-data'
import { cyberAudio } from '@/lib/cyber-audio'
import { Shield, Users, Rocket, Award, ChevronRight, Hash, Flame } from 'lucide-react'

interface GuildsSectionProps {
  onOpenTerminal: () => void;
}

export function GuildsSection({ onOpenTerminal }: GuildsSectionProps) {
  const [selectedGuild, setSelectedGuild] = useState<Guild>(GUILDS_DATA[0])

  return (
    <section id="guilds" className="relative w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="mb-10 text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FF2D95]">
          <Shield className="w-3.5 h-3.5" />
          <span>GUILDS & FACTIONS // SPECIALIZED_STRIKE_SQUADS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-sans text-white tracking-tight">
          Find Your Faction. Ship Together.
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 font-mono max-w-2xl mx-auto">
          Guilds are autonomous builder syndicates within KrackedDevs. Pool knowledge, share compute credits, and deploy collective projects.
        </p>
      </div>

      {/* Guilds Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GUILDS_DATA.map((guild) => (
          <div
            key={guild.id}
            className="group relative rounded-xl border border-white/10 bg-[#080812] hover:border-[#00FF9F]/40 p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(0,255,159,0.15)] transition-all duration-300"
          >
            <div className="space-y-4">
              
              {/* Guild Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded bg-white/5 border border-white/10 font-mono text-xs font-bold" style={{ color: guild.color }}>
                    #{guild.tag}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-zinc-500">
                  TIER LVL {guild.level}
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-xl font-bold font-sans text-white group-hover:text-[#00FF9F] transition-colors">
                  {guild.name}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-1.5 leading-relaxed">
                  {guild.description}
                </p>
              </div>

              {/* Focus tags */}
              <div className="p-3 rounded bg-black/50 border border-white/5 text-[11px] font-mono text-zinc-300">
                <span className="text-zinc-500 block mb-1">FOCUS MATRIX:</span>
                {guild.focus}
              </div>

              {/* Guild Stats */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded bg-white/5 border border-white/5">
                  <span className="text-[10px] text-zinc-500 block">MEMBERS:</span>
                  <span className="text-white font-bold">{guild.members} BUILDERS</span>
                </div>
                <div className="p-2.5 rounded bg-white/5 border border-white/5">
                  <span className="text-[10px] text-zinc-500 block">SHIPPED:</span>
                  <span className="text-[#00FF9F] font-bold">{guild.projectsShipped} RELEASES</span>
                </div>
              </div>

            </div>

            {/* Bottom Action */}
            <div className="pt-4 mt-6 border-t border-white/10">
              <button
                onClick={() => {
                  cyberAudio.playExecute()
                  onOpenTerminal()
                }}
                className="w-full py-2.5 rounded bg-white/5 hover:bg-[#00FF9F]/20 border border-white/10 hover:border-[#00FF9F]/50 text-zinc-300 hover:text-[#00FF9F] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all"
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
