'use client'

import React, { useState } from 'react'
import { Terminal, Shield, Award, Zap, Code2, Flame, Cpu, ArrowUpRight, CheckCircle2, Crosshair } from 'lucide-react'
import { cyberAudio } from '@/lib/cyber-audio'

interface ManifestoSectionProps {
  onOpenTerminal: () => void;
}

export function ManifestoSection({ onOpenTerminal }: ManifestoSectionProps) {
  const [selectedPillar, setSelectedPillar] = useState(0)
  const [calcCommits, setCalcCommits] = useState(12)
  const [calcShips, setCalcShips] = useState(2)

  const pillars = [
    {
      num: '01',
      title: 'PROOF OF SHIP OVER PROOF OF PEDIGREE',
      desc: 'We do not care where you studied, who you know, or your LinkedIn title. The compiler does not lie. We evaluate builders strictly by deployed URLs, GitHub commits, and shipped products.',
      tag: 'ABSOLUTE_MERIT',
      color: '#00FF9F',
    },
    {
      num: '02',
      title: 'MALAYSIA BUILDS FIRST-PARTY INTELLIGENCE',
      desc: 'Malaysia is not a digital sweatshop or passive consumer base. We architect sovereign Malaysian LLMs, fine-tunes, agent pipelines, local fintech protocols, and physical IoT hardware.',
      tag: 'SOVEREIGN_TECH',
      color: '#00F0FF',
    },
    {
      num: '03',
      title: 'ZERO GATEKEEPING. RADICAL ACCELERATION.',
      desc: 'High school hackers with a hunger to ship sit in the same voice rooms as senior staff engineers. Knowledge flows freely. Code is open by default. The fastest builder wins.',
      tag: 'OPEN_ACCELERATION',
      color: '#FF2D95',
    },
    {
      num: '04',
      title: 'XP EARNED SOLELY BY SHIPPING CODE',
      desc: 'No attendance badges. No participation trophies. You earn XP by closing pull requests, pushing live releases, winning bounties, and reviewing peer payloads.',
      tag: 'XP_ENGINE',
      color: '#00FF9F',
    },
  ]

  const calculatedXP = (calcCommits * 15) + (calcShips * 250) + 100
  const calculatedLevel = calculatedXP > 1200 ? 'MYTHIC SHIPPER (LVL 5)' : calculatedXP > 700 ? 'SENIOR SHIPPER (LVL 4)' : calculatedXP > 300 ? 'ACTIVE BUILDER (LVL 3)' : 'NOVICE HACKER (LVL 1)'

  return (
    <section id="manifesto" className="relative w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="mb-10 text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00FF9F]">
          <Crosshair className="w-3.5 h-3.5" />
          <span>KRACKED_PROTOCOL // THE_CORE_CODE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-sans text-white tracking-tight">
          The Manifesto
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 font-mono max-w-2xl mx-auto">
          The unwritten laws of KrackedDevs. How we turn raw curiosity into sovereign Malaysian engineering power.
        </p>
      </div>

      {/* Main Grid: 4 Core Tenets on Left, Interactive Passport / XP Meter on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: 4 Tenets */}
        <div className="lg:col-span-7 space-y-4">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.num}
              onClick={() => {
                cyberAudio.playTerminalKey()
                setSelectedPillar(idx)
              }}
              className={`p-5 sm:p-6 rounded-xl border bg-[#080812] cursor-pointer transition-all duration-300 ${
                selectedPillar === idx
                  ? 'border-[#00F0FF] shadow-[0_0_25px_rgba(0,240,255,0.2)] bg-[#0c0c1c]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-xl sm:text-2xl font-black text-zinc-600">
                    {pillar.num}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider" style={{ color: pillar.color, backgroundColor: `${pillar.color}15`, borderColor: `${pillar.color}40`, borderWidth: 1 }}>
                    {pillar.tag}
                  </span>
                </div>
                {selectedPillar === idx && (
                  <span className="text-[#00F0FF] text-xs font-mono hidden sm:inline">[ACTIVE_FOCUS]</span>
                )}
              </div>

              <h3 className="text-base sm:text-lg font-bold font-sans text-white mt-3">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-2 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Live Interactive XP & Passport Level Simulator */}
        <div className="lg:col-span-5 rounded-xl border border-[#00FF9F]/30 bg-[#080812] p-6 shadow-[0_0_35px_rgba(0,255,159,0.1)] font-mono space-y-6">
          
          <div className="pb-4 border-b border-white/10">
            <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
              <span>SIMULATOR // XP_CALCULATOR</span>
              <span className="text-[#00FF9F]">ONLINE</span>
            </div>
            <h3 className="text-xl font-bold font-sans text-white">
              Calculate Your Builder PWR
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Estimate your starting tier inside KRACKED_OS based on your monthly shipping frequency.
            </p>
          </div>

          {/* Sliders */}
          <div className="space-y-4 text-xs">
            <div>
              <div className="flex justify-between mb-1.5">
                <span className="text-zinc-400">PULL REQUESTS / COMMITS (MONTHLY):</span>
                <span className="text-[#00F0FF] font-bold">{calcCommits} PRs</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                value={calcCommits}
                onChange={(e) => setCalcCommits(Number(e.target.value))}
                className="w-full accent-[#00F0FF] bg-zinc-800"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1.5">
                <span className="text-zinc-400">PRODUCTION PAYLOADS SHIPPED:</span>
                <span className="text-[#00FF9F] font-bold">{calcShips} Releases</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={calcShips}
                onChange={(e) => setCalcShips(Number(e.target.value))}
                className="w-full accent-[#00FF9F] bg-zinc-800"
              />
            </div>
          </div>

          {/* Results Box */}
          <div className="p-4 rounded-lg bg-black/60 border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400">ESTIMATED SCORE:</span>
              <span className="text-2xl font-black text-[#00FF9F]">{calculatedXP.toLocaleString()} XP</span>
            </div>

            <div className="flex items-center justify-between text-xs border-t border-white/10 pt-2">
              <span className="text-zinc-400">PASSPORT TIER:</span>
              <span className="text-xs font-bold text-[#00F0FF]">{calculatedLevel}</span>
            </div>

            <div className="w-full h-2 rounded-full bg-zinc-900 overflow-hidden border border-white/10 mt-1">
              <div 
                className="h-full bg-gradient-to-r from-[#00F0FF] via-[#00FF9F] to-[#FF2D95]"
                style={{ width: `${Math.min(100, (calculatedXP / 1500) * 100)}%` }}
              />
            </div>
          </div>

          {/* CTA to Authenticate */}
          <button
            onClick={() => {
              cyberAudio.playExecute()
              onOpenTerminal()
            }}
            className="w-full py-3 rounded bg-[#00FF9F] hover:bg-[#00F0FF] text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-[0_0_20px_rgba(0,255,159,0.4)]"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>CLAIM_BUILDER_PASSPORT</span>
          </button>

        </div>

      </div>

    </section>
  )
}
