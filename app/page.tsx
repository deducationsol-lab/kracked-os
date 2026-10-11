'use client'

import React, { useState } from 'react'
import { CyberNavbar } from '@/components/cyber-navbar'
import { HeroSection } from '@/components/hero-section'
import { LiveTicker } from '@/components/live-ticker'
import { ManifestoSection } from '@/components/manifesto-section'
import { CommunityAtlas } from '@/components/community-atlas'
import { ThreeDoors } from '@/components/three-doors'
import { ShippedPayloads } from '@/components/shipped-payloads'
import { GuildsSection } from '@/components/guilds-section'
import { InteractiveTerminal } from '@/components/interactive-terminal'
import { SystemFooter } from '@/components/system-footer'

export default function HomePage() {
  const [terminalOpen, setTerminalOpen] = useState(false)

  return (
    <main className="relative min-h-screen bg-[#050508] text-[#E0E7FF] selection:bg-[#00FF9F]/20 selection:text-[#00FF9F] flex flex-col justify-between overflow-x-hidden">
      
      {/* Top Cyber Navigation Bar with mobile hamburger & quick commands */}
      <CyberNavbar 
        onOpenTerminal={() => setTerminalOpen(true)} 
        activeSection="home" 
      />

      {/* Hero Section with Glowing Malaysia Particle Map & Operatives */}
      <HeroSection 
        onOpenTerminal={() => setTerminalOpen(true)}
        onJoinClick={() => setTerminalOpen(true)}
      />

      {/* Live Activity & Telemetry Ticker */}
      <LiveTicker />

      {/* Manifesto Section & Interactive XP Simulator */}
      <ManifestoSection 
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Community Atlas: Interactive State Density & Node Telemetry */}
      <CommunityAtlas />

      {/* Three Doors: Community (War Room), AI Builder School, KD Labs */}
      <ThreeDoors 
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Shipped Payloads: Project Showcase Grid with Tech Tags & Rarity Badges */}
      <ShippedPayloads />

      {/* Guilds & Factions Section */}
      <GuildsSection 
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* System Status Footer */}
      <SystemFooter 
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Interactive Terminal Drawer Simulator */}
      <InteractiveTerminal 
        isOpen={terminalOpen} 
        onClose={() => setTerminalOpen(false)} 
      />

    </main>
  )
}
