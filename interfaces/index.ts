export interface CardProps {
  title: string;
  description: string;
  image: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

// Address structure for each property
export interface Address {
  state: string;
  city: string;
  country: string;
}

// Offers structure (beds, showers, occupants)
export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

// Main property interface
export interface PropertyProps {
  id: number;
  name: string;             // Name of the property
  address: Address;         // Nested address object
  rating: number;           // Rating of the property
  category: string[];       // Array of categories/tags
  price: number;            // Price per stay or night
  offers: Offers;           // Nested offers object
  image: string;            // Image URL
  discount: string;         // Discount percentage as string (can be empty)
}

