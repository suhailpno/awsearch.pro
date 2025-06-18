import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import MainLayout from './layouts/MainLayout';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import ExpertiseSection from './components/ExpertiseSection';
import IndustriesSection from './components/IndustriesSection';
import ImpactSection from './components/ImpactSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ExpertiseSection />
        <IndustriesSection />
        <ImpactSection />
        <ContactSection />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;