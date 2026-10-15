import React, { useEffect, useRef, useState } from 'react'
import {
  Activity,
  ArrowRight,
  Cloud,
  Globe,
  Mail,
  Server,
  ShieldCheck,
  Zap,
  Lock,
  Package,
  Bot,
  BarChart3,
  Puzzle,
  ClipboardList,
  CreditCard,
} from 'lucide-react'
import { FaMicrosoft } from 'react-icons/fa6'
import { SiGoogle, SiZoho, SiZoom } from 'react-icons/si'
import Dotbiz from '../assets/Dotbiz.avif'
import Dotcom from '../assets/Dotcom.avif'
import Dotinfo from '../assets/Dotinfo.avif'
import Dotnet from '../assets/Dotnet.avif'
import Dotnp from '../assets/Dotnp.avif'
import Microsoft365 from '../assets/365.svg'
import WebHostingLogo from '../assets/webhosting.svg'
import CloudHostingLogo from '../assets/Cloudhosting.avif'
import WordPressLogo from '../assets/wordpress.svg'
import EcommerceLogo from '../assets/ecom.svg'
import DjangoLogo from '../assets/django.svg'
import PythonLogo from '../assets/python logo.webp'
import NodejsLogo from '../assets/nodejs-logo.svg'
import UsaLogo from '../assets/Usa.avif'
import EuropeLogo from '../assets/europe.avif'
import NepalLogo from '../assets/Flag_of_Nepal.svg.webp'

/* ---------------------------------------------------------------------------
   Shared animation helpers (no extra dependencies)
--------------------------------------------------------------------------- */

const useInView = (threshold = 0.15) => {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, inView]
}

const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        inView ? 'is-visible opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}

const handleSpotlight = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

const LandingStyles = () => (
  <style>{`
    @keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    @keyframes scrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
    @keyframes slFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
    @keyframes slBlob {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(26px, -20px) scale(1.1); }
    }
    @keyframes slGradient { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }

    .animate-scroll-left { animation: scrollLeft 35s linear infinite; }
    .animate-scroll-right { animation: scrollRight 35s linear infinite; }
    .animate-scroll-left:hover, .animate-scroll-right:hover { animation-play-state: paused; }

    .sl-float { animation: slFloat 5s ease-in-out infinite; animation-delay: var(--fd, 0s); }
    .sl-blob { animation: slBlob 16s ease-in-out infinite; }
    .sl-ring { background-size: 200% 100%; animation: slGradient 5s linear infinite; }
    .sl-gradient-bg { background-size: 200% 100%; animation: slGradient 8s linear infinite; }

    .sl-btn-shine { position: relative; overflow: hidden; }
    .sl-btn-shine::after {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%);
      transform: translateX(-120%); transition: transform 0.7s ease;
    }
    .sl-btn-shine:hover::after { transform: translateX(120%); }

    .sl-item { opacity: 0; transform: translateY(10px); transition: opacity 0.5s ease-out, transform 0.5s ease-out; }
    .is-visible .sl-item { opacity: 1; transform: translateY(0); }

    @media (prefers-reduced-motion: reduce) {
      .animate-scroll-left, .animate-scroll-right, .sl-float, .sl-blob, .sl-ring, .sl-gradient-bg,
      .sl-btn-shine::after { animation: none !important; transition: none !important; }
      .sl-item { opacity: 1; transform: none; transition: none; }
    }
  `}</style>
)

const primaryBtn =
  'sl-btn-shine group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-[#1e88e5] hover:to-[#1565c0] hover:shadow-[0_14px_30px_rgba(30,136,229,0.5)] active:scale-95'

/* ---------------------------------------------------------------------------
   DOMAINS SECTION
--------------------------------------------------------------------------- */

const domainOffers = [
  { extension: '.com', image: Dotcom, description: 'Go global', price: 'Rs 1,950 / year' },
  { extension: '.net', image: Dotnet, description: 'A reliable alternative', price: 'Est. Rs 1,750 / year', estimated: true },
  { extension: '.biz', image: Dotbiz, description: 'Built for business', price: 'Est. Rs 2,450 / year', estimated: true },
  { extension: '.np', image: Dotnp, description: 'Nepal domain', price: 'Free' },
  { extension: '.info', image: Dotinfo, description: 'For information sites', price: 'Est. Rs 1,850 / year', estimated: true },
  { extension: '.org', description: 'For communities', price: 'Rs 2,250 / year' },
]

const MarqueeCard = ({ domain }) => (
  <article className="group flex h-20 w-80 shrink-0 items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50/30 hover:shadow-md">
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
      {domain.image ? (
        <img src={domain.image} alt="" className="h-8 w-8 object-contain" />
      ) : (
        <span className="text-sm font-bold text-blue-700">{domain.extension}</span>
      )}
    </span>
    <span className="min-w-0 flex-1">
      <span className="block truncate text-sm font-bold text-slate-900">{domain.extension}</span>
      <span className="mt-0.5 block truncate text-xs text-slate-500">{domain.description}</span>
    </span>
    {domain.price === 'Free' ? (
      <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700 ring-1 ring-emerald-200/80">
        Free
      </span>
    ) : (
      <span className="shrink-0 text-right text-xs font-bold text-slate-700">{domain.price}</span>
    )}
  </article>
)

export const DomainLandingSections = () => (
  <>
    <LandingStyles />

    <section
      id="domain-services"
      className="site-section relative scroll-mt-28 overflow-hidden bg-gradient-to-b from-[#f4f8ff] to-[#edf4ff] py-16 font-sans sm:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="sl-blob absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="sl-blob absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" style={{ animationDelay: '-8s' }} />
        <div
          className="absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
          style={{ backgroundImage: 'radial-gradient(#93c5fd 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
      </div>

      <div className="site-container relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-xs font-bold uppercase text-blue-700 shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            <Globe aria-hidden="true" className="h-3.5 w-3.5" /> Domain names
          </span>
          <h2 className="section-title mt-6 font-extrabold text-slate-950 tracking-tight">
            Give your next idea{' '}
            <span className="bg-gradient-to-r from-[#0c73d5] to-[#38a3ff] bg-clip-text text-transparent">
              a name of its own.
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Find a memorable address for your business, community, or next big project, with local .np options and familiar global extensions[cite: 9].
          </p>
          <a href="#domains" className={`${primaryBtn} mt-7`}>
            Search a domain
            <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>

        <div className="relative pb-6" aria-label="Popular domain extensions">
          <div className="grid grid-cols-3 gap-3.5 sm:gap-4">
            {domainOffers.slice(0, 6).map((domain, i) => (
              <Reveal key={domain.extension} delay={i * 90}>
                <div className="sl-float" style={{ '--fd': `${-i * 0.7}s` }}>
                  <div className="group relative flex aspect-square flex-col items-center justify-center gap-1.5 overflow-hidden rounded-2xl border border-white bg-white/90 p-3.5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/15">
                    {domain.image ? (
                      <>
                        <img
                          src={domain.image}
                          alt={`${domain.extension} domain`}
                          className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14"
                        />
                        <span className="text-[11px] font-bold text-slate-500 sm:text-xs">{domain.extension}</span>
                      </>
                    ) : (
                      <span className="text-xl font-extrabold text-blue-700 transition-transform duration-300 group-hover:scale-110">
                        {domain.extension}
                      </span>
                    )}
                    <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] py-1.5 text-center text-[10px] font-bold text-white transition-transform duration-300 group-hover:translate-y-0">
                      {domain.price === 'Free' ? 'Free' : domain.price.replace(' / year', '/yr')}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="absolute bottom-0 right-0 flex items-center gap-2 rounded-xl bg-white/90 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-md backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Local .np registration available[cite: 9]
          </div>
        </div>
      </div>
    </section>

    <section id="domain-pricing" className="site-section scroll-mt-28 overflow-hidden bg-white py-16 font-sans sm:py-20">
      <div className="site-container">
        <Reveal className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Domain pricing</p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl tracking-tight">Choose your extension</h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-slate-500">
            Annual estimates shown in NPR. Final rates and .np eligibility are confirmed during registration[cite: 9].
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="mb-3.5 flex overflow-hidden py-1">
              <div className="animate-scroll-left flex shrink-0 items-center gap-4 pr-4">
                {[...domainOffers, ...domainOffers].map((domain, index) => (
                  <MarqueeCard key={`top-${domain.extension}-${index}`} domain={domain} />
                ))}
              </div>
            </div>

            <div className="flex overflow-hidden py-1">
              <div className="animate-scroll-right flex shrink-0 items-center gap-4 pr-4">
                {[...domainOffers, ...domainOffers].map((domain, index) => (
                  <MarqueeCard key={`bottom-${domain.extension}-${index}`} domain={domain} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </>
)

/* ---------------------------------------------------------------------------
   SERVER & HOSTING SECTION
--------------------------------------------------------------------------- */

const hostingCards = [
  { label: 'Web Hosting', image: WebHostingLogo, from: 'Rs 120/mo', badge: 'Popular', path: 'web-hosting' },
  { label: 'Cloud Hosting', image: CloudHostingLogo, from: 'Rs 450/mo', path: 'cloud-hosting' },
  { label: 'WordPress', image: WordPressLogo, from: 'Rs 199/mo', path: 'wordpress-hosting' },
  { label: 'eCommerce', image: EcommerceLogo, from: 'Rs 349/mo', path: 'ecommerce-hosting' },
  { label: 'Django', image: DjangoLogo, from: 'Rs 290/mo', path: 'django-hosting' },
  { label: 'Python', image: PythonLogo, from: 'Rs 290/mo', path: 'python-hosting' },
  { label: 'Node.js', image: NodejsLogo, from: 'Rs 250/mo', path: 'nodejs-hosting' },
  { label: 'USA VPS', image: UsaLogo, from: 'Rs 1,500/mo', path: 'usa-vps' },
  { label: 'Europe VPS', image: EuropeLogo, from: 'Rs 1,500/mo', path: 'europe-vps' },
  { label: 'Nepal VPS', image: NepalLogo, from: 'Rs 1,200/mo', path: 'nepal-vps' },
]

const hostingPerks = [
  { Icon: ShieldCheck, text: 'SSL & DDoS included', color: 'text-emerald-400' },
  { Icon: Activity, text: '99.99% uptime guarantee', color: 'text-cyan-300' },
  { Icon: Zap, text: 'NVMe SSD on all plans', color: 'text-yellow-300' },
]

const paymentMethods = ['eSewa', 'Khalti', 'IME Pay', 'Bank Transfer']

export const ServerHostingHero = ({ onNavigate }) => (
  <section
    id="server-hosting"
    className="relative w-full overflow-hidden bg-[#061b3f] py-16 font-sans text-white sm:py-24"
  >
    <LandingStyles />

    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="sl-blob absolute -right-20 -top-24 h-96 w-96 rounded-full bg-[#1b75e7]/25 blur-3xl" />
      <div className="sl-blob absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" style={{ animationDelay: '-8s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]" />
    </div>

    <div className="site-container relative z-10">
      <div className="mb-14 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
        <Reveal className="max-w-xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase text-blue-100 backdrop-blur">
            <Server aria-hidden="true" className="h-3.5 w-3.5" /> Server &amp; hosting
          </span>
          <h2 className="section-title font-extrabold text-white tracking-tight">
            A faster, steadier home for{' '}
            <span className="bg-gradient-to-r from-[#7cc0ff] to-[#38a3ff] bg-clip-text text-transparent">
              your next website.
            </span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-blue-100 sm:text-base">
            Choose managed web hosting or scale into cloud and developer-ready environments, backed by local support and reliable infrastructure[cite: 9].
          </p>
        </Reveal>

        <Reveal delay={150} className="shrink-0">
          <div className="flex flex-col gap-2.5 sm:items-end">
            {hostingPerks.map(({ Icon, text, color }, i) => (
              <div
                key={text}
                style={{ transitionDelay: `${300 + i * 120}ms` }}
                className="sl-item flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-blue-100 backdrop-blur transition-colors hover:border-white/25 hover:bg-white/10"
              >
                <Icon className={`h-4 w-4 ${color}`} aria-hidden="true" /> {text}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-2 gap-3.5 pt-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-5">
        {hostingCards.map((card, i) => (
          <Reveal key={card.path} delay={(i % 5) * 80 + Math.floor(i / 5) * 120} className="h-full">
            <div
              onMouseMove={handleSpotlight}
              className="group relative h-full rounded-2xl bg-white/10 p-px transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(56,163,255,0.4)]"
            >
              <span
                aria-hidden="true"
                className="sl-ring pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0c73d5] via-[#7cc0ff] to-[#0c73d5] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              {card.badge && (
                <span className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-3 py-0.5 text-[10px] font-extrabold text-white shadow-md">
                  {card.badge}
                </span>
              )}

              <button
                type="button"
                onClick={() => onNavigate && onNavigate(card.path)}
                className="relative flex h-full w-full cursor-pointer flex-col items-center gap-3 overflow-hidden rounded-[15px] border-none bg-[#0a2452] p-4 text-center transition-colors duration-300 hover:bg-[#0d2d63]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(160px circle at var(--mx, 50%) var(--my, 0%), rgba(96,165,250,0.22), transparent 70%)',
                  }}
                />
                <span className="relative mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-white/20 shadow-inner">
                  <img src={card.image} alt={card.label} className="h-7 w-7 rounded-sm object-contain" />
                </span>
                <span className="relative mt-1 space-y-1">
                  <span className="block text-xs font-bold leading-tight text-white">{card.label}</span>
                  <span className="block text-[10px] font-semibold text-blue-300">From {card.from}</span>
                </span>
                <span className="relative mt-auto flex items-center gap-1 text-[10px] font-semibold text-blue-300 transition-colors group-hover:text-white">
                  View plans{' '}
                  <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-blue-300">
            <CreditCard className="h-4 w-4" aria-hidden="true" />
            <span>Pay via</span>
            {paymentMethods.map((m) => (
              <span
                key={m}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-semibold text-white transition-colors hover:bg-white/15"
              >
                {m}
              </span>
            ))}
          </div>
          <a href="#server-plans" className={primaryBtn}>
            Compare all plans
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </div>
  </section>
)

/* ---------------------------------------------------------------------------
   EMAIL & CLOUD SECTION
--------------------------------------------------------------------------- */

const cloudServices = [
  { icon: SiGoogle, label: 'Google Workspace', price: 'Rs 780', unit: '/user/mo', color: 'text-[#4285f4]', path: 'google-workspace' },
  { icon: FaMicrosoft, image: Microsoft365, label: 'Microsoft 365', price: 'Rs 650', unit: '/user/mo', color: 'text-[#2675d8]', path: 'office-365' },
  { icon: SiZoho, label: 'Zoho Workplace', price: 'Rs 700', unit: '/user/mo', color: 'text-[#e44b36]', path: 'zoho-workplace' },
  { icon: SiZoom, label: 'Zoom Business', price: 'Rs 1,850', unit: '/host/mo', color: 'text-[#2d8cff]', path: 'zoom' },
]

const moreCloudLinks = [
  { label: 'Google Cloud', path: 'google-cloud', Icon: Cloud },
  { label: 'NordVPN', path: 'nordvpn', Icon: Lock },
  { label: 'Office LTSC', path: 'office-ltsc', Icon: Package },
  { label: 'MS Copilot', path: 'copilot', Icon: Bot },
  { label: 'Power BI', path: 'power-bi', Icon: BarChart3 },
  { label: 'Azure', path: 'azure', Icon: Globe },
  { label: 'Zoho CRM', path: 'zoho-crm', Icon: Puzzle },
  { label: 'Bigin CRM', path: 'bigin-zoho', Icon: ClipboardList },
  { label: 'Zoho Mail', path: 'zoho-mail', Icon: Mail },
  { label: 'AWS', path: 'aws', Icon: Server },
  { label: 'MS Defender', path: 'microsoft-defender', Icon: ShieldCheck },
]

export const CloudLandingSections = ({ onNavigate }) => {
  return (
    <div className="font-sans">
      <LandingStyles />

      <section
        id="cloud-services"
        className="site-section relative scroll-mt-28 overflow-hidden bg-gradient-to-br from-[#f0f7ff] via-[#eaf3fe] to-[#e3edfe] py-16 sm:py-24"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="sl-blob absolute -right-16 -top-10 h-80 w-80 rounded-full bg-blue-200/50 blur-3xl" />
          <div className="sl-blob absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" style={{ animationDelay: '-8s' }} />
        </div>

        <div className="site-container relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-xs font-bold uppercase text-[#0c73d5] shadow-sm backdrop-blur">
              <Cloud className="h-3.5 w-3.5" aria-hidden="true" /> Email &amp; Cloud
            </span>
            <h2 className="mt-6 text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
              Your team's tools,{' '}
              <span className="bg-gradient-to-r from-[#0c73d5] to-[#38a3ff] bg-clip-text text-transparent">
                connected and ready.
              </span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Bring email, collaboration, video meetings, and cloud services together with a setup that can grow with your team[cite: 9].
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {moreCloudLinks.map(({ label, path, Icon }, i) => (
                <button
                  key={path}
                  type="button"
                  onClick={() => onNavigate && onNavigate(path)}
                  style={{ transitionDelay: `${250 + i * 50}ms` }}
                  className="sl-item group inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/60 hover:text-blue-700 hover:shadow-md"
                >
                  <Icon className="h-3.5 w-3.5 text-blue-500 transition-transform duration-300 group-hover:scale-125" aria-hidden="true" />
                  {label}
                </button>
              ))}
            </div>

            <a href="#cloud-pricing" className={`${primaryBtn} mt-8`}>
              Compare cloud options
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </Reveal>

          <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
            {cloudServices.map((svc, i) => (
              <Reveal key={svc.path} delay={i * 100} className="h-full">
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate(svc.path)}
                  className="group relative flex h-full min-h-[6rem] w-full cursor-pointer items-center gap-3.5 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-4 text-left shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-50 shadow-inner">
                    {svc.image ? (
                      <img src={svc.image} alt={svc.label} className="h-8 w-8 object-contain" />
                    ) : (
                      <svc.icon className={`h-7 w-7 ${svc.color}`} />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold leading-tight text-slate-800">{svc.label}</span>
                    <span className="mt-1 block text-xs text-slate-500">
                      {svc.price}
                      <span className="text-slate-400 font-medium">{svc.unit}</span>
                    </span>
                    <span className="mt-1.5 block text-[10px] font-bold text-blue-600">
                      View plans{' '}
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[#0c73d5] to-[#38a3ff] transition-transform duration-500 group-hover:scale-x-100"
                  />
                </button>
              </Reveal>
            ))}

            <Reveal delay={450} className="col-span-2">
              <div className="sl-gradient-bg flex items-center gap-3.5 rounded-2xl bg-gradient-to-r from-[#0c73d5] via-[#38a3ff] to-[#0c73d5] px-6 py-4 text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:shadow-[0_14px_30px_rgba(30,136,229,0.45)]">
                <ShieldCheck className="h-6 w-6 shrink-0" aria-hidden="true" />
                <span className="text-sm font-bold">Productivity, security, and cloud in one place[cite: 9]</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="cloud-pricing" className="site-section scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="site-container">
          <Reveal className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#0c73d5]">Cloud Pricing</p>
              <h2 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl tracking-tight">Start with the tools you need</h2>
            </div>
            <span className="sl-float hidden h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0c73d5] sm:flex shadow-sm">
              <Mail className="h-6 w-6" aria-hidden="true" />
            </span>
          </Reveal>

          <Reveal delay={100}>
            <div className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              {cloudServices.map((svc, i) => (
                <button
                  key={svc.path}
                  type="button"
                  onClick={() => onNavigate && onNavigate(svc.path)}
                  style={{ transitionDelay: `${250 + i * 110}ms` }}
                  className="sl-item group relative flex w-full cursor-pointer flex-col gap-3 border-none bg-transparent px-6 py-5 text-left transition-colors hover:bg-blue-50/40 sm:flex-row sm:items-center sm:gap-6"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1 origin-center scale-y-0 bg-gradient-to-b from-[#0c73d5] to-[#38a3ff] transition-transform duration-300 group-hover:scale-y-100"
                  />
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
                    {svc.image ? (
                      <img src={svc.image} alt="" className="h-7 w-7 object-contain" />
                    ) : (
                      <svc.icon className={`h-6 w-6 ${svc.color}`} />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-slate-900">{svc.label}</span>
                    <span className="mt-0.5 block text-xs text-slate-500">Flexible setup and migration support[cite: 9]</span>
                  </span>
                  <span className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-1">
                    <span className="block text-sm font-extrabold text-slate-800">
                      {svc.price}
                      <span className="text-xs font-semibold text-slate-500">{svc.unit}</span>
                    </span>
                    <span className="text-xs font-bold text-blue-600 group-hover:text-blue-700">
                      View plans{' '}
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          <p className="mt-5 text-xs leading-relaxed text-slate-500 max-w-3xl">
            Illustrative estimates only. Final pricing depends on plan, license count, billing term, and tax. AWS, Azure, VPN, and security services are quoted by usage or plan[cite: 9].
          </p>
        </div>
      </section>
    </div>
  )
}

export default CloudLandingSections