import React, { useState } from 'react'
import { Check, MapPin, Zap, ShieldCheck, Terminal, Globe, Clock, Cpu } from 'lucide-react'

const nepalPlans = [
  {
    name: 'Nepal VPS Starter',
    monthly: 1200,
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
    name: 'Nepal VPS Business',
    monthly: 2500,
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
    name: 'Nepal VPS Enterprise',
    monthly: 5000,
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

const nepalStats = [
  { icon: Globe, label: 'Data Centers', value: 'Kathmandu, Nepal' },
  { icon: Zap, label: 'Network Speed', value: '1 Gbps Uplink' },
  { icon: Clock, label: 'Uptime SLA', value: '99.9% Guaranteed' },
  { icon: Cpu, label: 'Hardware', value: 'NVMe SSD Only' },
]

const formatPrice = (n) => `Rs ${n.toLocaleString('en-IN')}`

export const NepalVpsHero = ({ onBack }) => {
  const [billingCycle, setBillingCycle] = useState('monthly')

  return (
    <>
      {onBack && (
        <div className="bg-white border-b border-slate-200 py-3">
          <div className="site-container">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-900 transition-colors cursor-pointer bg-transparent border-none"
            >
              &larr; Back to Home
            </button>
          </div>
        </div>
      )}

      {/* ================= NEPAL VPS HERO SECTION ================= */}
      <section className="hero-section site-section w-full overflow-hidden pt-12 pb-10 font-sans sm:pt-16 sm:pb-14 relative" style={{background: 'linear-gradient(135deg, #1a0a0a 0%, #6b1212 40%, #1a0a0a 100%)'}}>
        {/* Crimson glow */}
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 25% 40%, #dc2626 0%, transparent 50%), radial-gradient(circle at 75% 60%, #b91c1c 0%, transparent 45%)'}} />
        {/* Nepal flag colors stripe - crimson + blue border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DC143C] via-[#003893] to-[#DC143C]" />

        <div className="site-container grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 relative z-10">
          <div className="w-full max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-900/30 px-3.5 py-1 text-xs sm:text-sm font-semibold text-red-200 mb-4 shadow-sm backdrop-blur-sm">
              <span className="text-base">🇳🇵</span>
              <span>Nepal Based VPS</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>

            <h1 className="section-title max-w-[18ch] font-extrabold text-white text-3xl sm:text-5xl leading-tight mb-4">
              Nepal VPS Hosting with{' '}
              <span className="bg-gradient-to-r from-[#DC143C] via-[#e53e3e] to-[#003893] bg-clip-text text-transparent">
                Low Latency for Local Users
              </span>
            </h1>

            <p className="max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-red-100 mb-6">
              Host inside Nepal for the fastest load times for local visitors, local support and instant digital wallet payments via eSewa &amp; Khalti.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#nepal-vps-pricing"
                className="rounded-xl px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-red-900/50 transition-all hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
                style={{background: 'linear-gradient(135deg, #DC143C, #a50f0f)'}}
              >
                Choose VPS Plan &rarr;
              </a>
              <a
                href="#nepal-vps-features"
                className="rounded-xl border border-red-400/30 bg-white/10 backdrop-blur-sm px-5 py-3.5 text-sm sm:text-base font-semibold text-red-100 transition-colors hover:bg-white/20"
              >
                View Features
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-white/10 text-xs font-semibold text-red-200">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-2 shadow-sm">
                <Terminal className="h-4 w-4 text-red-300 shrink-0" />
                <span>Full Root Access</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-2 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-blue-300 shrink-0" />
                <span>DDoS Protection</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-2 shadow-sm">
                <Zap className="h-4 w-4 text-red-300 shrink-0" />
                <span>NVMe Speed</span>
              </div>
            </div>
          </div>

          <div
            id="nepal-vps-features"
            className="relative isolate min-h-[340px] overflow-hidden rounded-3xl p-8 text-white shadow-2xl flex flex-col justify-between sm:min-h-[400px]"
            style={{background: 'linear-gradient(135deg, #DC143C 0%, #8B0000 50%, #003893 100%)'}}
          >
            {/* Decorative nepali pattern hint */}
            <div className="absolute right-0 top-0 w-48 h-48 opacity-10 flex items-center justify-center text-[140px]">
              🇳🇵
            </div>
            <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px'}} />
            <div className="relative z-10">
              <span className="text-xs uppercase font-extrabold tracking-widest text-red-200">Low Latency for Local Users</span>
              <h3 className="text-2xl font-bold mt-2 text-white">Hosted Locally, Built for Nepal</h3>
              <p className="text-sm text-red-100 mt-2 leading-relaxed">Local data center speed, NVMe storage, full root access and Nepali-language support.</p>
            </div>
            <div className="relative z-10 grid grid-cols-2 gap-3 mt-6">
              {nepalStats.map(({ icon: Icon, label, value }) => (
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

      {/* ================= NEPAL VPS PRICING CARDS SECTION ================= */}
      <section id="nepal-vps-pricing" className="bg-slate-50 py-16 font-sans sm:py-20">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-3.5 py-1 rounded-full border border-red-200">
              🇳🇵 Nepal VPS Plans
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Nepal VPS Plans for Every Workload
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Pay securely via eSewa, Khalti, IME Pay, or Bank Transfer.
            </p>

            <div className="mt-6 inline-flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all cursor-pointer border-none ${
                  billingCycle === 'monthly' ? 'bg-white text-red-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly Billing
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all cursor-pointer border-none ${
                  billingCycle === 'yearly' ? 'bg-white text-red-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Annual Billing <span className="ml-1 text-[10px] font-bold text-emerald-600 uppercase">(Save 20%)</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {nepalPlans.map((plan) => {
              const yearly = billingCycle === 'yearly'
              const price = yearly ? Math.round(plan.monthly * 12 * 0.8) : plan.monthly
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-3xl border bg-white p-8 shadow-sm flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1 ${
                    plan.popular ? 'border-red-600 ring-2 ring-red-600/20' : 'border-slate-200'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-extrabold text-white shadow-md whitespace-nowrap" style={{background: 'linear-gradient(90deg, #DC143C, #003893)'}}>
                      ⭐ Most Popular Choice
                    </span>
                  )}

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">🇳🇵</span>
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
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-700 text-xs font-bold border border-red-200">
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
                          ? 'text-white hover:opacity-90 shadow-md hover:shadow-lg'
                          : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                      }`}
                      style={plan.popular ? {background: 'linear-gradient(90deg, #DC143C, #003893)'} : {}}
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

      {/* ================= NEPAL TRUST / WHY NEPAL SECTION ================= */}
      <section className="bg-white py-14 font-sans border-t border-slate-100">
        <div className="site-container">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-3.5 py-1 rounded-full border border-red-200">
              Why Nepal VPS?
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-950 sm:text-3xl">Locally Hosted, Proudly Nepali</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #DC143C, #a50f0f)'}}>
                <Globe className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-bold text-slate-900">Kathmandu Data Center</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Servers physically inside Nepal — minimal latency for local visitors, local businesses and government sites.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #003893, #001f6b)'}}>
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-bold text-slate-900">Local Support Team</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Nepali-speaking support available in your timezone — no language barriers, no time-zone frustrations.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #DC143C, #003893)'}}>
                <Zap className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-bold text-slate-900">eSewa & Khalti Payments</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Pay instantly via eSewa, Khalti, IME Pay, or Bank Transfer — the most convenient way to host locally.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NepalVpsHero