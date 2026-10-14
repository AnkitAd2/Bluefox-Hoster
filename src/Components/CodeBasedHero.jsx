import React from 'react'
import { Check, CodeXml, Coffee, Layers3, Hexagon, Terminal } from 'lucide-react'

const codePlans = [
  { name: 'Bluefox Java Environment', price: 'Rs 350', period: '/month', desc: 'Reliable Java and Tomcat hosting environments.', features: ['Dedicated JVM', 'Custom Memory Heap', 'Tomcat / Spring Boot Support'] },
  { name: 'Django & Python Stack', price: 'Rs 290', period: '/month', desc: 'Seamless path to production for Python applications.', features: ['Gunicorn & Uwsgi', 'PostgreSQL Ready', 'Virtualenv Support'] },
  { name: 'Node.js Runtime', price: 'Rs 250', period: '/month', desc: 'Modern JavaScript runtimes with NPM integration.', features: ['PM2 Process Manager', 'WebSockets Enabled', 'Fast SSD I/O'] },
]

export const CodeBasedHero = ({ onBack }) => {
  return (
    <>
      {onBack && (
        <div className="bg-white border-b border-slate-200 py-3">
          <div className="site-container">
            <button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-800 transition-colors cursor-pointer bg-transparent border-none">
              &larr; Back to Home
            </button>
          </div>
        </div>
      )}

      <section className="site-section w-full bg-slate-50/50 pt-12 pb-10">
        <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-1 text-xs font-bold text-violet-700 mb-4">
              <span>02</span> Code Based Hosting
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 leading-tight mb-4">
              Deploy <span className="text-violet-600">Python, Java, Node.js &amp; Django</span> instantly.
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mb-6">
              Developer-friendly server stacks configured for production workloads with full SSH access and Git CI/CD support.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-900 p-6 text-slate-200 shadow-2xl font-mono text-xs leading-relaxed">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-3 text-slate-400">
              <Terminal className="h-4 w-4 text-violet-400" /> bluefox@terminal ~ ssh server-01
            </div>
            <p className="text-emerald-400">$ git push origin production</p>
            <p className="text-slate-400">Building dependencies for Python / Django / Node...</p>
            <p className="text-blue-400">Successfully deployed to Kathmandu Node-3!</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {codePlans.map(cp => (
              <div key={cp.name} className="rounded-3xl border border-slate-200 p-8 bg-white shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{cp.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{cp.desc}</p>
                  <div className="mt-6 text-4xl font-black text-slate-950">{cp.price}<span className="text-xs text-slate-500">{cp.period}</span></div>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    {cp.features.map(f => <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-violet-600" /> {f}</li>)}
                  </ul>
                </div>
                <button className="mt-8 w-full rounded-xl bg-violet-600 py-3.5 text-sm font-bold text-white shadow-md hover:bg-violet-700">Deploy Now &rarr;</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default CodeBasedHero