import { Check, X, Zap, Shield, Headphones, BarChart3, ArrowRight, Globe, Cloud, ShoppingCart, Server } from 'lucide-react';
import WebHostingLogo from '../assets/webhosting.svg';
import CloudHostingLogo from '../assets/Cloudhosting.avif';
import WordPressLogo from '../assets/wordpress.svg';
import EcommerceLogo from '../assets/ecom.svg';

const BTN_PRIMARY = 'rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md transition-all duration-300 hover:to-[#1565c0] hover:shadow-[0_12px_28px_rgba(30,136,229,0.45)] hover:-translate-y-0.5 active:scale-95 cursor-pointer';

const plans = [
  {
    logo: WebHostingLogo,
    icon: Globe,
    title: 'Web Hosting',
    color: 'from-blue-500 to-blue-700',
    badge: 'Most Popular',
    badgeColor: 'bg-blue-100 text-blue-700',
    desc: 'Perfect for personal blogs, portfolios, and small business sites. Fast, reliable, and affordable.',
    features: ['Free SSL Certificate', 'Unlimited Bandwidth', '10 GB SSD Storage', 'cPanel Included'],
    price: 'Rs 120/mo',
  },
  {
    logo: CloudHostingLogo,
    icon: Cloud,
    title: 'Cloud Hosting',
    color: 'from-violet-500 to-purple-700',
    badge: 'Scalable',
    badgeColor: 'bg-violet-100 text-violet-700',
    desc: 'Auto-scaling cloud infrastructure for growing businesses. Zero downtime, maximum performance.',
    features: ['Auto-Scaling Resources', '99.98% Uptime SLA', 'Daily Cloud Backups', 'DDoS Protection'],
    price: 'Rs 450/mo',
  },
  {
    logo: WordPressLogo,
    icon: Server,
    title: 'WordPress Hosting',
    color: 'from-sky-500 to-cyan-700',
    badge: 'Optimized',
    badgeColor: 'bg-sky-100 text-sky-700',
    desc: 'Tuned exclusively for WordPress with pre-installed plugins, caching, and one-click updates.',
    features: ['Pre-installed WordPress', 'LiteSpeed Cache', 'Staging Environment', 'Auto WP Updates'],
    price: 'Rs 199/mo',
  },
  {
    logo: EcommerceLogo,
    icon: ShoppingCart,
    title: 'eCommerce Hosting',
    color: 'from-emerald-500 to-teal-700',
    badge: 'Best for Stores',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    desc: 'Built for WooCommerce, Shopify-compatible stacks, and high-traffic online stores in Nepal.',
    features: ['PCI-DSS Ready', 'Free SSL + CDN', 'WooCommerce Optimized', '24/7 Priority Support'],
    price: 'Rs 349/mo',
  },
];

const comparison = [
  {
    feature: 'Storage',
    web: '10 GB SSD',
    cloud: '50 GB NVMe',
    wp: '20 GB SSD',
    ecom: '40 GB SSD',
  },
  {
    feature: 'Bandwidth',
    web: 'Unlimited',
    cloud: 'Unlimited',
    wp: 'Unlimited',
    ecom: 'Unlimited',
  },
  {
    feature: 'Free SSL',
    web: true,
    cloud: true,
    wp: true,
    ecom: true,
  },
  {
    feature: '24/7 Support',
    web: true,
    cloud: true,
    wp: true,
    ecom: true,
  },
  {
    feature: 'Daily Backups',
    web: false,
    cloud: true,
    wp: true,
    ecom: true,
  },
];

const stats = [
  { value: '99.98%', label: 'Uptime Guarantee', icon: Zap },
  { value: '5,000+', label: 'Sites Hosted', icon: Globe },
  { value: '24/7', label: 'Expert Support', icon: Headphones },
];

