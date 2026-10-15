import React from 'react';
import { FaAws, FaMicrosoft } from 'react-icons/fa6';
import { SiGoogle, SiGooglecloud, SiNordvpn, SiZoho, SiZoom } from 'react-icons/si';
import {
  Check, Shield, Zap, Globe, Mail, Cloud, Users, Lock,
  BarChart3, Video, ShieldCheck, ArrowRight, Star
} from 'lucide-react';

import Microsoft365 from '../assets/365.svg';
import Azure from '../assets/azure.avif';
import Copilot from '../assets/copilotplan.avif';
import LTSC from '../assets/ltsc.svg';
import PowerBI from '../assets/begin-journey.avif';

/* ─────────────────────── shared primitives ─────────────────────── */
const BTN_PRIMARY =
  'rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:to-[#1565c0] hover:shadow-[0_12px_28px_rgba(30,136,229,0.45)] hover:-translate-y-0.5 active:scale-95 cursor-pointer';

const BackBar = ({ onBack, label = 'Back to Services' }) =>
  onBack ? (
    <div className="bg-white border-b border-slate-100 px-6 py-3">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-medium text-[#0c73d5] hover:text-[#1565c0] transition-colors"
      >
        <ArrowRight className="w-4 h-4 rotate-180" />
        {label}
      </button>
    </div>
  ) : null;

const CheckItem = ({ text }) => (
  <li className="flex items-start gap-2 text-sm">
    <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
    <span>{text}</span>
  </li>
);

const PlanCard = ({ name, price, period = '/user/mo', features, highlight = false }) => (
  <div
    className={`relative rounded-2xl p-6 flex flex-col gap-4 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
      highlight
        ? 'bg-gradient-to-br from-[#0c73d5] to-[#0e6cc8] text-white border-transparent shadow-lg'
        : 'bg-white text-slate-800 border-slate-200 shadow-md'
    }`}
  >
    {highlight && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
        POPULAR
      </span>
    )}
    <div>
      <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${highlight ? 'text-blue-100' : 'text-slate-500'}`}>{name}</p>
      <p className={`text-3xl font-extrabold ${highlight ? 'text-white' : 'text-slate-900'}`}>{price}</p>
      {period && <p className={`text-xs mt-0.5 ${highlight ? 'text-blue-100' : 'text-slate-500'}`}>{period}</p>}
    </div>
    <ul className="flex flex-col gap-2 flex-1">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2 text-sm">
          <Check className={`w-4 h-4 mt-0.5 shrink-0 ${highlight ? 'text-emerald-300' : 'text-[#0c73d5]'}`} />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <button className={BTN_PRIMARY + ' w-full text-center mt-2'}>Get Started</button>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc, accent = 'text-[#0c73d5]' }) => (
  <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3">
    <div className={`w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center ${accent}`}>
      <Icon className="w-5 h-5" />
    </div>
    <h4 className="font-bold text-slate-800 text-base">{title}</h4>
    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

const PaymentNote = () => (
  <p className="text-center text-sm text-slate-500 mt-4">
    💳 Pay via <span className="font-semibold text-slate-700">eSewa, Khalti, IME Pay, or Bank Transfer</span>
  </p>
);

const CtaBanner = ({ title, sub, btnText = 'Get Started Today' }) => (
  <section className="bg-gradient-to-r from-[#0c73d5] to-[#1565c0] py-16 px-6 text-center text-white">
    <h2 className="text-3xl font-extrabold mb-3">{title}</h2>
    <p className="text-blue-100 mb-8 max-w-xl mx-auto">{sub}</p>
    <button className="rounded-xl bg-white text-[#0c73d5] font-bold px-8 py-3.5 shadow-md hover:bg-blue-50 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer">
      {btnText}
    </button>
    <PaymentNote />
  </section>
);

const StatBadge = ({ value, label }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center">
    <p className="text-2xl font-extrabold text-white">{value}</p>
    <p className="text-xs text-white/70 mt-0.5">{label}</p>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   1. GOOGLE WORKSPACE
═══════════════════════════════════════════════════════════════════ */
export const GoogleWorkspaceHero = ({ onBack }) => (
  <div className="min-h-screen bg-slate-50 font-sans">
    <BackBar onBack={onBack} />

    {/* Hero */}
    <section className="bg-gradient-to-br from-[#1a73e8] via-[#1558d6] to-[#0d47a1] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <SiGoogle className="w-14 h-14 text-white drop-shadow-lg" />
            <span className="text-blue-200 font-semibold text-lg">Google Workspace</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Google Workspace<br />for Business Teams
          </h1>
          <p className="text-blue-100 text-lg mb-8 max-w-lg">
            Collaborate smarter with Gmail, Drive, Meet, and more — all under your own business domain, powered by Google.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {['Professional @yourcompany.com email','30 GB – 5 TB cloud storage per user','HD video meetings with Google Meet','Real-time collaboration on Docs, Sheets, Slides'].map(t => <CheckItem key={t} text={t} />)}
          </ul>
          <button className={BTN_PRIMARY}>Get Google Workspace</button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[{v:'3B+',l:'Gmail Users Worldwide'},{v:'99.9%',l:'Uptime SLA'},{v:'5TB',l:'Max Drive Storage'},{v:'250',l:'Meet Participants'}].map(s => <StatBadge key={s.l} {...s} />)}
        </div>
      </div>
    </section>

    {/* Pricing */}
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-2">Simple, Transparent Pricing</h2>
      <p className="text-slate-500 text-center mb-10">Choose the plan that fits your team size and needs</p>
      <div className="grid md:grid-cols-3 gap-6">
        <PlanCard name="Business Starter" price="Rs 780" period="/user/mo" features={['Custom Gmail domain','30 GB Drive per user','100 participant Meet','24/7 support']} />
        <PlanCard name="Business Standard" price="Rs 1,550" period="/user/mo" highlight features={['2 TB Drive per user','150 participant Meet','Meeting recordings','Shared drives']} />
        <PlanCard name="Business Plus" price="Rs 2,300" period="/user/mo" features={['5 TB Drive per user','500 participant Meet','eDiscovery & audit','Advanced security']} />
      </div>
      <PaymentNote />
    </section>

    {/* Features */}
    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">Everything Your Team Needs</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Mail} title="Gmail Business Email" desc="Professional email at your domain with powerful spam protection and 99.9% uptime." />
          <FeatureCard icon={Video} title="Google Meet HD" desc="Crystal-clear video meetings with up to 500 participants and cloud recording." />
          <FeatureCard icon={Cloud} title="Google Drive" desc="Secure cloud storage from 30 GB to 5 TB with real-time file collaboration." />
          <FeatureCard icon={Users} title="Shared Calendar" desc="Schedule meetings, share availability, and manage team events effortlessly." />
        </div>
      </div>
    </section>

    <CtaBanner title="Start Your Google Workspace Trial" sub="Join thousands of Nepali businesses already using Google Workspace to collaborate better." />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   2. GOOGLE CLOUD
═══════════════════════════════════════════════════════════════════ */
export const GoogleCloudHero = ({ onBack }) => (
  <div className="min-h-screen bg-slate-50 font-sans">
    <BackBar onBack={onBack} />

    <section className="bg-gradient-to-br from-[#0d47a1] via-[#1565c0] to-[#1976d2] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <SiGooglecloud className="w-14 h-14 text-white drop-shadow-lg" />
            <span className="text-blue-200 font-semibold text-lg">Google Cloud</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Google Cloud Console<br />Scalable Cloud Infrastructure
          </h1>
          <p className="text-blue-100 text-lg mb-8 max-w-lg">
            Build, deploy, and scale applications on Google's global infrastructure with best-in-class security and performance.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {['Compute Engine VMs starting from $0.01/hr','Global CDN & Load Balancing','Managed Kubernetes Engine (GKE)','BigQuery petabyte-scale analytics'].map(t => <CheckItem key={t} text={t} />)}
          </ul>
          <button className={BTN_PRIMARY}>Explore Google Cloud</button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[{v:'200+',l:'Cloud Services'},{v:'35+',l:'Global Regions'},{v:'99.99%',l:'Compute SLA'},{v:'$0',l:'Free Tier Credits'}].map(s => <StatBadge key={s.l} {...s} />)}
        </div>
      </div>
    </section>

    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-2">Flexible Cloud Pricing</h2>
      <p className="text-slate-500 text-center mb-10">Only pay for what you use — no hidden fees</p>
      <div className="grid md:grid-cols-3 gap-6">
        <PlanCard name="Pay-As-You-Go" price="Usage-Based" period="" features={['No upfront commitment','Compute Engine & GCS','Free tier included','Per-second billing']} />
        <PlanCard name="Committed Use" price="Rs 2,200" period="/mo" highlight features={['1 or 3-year commitment','Up to 57% savings','All compute resources','Priority support']} />
        <PlanCard name="Enterprise" price="Custom Quote" period="" features={['Dedicated account team','Custom SLA agreements','Advanced security tools','Private pricing']} />
      </div>
      <PaymentNote />
    </section>

    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">Core Cloud Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Zap} title="Compute Engine" desc="High-performance VMs with custom machine types and sustained-use discounts." />
          <FeatureCard icon={Cloud} title="Cloud Storage" desc="Scalable object storage with 99.999999999% durability and global access." />
          <FeatureCard icon={BarChart3} title="BigQuery" desc="Serverless analytics at petabyte scale with built-in machine learning." />
          <FeatureCard icon={Shield} title="GKE" desc="Managed Kubernetes for containerized workloads with auto-scaling." />
        </div>
      </div>
    </section>

    <CtaBanner title="Launch on Google Cloud Today" sub="Scale from startup to enterprise with Google's trusted cloud infrastructure." />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   3. NORDVPN
═══════════════════════════════════════════════════════════════════ */
export const NordVpnHero = ({ onBack }) => (
  <div className="min-h-screen bg-slate-50 font-sans">
    <BackBar onBack={onBack} />

    <section className="bg-gradient-to-br from-[#003b4e] via-[#004d63] to-[#00607a] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <SiNordvpn className="w-14 h-14 text-[#4db6e0] drop-shadow-lg" />
            <span className="text-cyan-300 font-semibold text-lg">NordVPN</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            NordVPN<br />Secure Every Connection
          </h1>
          <p className="text-cyan-100 text-lg mb-8 max-w-lg">
            Military-grade encryption, zero-logs policy, and 6,200+ servers worldwide — browse freely and safely from Nepal.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {['6,200+ servers in 111 countries','AES-256-GCM encryption','Strict no-logs policy (audited)','Threat Protection Pro included'].map(t => <CheckItem key={t} text={t} />)}
          </ul>
          <button className={BTN_PRIMARY}>Get NordVPN Now</button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[{v:'6,200+',l:'Global Servers'},{v:'111',l:'Countries'},{v:'6',l:'Devices Per Plan'},{v:'0',l:'Logs Kept'}].map(s => <StatBadge key={s.l} {...s} />)}
        </div>
      </div>
    </section>

    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-2">Choose Your Protection</h2>
      <p className="text-slate-500 text-center mb-10">All plans include a 30-day money-back guarantee</p>
      <div className="grid md:grid-cols-3 gap-6">
        <PlanCard name="Basic" price="Rs 350" period="/mo" features={['VPN protection','6 devices','6,200+ servers','24/7 support']} />
        <PlanCard name="Plus" price="Rs 650" period="/mo" highlight features={['Everything in Basic','Threat Protection Pro','Password Manager','Data breach scanner']} />
        <PlanCard name="Complete" price="Rs 950" period="/mo" features={['Everything in Plus','1 TB encrypted cloud','NordPass Premium','Priority support']} />
      </div>
      <PaymentNote />
    </section>

    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">Why NordVPN?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Globe} title="6,200+ Servers" desc="Connect to the fastest server in 111 countries with one click." accent="text-cyan-600" />
          <FeatureCard icon={Shield} title="No-Log Policy" desc="Independently audited no-logs policy — your privacy is guaranteed." accent="text-cyan-600" />
          <FeatureCard icon={Zap} title="Kill Switch" desc="Instantly cut internet if VPN drops, protecting your data at all times." accent="text-cyan-600" />
          <FeatureCard icon={Lock} title="Split Tunneling" desc="Route selected apps through VPN while others use your local connection." accent="text-cyan-600" />
        </div>
      </div>
    </section>

    <CtaBanner title="Stay Private & Secure Online" sub="Protect your business and personal data with NordVPN's battle-tested encryption." />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   4. OFFICE 365
═══════════════════════════════════════════════════════════════════ */
export const Office365Hero = ({ onBack }) => (
  <div className="min-h-screen bg-slate-50 font-sans">
    <BackBar onBack={onBack} />

    <section className="bg-gradient-to-br from-[#0f3460] via-[#0c73d5] to-[#1565c0] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <img src={Microsoft365} alt="Microsoft 365" className="w-14 h-14 object-contain drop-shadow-lg" />
            <span className="text-blue-200 font-semibold text-lg">Microsoft 365</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Microsoft Office 365<br />Cloud Productivity Suite
          </h1>
          <p className="text-blue-100 text-lg mb-8 max-w-lg">
            The world's most popular productivity suite — Word, Excel, PowerPoint, Teams, and more — now in the cloud.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {['Full Office apps on desktop & web','Business email via Outlook + Exchange','Microsoft Teams for chat & video','1 TB OneDrive cloud storage per user'].map(t => <CheckItem key={t} text={t} />)}
          </ul>
          <button className={BTN_PRIMARY}>Get Microsoft 365</button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[{v:'345M+',l:'Paid Seats Worldwide'},{v:'1TB',l:'OneDrive Storage'},{v:'99.9%',l:'Uptime SLA'},{v:'5',l:'Devices Per User'}].map(s => <StatBadge key={s.l} {...s} />)}
        </div>
      </div>
    </section>

    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-2">Microsoft 365 Plans</h2>
      <p className="text-slate-500 text-center mb-10">All plans billed monthly per user</p>
      <div className="grid md:grid-cols-3 gap-6">
        <PlanCard name="Business Basic" price="Rs 650" period="/user/mo" features={['Web & mobile Office apps','Exchange email hosting','Microsoft Teams','1 TB OneDrive']} />
        <PlanCard name="Apps for Business" price="Rs 850" period="/user/mo" highlight features={['Desktop Office apps','OneDrive 1 TB','5 devices per user','Business email add-on']} />
        <PlanCard name="Business Premium" price="Rs 1,250" period="/user/mo" features={['Everything in Apps','Advanced security','Intune device mgmt','Azure AD Premium']} />
      </div>
      <PaymentNote />
    </section>

    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">Productivity Reimagined</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Zap} title="Word / Excel / PowerPoint" desc="Full-featured desktop and web apps always up-to-date with the latest features." />
          <FeatureCard icon={Mail} title="Outlook + Exchange" desc="Enterprise-grade email with shared mailboxes, calendars, and contacts." />
          <FeatureCard icon={Users} title="Microsoft Teams" desc="Chat, video calls, file sharing, and app integrations in one unified hub." />
          <FeatureCard icon={Cloud} title="1 TB OneDrive" desc="Sync and share files across all devices with enterprise-grade security." />
        </div>
      </div>
    </section>

    <CtaBanner title="Supercharge Your Business with Microsoft 365" sub="Get the most trusted productivity platform in the world for your Nepali business." />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   5. OFFICE LTSC 2024
═══════════════════════════════════════════════════════════════════ */
export const OfficeLtscHero = ({ onBack }) => (
  <div className="min-h-screen bg-slate-50 font-sans">
    <BackBar onBack={onBack} />

    <section className="bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#3949ab] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <img src={LTSC} alt="Office LTSC" className="w-14 h-14 object-contain drop-shadow-lg" />
            <span className="text-indigo-200 font-semibold text-lg">Office LTSC 2024</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Office LTSC 2024<br />Perpetual License
          </h1>
          <p className="text-indigo-100 text-lg mb-8 max-w-lg">
            Own your Office apps forever — no recurring subscription, no internet dependency. A one-time purchase for long-term stability.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {['One-time purchase, no monthly fees','Full offline functionality','5 years of mainstream support','Volume licensing available for businesses'].map(t => <CheckItem key={t} text={t} />)}
          </ul>
          <button className={BTN_PRIMARY}>Buy Office LTSC</button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[{v:'1x',l:'One-Time Payment'},{v:'5yr',l:'Support Period'},{v:'100%',l:'Offline Ready'},{v:'0',l:'Monthly Fees'}].map(s => <StatBadge key={s.l} {...s} />)}
        </div>
      </div>
    </section>

    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-2">LTSC 2024 Licenses</h2>
      <p className="text-slate-500 text-center mb-10">One-time purchase — use forever</p>
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <PlanCard name="LTSC Standard" price="Rs 8,500" period="one-time" features={['Word, Excel, PowerPoint','Outlook email client','OneNote included','1 PC / 1 Mac activation']} />
        <PlanCard name="LTSC Professional" price="Rs 12,000" period="one-time" highlight features={['All Standard apps','Publisher & Access','Advanced features','Volume licensing eligible']} />
      </div>
      <PaymentNote />
    </section>

    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">Why Choose Perpetual?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Shield} title="No Subscription" desc="Pay once and use forever — no recurring billing surprises." />
          <FeatureCard icon={Lock} title="Full Offline Use" desc="Works completely without internet connectivity, perfect for secure environments." />
          <FeatureCard icon={Star} title="Perpetual Updates" desc="Security patches provided for the full 5-year mainstream support period." />
          <FeatureCard icon={Users} title="Volume Licensing" desc="Simplified licensing for organizations deploying across multiple machines." />
        </div>
      </div>
    </section>

    <CtaBanner title="Own Your Office Apps Forever" sub="Make a one-time investment in Office LTSC 2024 — no subscriptions, full control." />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   6. MICROSOFT COPILOT
═══════════════════════════════════════════════════════════════════ */
export const CopilotHero = ({ onBack }) => (
  <div className="min-h-screen bg-slate-50 font-sans">
    <BackBar onBack={onBack} />

    <section className="bg-gradient-to-br from-[#0c1a3e] via-[#0c73d5] to-[#7c3aed] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <img src={Copilot} alt="Microsoft Copilot" className="w-14 h-14 object-contain rounded-xl drop-shadow-lg" />
            <span className="text-purple-200 font-semibold text-lg">Microsoft Copilot</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Microsoft Copilot<br />AI-Powered Work Assistant
          </h1>
          <p className="text-purple-100 text-lg mb-8 max-w-lg">
            Your AI companion across Word, Excel, Teams, Outlook, and more — draft, summarize, analyze, and create at the speed of thought.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {['AI drafting in Word & PowerPoint','Data insights via natural language in Excel','Meeting summaries & action items in Teams','Smart email replies and scheduling in Outlook'].map(t => <CheckItem key={t} text={t} />)}
          </ul>
          <button className={BTN_PRIMARY}>Get Microsoft Copilot</button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[{v:'GPT-4',l:'Powered By'},{v:'10x',l:'Productivity Boost'},{v:'M365',l:'Deep Integration'},{v:'24/7',l:'AI Availability'}].map(s => <StatBadge key={s.l} {...s} />)}
        </div>
      </div>
    </section>

    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-2">Copilot Plans</h2>
      <p className="text-slate-500 text-center mb-10">Requires a base Microsoft 365 subscription</p>
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <PlanCard name="Copilot for M365" price="Rs 2,800" period="/user/mo" features={['AI in Word/Excel/PPT','Teams meeting summaries','Outlook smart replies','Copilot Studio access']} />
        <PlanCard name="Copilot Pro" price="Rs 1,800" period="/mo" highlight features={['Personal Copilot access','Web-grounded answers','Priority AI model access','Image creation with Designer']} />
      </div>
      <PaymentNote />
    </section>

    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">What Copilot Can Do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Zap} title="AI in Word & Excel" desc="Draft documents, summarize content, and analyze data with natural language prompts." accent="text-purple-600" />
          <FeatureCard icon={Users} title="Teams Meeting Summaries" desc="Automatically transcribe, summarize meetings, and generate action items." accent="text-purple-600" />
          <FeatureCard icon={BarChart3} title="Natural Language Queries" desc="Ask questions about your data in plain English and get instant chart insights." accent="text-purple-600" />
        </div>
      </div>
    </section>

    <CtaBanner title="Work Smarter with Microsoft Copilot AI" sub="Let AI handle the heavy lifting so your team can focus on what matters most." />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   7. POWER BI
═══════════════════════════════════════════════════════════════════ */
export const PowerBiHero = ({ onBack }) => (
  <div className="min-h-screen bg-slate-50 font-sans">
    <BackBar onBack={onBack} />

    <section className="bg-gradient-to-br from-[#1a1a2e] via-[#f2c811] to-[#e6b800] text-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <img src={PowerBI} alt="Power BI" className="w-14 h-14 object-contain rounded-xl drop-shadow-lg" />
            <span className="font-semibold text-lg text-yellow-800">Microsoft Power BI</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4 text-slate-900">
            Microsoft Power BI<br />Data Insights & Analytics
          </h1>
          <p className="text-yellow-900 text-lg mb-8 max-w-lg">
            Transform your raw data into beautiful interactive dashboards. Make data-driven decisions with confidence and speed.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {['Interactive drag-and-drop dashboards','100+ data source connectors','Real-time streaming analytics','AI-powered insights & Q&A'].map(t => <CheckItem key={t} text={t} />)}
          </ul>
          <button className={BTN_PRIMARY}>Get Power BI</button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[{v:'100+',l:'Data Connectors'},{v:'5M+',l:'Users Worldwide'},{v:'Real-time',l:'Analytics'},{v:'AI',l:'Built-in Insights'}].map(s => (
            <div key={s.l} className="bg-yellow-900/20 backdrop-blur-sm rounded-xl px-5 py-3 text-center">
              <p className="text-2xl font-extrabold text-slate-900">{s.v}</p>
              <p className="text-xs text-yellow-900 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-2">Power BI Pricing</h2>
      <p className="text-slate-500 text-center mb-10">All plans include mobile app access</p>
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <PlanCard name="Power BI Pro" price="Rs 850" period="/user/mo" features={['Interactive dashboards','100+ connectors','Publish & share reports','8 GB storage per user']} />
        <PlanCard name="Premium Per User" price="Rs 2,800" period="/user/mo" highlight features={['Everything in Pro','Paginated reports','AI visuals & AutoML','100 GB storage per user']} />
      </div>
      <PaymentNote />
    </section>

    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">Power BI Capabilities</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={BarChart3} title="Interactive Dashboards" desc="Build stunning reports with drag-and-drop visuals and drill-through capabilities." accent="text-yellow-600" />
          <FeatureCard icon={Zap} title="Data Modeling" desc="Powerful DAX formulas and relationships to model complex business data." accent="text-yellow-600" />
          <FeatureCard icon={Star} title="Real-Time Analytics" desc="Stream live data to dashboards for instant business visibility." accent="text-yellow-600" />
          <FeatureCard icon={Globe} title="100+ Connectors" desc="Connect to Excel, SQL, Salesforce, Google Analytics, and more in minutes." accent="text-yellow-600" />
        </div>
      </div>
    </section>

    <CtaBanner title="Turn Your Data into Decisions" sub="Empower every team member with beautiful, real-time data insights powered by Power BI." />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   8. AZURE
═══════════════════════════════════════════════════════════════════ */
export const AzureHero = ({ onBack }) => (
  <div className="min-h-screen bg-slate-50 font-sans">
    <BackBar onBack={onBack} />

    <section className="bg-gradient-to-br from-[#0050a0] via-[#0078d4] to-[#00b4d8] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <img src={Azure} alt="Microsoft Azure" className="w-14 h-14 object-contain rounded-xl drop-shadow-lg" />
            <span className="text-blue-200 font-semibold text-lg">Microsoft Azure</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Microsoft Azure<br />Enterprise Cloud Platform
          </h1>
          <p className="text-blue-100 text-lg mb-8 max-w-lg">
            Build, run, and manage applications across Microsoft's global datacenters with 200+ cloud services at enterprise scale.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {['200+ cloud services & solutions','60+ global Azure regions','Hybrid cloud with Azure Arc','Microsoft Defender security built-in'].map(t => <CheckItem key={t} text={t} />)}
          </ul>
          <button className={BTN_PRIMARY}>Get Azure Access</button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[{v:'200+',l:'Cloud Services'},{v:'60+',l:'Global Regions'},{v:'95%',l:'Fortune 500 Use Azure'},{v:'$200',l:'Free Credit to Start'}].map(s => <StatBadge key={s.l} {...s} />)}
        </div>
      </div>
    </section>

    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-2">Azure Pricing Options</h2>
      <p className="text-slate-500 text-center mb-10">Start for free, scale as you grow</p>
      <div className="grid md:grid-cols-3 gap-6">
        <PlanCard name="Pay-As-You-Go" price="Free to Start" period="" features={['$200 free credits','No upfront cost','All 200+ services','Cancel anytime']} />
        <PlanCard name="Dev / Test" price="Rs 3,500" period="/mo" highlight features={['Dev/Test pricing discounts','Visual Studio subscriber pricing','Non-production workloads','Shared Azure services']} />
        <PlanCard name="Enterprise" price="Custom Quote" period="" features={['Azure Enterprise Agreement','Flexible commitment terms','Dedicated support team','Private pricing & SLAs']} />
      </div>
      <PaymentNote />
    </section>

    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">Azure Key Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Zap} title="200+ Services" desc="From VMs and containers to AI, IoT, and quantum computing." accent="text-blue-600" />
          <FeatureCard icon={Globe} title="Global Datacenters" desc="60+ regions worldwide ensure low latency and data residency compliance." accent="text-blue-600" />
          <FeatureCard icon={Shield} title="Hybrid Cloud" desc="Seamlessly extend your on-premises infrastructure to Azure with Arc." accent="text-blue-600" />
          <FeatureCard icon={ShieldCheck} title="Security Center" desc="Built-in threat protection, compliance tools, and identity management." accent="text-blue-600" />
        </div>
      </div>
    </section>

    <CtaBanner title="Build the Future on Microsoft Azure" sub="Join 95% of Fortune 500 companies running their most critical workloads on Azure." />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   9. ZOHO CRM
═══════════════════════════════════════════════════════════════════ */
export const ZohoCrmHero = ({ onBack }) => (
  <div className="min-h-screen bg-slate-50 font-sans">
    <BackBar onBack={onBack} />

    <section className="bg-gradient-to-br from-[#c0392b] via-[#e74c3c] to-[#e67e22] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <SiZoho className="w-14 h-14 text-white drop-shadow-lg" />
            <span className="text-orange-100 font-semibold text-lg">Zoho CRM</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Zoho CRM<br />Sales & Customer Engagement
          </h1>
          <p className="text-orange-100 text-lg mb-8 max-w-lg">
            Close more deals faster with Zoho CRM's AI-powered sales automation, pipeline management, and customer engagement tools.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {['Lead capture & nurturing automation','Visual sales pipeline tracking','Multi-channel customer engagement','AI-powered sales predictions (Zia)'].map(t => <CheckItem key={t} text={t} />)}
          </ul>
          <button className={BTN_PRIMARY}>Start with Zoho CRM</button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[{v:'250K+',l:'Businesses Use Zoho'},{v:'180+',l:'Countries'},{v:'Zia AI',l:'Built-in'},{v:'15-day',l:'Free Trial'}].map(s => <StatBadge key={s.l} {...s} />)}
        </div>
      </div>
    </section>

    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-2">Zoho CRM Plans</h2>
      <p className="text-slate-500 text-center mb-10">All plans include mobile CRM app</p>
      <div className="grid md:grid-cols-3 gap-6">
        <PlanCard name="Standard" price="Rs 700" period="/user/mo" features={['Lead & contact management','Sales pipeline','Email integration','5 custom reports']} />
        <PlanCard name="Professional" price="Rs 1,200" period="/user/mo" highlight features={['Everything in Standard','Workflow automation','Sales signals','Blueprint process']} />
        <PlanCard name="Enterprise" price="Rs 2,000" period="/user/mo" features={['Everything in Professional','Zia AI assistant','Multi-user portals','Advanced analytics']} />
      </div>
      <PaymentNote />
    </section>

    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">CRM Features That Drive Growth</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Users} title="Lead Management" desc="Capture leads from web forms, social media, and email, then auto-assign them." accent="text-red-500" />
          <FeatureCard icon={BarChart3} title="Pipeline Tracking" desc="Visualize your sales pipeline with drag-and-drop deal management." accent="text-red-500" />
          <FeatureCard icon={Mail} title="Email Integration" desc="Send, receive, and track emails directly within your CRM records." accent="text-red-500" />
          <FeatureCard icon={Star} title="Reports & Analytics" desc="Pre-built and custom reports to track quotas, forecasts, and KPIs." accent="text-red-500" />
        </div>
      </div>
    </section>

    <CtaBanner title="Close More Deals with Zoho CRM" sub="Thousands of Nepali sales teams trust Zoho CRM to manage and grow their business." />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   10. BIGIN BY ZOHO CRM
═══════════════════════════════════════════════════════════════════ */
export const BiginZohoHero = ({ onBack }) => (
  <div className="min-h-screen bg-slate-50 font-sans">
    <BackBar onBack={onBack} />

    <section className="bg-gradient-to-br from-[#b34700] via-[#d35400] to-[#e67e22] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <SiZoho className="w-14 h-14 text-white drop-shadow-lg" />
            <span className="text-orange-100 font-semibold text-lg">Bigin by Zoho CRM</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Bigin by Zoho CRM<br />Simple CRM for Small Teams
          </h1>
          <p className="text-orange-100 text-lg mb-8 max-w-lg">
            The simplest CRM for small businesses — get set up in under 30 minutes and start closing deals from day one.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {['Pipeline view for visual deal management','Mobile-first CRM app for iOS & Android','Workflow automation for repetitive tasks','Built-in calling & customer communication'].map(t => <CheckItem key={t} text={t} />)}
          </ul>
          <button className={BTN_PRIMARY}>Try Bigin Free</button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[{v:'30min',l:'Setup Time'},{v:'Free',l:'Starter Plan'},{v:'Mobile',l:'First Design'},{v:'15-day',l:'Pro Trial'}].map(s => <StatBadge key={s.l} {...s} />)}
        </div>
      </div>
    </section>

    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-2">Bigin Plans</h2>
      <p className="text-slate-500 text-center mb-10">Start free — upgrade as your team grows</p>
      <div className="grid md:grid-cols-3 gap-6">
        <PlanCard name="Free" price="Rs 0" period="1 user forever" features={['1 pipeline','500 records','Basic workflow','Mobile app']} />
        <PlanCard name="Express" price="Rs 450" period="/user/mo" highlight features={['3 pipelines','50,000 records','Workflow automation','Built-in calling']} />
        <PlanCard name="Premier" price="Rs 750" period="/user/mo" features={['25 pipelines','Unlimited records','Advanced automation','Customer portal']} />
      </div>
      <PaymentNote />
    </section>

    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">Bigin Feature Highlights</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={BarChart3} title="Pipeline View" desc="Visualize every deal at a glance with a simple drag-and-drop pipeline board." accent="text-orange-500" />
          <FeatureCard icon={Globe} title="Mobile App" desc="Manage your sales on the go with the award-winning Bigin mobile app." accent="text-orange-500" />
          <FeatureCard icon={Zap} title="Workflow Automation" desc="Automate follow-ups, task assignments, and deal updates with simple rules." accent="text-orange-500" />
          <FeatureCard icon={Users} title="Customer Calls" desc="Log calls, set follow-up reminders, and track all customer interactions." accent="text-orange-500" />
        </div>
      </div>
    </section>

    <CtaBanner title="The CRM Built for Small Business" sub="Start with Bigin for free and grow your sales with confidence — no complexity, no bloat." />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   11. ZOHO MAIL
═══════════════════════════════════════════════════════════════════ */
export const ZohoMailHero = ({ onBack }) => (
  <div className="min-h-screen bg-slate-50 font-sans">
    <BackBar onBack={onBack} />

    <section className="bg-gradient-to-br from-[#7b0000] via-[#c0392b] to-[#e74c3c] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <SiZoho className="w-14 h-14 text-white drop-shadow-lg" />
            <span className="text-red-100 font-semibold text-lg">Zoho Mail</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Zoho Mail<br />Secure Business Email Hosting
          </h1>
          <p className="text-red-100 text-lg mb-8 max-w-lg">
            Ad-free, privacy-first business email hosting with your custom domain — built for teams that value data security and uptime.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {['Custom @yourcompany.com domain email','Zero-advertisement inbox always','eDiscovery & data archiving','100% offline access via IMAP'].map(t => <CheckItem key={t} text={t} />)}
          </ul>
          <button className={BTN_PRIMARY}>Get Zoho Mail</button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[{v:'6M+',l:'Businesses Trust Zoho Mail'},{v:'99.9%',l:'Uptime SLA'},{v:'0',l:'Ads Ever'},{v:'50GB',l:'Max Mailbox'}].map(s => <StatBadge key={s.l} {...s} />)}
        </div>
      </div>
    </section>

    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-2">Zoho Mail Plans</h2>
      <p className="text-slate-500 text-center mb-10">All plans include custom domain email</p>
      <div className="grid md:grid-cols-3 gap-6">
        <PlanCard name="Mail Lite" price="Rs 350" period="/user/mo" features={['5 GB per mailbox','Custom domain email','POP/IMAP/ActiveSync','Ad-free inbox']} />
        <PlanCard name="Mail Premium" price="Rs 700" period="/user/mo" highlight features={['50 GB per mailbox','Email archiving','S/MIME encryption','eDiscovery tools']} />
        <PlanCard name="Workplace" price="Rs 1,050" period="/user/mo" features={['50 GB email + cloud','Zoho Cliq & Meet','WorkDrive included','Admin controls']} />
      </div>
      <PaymentNote />
    </section>

    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">Why Zoho Mail?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Mail} title="Custom Domain" desc="Get professional @yourbusiness.com email addresses for your entire team." accent="text-red-500" />
          <FeatureCard icon={Shield} title="Zero-Ad Inbox" desc="A completely advertisement-free email experience — your data is never sold." accent="text-red-500" />
          <FeatureCard icon={Lock} title="eDiscovery" desc="Powerful archiving and legal hold tools for compliance and audit trails." accent="text-red-500" />
          <FeatureCard icon={Globe} title="Offline Access" desc="Continue reading and composing emails even without an internet connection." accent="text-red-500" />
        </div>
      </div>
    </section>

    <CtaBanner title="Professional Email, Zero Compromise" sub="Give your business a secure, ad-free email home with Zoho Mail's trusted infrastructure." />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   12. ZOHO WORKPLACE
═══════════════════════════════════════════════════════════════════ */
export const ZohoWorkplaceHero = ({ onBack }) => (
  <div className="min-h-screen bg-slate-50 font-sans">
    <BackBar onBack={onBack} />

    <section className="bg-gradient-to-br from-[#1a1a2e] via-[#e74c3c] to-[#e67e22] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <SiZoho className="w-14 h-14 text-white drop-shadow-lg" />
            <span className="text-orange-100 font-semibold text-lg">Zoho Workplace</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Zoho Workplace<br />All-in-One Collaboration Suite
          </h1>
          <p className="text-orange-100 text-lg mb-8 max-w-lg">
            Email, chat, video, docs, and intranet — everything your team needs to collaborate in one affordable, integrated suite.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {['Mail + Cliq chat + Meeting in one suite','WorkDrive for team file collaboration','Connect intranet for company culture','Integrated with 45+ Zoho apps'].map(t => <CheckItem key={t} text={t} />)}
          </ul>
          <button className={BTN_PRIMARY}>Get Zoho Workplace</button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[{v:'8',l:'Apps in One Suite'},{v:'45+',l:'Zoho Integrations'},{v:'99.9%',l:'Uptime SLA'},{v:'50GB',l:'Mail + Drive Storage'}].map(s => <StatBadge key={s.l} {...s} />)}
        </div>
      </div>
    </section>

    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-2">Workplace Plans</h2>
      <p className="text-slate-500 text-center mb-10">Everything your team needs to collaborate</p>
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <PlanCard name="Standard" price="Rs 700" period="/user/mo" features={['Zoho Mail 10GB','Cliq messaging','Meeting HD video','WorkDrive 10GB']} />
        <PlanCard name="Professional" price="Rs 1,200" period="/user/mo" highlight features={['Zoho Mail 50GB','Advanced Cliq bots','Meeting recordings','WorkDrive 100GB + Connect']} />
      </div>
      <PaymentNote />
    </section>

    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">The Full Collaboration Stack</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Mail} title="Mail + Chat + Meet" desc="Professional email, instant messaging, and HD video meetings in one unified suite." accent="text-red-500" />
          <FeatureCard icon={Users} title="Cliq Messaging" desc="Real-time team messaging with channels, bots, and app integrations." accent="text-red-500" />
          <FeatureCard icon={Cloud} title="WorkDrive" desc="Cloud file storage with team folders, version history, and co-editing." accent="text-red-500" />
          <FeatureCard icon={Globe} title="Connect Intranet" desc="Build your company's social intranet for culture, announcements, and knowledge base." accent="text-red-500" />
        </div>
      </div>
    </section>

    <CtaBanner title="Collaborate Without Limits with Zoho Workplace" sub="Replace 5+ tools with one affordable, integrated Zoho Workplace suite for your team." />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   13. AMAZON WEB SERVICES (AWS)
═══════════════════════════════════════════════════════════════════ */
export const AwsHero = ({ onBack }) => (
  <div className="min-h-screen bg-slate-50 font-sans">
    <BackBar onBack={onBack} />

    <section className="bg-gradient-to-br from-[#1a1a1a] via-[#232f3e] to-[#ff9900]/80 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <FaAws className="w-14 h-14 text-[#ff9900] drop-shadow-lg" />
            <span className="text-orange-300 font-semibold text-lg">Amazon Web Services</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Amazon Web Services<br />Cloud for Any Scale
          </h1>
          <p className="text-orange-100 text-lg mb-8 max-w-lg">
            The world's most comprehensive cloud platform — from startup to enterprise, AWS powers millions of applications globally.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {['EC2 compute instances — any size, any OS','S3 object storage with 99.999999999% durability','RDS managed databases — MySQL, Postgres & more','Lambda serverless — pay only per execution'].map(t => <CheckItem key={t} text={t} />)}
          </ul>
          <button className={BTN_PRIMARY}>Start with AWS</button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[{v:'200+',l:'AWS Services'},{v:'31',l:'Global Regions'},{v:'1M+',l:'Active Customers'},{v:'$0',l:'Free Tier to Start'}].map(s => <StatBadge key={s.l} {...s} />)}
        </div>
      </div>
    </section>

    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-2">AWS Pricing Models</h2>
      <p className="text-slate-500 text-center mb-10">Flexible pricing that scales with your workload</p>
      <div className="grid md:grid-cols-3 gap-6">
        <PlanCard name="Free Tier" price="Rs 0" period="12 months free" features={['750 hrs EC2 t2.micro/mo','5 GB S3 storage','750 hrs RDS micro','1 million Lambda calls/mo']} />
        <PlanCard name="On-Demand" price="Usage-Based" period="per resource" highlight features={['Pay per second/hour','No long-term commitment','All 200+ services','Instant provisioning']} />
        <PlanCard name="Savings Plans" price="Rs 4,500+" period="/mo" features={['Up to 66% savings','1 or 3-year commitment','Compute & EC2 plans','Reserved instance pricing']} />
      </div>
      <PaymentNote />
    </section>

    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">Core AWS Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Zap} title="EC2 Compute" desc="Resizable virtual servers with hundreds of instance types for any workload." accent="text-orange-500" />
          <FeatureCard icon={Cloud} title="S3 Storage" desc="Industry-leading object storage with 11 nines of durability and global access." accent="text-orange-500" />
          <FeatureCard icon={Shield} title="RDS Database" desc="Fully managed relational databases — MySQL, PostgreSQL, Aurora, and more." accent="text-orange-500" />
          <FeatureCard icon={Star} title="Lambda Serverless" desc="Run code without managing servers — pay only for compute time consumed." accent="text-orange-500" />
        </div>
      </div>
    </section>

    <CtaBanner title="Power Your Business on AWS" sub="Join millions of businesses worldwide using Amazon Web Services as their cloud foundation." />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   14. ZOOM
═══════════════════════════════════════════════════════════════════ */
export const ZoomHero = ({ onBack }) => (
  <div className="min-h-screen bg-slate-50 font-sans">
    <BackBar onBack={onBack} />

    <section className="bg-gradient-to-br from-[#0d3b8c] via-[#2d8cff] to-[#45b2ff] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <SiZoom className="w-14 h-14 text-white drop-shadow-lg" />
            <span className="text-blue-100 font-semibold text-lg">Zoom</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Zoom<br />Video Meetings & Webinars
          </h1>
          <p className="text-blue-100 text-lg mb-8 max-w-lg">
            The world's leading video communications platform — host meetings, webinars, and events with crystal-clear HD video and audio.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {['Up to 300 meeting participants','Cloud recording with transcription','Zoom Webinars for large events','AI Companion for meeting summaries'].map(t => <CheckItem key={t} text={t} />)}
          </ul>
          <button className={BTN_PRIMARY}>Get Zoom Now</button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[{v:'300M+',l:'Daily Meeting Participants'},{v:'300',l:'Max Participants'},{v:'HD',l:'Video Quality'},{v:'AI',l:'Companion Built-in'}].map(s => <StatBadge key={s.l} {...s} />)}
        </div>
      </div>
    </section>

    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-2">Zoom Plans for Every Team</h2>
      <p className="text-slate-500 text-center mb-10">All paid plans include cloud recording</p>
      <div className="grid md:grid-cols-3 gap-6">
        <PlanCard name="Zoom Pro" price="Rs 1,350" period="/host/mo" features={['100 participants','30-hour meeting limit','Cloud recording 5GB','Social media streaming']} />
        <PlanCard name="Business" price="Rs 1,850" period="/host/mo" highlight features={['300 participants','Unlimited cloud recording','Meeting scheduler','Company branding']} />
        <PlanCard name="Business+" price="Rs 2,500" period="/host/mo" features={['300 participants','Zoom Phone included','Unlimited whiteboards','Workspace reservations']} />
      </div>
      <PaymentNote />
    </section>

    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">Why Teams Love Zoom</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Video} title="HD Video Meetings" desc="Crystal-clear 1080p video with active speaker detection and virtual backgrounds." accent="text-[#2d8cff]" />
          <FeatureCard icon={Cloud} title="Cloud Recording" desc="Auto-record meetings in the cloud with AI-generated transcripts and highlights." accent="text-[#2d8cff]" />
          <FeatureCard icon={Users} title="Zoom Webinars" desc="Host large-scale events with up to 10,000 attendees, Q&A, and polls." accent="text-[#2d8cff]" />
          <FeatureCard icon={Star} title="AI Companion" desc="Automated meeting summaries, action items, and smart chat compose." accent="text-[#2d8cff]" />
        </div>
      </div>
    </section>

    <CtaBanner title="Connect Your Team with Zoom" sub="From daily standups to large webinars — Zoom keeps your team connected anywhere in Nepal." />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   15. MICROSOFT DEFENDER
═══════════════════════════════════════════════════════════════════ */
export const MicrosoftDefenderHero = ({ onBack }) => (
  <div className="min-h-screen bg-slate-50 font-sans">
    <BackBar onBack={onBack} />

    <section className="bg-gradient-to-br from-[#0a1628] via-[#0c2d5c] to-[#0c73d5] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <FaMicrosoft className="w-14 h-14 text-white drop-shadow-lg" />
            <span className="text-blue-200 font-semibold text-lg">Microsoft Defender</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Microsoft Defender<br />360° Business Security
          </h1>
          <p className="text-blue-100 text-lg mb-8 max-w-lg">
            Comprehensive enterprise security across endpoints, identities, email, and cloud apps — powered by Microsoft's global threat intelligence.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {['Endpoint detection & response (EDR)','AI-powered threat intelligence','Zero Trust security architecture','SIEM integration with Microsoft Sentinel'].map(t => <CheckItem key={t} text={t} />)}
          </ul>
          <button className={BTN_PRIMARY}>Protect Your Business</button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[{v:'8T+',l:'Threat Signals/Day'},{v:'65+',l:'Countries Protected'},{v:'Zero Trust',l:'Architecture'},{v:'99%',l:'Threat Detection Rate'}].map(s => <StatBadge key={s.l} {...s} />)}
        </div>
      </div>
    </section>

    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-2">Defender Plans</h2>
      <p className="text-slate-500 text-center mb-10">Protect every device, user, and workload</p>
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <PlanCard name="Defender for Business" price="Rs 850" period="/user/mo" features={['Endpoint protection','Vulnerability management','Firewall & network protection','Security recommendations']} />
        <PlanCard name="Defender P2" price="Rs 1,400" period="/user/mo" highlight features={['Everything in Business','Identity protection (AAD P2)','Advanced threat hunting','SIEM/SOAR integration','Attack simulation training']} />
      </div>
      <PaymentNote />
    </section>

    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">Enterprise-Grade Security Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={ShieldCheck} title="Endpoint Protection" desc="AI-powered antivirus, EDR, and automated incident response for all devices." />
          <FeatureCard icon={Globe} title="Threat Intelligence" desc="Backed by 8 trillion daily signals from Microsoft's global security network." />
          <FeatureCard icon={Lock} title="Zero Trust Security" desc="Verify explicitly, use least privilege, and assume breach — modern security model." />
          <FeatureCard icon={BarChart3} title="SIEM Integration" desc="Connect to Microsoft Sentinel for advanced SIEM and SOAR capabilities." />
        </div>
      </div>
    </section>

    <CtaBanner title="Defend Your Business Against Every Threat" sub="Deploy Microsoft Defender and protect your Nepali business with world-class threat intelligence." />
  </div>
);

/* ─────────────────────── default export ─────────────────────── */
export default GoogleWorkspaceHero;
