import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertyHero, PropertySearchParams } from './components/PropertyHero';
import { StatsBanner } from './components/StatsBanner';
import { MapSection } from './components/MapSection';
import { PropertyListings } from './components/PropertyListings';
import { InteriorShowcase } from './components/InteriorShowcase';
import { Testimonials } from './components/Testimonials';
import { HowItWorksPage } from './components/HowItWorksPage';
import { ContactPage } from './components/ContactPage';
import { AboutPage } from './components/AboutPage';
import { PropertyDetailPage } from './components/PropertyDetailPage';
import { Footer } from './components/Footer';
import { NigerianProperty } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('HOME');
  const [selectedProperty, setSelectedProperty] = useState<NigerianProperty | null>(null);
  const [propertyFilters, setPropertyFilters] = useState<PropertySearchParams>({
    query: '',
    type: '',
    minPrice: '',
    maxPrice: '',
  });

  const handleHomeSearch = (criteria: { location: string; type: string; budget: string }) => {
    console.log('Searching properties from Home:', criteria);
    setPropertyFilters({
      query: criteria.location,
      type: criteria.type,
      minPrice: '',
      maxPrice: criteria.budget,
    });
    setActiveTab('PROPERTY');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePropertySearch = (params: PropertySearchParams) => {
    console.log('Searching properties from PropertyHero:', params);
    setPropertyFilters(params);
  };

  const handleTabSelect = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProperty = (property: NigerianProperty) => {
    setSelectedProperty(property);
    setActiveTab('PROPERTY_DETAIL');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-[#4cb882]/20 selection:text-[#2d7752]">
      {/* Header with Logo, Navigation Links, Search & Profile */}
      <Navbar
        activeTab={activeTab === 'PROPERTY_DETAIL' ? 'PROPERTY' : activeTab}
        onSelectTab={handleTabSelect}
        onHeaderSearch={(query) => {
          setPropertyFilters({
            query,
            type: '',
            minPrice: '',
            maxPrice: '',
          });
          setActiveTab('PROPERTY');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1 flex flex-col justify-start">
        {activeTab === 'PROPERTY_DETAIL' && selectedProperty ? (
          /* Dedicated Property Detail Page View */
          <PropertyDetailPage
            property={selectedProperty}
            onBack={() => handleTabSelect('PROPERTY')}
            onSelectProperty={handleSelectProperty}
          />
        ) : activeTab === 'PROPERTY' ? (
          /* Dedicated Property Listings Page View */
          <div className="flex flex-col">
            <PropertyHero
              onSearch={handlePropertySearch}
              onNavigateHome={() => handleTabSelect('HOME')}
            />
            <PropertyListings
              isPropertyPage={true}
              searchQuery={propertyFilters.query}
              selectedType={propertyFilters.type}
              minPrice={propertyFilters.minPrice}
              maxPrice={propertyFilters.maxPrice}
              onSelectProperty={handleSelectProperty}
              onResetFilters={() =>
                setPropertyFilters({
                  query: '',
                  type: '',
                  minPrice: '',
                  maxPrice: '',
                })
              }
              onNavigateToPropertyPage={() => {
                const el = document.getElementById('property-listings-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>
        ) : activeTab === 'HOW IT WORKS' ? (
          /* How It Works Page View */
          <HowItWorksPage
            onNavigateToProperties={() => handleTabSelect('PROPERTY')}
          />
        ) : activeTab === 'CONTACT' ? (
          /* Contact Us Page View */
          <ContactPage />
        ) : activeTab === 'ABOUT US' ? (
          /* About Us Page View */
          <AboutPage
            onNavigateToProperties={() => handleTabSelect('PROPERTY')}
          />
        ) : (
          /* Main Landing Page View (HOME) */
          <div className="flex flex-col">
            <Hero onSearch={handleHomeSearch} />
            <StatsBanner />
            <MapSection />
            <PropertyListings
              isPropertyPage={false}
              onNavigateToPropertyPage={() => handleTabSelect('PROPERTY')}
              onSelectProperty={handleSelectProperty}
            />
            <InteriorShowcase />
            <Testimonials />
          </div>
        )}
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
