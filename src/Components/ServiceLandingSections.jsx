import React from 'react'
import { Activity, ArrowRight, Cloud, Globe, Mail, Server, ShieldCheck } from 'lucide-react'
import { FaMicrosoft } from 'react-icons/fa6'
import { SiGoogle, SiZoho, SiZoom } from 'react-icons/si'
import Dotbiz from '../assets/Dotbiz.avif'
import Dotcom from '../assets/Dotcom.avif'
import Dotinfo from '../assets/Dotinfo.avif'
import Dotnet from '../assets/Dotnet.avif'
import Dotnp from '../assets/Dotnp.avif'
import Microsoft365 from '../assets/365.svg'

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
          <a href="#domains" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#1b75e7] to-[#125ec5] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg">
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

export const ServerHostingHero = () => (
  <section id="server-hosting" className="site-section scroll-mt-28 overflow-hidden bg-[#061b3f] py-16 font-sans text-white sm:py-20">
    <div className="site-container grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase text-blue-100">
          <Server aria-hidden="true" className="h-3.5 w-3.5" /> Server &amp; hosting
        </span>
        <h2 className="section-title mt-5 font-extrabold text-white">A faster, steadier home for your next website.</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-blue-100 sm:text-base">
          Choose managed web hosting or scale into cloud and developer-ready environments, backed by local support and reliable infrastructure.
        </p>
        <a href="#server-plans" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#061b3f] transition hover:bg-blue-50">
          Explore hosting plans <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
      <div className="grid gap-3 sm:grid-cols-2" aria-label="Hosting infrastructure highlights">
        <article className="rounded-xl border border-white/15 bg-white/[0.07] p-5 sm:col-span-2">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-400/15 text-blue-200">
                <Server aria-hidden="true" className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">Managed hosting plans</span>
                <span className="mt-0.5 block text-xs text-blue-100">Shared, VPS, and developer-ready</span>
              </span>
            </div>
            <span className="shrink-0 text-sm font-bold text-white">From Rs 83/mo</span>
          </div>
        </article>
        <article className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.07] p-4">
          <ShieldCheck aria-hidden="true" className="h-5 w-5 shrink-0 text-emerald-300" />
          <span>
            <span className="block text-xs font-semibold text-white">Security included</span>
            <span className="mt-0.5 block text-[11px] text-blue-100">SSL and daily backups</span>
          </span>
        </article>
        <article className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.07] p-4">
          <Activity aria-hidden="true" className="h-5 w-5 shrink-0 text-cyan-300" />
          <span>
            <span className="block text-xs font-semibold text-white">Built for uptime</span>
            <span className="mt-0.5 block text-[11px] text-blue-100">99.99% plan guarantee</span>
          </span>
        </article>
      </div>
    </div>
  </section>
)

const defaultCloudPlans = [
  { name: 'Google Workspace', price: 'Rs 780', unit: 'per user / mo' },
  { name: 'Microsoft 365 Business', price: 'Rs 850', unit: 'per user / mo' },
  { name: 'Zoho Workplace', price: 'Rs 350', unit: 'per user / mo' },
  { name: 'Zoom One Pro', price: 'Rs 1,850', unit: 'per host / mo' },
]

export const CloudLandingSections = () => {
  return (
    <div className="font-sans">
      {/* SECTION 1: CLOUD SERVICES HERO */}
      <section className="bg-[#f7fbff] py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
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
            <a 
              href="#cloud-pricing" 
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:from-[#1e88e5] hover:to-[#1565c0] hover:shadow-[0_10px_28px_rgba(30,136,229,0.55)] hover:-translate-y-0.5 active:scale-95"
            >
              Compare cloud options <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right Side: Grid of Supported Apps */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="flex min-h-[5.5rem] items-center gap-3 rounded-xl border border-white bg-white/90 px-4 py-4 shadow-sm hover:border-blue-200 transition-all">
              <SiGoogle className="h-8 w-8 shrink-0 text-[#4285f4]" />
              <span className="text-sm font-semibold text-slate-800">Google</span>
            </div>
            <div className="flex min-h-[5.5rem] items-center gap-3 rounded-xl border border-white bg-white/90 px-4 py-4 shadow-sm hover:border-blue-200 transition-all">
              <FaMicrosoft className="h-8 w-8 shrink-0 text-[#2675d8]" />
              <span className="text-sm font-semibold text-slate-800">Microsoft</span>
            </div>
            <div className="flex min-h-[5.5rem] items-center gap-3 rounded-xl border border-white bg-white/90 px-4 py-4 shadow-sm hover:border-blue-200 transition-all">
              <SiZoho className="h-8 w-8 shrink-0 text-[#e44b36]" />
              <span className="text-sm font-semibold text-slate-800">Zoho</span>
            </div>
            <div className="flex min-h-[5.5rem] items-center gap-3 rounded-xl border border-white bg-white/90 px-4 py-4 shadow-sm hover:border-blue-200 transition-all">
              <SiZoom className="h-8 w-8 shrink-0 text-[#2d8cff]" />
              <span className="text-sm font-semibold text-slate-800">Zoom</span>
            </div>
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

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {defaultCloudPlans.map((plan) => (
              <article key={plan.name} className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:gap-5 hover:bg-blue-50/30 transition-colors px-2 rounded-lg">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0c73d5]">
                  <Cloud className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-slate-900">{plan.name}</span>
                  <span className="mt-0.5 block text-xs text-slate-500">Flexible setup and migration support</span>
                </div>
                <div className="sm:text-right">
                  <span className="block text-sm font-bold text-slate-800">{plan.price}</span>
                  <span className="block text-xs text-slate-500">{plan.unit}</span>
                </div>
              </article>
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