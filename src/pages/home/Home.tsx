import { HotelCard } from './components/HotelCard'
import { hotels } from '../../data/hotels'

const Home = () => {
  return (
    <section className="px-2 md:px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </section>
  )
}

export default Home
