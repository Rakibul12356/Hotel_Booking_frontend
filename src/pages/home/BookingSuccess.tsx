import { HiCheckCircle } from 'react-icons/hi2'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getHotelById } from '../../data/hotels'

const BookingSuccess = () => {
  const { id } = useParams<{ id: string }>()
  const hotel = id ? getHotelById(id) : undefined

  if (!hotel) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center md:px-6">
      <HiCheckCircle className="mx-auto h-16 w-16 text-[#53B8AF]" />
      <h1 className="mt-4 text-2xl font-bold">Booking request sent!</h1>
      <p className="mt-2 text-gray-600">
        Your request to book <span className="font-medium">{hotel.name}</span> has
        been submitted. The host will confirm shortly.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-lg bg-[#53B8AF] px-6 py-3 text-white transition-all hover:brightness-90"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default BookingSuccess
