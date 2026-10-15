import React, { useContext } from 'react'
import { Activity, ArrowRight, Cloud, Globe, Mail, Server, ShieldCheck, MapPin, CodeXml, BriefcaseBusiness, Zap, Lock, Users, Star } from 'lucide-react'
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

const domainOffers = [
  { extension: '.com', image: Dotcom, description: 'Go global', price: 'Rs 1,950 / year' },
  { extension: '.net', image: Dotnet, description: 'A reliable alternative', price: 'Est. Rs 1,750 / year', estimated: true },
  { extension: '.biz', image: Dotbiz, description: 'Built for business', price: 'Est. Rs 2,450 / year', estimated: true },
  { extension: '.np', image: Dotnp, description: 'Nepal domain', price: 'Free' },
  { extension: '.info', image: Dotinfo, description: 'For information sites', price: 'Est. Rs 1,850 / year', estimated: true },
  { extension: '.org', description: 'For communities', price: 'Rs 2,250 / year' },
]

export const DomainLandingSections = () => (
  <>
    {/* ================= DOMAIN HERO SECTION ================= */}
    <section id="domain-services" className="site-section scroll-mt-28 overflow-hidden bg-[#eff6ff] py-16 font-sans sm:py-20">
      <div className="site-container grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-xs font-bold uppercase text-blue-700">
            <Globe aria-hidden="true" className="h-3.5 w-3.5" /> Domain names
          </span>
          <h2 className="section-title mt-5 font-extrabold text-slate-950">Give your next idea a name of its own.</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Find a memorable address for your business, community, or next big project, with local .np options and familiar global extensions.
          </p>
          <a href="#domains" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:to-[#1565c0] hover:shadow-[0_12px_28px_rgba(30,136,229,0.45)] hover:-translate-y-0.5 active:scale-95">
            Search a domain <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
        
        {/* Fixed 3x2 Grid Showcase */}
        <div className="relative pb-6" aria-label="Popular domain extensions">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {domainOffers.slice(0, 6).map((domain) => (
              <div key={domain.extension} className="flex aspect-square items-center justify-center rounded-2xl border border-white bg-white shadow-sm p-3">
                {domain.image ? (
                  <img src={domain.image} alt={`${domain.extension} domain`} className="h-10 w-10 object-contain sm:h-14 sm:w-14" />
                ) : (
                  <span className="text-xl font-extrabold text-blue-700">{domain.extension}</span>
                )}
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 right-0 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-md">
            Local .np registration available
          </div>
        </div>
      </div>
    </section>

    {/* ================= DOMAIN PRICING MARQUEE SECTION ================= */}
    <section id="domain-pricing" className="site-section scroll-mt-28 bg-white py-14 font-sans sm:py-16 overflow-hidden">
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scrollLeft 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 30s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="site-container">
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase text-blue-700">Domain pricing</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Choose your extension</h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-slate-500">Annual estimates shown in NPR. Final rates and .np eligibility are confirmed during registration.</p>
        </div>

        {/* Marquee Wrapper strictly contained within site-container */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          {/* TOP ROW: MOVES LEFT */}
          <div className="flex overflow-hidden mb-3">
            <div className="animate-scroll-left flex shrink-0 items-center gap-3 pr-3">
              {[...domainOffers, ...domainOffers].map((domain, index) => (
                <article key={`top-${domain.extension}-${index}`} className="flex h-20 w-80 shrink-0 items-center gap-3.5 rounded-xl border border-slate-200 bg-white p-3.5 transition-colors hover:border-blue-200 hover:bg-blue-50/40">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    {domain.image ? <img src={domain.image} alt="" className="h-8 w-8 object-contain" /> : <span className="text-sm font-bold text-blue-700">{domain.extension}</span>}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-slate-900 truncate">{domain.extension}</span>
                    <span className="mt-0.5 block text-xs text-slate-500 truncate">{domain.description}</span>
                  </span>
                  <span className={`shrink-0 text-right text-xs font-bold ${domain.price === 'Free' ? 'text-emerald-700' : 'text-slate-700'}`}>{domain.price}</span>
                </article>
              ))}
            </div>
          </div>

          {/* BOTTOM ROW: MOVES RIGHT */}
          <div className="flex overflow-hidden">
            <div className="animate-scroll-right flex shrink-0 items-center gap-3 pr-3">
              {[...domainOffers, ...domainOffers].map((domain, index) => (
                <article key={`bottom-${domain.extension}-${index}`} className="flex h-20 w-80 shrink-0 items-center gap-3.5 rounded-xl border border-slate-200 bg-white p-3.5 transition-colors hover:border-blue-200 hover:bg-blue-50/40">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    {domain.image ? <img src={domain.image} alt="" className="h-8 w-8 object-contain" /> : <span className="text-sm font-bold text-blue-700">{domain.extension}</span>}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-slate-900 truncate">{domain.extension}</span>
                    <span className="mt-0.5 block text-xs text-slate-500 truncate">{domain.description}</span>
                  </span>
                  <span className={`shrink-0 text-right text-xs font-bold ${domain.price === 'Free' ? 'text-emerald-700' : 'text-slate-700'}`}>{domain.price}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

// ─────────────────────────────────────────────────────
// SERVER & HOSTING HERO — Enhanced with service cards
// ─────────────────────────────────────────────────────
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



export const ServerHostingHero = ({ onNavigate }) => (
  <section 
    id="server-hosting" 
    className="relative w-full overflow-hidden bg-[#061b3f] py-12 font-sans text-white sm:py-16"
  >
    {/* Glow blob */}
    <div 
      className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" 
      style={{ background: 'radial-gradient(circle, #1b75e7, transparent)' }} 
    />

    {/* Content Container */}
    <div className="site-container relative z-10">
      
      {/* Top row: heading + CTA */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase text-blue-100 mb-4">
            <Server aria-hidden="true" className="h-3.5 w-3.5" /> Server &amp; hosting
          </span>
          <h2 className="section-title font-extrabold text-white">A faster, steadier home for your next website.</h2>
          <p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base max-w-lg">
            Choose managed web hosting or scale into cloud and developer-ready environments, backed by local support and reliable infrastructure.
          </p>
        </div>
        
        <div className="flex flex-col gap-3 sm:text-right shrink-0">
          <div className="flex items-center gap-2 text-xs text-blue-200">
            <ShieldCheck className="h-4 w-4 text-emerald-400" /> SSL &amp; DDoS included
          </div>
          <div className="flex items-center gap-2 text-xs text-blue-200">
            <Activity className="h-4 w-4 text-cyan-300" /> 99.99% uptime guarantee
          </div>
          <div className="flex items-center gap-2 text-xs text-blue-200">
            <Zap className="h-4 w-4 text-yellow-300" /> NVMe SSD on all plans
          </div>
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
        {hostingCards.map((card) => (
          <button
            key={card.path}
            type="button"
            onClick={() => onNavigate && onNavigate(card.path)}
            className="group relative flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-center transition-all hover:bg-white/[0.12] hover:border-blue-400/40 hover:-translate-y-0.5 cursor-pointer"
          >
            {card.badge && (
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-2.5 py-0.5 text-[10px] font-extrabold text-white shadow-sm whitespace-nowrap">
                {card.badge}
              </span>
            )}
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 shrink-0 mt-1">
              {card.image ? (
                <img src={card.image} alt={card.label} className="h-7 w-7 object-contain rounded-sm" />
              ) : (
                <span className="text-2xl">{card.emoji}</span>
              )}
            </span>
            <div className="space-y-0.5 mt-1">
              <span className="block text-xs font-bold text-white leading-tight">{card.label}</span>
              <span className="block text-[10px] text-blue-300 font-semibold">From {card.from}</span>
            </div>
            <span className="mt-2 flex items-center gap-1 text-[10px] text-blue-400 group-hover:text-blue-200 transition-colors">
              View plans <ArrowRight className="h-3 w-3" />
            </span>
          </button>
        ))}
      </div>

      {/* Bottom trust strip */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
        <p className="text-xs text-blue-300">
          💳 Pay via <span className="text-white font-semibold">eSewa, Khalti, IME Pay</span> or Bank Transfer
        </p>
        <a
          href="#server-plans"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:to-[#1565c0] hover:shadow-[0_12px_28px_rgba(30,136,229,0.45)] hover:-translate-y-0.5 active:scale-95"
        >
          Compare all plans <ArrowRight className="h-4 w-4" />
        </a>
      </div>

    </div>
  </section>
)

// ─────────────────────────────────────────────────────
// EMAIL & CLOUD LANDING — Enhanced with clickable service tiles
// ─────────────────────────────────────────────────────
const cloudServices = [
  { icon: SiGoogle, label: 'Google Workspace', price: 'Rs 780', unit: '/user/mo', color: 'text-[#4285f4]', path: 'google-workspace' },
  { icon: FaMicrosoft, image: Microsoft365, label: 'Microsoft 365', price: 'Rs 650', unit: '/user/mo', color: 'text-[#2675d8]', path: 'office-365' },
  { icon: SiZoho, label: 'Zoho Workplace', price: 'Rs 700', unit: '/user/mo', color: 'text-[#e44b36]', path: 'zoho-workplace' },
  { icon: SiZoom, label: 'Zoom Business', price: 'Rs 1,850', unit: '/host/mo', color: 'text-[#2d8cff]', path: 'zoom' },
]

const moreCloudLinks = [
  { label: 'Google Cloud', path: 'google-cloud', emoji: '☁️' },
  { label: 'NordVPN', path: 'nordvpn', emoji: '🔒' },
  { label: 'Office LTSC', path: 'office-ltsc', emoji: '📦' },
  { label: 'MS Copilot', path: 'copilot', emoji: '🤖' },
  { label: 'Power BI', path: 'power-bi', emoji: '📊' },
  { label: 'Azure', path: 'azure', emoji: '🌐' },
  { label: 'Zoho CRM', path: 'zoho-crm', emoji: '🧩' },
  { label: 'Bigin CRM', path: 'bigin-zoho', emoji: '📋' },
  { label: 'Zoho Mail', path: 'zoho-mail', emoji: '📧' },
  { label: 'AWS', path: 'aws', emoji: '🟠' },
  { label: 'MS Defender', path: 'microsoft-defender', emoji: '🛡️' },
]

export const CloudLandingSections = ({ onNavigate }) => {
  return (
    <div className="font-sans">
      {/* SECTION 1: CLOUD SERVICES HERO */}
      <section className="bg-gradient-to-br from-[#f0f7ff] to-[#e8f0fe] py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-100 opacity-50 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 relative z-10">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-bold uppercase text-[#0c73d5] shadow-sm">
              <Cloud className="h-3.5 w-3.5" /> Email &amp; Cloud
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-slate-900">
              Your team's tools, connected and ready.
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Bring email, collaboration, video meetings, and cloud services together with a setup that can grow with your team.
            </p>

            {/* Quick-nav pill links */}
            <div className="mt-5 flex flex-wrap gap-2">
              {moreCloudLinks.map((s) => (
                <button
                  key={s.path}
                  type="button"
                  onClick={() => onNavigate && onNavigate(s.path)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 cursor-pointer"
                >
                  <span>{s.emoji}</span> {s.label}
                </button>
              ))}
            </div>

            <a
              href="#cloud-pricing"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:to-[#1565c0] hover:shadow-[0_12px_28px_rgba(30,136,229,0.45)] hover:-translate-y-0.5 active:scale-95"
            >
              Compare cloud options <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right Side: Clickable App Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {cloudServices.map((svc) => (
              <button
                key={svc.path}
                type="button"
                onClick={() => onNavigate && onNavigate(svc.path)}
                className="group flex min-h-[5.5rem] items-center gap-3 rounded-xl border border-slate-200 bg-white/90 px-4 py-4 shadow-sm hover:border-blue-300 hover:shadow-md transition-all cursor-pointer text-left"
              >
                {svc.image ? (
                  <img src={svc.image} alt={svc.label} className="h-8 w-8 object-contain shrink-0" />
                ) : (
                  <svc.icon className={`h-8 w-8 shrink-0 ${svc.color}`} />
                )}
                <div className="min-w-0">
                  <span className="block text-sm font-semibold text-slate-800 leading-tight">{svc.label}</span>
                  <span className="block text-xs text-slate-500 mt-0.5">{svc.price}<span className="text-slate-400">{svc.unit}</span></span>
                  <span className="block text-[10px] text-blue-600 font-semibold mt-1 group-hover:underline">View plans →</span>
                </div>
              </button>
            ))}
            <div className="col-span-2 flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-5 py-4 text-white shadow-md">
              <ShieldCheck className="h-6 w-6 shrink-0" />
              <span className="text-sm font-semibold">Productivity, security, and cloud in one place</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CLOUD PRICING LIST */}
      <section id="cloud-pricing" className="bg-white py-14 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-[#0c73d5]">Cloud Pricing</p>
              <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">Start with the tools you need</h2>
            </div>
            <Mail className="hidden h-8 w-8 text-[#0c73d5] sm:block" />
          </div>

          <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
            {cloudServices.map((svc) => (
              <button
                key={svc.path}
                type="button"
                onClick={() => onNavigate && onNavigate(svc.path)}
                className="w-full flex flex-col gap-3 py-4 px-5 sm:flex-row sm:items-center sm:gap-5 hover:bg-blue-50/30 transition-colors text-left cursor-pointer group"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                  {svc.image ? (
                    <img src={svc.image} alt="" className="h-7 w-7 object-contain" />
                  ) : (
                    <svc.icon className={`h-6 w-6 ${svc.color}`} />
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-slate-900">{svc.label}</span>
                  <span className="mt-0.5 block text-xs text-slate-500">Flexible setup and migration support</span>
                </div>
                <div className="sm:text-right flex sm:flex-col items-center sm:items-end gap-3">
                  <span className="block text-sm font-bold text-slate-800">{svc.price}<span className="text-xs text-slate-500">{svc.unit}</span></span>
                  <span className="text-xs font-semibold text-blue-600 group-hover:text-blue-700">View plans →</span>
                </div>
              </button>
            ))}
          </div>

          <p className="mt-4 text-xs text-slate-500 leading-relaxed">
            Illustrative estimates only. Final pricing depends on plan, license count, billing term, and tax. AWS, Azure, VPN, and security services are quoted by usage or plan.
          </p>
        </div>
      </section>
    </div>
  )
}

export default CloudLandingSections