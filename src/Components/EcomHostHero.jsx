import React, { useState } from 'react'
import { Send, Check, ShieldCheck, Zap, Server, ShoppingBag, Lock, Headphones, RefreshCw, Cpu, Database, CreditCard } from 'lucide-react'
import Flag from '../assets/Flag_of_Nepal.svg.webp'
import HeroRobot from '../assets/robot_5_transparent.svg'

const ecomPlans = [
  {
    name: 'Starter Store',
    price: 'Rs 450',
    period: '/month',
    desc: 'Ideal for small online shops, WooCommerce starters, and boutique stores.',
    features: [
      '1 WooCommerce Store',
      '20 GB NVMe SSD Storage',
      'Free .com / .np Domain',
      'Free SSL & PCI Compliance',
      'Unmetered Bandwidth',
      'Automated Daily Backups',
    ],
    popular: false,
    cta: 'Launch Store',
  },
  {
    name: 'Growth Ecom',
    price: 'Rs 990',
    period: '/month',
    desc: 'High-performance infrastructure for growing online merchants and heavy carts.',
    features: [
      '3 WooCommerce Stores',
      '60 GB High-Speed NVMe SSD',
      'Free .com / .np Domain',
      '3x CPU & Memory Allocation',
      'Advanced LiteSpeed Cache',
      '24/7 Priority Ecom Support',
    ],
    popular: true,
    cta: 'Scale Your Store',
  },
  {
    name: 'Enterprise Shop',
    price: 'Rs 2,150',
    period: '/month',
    desc: 'Ultimate speed, isolated resources, and maximum checkout uptime.',
    features: [
      'Unlimited Online Stores',
      '150 GB NVMe SSD Storage',
      'Free Domain Included',
      'Dedicated IP Address',
      'Redis Object Cache Pro',
      'VIP Dedicated Account Support',
    ],
    popular: false,
    cta: 'Go Enterprise',
  },
]

const ecomFeatures = [
  {
    number: '01',
    title: 'WooCommerce & Magento Optimized',
    description: 'Pre-configured environments fine-tuned for high-speed catalog browsing, instant cart updates, and seamless checkout flows.',
    badge: 'CMS Ready',
    icon: ShoppingBag,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    number: '02',
    title: 'LiteSpeed + LSCache Engine',
    description: 'Deliver lightning-fast page loading speeds with advanced server-level caching that handles flash sales and high traffic spikes effortlessly.',
    badge: 'Max Speed',
    icon: Zap,
    color: 'bg-amber-50 text-amber-500',
  },
  {
    number: '03',
    title: 'Secure Payment Gateway Ready',
    description: 'Fully compatible with popular Nepali digital wallets like eSewa, Khalti, and IME Pay, plus global gateways like Stripe and PayPal.',
    badge: 'eSewa & Khalti',
    icon: CreditCard,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    number: '04',
    title: 'Free SSL & Enhanced Security',
    description: 'Secure your customer transactions and personal data with free SSL certificates and robust Web Application Firewall (WAF) protection.',
    badge: 'PCI Compliant',
    icon: Lock,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    number: '05',
    title: 'Staging Environment',
    description: 'Test new plugins, theme updates, or code changes in a secure clone environment before pushing them live to your active shoppers.',
    badge: 'Risk-Free Testing',
    icon: RefreshCw,
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    number: '06',
    title: 'Isolated NVMe Resources',
    description: 'Blazing-fast 100% NVMe SSD storage ensures instant database queries and rapid product image loading for higher conversion rates.',
    badge: '100% NVMe',
    icon: Database,
    color: 'bg-rose-50 text-rose-500',
  },
  {
    number: '07',
    title: 'Automatic Daily Backups',
    description: 'Never lose order data or customer logs. Enjoy automated daily backups with one-click restore options available anytime.',
    badge: 'Data Safety',
    icon: Server,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    number: '08',
    title: '24/7 E-Commerce Experts',
    description: 'Our technical support team in Kathmandu is available around the clock to help keep your digital storefront online and generating revenue.',
    badge: 'Always Online',
    icon: Headphones,
    color: 'bg-teal-50 text-teal-600',
  },
]

export const EcomHostHero = ({ onBack }) => {
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

      {/* HERO SECTION */}
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
              <span>High-Performance eCommerce Hosting</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>

            <h1 className="section-title max-w-[18ch] font-extrabold text-slate-950 text-3xl sm:text-5xl leading-tight mb-4">
              Lightning-Fast Hosting Built for{' '}
              <span className="bg-gradient-to-b from-[#1b75e7] to-[#125ec5] bg-clip-text text-transparent">
                Online Stores &amp; Checkout
              </span>
            </h1>

            <p className="max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 mb-6">
              Maximize your sales with optimized WooCommerce architecture, LiteSpeed caching, seamless eSewa &amp; Khalti gateway integration, and guaranteed uptime.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a 
                href="#ecom-pricing"
                className="rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md transition-all hover:from-[#1e88e5] hover:to-[#1565c0] hover:shadow-lg hover:-translate-y-0.5"
              >
                Choose Store Plan &rarr;
              </a>
              <a 
                href="#ecom-features" 
                className="rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-700 transition-colors hover:bg-slate-100"
              >
                View Store Features
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-slate-200/80 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <ShoppingBag className="h-4 w-4 text-blue-600 shrink-0" />
                <span>WooCommerce Ready</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <Lock className="h-4 w-4 text-blue-600 shrink-0" />
                <span>Free SSL &amp; PCI</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <Zap className="h-4 w-4 text-blue-600 shrink-0" />
                <span>LiteSpeed Cache</span>
              </div>
            </div>
          </div>

          <div className="relative isolate min-h-[340px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#f7fbff] via-[#e8f2ff] to-[#d4e6ff] ring-1 ring-blue-100 shadow-[0_24px_60px_rgba(37,99,235,0.14)] sm:min-h-[400px] lg:min-h-[460px]">
            
            <div aria-hidden="true" className="absolute inset-y-6 left-4 w-[76%] bg-gradient-to-br from-[#1b75e7] via-[#155fc0] to-[#0c438e] [clip-path:polygon(0_0,100%_0,78%_100%,0_100%)] sm:left-6" />
            <div aria-hidden="true" className="absolute right-0 top-0 h-full w-[42%] bg-gradient-to-b from-white/70 to-[#bcd7ff]/80 [clip-path:polygon(54%_0,100%_0,100%_100%,0_100%)]" />

            <img
              src={HeroRobot}
              alt="Blue Fox eCommerce Hosting Robot"
              className="absolute bottom-0 left-[12%] z-[1] h-[70%] w-[42%] object-contain object-bottom drop-shadow-[0_18px_24px_rgba(5,25,62,0.2)] sm:h-[82%] sm:w-[48%]"
            />

            <div className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3.5 py-1.5 shadow-lg backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-800">Flash Sale Ready</span>
            </div>

            <div className="absolute left-5 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/90 text-blue-600 shadow-md">
              <ShoppingBag className="h-5 w-5" />
            </div>

            <div className="absolute right-3 top-[42%] h-[180px] w-1/2 -translate-y-1/2 overflow-hidden sm:right-6 sm:top-1/2 sm:h-[220px] sm:w-[min(13rem,88%)]">
              <div className="animate-vertical-ticker flex flex-col gap-3">
                {[0, 1].map((group) => (
                  <div className="flex flex-col gap-3" key={group}>
                    {[
                      { icon: '🛍️', title: 'WooCommerce Optimized' },
                      { icon: '⚡', title: 'LiteSpeed Acceleration' },
                      { icon: '💳', title: 'eSewa & Khalti Ready' },
                      { icon: '🔒', title: 'PCI Compliant SSL' },
                      { icon: '📈', title: 'Zero Cart Abandonment' },
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
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Store Hosting</span>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-extrabold uppercase text-emerald-800">FAST SETUP</span>
              </div>
              <div className="mt-0.5 flex items-baseline gap-1">
                <span className="text-2xl font-black text-slate-950">Rs 450</span>
                <span className="text-xs font-semibold text-slate-500">/mo</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PRICING CARDS SECTION */}
      <section id="ecom-pricing" className="bg-white py-16 font-sans sm:py-20">
        <div className="site-container">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
              eCommerce Hosting Plans
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Engineered for Online Sales
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Reliable performance for high-volume transactions and secure payment checkouts in Nepal.
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
            {ecomPlans.map((plan) => (
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

      {/* FEATURES GRID SECTION */}
      <section id="ecom-features" className="bg-[#f8fafc] py-16 font-sans sm:py-24 border-t border-slate-200/60">
        <div className="site-container">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50/80 px-3.5 py-1 rounded-full border border-blue-100/80">
              • WHAT STORES GET •
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
              E-Commerce Features
            </h2>
            <div className="flex items-center justify-center gap-1 mt-3">
              <span className="h-1 w-2 rounded-full bg-blue-400"></span>
              <span className="h-1 w-6 rounded-full bg-blue-600"></span>
              <span className="h-1 w-2 rounded-full bg-blue-400"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ecomFeatures.map((feat) => {
              const IconComponent = feat.icon
              return (
                <div
                  key={feat.number}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${feat.color}`}>
                        <IconComponent className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-bold text-slate-300 group-hover:text-blue-500 transition-colors">
                        {feat.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                      {feat.title}
                    </h3>

                    <p className="text-xs leading-relaxed text-slate-500 mb-6">
                      {feat.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                    <span>{feat.badge}</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-14 flex justify-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-5 rounded-full border border-slate-200/80 bg-white p-2 sm:pr-6 shadow-lg shadow-slate-200/50">
              <a
                href="#ecom-pricing"
                className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:from-blue-700 hover:to-blue-800"
              >
                Launch Your Store Now &rarr;
              </a>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600 pb-2 sm:pb-0">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check className="h-2.5 w-2.5" />
                </span>
                <span>Free Migration Support • 99.9% Uptime SLA</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default EcomHostHero