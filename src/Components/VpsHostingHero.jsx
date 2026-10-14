import React from 'react'
import { Check, MapPin, Server, Cpu, HardDrive } from 'lucide-react'
import Flag from '../assets/Flag_of_Nepal.svg.webp'

const vpsPlans = [
  { name: 'Nepal Based VPS', location: 'Kathmandu, NP', price: 'Rs 999', period: '/month', specs: '2 vCPU | 4 GB RAM | 80 GB NVMe', desc: 'Ultra-low latency for local Nepali users and institutions.' },
  { name: 'USA Based VPS', location: 'Virginia, USA', price: 'Rs 799', period: '/month', specs: '2 vCPU | 4 GB RAM | 100 GB SSD', desc: 'Global reach with dependable high-speed connectivity.' },
  { name: 'Europe Based VPS', location: 'Frankfurt, DE', price: 'Rs 849', period: '/month', specs: '2 vCPU | 4 GB RAM | 100 GB SSD', desc: 'Robust European infrastructure with GDPR compliance.' },
]

export const VpsHostingHero = ({ onBack }) => {
  return (
    <>
      {onBack && (
        <div className="bg-white border-b border-slate-200 py-3">
          <div className="site-container">
            <button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition-colors cursor-pointer bg-transparent border-none">
              &larr; Back to Home
            </button>
          </div>
        </div>
      )}

      <section className="site-section w-full bg-slate-50/50 pt-12 pb-10">
        <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700 mb-4">
              <span>03</span> VPS Hosting Infrastructure
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 leading-tight mb-4">
              Dedicated Virtual Servers in <span className="text-emerald-600">Nepal, USA &amp; Europe</span>.
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mb-6">
              Full root access, dedicated resources, and lightning-fast NVMe storage tailored for scaling databases and high-load web apps.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center gap-3 rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
              <MapPin className="h-6 w-6 text-emerald-600" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Nepal Local Datacenter</h4>
                <p className="text-xs text-slate-500">Zero international routing latency for local traffic.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
              <Cpu className="h-6 w-6 text-emerald-600" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Scalable CPU &amp; RAM</h4>
                <p className="text-xs text-slate-500">Instantly upgrade server specs from your client dashboard.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vpsPlans.map(v => (
              <div key={v.name} className="rounded-3xl border border-slate-200 p-8 bg-white shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">{v.location}</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-3">{v.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{v.desc}</p>
                  <div className="mt-4 bg-slate-50 p-3 rounded-xl text-xs font-bold text-slate-800">{v.specs}</div>
                  <div className="mt-6 text-4xl font-black text-slate-950">{v.price}<span className="text-xs text-slate-500">{v.period}</span></div>
                </div>
                <button className="mt-8 w-full rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-md hover:bg-emerald-700">Configure VPS &rarr;</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default VpsHostingHero