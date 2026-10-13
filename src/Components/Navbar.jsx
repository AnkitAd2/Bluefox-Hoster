import React from 'react'
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Cloud,
  Coffee,
  CodeXml,
  FileText,
  Globe,
  Hexagon,
  Layers3,
  MapPin,
  MessageSquare,
  PanelsTopLeft,
  ShoppingBag,
} from 'lucide-react'
import { FaAws, FaMicrosoft } from 'react-icons/fa6'
import { RiArrowDropDownLine } from "react-icons/ri"
import { SiGoogle, SiGooglecloud, SiNordvpn, SiZoho, SiZoom } from 'react-icons/si'
import BlueFoxLogo from '../assets/bluefoxlogo.svg'
import Flag from '../assets/Flag_of_Nepal.svg.webp'
import Microsoft365 from '../assets/365.svg'
import Azure from '../assets/azure.avif'
import Copilot from '../assets/copilotplan.avif'
import LTSC from '../assets/ltsc.svg'
import PowerBI from '../assets/begin-journey.avif'
import Dotcom from '../assets/Dotcom.avif'
import Dotnet from '../assets/Dotnet.avif'
import Dotbiz from '../assets/Dotbiz.avif'
import Dotnp from '../assets/Dotnp.avif'
import Dotinfo from '../assets/Dotinfo.avif'
import PythonLogo from '../assets/python logo.webp'
import NodejsLogo from '../assets/nodejs-logo.svg'
import WebHostingLogo from '../assets/webhosting.svg'
import CloudHostingLogo from '../assets/Cloudhosting.avif'
import WordPressLogo from '../assets/wordpress.svg'
import EcommerceLogo from '../assets/ecom.svg'
import DjangoLogo from '../assets/django.svg'
import UsaLogo from '../assets/Usa.avif'
import EuropeLogo from '../assets/europe.avif'

const NepalFlagIcon = () => (
  <img
    src={Flag}
    alt="Nepal flag"
    className="h-4 w-4 rounded-sm object-cover border border-slate-200 shadow-sm"
  />
)

const domainOptions = [
  { extension: '.com', image: Dotcom, description: 'Go global', price: 'Rs 1,950/yr' },
  { extension: '.net', image: Dotnet, description: 'Reliable alternative', price: 'Rs 1,750/yr', sample: true },
  { extension: '.biz', image: Dotbiz, description: 'For businesses', price: 'Rs 2,450/yr', sample: true },
  { extension: '.np', image: Dotnp, description: 'Nepal domain', price: 'Free' },
  { extension: '.info', image: Dotinfo, description: 'For information sites', price: 'Rs 1,850/yr', sample: true },
  { extension: '.org', description: 'For communities', price: 'Rs 2,250/yr' },
]

const hostingGroups = [
  {
    title: 'Hosting Options',
    number: '01',
    accent: 'bg-blue-50 text-blue-700 border-blue-100',
    items: [
      { icon: Globe, image: WebHostingLogo, title: 'Web Hosting', description: 'Fast, secure, always supported' },
      { icon: Cloud, image: CloudHostingLogo, title: 'Cloud Hosting', description: 'Resilient hosting built to scale' },
      { icon: PanelsTopLeft, image: WordPressLogo, title: 'WordPress Hosting', description: 'Optimized for WordPress sites' },
      { icon: ShoppingBag, image: EcommerceLogo, title: 'eCommerce Hosting', description: 'Secure online storefronts' },
    ],
  },
  {
    title: 'Code Based',
    number: '02',
    accent: 'bg-violet-50 text-violet-700 border-violet-100',
    items: [
      { icon: Coffee, title: 'Bluefox Hosting', description: 'Reliable Java environments' },
      { icon: Layers3, image: DjangoLogo, title: 'Django Hosting', description: 'A smooth path to production' },
      { icon: CodeXml, image: PythonLogo, title: 'Python Hosting', description: 'Deploy Python applications' },
      { icon: Hexagon, image: NodejsLogo, title: 'Node.js Hosting', description: 'Modern JavaScript runtimes' },
    ],
  },
  {
    title: 'VPS Hosting',
    number: '03',
    accent: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    items: [
      { icon: MapPin, image: UsaLogo, title: 'USA Based VPS', description: 'Global reach, dependable speed' },
      { icon: MapPin, image: EuropeLogo, title: 'Europe Based VPS', description: 'Reliable European infrastructure' },
      { icon: NepalFlagIcon, title: 'Nepal Based VPS', description: 'Low latency for local users' },
    ],
  },
  {
    title: 'Business',
    number: '04',
    accent: 'bg-amber-50 text-amber-800 border-amber-100',
    items: [
      { icon: BriefcaseBusiness, title: 'Reseller Hosting', description: 'Launch your own hosting brand' },
      { icon: ArrowUpRight, title: '360° Business Toolkit', description: 'Tools to grow your audience' },
    ],
  },
]

const emailCloudGroups = [
  {
    title: 'Google',
    items: [
      { icon: SiGoogle, title: 'Google Workspace', description: 'Streamlined solutions for efficient collaboration' },
      { icon: SiGooglecloud, title: 'Google Cloud Console', description: 'Easily manage and scale your applications' },
      { icon: SiNordvpn, title: 'NordVPN', description: 'Encrypt and protect your online presence everywhere', subheading: 'VPN' },
    ],
  },
  {
    title: 'Microsoft',
    items: [
      { icon: FaMicrosoft, image: Microsoft365, title: 'Microsoft Office 365', description: 'Boost productivity with cloud-based tools' },
      { icon: FaMicrosoft, image: LTSC, title: 'Office LTSC 2024', description: 'A stable, long-term solution for business efficiency' },
      { icon: FaMicrosoft, image: Copilot, title: 'Microsoft Copilot', description: 'AI assistance for faster, smarter work' },
      { icon: FaMicrosoft, image: PowerBI, title: 'Microsoft Power BI', description: 'Unlock powerful data insights with Power BI' },
      { icon: FaMicrosoft, image: Azure, title: 'Microsoft Azure', description: 'Run smarter, faster, and more scalable workloads' },
    ],
  },
  {
    title: 'Zoho',
    items: [
      { icon: SiZoho, title: 'Zoho CRM', description: 'Streamline sales and customer engagement' },
      { icon: SiZoho, title: 'Bigin by Zoho CRM', description: 'Automate sales and boost customer engagement' },
      { icon: SiZoho, title: 'Zoho Mail', description: 'Secure and efficient email hosting for businesses' },
      { icon: SiZoho, title: 'Zoho Workplace', description: 'Integrated tools for seamless team collaboration' },
    ],
  },
  {
    title: 'Others',
    items: [
      { icon: FaAws, title: 'Amazon Web Services', description: 'Harness cloud technology for any scale' },
      { icon: SiZoom, title: 'Zoom', description: 'Seamless video conferencing and collaboration' },
      { icon: FaMicrosoft, title: 'Microsoft Defender', description: 'Get 360 protection for your business' },
    ],
  },
]

const supportOptions = [
  {
    icon: MessageSquare,
    title: 'Live Chat & WhatsApp',
    description: 'Instant answers from our Kathmandu support team',
    badge: '24/7',
  },
  {
    icon: FileText,
    title: 'Support Tickets',
    description: 'Open a secure ticket for deep technical troubleshooting',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Base',
    description: 'Step-by-step guides for WordPress, SSL, and emails',
  },
  {
    icon: Activity,
    title: 'Server Status',
    description: 'Real-time uptime monitoring and maintenance logs',
    status: 'All Systems Operational',
  },
]

const Navbar = ({ onNavigate, currentView }) => {
  const [pinnedDropdown, setPinnedDropdown] = React.useState(null)
  const [hoveredDropdown, setHoveredDropdown] = React.useState(null)
  const headerRef = React.useRef(null)
  const activeDropdown = pinnedDropdown || hoveredDropdown

  const dismissDropdowns = () => {
    setPinnedDropdown(null)
    setHoveredDropdown(null)
  }

  const togglePinnedDropdown = (dropdownName) => {
    setPinnedDropdown((prev) => (prev === dropdownName ? null : dropdownName))
  }

  const handleLogoClick = () => {
    dismissDropdowns()
    
    // Switch view to home if on another page
    if (onNavigate && currentView !== 'home') {
      onNavigate('home')
    }

    // Smoothly scroll to top/hero section
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleSectionClick = (targetHash) => (e) => {
    dismissDropdowns()
    if (onNavigate && currentView !== 'home') {
      onNavigate('home')
      setTimeout(() => {
        if (targetHash) {
          const el = document.querySelector(targetHash)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    }
  }

  React.useEffect(() => {
    if (!pinnedDropdown) return

    const closeOnOutsideClick = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        dismissDropdowns()
      }
    }
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        dismissDropdowns()
      }
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [pinnedDropdown])

  return (
    <>
      {/* Background Blur Overlay */}
      <div 
        aria-hidden="true"
        className={`fixed inset-0 z-[90] bg-slate-900/30 backdrop-blur-sm transition-all duration-300 pointer-events-none ${
          activeDropdown ? 'opacity-100 pointer-events-auto' : 'opacity-0'
        }`}
        onClick={dismissDropdowns}
      />

      <header ref={headerRef} className="sticky top-0 z-[100] w-full font-sans bg-white border-b border-gray-100">
        <style>{`
          .nav-dropdown-panel {
            visibility: hidden;
            pointer-events: none;
            opacity: 0;
            transform: translateY(0.5rem);
            transition: opacity 150ms ease, transform 150ms ease, visibility 150ms ease;
          }
          .nav-dropdown[data-open="true"] > .nav-dropdown-panel {
            visibility: visible;
            pointer-events: auto;
            opacity: 1;
            transform: translateY(0);
          }
          .nav-dropdown-chevron {
            transition: transform 180ms ease;
          }
          .nav-dropdown[data-open="true"] .nav-dropdown-chevron {
            transform: rotate(180deg);
          }
        `}</style>
      
        {/* 1. TOP ANNOUNCEMENT & CONTACT BAR */}
        <div className="border-b border-gray-100 py-0.5 text-xs sm:py-1 sm:text-sm text-slate-600">
          <div className="site-container flex flex-col md:flex-row items-center justify-between gap-1">
            <div className="flex items-center gap-4">
              <span className="text-gray-300 hidden sm:inline">•</span>
            </div>

            <div className="flex items-center gap-2.5 text-slate-600 text-[11px] sm:text-xs">
              <a href="tel:+9779815111199" className="flex items-center gap-1.5 hover:text-blue-600 font-medium">
                <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.2 2.2z" />
                </svg>
                <span>+977-9802-7556-05</span>
              </a>

              <span className="text-gray-300">|</span>

              {/* SUPPORT DROPDOWN */}
              <div
                className="nav-dropdown support-dropdown relative"
                data-open={activeDropdown === 'support'}
                onMouseEnter={() => !pinnedDropdown && setHoveredDropdown('support')}
                onMouseLeave={() => !pinnedDropdown && setHoveredDropdown(null)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === 'support'}
                  onClick={() => togglePinnedDropdown('support')}
                  className="inline-flex items-center gap-0.5 py-1 hover:text-blue-600 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 font-medium cursor-pointer bg-transparent border-none"
                >
                  Support
                  <RiArrowDropDownLine aria-hidden="true" className="nav-dropdown-chevron h-5 w-5" />
                </button>

                <div id="support-dropdown" className="nav-dropdown-panel absolute right-0 top-full z-[120] w-[min(92vw,38rem)] whitespace-normal pt-2">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/15">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white sm:p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-100">Client Support Hub</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-100 border border-emerald-400/30">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          Online 24/7
                        </span>
                      </div>
                      <h3 className="mt-1.5 text-base sm:text-lg font-bold">How can we help your brand today?</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-2 sm:p-4">
                      {supportOptions.map((opt) => (
                        <a
                          key={opt.title}
                          href="#support"
                          onClick={handleSectionClick('#support')}
                          className="flex items-start gap-3 rounded-xl border border-slate-100 p-3 transition-all hover:border-blue-200 hover:bg-blue-50/60 focus-visible:outline-2 focus-visible:outline-blue-600"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <opt.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-sm font-bold text-slate-900">{opt.title}</span>
                              {opt.badge && (
                                <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-extrabold text-blue-700">
                                  {opt.badge}
                                </span>
                              )}
                            </div>
                            <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{opt.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 2. MAIN NAVIGATION BAR */}
        <div className="site-container relative py-2 flex items-center justify-between gap-4">
        
          {/* BRAND LOGO - SCROLLS TO TOP/HERO SECTION ONLY */}
          <button 
            onClick={handleLogoClick} 
            className="flex shrink-0 items-center bg-transparent border-none cursor-pointer p-0" 
            aria-label="Blue Fox Hoster home"
          >
            <img
              src={BlueFoxLogo}
              alt="Blue Fox Hoster"
              className="h-11 w-auto max-w-[10rem] object-contain"
            />
          </button>

          {/* NAVIGATION LINKS */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-4 2xl:gap-6 text-sm 2xl:text-base font-medium text-slate-600 whitespace-nowrap">
            
              {/* DOMAINS DROPDOWN */}
              <li
                className="nav-dropdown relative"
                data-open={activeDropdown === 'domains'}
                onMouseEnter={() => !pinnedDropdown && setHoveredDropdown('domains')}
                onMouseLeave={() => !pinnedDropdown && setHoveredDropdown(null)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === 'domains'}
                  onClick={() => togglePinnedDropdown('domains')}
                  className="inline-flex items-center gap-1.5 bg-transparent border-none cursor-pointer py-2.5 text-inherit hover:text-blue-600 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 font-medium"
                >
                  Domains
                  <RiArrowDropDownLine aria-hidden="true" className="nav-dropdown-chevron h-7 w-7" />
                </button>

                <div 
                  id="domains-dropdown" 
                  className="nav-dropdown-panel absolute left-1/2 -translate-x-1/2 top-full z-50 w-[min(90vw,68rem)] whitespace-normal pt-2"
                >
                  <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/15 lg:grid-cols-[15rem_minmax(0,1fr)]">
                    <aside className="flex flex-col justify-between bg-gradient-to-br from-[#1b75e7] to-[#125ec5] p-5 text-white sm:p-6">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-100">Domain finder</span>
                        <h2 className="mt-3 text-2xl font-bold leading-tight">Your next idea needs a name.</h2>
                        <p className="mt-2 text-sm leading-relaxed text-blue-100">Search local and global domains in one place.</p>
                      </div>
                      <a 
                        href="#domains" 
                        onClick={handleSectionClick('#domains')} 
                        className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#05193E] transition-colors hover:bg-blue-50"
                      >
                        Find a domain <span aria-hidden="true">&rarr;</span>
                      </a>
                    </aside>

                    <div className="min-w-0 overflow-y-auto p-4 sm:p-5">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <h3 className="text-sm font-bold text-slate-900">Popular extensions</h3>
                        <span className="text-xs font-medium text-slate-400">Prices per year</span>
                      </div>
                      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {domainOptions.map((domain) => (
                          <a
                            key={domain.extension}
                            href="#domain-pricing"
                            onClick={handleSectionClick('#domain-pricing')}
                            className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-200 px-3 py-2.5 transition-all hover:border-blue-300 hover:bg-blue-50/60 focus-visible:outline-2 focus-visible:outline-blue-600"
                          >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                              {domain.image ? (
                                <img src={domain.image} alt="" className="h-8 w-8 object-contain" />
                              ) : (
                                <span className="text-xs font-bold text-blue-700">{domain.extension}</span>
                              )}
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block text-sm font-bold text-slate-800">{domain.extension}</span>
                              <span className="mt-0.5 block truncate text-xs text-slate-500">{domain.description}</span>
                            </span>
                            <span className={`shrink-0 text-xs font-bold ${domain.price === 'Free' ? 'text-emerald-700' : 'text-slate-700'}`}>
                              {domain.sample && 'Est. '}{domain.price}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* SERVER & HOSTING DROPDOWN */}
              <li
                className="nav-dropdown relative"
                data-open={activeDropdown === 'hosting'}
                onMouseEnter={() => !pinnedDropdown && setHoveredDropdown('hosting')}
                onMouseLeave={() => !pinnedDropdown && setHoveredDropdown(null)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === 'hosting'}
                  onClick={() => togglePinnedDropdown('hosting')}
                  className="inline-flex items-center gap-1.5 bg-transparent border-none cursor-pointer py-2.5 text-inherit hover:text-blue-600 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 font-medium"
                >
                  Server &amp; Hosting
                  <RiArrowDropDownLine aria-hidden="true" className="nav-dropdown-chevron h-7 w-7" />
                </button>

                <div id="hosting-dropdown" className="nav-dropdown-panel absolute left-1/2 -translate-x-1/2 top-full z-[110] w-[min(90vw,72rem)] whitespace-normal pt-2">
                  <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/15 lg:grid-cols-[15rem_minmax(0,1fr)]">
                      <aside className="flex flex-col justify-between bg-gradient-to-br from-[#1b75e7] to-[#125ec5] p-5 text-white sm:p-6">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-widest text-blue-100">Hosting, your way</span>
                          <h2 className="mt-3 text-3xl font-bold leading-tight">From first site to full stack.</h2>
                        </div>
                        <a href="#server-hosting" onClick={handleSectionClick('#server-hosting')} className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-[#05193E] hover:bg-blue-50">
                          Compare plans <span aria-hidden="true">&rarr;</span>
                        </a>
                      </aside>

                      <div className="grid min-w-0 grid-cols-1 divide-y divide-slate-100 p-2 sm:grid-cols-2 sm:p-3 xl:grid-cols-4 xl:divide-x xl:divide-y-0">
                        {hostingGroups.map((group) => (
                          <section className="min-w-0 p-4 sm:p-5" key={group.title}>
                            <div className="mb-3 flex items-center gap-2.5">
                              <span className={`rounded-md border px-2 py-1 text-xs font-bold ${group.accent}`}>{group.number}</span>
                              <h3 className="text-sm font-bold text-slate-900">{group.title}</h3>
                            </div>
                            <div className="space-y-1">
                              {group.items.map((item) => (
                                <a
                                  className="flex items-center gap-2.5 rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-blue-100 hover:bg-blue-50/60"
                                  href="#server-hosting"
                                  onClick={handleSectionClick('#server-hosting')}
                                  key={item.title}
                                >
                                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                                    {item.image ? (
                                      <img src={item.image} alt="" className="h-6 w-6 rounded-sm object-contain" />
                                    ) : (
                                      <item.icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
                                    )}
                                  </span>
                                  <span className="min-w-0">
                                    <span className="block text-sm font-semibold text-slate-800">{item.title}</span>
                                    <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">{item.description}</span>
                                  </span>
                                </a>
                              ))}
                            </div>
                          </section>
                        ))}
                      </div>
                  </div>
                </div>
              </li>

              {/* EMAILS & CLOUDS DROPDOWN */}
              <li
                className="nav-dropdown relative"
                data-open={activeDropdown === 'cloud'}
                onMouseEnter={() => !pinnedDropdown && setHoveredDropdown('cloud')}
                onMouseLeave={() => !pinnedDropdown && setHoveredDropdown(null)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === 'cloud'}
                  onClick={() => togglePinnedDropdown('cloud')}
                  className="inline-flex items-center gap-1.5 bg-transparent border-none cursor-pointer py-2.5 text-inherit hover:text-blue-600 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 font-medium"
                >
                  Emails &amp; Clouds
                  <RiArrowDropDownLine aria-hidden="true" className="nav-dropdown-chevron h-7 w-7" />
                </button>

                <div id="cloud-dropdown" className="nav-dropdown-panel absolute left-1/2 -translate-x-1/2 top-full z-[110] w-[min(90vw,72rem)] whitespace-normal pt-2">
                  <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/15 lg:grid-cols-[15rem_minmax(0,1fr)]">
                    <aside className="flex flex-col justify-between bg-gradient-to-br from-[#1b75e7] to-[#125ec5] p-5 text-white sm:p-6">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-100">Email &amp; cloud tools</span>
                        <h2 className="mt-3 text-2xl font-bold leading-tight">Work better, from anywhere.</h2>
                      </div>
                      <a href="#cloud-pricing" onClick={handleSectionClick('#cloud-pricing')} className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-[#05193E] hover:bg-blue-50">
                        Explore plans <span aria-hidden="true">&rarr;</span>
                      </a>
                    </aside>
                    <div className="min-w-0 overflow-y-auto p-4 sm:p-5">
                      <div className="grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2 xl:grid-cols-4">
                    {emailCloudGroups.map((group) => (
                      <section className="min-w-0" key={group.title}>
                        <h3 className="mb-3 border-b border-slate-200 pb-2">
                          <span className="text-sm font-bold text-slate-900">{group.title}</span>
                        </h3>
                        <div className="space-y-3">
                          {group.items.map((item) => (
                            <React.Fragment key={item.title}>
                              {item.subheading && <h4 className="px-2 pt-1 text-sm font-medium text-slate-500">{item.subheading}</h4>}
                              <a
                                href="#cloud-pricing"
                                onClick={handleSectionClick('#cloud-pricing')}
                                className="flex items-start gap-3 rounded-xl border border-transparent p-2 transition-colors hover:border-blue-100 hover:bg-blue-50/60"
                              >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                                  {item.image ? (
                                    <img src={item.image} alt="" className="h-8 w-8 object-contain" />
                                  ) : (
                                    <item.icon aria-hidden="true" className="h-6 w-6 text-blue-600" />
                                  )}
                                </span>
                                <span className="min-w-0 pt-0.5">
                                  <span className="block text-sm font-semibold text-slate-900">{item.title}</span>
                                  <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">{item.description}</span>
                                </span>
                              </a>
                            </React.Fragment>
                          ))}
                        </div>
                      </section>
                    ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* GENERATOR BUTTON */}
              <li>
                <button 
                  type="button" 
                  onClick={() => { dismissDropdowns(); if (onNavigate) onNavigate('generator'); }} 
                  className={`transition-colors duration-200 bg-transparent border-none cursor-pointer p-0 font-medium ${
                    currentView === 'generator' ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  .NP letter Generator
                </button>
              </li>
            </ul>
          </nav>

          {/* ACTION BUTTON */}
          <div className="flex items-center gap-3 whitespace-nowrap">
            <button
              type="button"
              onClick={() => { dismissDropdowns(); if (onNavigate) onNavigate('home'); }}
              className="bg-gradient-to-b from-[#1b75e7] to-[#125ec5] hover:from-[#2e93fc] hover:to-[#1777ed] text-white font-semibold text-sm 2xl:text-base px-3.5 py-2 rounded-xl transition-all cursor-pointer border-none shadow-sm"
            >
              Get Started
            </button>
          </div>

        </div>

      </header>
    </>
  )
}

export default Navbar