import { type FormEvent } from 'react'
import { HiChevronLeft, HiStar } from 'react-icons/hi2'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getHotelById } from '../../data/hotels'

const NIGHTS = 5
const CLEANING_FEE = 17.5
const SERVICE_FEE_RATE = 0.12

const PaymentProcess = () => {
  const { id } = useParams<{ id: string }>()
  const hotel = id ? getHotelById(id) : undefined

  if (!hotel) {
    return <Navigate to="/" replace />
  }

  const subtotal = hotel.price * NIGHTS
  const serviceFee = Number((subtotal * SERVICE_FEE_RATE).toFixed(2))
  const total = Number((subtotal + CLEANING_FEE + serviceFee).toFixed(2))

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      <div className="mb-8">
        <Link
          to={`/details/${hotel.id}`}
          className="inline-flex items-center text-zinc-800 hover:underline"
        >
          <HiChevronLeft className="mr-2 h-4 w-4" />
          Request to book
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <form onSubmit={handleSubmit}>
          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Your trip</h2>

            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium">Dates</h3>
                <p className="text-sm text-zinc-600">Jan 3 - 8, 2025</p>
              </div>
              <button type="button" className="text-sm text-zinc-800 underline">
                Edit
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Guests</h3>
                <p className="text-sm text-zinc-600">1 guest</p>
              </div>
              <button type="button" className="text-sm text-zinc-800 underline">
                Edit
              </button>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Pay with American Express</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Card number"
                className="w-full rounded-lg border p-3 focus:ring-2 focus:ring-primary focus:outline-none"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Expiration"
                  className="rounded-lg border p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="rounded-lg border p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Billing address</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Street address"
                className="w-full rounded-lg border p-3 focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <input
                type="text"
                placeholder="Apt or suite number"
                className="w-full rounded-lg border p-3 focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full rounded-lg border p-3 focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="State"
                  className="rounded-lg border p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="ZIP code"
                  className="rounded-lg border p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>
          </section>

          <Link
            to={`/booking/success/${hotel.id}`}
            className="mt-6 block w-full rounded-lg bg-[#53B8AF] py-3 text-center text-white transition-all hover:brightness-90"
          >
            Request to book
          </Link>
        </form>

        <div>
          <div className="sticky top-24 rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-start gap-4">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="h-20 w-20 rounded-lg object-cover"
              />
              <div>
                <p className="text-sm">{hotel.name}</p>
                <p className="mt-1 text-sm text-zinc-500">{hotel.location}</p>
                <div className="mt-1 flex items-center">
                  <HiStar className="mr-1 h-4 w-4 text-yellow-500" />
                  <span className="text-xs text-zinc-500">
                    {hotel.rating.toFixed(2)} ({hotel.reviewCount} Reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="mb-4 font-semibold">Price details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>
                    ${hotel.price} x {NIGHTS} nights
                  </span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cleaning fee</span>
                  <span>${CLEANING_FEE.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service fee</span>
                  <span>${serviceFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t pt-3 font-semibold">
                  <span>Total (USD)</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentProcess
