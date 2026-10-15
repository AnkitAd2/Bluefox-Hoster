import { Check, ArrowRight, Terminal, GitBranch, Zap, Code2, Coffee } from 'lucide-react';
import DjangoLogo from '../assets/django.svg';
import PythonLogo from '../assets/python logo.webp';
import NodejsLogo from '../assets/nodejs-logo.svg';

const BTN_PRIMARY = 'rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md transition-all duration-300 hover:to-[#1565c0] hover:shadow-[0_12px_28px_rgba(30,136,229,0.45)] hover:-translate-y-0.5 active:scale-95 cursor-pointer';

const languages = [
  {
    name: 'Bluefox Java',
    price: 'Rs 350/mo',
    icon: Coffee,
    logo: null,
    gradient: 'from-orange-500 to-red-600',
    badgeColor: 'bg-orange-50 text-orange-700 border-orange-100',
    badge: 'Enterprise Ready',
    features: [
      'Tomcat & Spring Boot Support',
      'JVM Tuning & Heap Config',
      'Maven / Gradle Build Pipeline',
      'SSH + Git Deployment',
    ],
  },
  {
    name: 'Django Hosting',
    price: 'Rs 290/mo',
    icon: null,
    logo: DjangoLogo,
    gradient: 'from-green-600 to-emerald-700',
    badgeColor: 'bg-green-50 text-green-700 border-green-100',
    badge: 'Python Powered',
    features: [
      'Django 4.x + Gunicorn + Nginx',
      'PostgreSQL & Redis Included',
      'Auto collectstatic on Deploy',
      'Virtual Env Isolation',
    ],
  },
  {
    name: 'Python Hosting',
    price: 'Rs 290/mo',
    icon: null,
    logo: PythonLogo,
    gradient: 'from-yellow-500 to-blue-600',
    badgeColor: 'bg-yellow-50 text-yellow-700 border-yellow-100',
    badge: 'Versatile',
    features: [
      'Flask / FastAPI / Starlette',
      'pip + requirements.txt Deploy',
      'Python 3.10 / 3.11 / 3.12',
      'Cron Jobs + Background Tasks',
    ],
  },
  {
    name: 'Node.js Hosting',
    price: 'Rs 250/mo',
    icon: null,
    logo: NodejsLogo,
    gradient: 'from-lime-500 to-green-600',
    badgeColor: 'bg-lime-50 text-lime-700 border-lime-100',
    badge: 'Most Popular',
    features: [
      'Node.js 18 / 20 LTS',
      'npm / yarn / pnpm Support',
      'PM2 Process Management',
      'WebSocket & Socket.io Ready',
    ],
  },
];

const devFeatures = [
  {
    icon: GitBranch,
    title: 'SSH + Git CI/CD',
    desc: 'Push to deploy. Connect your GitHub, GitLab, or Bitbucket repo and go live on every commit with zero-downtime deployments.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Code2,
    title: 'Any Framework Supported',
    desc: 'From Spring Boot to FastAPI to Next.js — our stack-agnostic servers run any language, any framework, any version you need.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Zap,
    title: 'Instant Deployment',
    desc: 'Zero cold starts. Your app is live within seconds of a push. NVMe SSD storage and optimized runtime containers ensure blazing speed.',
    color: 'from-amber-500 to-orange-500',
  },
];

const terminalLines = [
  { text: '$ git push origin production', color: 'text-slate-300' },
  { text: '  Counting objects: 48, done.', color: 'text-slate-500' },
  { text: '  Compressing objects: 100%', color: 'text-slate-500' },
  { text: '  → Bluefox CI received push', color: 'text-blue-400' },
  { text: '  ✔ Installing dependencies...', color: 'text-yellow-400' },
  { text: '  ✔ Running build pipeline...', color: 'text-yellow-400' },
  { text: '  ✔ Build successful', color: 'text-emerald-400 font-bold' },
  { text: '  ✔ Deploying to production...', color: 'text-emerald-400' },
  { text: '  🚀 Live at: yourapp.bluefox.com.np', color: 'text-blue-300 font-semibold' },
];

