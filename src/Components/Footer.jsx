import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import BlueFoxLogo from '../assets/bluefoxlogo.svg'
import ESewaLogo from '../assets/esewalogo.png'
import Khalti from '../assets/khaltilogo.png'
import ImePay from '../assets/Ime.png'
import Fonepay from '../assets/fonepay.png'
import Visa from '../assets/visa.png'

const linkGroups = [
  {
    title: 'Services & pricing',
    links: [
      { label: 'Hosting options', href: '#server-hosting' },
      { label: 'Web hosting plans & prices', href: '#server-plans' },
      { label: 'Domain prices', href: '#domain-pricing' },
    ],
  },
  {
    title: 'Explore & help',
    links: [
      { label: 'FAQs & billing information', href: '#support' },
      { label: 'Why choose Blue Fox Hoster', href: '#company' },
      { label: 'Free .np letter generator', href: '#generator' },
    ],
  },
]

const paymentMethods = [
  { name: 'eSewa', image: ESewaLogo },
  { name: 'Khalti', image: Khalti },
  { name: 'IME Pay', image: ImePay },
  { name: 'Fonepay', image: Fonepay },
  { name: 'Visa', image: Visa },
  { name: 'Bank transfer', color: 'bg-slate-900/90 text-slate-300 border-slate-800' },
  { name: 'PayPal', color: 'bg-slate-900/90 text-slate-300 border-slate-800' },
]

const Footer = ({ onNavigate, currentView }) => {
  const handleHomeClick = (e) => {
    e.preventDefault()
    if (currentView !== 'home') {
      onNavigate?.('home')
      window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 80)
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSectionLink = (e, href) => {
    if (!href.startsWith('#')) return
    e.preventDefault()

    if (href === '#generator') {
      onNavigate?.('generator')
      return
    }

    const scrollToTarget = () => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    if (currentView !== 'home') {
      onNavigate?.('home')
      window.setTimeout(scrollToTarget, 80)
      return
    }

    scrollToTarget()
  }

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-300 font-sans">
      <div className="site-container py-12 sm:py-16">
        {/* Main Grid Section */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          
          {/* Brand Info & Contacts */}
          <div className="space-y-4">
            <a 
              href="#top" 
              onClick={handleHomeClick}
              className="inline-block focus:outline-none hover:opacity-90 transition-opacity" 
              aria-label="Blue Fox Hoster Home"
            >
              <img
                src={BlueFoxLogo}
                alt="Blue Fox Hoster"
                className="h-11 w-auto max-w-[11rem] object-contain"
              />
            </a>

            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Web hosting, VPS, domains and cloud services for businesses in Nepal.
            </p>

          </div>

          {/* Navigation Link Columns */}
          {linkGroups.map((group) => (
            <nav aria-label={group.title} key={group.title}>
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      className="text-slate-400 transition-colors hover:text-blue-400" 
                      href={link.href}
                      onClick={(e) => handleSectionLink(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">Need help choosing a plan? Talk to our team.</p>
            <div className="mt-4 space-y-3">
              <a 
                href="tel:+9779802755605"
                className="flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-blue-400"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-600/20 text-blue-400">
                  <span aria-hidden="true">☎</span>
                </span>
                +977-9802-7556-05
              </a>
              <a
                href="https://wa.me/9779802755605"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 px-3 py-2 text-sm font-semibold text-slate-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Accepted Payment Options */}
        <div className="mt-12 border-t border-slate-800/80 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Payment options
              </span>
              <p className="mt-0.5 text-xs text-slate-500">
                eSewa, Khalti, IME Pay, Fonepay, Visa, bank transfer and PayPal. Confirm available methods during checkout.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {paymentMethods.map((method) =>
                method.image ? (
                  <div
                    key={method.name}
                    className="flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 shadow-sm transition-all hover:border-slate-300 hover:scale-105"
                    title={method.name}
                  >
                    <img
                      src={method.image}
                      alt={method.name}
                      className="h-6 w-auto max-w-[5rem] object-contain"
                    />
                  </div>
                ) : (
                  <span
                    key={method.name}
                    className={`rounded-lg border px-3 py-2 text-xs font-semibold hover:border-slate-700 transition-all ${method.color}`}
                  >
                    {method.name}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Copyright and pricing note */}
        <div className="mt-8 border-t border-slate-800/50 pt-6 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div>
            &copy; {new Date().getFullYear()} <span className="font-semibold text-slate-400">Blue Fox Hoster</span>. All rights reserved.
          </div>
          <p className="text-center text-slate-400">Prices are shown in Nepalese rupees (Rs); check each plan for its billing term.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer