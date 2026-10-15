import React, { useState } from 'react'
import NetworkBackground from './Components/NetworkBackground'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HowItWorks from './Components/HowItWorks'
import PricingSection from './Components/PricingSection'
import Footer from './Components/Footer'
import CompanySection from './Components/CompanySection'
import WhyEastHost from './Components/WhyEastHost'
import TargetAudienceSection from './Components/TargetAudienceSection'
import { CloudLandingSections, DomainLandingSections, ServerHostingHero } from './Components/ServiceLandingSections'
import NpLetterGenerator from './Components/NpLetterGenerator'
import ServicePage from './Components/ServicePage'

// Server & Hosting pages
import WebHostingHero from './Components/WebHostingHero'
import CloudHostingHero from './Components/CloudHostingHero'
import WordPressHostHero from './Components/WordPressHostHero'
import EcomHostHero from './Components/EcomHostHero'
import DjangoHostHero from './Components/DjangoHostHero'
import PythonHostHero from './Components/PythonHostHero'
import NodeJsHostHero from './Components/NodeJsHostHero'
import UsaVpsHero from './Components/UsaVpsHero'
import EuropeVpsHero from './Components/EuropeVpsHero'
import NepalVpsHero from './Components/NepalVpsHero'

// Inline placeholders to prevent missing file errors
export const HostingOptionsHero = ({ onBack }) => (
  <div className="site-section py-16 font-sans"><div className="site-container">
    <button onClick={onBack} className="mb-8 px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold shadow-sm">← Back</button>
    <h1 className="text-2xl font-bold">Hosting Options</h1>
  </div></div>
)

export const CodeBasedHero = ({ onBack }) => (
  <div className="site-section py-16 font-sans"><div className="site-container">
    <button onClick={onBack} className="mb-8 px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold shadow-sm">← Back</button>
    <h1 className="text-2xl font-bold">Code Based Hosting</h1>
  </div></div>
)

export const BusinessHostingHero = ({ onBack }) => (
  <div className="site-section py-16 font-sans"><div className="site-container">
    <button onClick={onBack} className="mb-8 px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold shadow-sm">← Back</button>
    <h1 className="text-2xl font-bold">Business & Reseller Hosting</h1>
  </div></div>
)

// Email & Cloud pages
import {
  GoogleWorkspaceHero,
  GoogleCloudHero,
  NordVpnHero,
  Office365Hero,
  OfficeLtscHero,
  CopilotHero,
  PowerBiHero,
  AzureHero,
  ZohoCrmHero,
  BiginZohoHero,
  ZohoMailHero,
  ZohoWorkplaceHero,
  AwsHero,
  ZoomHero,
  MicrosoftDefenderHero,
} from './Components/EmailCloudPages'

const App = () => {
  const [currentView, setCurrentView] = useState('home')
  const [selectedService, setSelectedService] = useState(null)

  const handleNavigate = (view, data = null) => {
    setCurrentView(view)
    if (data) setSelectedService(data)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const backHome = () => handleNavigate('home')

  return (
    <div id="top" className="relative min-h-screen w-full bg-slate-50/30 font-sans antialiased">
      <NetworkBackground />
      
      <Navbar onNavigate={handleNavigate} currentView={currentView} />

      <main className="relative z-10">
        {/* ── HOME ── */}
        {currentView === 'home' && (
          <>
            <Hero />
            <DomainLandingSections />
            <ServerHostingHero onNavigate={handleNavigate} />
            <PricingSection />
            <CloudLandingSections onNavigate={handleNavigate} />
            <HowItWorks />
            <WhyEastHost />
            <TargetAudienceSection />
            <CompanySection />
            <Footer />
          </>
        )}

        {/* ── TOOLS ── */}
        {currentView === 'generator' && <NpLetterGenerator onBack={backHome} />}

        {/* ── SERVER & HOSTING ── */}
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
        {currentView === 'reseller-hosting'   && <BusinessHostingHero  onBack={backHome} />}
        {currentView === 'business-toolkit'   && <BusinessHostingHero  onBack={backHome} />}
        {currentView === 'bluefox-hosting'    && <CodeBasedHero        onBack={backHome} />}

        {/* ── EMAIL & CLOUD ── */}
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

        {/* ── GENERIC SERVICE FALLBACK ── */}
        {currentView === 'service' && (
          <ServicePage service={selectedService} onBack={backHome} />
        )}
      </main>
    </div>
  )
}

export default App