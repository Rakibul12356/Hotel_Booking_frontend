import type { Hotel } from '../types/hotel'

const maldivesGallery = [
  'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472224371017-08207f84aaae?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop',
]

const defaultReviews = [
  {
    id: '1',
    author: 'John Smith',
    date: 'December 2024',
    rating: 5,
    comment:
      'Amazing stay! The villa exceeded our expectations. The private pool and beach access were highlights of our trip. Sarah was an excellent host, always responsive and helpful.',
    avatar: 'https://i.pravatar.cc/96?img=12',
  },
  {
    id: '2',
    author: 'Emma Wilson',
    date: 'November 2024',
    rating: 5,
    comment:
      'Perfect location for a family vacation. The villa was spotlessly clean and well-maintained. The kitchen was fully equipped, and we loved cooking meals while enjoying the ocean view.',
    avatar: 'https://i.pravatar.cc/96?img=5',
  },
]

const defaultAmenities: Hotel['amenities'] = [
  { icon: 'beach', label: 'Beach access' },
  { icon: 'pool', label: 'Private pool' },
  { icon: 'wifi', label: 'Free Wi-Fi' },
  { icon: 'kitchen', label: 'Kitchen' },
]

export const hotels: Hotel[] = [
  {
    id: '1',
    name: 'Maldives Paradise',
    location: 'Maldives, Tropical Paradise',
    price: 450,
    rating: 5,
    roomsLeft: 3,
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop',
    reviewCount: 2,
    host: 'Sarah',
    guests: 6,
    bedrooms: 3,
    beds: 4,
    description:
      'Experience luxury in this stunning beachfront villa nestled in the heart of the Maldives. Our spacious 3-bedroom villa offers breathtaking ocean views, private pool, and direct beach access. Enjoy modern amenities, traditional Maldivian architecture, and unparalleled comfort in this tropical paradise.',
    amenities: defaultAmenities,
    gallery: maldivesGallery,
    reviews: defaultReviews,
  },
  {
    id: '2',
    name: 'Ocean View Resort',
    location: 'Bali, Indonesia',
    price: 320,
    rating: 4.8,
    roomsLeft: 5,
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1980&auto=format&fit=crop',
    reviewCount: 18,
    host: 'Made',
    guests: 4,
    bedrooms: 2,
    beds: 3,
    description:
      'Wake up to panoramic ocean views in this serene Bali resort. Tropical gardens, infinity pool, and spacious suites make it ideal for couples and small families.',
    amenities: defaultAmenities,
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1980&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1980&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1980&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1980&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1980&auto=format&fit=crop',
    ],
    reviews: defaultReviews,
  },
  {
    id: '3',
    name: 'Skyline Suites',
    location: 'Dubai, UAE',
    price: 580,
    rating: 4.7,
    roomsLeft: 2,
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1980&auto=format&fit=crop',
    reviewCount: 31,
    host: 'Ahmed',
    guests: 5,
    bedrooms: 2,
    beds: 3,
    description:
      'Luxury high-rise suites with skyline views, premium amenities, and easy access to Dubai landmarks.',
    amenities: defaultAmenities,
    gallery: maldivesGallery,
    reviews: defaultReviews,
  },
  {
    id: '4',
    name: 'Alpine Retreat',
    location: 'Zermatt, Switzerland',
    price: 410,
    rating: 4.9,
    roomsLeft: 4,
    image:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1980&auto=format&fit=crop',
    reviewCount: 12,
    host: 'Claire',
    guests: 6,
    bedrooms: 3,
    beds: 5,
    description:
      'Cozy alpine lodge with mountain views, fireplace lounge, and ski-in access during winter season.',
    amenities: defaultAmenities,
    gallery: maldivesGallery,
    reviews: defaultReviews,
  },
  {
    id: '5',
    name: 'Desert Oasis Hotel',
    location: 'Marrakech, Morocco',
    price: 275,
    rating: 4.6,
    roomsLeft: 6,
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1980&auto=format&fit=crop',
    reviewCount: 9,
    host: 'Youssef',
    guests: 4,
    bedrooms: 2,
    beds: 2,
    description:
      'Traditional riad-style stay with courtyard pool, Moroccan breakfast, and walking distance to the medina.',
    amenities: defaultAmenities,
    gallery: maldivesGallery,
    reviews: defaultReviews,
  },
  {
    id: '6',
    name: 'Harbor Lights Inn',
    location: 'Santorini, Greece',
    price: 390,
    rating: 4.8,
    roomsLeft: 3,
    image:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1980&auto=format&fit=crop',
    reviewCount: 24,
    host: 'Elena',
    guests: 4,
    bedrooms: 2,
    beds: 3,
    description:
      'Cliffside inn overlooking the caldera with sunset terraces and classic Cycladic architecture.',
    amenities: defaultAmenities,
    gallery: maldivesGallery,
    reviews: defaultReviews,
  },
]

export const getHotelById = (id: string) => hotels.find((hotel) => hotel.id === id)
