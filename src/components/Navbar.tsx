import { useEffect, useRef, useState } from 'react'
import { HiBars3, HiMagnifyingGlass, HiUser, HiXMark } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const menuItems = [
  { label: 'Login', to: '/login' },
  { label: 'Signup', to: '/signup' },
  { label: 'Help', to: '/help' },
]

const SearchBar = () => (
  <div className="flex w-full items-center rounded-full border border-gray-200 bg-white px-2 py-1.5 shadow-sm transition-shadow hover:shadow-md">
    <input
      type="text"
      placeholder="Where to?"
      className="min-w-0 flex-1 bg-transparent px-3 text-sm placeholder:text-zinc-400 focus:outline-none md:text-base"
    />
    <button
      type="button"
      className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#53B8AF] text-white transition-all hover:brightness-90 md:h-9 md:w-9"
      aria-label="Search"
    >
      <HiMagnifyingGlass className="h-4 w-4 md:h-5 md:w-5" />
    </button>
  </div>
)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="mb-4 border-b border-gray-200 bg-white py-3 md:mb-6 md:py-4">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Desktop: single row | Mobile: logo + actions */}
        <div className="flex items-center justify-between gap-4 md:gap-6 lg:gap-8">
          <Link to="/" className="shrink-0">
            <img src={logo} alt="RealEState Logo" className="h-7 w-auto md:h-8" />
          </Link>

          {/* Desktop search — same line */}
          <div className="hidden min-w-0 flex-1 md:block lg:max-w-2xl">
            <SearchBar />
          </div>

          <div className="relative flex shrink-0 items-center gap-2 md:gap-4" ref={menuRef}>
            <button
              type="button"
              onClick={() => setSearchOpen((open) => !open)}
              className="grid h-9 w-9 place-items-center rounded-full text-zinc-700 transition-colors hover:bg-zinc-100 md:hidden"
              aria-label={searchOpen ? 'Close search' : 'Open search'}
            >
              {searchOpen ? (
                <HiXMark className="h-5 w-5" />
              ) : (
                <HiMagnifyingGlass className="h-5 w-5" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-zinc-800 transition-shadow hover:shadow-md md:gap-3 md:px-4 md:py-2"
              aria-expanded={menuOpen}
              aria-haspopup="true"
            >
              <HiBars3 className="h-4 w-4 md:h-5 md:w-5" />
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-600 text-white">
                <HiUser className="h-3.5 w-3.5" />
              </span>
            </button>

            {menuOpen && (
              <div className="absolute top-full right-0 z-50 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg">
                <ul>
                  {menuItems.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setMenuOpen(false)}
                        className="block px-3 py-2.5 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:pl-4 hover:text-zinc-900"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Mobile search — below on small screens */}
        <div
          className={[
            'overflow-hidden transition-all duration-300 md:hidden',
            searchOpen ? 'mt-3 max-h-20 opacity-100' : 'max-h-0 opacity-0',
          ].join(' ')}
        >
          <SearchBar />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
