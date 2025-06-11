"use client"

import Link from "next/link"
import { useState } from "react"
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

export default function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-[#2e3192] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Mobile menu button */}
          <button className="md:hidden py-4 px-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex w-full">
            <ul className="flex w-full justify-between">
              {navItems.map((item) => (
                <li key={item.name} className="group relative">
                  <Link href={item.href} className="block py-4 px-3 hover:bg-blue-800 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col w-full">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-3 px-4 hover:bg-blue-800 transition-colors border-b border-blue-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
