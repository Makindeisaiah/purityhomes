export interface NigerianProperty {
  id: string;
  name: string;
  address: string;
  neighborhood: string;
  city: 'Lagos' | 'Abuja' | 'Port Harcourt' | 'Ibadan';
  state: string;
  pricePerYear: number;
  priceFormatted: string;
  rentalPeriod: 'per year' | 'per month' | 'per night';
  type: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  galleryImages: string[];
  status: 'Available' | 'Serviced' | 'New Listing' | 'Hot Deal';
  featured?: boolean;
  serviceCharge?: string;
  cautionFee?: string;
  legalAgencyFee?: string;
  powerSupply: string; // e.g., '24/7 Power (Solar + Dual Gen)'
  amenities: string[];
  description: string;
  verifiedLandlord: boolean;
}

export interface NigerianLocation {
  id: string;
  name: string;
  city: string;
  state: string;
  image: string;
  propertyCount: number;
  startingPrice: string;
  tag: string;
}

export interface PropertySearchParams {
  query: string;
  type: string;
  minPrice: string;
  maxPrice: string;
  city?: string;
  neighborhood?: string;
}
