import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CTASection from "@/components/cta-section"

export default function ServicesPage() {
  return (
    <>
      {/* Services Hero */}
      <section className="bg-brand-red py-16 text-white md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">Our Pressure Washing Services</h1>
            <p className="text-xl">
              We offer comprehensive pressure washing solutions for residential and commercial properties in Omaha and
              surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Driveways, Sidewalks, Patios */}
      <section id="driveways" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Driveways, Sidewalks & Patios</h2>
              <p className="mb-6 text-lg text-gray-600">
                Keep your outdoor surfaces looking their best with our comprehensive cleaning services. We use
                professional-grade equipment and eco-friendly cleaning solutions.
              </p>
              <div className="mb-6 rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-xl font-semibold">Pricing:</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Concrete Surfaces</span>
                    <span className="font-semibold text-brand-red">$0.20 per sq ft</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Paver Surfaces</span>
                    <span className="font-semibold text-brand-red">$1.00 per sq ft</span>
                  </li>
                </ul>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-brand-red">✓</span>
                  <span>Driveways & Parking Areas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-brand-red">✓</span>
                  <span>Sidewalks & Walkways</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-brand-red">✓</span>
                  <span>Patios & Outdoor Living Areas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-brand-red">✓</span>
                  <span>Pool Decks & Surrounds</span>
                </li>
              </ul>
              <Button asChild className="bg-brand-red hover:bg-brand-darkRed">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg shadow-xl sm:h-96">
              <Image
                src="/images/concrete-cleaning.webp"
                alt="Driveway pressure washing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Roof and Gutters */}
      <section id="roof" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1 relative h-80 overflow-hidden rounded-lg shadow-xl sm:h-96">
              <Image
                src="/images/house-siding-cleaning.webp"
                alt="House siding cleaning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Roof & Gutter Cleaning</h2>
              <p className="mb-6 text-lg text-gray-600">
                Protect your home from water damage with our thorough roof and gutter cleaning services. We safely
                remove debris, moss, and buildup.
              </p>
              <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold">Pricing:</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Roof Cleaning</span>
                    <span className="font-semibold text-brand-red">$0.30 per sq ft</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Gutter Cleaning</span>
                    <span className="font-semibold text-brand-red">$2.00 per linear ft</span>
                  </li>
                </ul>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-brand-red">✓</span>
                  <span>Moss & Algae Removal</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-brand-red">✓</span>
                  <span>Gutter Debris Removal</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-brand-red">✓</span>
                  <span>Downspout Cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-brand-red">✓</span>
                  <span>Preventative Treatments</span>
                </li>
              </ul>
              <Button asChild className="bg-brand-red hover:bg-brand-darkRed">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fence Washing */}
      <section id="fence" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Fence Washing</h2>
              <p className="mb-6 text-lg text-gray-600">
                Restore the appearance of your fence with our specialized cleaning services. We can handle all types of
                fencing materials.
              </p>
              <div className="mb-6 rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-xl font-semibold">Pricing:</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Fence Washing (one side)</span>
                    <span className="font-semibold text-brand-red">$1.00 per sq ft</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fence Washing (both sides)</span>
                    <span className="font-semibold text-brand-red">$2.00 per sq ft</span>
                  </li>
                </ul>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-brand-red">✓</span>
                  <span>Wood Fence Cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-brand-red">✓</span>
                  <span>Vinyl Fence Cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-brand-red">✓</span>
                  <span>Metal & Chain Link Fence Cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-brand-red">✓</span>
                  <span>Mold & Mildew Removal</span>
                </li>
              </ul>
              <Button asChild className="bg-brand-red hover:bg-brand-darkRed">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg shadow-xl sm:h-96">
              <Image src="/images/power-washing-wooden-deck.webp" alt="Fence washing" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Concrete/Paver Walls */}
      <section id="walls" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1 relative h-80 overflow-hidden rounded-lg shadow-xl sm:h-96">
              <Image
                src="/images/commercial-cleaning.webp"
                alt="Commercial property cleaning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Concrete & Paver Walls</h2>
              <p className="mb-6 text-lg text-gray-600">
                Restore the appearance of your concrete and paver walls with our specialized cleaning services. We
                remove dirt, grime, and stains.
              </p>
              <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold">Pricing:</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Small Walls</span>
                    <span className="font-semibold text-brand-red">$49.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Medium Walls</span>
                    <span className="font-semibold text-brand-red">$99.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Large Walls</span>
                    <span className="font-semibold text-brand-red">$199.99</span>
                  </li>
                </ul>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-brand-red">✓</span>
                  <span>Retaining Wall Cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-brand-red">✓</span>
                  <span>Garden Wall Cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-brand-red">✓</span>
                  <span>Decorative Wall Cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-brand-red">✓</span>
                  <span>Stain & Graffiti Removal</span>
                </li>
              </ul>
              <Button asChild className="bg-brand-red hover:bg-brand-darkRed">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
