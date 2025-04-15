import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-red to-brand-darkRed text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/house-siding-cleaning.webp"
            alt="Pressure washing house siding"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative mx-auto px-4 py-24 sm:py-32 md:py-40">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Big Red Power Washing</h1>
            <p className="mb-8 text-xl">
              Professional pressure washing services for driveways, roofs, fences, and more. Restore your property's
              beauty today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-brand-red hover:bg-gray-100">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white bg-white/20 hover:bg-white/30"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We offer a wide range of pressure washing services to keep your property looking its best.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Driveways & Patios"
              description="Concrete ($0.20/sq ft) and Paver ($1/sq ft) cleaning services."
              icon="Home"
              href="/services#driveways"
            />
            <ServiceCard
              title="Roof & Gutters"
              description="Roof cleaning ($0.30/sq ft) and gutter cleaning ($2/sq ft)."
              icon="Home"
              href="/services#roof"
            />
            <ServiceCard
              title="Fence Washing"
              description="$1 per sq ft (2x for both sides being washed)."
              icon="Fence"
              href="/services#fence"
            />
            <ServiceCard
              title="Concrete/Paver Walls"
              description="Small ($49.99), Medium ($99.99), Large ($199.99)."
              icon="Wall"
              href="/services#walls"
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-brand-red hover:bg-brand-darkRed">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">See the Difference</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Check out these before and after transformations from our recent projects.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64 w-full sm:h-80">
                <Image
                  src="/images/before-after-driveway.webp"
                  alt="Before and after pressure washing comparison"
                  fill
                  className="object-cover"
                />
                <div className="absolute left-4 top-4 rounded bg-brand-red px-3 py-1 text-sm font-bold text-white">
                  Before/After
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64 w-full sm:h-80">
                <Image src="/images/deck-cleaning.webp" alt="Deck pressure washing" fill className="object-cover" />
                <div className="absolute left-4 top-4 rounded bg-green-600 px-3 py-1 text-sm font-bold text-white">
                  During Cleaning
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">What Our Customers Say</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="They did an amazing job on our driveway and patio. Looks brand new again!"
              author="Sarah Johnson"
              location="West Omaha"
              rating={5}
            />
            <TestimonialCard
              quote="Professional, on time, and excellent results. Will definitely use them again for our deck next spring."
              author="Mike Thompson"
              location="Millard"
              rating={5}
            />
            <TestimonialCard
              quote="Our storefront hasn't looked this clean in years. Great service at a fair price."
              author="David Wilson"
              location="Downtown Omaha"
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
