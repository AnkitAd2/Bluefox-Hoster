import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      stepNumber: '01',
      badge: 'STEP 01',
      title: 'STEP 1: CHOOSE YOUR PLAN',
      description:
        'From individual blogs to large e-commerce sites, select the perfect hosting package. Shared, VPS, and Dedicated options available.',
      icon: (
        <svg className="w-6 h-6 text-[#0c73d5] transition-colors duration-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      stepNumber: '02',
      badge: 'STEP 02',
      title: 'STEP 2: REGISTER YOUR DOMAIN',
      description:
        'Use our seamless domain search to find and secure your perfect .com, .net, or specialized extension.',
      icon: (
        <svg className="w-6 h-6 text-[#0c73d5] transition-colors duration-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      stepNumber: '03',
      badge: 'STEP 03',
      title: 'STEP 3: LAUNCH IN MINUTES',
      description:
        'Benefit from one-click application installs (WordPress, etc.) and our user-friendly control panel. Instant activation.',
      icon: (
        <svg className="w-6 h-6 text-[#0c73d5] transition-colors duration-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      stepNumber: '04',
      badge: 'STEP 04',
      title: 'STEP 4: WE\'RE HERE TO HELP',
      description:
        'Access 24/7 expert support via live chat or ticket. Guaranteed 99.9% uptime and reliable performance.',
      icon: (
        <svg className="w-6 h-6 text-[#0c73d5] transition-colors duration-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636l3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ]

  return (
    <section className="site-section w-full bg-slate-50/50 py-16 font-sans">
      <style>{`
        .step-card {
          isolation: isolate;
          overflow: hidden;
        }
        .step-card::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(to right, #0c73d5, #0e6cc8);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1), background 300ms ease-in-out;
        }
        .step-card:hover::before {
          transform: scaleX(1);
          background: linear-gradient(to right, #1e88e5, #1565c0);
        }
        @media (prefers-reduced-motion: reduce) {
          .step-card::before {
            transition: none;
          }
        }
      `}</style>
      <div className="site-container text-left">
        
        {/* ================= 1. HEADER SECTION ================= */}
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#0c73d5] border border-blue-200/80 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wide mb-4">
            ✦ HOW IT WORKS • GETTING STARTED
          </span>

          <h2 className="section-title font-extrabold text-slate-900 tracking-tight mb-4">
            <span className="text-[#0c73d5]">Blue Fox Hoster:</span> Your Web Hosting: Step by Step
          </h2>

          <p className="text-slate-500 text-sm sm:text-base max-w-2xl leading-relaxed">
            Launch your website effortlessly with our high-speed infrastructure, intuitive setup, and expert guidance at every turn.
          </p>
        </div>

        {/* ================= 2. STEP CARDS GRID ================= */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          
          {/* Subtle Dotted Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 border-t-2 border-dashed border-blue-200/80 -translate-y-12 pointer-events-none z-0"></div>

          {steps.map((item, idx) => (
            <div
              key={idx}
              className="step-card group relative z-10 border border-slate-200/80 bg-white rounded-3xl p-6 shadow-sm hover:shadow-[0_10px_28px_rgba(30,136,229,0.55)] hover:-translate-y-0.5 active:scale-95 hover:border-transparent transition-all duration-300 ease-in-out flex flex-col items-center text-center justify-between"
            >
              <div className="relative z-10 w-full">
                {/* Top Row: Badge + Step Number */}
                <div className="flex items-center justify-between w-full mb-6">
                  <span className="bg-blue-50 text-[#0c73d5] text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider border border-blue-100 transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white group-hover:border-white/25">
                    {item.badge}
                  </span>
                  <span className="text-2xl font-black text-slate-400/80 transition-colors duration-500 group-hover:text-white/80">
                    {item.stepNumber}
                  </span>
                </div>

                {/* Soft Icon Box */}
                <div className="w-14 h-14 bg-blue-50 border border-blue-100/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner transition-colors duration-500 group-hover:bg-white/15 group-hover:border-white/25">
                  {item.icon}
                </div>

                {/* Step Title */}
                <h3 className="text-sm font-extrabold text-slate-900 tracking-tight uppercase mb-3 px-2 transition-colors duration-500 group-hover:text-white">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-slate-500 leading-relaxed font-normal transition-colors duration-500 group-hover:text-blue-100">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= 3. CALL TO ACTION BUTTON ================= */}
        <div className="flex flex-col items-center justify-center gap-3">
          <button className="bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] transition-all duration-300 ease-in-out hover:from-[#1e88e5] hover:to-[#1565c0] hover:shadow-[0_10px_28px_rgba(30,136,229,0.55)] hover:-translate-y-0.5 active:scale-95 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md flex items-center gap-2">
            <span>START HOSTING TODAY</span>
            <span className="text-base">&rarr;</span>
          </button>

          {/* Subtext Guarantees */}
          <p className="text-xs font-medium text-slate-400 mt-2">
            30-Day Money-Back Guarantee • Instant Server Provisioning • No Hidden Fees
          </p>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks