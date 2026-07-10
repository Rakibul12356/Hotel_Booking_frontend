import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const menuItems = [
  { label: "Login", to: "/login" },
  { label: "Signup", to: "/signup" },
  { label: "Help", to: "/help" },
];

 const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="mb-6  border-b border-gray-200 bg-white md:gap-8 md:px-8 lg:px-20 py-4">
      <div className="container mx-auto grid grid-cols-2 items-center justify-between  py-3 md:flex ">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Hotel Logo" className="h-8 w-auto" />
          </Link>
        </div>

        <div className="col-span-2 row-start-2 flex items-center border-0 px-2 shadow-sm transition-all hover:shadow-md md:rounded-full md:border border-gray-200" >
          <div className="grow divide-x py-2 md:grid md:grid-cols-3 md:px-2 lg:grid-cols-7">
            <input
              type="text"
              placeholder="Where to?"
              className="bg-transparent px-3 placeholder:text-sm focus:outline-none lg:col-span-3"
            />
          </div>

          <button
            type="button"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#53B8AF] text-sm text-center text-white transition-all hover:brightness-90"
            aria-label="Search"
          >
            <i className="fas fa-search text-white" />
          </button>
        </div>

        <div
          className="relative flex items-center justify-end space-x-4"
          ref={menuRef}
        >
          <button type="button" aria-label="Change language">
            <i className="fas fa-language text-xl text-zinc-700" />
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex items-center justify-center gap-3 rounded-full border border-zinc-300 bg-white px-4 py-2 text-zinc-800 hover:shadow-md"
            aria-expanded={menuOpen}
            aria-haspopup="true"
          >
            <i className="fas fa-bars" />
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-600 text-xs text-white">
              <i className="fas fa-user text-white" />
            </span>
          </button>

          {/* Popup */}
          {menuOpen && (
            <div className="absolute top-full right-0 z-50 mt-2 max-h-fit w-48 max-w-48 rounded-md border bg-white shadow-sm">
              <ul>
                {menuItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:pl-4 hover:text-zinc-800"
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
    </nav>
  );
};

export default Navbar;