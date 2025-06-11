"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "REGISTRATION", href: "/registration" },
  { name: "SUBMISSION", href: "/submission" },
  { name: "TRACKS", href: "/tracks" },
  { name: "SPEAKERS", href: "/speakers" },
  { name: "COMMITTEES", href: "/committees" },
  { name: "SUPPORTER", href: "/supporter" },
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center p-2 text-gray-700 hover:text-blue-600"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md z-50">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="p-4">
              <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Register Now</button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
