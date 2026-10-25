/**
 * App.jsx — The Root Component of Blue Fox Hoster
 * ═══════════════════════════════════════════════════════
 * This is the MAIN component that controls the entire application.
 * It acts like a "page router" — deciding which page/component to show
 * based on the 'currentView' state variable.
 *
 * KEY CONCEPTS USED:
 * - useState: To track which page is currently active
 * - Conditional rendering (&&): To show/hide pages based on state
 * - Props (onBack, onNavigate): To pass navigation functions to child components
 */

import React, { useState } from 'react'

// ── LAYOUT COMPONENTS (always present on homepage) ──────────────────
import NetworkBackground from './Components/NetworkBackground'   // Animated background
import Navbar from './Components/Navbar'                         // Top navigation bar
import Hero from './Components/Hero'                             // Main homepage banner
import HowItWorks from './Components/HowItWorks'                 // Step-by-step section
import PricingSection from './Components/PricingSection'         // Pricing comparison
import Footer from './Components/Footer'                         // Bottom footer
import CompanySection from './Components/CompanySection'         // Trusted companies section
import WhyEastHost from './Components/WhyEastHost'               // Why choose us section
import TargetAudienceSection from './Components/TargetAudienceSection' // Who is this for?

// ── LANDING SECTIONS (big sections on the homepage) ─────────────────
import {
  CloudLandingSections,    // Email & Cloud services overview section
  DomainLandingSections,   // Domain registration section
  ServerHostingHero,       // Server & Hosting overview section
} from './Components/ServiceLandingSections'

// ── TOOL PAGES ───────────────────────────────────────────────────────
import NpLetterGenerator from './Components/NpLetterGenerator'  // .NP domain letter tool
import ServicePage from './Components/ServicePage'              // Generic service page

// ── SERVER & HOSTING PAGES ───────────────────────────────────────────
// These are the individual pages for each hosting service
import WebHostingHero from './Components/WebHostingHero'         // Shared web hosting
import CloudHostingHero from './Components/CloudHostingHero'     // Cloud hosting
import WordPressHostHero from './Components/WordPressHostHero'   // WordPress hosting
import EcomHostHero from './Components/EcomHostHero'             // eCommerce hosting
import DjangoHostHero from './Components/DjangoHostHero'         // Django (Python) hosting
import PythonHostHero from './Components/PythonHostHero'         // Python hosting
import NodeJsHostHero from './Components/NodeJsHostHero'         // Node.js hosting
import UsaVpsHero from './Components/UsaVpsHero'                 // USA VPS servers
import EuropeVpsHero from './Components/EuropeVpsHero'           // Europe VPS servers
import NepalVpsHero from './Components/NepalVpsHero'             // Nepal VPS servers
import HostingOptionsHero from './Components/HostingOptionsHero' // All hosting options overview
import { CodeBasedHero } from './Components/CodeBasedHero'       // Code-based hosting overview
import { BusinessHostingHero } from './Components/BusinessHostingHero' // Reseller & business

// ── EMAIL & CLOUD PAGES ──────────────────────────────────────────────
// These are the individual pages for each cloud/email service
import {
  GoogleWorkspaceHero,     // Google Workspace (Gmail, Drive, Meet)
  GoogleCloudHero,         // Google Cloud Console
  NordVpnHero,             // NordVPN security
  Office365Hero,           // Microsoft Office 365
  OfficeLtscHero,          // Office LTSC 2024 (perpetual license)
  CopilotHero,             // Microsoft Copilot AI
  PowerBiHero,             // Microsoft Power BI
  AzureHero,               // Microsoft Azure Cloud
  ZohoCrmHero,             // Zoho CRM
  BiginZohoHero,           // Bigin by Zoho CRM
  ZohoMailHero,            // Zoho Mail
  ZohoWorkplaceHero,       // Zoho Workplace
  AwsHero,                 // Amazon Web Services
  ZoomHero,                // Zoom video meetings
  MicrosoftDefenderHero,   // Microsoft Defender security
} from './Components/EmailCloudPages'

/**
 * App Component — The Root of the Application
 * ─────────────────────────────────────────────
 * This component maintains the navigation state and renders
 * the appropriate page based on what the user clicked.
 */
