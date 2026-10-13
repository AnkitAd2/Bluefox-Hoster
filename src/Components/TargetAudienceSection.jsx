import React from 'react'
import Robot1 from '../assets/robot_1_transparent.svg'
import Robot2 from '../assets/robot_2_transparent.svg'  
import Robot3 from '../assets/robot_3_transparent.svg'
import Robot4 from '../assets/robot_4_transparent.svg'

const TargetAudienceSection = () => {
  // Common Gradient Style for Primary Buttons
  const gradientBtnClass = `
    w-full py-2.5 px-4 rounded-xl text-white font-bold text-xs
    bg-gradient-to-br from-[#1d7af2] to-[#0c61cf]
    hover:from-[#2585ff] hover:to-[#106de7]
    hover:shadow-[0_8px_24px_rgba(12,97,207,0.4)]
    transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-95
  `

  // Card Data
  const cards = [
    {
      id: '01',
      tag: '01 / SOLOPRENEURS',
      imageBadge: '⚡ 99.99% Guaranteed',
      title: 'WEBSITE OWNERS',
      description: 'Hosting for your first or fifth site, on your terms.',
      bullets: [
        'Automated zero-downtime updates',
        'Free domain & SSL certificates',
        'Friendly 24/7 human guidance'
      ],
      btnText: 'Explore Website Hosting',
      avatarBg: 'bg-amber-100/60',
      image: Robot1
    },
    {
      id: '02',
      tag: '02 / AGENCIES',
      imageBadge: '⚡ 1-Click Staging',
      title: 'WEB DESIGNERS',
      description: 'Perfect for hosting portfolios, mockups, and client previews.',
      bullets: [
        'Instant staging & clone domains',
        'White-label client handoff links',
        'Figma/WordPress sync support'
      ],
      btnText: 'Explore Designer Stacks',
      avatarBg: 'bg-sky-100/60',
      image: Robot2
    },
    {
      id: '03',
      tag: '03 / MEDIA & AUDIO',
      imageBadge: '✔ Edge CDN Powered',
      title: 'CREATORS',
      description: 'Launch and grow blogs, podcasts, and digital products.',
      bullets: [
        'Built-in lightning Edge caching',
        'Bandwidth spikes automatically absorbed',
        'Digital downloads & LMS optimization'
      ],
      btnText: 'Explore Creator Plans',
      avatarBg: 'bg-purple-100/60',
      image: Robot3
    },
    {
      id: '04',
      tag: '04 / GROWTH & SCALE',
      imageBadge: '⚡ Sub-Second TTFB',
      title: 'MARKETING TEAMS',
      description: 'Reliable, scalable hosting for landing pages and campaigns.',
      bullets: [
        'Sub-second page speeds for ad ROAS',
        'A/B test subdomain generator',
        'DDoS protection during product drops'
      ],
      btnText: 'Explore Campaign Hosting',
      avatarBg: 'bg-emerald-100/60',
      image: Robot4
    }
  ]

  // Comparison Table Data
  const comparisonRows = [
    { feature: 'Websites', starter: '1', growth: '∞', eastHost: '∞', ultimate: '∞' },
    { feature: 'Storage', starter: '5 GB', growth: '∞', eastHost: '∞', ultimate: '∞' },
    { feature: 'Email Accounts', starter: '5', growth: '10', eastHost: '∞', ultimate: '∞' },
    { feature: 'Backup Frequency', starter: 'Weekly', growth: 'Daily', eastHost: 'Daily', ultimate: 'Daily' },
    { feature: 'Price/mo', starter: '₹120', growth: '₹240', eastHost: '₹420', ultimate: '₹720', isPrice: true }
  ]

  return (
    <section className="site-section w-full bg-slate-50/50 py-16 font-sans">
      <div className="site-container">
        
        {/* ================= 1. SECTION HEADER ================= */}
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 border border-blue-200/80 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            TAILORED HOSTING INFRASTRUCTURE
          </span>

          <h2 className="section-title font-extrabold text-slate-900 tracking-tight mb-4 text-left">
            WHO <span className="text-blue-600">BLUE FOX HOSTER</span> IS FOR: <br />
            PERFECT FOR THESE WEB ACHIEVERS
          </h2>

          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl text-left">
            Whether you are publishing your flagship portal or orchestrating hundreds of client environments, experience frictionless server performance built for results.
          </p>
        </div>

        {/* ================= 2. PERSONA CARDS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-slate-200/80 rounded-3xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Tag */}
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                  <span>{card.tag}</span>
                </div>

                {/* Character Banner Area */}
                <div className={`w-full h-40 rounded-2xl ${card.avatarBg} border border-slate-200/60 p-3 relative flex items-center justify-center overflow-hidden mb-5`}>
                  {/* Character Illustration Slot */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-20 h-20 object-contain drop-shadow-md"
                  />

                  {/* Overlay Badge on Image */}
                  <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-sm text-slate-800 text-[9px] font-bold px-2.5 py-1 rounded-md shadow-sm border border-slate-200/80 flex items-center gap-1">
                    {card.imageBadge}
                  </div>
                </div>

                {/* Card Title & Description */}
                <h3 className="text-base font-extrabold text-slate-900 mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed min-h-[36px]">
                  {card.description}
                </p>

                {/* Bullets List */}
                <ul className="space-y-2 mb-6">
                  {card.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <span className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="leading-tight">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <button className={gradientBtnClass}>
                  <span>{card.btnText}</span>
                  <span>&rarr;</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* ================= 3. HOSTING PLAN COMPARISON TABLE ================= */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm mb-16 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-slate-100 gap-2">
            <h3 className="text-lg font-bold text-slate-900">
              Hosting Plan Comparison
            </h3>
            <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider self-start sm:self-auto">
              ALL PLANS INCLUDE FREE SSL
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase text-[10px] tracking-wider">
                  <th className="py-3 px-4">FEATURE</th>
                  <th className="py-3 px-4 text-center">Starter</th>
                  <th className="py-3 px-4 text-center">Growth</th>
                  <th className="py-3 px-4 text-center bg-blue-50/80 text-blue-600 rounded-t-xl">
                    East Host ★
                  </th>
                  <th className="py-3 px-4 text-center">Ultimate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={row.isPrice ? 'bg-slate-50/50 font-bold' : ''}>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center">{row.starter}</td>
                    <td className="py-3.5 px-4 text-center">{row.growth}</td>
                    
                    {/* Highlighted Column */}
                    <td className={`py-3.5 px-4 text-center bg-blue-50/80 text-blue-600 font-bold ${row.isPrice ? 'bg-blue-100/70 text-blue-700 text-sm' : ''}`}>
                      {row.eastHost}
                    </td>

                    <td className="py-3.5 px-4 text-center">{row.ultimate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= 4. BOTTOM CTA BANNER (UPDATED TO GRADIENT BLUE) ================= */}
        <div className="bg-gradient-to-br from-[#1d7af2] to-[#0c61cf] hover:from-[#2585ff] hover:to-[#106de7] hover:shadow-[0_8px_24px_rgba(12,97,207,0.4)] transition-all duration-300 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-blue-400/30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left Content */}
            <div className="text-center lg:text-left max-w-xl">
              <span className="inline-flex items-center gap-1.5 bg-white/15 text-white border border-white/20 rounded-full px-3 py-1 text-[11px] font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Zero Downtime Migration Guarantee
              </span>

              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
                Ready to elevate your web presence with East Host?
              </h3>

              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed font-normal">
                Join thousands of creators, agencies, and businesses powered by high-concurrency cloud architecture.
              </p>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <button className="w-full sm:w-auto bg-white text-blue-700 hover:bg-blue-50 font-extrabold text-xs px-6 py-3.5 rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2">
                <span>Get Started Now</span>
                <span>&rarr;</span>
              </button>

              <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2">
                <span>💬 Talk to Migration Expert</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default TargetAudienceSection