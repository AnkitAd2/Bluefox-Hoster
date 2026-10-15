import {
  Check, ArrowRight, TrendingUp, Settings, Tag, Headphones,
  Package, ShieldCheck, BarChart2, Mail, Users, Globe, ChevronRight
} from 'lucide-react';

const BTN_PRIMARY = 'rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md transition-all duration-300 hover:to-[#1565c0] hover:shadow-[0_12px_28px_rgba(30,136,229,0.45)] hover:-translate-y-0.5 active:scale-95 cursor-pointer';

const resellerFeatures = [
  'WHM + cPanel Control Panel',
  'Free White-Label Nameservers',
  'Unlimited Client Accounts',
  'Free Site Migrations',
  'WHMCS Billing Integration',
  'Private Name Servers',
  '24/7 Reseller Support',
  'Full Root DNS Control',
];

const toolkitFeatures = [
  'Advanced SEO Tools Suite',
  'SSL + Web Firewall Bundle',
  'Priority Technical Support',
  'Analytics & Traffic Dashboard',
  'Email Marketing Platform',
  'Google Workspace Integration',
  'Social Media Scheduler',
  'Monthly Performance Reports',
];

const whyResell = [
  {
    icon: TrendingUp,
    title: 'High Profit Margins',
    desc: 'Buy at wholesale rates, resell at your price. Keep 100% of the profit margin with zero revenue sharing.',
    color: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  {
    icon: Settings,
    title: 'Full Reseller Control',
    desc: 'Manage all client accounts from one WHM dashboard. Create, suspend, and configure accounts instantly.',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    icon: Tag,
    title: 'Complete White Label',
    desc: "Your brand, your identity. Custom nameservers and control panel branding — clients never see Blue Fox.",
    color: 'bg-violet-50 text-violet-600 border-violet-100',
  },
  {
    icon: Headphones,
    title: '24/7 Expert Backup',
    desc: 'We support you so you can support your clients. Our team is always on standby for technical escalations.',
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
];

const steps = [
  {
    num: '01',
    title: 'Choose Your Plan',
    desc: 'Pick Reseller Hosting or the 360° Business Toolkit based on your agency needs and client size.',
    icon: Package,
  },
  {
    num: '02',
    title: 'Configure Your Brand',
    desc: "Set up your custom nameservers, logo, and branding. We'll help you white-label everything in under an hour.",
    icon: Tag,
  },
  {
    num: '03',
    title: 'Start Selling',
    desc: 'Onboard clients, set your prices, and watch your revenue grow. We handle the infrastructure — you handle clients.',
    icon: TrendingUp,
  },
];

export function BusinessHostingHero({ onBack }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1c0a00] via-[#3b1a00] to-[#1c0a00] py-24 px-4">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-orange-600/20 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-16 h-56 w-56 rounded-full bg-amber-700/10 blur-2xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300">
            04 — Business &amp; Agency
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Launch Your Own <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Hosting Brand
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-amber-100/80">
            Become a hosting provider or supercharge your agency with our Reseller Hosting and
            360° Business Toolkit. Full white-label. Full control. Full profit.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className={BTN_PRIMARY}>
              View Reseller Plans <ArrowRight className="ml-2 inline-block" size={16} />
            </button>
            <button className="rounded-xl border border-amber-400/40 px-6 py-3.5 text-sm font-semibold text-amber-200 transition hover:bg-white/10">
              Talk to Sales
            </button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {['WHM + cPanel', 'Free White-Label', 'WHMCS Ready', 'Unlimited Clients', 'Nepal Support'].map((t) => (
              <span key={t} className="rounded-full border border-amber-400/20 bg-white/5 px-4 py-1.5 text-xs text-amber-200">
                ✓ {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO PLANS ── */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">Two Powerful Business Plans</h2>
          <p className="mt-3 text-slate-500">
            Whether you're starting a hosting brand or scaling an agency — we have you covered.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Reseller Hosting Card */}
          <div className="relative flex flex-col rounded-2xl border-2 border-amber-400 bg-white shadow-xl overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 to-orange-500" />
            <div className="flex flex-1 flex-col p-8">
              <div className="flex items-center gap-3 mb-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-md">
                  <Globe size={22} className="text-white" />
                </div>
                <div>
                  <span className="inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                    Best for Startups
                  </span>
                  <h3 className="text-xl font-bold text-slate-800">Reseller Hosting</h3>
                </div>
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-slate-800">Rs 1,850</span>
                <span className="mb-1 text-slate-400 text-sm">/mo</span>
              </div>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Start your own hosting company with full white-label infrastructure, WHM + cPanel, and WHMCS billing.
              </p>
              <ul className="mt-6 space-y-3">
                {resellerFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600 border border-amber-100">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button className={`w-full ${BTN_PRIMARY} text-center`}>
                  Start Reselling — Rs 1,850/mo
                </button>
              </div>
            </div>
          </div>

          {/* 360° Business Toolkit Card */}
          <div className="relative flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-shadow overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-violet-600" />
            <div className="flex flex-1 flex-col p-8">
              <div className="flex items-center gap-3 mb-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-md">
                  <BarChart2 size={22} className="text-white" />
                </div>
                <div>
                  <span className="inline-block rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-semibold text-violet-700">
                    Best for Agencies
                  </span>
                  <h3 className="text-xl font-bold text-slate-800">360° Business Toolkit</h3>
                </div>
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-slate-800">Rs 950</span>
                <span className="mb-1 text-slate-400 text-sm">/mo</span>
              </div>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                A complete agency growth suite — SEO tools, email marketing, firewall, analytics, and priority support in one bundle.
              </p>
              <ul className="mt-6 space-y-3">
                {toolkitFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button className={`w-full ${BTN_PRIMARY} text-center`}>
                  Get Toolkit — Rs 950/mo
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-slate-400">
          Pay with eSewa, Khalti, IME Pay, or Bank Transfer · Cancel anytime · Free onboarding assistance
        </p>
      </section>

      {/* ── WHY RESELL CARDS ── */}
      <section className="bg-white py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-600">
              Why Resell with Blue Fox?
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-800">Built for Your Business Growth</h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">Everything you need to run a professional hosting business under your own brand.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyResell.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-slate-200"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${color}`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-slate-800">{title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GETTING STARTED STEPS ── */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300">
              Getting Started
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">Up and Running in 3 Simple Steps</h2>
            <p className="mt-3 text-slate-400">No technical expertise required to launch your hosting brand.</p>
          </div>

          <div className="relative grid gap-8 md:grid-cols-3">
            {/* connector line */}
            <div className="hidden md:block absolute top-10 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px bg-gradient-to-r from-amber-500/50 via-amber-400/70 to-amber-500/50" />

            {steps.map(({ num, title, desc, icon: Icon }) => (
              <div key={num} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/30 mb-5">
                  <Icon size={28} className="text-white" />
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-extrabold text-amber-600 shadow">
                    {num}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-xs">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button className={BTN_PRIMARY}>
              Launch Your Hosting Brand <ArrowRight className="ml-2 inline-block" size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BusinessHostingHero;