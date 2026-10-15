import React, { useState } from 'react'
import { Check, MapPin, Zap, ShieldCheck, Terminal, Globe, Clock, Cpu } from 'lucide-react'

const usaPlans = [
  {
    name: 'USA VPS Starter',
    monthly: 1500,
    desc: 'Great for websites, small apps and development servers.',
    features: [
      '1 vCPU Core',
      '2 GB DDR4 RAM',
      '40 GB NVMe SSD Storage',
      '2 TB Monthly Bandwidth',
      'Full Root Access',
    ],
    popular: false,
    cta: 'Start VPS Starter',
  },
  {
    name: 'USA VPS Business',
    monthly: 3000,
    desc: 'Built for production apps, stores and busy websites.',
    features: [
      '2 vCPU Cores',
      '4 GB DDR4 RAM',
      '80 GB NVMe SSD Storage',
      '4 TB Monthly Bandwidth',
      'Free Weekly Snapshots',
    ],
    popular: true,
    cta: 'Start VPS Business',
  },
  {
    name: 'USA VPS Enterprise',
    monthly: 6000,
    desc: 'Maximum power for demanding, high-traffic workloads.',
    features: [
      '4 vCPU Cores',
      '8 GB DDR4 RAM',
      '160 GB NVMe SSD Storage',
      'Unmetered Bandwidth',
      'Dedicated IP & Priority Support',
    ],
    popular: false,
    cta: 'Scale to Enterprise',
  },
]

const usaStats = [
  { icon: Globe, label: 'Data Centers', value: '3 US Locations' },
  { icon: Zap, label: 'Network Speed', value: '10 Gbps Uplink' },
  { icon: Clock, label: 'Uptime SLA', value: '99.9% Guaranteed' },
  { icon: Cpu, label: 'Hardware', value: 'NVMe SSD Only' },
]

const formatPrice = (n) => `Rs ${n.toLocaleString('en-IN')}`

