import React from 'react'
import { Send } from 'lucide-react'
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
  const handleSearch = () => {
    const query = searchQuery.trim() || animatedPlaceholder
    if (query) {
      // Example: Scroll to pricing section or pass query
      const pricingSection = document.getElementById('domain-pricing')
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' })
      }
      console.h?.(`Searching domain: ${query}`)
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
    <section className="hero-section site-section w-full overflow-hidden bg-slate-50/50 pt-12 pb-6 font-sans sm:pt-14 sm:pb-8 lg:flex lg:min-h-[calc(100svh-6.5625rem)] lg:flex-col lg:pt-14 lg:pb-12">
      
      {/* Pure CSS Animation for Vertical Ticker Loop */}
      <style>{`
        @keyframes verticalScroll {
          to { transform: translateY(calc(-50% - 6px)); }
        }
        .animate-vertical-ticker {
          animation: verticalScroll 24s linear infinite;
        }
        .animate-vertical-ticker:hover {
          animation-play-state: paused;
        }
        .hero-section::after {
          content: '';
          position: absolute;
          z-index: 0;
          top: -12rem;
          right: -10rem;
          width: min(34rem, 78vw);
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(27, 117, 231, 0.2) 0%, rgba(27, 117, 231, 0.1) 42%, rgba(27, 117, 231, 0) 72%);
          pointer-events: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-vertical-ticker {
            animation: none;
          }
        }
      `}</style>

      {/* Main Container Grid */}
      <div className="site-container grid grid-cols-1 items-center gap-10 lg:flex-1 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-8 xl:gap-12">
        
        {/* ================= LEFT COLUMN: HERO CONTENT ================= */}
        <div className="w-full max-w-2xl">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs sm:text-sm 2xl:text-base text-slate-700 mb-3">
            <span><img src={Flag} alt="Nepal flag" className="w-4 h-4" /></span>
            <span className="font-medium">Sovereign Cloud Infrastructure in Nepal</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>

          {/* Main Heading */}
          <h1 className="section-title max-w-[18ch] font-extrabold text-slate-950 mb-3">
            Web Hosting &amp; Cloud Built for{' '}
            <span className="bg-gradient-to-b from-[#1b75e7] to-[#125ec5] bg-clip-text text-transparent transition-all duration-200">
              Nepal’s Fast-Growing Brands
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-xl text-sm sm:text-base lg:text-lg 2xl:text-[20px] leading-relaxed text-slate-600 mb-3">
            Fast hosting from Nepal with sub-millisecond local latency, a 99.98% SLA, and expert support 24/7.
          </p>

          {/* .COM Included Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs sm:text-sm 2xl:text-base font-bold text-slate-700 mb-2">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-b from-[#1b75e7] to-[#125ec5] text-[10px] text-white">✓</span>
            <span>.com domain included</span>
          </div>

          {/* Domain Search Card */}
          <div id="domains" className="w-full rounded-2xl border border-slate-200 bg-white p-2.5 shadow-md shadow-slate-200/60">
            <div className="mb-2 flex flex-col items-stretch gap-2.5 sm:flex-row">
              <div className="relative flex-1">
                <span 
                  onClick={() => domainSearchInputRef.current?.focus()}
                  className="absolute inset-y-0 left-3 flex items-center text-lg text-slate-400 cursor-pointer hover:text-blue-600 transition-colors"
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm sm:text-base font-medium text-slate-800 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-100"
                />
              </div>
              
              {/* Domain Search Button */}
              <button
                type="button"
                onClick={handleSearch}
                className="shrink-0 rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:from-[#1e88e5] hover:to-[#1565c0] hover:shadow-[0_10px_28px_rgba(30,136,229,0.55)] hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-3 lg:mt-2 flex flex-wrap items-center gap-2.5">
            <button 
              type="button" 
              onClick={handleSearch}
              className="rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-4 py-2.5 text-sm sm:text-base 2xl:text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:from-[#1e88e5] hover:to-[#1565c0] hover:shadow-[0_10px_28px_rgba(30,136,229,0.55)] hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              Get Started &rarr;
            </button>
            
            <a 
              href="#plans" 
              className="rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm sm:text-base 2xl:text-lg font-semibold text-slate-700 transition-colors hover:bg-white"
            >
              View Hosting Plans
            </a>
          </div>

          {/* Social Proof & Trust Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-slate-200/80 pt-4">
            <div className="flex -space-x-2 overflow-hidden">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" alt="Customer" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" alt="Customer" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" alt="Customer" />
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white ring-2 ring-white">+5k</div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500 text-sm">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                <span className="font-bold text-slate-800 ml-1">4.9/5</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Trusted by 5,000+ websites in Nepal</p>
            </div>
          </div>

          {/* Quick Specs Strip */}
          <div className="mt-4 grid grid-cols-3 gap-2 pt-1 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-1.5 rounded-xl border border-slate-200/60 bg-white/60 px-3 py-2 shadow-sm">
              <span className="text-blue-600 font-bold">⚡</span> NVMe Storage
            </div>
            <div className="flex items-center gap-1.5 rounded-xl border border-slate-200/60 bg-white/60 px-3 py-2 shadow-sm">
              <span className="text-blue-600 font-bold">🛡️</span> Free DDoS
            </div>
            <div className="flex items-center gap-1.5 rounded-xl border border-slate-200/60 bg-white/60 px-3 py-2 shadow-sm">
              <span className="text-blue-600 font-bold">🔄</span> Daily Backups
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN: HERO IMAGE & SCROLLING TICKER ================= */}
        <div className="relative isolate min-h-[320px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#f7fbff] via-[#e8f2ff] to-[#d4e6ff] ring-1 ring-blue-100 shadow-[0_24px_60px_rgba(37,99,235,0.14)] sm:min-h-[380px] lg:min-h-[430px] 2xl:min-h-[560px]">
          
          <div
            aria-hidden="true"
            className="absolute inset-y-6 left-4 w-[76%] bg-gradient-to-br from-[#1b75e7] via-[#155fc0] to-[#0c438e] [clip-path:polygon(0_0,100%_0,78%_100%,0_100%)] sm:left-6"
          />
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-full w-[42%] bg-gradient-to-b from-white/70 to-[#bcd7ff]/80 [clip-path:polygon(54%_0,100%_0,100%_100%,0_100%)]"
          />

          <img
            src={HeroRobot}
            alt="Blue Fox Hoster robot mascot"
            className="absolute bottom-0 left-[15%] z-[1] h-[62%] w-[38%] object-contain object-bottom drop-shadow-[0_18px_24px_rgba(5,25,62,0.2)] sm:left-[10%] sm:h-[78%] sm:w-[46%] 2xl:h-[84%] 2xl:w-[48%]"
          />

          <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-1.5 rounded-full border border-white/80 bg-white/95 px-3.5 py-1.5 shadow-lg backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-gradient-to-b from-[#1b75e7] to-[#125ec5] animate-pulse"></span>
            <span className="text-xs font-semibold text-slate-700">99.98% Uptime SLA</span>
          </div>

          <div id="domain-logos" aria-label="Popular domain extensions" className="absolute left-2 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-1 sm:left-3 sm:gap-2">
            {[
              { label: '.com', image: Dotcom },
              { label: '.net', image: Dotnet },
              { label: '.biz', image: Dotbiz },
              { label: '.np', image: Dotnp },
              { label: '.info', image: Dotinfo },
            ].map((item) => (
              <span key={item.label} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/90 bg-white shadow-[0_6px_16px_rgba(5,25,62,0.22)] sm:h-[3.25rem] sm:w-[3.25rem]">
                <img src={item.image} alt={`${item.label} domain`} title={item.label} className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
              </span>
            ))}
          </div>

          <div className="absolute left-5 top-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/90 text-blue-600 shadow-lg backdrop-blur-sm before:absolute before:-left-4 before:top-1/2 before:w-3 before:border-t-2 before:border-dashed before:border-blue-300 sm:left-7 sm:top-4">
            <Send aria-hidden="true" className="h-6 w-6 -rotate-12" strokeWidth={1.8} />
          </div>

          {/* Auto-Scrolling Vertical Ticker */}
          <div className="absolute right-2 top-[40%] h-[170px] w-1/2 -translate-y-1/2 overflow-hidden sm:right-5 sm:top-1/2 sm:h-[220px] sm:w-[min(13rem,88%)] 2xl:right-8 2xl:h-[270px] 2xl:w-[15rem]">
            <div className="animate-vertical-ticker flex flex-col gap-3">
              {[0, 1].map((group) => (
                <div className="flex flex-col gap-3" key={group}>
                  {features.map((item) => (
                    <div
                      className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/90 px-4 py-3 text-left shadow-lg backdrop-blur-md 2xl:px-5 2xl:py-4"
                      key={`${group}-${item.title}`}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-base 2xl:h-11 2xl:w-11 2xl:text-lg">
                        {item.icon}
                      </span>
                      <span className="text-sm 2xl:text-lg font-semibold text-slate-800">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Floating Price Card */}
          <div className="absolute bottom-4 right-4 z-10 rounded-xl border border-white/80 bg-white/95 px-3 py-2.5 shadow-xl backdrop-blur-md 2xl:bottom-6 2xl:right-8 2xl:px-4 2xl:py-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] 2xl:text-xs font-medium text-slate-500">Starting at</span>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-[9px] font-bold uppercase text-emerald-800">70% off</span>
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-xl 2xl:text-2xl font-extrabold text-slate-900">Rs 120</span>
              <span className="text-[10px] font-medium text-slate-500">/mo</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero