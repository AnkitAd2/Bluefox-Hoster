import React, { useState } from 'react'
import { Check, CodeXml, Zap, ShieldCheck, Terminal } from 'lucide-react'

const pythonPlans = [
  {
    name: 'Python Starter',
    monthly: 450,
    desc: 'Great for scripts, bots, APIs and small Python projects.',
    features: [
      '1 Python Application',
      '20 GB NVMe SSD Storage',
      'Python 3.x Virtual Environments',
      'Free SSL Certificate',
      'Weekly Automated Backups',
    ],
    popular: false,
    cta: 'Start Python Starter',
  },
  {
    name: 'Python Business',
    monthly: 950,
    desc: 'Built for production web apps and APIs with steady traffic.',
    features: [
      '5 Python Applications',
      '80 GB NVMe SSD Storage',
      'Flask / FastAPI Ready',
      'SSH Access & Git Deployment',
      'Daily Backups & Priority Support',
    ],
    popular: true,
    cta: 'Start Python Business',
  },
  {
    name: 'Python Enterprise',
    monthly: 1950,
    desc: 'Dedicated power for high-traffic, mission-critical Python workloads.',
    features: [
      'Unlimited Python Applications',
      '200 GB NVMe SSD Storage',
      'Dedicated IP & Advanced DDoS Protection',
      'Background Workers & Cron Jobs',
      'VIP Dedicated Account Manager',
    ],
    popular: false,
    cta: 'Scale to Enterprise',
  },
]

const formatPrice = (n) => `Rs ${n.toLocaleString('en-IN')}`

export const PythonHostHero = ({ onBack }) => {
  const [billingCycle, setBillingCycle] = useState('monthly')

  return (
    <>
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

      {/* ================= PYTHON HOSTING HERO SECTION ================= */}
      <section className="hero-section site-section w-full overflow-hidden bg-slate-50/50 pt-12 pb-10 font-sans sm:pt-16 sm:pb-14">
        <div className="site-container grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="w-full max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs sm:text-sm font-semibold text-blue-700 mb-4 shadow-sm">
              <CodeXml className="w-4 h-4 text-blue-600" />
              <span>Deploy Python Applications</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>

            <h1 className="section-title max-w-[18ch] font-extrabold text-slate-950 text-3xl sm:text-5xl leading-tight mb-4">
              Python Hosting Built for{' '}
              <span className="bg-gradient-to-b from-[#1b75e7] to-[#125ec5] bg-clip-text text-transparent">
                Modern Applications
              </span>
            </h1>

            <p className="max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 mb-6">
              Run Flask, FastAPI and custom Python apps with SSH access, virtual environments, NVMe speed and instant digital wallet payments via eSewa &amp; Khalti.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#python-pricing"
                className="rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md transition-all hover:from-[#1e88e5] hover:to-[#1565c0] hover:shadow-lg hover:-translate-y-0.5"
              >
                Choose Python Plan &rarr;
              </a>
              <a
                href="#python-features"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-700 transition-colors hover:bg-slate-100"
              >
                View Features
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-slate-200/80 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <Terminal className="h-4 w-4 text-blue-600 shrink-0" />
                <span>SSH &amp; Git Deploy</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
                <span>Secure SSL</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <Zap className="h-4 w-4 text-blue-600 shrink-0" />
                <span>NVMe Speed</span>
              </div>
            </div>
          </div>

          <div
            id="python-features"
            className="relative isolate min-h-[340px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#1b75e7] via-[#155fc0] to-[#0c438e] p-8 text-white shadow-2xl flex flex-col justify-between sm:min-h-[400px]"
          >
            <CodeXml className="absolute right-6 top-6 h-36 w-36 opacity-15" />
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-blue-200">Built for Python Developers</span>
              <h3 className="text-2xl font-bold mt-2">From Script to Live App in Minutes</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <p className="text-xs text-blue-100">Multiple Python versions, isolated virtual environments and expert support help you deploy with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PYTHON PRICING CARDS SECTION ================= */}
      <section id="python-pricing" className="bg-white py-16 font-sans sm:py-20">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
              Python Hosting Plans
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Python Plans for Every Project
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Pay securely via eSewa, Khalti, IME Pay, or Bank Transfer.
            </p>

            <div className="mt-6 inline-flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all cursor-pointer border-none ${
                  billingCycle === 'monthly' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly Billing
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all cursor-pointer border-none ${
                  billingCycle === 'yearly' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Annual Billing <span className="ml-1 text-[10px] font-bold text-emerald-600 uppercase">(Save 20%)</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pythonPlans.map((plan) => {
              const yearly = billingCycle === 'yearly'
              const price = yearly ? Math.round(plan.monthly * 12 * 0.8) : plan.monthly
              return (
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
                      <span className="text-4xl font-black text-slate-950">{formatPrice(price)}</span>
                      <span className="text-xs font-semibold text-slate-500">{yearly ? '/year' : '/month'}</span>
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
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default PythonHostHero