const Cell = ({ val }) => {
  if (val === true) return <Check className="mx-auto text-emerald-500" size={20} strokeWidth={2.5} />;
  if (val === false) return <X className="mx-auto text-rose-400" size={20} strokeWidth={2.5} />;
  return <span className="text-slate-600 text-sm font-medium">{val}</span>;
};

export function HostingOptionsHero({ onBack }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#061b3f] py-24 px-4">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-violet-700/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300">
            01 — Hosting Plans
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            The Right Home for <br />
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Every Website</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            From personal blogs to enterprise eCommerce — Blue Fox Hoster has a plan built for you.
            All plans include free SSL, 99.98% uptime, and 24/7 Nepal-based support.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className={BTN_PRIMARY}>
              Explore Plans <ArrowRight className="ml-2 inline-block" size={16} />
            </button>
            <button className="rounded-xl border border-slate-500 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-white/10">
              Compare All Plans
            </button>
          </div>
          {/* floating pills */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {['cPanel Included', 'Free Migration', 'SSD Storage', 'Nepal Servers', 'eSewa / Khalti'].map((t) => (
              <span key={t} className="rounded-full border border-blue-400/20 bg-white/5 px-4 py-1.5 text-xs text-slate-300">
                ✓ {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLAN CARDS 2x2 ── */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">Choose Your Hosting Plan</h2>
          <p className="mt-3 text-slate-500">Flexible plans. No hidden fees. Pay with eSewa, Khalti, IME Pay, or Bank Transfer.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.title}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
              >
                {/* gradient top strip */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${plan.color}`} />
                <div className="flex flex-1 flex-col p-7">
                  {/* header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${plan.color} p-2 shadow-md`}>
                        <img src={plan.logo} alt={plan.title} className="h-9 w-9 object-contain" />
                      </div>
                      <div>
                        <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${plan.badgeColor}`}>
                          {plan.badge}
                        </span>
                        <h3 className="mt-0.5 text-xl font-bold text-slate-800">{plan.title}</h3>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-2xl font-extrabold text-slate-800">{plan.price}</p>
                      <p className="text-xs text-slate-400">billed monthly</p>
                    </div>
                  </div>
                  {/* desc */}
                  <p className="mt-4 text-sm text-slate-500 leading-relaxed">{plan.desc}</p>
                  {/* features */}
                  <ul className="mt-5 space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    <button className={`w-full ${BTN_PRIMARY} text-center`}>
                      Get Started — {plan.price}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="bg-white py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">Side-by-Side Comparison</h2>
            <p className="mt-3 text-slate-500">See exactly what's included in each plan before you commit.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="min-w-full text-center">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="py-4 px-5 text-left text-sm font-semibold text-slate-500">Feature</th>
                  {['Web', 'Cloud', 'WordPress', 'eCommerce'].map((h) => (
                    <th key={h} className="py-4 px-5 text-sm font-bold text-slate-700">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-slate-100 transition hover:bg-blue-50/40 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}`}>
                    <td className="py-4 px-5 text-left text-sm font-semibold text-slate-700">{row.feature}</td>
                    <td className="py-4 px-5"><Cell val={row.web} /></td>
                    <td className="py-4 px-5"><Cell val={row.cloud} /></td>
                    <td className="py-4 px-5"><Cell val={row.wp} /></td>
                    <td className="py-4 px-5"><Cell val={row.ecom} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-gradient-to-br from-[#061b3f] to-[#0c2d6b] py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Trusted by Businesses Across Nepal</h2>
            <p className="mt-3 text-blue-200">Numbers that speak for themselves.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                  <Icon size={28} />
                </div>
                <p className="text-4xl font-extrabold text-white">{value}</p>
                <p className="mt-2 text-sm font-medium text-blue-200">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-6 text-blue-200 text-sm">All plans accept eSewa, Khalti, IME Pay, or Bank Transfer</p>
            <button className={BTN_PRIMARY}>
              Start Hosting Today <ArrowRight className="ml-2 inline-block" size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HostingOptionsHero;