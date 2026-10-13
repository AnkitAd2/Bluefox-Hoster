import React from 'react'
import RobotSad from '../assets/robot_no_background.svg'
import happyRobot from '../assets/robot_5_transparent.svg'

const WhyEastHost = () => {
  const weakPoints = [
    'Custom development costs more than the idea earns',
    'No-code tools hit a wall at logins, payments and data',
    'Templates make every product look the same',
    'Handoffs between design and dev lose months',
    'Platforms lock your product inside their walls',
  ]

  const strongPoints = [
    'Performance-tuned enterprise hardware',
    'Proactive 24/7 server monitoring and defense',
    'One-click installs for all major CMS & app frameworks',
    'Guaranteed 99.99% uptime with service level agreement',
    'Expert-level developer and admin support',
  ]

  return (
    <section className="site-section w-full bg-slate-50/50 py-16 font-sans overflow-hidden">
      <div className="site-container relative">
        
        {/* ================= 1. HEADER SECTION ================= */}
        <div className="relative mb-14 max-w-2xl pb-4 lg:max-w-none lg:pr-44">
          
          {/* Top Pill Badge */}
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#0c73d5] border border-blue-200/80 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0c73d5]"></span>
            THE HOSTING REALITY CHECK
          </span>

          {/* Main Title */}
          <h2 className="section-title font-extrabold text-slate-900 tracking-tight mb-4 text-left">
            Why This Works <br className="hidden sm:inline" />
            When You Couldn’t
          </h2>

          {/* Subtitle */}
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed text-left">
            Most platforms trap your workflow or crack under traffic spikes. <br className="hidden sm:inline" />
            Experience uncompromised hosting built for scale.
          </p>

          {/* Top Right Floating Scale Widget */}
          <div className="hidden lg:flex absolute right-0 top-0 w-36 h-36 bg-white rounded-3xl border border-blue-100 shadow-lg p-2.5 flex-col items-center justify-center translate-x-1/2 -translate-y-2">
            <div className="w-full h-full rounded-full border border-dashed border-blue-200 flex flex-col items-center justify-center gap-1 p-1">
              <span className="bg-blue-50 text-[#0c73d5] font-extrabold text-[8px] px-2 py-0.5 rounded-full border border-blue-100 uppercase">
                BLUE FOX HOSTER
              </span>
              <span className="bg-blue-50 text-[#0c73d5] font-extrabold text-[8px] px-2 py-0.5 rounded-full border border-blue-100 uppercase">
                CLOUD
              </span>
              <span className="bg-blue-50 text-[#0c73d5] font-extrabold text-[8px] px-2 py-0.5 rounded-full border border-blue-100 uppercase">
                SCALE
              </span>
            </div>

            {/* Globe Badge */}
            <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#0c73d5] text-white flex items-center justify-center text-xs shadow-md">
              🌐
            </div>
          </div>

        </div>

        {/* ================= 2. COMPARISON CARDS GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* LEFT CARD: MOST HOSTS ARE TOO WEAK */}
          <div className="relative bg-white border-2 border-red-500 rounded-3xl p-6 sm:p-8 shadow-[0_12px_30px_rgba(239,68,68,0.08)] flex flex-col justify-between">
            <div className="absolute -top-3 right-5 flex h-9 w-9 items-center justify-center rounded-full border-2 border-red-500 bg-white text-xl font-black text-red-500 shadow-sm">
              ✕
            </div>
            <div>
              {/* Character Image Slot */}
              <div className="w-full flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center overflow-hidden border border-red-200">
                  <img
                    src={RobotSad}
                    alt="Sad Host Character"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-left">
                Most hosts are too weak because:
              </h3>

              {/* Weaknesses List */}
              <div className="space-y-4 mb-8 text-left">
                {weakPoints.map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded bg-red-50 text-red-500 flex items-center justify-center text-xs font-black shrink-0 mt-0.5 border border-red-200">
                      ✕
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-normal font-medium">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Row */}
            <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-[11px] text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                High Maintenance & Lock-in
              </span>
              <span>Outdated infrastructure</span>
            </div>
          </div>

          {/* RIGHT CARD: EAST HOST WINS */}
          <div className="relative bg-white border-2 border-blue-400/80 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            
            {/* Superior Choice Badge */}
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] text-white text-[10px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
              THE SUPERIOR CHOICE
            </div>

            <div>
              {/* Character Image Slot */}
              <div className="w-full flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center overflow-hidden border border-blue-100">
                  <img
                    src={happyRobot}
                    alt="Happy East Host Character"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-left">
                East Host wins because it ships powerful hosting:
              </h3>

              {/* Strengths List */}
              <div className="space-y-4 mb-8 text-left">
                {strongPoints.map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded bg-blue-50 text-[#0c73d5] flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5 border border-blue-200">
                      ✓
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 leading-normal font-semibold">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Bottom Row */}
            <div className="border-t border-slate-100 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="flex items-center gap-2 text-xs font-semibold text-[#0c73d5]">
                <span className="w-2 h-2 rounded-full bg-[#0c73d5] animate-pulse"></span>
                Instant setup in under 60 seconds
              </span>

              {/* Custom Gradient Button */}
              <button className="w-full sm:w-auto bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] transition-all duration-300 ease-in-out hover:from-[#1e88e5] hover:to-[#1565c0] hover:shadow-[0_10px_28px_rgba(30,136,229,0.55)] hover:-translate-y-0.5 active:scale-95 text-white font-bold text-xs px-5 py-3 rounded-xl flex items-center justify-center gap-2">
                <span>Deploy With East Host</span>
                <span>&rarr;</span>
              </button>
            </div>

          </div>

        </div>

        {/* ================= 3. FOOTER GUARANTEES ================= */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-500">
          <span>30-Day Money-Back Guarantee</span>
          <span className="text-slate-300">•</span>
          <span>Zero Vendor Lock-in</span>
          <span className="text-slate-300">•</span>
          <span>Free Migration Assistance</span>
        </div>

      </div>
    </section>
  )
}

export default WhyEastHost