export const UsaVpsHero = ({ onBack }) => {
  const [billingCycle, setBillingCycle] = useState('monthly')

  return (
    <>
      {onBack && (
        <div className="bg-white border-b border-slate-200 py-3">
          <div className="site-container">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-800 transition-colors cursor-pointer bg-transparent border-none"
            >
              &larr; Back to Home
            </button>
          </div>
        </div>
      )}

      {/* ================= USA VPS HERO SECTION ================= */}
      <section className="hero-section site-section w-full overflow-hidden bg-gradient-to-br from-slate-950 via-[#0a1628] to-[#0d1f3c] pt-12 pb-10 font-sans sm:pt-16 sm:pb-14 relative">
        {/* Stars / decorative bg */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, #b91c1c 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1d4ed8 0%, transparent 45%)'}} />
        {/* Flag stripe accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B22234] via-white to-[#3C3B6E]" />

        <div className="site-container grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 relative z-10">
          <div className="w-full max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-900/30 px-3.5 py-1 text-xs sm:text-sm font-semibold text-red-300 mb-4 shadow-sm backdrop-blur-sm">
              <span className="text-base">🇺🇸</span>
              <span>USA Based VPS</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>

            <h1 className="section-title max-w-[18ch] font-extrabold text-white text-3xl sm:text-5xl leading-tight mb-4">
              USA VPS Hosting for{' '}
              <span className="bg-gradient-to-r from-[#ef4444] via-[#f97316] to-[#eab308] bg-clip-text text-transparent">
                Global Reach & Speed
              </span>
            </h1>

            <p className="max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-300 mb-6">
              Host in US data centers for fast access to North American audiences and dependable global performance, with instant digital wallet payments via eSewa &amp; Khalti.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#usa-vps-pricing"
                className="rounded-xl bg-gradient-to-r from-[#B22234] to-[#8B1A27] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-red-900/40 transition-all hover:from-[#c9313f] hover:to-[#a01f2f] hover:shadow-xl hover:-translate-y-0.5"
              >
                Choose VPS Plan &rarr;
              </a>
              <a
                href="#usa-vps-features"
                className="rounded-xl border border-slate-600 bg-white/10 backdrop-blur-sm px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-200 transition-colors hover:bg-white/20"
              >
                View Features
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-white/10 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-2 shadow-sm">
                <Terminal className="h-4 w-4 text-red-400 shrink-0" />
                <span>Full Root Access</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-2 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-blue-400 shrink-0" />
                <span>DDoS Protection</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-2 shadow-sm">
                <Zap className="h-4 w-4 text-yellow-400 shrink-0" />
                <span>NVMe Speed</span>
              </div>
            </div>
          </div>

          <div
            id="usa-vps-features"
            className="relative isolate min-h-[340px] overflow-hidden rounded-3xl p-8 text-white shadow-2xl flex flex-col justify-between sm:min-h-[400px]"
            style={{background: 'linear-gradient(135deg, #B22234 0%, #7f1d1d 40%, #3C3B6E 100%)'}}
          >
            {/* Stars pattern */}
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px'}} />
            <div className="absolute right-0 bottom-0 w-64 h-64 opacity-10">
              <svg viewBox="0 0 200 200" fill="white"><text y="160" fontSize="160">🇺🇸</text></svg>
            </div>
            <div className="relative z-10">
              <span className="text-xs uppercase font-extrabold tracking-widest text-red-200">Global Reach, Dependable Speed</span>
              <h3 className="text-2xl font-bold mt-2">Deploy Close to Your US Customers</h3>
              <p className="text-sm text-red-100 mt-2 leading-relaxed">High-speed US network connectivity, NVMe storage and full root access for any workload.</p>
            </div>
            <div className="relative z-10 grid grid-cols-2 gap-3 mt-6">
              {usaStats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20">
                  <Icon className="h-4 w-4 text-red-200 mb-1" />
                  <p className="text-[10px] uppercase tracking-wider text-red-200 font-bold">{label}</p>
                  <p className="text-sm font-bold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= USA VPS PRICING CARDS SECTION ================= */}
      <section id="usa-vps-pricing" className="bg-slate-50 py-16 font-sans sm:py-20">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3.5 py-1 rounded-full border border-red-200">
              🇺🇸 USA VPS Plans
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              USA VPS Plans for Every Workload
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Pay securely via eSewa, Khalti, IME Pay, or Bank Transfer.
            </p>

            <div className="mt-6 inline-flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all cursor-pointer border-none ${
                  billingCycle === 'monthly' ? 'bg-white text-red-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly Billing
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all cursor-pointer border-none ${
                  billingCycle === 'yearly' ? 'bg-white text-red-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Annual Billing <span className="ml-1 text-[10px] font-bold text-emerald-600 uppercase">(Save 20%)</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {usaPlans.map((plan) => {
              const yearly = billingCycle === 'yearly'
              const price = yearly ? Math.round(plan.monthly * 12 * 0.8) : plan.monthly
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-3xl border bg-white p-8 shadow-sm flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1 ${
                    plan.popular ? 'border-red-500 ring-2 ring-red-500/20' : 'border-slate-200'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#B22234] to-[#3C3B6E] px-4 py-1 text-xs font-extrabold text-white shadow-md whitespace-nowrap">
                      ⭐ Most Popular Choice
                    </span>
                  )}

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">🇺🇸</span>
                      <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{plan.desc}</p>

                    <div className="mt-6 flex items-baseline gap-1 border-b border-slate-100 pb-6">
                      <span className="text-4xl font-black text-slate-950">{formatPrice(price)}</span>
                      <span className="text-xs font-semibold text-slate-500">{yearly ? '/year' : '/month'}</span>
                    </div>

                    <ul className="mt-6 space-y-3.5 text-sm text-slate-600">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 text-xs font-bold border border-red-200">
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
                          ? 'bg-gradient-to-r from-[#B22234] to-[#3C3B6E] text-white hover:opacity-90 shadow-md hover:shadow-lg'
                          : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                      }`}
                    >
                      {plan.cta} &rarr;
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= USA TRUST / WHY US SECTION ================= */}
      <section className="bg-white py-14 font-sans border-t border-slate-100">
        <div className="site-container">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3.5 py-1 rounded-full border border-red-200">
              Why USA VPS?
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-950 sm:text-3xl">Built for North American Performance</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <Globe className="h-5 w-5 text-red-600" />
              </div>
              <h4 className="font-bold text-slate-900">Prime US Locations</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Data centers in New York, Dallas and Los Angeles — ultra-low latency for US audiences.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-blue-700" />
              </div>
              <h4 className="font-bold text-slate-900">Enterprise DDoS Shield</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Multi-layer DDoS mitigation with automatic traffic scrubbing to keep your server online.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
                <Zap className="h-5 w-5 text-yellow-600" />
              </div>
              <h4 className="font-bold text-slate-900">Pay in NPR</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Instant payments via eSewa, Khalti, IME Pay or Bank Transfer — no USD conversion headaches.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UsaVpsHero