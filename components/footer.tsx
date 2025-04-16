import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-gray text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Big Red Power Washing</h3>
            <p className="mb-4">
              Professional pressure washing services for residential and commercial properties in Omaha and surrounding
              areas.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#driveways" className="hover:text-white">
                  Driveways & Patios
                </Link>
              </li>
              <li>
                <Link href="/services#roof" className="hover:text-white">
                  Roof & Gutter Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services#fence" className="hover:text-white">
                  Fence Washing
                </Link>
              </li>
              <li>
                <Link href="/services#walls" className="hover:text-white">
                  Concrete & Paver Walls
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li>Phone: (531) 255-5067</li>
              <li>Email: bigredpowerne@gmail.com</li>
              <li>Serving: Omaha and surrounding areas</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p>&copy; {currentYear} Big Red Power Washing. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/privacy" className="text-sm hover:text-white">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link href="/terms" className="text-sm hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
