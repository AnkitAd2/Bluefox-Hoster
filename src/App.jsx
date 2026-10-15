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
import WebHostingHero from './Components/WebHostingHero'
import CloudHostingHero from './Components/CloudHostingHero'
import WordPressHostHero from './Components/WordPressHostHero'
import EcomHostHero from './Components/EcomHostHero' // Import eCommerce hosting hero

const App = () => {
  const [currentView, setCurrentView] = useState('home')
  const [selectedService, setSelectedService] = useState(null)

  const handleNavigate = (view, data = null) => {
    setCurrentView(view)
    if (data) setSelectedService(data)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div id="top" className="relative min-h-screen w-full bg-slate-50/30 font-sans antialiased">
      <NetworkBackground />
      
      <Navbar onNavigate={handleNavigate} currentView={currentView} />

      <main className="relative z-10">
        {currentView === 'home' && (
          <>
            <Hero />
            <DomainLandingSections />
            <ServerHostingHero />
            <PricingSection />
            <CloudLandingSections />
            <HowItWorks />
            <WhyEastHost />
            <TargetAudienceSection />
            <CompanySection />
            <Footer />
          </>
        )}

        {currentView === 'generator' && (
          <NpLetterGenerator onBack={() => handleNavigate('home')} />
        )}

        {currentView === 'web-hosting' && (
          <WebHostingHero onBack={() => handleNavigate('home')} />
        )}

        {currentView === 'cloud-hosting' && (
          <CloudHostingHero onBack={() => handleNavigate('home')} />
        )}

        {currentView === 'wordpress-hosting' && (
          <WordPressHostHero onBack={() => handleNavigate('home')} />
        )}

        {currentView === 'ecommerce-hosting' && (
          <EcomHostHero onBack={() => handleNavigate('home')} />
        )}

        {currentView === 'service' && (
          <ServicePage service={selectedService} onBack={() => handleNavigate('home')} />
        )}
      </main>
    </div>
  )
}

export default App