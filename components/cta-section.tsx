import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="bg-brand-red py-16 text-white md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Ready to Transform Your Property?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg">
          Contact us today for a free quote and see the difference professional pressure washing can make.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-white text-brand-red hover:bg-gray-100">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white bg-white/20 hover:bg-white/30">
            <Link href="tel:+15312555067">Call (531) 255-5067</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
