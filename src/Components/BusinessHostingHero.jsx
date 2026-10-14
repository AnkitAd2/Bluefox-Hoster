import React from 'react'
import { Check, BriefcaseBusiness, ArrowUpRight, ShieldCheck, Users } from 'lucide-react'

export const BusinessHostingHero = ({ onBack }) => {
  return (
    <>
      {onBack && (
        <div className="bg-white border-b border-slate-200 py-3">
          <div className="site-container">
            <button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-900 transition-colors cursor-pointer bg-transparent border-none">
              &larr; Back to Home
            </button>
          </div>
        </div>
      )}

      <section className="site-section w-full bg-slate-50/50 pt-12 pb-10">
        <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-bold text-amber-800 mb-4">
              <span>04</span> Business &amp; Agency Solutions
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 leading-tight mb-4">
              Launch your own hosting brand with <span className="text-amber-600">Reseller Tools</span>.
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mb-6">
              White-labeled cPanel accounts, automated billing integrations, and a 360° business toolkit to help you grow your digital agency.
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-white shadow-xl flex flex-col justify-between">
            <BriefcaseBusiness className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold">Agency &amp; Reseller Growth Suite</h3>
            <p className="text-xs text-amber-100 mt-2">Manage multiple client sites with dedicated WHM control panels and custom branding.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="site-container grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-slate-200 p-8 bg-white shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Reseller Hosting Partner</h3>
              <p className="text-xs text-slate-500 mt-1">Start selling web hosting under your own company name.</p>
              <div className="mt-6 text-4xl font-black text-slate-950">Rs 1,850<span className="text-xs text-slate-500">/month</span></div>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-600" /> WHM &amp; cPanel Access</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-600" /> Free White-Label Nameservers</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-600" /> Unlimited Client Accounts</li>
              </ul>
            </div>
            <button className="mt-8 w-full rounded-xl bg-amber-600 py-3.5 text-sm font-bold text-white shadow-md hover:bg-amber-700">Start Reselling &rarr;</button>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 bg-white shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">360° Business Growth Toolkit</h3>
              <p className="text-xs text-slate-500 mt-1">All-in-one marketing, security, and analytics tools.</p>
              <div className="mt-6 text-4xl font-black text-slate-950">Rs 950<span className="text-xs text-slate-500">/month</span></div>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-600" /> SEO &amp; Traffic Analyzers</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-600" /> Advanced SSL &amp; Firewall Suites</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-600" /> Priority Business Support</li>
              </ul>
            </div>
            <button className="mt-8 w-full rounded-xl bg-amber-600 py-3.5 text-sm font-bold text-white shadow-md hover:bg-amber-700">Get Toolkit &rarr;</button>
          </div>
        </div>
      </section>
    </>
  )
}
export default BusinessHostingHero