import React, { useState } from 'react'
import NetworkBackground from './Components/NetworkBackground'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HostingComparisonSection from './Components/HostingComparisonSection'
import HowItWorks from './Components/HowItWorks'
import PricingSection from './Components/PricingSection'
import Footer from './Components/Footer'
import CompanySection from './Components/CompanySection'
import WhyEastHost from './Components/WhyEastHost'
import TargetAudienceSection from './Components/TargetAudienceSection'
import { CloudLandingSections, DomainLandingSections, ServerHostingHero } from './Components/ServiceLandingSections'
import NpLetterGenerator from './Components/NpLetterGenerator'

const App = () => {
  const [currentView, setCurrentView] = useState('home')

  return (
    <div id="top">
      <NetworkBackground />
      
      {/* Pass both navigation handler and active view to Navbar */}
      <Navbar onNavigate={setCurrentView} currentView={currentView} />

      {/* Conditionally render main homepage or .NP Generator */}
      {currentView === 'home' ? (
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
      ) : (
        <NpLetterGenerator onBack={() => setCurrentView('home')} />
      )}
    </div>
  )
}

export default App