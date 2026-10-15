import React, { useEffect, useRef, useState } from 'react'
import {
  Zap,
  Server,
  Activity,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Globe,
  ShoppingBag,
  Mail,
  Rocket,
  Lock,
  Cloud,
  Check,
  Star,
  Loader2,
  ChevronDown,
} from 'lucide-react'
import HeroRobot from '../assets/robot_5_transparent.svg'
import Dotcom from '../assets/Dotcom.avif'
import Dotnet from '../assets/Dotnet.avif'
import Dotbiz from '../assets/Dotbiz.avif'
import Dotnp from '../assets/Dotnp.avif'
import Dotinfo from '../assets/Dotinfo.avif'
import Flag from '../assets/Flag_of_Nepal.svg.webp'
import { CiSearch } from 'react-icons/ci'

/* ---------------------------------------------------------------------------
   Small animation helpers (no extra dependencies)
--------------------------------------------------------------------------- */

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])
  return reduced
}

// Counts up from 0 once the element is visible
const CountUp = ({ end, decimals = 0, prefix = '', suffix = '', duration = 1600, delay = 0 }) => {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()
  const [val, setVal] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setStarted(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    if (reduced) {
      setVal(end)
      return
    }
    let raf
    let startTime
    const timer = setTimeout(() => {
      const tick = (now) => {
        if (!startTime) startTime = now
        const t = Math.min((now - startTime) / duration, 1)
        setVal(end * (1 - Math.pow(1 - t, 3)))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, delay)
    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(raf)
    }
  }, [started, end, duration, delay, reduced])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  )
}

/* ---------------------------------------------------------------------------
   Data
--------------------------------------------------------------------------- */

const domainPlaceholders = ['yourbrand.com', 'yourbrand.com.np', 'yourstore.net', 'youridea.org']

const extensionChips = [
  { label: '.com', image: Dotcom, name: 'brand.com' },
  { label: '.np', image: Dotnp, name: 'brand.com.np' },
  { label: '.net', image: Dotnet, name: 'brand.net' },
  { label: '.biz', image: Dotbiz, name: 'brand.biz' },
  { label: '.info', image: Dotinfo, name: 'brand.info' },
]

// Features displayed in the auto-scrolling ticker
const features = [
  { Icon: Globe, title: 'WordPress sites' },
  { Icon: ShoppingBag, title: 'Ecommerce Ready' },
  { Icon: Mail, title: 'Email Campaigns' },
  { Icon: Zap, title: 'Instant Activation' },
  { Icon: Rocket, title: 'Launch website' },
  { Icon: Lock, title: 'Free SSL Certificate' },
  { Icon: Cloud, title: 'Cloud Backups' },
]

const quickSpecs = [
  { Icon: Zap, label: 'NVMe Storage' },
  { Icon: ShieldCheck, label: 'Free DDoS' },
  { Icon: RefreshCw, label: 'Daily Backups' },
]

const avatars = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
]

// Floating particles inside the stage: [left %, size px, duration s, delay s]
const particles = [
  [8, 4, 9, 0],
  [22, 3, 12, 2],
  [38, 5, 10, 4],
  [55, 3, 13, 1],
  [70, 4, 9, 3],
  [84, 5, 11, 5],
  [93, 3, 14, 2],
]

// Staggered entrance helper
const rise = (ms) => ({ '--d': `${ms}ms` })

/* ---------------------------------------------------------------------------
   Component
--------------------------------------------------------------------------- */

const Hero = () => {
  const [animatedPlaceholder, setAnimatedPlaceholder] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const domainSearchInputRef = useRef(null)
  const searchTimerRef = useRef(null)
  const stageRef = useRef(null)
  const tiltEnabledRef = useRef(false)

  // Typewriter effect for placeholder
  useEffect(() => {
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

  // 3D tilt only on devices with a real pointer and when motion is allowed
  useEffect(() => {
    tiltEnabledRef.current =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return () => window.clearTimeout(searchTimerRef.current)
  }, [])

  const handleStageMove = (e) => {
    const el = stageRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty('--mx', `${x}px`)
    el.style.setProperty('--my', `${y}px`)
    if (!tiltEnabledRef.current) return
    const px = x / rect.width - 0.5
    const py = y / rect.height - 0.5
    el.style.setProperty('--px', px.toFixed(3))
    el.style.setProperty('--py', py.toFixed(3))
    el.style.transform = `perspective(1100px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg)`
  }

  const handleStageLeave = () => {
    const el = stageRef.current
    if (!el) return
    el.style.transform = ''
    el.style.setProperty('--px', '0')
    el.style.setProperty('--py', '0')
  }

  // Handle Domain Search execution
  const handleSearch = (customQuery) => {
    const query = typeof customQuery === 'string' ? customQuery : searchQuery.trim() || animatedPlaceholder
    if (query) {
      setSearchQuery(query)
      setIsSearching(true)
      window.clearTimeout(searchTimerRef.current)
      searchTimerRef.current = window.setTimeout(() => setIsSearching(false), 900)

      const pricingSection = document.getElementById('domain-pricing') || document.getElementById('plans')
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' })
      }
      console.log(`Searching domain: ${query}`)
    }
  }

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })
  }

  return (
    <section className="hero-section site-section relative w-full overflow-hidden bg-transparent pt-12 pb-6 font-sans sm:pt-14 sm:pb-8 lg:flex lg:min-h-[calc(100svh-6.5625rem)] lg:flex-col lg:pt-14 lg:pb-12">
      {/* Animations */}
      <style>{`
        @keyframes verticalScroll { to { transform: translateY(calc(-50% - 6px)); } }
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
        @keyframes shimmerSweep { 0% { left: -100%; } 100% { left: 100%; } }

        @keyframes heroRise {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroSlideIn {
          from { opacity: 0; transform: translateX(-18px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroPop {
          0% { opacity: 0; transform: scale(0.4); }
          70% { opacity: 1; transform: scale(1.12); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes heroGradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes heroSpin { to { transform: rotate(360deg); } }
        @keyframes heroBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(28px, -22px) scale(1.1); }
        }
        @keyframes heroParticle {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          15% { opacity: 0.8; }
          100% { transform: translateY(-520px) scale(0.6); opacity: 0; }
        }
        @keyframes heroScan {
          0% { top: -22%; }
          100% { top: 118%; }
        }
        @keyframes heroTwinkle {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.25); filter: brightness(1.25); }
        }
        @keyframes heroNudge {
          0%, 100% { transform: translateY(0); opacity: 0.55; }
          50% { transform: translateY(6px); opacity: 1; }
        }

        .animate-vertical-ticker { animation: verticalScroll 24s linear infinite; }
        .animate-vertical-ticker:hover { animation-play-state: paused; }
        .animate-float { animation: floatAnimation 4.8s ease-in-out infinite; }
        .animate-fade-in { animation: fadeInSlide 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-aurora { animation: auroraPulse 7s ease-in-out infinite; }

        .hero-rise { opacity: 0; animation: heroRise 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards; animation-delay: var(--d, 0ms); }
        .hero-slide-in { opacity: 0; animation: heroSlideIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; animation-delay: var(--d, 0ms); }
        .hero-pop { opacity: 0; animation: heroPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; animation-delay: var(--d, 0ms); }
        .hero-gradient-text { background-size: 200% auto; animation: heroGradient 6s linear infinite; }
        .hero-orbit { animation: heroSpin 22s linear infinite; }
        .hero-orbit-rev { animation: heroSpin 32s linear infinite reverse; }
        .hero-blob { animation: heroBlob 16s ease-in-out infinite; }
        .hero-particle { animation: heroParticle linear infinite; }
        .hero-scan { animation: heroScan 7s linear infinite; }
        .hero-star { animation: heroPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both, heroTwinkle 3.5s ease-in-out infinite; animation-delay: var(--d, 0ms), calc(var(--d, 0ms) + 1.5s); }
        .hero-nudge { animation: heroNudge 1.8s ease-in-out infinite; }

        .btn-shimmer { position: relative; overflow: hidden; }
        .btn-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%);
          animation: shimmerSweep 3s infinite ease-in-out;
        }

        .hero-stage:hover .hero-spot { opacity: 1; }
        .hero-stage { transform-style: preserve-3d; transition: transform 0.35s ease-out; will-change: transform; }

        @media (prefers-reduced-motion: reduce) {
          .hero-section *, .hero-section *::before, .hero-section *::after {
            animation: none !important;
            transition: none !important;
          }
          .hero-rise, .hero-slide-in, .hero-pop { opacity: 1 !important; }
        }
      `}</style>

      {/* Ambient background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
        <div className="hero-blob absolute -left-28 top-16 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="hero-blob absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-sky-400/15 blur-3xl" style={{ animationDelay: '-8s' }} />
      </div>

      {/* Main Container Grid */}
      <div className="site-container relative z-10 grid grid-cols-1 items-center gap-10 lg:flex-1 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-8 xl:gap-12">
        {/* ================= LEFT COLUMN: HERO CONTENT ================= */}
        <div className="w-full max-w-2xl">
          {/* Top Badge */}
          <div
            style={rise(0)}
            className="hero-rise mb-3 inline-flex cursor-default items-center gap-2.5 rounded-full border border-blue-200 bg-white/95 px-3.5 py-1 text-xs text-slate-800 shadow-md shadow-blue-500/5 backdrop-blur-md transition-all hover:scale-[1.02] hover:border-blue-400 sm:text-sm 2xl:text-base"
          >
            <span>
              <img src={Flag} alt="Nepal flag" className="h-4 w-4 rounded-sm shadow-sm" />
            </span>
            <span className="font-semibold">Sovereign Cloud Infrastructure in Nepal</span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
          </div>

          {/* Main Heading */}
          <h1
            style={rise(100)}
            className="hero-rise section-title mb-3 max-w-[18ch] text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl"
          >
            Web Hosting &amp; Cloud Built for{' '}
            <span className="hero-gradient-text bg-gradient-to-r from-[#0c73d5] via-[#38a3ff] to-[#0c73d5] bg-clip-text text-transparent">
              Nepal’s Fast-Growing Brands
            </span>
          </h1>

          {/* Subheading */}
          <p
            style={rise(200)}
            className="hero-rise mb-3 max-w-xl text-sm font-normal leading-relaxed text-slate-600 sm:text-base lg:text-lg 2xl:text-[20px]"
          >
            Fast hosting from Nepal with sub-millisecond local latency, a 99.98% SLA, and expert support 24/7.
          </p>

          {/* .COM Included Badge */}
          <div
            style={rise(280)}
            className="hero-rise mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1 text-xs font-bold text-blue-700 shadow-sm backdrop-blur-sm sm:text-sm 2xl:text-base"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-b from-[#1b75e7] to-[#125ec5] text-white">
              <Check className="h-2.5 w-2.5" strokeWidth={3} aria-hidden="true" />
            </span>
            <span>.com domain included free with annual plans</span>
          </div>

          {/* Domain Search Card */}
          <div
            id="domains"
            style={rise(360)}
            className="hero-rise w-full rounded-2xl border border-blue-200/80 bg-white p-3 shadow-xl shadow-blue-500/10 transition-all duration-300 focus-within:border-blue-500 focus-within:shadow-[0_0_0_4px_rgba(59,130,246,0.15),0_20px_40px_-12px_rgba(30,136,229,0.35)] hover:border-blue-400 hover:shadow-2xl"
          >
            <div className="flex flex-col items-stretch gap-2.5 sm:flex-row">
              <div className="relative flex-1">
                <span
                  onClick={() => domainSearchInputRef.current?.focus()}
                  className="absolute inset-y-0 left-3.5 flex cursor-pointer items-center text-xl text-slate-400 transition-colors hover:text-blue-600"
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/80 py-3 pl-11 pr-4 text-sm font-semibold text-slate-900 transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 sm:text-base"
                />
              </div>

              {/* Domain Search Button */}
              <button
                type="button"
                onClick={() => handleSearch()}
                className="btn-shimmer flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:from-[#1e88e5] hover:to-[#1565c0] hover:shadow-[0_12px_28px_rgba(30,136,229,0.45)] active:scale-95"
              >
                {isSearching && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                {isSearching ? 'Searching…' : 'Search Domain'}
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={rise(440)} className="hero-rise mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => handleSearch()}
              className="btn-shimmer group cursor-pointer rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:from-[#1e88e5] hover:to-[#1565c0] hover:shadow-[0_12px_28px_rgba(30,136,229,0.45)] active:scale-95 sm:text-base"
            >
              Get Started{' '}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </button>

            <a
              href="#plans"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-slate-50 hover:text-blue-600 hover:shadow-md sm:text-base"
            >
              View Hosting Plans
            </a>
          </div>

          {/* Social Proof & Trust Badges */}
          <div style={rise(520)} className="hero-rise mt-6 flex flex-wrap items-center gap-4 border-t border-slate-200/80 pt-4">
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <img
                  key={src}
                  style={rise(650 + i * 110)}
                  className="hero-pop inline-block h-9 w-9 rounded-full object-cover shadow-md ring-2 ring-white transition-transform hover:z-10 hover:scale-110"
                  src={src}
                  alt="Customer"
                  width="36"
                  height="36"
                />
              ))}
              <div
                style={rise(650 + avatars.length * 110)}
                className="hero-pop flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-xs font-black text-white shadow-md ring-2 ring-white"
              >
                <CountUp end={5} prefix="+" suffix="k" duration={1400} delay={900} />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-sm text-amber-500">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} style={rise(750 + i * 110)} className="hero-star h-4 w-4 fill-current" aria-hidden="true" />
                ))}
                <span className="ml-1 font-extrabold text-slate-900">
                  <CountUp end={4.9} decimals={1} suffix="/5" duration={1400} delay={900} />
                </span>
              </div>
              <p className="text-xs font-medium text-slate-500">Trusted by 5,000+ active websites in Nepal</p>
            </div>
          </div>

          {/* Quick Specs Strip */}
          <div className="mt-5 grid grid-cols-3 gap-2.5 text-xs font-semibold text-slate-700">
            {quickSpecs.map(({ Icon, label }, i) => (
              <div
                key={label}
                style={rise(800 + i * 110)}
                className="hero-rise group flex flex-col items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white px-2 py-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg sm:flex-row sm:gap-2 sm:px-3.5 sm:text-left"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT COLUMN: HIGH-TECH INTERACTIVE STAGE ================= */}
        <div
          ref={stageRef}
          onMouseMove={handleStageMove}
          onMouseLeave={handleStageLeave}
          style={rise(250)}
          className="hero-rise hero-stage relative isolate flex min-h-[440px] flex-col justify-between overflow-hidden rounded-3xl border border-blue-200/80 bg-gradient-to-br from-[#0a192f] via-[#0f2847] to-[#041226] p-6 text-white shadow-2xl shadow-blue-900/30 sm:min-h-[480px] lg:min-h-[520px]"
        >
          {/* Glowing ambient spotlights */}
          <div className="animate-aurora pointer-events-none absolute right-[-10%] top-[-10%] h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="animate-aurora pointer-events-none absolute bottom-[-10%] left-[-10%] h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]" />

          {/* Scanning line */}
          <div aria-hidden="true" className="hero-scan pointer-events-none absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent" />

          {/* Floating particles */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            {particles.map(([left, size, duration, delay], i) => (
              <span
                key={i}
                className="hero-particle absolute bottom-0 rounded-full bg-blue-300/70"
                style={{
                  left: `${left}%`,
                  width: size,
                  height: size,
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                }}
              />
            ))}
          </div>

          {/* Cursor spotlight */}
          <div
            aria-hidden="true"
            className="hero-spot pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
            style={{
              background:
                'radial-gradient(320px circle at var(--mx, 50%) var(--my, 30%), rgba(96,165,250,0.16), transparent 60%)',
            }}
          />

          {/* 1. TOP BAR: Live datacenter telemetry */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/20 text-blue-400">
                <Server className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-wide text-white">Nepal Tier-3 Node</h3>
                <p className="mt-0.5 flex items-center gap-1 text-[10px] text-blue-200/70">
                  <Activity className="h-3 w-3 text-emerald-400" /> Latency: &lt;1ms
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold text-emerald-400">
                <CountUp end={99.98} decimals={2} suffix="% Live" duration={1800} delay={400} />
              </span>
            </div>
          </div>

          {/* 2. CENTER STAGE: mascot, extension chips and ticker */}
          <div className="relative z-10 my-auto flex items-center justify-between py-4">
            {/* Domain extension chips */}
            <div className="z-10 flex flex-col gap-2">
              {extensionChips.map((item, i) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleSearch(item.name)}
                  style={rise(500 + i * 110)}
                  className="hero-slide-in group flex cursor-pointer items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-2.5 py-1.5 text-xs font-bold text-slate-200 shadow-sm backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-blue-400 hover:bg-blue-600/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]"
                  title={`Select ${item.label}`}
                >
                  <img src={item.image} alt={item.label} className="h-5 w-5 object-contain" />
                  <span className="transition-colors group-hover:text-white">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mascot with orbiting rings */}
            <div className="relative flex flex-1 items-center justify-center">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="hero-orbit aspect-square w-full max-w-[18rem] rounded-full border border-dashed border-blue-300/25">
                  <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(147,197,253,0.9)]" />
                </div>
              </div>
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="hero-orbit-rev aspect-square w-[78%] max-w-[14rem] rounded-full border border-blue-300/20">
                  <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-sky-300 shadow-[0_0_10px_rgba(125,211,252,0.9)]" />
                </div>
              </div>
              <div className="pointer-events-none absolute h-48 w-48 rounded-full bg-blue-500/20 blur-2xl" />

              <div
                className="relative z-10 transition-transform duration-300 ease-out"
                style={{ transform: 'translate3d(calc(var(--px, 0) * 16px), calc(var(--py, 0) * 12px), 0)' }}
              >
                <img
                  src={HeroRobot}
                  alt="Blue Fox Hoster Robot Mascot"
                  className="animate-float h-56 w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] sm:h-64 lg:h-72"
                />
              </div>
            </div>

            {/* Feature ticker */}
            <div className="z-10 h-[180px] w-[8.5rem] overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md sm:h-[210px] sm:w-[10rem]">
              <div className="animate-vertical-ticker flex flex-col gap-2">
                {[0, 1].map((group) => (
                  <div className="flex flex-col gap-2" key={group}>
                    {features.map(({ Icon, title }) => (
                      <div
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-2.5 py-2 text-left backdrop-blur-md transition-all hover:bg-white/20"
                        key={`${group}-${title}`}
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-500/20 text-blue-300">
                          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <span className="truncate text-[11px] font-bold text-slate-200">{title}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. BOTTOM BANNER: performance highlight & pricing CTA */}
          <div className="relative z-10 grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
            <div
              style={rise(900)}
              className="hero-rise flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/30 hover:bg-white/10"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">100% NVMe SSD</h4>
                <p className="text-[10px] text-slate-400">Ultra-fast response time</p>
              </div>
            </div>

            <div
              style={rise(1000)}
              className="hero-rise flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] p-3 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(30,136,229,0.5)]"
            >
              <div>
                <span className="block text-[9px] font-extrabold uppercase tracking-widest text-blue-200">Starting Offer</span>
                <div className="mt-0.5 flex items-baseline gap-1">
                  <span className="text-xl font-black text-white">Rs 120</span>
                  <span className="text-[10px] font-semibold text-blue-100">/mo</span>
                </div>
              </div>

              <a
                href="#plans"
                className="btn-shimmer group flex items-center gap-1 rounded-xl bg-white px-3 py-2 text-xs font-bold text-blue-950 shadow-md transition-transform hover:scale-105"
              >
                Claim <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue (large screens) */}
      <button
        type="button"
        onClick={scrollDown}
        aria-label="Scroll down"
        style={rise(1300)}
        className="hero-rise absolute bottom-3 left-1/2 z-10 hidden -translate-x-1/2 cursor-pointer flex-col items-center gap-0.5 border-none bg-transparent text-slate-400 transition-colors hover:text-blue-600 lg:flex"
      >
        <ChevronDown className="hero-nudge h-5 w-5" aria-hidden="true" />
      </button>
    </section>
  )
}

export default Hero