import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="space-y-4 text-center">
      <h1 className="text-3xl font-bold tracking-tight">404</h1>
      <p className="text-gray-600">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </section>
  )
}
