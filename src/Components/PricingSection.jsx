import React, { useState } from 'react'

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('triennial')

  // Updated reusable button style with your exact gradient and interactive hover/active effects
  const gradientBtnStyle = `
    w-full py-3 px-4 rounded-xl text-white font-semibold text-sm 
    bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] 
    transition-all duration-300 ease-in-out 
    hover:from-[#1e88e5] hover:to-[#1565c0] 
    hover:shadow-[0_10px_28px_rgba(30,136,229,0.55)] 
    hover:-translate-y-0.5 active:scale-95 
    flex items-center justify-center gap-2
  `

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      icon: '☀️',
      pricing: {
        triennial: { price: '120', wasPrice: '400', savings: '70% SAVINGS', payInfo: 'Pay Rs 4,320 today for 3 full years.', renewInfo: 'Renews at same price on 9 October, 2029' },
        annual: { price: '180', wasPrice: '240', savings: '25% SAVINGS', payInfo: 'Pay Rs 2,160 today for 1 full year.', renewInfo: 'Renews at same price on 9 October, 2029' },
      },
      isPopular: false,
      features: [
        { label: 'Websites', value: '1 WEBSITE', isBlue: false },
        { label: 'Disk', value: '5GB', isBlue: false },
        { label: 'Bandwidth', value: 'UNLIMITED', isBlue: true },
        { label: 'Email', value: '5 ACCOUNTS', isBlue: false },
        { label: 'Backup', value: 'WEEKLY', isBlue: false },
      ]
    },
    {
      id: 'growth',
      name: 'Growth',
      icon: '🌱',
      pricing: {
        triennial: { price: '240', wasPrice: '800', savings: '70% SAVINGS', payInfo: 'Pay Rs 8,640 today for 3 full years.', renewInfo: 'Renews at same price on 9 October, 2029' },
        annual: { price: '360', wasPrice: '480', savings: '25% SAVINGS', payInfo: 'Pay Rs 4,320 today for 1 full year.', renewInfo: 'Renews at same price on 9 October, 2029' },
      },
      isPopular: false,
      features: [
        { label: 'Websites', value: 'UNLIMITED', isBlue: true },
        { label: 'Disk', value: 'UNLIMITED', isBlue: true },
        { label: 'Bandwidth', value: 'UNLIMITED', isBlue: true },
        { label: 'Email', value: '10 ACCOUNTS', isBlue: false },
        { label: 'Backup', value: 'DAILY', isBlue: false },
      ]
    },
    {
      id: 'east-host',
      name: 'Bluefox Hoster',
      subtitle: 'Best for growing businesses',
      icon: '⚡',
      pricing: {
        triennial: { price: '420', wasPrice: '1,400', savings: '70% SAVINGS', payInfo: 'Pay Rs 15,120 today for 3 full years.', renewInfo: 'Renews at same price on 9 October, 2029' },
        annual: { price: '620', wasPrice: '840', savings: '26% SAVINGS', payInfo: 'Pay Rs 7,440 today for 1 full year.', renewInfo: 'Renews at same price on 9 October, 2029' },
      },
      isPopular: true,
      popularTag: '★ TOP CHOICE • MOST POPULAR',
      features: [
        { label: 'Websites', value: 'UNLIMITED', isBlue: true },
        { label: 'Disk', value: 'UNLIMITED', isBlue: true },
        { label: 'Bandwidth', value: 'UNLIMITED', isBlue: true },
        { label: 'Email', value: 'UNLIMITED', isBlue: true },
        { label: 'Backup', value: 'DAILY', isBlue: false },
      ]
    },
    {
      id: 'ultimate',
      name: 'Ultimate',
      icon: '💎',
      pricing: {
        triennial: { price: '720', wasPrice: '2,400', savings: '70% SAVINGS', payInfo: 'Pay Rs 25,920 today for 3 full years.', renewInfo: 'Renews at same price on 9 October, 2029' },
        annual: { price: '980', wasPrice: '1,200', savings: '18% SAVINGS', payInfo: 'Pay Rs 11,760 today for 1 full year.', renewInfo: 'Renews at same price on 9 October, 2029' },
      },
      isPopular: false,
      features: [
        { label: 'Websites', value: 'UNLIMITED', isBlue: true },
        { label: 'Disk', value: 'UNLIMITED', isBlue: true },
        { label: 'Bandwidth', value: 'UNLIMITED', isBlue: true },
        { label: 'Email', value: 'UNLIMITED', isBlue: true },
        { label: 'Backup', value: 'DAILY', isBlue: false },
      ]
    }
  ]

  return (
    <section id="server-plans" className="site-section scroll-mt-28 w-full bg-slate-50/60 py-16 font-sans">
      <div className="site-container">
        
        {/* ================= 1. HEADER SECTION ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 border border-blue-200/80 rounded-full px-3 py-1 text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              {billingCycle === 'triennial' ? 'Special Triennial Discount Active' : 'Flexible Annual Pricing Available'}
            </span>
            <h2 className="section-title font-extrabold text-slate-900 tracking-tight">
              Choose Your Unlimited Hosting Plan
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-1">
              Plans made to match your needs and budget
            </p>
          </div>

          {/* Billing Cycle Toggle */}
          <div className="bg-white border border-slate-200 p-1 rounded-2xl flex items-center shadow-sm self-start md:self-auto">
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                billingCycle === 'annual'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Annually
            </button>
            <button
              onClick={() => setBillingCycle('triennial')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
                billingCycle === 'triennial'
                  ? 'bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Triennially</span>
              <span className="bg-white/20 text-white text-[9px] px-1.5 py-0.5 rounded-md font-extrabold">
                70% OFF
              </span>
            </button>
          </div>
        </div>

        {/* ================= 2. PRICING CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-14">
          {plans.map((plan) => {
            const currentPlan = plan.pricing[billingCycle]

            return (
            <div
              key={plan.id}
              className={`bg-white rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular
                  ? 'border-2 border-blue-500 shadow-2xl lg:-translate-y-2 z-10'
                  : 'border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {/* Featured Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-max bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] text-white text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  {plan.popularTag}
                </div>
              )}

              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-2 pt-1">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                    {plan.subtitle && (
                      <p className="text-[11px] text-slate-400">{plan.subtitle}</p>
                    )}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm">
                    {plan.icon}
                  </div>
                </div>

                {/* Price Display */}
                <div className="my-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-slate-800">₹</span>
                    <span className="text-4xl font-black text-slate-900">{currentPlan.price}</span>
                    <span className="text-xs text-slate-500 font-medium">/mo</span>
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-slate-400 line-through">
                      Was ₹{currentPlan.wasPrice}/mo
                    </span>
                    <span className="bg-blue-50 text-blue-600 text-[9px] font-extrabold px-2 py-0.5 rounded border border-blue-100">
                      {currentPlan.savings}
                    </span>
                  </div>
                </div>

                {/* Savings Subcard Box */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-[11px] text-slate-500 space-y-0.5 mb-6">
                  <p className="font-semibold text-slate-700">{currentPlan.payInfo}</p>
                  <p className="text-[10px] text-slate-400">{currentPlan.renewInfo}</p>
                </div>

                {/* Action Button */}
                <div className="mb-6">
                  <button className={gradientBtnStyle}>
                    <span>Order Now</span>
                    <span>&rarr;</span>
                  </button>
                </div>

                {/* Features Divider */}
                <div className="border-t border-slate-100 pt-4 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Included Features
                  </span>

                  {/* Feature Rows */}
                  <div className="space-y-3 text-xs">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-slate-500 font-medium flex items-center gap-1.5">
                          <span className="text-blue-500 text-[10px]">✔</span>
                          {feat.label}
                        </span>
                        <span
                          className={`font-bold ${
                            feat.isBlue
                              ? 'bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[10px]'
                              : 'text-slate-800 text-[11px]'
                          }`}
                        >
                          {feat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
            )
          })}
        </div>

        {/* ================= 3. BOTTOM STATS BANNER ================= */}
        <div className="bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] transition-all duration-300 ease-in-out hover:shadow-[0_10px_28px_rgba(30,136,229,0.55)] text-white rounded-3xl p-6 sm:p-8 shadow-xl mb-12 border border-blue-400/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-blue-400/30">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-3xl sm:text-4xl font-extrabold mb-1">99.9%</span>
              <span className="text-xs text-blue-100 font-medium">Uptime Guarantee</span>
              <div className="flex gap-1 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-3xl sm:text-4xl font-extrabold mb-1">70%</span>
              <span className="text-xs text-blue-100 font-medium">Triennial Plan Savings</span>
              <div className="w-16 h-1.5 bg-white/20 rounded-full mt-2 overflow-hidden">
                <div className="w-3/4 h-full bg-emerald-400 rounded-full"></div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-3xl sm:text-4xl font-extrabold mb-1">Daily</span>
              <span className="text-xs text-blue-100 font-medium">Growth+ Plan Backups</span>
              <div className="flex items-end gap-1 h-3 mt-2">
                <span className="w-1 h-2 bg-white/40 rounded-sm"></span>
                <span className="w-1 h-3 bg-white/70 rounded-sm"></span>
                <span className="w-1 h-full bg-emerald-400 rounded-sm"></span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-3xl sm:text-4xl font-extrabold mb-1">24 / 7</span>
              <span className="text-xs text-blue-100 font-medium">Expert Support Available</span>
              <div className="flex items-center gap-1 text-[10px] text-emerald-300 font-bold mt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Always On
              </div>
            </div>

          </div>
        </div>

        {/* ================= 4. FOOTER GUARANTEES ================= */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-2">
            <span className="text-blue-600">🛡️</span>
            <span>30-Day Money-Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-600">⚡</span>
            <span>99.9% Uptime Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-600">💬</span>
            <span>24/7/365 Expert Support</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default PricingSection