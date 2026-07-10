export type HotelReview = {
  id: string
  author: string
  date: string
  rating: number
  comment: string
  avatar: string
}

export type HotelAmenity = {
  icon: 'beach' | 'pool' | 'wifi' | 'kitchen'
  label: string
}

export type Hotel = {
  id: string
  name: string
  location: string
  price: number
  rating: number
  roomsLeft: number
  image: string
  reviewCount: number
  host: string
  guests: number
  bedrooms: number
  beds: number
  description: string
  amenities: HotelAmenity[]
  gallery: string[]
  reviews: HotelReview[]
}
