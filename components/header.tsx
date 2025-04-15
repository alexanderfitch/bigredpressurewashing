"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-brand-red">Big Red Power Washing</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-brand-red">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-brand-red">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-brand-red">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-brand-red">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild size="sm" className="gap-2 bg-brand-red hover:bg-brand-darkRed">
              <Link href="tel:+15312555067">
                <Phone className="h-4 w-4" />
                <span>(531) 255-5067</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container mx-auto px-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-brand-red"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-brand-red"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-brand-red"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-brand-red"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild size="sm" className="gap-2 w-full justify-center bg-brand-red hover:bg-brand-darkRed">
                <Link href="tel:+15312555067">
                  <Phone className="h-4 w-4" />
                  <span>(531) 255-5067</span>
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
