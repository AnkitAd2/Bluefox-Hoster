import React, { useState } from 'react'
import { Check, MapPin, Zap, ShieldCheck, Terminal, Globe, Clock, Cpu } from 'lucide-react'

const europePlans = [
  {
    name: 'Europe VPS Starter',
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
    name: 'Europe VPS Business',
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
    name: 'Europe VPS Enterprise',
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

const europeStats = [
  { icon: Globe, label: 'Data Centers', value: 'Amsterdam & Frankfurt' },
  { icon: Zap, label: 'Network Speed', value: '10 Gbps Uplink' },
  { icon: Clock, label: 'Uptime SLA', value: '99.9% Guaranteed' },
  { icon: Cpu, label: 'Hardware', value: 'NVMe SSD Only' },
]

const formatPrice = (n) => `Rs ${n.toLocaleString('en-IN')}`

export const EuropeVpsHero = ({ onBack }) => {
  const [billingCycle, setBillingCycle] = useState('monthly')

  return (
    <>
      {onBack && (
        <div className="bg-white border-b border-slate-200 py-3">
          <div className="site-container">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors cursor-pointer bg-transparent border-none"
            >
              &larr; Back to Home
            </button>
          </div>
        </div>
      )}

      {/* ================= EUROPE VPS HERO SECTION ================= */}
      <section className="hero-section site-section w-full overflow-hidden pt-12 pb-10 font-sans sm:pt-16 sm:pb-14 relative" style={{background: 'linear-gradient(135deg, #0a1628 0%, #003399 50%, #1a1a2e 100%)'}}>
        {/* EU flag circle dots */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 70% 30%, #ffd700 0%, transparent 40%), radial-gradient(circle at 20% 70%, #003399 0%, transparent 50%)'}} />
        {/* Gold accent stripe */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#003399] via-[#ffd700] to-[#003399]" />

        <div className="site-container grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 relative z-10">
          <div className="w-full max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-900/20 px-3.5 py-1 text-xs sm:text-sm font-semibold text-yellow-300 mb-4 shadow-sm backdrop-blur-sm">
              <span className="text-base">🇪🇺</span>
              <span>Europe Based VPS</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>

            <h1 className="section-title max-w-[18ch] font-extrabold text-white text-3xl sm:text-5xl leading-tight mb-4">
              Europe VPS Hosting with{' '}
              <span className="bg-gradient-to-r from-[#ffd700] via-[#f5c518] to-[#e6b800] bg-clip-text text-transparent">
                Reliable Infrastructure
              </span>
            </h1>

            <p className="max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-blue-100 mb-6">
              Host in European data centers for strong performance across Europe and the Middle East, with instant digital wallet payments via eSewa &amp; Khalti.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#europe-vps-pricing"
                className="rounded-xl px-6 py-3.5 text-sm sm:text-base font-semibold text-[#003399] shadow-lg shadow-yellow-500/20 transition-all hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
                style={{background: 'linear-gradient(135deg, #ffd700, #f5c518)'}}
              >
                Choose VPS Plan &rarr;
              </a>
              <a
                href="#europe-vps-features"
                className="rounded-xl border border-yellow-400/30 bg-white/10 backdrop-blur-sm px-5 py-3.5 text-sm sm:text-base font-semibold text-blue-100 transition-colors hover:bg-white/20"
              >
                View Features
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-white/10 text-xs font-semibold text-blue-200">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-2 shadow-sm">
                <Terminal className="h-4 w-4 text-yellow-300 shrink-0" />
                <span>Full Root Access</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-2 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-yellow-300 shrink-0" />
                <span>DDoS Protection</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-2 shadow-sm">
                <Zap className="h-4 w-4 text-yellow-300 shrink-0" />
                <span>NVMe Speed</span>
              </div>
            </div>
          </div>

          <div
            id="europe-vps-features"
            className="relative isolate min-h-[340px] overflow-hidden rounded-3xl p-8 text-white shadow-2xl flex flex-col justify-between sm:min-h-[400px]"
            style={{background: 'linear-gradient(135deg, #003399 0%, #002277 50%, #001155 100%)'}}
          >
            {/* EU stars ring */}
            <div className="absolute right-4 top-4 w-36 h-36 opacity-20">
              <svg viewBox="0 0 100 100" fill="#ffd700">
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30 - 90) * (Math.PI / 180)
                  const x = 50 + 38 * Math.cos(angle)
                  const y = 50 + 38 * Math.sin(angle)
                  return <text key={i} x={x - 5} y={y + 5} fontSize="12">★</text>
                })}
              </svg>
            </div>
            <div className="relative z-10">
              <span className="text-xs uppercase font-extrabold tracking-widest text-yellow-300">Reliable European Infrastructure</span>
              <h3 className="text-2xl font-bold mt-2 text-white">Fast, Stable Hosting in Europe</h3>
              <p className="text-sm text-blue-100 mt-2 leading-relaxed">Resilient European network, NVMe storage and full root access for any workload.</p>
            </div>
            <div className="relative z-10 grid grid-cols-2 gap-3 mt-6">
              {europeStats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-yellow-400/20">
                  <Icon className="h-4 w-4 text-yellow-300 mb-1" />
                  <p className="text-[10px] uppercase tracking-wider text-yellow-200 font-bold">{label}</p>
                  <p className="text-sm font-bold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= EUROPE VPS PRICING CARDS SECTION ================= */}
      <section id="europe-vps-pricing" className="bg-slate-50 py-16 font-sans sm:py-20">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
              🇪🇺 Europe VPS Plans
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Europe VPS Plans for Every Workload
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Pay securely via eSewa, Khalti, IME Pay, or Bank Transfer.
            </p>

            <div className="mt-6 inline-flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all cursor-pointer border-none ${
                  billingCycle === 'monthly' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly Billing
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all cursor-pointer border-none ${
                  billingCycle === 'yearly' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Annual Billing <span className="ml-1 text-[10px] font-bold text-emerald-600 uppercase">(Save 20%)</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {europePlans.map((plan) => {
              const yearly = billingCycle === 'yearly'
              const price = yearly ? Math.round(plan.monthly * 12 * 0.8) : plan.monthly
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-3xl border bg-white p-8 shadow-sm flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1 ${
                    plan.popular ? 'border-blue-600 ring-2 ring-blue-600/20' : 'border-slate-200'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-extrabold text-[#003399] shadow-md whitespace-nowrap" style={{background: 'linear-gradient(90deg, #ffd700, #f5c518)'}}>
                      ⭐ Most Popular Choice
                    </span>
                  )}

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">🇪🇺</span>
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
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-50 text-yellow-600 text-xs font-bold border border-yellow-200">
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
                          ? 'text-[#003399] hover:opacity-90 shadow-md hover:shadow-lg'
                          : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                      }`}
                      style={plan.popular ? {background: 'linear-gradient(90deg, #ffd700, #f5c518)'} : {}}
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

      {/* ================= EUROPE TRUST / WHY EUROPE SECTION ================= */}
      <section className="bg-white py-14 font-sans border-t border-slate-100">
        <div className="site-container">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
              Why Europe VPS?
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-950 sm:text-3xl">Built for European Performance & Compliance</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #003399, #002277)'}}>
                <Globe className="h-5 w-5 text-yellow-300" />
              </div>
              <h4 className="font-bold text-slate-900">Prime EU Locations</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Data centers in Amsterdam and Frankfurt — ultra-low latency for European and MENA audiences.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #ffd700, #f5c518)'}}>
                <ShieldCheck className="h-5 w-5 text-blue-800" />
              </div>
              <h4 className="font-bold text-slate-900">GDPR-Ready Infrastructure</h4>
              <p className="text-xs text-slate-500 leading-relaxed">European data sovereignty with DDoS protection and compliant data handling for EU regulations.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #003399, #002277)'}}>
                <Zap className="h-5 w-5 text-yellow-300" />
              </div>
              <h4 className="font-bold text-slate-900">Pay in NPR</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Instant payments via eSewa, Khalti, IME Pay or Bank Transfer — no currency conversion headaches.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EuropeVpsHero