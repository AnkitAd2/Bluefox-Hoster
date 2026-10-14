import React, { useState } from 'react'
import { Send, Check, ShieldCheck, Zap, Server, Globe, Cloud, PanelsTopLeft, ShoppingBag } from 'lucide-react'
import Flag from '../assets/Flag_of_Nepal.svg.webp'
import HeroRobot from '../assets/robot_5_transparent.svg'

const plans = [
  { name: 'Standard Web Hosting', price: 'Rs 150', period: '/month', desc: 'Fast, secure, and always supported for personal & small sites.', features: ['1 Website', '10 GB NVMe Storage', 'Free SSL', 'Daily Backups'], popular: false },
  { name: 'Cloud Scalable', price: 'Rs 450', period: '/month', desc: 'Resilient cloud architecture built to scale effortlessly.', features: ['Unlimited Websites', '50 GB NVMe SSD', 'Free .com Domain', '24/7 Support'], popular: true },
  { name: 'WordPress & E-Com', price: 'Rs 850', period: '/month', desc: 'Optimized for high-performance WordPress & online stores.', features: ['Dedicated Resources', 'LiteSpeed Cache', 'Free Domain & SSL', 'Advanced Security'], popular: false },
]

export const HostingOptionsHero = ({ onBack }) => {
  return (
    <>
      {onBack && (
        <div className="bg-white border-b border-slate-200 py-3">
          <div className="site-container">
            <button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer bg-transparent border-none">
              &larr; Back to Home
            </button>
          </div>
        </div>
      )}

      <section className="site-section w-full overflow-hidden bg-slate-50/50 pt-12 pb-10 font-sans sm:pt-16 sm:pb-14">
        <div className="site-container grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700 mb-4">
              <span>01</span> Hosting Options Hub
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 leading-tight mb-4">
              From first site to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">full stack scalability.</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mb-6">
              Choose from high-speed Web Hosting, resilient Cloud infrastructure, optimized WordPress environments, and secure eCommerce storefronts.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <Globe className="h-5 w-5 text-blue-600" />
                <span className="text-xs font-bold text-slate-800">Web &amp; Cloud Hosting</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <ShoppingBag className="h-5 w-5 text-blue-600" />
                <span className="text-xs font-bold text-slate-800">WordPress &amp; E-Com</span>
              </div>
            </div>
          </div>
          <div className="relative isolate min-h-[380px] rounded-3xl bg-gradient-to-br from-[#1b75e7] to-[#0c438e] p-8 text-white shadow-2xl flex flex-col justify-between">
            <div className="absolute right-4 top-4 opacity-20">
              <Server className="h-32 w-32" />
            </div>
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-blue-200">Enterprise Grade</span>
              <h3 className="text-2xl font-bold mt-2">Ultra-Fast SSD NVMe Performance</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <p className="text-xs text-blue-100">99.98% SLA Uptime Guaranteed with 24/7 Kathmandu support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="site-container">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-950">Select Your Hosting Plan</h2>
            <p className="text-sm text-slate-600 mt-2">Instant activation with eSewa, Khalti, and bank transfers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((p) => (
              <div key={p.name} className={`rounded-3xl border p-8 bg-white shadow-sm flex flex-col justify-between ${p.popular ? 'border-blue-600 ring-2 ring-blue-500/20' : 'border-slate-200'}`}>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{p.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{p.desc}</p>
                  <div className="mt-6 text-4xl font-black text-slate-950">{p.price}<span className="text-xs font-semibold text-slate-500">{p.period}</span></div>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    {p.features.map(f => (
                      <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> {f}</li>
                    ))}
                  </ul>
                </div>
                <button className="mt-8 w-full rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-md hover:bg-blue-700">Get Started &rarr;</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default HostingOptionsHero