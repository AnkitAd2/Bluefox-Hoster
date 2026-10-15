import React, { useEffect, useRef, useState } from 'react'
import { Rocket, Sprout, Zap, Gem, Check, ArrowRight, ShieldCheck, Headset } from 'lucide-react'

/* ---------------------------------------------------------------------------
   Small animation helpers (no extra dependencies)
--------------------------------------------------------------------------- */

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])
  return reduced
}

// Becomes true once the element scrolls into view (and stays true)
const useInView = (threshold = 0.15) => {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, inView]
}

// Fade + slide up when scrolled into view. Adds `is-visible` so children can animate too.
const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        inView ? 'is-visible opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}

// Smoothly tweens a price when the billing cycle changes
const AnimatedNumber = ({ value, duration = 650 }) => {
  const target = parseInt(String(value).replace(/,/g, ''), 10)
  const reduced = usePrefersReducedMotion()
  const [display, setDisplay] = useState(target)
  const fromRef = useRef(target)

  useEffect(() => {
    if (reduced) {
      setDisplay(target)
      fromRef.current = target
      return
    }
    const from = fromRef.current
    if (from === target) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      const v = Math.round(from + (target - from) * eased)
      fromRef.current = v
      setDisplay(v)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, reduced])

  return <>{display.toLocaleString('en-IN')}</>
}

// Counts up from 0 the first time it is visible
const CountUp = ({ end, decimals = 0, suffix = '', duration = 1600 }) => {
  const [ref, inView] = useInView(0.4)
  const reduced = usePrefersReducedMotion()
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setVal(end)
      return
    }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      setVal(end * (1 - Math.pow(1 - t, 3)))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, end, duration, reduced])

  return (
    <span ref={ref} className="tabular-nums">
      {val.toFixed(decimals)}
      {suffix}
    </span>
  )
}

// Soft light that follows the cursor inside a card
const handleSpotlight = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

/* ---------------------------------------------------------------------------
   Data
--------------------------------------------------------------------------- */

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    Icon: Rocket,
    pricing: {
      triennial: { price: '120', wasPrice: '400', savings: '70% SAVINGS', payInfo: 'Pay Rs 4,320 today for 3 full years.', renewInfo: 'Renews at same price on 9 October, 2029' },
      annual: { price: '180', wasPrice: '240', savings: '25% SAVINGS', payInfo: 'Pay Rs 2,160 today for 1 full year.', renewInfo: 'Renews at same price on 9 October, 2029' },
    },
    isPopular: false,
    features: [
      { label: 'Websites', value: '1 WEBSITE', isBlue: false },
      { label: 'Disk', value: '5GB', isBlue: false },
      { label: 'Bandwidth', value: 'UNLIMITED', isBlue: true },
      { label: 'Email', value: '5 ACCOUNTS', isBlue: false },
      { label: 'Backup', value: 'WEEKLY', isBlue: false },
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    Icon: Sprout,
    pricing: {
      triennial: { price: '240', wasPrice: '800', savings: '70% SAVINGS', payInfo: 'Pay Rs 8,640 today for 3 full years.', renewInfo: 'Renews at same price on 9 October, 2029' },
      annual: { price: '360', wasPrice: '480', savings: '25% SAVINGS', payInfo: 'Pay Rs 4,320 today for 1 full year.', renewInfo: 'Renews at same price on 9 October, 2029' },
    },
    isPopular: false,
    features: [
      { label: 'Websites', value: 'UNLIMITED', isBlue: true },
      { label: 'Disk', value: 'UNLIMITED', isBlue: true },
      { label: 'Bandwidth', value: 'UNLIMITED', isBlue: true },
      { label: 'Email', value: '10 ACCOUNTS', isBlue: false },
      { label: 'Backup', value: 'DAILY', isBlue: false },
    ],
  },
  {
    id: 'east-host',
    name: 'Bluefox Hoster',
    subtitle: 'Best for growing businesses',
    Icon: Zap,
    pricing: {
      triennial: { price: '420', wasPrice: '1,400', savings: '70% SAVINGS', payInfo: 'Pay Rs 15,120 today for 3 full years.', renewInfo: 'Renews at same price on 9 October, 2029' },
      annual: { price: '620', wasPrice: '840', savings: '26% SAVINGS', payInfo: 'Pay Rs 7,440 today for 1 full year.', renewInfo: 'Renews at same price on 9 October, 2029' },
    },
    isPopular: true,
    popularTag: '★ TOP CHOICE • MOST POPULAR',
    features: [
      { label: 'Websites', value: 'UNLIMITED', isBlue: true },
      { label: 'Disk', value: 'UNLIMITED', isBlue: true },
      { label: 'Bandwidth', value: 'UNLIMITED', isBlue: true },
      { label: 'Email', value: 'UNLIMITED', isBlue: true },
      { label: 'Backup', value: 'DAILY', isBlue: false },
    ],
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    Icon: Gem,
    pricing: {
      triennial: { price: '720', wasPrice: '2,400', savings: '70% SAVINGS', payInfo: 'Pay Rs 25,920 today for 3 full years.', renewInfo: 'Renews at same price on 9 October, 2029' },
      annual: { price: '980', wasPrice: '1,200', savings: '18% SAVINGS', payInfo: 'Pay Rs 11,760 today for 1 full year.', renewInfo: 'Renews at same price on 9 October, 2029' },
    },
    isPopular: false,
    features: [
      { label: 'Websites', value: 'UNLIMITED', isBlue: true },
      { label: 'Disk', value: 'UNLIMITED', isBlue: true },
      { label: 'Bandwidth', value: 'UNLIMITED', isBlue: true },
      { label: 'Email', value: 'UNLIMITED', isBlue: true },
      { label: 'Backup', value: 'DAILY', isBlue: false },
    ],
  },
]

