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

import React, { lazy, Suspense, useState } from 'react'

// ── LAYOUT COMPONENTS (always present on homepage) ──────────────────
import NetworkBackground from './Components/NetworkBackground'   // Animated background
import Navbar from './Components/Navbar'                         // Top navigation bar
import Hero from './Components/Hero'                             // Main homepage banner
import Brands from './Components/Brands'                         // Associated organizations slider
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

import { usePriceStore } from './utils/priceCatalog'

const lazyNamedComponent = (loadModule, exportName) => lazy(() =>
  loadModule().then((module) => ({ default: module[exportName] }))
)

const NpLetterGenerator = lazy(() => import('./Components/NpLetterGenerator'))
const ServicePage = lazy(() => import('./Components/ServicePage'))
const LoginSignupPage = lazy(() => import('./Components/LoginSignupPage'))
const AdminDashboard = lazy(() => import('./Components/AdminDashboard'))

const WebHostingHero = lazy(() => import('./Components/WebHostingHero'))
const CloudHostingHero = lazy(() => import('./Components/CloudHostingHero'))
const WordPressHostHero = lazy(() => import('./Components/WordPressHostHero'))
const EcomHostHero = lazy(() => import('./Components/EcomHostHero'))
const DjangoHostHero = lazy(() => import('./Components/DjangoHostHero'))
const PythonHostHero = lazy(() => import('./Components/PythonHostHero'))
const NodeJsHostHero = lazy(() => import('./Components/NodeJsHostHero'))
const UsaVpsHero = lazy(() => import('./Components/UsaVpsHero'))
const EuropeVpsHero = lazy(() => import('./Components/EuropeVpsHero'))
const NepalVpsHero = lazy(() => import('./Components/NepalVpsHero'))
const HostingOptionsHero = lazy(() => import('./Components/HostingOptionsHero'))
const CodeBasedHero = lazyNamedComponent(() => import('./Components/CodeBasedHero'), 'CodeBasedHero')
const BusinessHostingHero = lazyNamedComponent(() => import('./Components/BusinessHostingHero'), 'BusinessHostingHero')

const loadEmailCloudPage = () => import('./Components/EmailCloudPages')
const GoogleWorkspaceHero = lazyNamedComponent(loadEmailCloudPage, 'GoogleWorkspaceHero')
const GoogleCloudHero = lazyNamedComponent(loadEmailCloudPage, 'GoogleCloudHero')
const NordVpnHero = lazyNamedComponent(loadEmailCloudPage, 'NordVpnHero')
const Office365Hero = lazyNamedComponent(loadEmailCloudPage, 'Office365Hero')
const OfficeLtscHero = lazyNamedComponent(loadEmailCloudPage, 'OfficeLtscHero')
const CopilotHero = lazyNamedComponent(loadEmailCloudPage, 'CopilotHero')
const PowerBiHero = lazyNamedComponent(loadEmailCloudPage, 'PowerBiHero')
const AzureHero = lazyNamedComponent(loadEmailCloudPage, 'AzureHero')
const ZohoCrmHero = lazyNamedComponent(loadEmailCloudPage, 'ZohoCrmHero')
const BiginZohoHero = lazyNamedComponent(loadEmailCloudPage, 'BiginZohoHero')
const ZohoMailHero = lazyNamedComponent(loadEmailCloudPage, 'ZohoMailHero')
const ZohoWorkplaceHero = lazyNamedComponent(loadEmailCloudPage, 'ZohoWorkplaceHero')
const AwsHero = lazyNamedComponent(loadEmailCloudPage, 'AwsHero')
const ZoomHero = lazyNamedComponent(loadEmailCloudPage, 'ZoomHero')
const MicrosoftDefenderHero = lazyNamedComponent(loadEmailCloudPage, 'MicrosoftDefenderHero')

/**
 * App Component — The Root of the Application
 * ─────────────────────────────────────────────
 * This component maintains the navigation state and renders
 * the appropriate page based on what the user clicked.
 */
const App = () => {
  usePriceStore()
  // 'currentView' tracks which page to show.
  // Default is 'home' — the main landing page.
  const [currentView, setCurrentView] = useState(() => (
    window.location.pathname === '/admin' ? 'admin' : 'home'
  ))

  // 'selectedService' stores extra data when navigating to a service page
  const [selectedService, setSelectedService] = useState(null)

  /**
   * handleNavigate — Called whenever the user navigates to a new page
   * @param {string} view  - The name of the page to show (e.g., 'web-hosting')
   * @param {object} data  - Optional extra data (e.g., service details)
   */
  const handleNavigate = (view, data = null) => {
    if (view === 'admin') {
      window.history.pushState({}, '', '/admin')
    } else if (currentView === 'admin') {
      window.history.pushState({}, '', '/')
    }
    setCurrentView(view)                          // Change the displayed page
    if (data) setSelectedService(data)            // Save any extra data
    window.scrollTo({ top: 0, behavior: 'smooth' }) // Scroll to top of page
  }

  // Shortcut function to go back to the homepage
  const backHome = () => handleNavigate('home')

  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentView(window.location.pathname === '/admin' ? 'admin' : 'home')
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  if (currentView === 'admin') {
    return (
      <Suspense fallback={<div className="site-container py-20 text-center text-slate-600" role="status">Loading page...</div>}>
        <AdminDashboard onExit={backHome} />
      </Suspense>
    )
  }

  return (
    // The outer wrapper div — full screen, light gray background
    <div id="top" className="relative min-h-screen w-full bg-slate-50/30 font-sans antialiased">
      {/* Animated dot/network background — always visible */}
      <NetworkBackground />

      {/* Sticky navigation bar — always visible at top */}
      <Navbar onNavigate={handleNavigate} currentView={currentView} />

      {/* Main content area — changes based on currentView */}
      <main key={currentView} className="page-enter relative z-10">
        <Suspense fallback={<div className="site-container py-20 text-center text-slate-600" role="status">Loading page...</div>}>

        {/* ══ HOME PAGE ══════════════════════════════════════════════
            Show all homepage sections when currentView is 'home'.
            The && operator means "if true, render this component". */}
        {currentView === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />                  {/* Big hero banner */}
            <Brands />                                            {/* Associated brands slider */}
            <DomainLandingSections />                             {/* Domain section */}
            <ServerHostingHero onNavigate={handleNavigate} />    {/* Hosting section */}
            <PricingSection />                                    {/* Pricing table */}
            <CloudLandingSections onNavigate={handleNavigate} /> {/* Cloud section */}
            <HowItWorks />                                        {/* How it works */}
            <WhyEastHost />                                       {/* Why choose us */}
            <TargetAudienceSection onNavigate={handleNavigate} /> {/* Who it's for */}
            <CompanySection />                                    {/* Trusted brands */}
          </>
        )}

        {/* ══ TOOL PAGES ═══════════════════════════════════════════ */}
        {currentView === 'generator' && <NpLetterGenerator onBack={backHome} />}
        {currentView === 'auth' && <LoginSignupPage onBack={backHome} />}

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

        </Suspense>
      </main>
      <Footer onNavigate={handleNavigate} currentView={currentView} />
    </div>
  )
}

export default App
