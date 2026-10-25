/**
 * HostingOptionsHero.jsx
 * ─────────────────────────────────────────────────────────────────
 * Component: HostingOptionsHero
 * Purpose  : Overview page that shows ALL hosting categories offered
 *            by Blue Fox / Nest Nepal in one place.
 *
 * Props:
 *   onBack     {function} - Called when user clicks "← Back to Home"
 *   onNavigate {function} - (optional) Called to navigate to a sub-page.
 *                           Currently App.jsx only passes onBack, so
 *                           onNavigate is received but not required.
 *
 * Design Pattern:
 *   - Same blue gradient colour scheme as the rest of the site
 *   - Section cards use the same rounded-3xl + border + shadow pattern
 *     found in WebHostingHero and CloudHostingHero
 *   - Uses Tailwind utility classes only – no custom CSS
 *
 * React Concepts Used:
 *   - Functional component with destructured props
 *   - .map() to render card lists from data arrays
 *   - Conditional rendering with && for the back button
 * ─────────────────────────────────────────────────────────────────
 */

import React from 'react'
import {
  Globe,
  Server,
  Code2,
  Briefcase,
  Zap,
  ShieldCheck,
  Cloud,
  Coffee,
  ArrowRight,
} from 'lucide-react'

// ─── DATA ────────────────────────────────────────────────────────
// Each object in this array represents one hosting CATEGORY shown
// as a large section card on this page.

const hostingGroups = [
  {
    number: '01',
    label: 'Hosting Options',
    title: 'Web & Cloud Hosting',
    description:
      'Shared web hosting and scalable cloud hosting plans designed for Nepali websites and businesses — powered by NVMe SSD, LiteSpeed, and local support.',
    icon: Globe,
    gradient: 'from-blue-600 to-blue-700',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-100',
    // List of individual service cards inside this category
    services: [
      {
        name: 'Web Hosting',
        price: 'From Rs 120/mo',
        description: 'cPanel hosting on NVMe SSD with free SSL & domain.',
        icon: Globe,
        view: 'web-hosting',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
      },
      {
        name: 'Cloud Hosting',
        price: 'From Rs 350/mo',
        description: 'Auto-scaling cloud nodes with 99.99% uptime SLA.',
        icon: Cloud,
        view: 'cloud-hosting',
        color: 'text-sky-600',
        bg: 'bg-sky-50',
      },
      {
        name: 'WordPress Hosting',
        price: 'Optimised Plans',
        description: 'Pre-configured WordPress with automatic updates.',
        icon: Globe,
        view: 'wordpress-hosting',
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
      },
      {
        name: 'eCommerce Hosting',
        price: 'Woo & Shopify Ready',
        description: 'High-performance hosting tuned for online stores.',
        icon: ShieldCheck,
        view: 'ecommerce-hosting',
        color: 'text-violet-600',
        bg: 'bg-violet-50',
      },
    ],
  },
  {
    number: '02',
    label: 'Code Based Hosting',
    title: 'Developer & Code Hosting',
    description:
      'Language-native hosting environments for Django, Python, Node.js, and Java — with SSH access, Git CI/CD pipelines, and zero cold starts.',
    icon: Code2,
    gradient: 'from-violet-600 to-indigo-700',
    badgeBg: 'bg-violet-50 text-violet-700 border-violet-100',
    services: [
      {
        name: 'Django Hosting',
        price: 'From Rs 290/mo',
        description: 'Gunicorn + Nginx + PostgreSQL, pre-configured.',
        icon: Code2,
        view: 'django-hosting',
        color: 'text-green-600',
        bg: 'bg-green-50',
      },
      {
        name: 'Python Hosting',
        price: 'From Rs 290/mo',
        description: 'Flask / FastAPI with virtual env isolation.',
        icon: Code2,
        view: 'python-hosting',
        color: 'text-yellow-600',
        bg: 'bg-yellow-50',
      },
      {
        name: 'Node.js Hosting',
        price: 'From Rs 250/mo',
        description: 'PM2-managed Node 18/20 LTS with WebSocket support.',
        icon: Zap,
        view: 'nodejs-hosting',
        color: 'text-lime-600',
        bg: 'bg-lime-50',
      },
      {
        name: 'Bluefox Java',
        price: 'From Rs 350/mo',
        description: 'Tomcat & Spring Boot with JVM tuning & Maven CI.',
        icon: Coffee,
        view: 'code-based',
        color: 'text-orange-600',
        bg: 'bg-orange-50',
      },
    ],
  },
  {
    number: '03',
    label: 'VPS Hosting',
    title: 'VPS Servers',
    description:
      'Virtual Private Servers in Nepal, USA, and Europe — full root access, NVMe SSD, and dedicated resources for demanding workloads.',
    icon: Server,
    gradient: 'from-slate-700 to-slate-900',
    badgeBg: 'bg-slate-100 text-slate-700 border-slate-200',
    services: [
      {
        name: 'Nepal VPS',
        price: 'From Rs 1,200/mo',
        description: 'Kathmandu data center — lowest latency for local users.',
        icon: Globe,
        view: 'nepal-vps',
        color: 'text-red-700',
        bg: 'bg-red-50',
      },
      {
        name: 'USA VPS',
        price: 'From Rs 1,500/mo',
        description: 'Premium US data centers with 10 Gbps uplink.',
        icon: Server,
        view: 'usa-vps',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
      },
      {
        name: 'Europe VPS',
        price: 'From Rs 1,400/mo',
        description: 'European data centers with GDPR-ready infrastructure.',
        icon: Server,
        view: 'europe-vps',
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
      },
    ],
  },
  {
    number: '04',
    label: 'Business & Reseller',
    title: 'Business & Agency Plans',
    description:
      'Full white-label reseller hosting and a 360° business toolkit for agencies — WHM + cPanel, WHMCS billing, and unlimited client accounts.',
    icon: Briefcase,
    gradient: 'from-amber-500 to-orange-600',
    badgeBg: 'bg-amber-50 text-amber-700 border-amber-100',
    services: [
      {
        name: 'Reseller Hosting',
        price: 'From Rs 1,850/mo',
        description: 'WHM + cPanel, private nameservers, WHMCS ready.',
        icon: Globe,
        view: 'reseller-hosting',
        color: 'text-amber-600',
        bg: 'bg-amber-50',
      },
      {
        name: '360° Business Toolkit',
        price: 'From Rs 950/mo',
        description: 'SEO, email marketing, firewall & analytics bundle.',
        icon: Briefcase,
        view: 'business-toolkit',
        color: 'text-orange-600',
        bg: 'bg-orange-50',
      },
    ],
  },
]

// ─── COMPONENT ───────────────────────────────────────────────────

/**
 * HostingOptionsHero
 *
 * Renders a full overview of all hosting categories.
 * onBack   → function that navigates back to the home page
 * onNavigate → optional; would allow clicking service cards to go deeper
 */
const HostingOptionsHero = ({ onBack, onNavigate }) => {
  return (
    <>
      {/* ── BACK NAVIGATION BAR ─────────────────────────────── */}
      {/* Only shown when an onBack function is provided by the parent */}
      {onBack && (
        <div className="bg-white border-b border-slate-200 py-3">
          <div className="site-container">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer bg-transparent border-none"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      )}

      {/* ── HERO BANNER ─────────────────────────────────────── */}
      <section className="hero-section site-section w-full overflow-hidden bg-gradient-to-br from-[#0c2340] via-[#1b4a8a] to-[#0c3060] pt-14 pb-12 font-sans sm:pt-20 sm:pb-16">
        <div className="site-container text-center">
          {/* Badge pill */}
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-200 backdrop-blur-sm">
            <Server className="h-3.5 w-3.5" />
            All Hosting Products — Blue Fox Hoster
          </span>

          {/* Main heading */}
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight text-white max-w-3xl mx-auto">
            One Platform.{' '}
            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Every Hosting Need.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-blue-100/80">
            From personal blogs to enterprise VPS and developer stacks — explore
            all hosting options from Nest Nepal, powered by Blue Fox infrastructure.
          </p>

          {/* Quick stat pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: Zap,          label: 'NVMe SSD Speed'      },
              { icon: ShieldCheck,  label: 'Free SSL on Every Plan' },
              { icon: Globe,        label: '99.9%+ Uptime SLA'   },
              { icon: Server,       label: 'Local Nepal Servers'  },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-blue-100 backdrop-blur-sm"
              >
                {/* Render the Lucide icon component dynamically */}
                <Icon className="h-3.5 w-3.5 text-blue-300" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOSTING CATEGORY SECTIONS ───────────────────────── */}
      {/*
        We use .map() to loop over the hostingGroups array defined above.
        Each group renders as a full-width section with its own service cards.
        Alternating sections use a slightly different background to separate them visually.
      */}
      {hostingGroups.map((group, groupIndex) => {
        // Alternate background: even index = white, odd index = light slate
        const sectionBg = groupIndex % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'
        const GroupIcon = group.icon

        return (
          <section
            key={group.number}
            className={`${sectionBg} py-16 font-sans sm:py-20 border-t border-slate-100`}
          >
            <div className="site-container">

              {/* ── Section Header ── */}
              <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  {/* Category badge e.g. "01 — Hosting Options" */}
                  <span className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${group.badgeBg}`}>
                    {group.number} — {group.label}
                  </span>

                  {/* Category title */}
                  <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-950">
                    {group.title}
                  </h2>

                  {/* Category description */}
                  <p className="mt-2 max-w-2xl text-sm text-slate-500 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Large decorative icon for the section */}
                <div className={`hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${group.gradient} shadow-lg`}>
                  <GroupIcon className="h-7 w-7 text-white" />
                </div>
              </div>

              {/* ── Service Cards Grid ── */}
              {/*
                .map() renders one card per service inside this category.
                Each card shows the service name, price, description, and icon.
                If onNavigate is available, clicking a card navigates to that service page.
              */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {group.services.map((service) => {
                  const ServiceIcon = service.icon
                  return (
                    <div
                      key={service.name}
                      className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                      // If onNavigate exists, clicking navigates; otherwise nothing happens
                      onClick={() => onNavigate && onNavigate(service.view)}
                    >
                      {/* Icon box */}
                      <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${service.bg}`}>
                        <ServiceIcon className={`h-5 w-5 ${service.color}`} />
                      </div>

                      {/* Service name & description */}
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-slate-900">{service.name}</h3>
                        <p className="mt-1 text-xs text-slate-500 leading-relaxed">{service.description}</p>
                      </div>

                      {/* Price + arrow footer */}
                      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                        <span className="text-xs font-bold text-blue-700">{service.price}</span>
                        {/* Arrow icon slides right on hover via group-hover Tailwind class */}
                        <ArrowRight className="h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-blue-500" />
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>
          </section>
        )
      })}

      {/* ── BOTTOM CALL-TO-ACTION ────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] py-16 font-sans">
        <div className="site-container text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Not sure which plan is right for you?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-blue-100 text-sm sm:text-base">
            Talk to our team. We'll recommend the perfect hosting for your project, budget, and traffic goals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Talk to an Expert →
            </a>
            <button
              type="button"
              onClick={onBack}
              className="rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default HostingOptionsHero