const guarantees = [
  { Icon: ShieldCheck, text: '30-Day Money-Back Guarantee' },
  { Icon: Zap, text: '99.9% Uptime Guarantee' },
  { Icon: Headset, text: '24/7/365 Expert Support' },
]

/* ---------------------------------------------------------------------------
   Component
--------------------------------------------------------------------------- */

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('triennial')

  const gradientBtnStyle = `
    btn-shine w-full py-3.5 px-4 rounded-xl text-white font-semibold text-sm
    bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8]
    transition-all duration-300 ease-in-out
    hover:from-[#1e88e5] hover:to-[#1565c0]
    hover:shadow-[0_12px_28px_rgba(30,136,229,0.55)]
    hover:-translate-y-0.5 active:scale-95
    flex items-center justify-center gap-2 cursor-pointer border-none
  `

  return (
    <section
      id="server-plans"
      className="pricing-root site-section relative scroll-mt-28 w-full overflow-hidden bg-slate-50/60 py-16 font-sans sm:py-20"
    >
      <style>{`
        @keyframes pricingFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes pricingBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(24px, -18px) scale(1.08); }
        }
        @keyframes pricingGradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes pricingSwap {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pricingBadgeShine {
          0% { transform: translateX(-120%); }
          60%, 100% { transform: translateX(120%); }
        }
        .pricing-float { animation: pricingFloat 4s ease-in-out infinite; }
        .pricing-blob { animation: pricingBlob 14s ease-in-out infinite; }
        .pricing-ring { background-size: 200% 100%; animation: pricingGradient 5s linear infinite; }
        .pricing-swap { animation: pricingSwap 0.45s ease-out both; }

        .badge-shine { position: relative; overflow: hidden; }
        .badge-shine::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%);
          animation: pricingBadgeShine 3.2s ease-in-out infinite;
        }

        .btn-shine { position: relative; overflow: hidden; }
        .btn-shine::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%);
          transform: translateX(-120%); transition: transform 0.7s ease;
        }
        .btn-shine:hover::after { transform: translateX(120%); }

        .feat-row { opacity: 0; transform: translateX(-10px); transition: opacity 0.5s ease-out, transform 0.5s ease-out; }
        .is-visible .feat-row { opacity: 1; transform: translateX(0); }

        @media (prefers-reduced-motion: reduce) {
          .pricing-root *, .pricing-root *::before, .pricing-root *::after {
            animation: none !important;
            transition: none !important;
          }
          .pricing-root .feat-row { opacity: 1; transform: none; }
        }
      `}</style>

      {/* Decorative drifting glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="pricing-blob absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="pricing-blob absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl" style={{ animationDelay: '-7s' }} />
      </div>

      <div className="site-container relative z-10">
        {/* ================= 1. HEADER SECTION ================= */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <Reveal className="text-left">
            <span
              key={billingCycle}
              className="pricing-swap mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 shadow-sm"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />
              {billingCycle === 'triennial' ? 'Special Triennial Discount Active' : 'Flexible Annual Pricing Available'}
            </span>
            <h2 className="section-title font-extrabold tracking-tight text-slate-900">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-[#0c73d5] to-[#1e88e5] bg-clip-text text-transparent">
                Unlimited Hosting
              </span>{' '}
              Plan
            </h2>
            <p className="mt-1 text-sm text-slate-500 sm:text-base">Plans made to match your needs and budget</p>
          </Reveal>

          {/* Billing Cycle Toggle with sliding highlight */}
          <Reveal delay={150} className="self-start md:self-auto">
            <div
              role="group"
              aria-label="Billing cycle"
              className="relative grid w-full max-w-sm grid-cols-2 rounded-2xl border border-slate-200 bg-white p-1 shadow-sm sm:w-auto sm:min-w-[19rem]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] shadow-md transition-transform duration-500 ease-in-out"
                style={{ transform: billingCycle === 'triennial' ? 'translateX(100%)' : 'translateX(0)' }}
              />
              <button
                type="button"
                aria-pressed={billingCycle === 'annual'}
                onClick={() => setBillingCycle('annual')}
                className={`relative z-10 cursor-pointer rounded-xl border-none bg-transparent px-2 py-2.5 text-xs font-bold transition-colors duration-300 sm:px-4 ${
                  billingCycle === 'annual' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Annually
              </button>
              <button
                type="button"
                aria-pressed={billingCycle === 'triennial'}
                onClick={() => setBillingCycle('triennial')}
                className={`relative z-10 flex cursor-pointer items-center justify-center gap-1.5 rounded-xl border-none bg-transparent px-2 py-2.5 text-xs font-bold transition-colors duration-300 sm:px-4 ${
                  billingCycle === 'triennial' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Triennially</span>
                <span
                  className={`badge-shine rounded-md px-1.5 py-0.5 text-[9px] font-extrabold transition-colors duration-300 ${
                    billingCycle === 'triennial' ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'
                  }`}
                >
                  70% OFF
                </span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* ================= 2. PRICING CARDS GRID ================= */}
        <div className="mb-14 grid grid-cols-1 items-stretch gap-6 pt-3 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => {
            const currentPlan = plan.pricing[billingCycle]
            const { Icon } = plan

            return (
              <Reveal
                key={plan.id}
                delay={index * 120}
                className={`h-full ${plan.isPopular ? 'xl:z-10 xl:scale-[1.03]' : ''}`}
              >
                <div
                  onMouseMove={handleSpotlight}
                  className={`group relative h-full rounded-3xl p-[1.5px] transition-all duration-500 hover:-translate-y-2 ${
                    plan.isPopular
                      ? 'bg-slate-200/80 shadow-[0_24px_60px_-18px_rgba(30,136,229,0.5)]'
                      : 'bg-slate-200/80 shadow-sm hover:shadow-[0_24px_50px_-20px_rgba(15,23,42,0.35)]'
                  }`}
                >
                  {/* Gradient border: always on for the popular plan, on hover for the others */}
                  <span
                    aria-hidden="true"
                    className={`pricing-ring pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0c73d5] via-[#6bb6ff] to-[#0c73d5] transition-opacity duration-500 ${
                      plan.isPopular ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />

                  {/* Featured Badge */}
                  {plan.isPopular && (
                    <div className="pricing-float badge-shine absolute -top-4 left-0 right-0 z-20 mx-auto w-max max-w-[92%] rounded-full bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-4 py-1.5 text-center text-[10px] font-extrabold uppercase tracking-wider text-white shadow-lg">
                      {plan.popularTag}
                    </div>
                  )}

                  <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[22.5px] bg-white p-6">
                    {/* Cursor spotlight */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          'radial-gradient(280px circle at var(--mx, 50%) var(--my, 0%), rgba(30,136,229,0.10), transparent 60%)',
                      }}
                    />

                    <div className="relative">
                      {/* Header Row */}
                      <div className="mb-2 flex items-center justify-between pt-1">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                            {plan.name}
                          </h3>
                          {plan.subtitle && <p className="text-[11px] text-slate-400">{plan.subtitle}</p>}
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                      </div>

                      {/* Price Display */}
                      <div className="my-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-lg font-bold text-slate-800">₹</span>
                          <span className="text-4xl font-black tracking-tight tabular-nums text-slate-900">
                            <AnimatedNumber value={currentPlan.price} />
                          </span>
                          <span className="text-xs font-medium text-slate-500">/mo</span>
                        </div>

                        <div className="mt-1 flex flex-wrap items-center gap-2">
                          <span className="text-xs tabular-nums text-slate-400 line-through">
                            Was ₹<AnimatedNumber value={currentPlan.wasPrice} />/mo
                          </span>
                          <span
                            key={`${plan.id}-${billingCycle}`}
                            className="pricing-swap rounded border border-blue-100 bg-blue-50 px-2 py-0.5 text-[9px] font-extrabold text-blue-600"
                          >
                            {currentPlan.savings}
                          </span>
                        </div>
                      </div>

                      {/* Savings Subcard Box */}
                      <div
                        key={`${plan.id}-info-${billingCycle}`}
                        className="pricing-swap mb-6 space-y-0.5 rounded-2xl border border-slate-100 bg-slate-50 p-3 text-[11px] text-slate-500 transition-colors duration-300 group-hover:bg-blue-50/50"
                      >
                        <p className="font-semibold text-slate-700">{currentPlan.payInfo}</p>
                        <p className="text-[10px] text-slate-400">{currentPlan.renewInfo}</p>
                      </div>

                      {/* Action Button */}
                      <div className="mb-6">
                        <button type="button" className={gradientBtnStyle}>
                          <span>Order Now</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                        </button>
                      </div>

                      {/* Features */}
                      <div className="border-t border-slate-100 pt-4">
                        <span className="mb-3 block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Included Features
                        </span>

                        <div className="space-y-3 text-xs">
                          {plan.features.map((feat, idx) => (
                            <div
                              key={feat.label}
                              className="feat-row flex items-center justify-between"
                              style={{ transitionDelay: `${300 + idx * 90}ms` }}
                            >
                              <span className="flex items-center gap-2 font-medium text-slate-500">
                                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                  <Check className="h-2.5 w-2.5" strokeWidth={3} aria-hidden="true" />
                                </span>
                                {feat.label}
                              </span>
                              <span
                                className={`font-bold ${
                                  feat.isBlue
                                    ? 'rounded bg-blue-50 px-2 py-0.5 text-[10px] text-blue-600'
                                    : 'text-[11px] text-slate-800'
                                }`}
                              >
                                {feat.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* ================= 3. BOTTOM STATS BANNER ================= */}
        <Reveal className="mb-12">
          <div className="relative overflow-hidden rounded-3xl border border-blue-400/30 bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] p-6 text-white shadow-xl transition-shadow duration-500 hover:shadow-[0_16px_36px_rgba(30,136,229,0.55)] sm:p-8">
            <div aria-hidden="true" className="pricing-blob pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div aria-hidden="true" className="pricing-blob pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" style={{ animationDelay: '-6s' }} />

            <div className="relative grid grid-cols-2 gap-6 divide-x-0 text-center md:grid-cols-4 md:divide-x md:divide-blue-400/30">
              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center p-2 transition-transform duration-300 hover:scale-105">
                <span className="mb-1 text-3xl font-extrabold sm:text-4xl">
                  <CountUp end={99.9} decimals={1} suffix="%" />
                </span>
                <span className="text-xs font-medium text-blue-100">Uptime Guarantee</span>
                <div className="mt-2 flex gap-1">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center p-2 transition-transform duration-300 hover:scale-105">
                <span className="mb-1 text-3xl font-extrabold sm:text-4xl">
                  <CountUp end={70} suffix="%" />
                </span>
                <span className="text-xs font-medium text-blue-100">Triennial Plan Savings</span>
                <div className="mt-2 h-1.5 w-16 overflow-hidden rounded-full bg-white/20">
                  <div className="h-full w-3/4 animate-pulse rounded-full bg-emerald-400" />
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center p-2 transition-transform duration-300 hover:scale-105">
                <span className="mb-1 text-3xl font-extrabold sm:text-4xl">Daily</span>
                <span className="text-xs font-medium text-blue-100">Growth+ Plan Backups</span>
                <div className="mt-2 flex h-3 items-end gap-1">
                  <span className="h-2 w-1 rounded-sm bg-white/40" />
                  <span className="h-3 w-1 rounded-sm bg-white/70" />
                  <span className="h-full w-1 rounded-sm bg-emerald-400" />
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center justify-center p-2 transition-transform duration-300 hover:scale-105">
                <span className="mb-1 text-3xl font-extrabold sm:text-4xl">24 / 7</span>
                <span className="text-xs font-medium text-blue-100">Expert Support Available</span>
                <div className="mt-2 flex items-center gap-1.5 text-[10px] font-bold text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Always On
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ================= 4. FOOTER GUARANTEES ================= */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {guarantees.map(({ Icon, text }, i) => (
            <Reveal key={text} delay={i * 120}>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700 hover:shadow-md">
                <Icon className="h-4 w-4 text-blue-600" aria-hidden="true" />
                <span>{text}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection