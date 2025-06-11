import Link from "next/link"
import AlternateMarquee from "./alternate-marquee"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="w-full px-4 py-1 flex items-center justify-between">
        {/* Logo + Title */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://rklfuc72catfgesp.public.blob.vercel-storage.com/Screenshot%202025-05-22%20164704-trSBRLLU3b9dYWR4yFFIdIriNijBJL.png"
            alt="ICISA Logo"
            width={80}
            height={80}
            className="h-14 w-auto block p-0"
          />
          <span className="text-xl font-bold">ICISA '26</span>
        </Link>

        <nav className="hidden md:flex ml-auto space-x-6 items-center">
          <Link href="/" className="font-medium hover:text-blue-600">
            HOME
          </Link>
          <Link href="/about" className="font-medium hover:text-blue-600">
            ABOUT
          </Link>

          {/* FOR AUTHORS dropdown (robust fix) */}
          <div className="relative group">
            <div className="font-medium hover:text-blue-600 flex items-center gap-1 cursor-pointer">
              FOR AUTHORS
              <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Dropdown menu */}
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-md z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/tracks" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                TRACKS
              </Link>
              <Link href="/submission" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                SUBMISSIONS
              </Link>
              <Link href="/registration" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                REGISTRATION
              </Link>
            </div>
          </div>

          <Link href="/committees" className="font-medium hover:text-blue-600">
            COMMITTEES
          </Link>
          {/* PROGRAM dropdown (replaces old SPEAKERS link) */}
          <div className="relative group">
            <div className="font-medium hover:text-blue-600 flex items-center gap-1 cursor-pointer">
              PROGRAM
              <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Dropdown menu */}
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-md z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/workshops" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                WORKSHOPS
              </Link>
              <Link href="/speakers" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                SPEAKERS
              </Link>
            </div>
          </div>

          <Link href="/supporter" className="font-medium hover:text-blue-600">
            SPONSORS
          </Link>

          <Link
            href="/registration"
            className="bg-[#2e3192] hover:bg-blue-800 text-white text-base px-6 py-3 rounded text-sm"
          >
            Register Now
          </Link>
        </nav>

        {/* Mobile menu (no JS functionality here) */}
        <div className="md:hidden ml-auto">
          <button className="p-2" aria-label="Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <AlternateMarquee />
    </header>
  )
}
