import React from 'react'

const reasons = [
  {
    icon: 'M4 5h16v6H4zM4 13h16v6H4zM7 8h.01M7 16h.01',
    title: 'Enterprise infrastructure',
    description: 'NVMe SSD, LiteSpeed and CloudLinux. 99.9% uptime.',
  },
  {
    icon: 'M4 7h14a2 2 0 0 1 2 2v9H6a2 2 0 0 1-2-2V7Zm0 2a2 2 0 0 1 2-2V5h12v2M15 12h5m-5 0a2 2 0 1 0 0 4h5v-4h-5Z',
    title: 'Pay locally',
    description: 'eSewa, Khalti, bank or PayPal. No card needed.',
  },
  {
    icon: 'M3 13v-2a9 9 0 0 1 18 0v2M3 13h4v7H5a2 2 0 0 1-2-2v-5Zm18 0h-4v7h2a2 2 0 0 0 2-2v-5Z',
    title: 'Support that answers',
    description: 'Call, WhatsApp, Viber, live chat.',
  },
  {
    icon: 'm20 12-8 8-9-9V4h7l10 8ZM7.5 7.5h.01',
    title: 'Plain flat pricing',
    description: 'The real price, no strike-through bait.',
  },
  {
    icon: 'M6 3h9l5 5v13H6zM14 3v6h6M9 13h8M9 17h8',
    title: '.np domains, handled',
    description: 'We prepare the cover letter and paperwork, free.',
  },
  {
    icon: 'M7 7h11l-3-3m3 3-3 3M17 17H6l3 3m-3-3 3-3',
    title: 'Free migration',
    description: 'We move your cPanel site, zero downtime.',
  },
]

const questions = [
  {
    question: 'Where is the cloud infrastructure located?',
    answer: 'Fox Host lists a Tier-3 sovereign datacenter in Kathmandu. Choose a Nepal-based VPS for local workloads, or review the US and Europe VPS options in the hosting plans.',
  },
  {
    question: 'Which hosting plan should I choose?',
    answer: 'Web and WordPress hosting suit standard websites. Python and Node.js hosting are listed for application deployments, while VPS plans provide a server option for workloads that need more control.',
  },
  {
    question: 'How can I pay?',
    answer: 'Checkout supports eSewa, Khalti, bank transfer, and PayPal. Online payments are listed for instant activation; bank transfers require confirmation.',
  },
  {
    question: 'How is the listed price billed?',
    answer: 'Each plan shows its monthly starting price and billing term. Review the term and total at checkout before placing an order.',
  },
]

const CompanySection = () => (
  <>
    <section id="company" className="site-section scroll-mt-32 overflow-hidden bg-gradient-to-br from-[#3189ed] via-[#176fd2] to-[#0d55ad] py-16 font-sans text-white sm:py-20">
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <span aria-hidden="true" className="mx-auto block h-1 w-4 rounded-full bg-white/70" />
          <h2 className="section-title mt-6 font-bold">Why choose us?</h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {reasons.map((reason) => (
            <article className="min-h-48 rounded-xl border border-white/15 bg-white/[0.07] p-6 transition-colors hover:bg-white/[0.11] sm:p-7" key={reason.title}>
              <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={reason.icon} />
                </svg>
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">{reason.title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-blue-100">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="support" className="site-section scroll-mt-32 bg-white/75 py-16 sm:py-20">
      <div className="site-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">Quick answers</p>
            <h2 className="section-title mt-3 font-bold text-slate-950">Before you get started</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Compare the options and billing terms, or contact the team if you need help choosing.</p>
            <a href="tel:+9779815111199" className="mt-5 inline-flex font-semibold text-blue-700 hover:text-blue-900">Talk to the team <span aria-hidden="true" className="ml-2">&rarr;</span></a>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {questions.map((item) => (
              <details className="group py-4" key={item.question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-slate-900 marker:content-none">
                  {item.question}
                  <span aria-hidden="true" className="text-xl font-normal text-blue-700 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pt-3 pr-8 text-sm leading-relaxed text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
      </div>
    </section>
  </>
)

export default CompanySection