import { Outlet } from 'react-router-dom'
import  Navbar  from './Navbar'

export function Layout() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="mx-auto container px-4 md:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}
