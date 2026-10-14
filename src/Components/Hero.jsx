import React from 'react'
import { Send, Zap, Shield, Server, Activity, ArrowRight } from 'lucide-react'
import HeroRobot from '../assets/robot_5_transparent.svg'
import Dotcom from '../assets/Dotcom.avif'
import Dotnet from '../assets/Dotnet.avif'
import Dotbiz from '../assets/Dotbiz.avif'
import Dotnp from '../assets/Dotnp.avif'
import Dotinfo from '../assets/Dotinfo.avif'
import Flag from '../assets/Flag_of_Nepal.svg.webp'
import { CiSearch } from "react-icons/ci";

const domainPlaceholders = [
  'yourbrand.com',
  'yourbrand.com.np',
  'yourstore.net',
  'youridea.org',
]

const Hero = () => {
  const [animatedPlaceholder, setAnimatedPlaceholder] = React.useState('')
  const [searchQuery, setSearchQuery] = React.useState('')
  const domainSearchInputRef = React.useRef(null)

  // Typewriter effect for placeholder
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setAnimatedPlaceholder(domainPlaceholders[0])
      return
    }

    let phraseIndex = 0
    let characterIndex = 0
    let isDeleting = false
    let timeoutId

    const animatePlaceholder = () => {
      if (document.activeElement === domainSearchInputRef.current) {
        timeoutId = window.setTimeout(animatePlaceholder, 180)
        return
      }

      const phrase = domainPlaceholders[phraseIndex]
      if (isDeleting) {
        characterIndex = Math.max(0, characterIndex - 1)
        setAnimatedPlaceholder(phrase.slice(0, characterIndex))
        if (characterIndex === 0) {
          isDeleting = false
          phraseIndex = (phraseIndex + 1) % domainPlaceholders.length
          timeoutId = window.setTimeout(animatePlaceholder, 300)
        } else {
          timeoutId = window.setTimeout(animatePlaceholder, 45)
        }
        return
      }

      characterIndex += 1
      setAnimatedPlaceholder(phrase.slice(0, characterIndex))
      if (characterIndex === phrase.length) {
        isDeleting = true
        timeoutId = window.setTimeout(animatePlaceholder, 1300)
      } else {
        timeoutId = window.setTimeout(animatePlaceholder, 90)
      }
    }

    timeoutId = window.setTimeout(animatePlaceholder, 250)

    return () => window.clearTimeout(timeoutId)
  }, [])

  // Handle Domain Search execution
  const handleSearch = (customQuery) => {
    const query = typeof customQuery === 'string' ? customQuery : (searchQuery.trim() || animatedPlaceholder)
    if (query) {
      setSearchQuery(query)
      const pricingSection = document.getElementById('domain-pricing') || document.getElementById('plans')
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' })
      }
      console.log(`Searching domain: ${query}`)
    }
  }

  // Features list displayed in the auto-scrolling ticker
  const features = [
    { icon: '🌐', title: 'WordPress sites' },
    { icon: '🛍️', title: 'Ecommerce Ready' },
    { icon: '✉️', title: 'Email Campaigns' },
    { icon: '⚡', title: 'Instant Activation' },
    { icon: '🚀', title: 'Launch website' },
    { icon: '🔒', title: 'Free SSL Certificate' },
    { icon: '☁️', title: 'Cloud Backups' },
  ]

  return (
    <section className="hero-section site-section relative w-full overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/30 pt-12 pb-6 font-sans sm:pt-14 sm:pb-8 lg:flex lg:min-h-[calc(100svh-6.5625rem)] lg:flex-col lg:pt-14 lg:pb-12">
      
      {/* Enhanced Animations */}
      <style>{`
        @keyframes verticalScroll {
          to { transform: translateY(calc(-50% - 6px)); }
        }
        @keyframes floatAnimation {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes auroraPulse {
          0%, 100% { opacity: 0.4; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.75; transform: scale(1.08) rotate(3deg); }
        }
        @keyframes shimmerSweep {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .animate-vertical-ticker {
          animation: verticalScroll 24s linear infinite;
        }
        .animate-vertical-ticker:hover {
          animation-play-state: paused;
        }
        .animate-float {
          animation: floatAnimation 4.8s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeInSlide 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-aurora {
          animation: auroraPulse 7s ease-in-out infinite;
        }

        .btn-shimmer {
          position: relative;
          overflow: hidden;
        }
        .btn-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.4) 50%, 
            transparent 100%
          );
          animation: shimmerSweep 3s infinite ease-in-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-vertical-ticker, .animate-float, .animate-fade-in, .animate-aurora, .btn-shimmer::after {
            animation: none;
          }
        }
      `}</style>

      {/* Main Container Grid */}
      <div className="site-container relative z-10 grid grid-cols-1 items-center gap-10 lg:flex-1 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-8 xl:gap-12">
        
        {/* ================= LEFT COLUMN: HERO CONTENT ================= */}
        <div className="w-full max-w-2xl animate-fade-in">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-white/95 px-3.5 py-1 text-xs sm:text-sm 2xl:text-base text-slate-800 mb-3 shadow-md shadow-blue-500/5 backdrop-blur-md transition-all hover:border-blue-400 hover:scale-[1.02] cursor-default">
            <span><img src={Flag} alt="Nepal flag" className="w-4 h-4 rounded-sm shadow-sm" /></span>
            <span className="font-semibold">Sovereign Cloud Infrastructure in Nepal</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="section-title max-w-[18ch] font-extrabold text-slate-950 mb-3 tracking-tight">
            Web Hosting &amp; Cloud Built for{' '}
            <span className="bg-gradient-to-r from-[#1b75e7] via-[#1565c0] to-[#0c438e] bg-clip-text text-transparent transition-all duration-300">
              Nepal’s Fast-Growing Brands
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-xl text-sm sm:text-base lg:text-lg 2xl:text-[20px] leading-relaxed text-slate-600 mb-3 font-normal">
            Fast hosting from Nepal with sub-millisecond local latency, a 99.98% SLA, and expert support 24/7.
          </p>

          {/* .COM Included Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1 text-xs sm:text-sm 2xl:text-base font-bold text-blue-700 mb-3 shadow-sm backdrop-blur-sm">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-b from-[#1b75e7] to-[#125ec5] text-[10px] text-white">✓</span>
            <span>.com domain included free with annual plans</span>
          </div>

          {/* Domain Search Card */}
          <div id="domains" className="w-full rounded-2xl border border-blue-200/80 bg-white p-3 shadow-xl shadow-blue-500/10 transition-all duration-300 hover:shadow-2xl hover:border-blue-400">
            <div className="flex flex-col items-stretch gap-2.5 sm:flex-row">
              <div className="relative flex-1">
                <span 
                  onClick={() => domainSearchInputRef.current?.focus()}
                  className="absolute inset-y-0 left-3.5 flex items-center text-xl text-slate-400 cursor-pointer hover:text-blue-600 transition-colors"
                  title="Click to focus"
                >
                  <CiSearch />
                </span>
                <input
                  ref={domainSearchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder={animatedPlaceholder}
                  aria-label="Search your domain"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/80 py-3 pl-11 pr-4 text-sm sm:text-base font-semibold text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                />
              </div>
              
              {/* Domain Search Button */}
              <button
                type="button"
                onClick={() => handleSearch()}
                className="btn-shimmer shrink-0 rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-6 py-3 text-sm font-bold text-white transition-all duration-300 ease-in-out hover:from-[#1e88e5] hover:to-[#1565c0] hover:shadow-[0_12px_28px_rgba(30,136,229,0.45)] hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-md"
              >
                Search Domain
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button 
              type="button" 
              onClick={() => handleSearch()}
              className="btn-shimmer rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-6 py-3.5 text-sm sm:text-base font-bold text-white transition-all duration-300 ease-in-out hover:from-[#1e88e5] hover:to-[#1565c0] hover:shadow-[0_12px_28px_rgba(30,136,229,0.45)] hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-md"
            >
              Get Started &rarr;
            </button>
            
            <a 
              href="#plans" 
              className="rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50 hover:border-slate-400 hover:text-blue-600 shadow-sm"
            >
              View Hosting Plans
            </a>
          </div>

          {/* Social Proof & Trust Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-slate-200/80 pt-4">
            <div className="flex -space-x-2 overflow-hidden">
              <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-md transition-transform hover:scale-110" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" alt="Customer" />
              <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-md transition-transform hover:scale-110" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" alt="Customer" />
              <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-md transition-transform hover:scale-110" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" alt="Customer" />
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-xs font-black text-white ring-2 ring-white shadow-md">+5k</div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500 text-sm">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                <span className="font-extrabold text-slate-900 ml-1">4.9/5</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Trusted by 5,000+ active websites in Nepal</p>
            </div>
          </div>

          {/* Quick Specs Strip */}
          <div className="mt-5 grid grid-cols-3 gap-2.5 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-3.5 py-3 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5">
              <span className="text-blue-600 text-sm">⚡</span> NVMe Storage
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-3.5 py-3 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5">
              <span className="text-blue-600 text-sm">🛡️</span> Free DDoS
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-3.5 py-3 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5">
              <span className="text-blue-600 text-sm">🔄</span> Daily Backups
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN: REDESIGNED HIGH-TECH INTERACTIVE STAGE ================= */}
        <div className="relative isolate min-h-[440px] overflow-hidden rounded-3xl border border-blue-200/80 bg-gradient-to-br from-[#0a192f] via-[#0f2847] to-[#041226] p-6 shadow-2xl shadow-blue-900/30 text-white sm:min-h-[480px] lg:min-h-[520px] flex flex-col justify-between">
          
          {/* Glowing Ambient Background Spotlights */}
          <div className="absolute top-[-10%] right-[-10%] h-72 w-72 rounded-full bg-blue-500/20 blur-3xl pointer-events-none animate-aurora" />
          <div className="absolute bottom-[-10%] left-[-10%] h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none animate-aurora" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

          {/* 1. TOP BAR: Live Datacenter Telemetry Indicator */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 border border-blue-400/30">
                <Server className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-white tracking-wide">Kathmandu Tier-3 Node</h3>
                <p className="text-[10px] text-blue-200/70 flex items-center gap-1 mt-0.5">
                  <Activity className="h-3 w-3 text-emerald-400" /> Latency: &lt;1ms
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold text-emerald-400">99.98% Live</span>
            </div>
          </div>

          {/* 2. CENTER STAGE: Robot Mascot with Interactive Extension Chips & Vertical Ticker */}
          <div className="relative z-10 my-auto flex items-center justify-between py-4">
            
            {/* Domain Extensions Selection Stack (Interactive) */}
            <div className="flex flex-col gap-2 z-10">
              {[
                { label: '.com', image: Dotcom, name: 'brand.com' },
                { label: '.np', image: Dotnp, name: 'brand.com.np' },
                { label: '.net', image: Dotnet, name: 'brand.net' },
                { label: '.biz', image: Dotbiz, name: 'brand.biz' },
                { label: '.info', image: Dotinfo, name: 'brand.info' },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleSearch(item.name)}
                  className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-2.5 py-1.5 text-xs font-bold text-slate-200 backdrop-blur-md transition-all duration-200 hover:border-blue-400 hover:bg-blue-600/30 hover:scale-105 cursor-pointer shadow-sm group"
                  title={`Select ${item.label}`}
                >
                  <img src={item.image} alt={item.label} className="h-5 w-5 object-contain" />
                  <span className="group-hover:text-white transition-colors">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mascot Showcase with Holographic Portal Ring */}
            <div className="relative flex-1 flex items-center justify-center">
              <div className="absolute h-48 w-48 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />
              <img
                src={HeroRobot}
                alt="Blue Fox Hoster Robot Mascot"
                className="relative z-10 h-56 sm:h-64 lg:h-72 w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] animate-float"
              />
            </div>

            {/* Feature Ticker Column */}
            <div className="h-[180px] sm:h-[210px] w-[8.5rem] sm:w-[10rem] overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-1.5 z-10">
              <div className="animate-vertical-ticker flex flex-col gap-2">
                {[0, 1].map((group) => (
                  <div className="flex flex-col gap-2" key={group}>
                    {features.map((item) => (
                      <div
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-2.5 py-2 text-left backdrop-blur-md transition-all hover:bg-white/20"
                        key={`${group}-${item.title}`}
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-500/20 text-xs">
                          {item.icon}
                        </span>
                        <span className="text-[11px] font-bold text-slate-200 truncate">
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* 3. BOTTOM BANNER: Performance Highlights & Pricing CTA */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">100% NVMe SSD</h4>
                <p className="text-[10px] text-slate-400">Ultra-fast response time</p>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-3 shadow-xl">
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-blue-200 block">Starting Offer</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-xl font-black text-white">Rs 120</span>
                  <span className="text-[10px] text-blue-100 font-semibold">/mo</span>
                </div>
              </div>

              <a
                href="#plans"
                className="group flex items-center gap-1 rounded-xl bg-white px-3 py-2 text-xs font-bold text-blue-950 shadow-md transition-transform hover:scale-105"
              >
                Claim <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero