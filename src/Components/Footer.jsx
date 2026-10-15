import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from 'react-icons/fa6'
import BlueFoxLogo from '../assets/bluefoxlogo.svg'
import ESewaLogo from '../assets/esewalogo.png'
import IMELogo from '../assets/Ime.png'
import FONEPAY from '../assets/fonepay.png'
import visaLogo from '../assets/visa.png'
import Khalti from '../assets/khaltilogo.png'

const linkGroups = [
  {
    title: 'Hosting Services',
    links: [
      { label: 'Web & WordPress Hosting', href: '#plans' },
      { label: 'Python & Node.js Hosting', href: '#plans' },
      { label: 'Nepal & Global VPS Locations', href: '#vps-servers' },
      { label: 'Cloud Servers & Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Support & Help',
    links: [
      { label: 'Common Questions (FAQ)', href: '#support' },
      { label: 'Payment Options & Billing', href: '#get-started' },
      { label: 'Contact Support Hub', href: 'tel:+9779815111199' },
      { label: '.NP Letter Generator', href: '#generator' },
    ],
  },
  {
    title: 'Blue Fox Hoster',
    links: [
      { label: 'About Infrastructure', href: '#company' },
      { label: 'Data Center Locations', href: '#company' },
      { label: 'Server Uptime Status', href: '#support' },
      { label: 'Get Started Today', href: '#get-started' },
    ],
  },
]

const paymentMethods = [
  { name: 'eSewa', image: ESewaLogo },
  { name: 'Khalti', image: Khalti },
  { name: 'IME Pay', image: IMELogo },
  { name: 'Fonepay', image: FONEPAY },
  { name: 'Visa / Mastercard', image: visaLogo },
  { name: 'Direct Bank Transfer', color: 'bg-slate-900/90 text-slate-300 border-slate-800' },
]

const socialLinks = [
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaXTwitter, href: 'https://twitter.com', label: 'X (Twitter)' },
  { icon: FaWhatsapp, href: 'https://wa.me/9779815111199', label: 'WhatsApp' },
]

const Footer = () => {
  const handleScrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
              onClick={handleScrollToTop}
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
              High-performance cloud hosting & sovereign digital infrastructure from Kathmandu, Nepal.
            </p>

            <div className="pt-1">
              <a 
                href="tel:+9779815111199" 
                className="group flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition-colors"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  📞
                </span>
                +977-9802-7556-05
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                Connect With Us
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:border-blue-500/50 hover:bg-blue-600/20 hover:text-blue-400 transition-all"
                  >
                    <social.icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
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
                      className="text-slate-400 hover:text-blue-400 transition-colors" 
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Accepted Payment Options */}
        <div className="mt-12 border-t border-slate-800/80 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Accepted Payment Options in Nepal &amp; Global
              </span>
              <p className="text-xs text-slate-500 mt-0.5">
                Instant digital wallet activation &amp; automated eSewa/Khalti billing.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {paymentMethods.map((method) =>
                method.image ? (
                  <div
                    key={method.name}
                    className="flex h-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/90 px-3 py-1.5 shadow-sm hover:border-slate-700 transition-all hover:scale-105"
                    title={method.name}
                  >
                    <img
                      src={method.image}
                      alt={method.name}
                      className="h-5 w-auto max-w-[4.5rem] object-contain"
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

        {/* Copyright & Legal Bar */}
        <div className="mt-8 border-t border-slate-800/50 pt-6 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div>
            &copy; {new Date().getFullYear()} <span className="font-semibold text-slate-400">Blue Fox Hoster</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Fast, Secure &amp; Low-Latency Nepal Cloud Hosting</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer