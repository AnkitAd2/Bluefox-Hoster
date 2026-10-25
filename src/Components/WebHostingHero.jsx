/**
 * WebHostingHero.jsx
 * ─────────────────────────────────────────────────────────────────
 * Component: WebHostingHero
 * Purpose  : Full landing page for the "Web Hosting" product.
 *            Shown when the user navigates to currentView === 'web-hosting'.
 *
 * Props:
 *   onBack {function} — Called when the user clicks "← Back to Home".
 *                       Provided by App.jsx as the `backHome` function.
 *
 * Sections rendered (top to bottom):
 *   1. Back Navigation Bar   — Thin bar with a back link
 *   2. Hero Section          — Big headline, key features, animated robot image
 *   3. Pricing Cards Section — 3 plan cards with a billing toggle
 *   4. Features Grid Section — 8 feature cards
 *
 * Key React Concepts:
 *
 *   useState  — `billingCycle` stores whether the user selected
 *               'monthly' or 'yearly' billing.  Clicking the toggle
 *               buttons calls setBillingCycle() which re-renders
 *               the component with the updated value.
 *               Syntax: const [value, setValue] = useState(defaultValue)
 *
 *   .map()    — Used to loop over arrays (hostingPlans, featuresList)
 *               and render a JSX element for each item.
 *               The `key` prop is required by React to track list items.
 *
 *   Conditional rendering with && — The back bar is only shown if
 *               the `onBack` prop was actually passed:
 *               {onBack && <div>...</div>}
 *
 *   Template literals in className — We use JavaScript template
 *               literals (`${...}`) inside className strings to
 *               conditionally add Tailwind classes based on state.
 * ─────────────────────────────────────────────────────────────────
 */
import React, { useState } from 'react'
import {
  Send,
  Check,
  ShieldCheck,
  Zap,
  Server,
  Headphones,
  Lock,
  ArrowRightLeft,
  Terminal,
  TrendingUp,
  ShieldAlert,
  LayoutGrid,
} from 'lucide-react'
import Flag from '../assets/Flag_of_Nepal.svg.webp'
import HeroRobot from '../assets/robot_5_transparent.svg'

const hostingPlans = [
  {
    name: 'Starter Web',
    price: 'Rs 120',
    period: '/month',
    desc: 'Perfect for personal blogs, portfolios, and small project sites.',
    features: [
      '1 Website Hosted',
      '10 GB NVMe SSD Storage',
      'Free .com Domain Included',
      'Unmetered Bandwidth',
      'Free SSL Certificate',
      'Daily Automated Backups',
    ],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Business Pro',
    price: 'Rs 350',
    period: '/month',
    desc: 'Optimized for growing Nepali businesses & e-commerce stores.',
    features: [
      'Unlimited Websites',
      '50 GB High-Speed NVMe SSD',
      'Free .com Domain Included',
      '2x CPU & Memory Resources',
      'Free SSL & DDoS Protection',
      '24/7 Priority Support',
    ],
    popular: true,
    cta: 'Start Business Plan',
  },
  {
    name: 'Cloud Ultra',
    price: 'Rs 850',
    period: '/month',
    desc: 'Maximum performance and dedicated power for high-traffic apps.',
    features: [
      'Unlimited Websites',
      '100 GB NVMe SSD Storage',
      'Free .com / .np Domain',
      'Dedicated IP Address',
      'LiteSpeed Web Server + LSCache',
      'VIP Dedicated Account Support',
    ],
    popular: false,
    cta: 'Scale to Cloud',
  },
]

const featuresList = [
  {
    number: '01',
    title: 'Lightning Fast',
    description:
      'Your websites are assured of exceptional performance with WebHostNepal Web Hosting Plans, thanks to our carefully designed Intel powered hardware that deliver fantastic power, reliability and efficiency',
    badge: 'Intel Hardware',
    icon: Zap,
    color: 'bg-amber-50 text-amber-500',
  },
  {
    number: '02',
    title: 'cPanel Included',
    description:
      "World's Leading Hosting Control Panel to Manage Web Pages, View Website Statistics, Create Email Accounts etc. With its ease-of-use and quality features, managing your website is now made effortless.",
    badge: 'Easy Dashboard',
    icon: LayoutGrid,
    color: 'bg-orange-50 text-orange-500',
  },
  {
    number: '03',
    title: 'Reliable Support',
    description:
      'Your websites are our priority, we are here to serve you. Our dedicated team of Linux Web Hosting experts work round-the-clock to ensure your business does not face any disruptions.',
    badge: '24/7/365 Team',
    icon: Headphones,
    color: 'bg-blue-50 text-blue-500',
  },
  {
    number: '04',
    title: 'Free SSL Certificate',
    description:
      "Make your website safe, gain your customers' trust with free SSL certificate you get with every Web Hosting plan. SSL Certificate also helps to improves your website ranking.",
    badge: 'HTTPS Security',
    icon: Lock,
    color: 'bg-emerald-50 text-emerald-500',
  },
  {
    number: '05',
    title: 'Free Migrations',
    description:
      'Move your hosting to us, with help from our experts. We will help you migrate your current website on cPanel hosting with any other provider to your Web Host Nepal Hosting - completely free!',
    badge: 'Zero Downtime',
    icon: ArrowRightLeft,
    color: 'bg-purple-50 text-purple-500',
  },
  {
    number: '06',
    title: 'Secure Shell Access',
    description:
      'On Demand SSH/Terminal access on your cPanel account. Manage files, execute commands and operate your Web Hosting with secure remote access via SSH and Terminal.',
    badge: 'Root & CLI',
    icon: Terminal,
    color: 'bg-slate-100 text-slate-700',
  },
  {
    number: '07',
    title: 'Easy Upgrade',
    description:
      'Increase resources as per your need. Easy to upgrade to other hosting packages as well as other web hosting products such as Reseller Hosting or VPS, we can assist you with our Free cPanel Migrations.',
    badge: 'Seamless Scalability',
    icon: TrendingUp,
    color: 'bg-sky-50 text-sky-500',
  },
  {
    number: '08',
    title: 'Enhanced Security',
    description:
      "CloudFlare Protection for your business from threats and also Cloudflare accelerate website performance, improve mobile delivery with Cloudflare's global content delivery network (CDN).",
    badge: 'DDoS Protection',
    icon: ShieldAlert,
    color: 'bg-rose-50 text-rose-500',
  },
]

export const WebHostingHero = ({ onBack }) => {
  const [billingCycle, setBillingCycle] = useState('monthly')

  return (
    <>
      {/* Back Navigation Bar */}
      {onBack && (
        <div className="bg-white border-b border-slate-200 py-3">
          <div className="site-container">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer bg-transparent border-none"
            >
              &larr; Back to Home
            </button>
          </div>
        </div>
      )}

      {/* ================= WEB HOSTING HERO SECTION ================= */}
      <section className="hero-section site-section w-full overflow-hidden bg-slate-50/50 pt-12 pb-10 font-sans sm:pt-16 sm:pb-14 lg:flex lg:min-h-[calc(100svh-6.5625rem)] lg:flex-col lg:pt-14 lg:pb-16">
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
        `}</style>

        <div className="site-container grid grid-cols-1 items-center gap-10 lg:flex-1 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-8 xl:gap-12">
          
          <div className="w-full max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs sm:text-sm font-semibold text-slate-700 mb-4 shadow-sm">
              <img src={Flag} alt="Nepal flag" className="w-4 h-4 object-contain" />
              <span>Sovereign Web Hosting in Nepal</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>

            <h1 className="section-title max-w-[18ch] font-extrabold text-slate-950 text-3xl sm:text-5xl leading-tight mb-4">
              Ultra-Fast Web Hosting Designed for{' '}
              <span className="bg-gradient-to-b from-[#1b75e7] to-[#125ec5] bg-clip-text text-transparent">
                Nepali High-Traffic Sites
              </span>
            </h1>

            <p className="max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 mb-6">
              Power your website with Kathmandu local servers, NVMe SSD speed, 99.98% SLA uptime, and instant digital wallet payments via eSewa &amp; Khalti.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a 
                href="#hosting-pricing"
                className="rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md transition-all hover:from-[#1e88e5] hover:to-[#1565c0] hover:shadow-lg hover:-translate-y-0.5"
              >
                Choose Hosting Plan &rarr;
              </a>
              <a 
                href="#features" 
                className="rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-700 transition-colors hover:bg-slate-100"
              >
                View Server Specs
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-slate-200/80 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <Zap className="h-4 w-4 text-blue-600 shrink-0" />
                <span>LiteSpeed Engine</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
                <span>Free SSL &amp; DDoS</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <Server className="h-4 w-4 text-blue-600 shrink-0" />
                <span>100% NVMe SSD</span>
              </div>
            </div>
          </div>

          <div className="relative isolate min-h-[340px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#f7fbff] via-[#e8f2ff] to-[#d4e6ff] ring-1 ring-blue-100 shadow-[0_24px_60px_rgba(37,99,235,0.14)] sm:min-h-[400px] lg:min-h-[460px]">
            
            <div aria-hidden="true" className="absolute inset-y-6 left-4 w-[76%] bg-gradient-to-br from-[#1b75e7] via-[#155fc0] to-[#0c438e] [clip-path:polygon(0_0,100%_0,78%_100%,0_100%)] sm:left-6" />
            <div aria-hidden="true" className="absolute right-0 top-0 h-full w-[42%] bg-gradient-to-b from-white/70 to-[#bcd7ff]/80 [clip-path:polygon(54%_0,100%_0,100%_100%,0_100%)]" />

            <img
              src={HeroRobot}
              alt="Blue Fox Web Hosting Robot"
              className="absolute bottom-0 left-[12%] z-[1] h-[70%] w-[42%] object-contain object-bottom drop-shadow-[0_18px_24px_rgba(5,25,62,0.2)] sm:h-[82%] sm:w-[48%]"
            />

            <div className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3.5 py-1.5 shadow-lg backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-800">99.98% Uptime SLA</span>
            </div>

            <div className="absolute left-5 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/90 text-blue-600 shadow-md">
              <Send className="h-5 w-5 -rotate-12" />
            </div>

            <div className="absolute right-3 top-[42%] h-[180px] w-1/2 -translate-y-1/2 overflow-hidden sm:right-6 sm:top-1/2 sm:h-[220px] sm:w-[min(13rem,88%)]">
              <div className="animate-vertical-ticker flex flex-col gap-3">
                {[0, 1].map((group) => (
                  <div className="flex flex-col gap-3" key={group}>
                    {[
                      { icon: '🚀', title: 'NVMe Storage' },
                      { icon: '🔒', title: 'Free SSL Certificate' },
                      { icon: '🌐', title: 'Free .COM Domain' },
                      { icon: '⚙️', title: 'cPanel & CLI Support' },
                      { icon: '📦', title: 'Daily Backups' },
                    ].map((item) => (
                      <div key={`${group}-${item.title}`} className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/90 px-3.5 py-2.5 text-left shadow-md backdrop-blur-md">
                        <span className="text-base">{item.icon}</span>
                        <span className="text-xs sm:text-sm font-bold text-slate-800">{item.title}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-4 right-4 z-10 rounded-2xl border border-white/80 bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Starting at</span>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-extrabold uppercase text-emerald-800">70% OFF</span>
              </div>
              <div className="mt-0.5 flex items-baseline gap-1">
                <span className="text-2xl font-black text-slate-950">Rs 120</span>
                <span className="text-xs font-semibold text-slate-500">/mo</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= HOSTING PRICING CARDS SECTION ================= */}
      <section id="hosting-pricing" className="bg-white py-16 font-sans sm:py-20">
        <div className="site-container">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
              Web Hosting Plans
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Flexible Web Hosting Pricing
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              No hidden fees. Instant activation with local payment options like eSewa, Khalti, IME Pay, and Bank Transfer.
            </p>

            <div className="mt-6 inline-flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                  billingCycle === 'monthly' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly Billing
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                  billingCycle === 'yearly' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Annual Billing <span className="ml-1 text-[10px] font-bold text-emerald-600 uppercase">(Save 20%)</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {hostingPlans.map((plan) => (
              <div 
                key={plan.name}
                className={`relative rounded-3xl border bg-white p-8 shadow-sm flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1 ${
                  plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-200'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-1 text-xs font-extrabold text-white shadow-md">
                    Most Popular Choice
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{plan.desc}</p>

                  <div className="mt-6 flex items-baseline gap-1 border-b border-slate-100 pb-6">
                    <span className="text-4xl font-black text-slate-950">{plan.price}</span>
                    <span className="text-xs font-semibold text-slate-500">{plan.period}</span>
                  </div>

                  <ul className="mt-6 space-y-3.5 text-sm text-slate-600">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold border border-emerald-200">
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="text-xs sm:text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="#get-started"
                    className={`block w-full text-center rounded-xl py-3.5 text-sm font-bold transition-all ${
                      plan.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg' 
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                    }`}
                  >
                    {plan.cta} &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FEATURES GRID SECTION ================= */}
      <section id="features" className="bg-[#f8fafc] py-16 font-sans sm:py-24 border-t border-slate-200/60">
        <div className="site-container">
          
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50/80 px-3.5 py-1 rounded-full border border-blue-100/80">
              • WHAT YOU GET •
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
              Features
            </h2>
            <div className="flex items-center justify-center gap-1 mt-3">
              <span className="h-1 w-2 rounded-full bg-blue-400"></span>
              <span className="h-1 w-6 rounded-full bg-blue-600"></span>
              <span className="h-1 w-2 rounded-full bg-blue-400"></span>
            </div>
          </div>

          {/* 8 Feature Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuresList.map((feat) => {
              const IconComponent = feat.icon
              return (
                <div
                  key={feat.number}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    {/* Top Row: Icon & Feature Number */}
                    <div className="flex items-center justify-between mb-5">
                      <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${feat.color}`}>
                        <IconComponent className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-bold text-slate-300 group-hover:text-blue-500 transition-colors">
                        {feat.number}
                      </span>
                    </div>

                    {/* Feature Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                      {feat.title}
                    </h3>

                    {/* Feature Description */}
                    <p className="text-xs leading-relaxed text-slate-500 mb-6">
                      {feat.description}
                    </p>
                  </div>

                  {/* Bottom Footer Badge */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                    <span>{feat.badge}</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Callout Pill */}
          <div className="mt-14 flex justify-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-5 rounded-full border border-slate-200/80 bg-white p-2 sm:pr-6 shadow-lg shadow-slate-200/50">
              <a
                href="#hosting-pricing"
                className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:from-blue-700 hover:to-blue-800"
              >
                Get Started with Hosting &rarr;
              </a>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600 pb-2 sm:pb-0">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check className="h-2.5 w-2.5" />
                </span>
                <span>30-Day Money Back Guarantee • 99.9% Uptime SLA</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default WebHostingHero