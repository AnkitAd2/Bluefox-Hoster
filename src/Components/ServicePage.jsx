import React from 'react'
import { ArrowLeft, ShieldCheck, Zap, Server } from 'lucide-react'

const ServicePage = ({ service, onBack }) => {
  if (!service) return null

  return (
    <div className="site-container py-12">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 mb-8 cursor-pointer bg-transparent border-none"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>
      
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xl shadow-slate-900/5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-100 pb-8 mb-8">
          <div className="flex items-center gap-4">
            {service.image && (
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100 p-2">
                <img src={service.image} alt="" className="h-10 w-10 object-contain" />
              </span>
            )}
            <div>
              <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 mb-2">
                Blue Fox Hoster Cloud Infrastructure
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{service.title}</h1>
              <p className="mt-2 text-base text-slate-600">{service.description}</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white text-center min-w-[200px] shadow-lg shadow-blue-600/20">
            <span className="text-xs uppercase tracking-wider text-blue-200 font-bold block">Starting at</span>
            <span className="text-2xl font-black mt-1 block">Rs 499<span className="text-sm font-normal text-blue-100">/mo</span></span>
            <button 
              onClick={() => alert(`Redirecting to checkout for ${service.title}`)}
              className="mt-4 w-full bg-white text-blue-700 font-bold text-sm py-2.5 px-4 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer"
            >
              Deploy Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
            <Zap className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-bold text-slate-900 text-lg">Lightning Fast NVMe</h3>
            <p className="text-sm text-slate-600 mt-1">Enterprise storage optimized for ultra-low latency in Kathmandu and worldwide.</p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
            <ShieldCheck className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-bold text-slate-900 text-lg">99.9% Uptime SLA</h3>
            <p className="text-sm text-slate-600 mt-1">Guaranteed reliability with automated failover and daily backups.</p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
            <Server className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-bold text-slate-900 text-lg">24/7 Local Support</h3>
            <p className="text-sm text-slate-600 mt-1">Expert technical assistance from our dedicated engineers based in Nepal.</p>
          </div>
        </div>

        <div className="bg-blue-50/60 rounded-2xl border border-blue-100 p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to launch {service.title}?</h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mb-6">Experience secure infrastructure, instant provisioning, and seamless scalability.</p>
          <button 
            onClick={() => alert(`Configuring ${service.title}!`)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
          >
            Configure & Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServicePage