import {
  FaBed,
  FaDoorOpen,
  FaKitchenSet,
  FaPersonSwimming,
  FaUmbrellaBeach,
  FaUser,
  FaWifi,
} from 'react-icons/fa6'
import { HiStar } from 'react-icons/hi2'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { BookingDateRange } from '../../components/BookingDateRange'
import { ReviewModal } from './components/ReviewModal'
import type { HotelAmenity } from '../../types/hotel'
import { getHotelById } from '../../data/hotels'

const amenityIcons: Record<HotelAmenity['icon'], React.ReactNode> = {
  beach: <FaUmbrellaBeach />,
  pool: <FaPersonSwimming />,
  wifi: <FaWifi />,
  kitchen: <FaKitchenSet />,
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {Array.from({ length: 5 }).map((_, index) => (
      <HiStar
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
      />
    ))}
  </div>
)

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>()
  const hotel = id ? getHotelById(id) : undefined
  const [checkIn, setCheckIn] = useState<Date | null>(null)
  const [checkOut, setCheckOut] = useState<Date | null>(null)
  const [guests, setGuests] = useState(1)
  const [isReviewOpen, setIsReviewOpen] = useState(false)

  if (!hotel) {
    return <Navigate to="/" replace />
  }

  const [mainImage, ...galleryImages] = hotel.gallery

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="mb-6">
          <h1 className="mb-2 text-3xl font-bold">{hotel.name}</h1>
          <div className="flex flex-wrap items-center text-gray-600">
            <HiStar className="mr-1 h-4 w-4 text-yellow-500" />
            <span>{hotel.rating}</span>
            <span className="mx-2">·</span>
            <span>{hotel.reviewCount} reviews</span>
            <span className="mx-2">·</span>
            <span>{hotel.location}</span>
          </div>
        </div>

        <div className="mb-8 grid h-auto grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 md:h-[500px]">
          <div className="sm:col-span-2 md:col-span-2 md:row-span-2">
            <img
              src={mainImage}
              alt="Main room"
              className="h-64 w-full rounded-lg object-cover md:h-full"
            />
          </div>
          {galleryImages.slice(0, 4).map((image, index) => (
            <div key={image + index} className="hidden sm:block">
              <img
                src={image}
                alt={`Room ${index + 1}`}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-6 border-b border-gray-300 pb-6">
              <h2 className="mb-4 text-2xl font-semibold">
                Entire villa hosted by {hotel.host}
              </h2>
              <div className="grid grid-cols-1 gap-4 text-gray-600 sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <FaUser />
                  <span>{hotel.guests} guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaDoorOpen />
                  <span>{hotel.bedrooms} bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBed />
                  <span>{hotel.beds} beds</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-4 text-xl font-semibold">About this place</h3>
              <p className="leading-relaxed text-gray-700">{hotel.description}</p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">What this place offers</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {hotel.amenities.map((amenity) => (
                  <div key={amenity.label} className="flex items-center gap-2">
                    {amenityIcons[amenity.icon]}
                    <span>{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-lg lg:sticky lg:top-24">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold">${hotel.price}</span>
                  <span className="ml-1 text-gray-600">per night</span>
                </div>
                <div className="flex items-center">
                  <HiStar className="mr-1 h-4 w-4 text-yellow-500" />
                  <span>{hotel.rating}</span>
                </div>
              </div>

              <BookingDateRange
                checkIn={checkIn}
                checkOut={checkOut}
                onCheckInChange={setCheckIn}
                onCheckOutChange={setCheckOut}
              >
                <input
                  type="number"
                  min={1}
                  max={hotel.guests}
                  value={guests}
                  onChange={(event) => setGuests(Number(event.target.value))}
                  placeholder="Guests"
                  className="w-full border-t border-gray-300 p-3 focus:outline-none"
                />
              </BookingDateRange>

              <Link
                to={`/payment/${hotel.id}`}
                className="block w-full rounded-lg bg-[#53B8AF] py-3 text-center text-white transition-all hover:brightness-90"
              >
                Reserve
              </Link>

              <div className="mt-4 text-center text-gray-600">
                <p>You won&apos;t be charged yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-gray-300 px-4 py-12 md:px-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <h2 className="text-2xl font-semibold">Reviews</h2>
            <div className="flex items-center">
              <HiStar className="mr-2 h-5 w-5 text-yellow-500" />
              <span className="text-xl font-semibold">{hotel.rating}</span>
              <span className="mx-2">·</span>
              <span className="text-gray-600">{hotel.reviewCount} reviews</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsReviewOpen(true)}
            className="rounded-lg border border-gray-400 px-4 py-2 hover:bg-gray-100"
          >
            Write a Review
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {hotel.reviews.map((review) => (
            <div key={review.id} className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{review.author}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="leading-relaxed text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      <ReviewModal
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
      />
    </div>
  )
}

export default PropertyDetails