export function CodeBasedHero({ onBack }) {
  return (
    <div className="min-h-screen bg-slate-950 font-mono">

      {/* ── HERO / TERMINAL ── */}
      <section className="relative overflow-hidden bg-slate-900 py-20 px-4">
        {/* grid bg */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="pointer-events-none absolute top-0 left-1/3 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-violet-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
              02 — Code Based Hosting
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white font-mono">
              Deploy Any Language Stack
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                in Minutes
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 font-sans">
              Java, Python, Django, Node.js — bring your code, we handle the infrastructure.
              CI/CD pipelines, SSH access, and NVMe servers built for developers.
            </p>
          </div>

          {/* Terminal window */}
          <div className="mx-auto max-w-2xl rounded-2xl border border-slate-700 bg-slate-800 shadow-2xl shadow-black/50 overflow-hidden">
            {/* terminal title bar */}
            <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800/80 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
              <span className="ml-4 flex items-center gap-2 text-xs text-slate-500">
                <Terminal size={12} /> bash — bluefox-deploy
              </span>
            </div>
            {/* terminal body */}
            <div className="px-5 py-5 space-y-1.5">
              {terminalLines.map((line, i) => (
                <p key={i} className={`text-sm leading-relaxed ${line.color}`}>
                  {line.text}
                </p>
              ))}
              <span className="inline-block w-2 h-4 bg-blue-400 animate-pulse rounded-sm mt-1" />
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className={BTN_PRIMARY}>
              Deploy Your App <ArrowRight className="ml-2 inline-block" size={16} />
            </button>
            <button className="rounded-xl border border-slate-600 px-6 py-3.5 text-sm font-semibold text-slate-300 font-sans transition hover:bg-white/5">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* ── LANGUAGE CARDS ── */}
      <section className="bg-slate-950 py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">Pick Your Language Stack</h2>
            <p className="mt-3 text-slate-400 font-sans">
              Purpose-built environments — not generic shared servers. Real performance, real developer tools.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {languages.map(({ name, price, icon: Icon, logo, gradient, badgeColor, badge, features }) => (
              <div
                key={name}
                className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-600 hover:shadow-2xl hover:shadow-black/60 overflow-hidden"
              >
                <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />
                <div className="flex flex-1 flex-col p-6">
                  {/* icon/logo */}
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} p-2.5 shadow-lg`}>
                    {logo ? (
                      <img src={logo} alt={name} className="h-9 w-9 object-contain" />
                    ) : (
                      Icon && <Icon size={26} className="text-white" />
                    )}
                  </div>
                  <span className={`inline-block w-fit rounded-full border px-2.5 py-0.5 text-xs font-semibold font-sans ${badgeColor}`}>
                    {badge}
                  </span>
                  <h3 className="mt-1.5 text-lg font-bold text-white font-sans">{name}</h3>
                  <p className="mt-1 text-2xl font-extrabold text-white font-sans">{price}</p>

                  <ul className="mt-5 space-y-2.5 flex-1">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-400 font-sans">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-800 text-emerald-400">
                          <Check size={10} strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button className={`mt-6 w-full ${BTN_PRIMARY} text-center font-sans`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-500 font-sans">
            All plans include SSH access · Free SSL · Daily backups · 24/7 support
          </p>
        </div>
      </section>

      {/* ── DEV FEATURES ── */}
      <section className="bg-slate-900 py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">Developer-First Infrastructure</h2>
            <p className="mt-3 text-slate-400 font-sans max-w-xl mx-auto">
              Tools that get out of your way so you can ship faster.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {devFeatures.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-7 transition hover:border-slate-600 hover:bg-slate-800"
              >
                <div className={`mb-5 inline-flex h-13 w-13 h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} shadow-lg`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white font-sans">{title}</h3>
                <p className="mt-2.5 text-sm text-slate-400 leading-relaxed font-sans">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white uppercase tracking-widest font-sans">
            <Zap size={12} /> Ready to Deploy?
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white font-sans">
            Your code deserves better than generic hosting.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-blue-100 font-sans text-base">
            Get your Java, Django, Python, or Node.js app live in under 5 minutes.
            Pay with eSewa, Khalti, IME Pay, or Bank Transfer.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-blue-700 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 cursor-pointer font-sans">
              Deploy Now — From Rs 250/mo
            </button>
            <button className="rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white font-sans transition hover:bg-white/10">
              View All Stacks
            </button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['No Lock-in', 'SSH Access', 'Git Deploy', 'NVMe SSD', '24/7 Dev Support'].map((t) => (
              <span key={t} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-blue-100 font-sans">
                ✓ {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CodeBasedHero;