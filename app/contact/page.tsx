import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      {/* Contact Hero */}
      <section className="bg-brand-red py-16 text-white md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">Contact Us</h1>
            <p className="text-xl">
              Ready to transform your property? Get in touch for a free quote or to learn more about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Get In Touch</h2>
              <p className="mb-8 text-lg text-gray-600">
                Have questions or ready to schedule a service? Contact us using any of the methods below or fill out the
                form and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-600">(531) 255-5067</p>
                    <p className="text-sm text-gray-500">Available Mon-Fri, 8am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-600">bigredpowerne@gmail.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-gray-600">Serving Omaha and surrounding areas</p>
                    <p className="text-sm text-gray-500">Including Bellevue, Papillion, La Vista, and more</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold">Request a Free Quote</h2>
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                      Phone
                    </label>
                    <Input id="phone" placeholder="Your phone number" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email address" required />
                </div>

                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="driveways">Driveways, Sidewalks & Patios</option>
                    <option value="roof">Roof & Gutter Cleaning</option>
                    <option value="fence">Fence Washing</option>
                    <option value="walls">Concrete & Paver Walls</option>
                    <option value="other">Other (Please specify)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us about your project or ask any questions" rows={4} />
                </div>

                <Button type="submit" className="w-full bg-brand-red hover:bg-brand-darkRed">
                  Submit Request
                </Button>

                <p className="text-center text-sm text-gray-500">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Service Area</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We proudly serve Omaha and the surrounding communities.
            </p>
          </div>

          <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <div className="h-full w-full bg-gray-300">
              {/* Replace with actual map embed */}
              <div className="flex h-full items-center justify-center">
                <p className="text-lg font-medium text-gray-600">Map of Omaha Service Area</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
