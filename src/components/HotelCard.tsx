import { PiBedBold } from 'react-icons/pi'
import { HiStar } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

export type Hotel = {
  id: string
  name: string
  location: string
  price: number
  rating: number
  roomsLeft: number
  image: string
}

type HotelCardProps = {
  hotel: Hotel
}

export const HotelCard = ({ hotel }: HotelCardProps) => {
  return (
    <Link to={`/details/${hotel.id}`} className="group block">
      <div>
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="h-64 w-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold">
            <PiBedBold className="mr-1 inline-block" />
            {hotel.roomsLeft} Rooms Left
          </div>
        </div>

        <div className="mt-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">{hotel.name}</h3>
            <div className="flex items-center">
              <HiStar className="h-4 w-4 text-yellow-500" />
              <span className="ml-1 text-zinc-600">{hotel.rating}</span>
            </div>
          </div>

          <p className="mt-1 text-sm text-zinc-500">{hotel.location}</p>

          <div className="mt-2 flex items-center justify-between">
            <div>
              <span className="font-bold">${hotel.price}</span>
              <span className="text-sm text-zinc-500"> per night</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