const App = () => {
  // 'currentView' tracks which page to show.
  // Default is 'home' — the main landing page.
  const [currentView, setCurrentView] = useState('home')

  // 'selectedService' stores extra data when navigating to a service page
  const [selectedService, setSelectedService] = useState(null)

  /**
   * handleNavigate — Called whenever the user navigates to a new page
   * @param {string} view  - The name of the page to show (e.g., 'web-hosting')
   * @param {object} data  - Optional extra data (e.g., service details)
   */
  const handleNavigate = (view, data = null) => {
    setCurrentView(view)                          // Change the displayed page
    if (data) setSelectedService(data)            // Save any extra data
    window.scrollTo({ top: 0, behavior: 'smooth' }) // Scroll to top of page
  }

  // Shortcut function to go back to the homepage
  const backHome = () => handleNavigate('home')

  return (
    // The outer wrapper div — full screen, light gray background
    <div id="top" className="relative min-h-screen w-full bg-slate-50/30 font-sans antialiased">
      {/* Animated dot/network background — always visible */}
      <NetworkBackground />

      {/* Sticky navigation bar — always visible at top */}
      <Navbar onNavigate={handleNavigate} currentView={currentView} />

      {/* Main content area — changes based on currentView */}
      <main className="relative z-10">

        {/* ══ HOME PAGE ══════════════════════════════════════════════
            Show all homepage sections when currentView is 'home'.
            The && operator means "if true, render this component". */}
        {currentView === 'home' && (
          <>
            <Hero />                                              {/* Big hero banner */}
            <DomainLandingSections />                             {/* Domain section */}
            <ServerHostingHero onNavigate={handleNavigate} />    {/* Hosting section */}
            <PricingSection />                                    {/* Pricing table */}
            <CloudLandingSections onNavigate={handleNavigate} /> {/* Cloud section */}
            <HowItWorks />                                        {/* How it works */}
            <WhyEastHost />                                       {/* Why choose us */}
            <TargetAudienceSection />                             {/* Who it's for */}
            <CompanySection />                                    {/* Trusted brands */}
            <Footer />                                            {/* Footer */}
          </>
        )}

        {/* ══ TOOL PAGES ═══════════════════════════════════════════ */}
        {currentView === 'generator' && <NpLetterGenerator onBack={backHome} />}

        {/* ══ SERVER & HOSTING PAGES ═══════════════════════════════
            Each line shows one hosting page.
            'onBack' prop lets the page navigate back to home. */}
        {currentView === 'web-hosting'        && <WebHostingHero       onBack={backHome} />}
        {currentView === 'cloud-hosting'      && <CloudHostingHero     onBack={backHome} />}
        {currentView === 'wordpress-hosting'  && <WordPressHostHero    onBack={backHome} />}
        {currentView === 'ecommerce-hosting'  && <EcomHostHero         onBack={backHome} />}
        {currentView === 'django-hosting'     && <DjangoHostHero       onBack={backHome} />}
        {currentView === 'python-hosting'     && <PythonHostHero       onBack={backHome} />}
        {currentView === 'nodejs-hosting'     && <NodeJsHostHero       onBack={backHome} />}
        {currentView === 'usa-vps'            && <UsaVpsHero           onBack={backHome} />}
        {currentView === 'europe-vps'         && <EuropeVpsHero        onBack={backHome} />}
        {currentView === 'nepal-vps'          && <NepalVpsHero         onBack={backHome} />}
        {currentView === 'hosting-options'    && <HostingOptionsHero   onBack={backHome} />}
        {currentView === 'code-based'         && <CodeBasedHero        onBack={backHome} />}
        {currentView === 'bluefox-hosting'    && <CodeBasedHero        onBack={backHome} />}
        {currentView === 'reseller-hosting'   && <BusinessHostingHero  onBack={backHome} />}
        {currentView === 'business-toolkit'   && <BusinessHostingHero  onBack={backHome} />}

        {/* ══ EMAIL & CLOUD PAGES ══════════════════════════════════ */}
        {currentView === 'google-workspace'   && <GoogleWorkspaceHero  onBack={backHome} />}
        {currentView === 'google-cloud'       && <GoogleCloudHero      onBack={backHome} />}
        {currentView === 'nordvpn'            && <NordVpnHero          onBack={backHome} />}
        {currentView === 'office-365'         && <Office365Hero        onBack={backHome} />}
        {currentView === 'office-ltsc'        && <OfficeLtscHero       onBack={backHome} />}
        {currentView === 'copilot'            && <CopilotHero          onBack={backHome} />}
        {currentView === 'power-bi'           && <PowerBiHero          onBack={backHome} />}
        {currentView === 'azure'              && <AzureHero            onBack={backHome} />}
        {currentView === 'zoho-crm'           && <ZohoCrmHero          onBack={backHome} />}
        {currentView === 'bigin-zoho'         && <BiginZohoHero        onBack={backHome} />}
        {currentView === 'zoho-mail'          && <ZohoMailHero         onBack={backHome} />}
        {currentView === 'zoho-workplace'     && <ZohoWorkplaceHero    onBack={backHome} />}
        {currentView === 'aws'                && <AwsHero              onBack={backHome} />}
        {currentView === 'zoom'               && <ZoomHero             onBack={backHome} />}
        {currentView === 'microsoft-defender' && <MicrosoftDefenderHero onBack={backHome} />}

        {/* ══ GENERIC SERVICE FALLBACK ════════════════════════════
            Used for any service that doesn't have its own dedicated page */}
        {currentView === 'service' && (
          <ServicePage service={selectedService} onBack={backHome} />
        )}

      </main>
    </div>
  )
}

export default App
