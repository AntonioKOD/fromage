import Image from "next/image";
import cheese_plate from '@/public/cheese_plate.jpeg'


export default function ContentSection() {
    return (
    <section className="py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Copy block */}
        <div className="space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed">
            At <strong>Fromage Wine Bar in South Boston</strong>, we believe wine should be fun,
            approachable, and unforgettable—whether you&apos;re just starting your journey
            or already a seasoned connoisseur. Our curated list spans Italy, France, Portugal,
            South Africa, and the USA, mostly available by the glass. Explore our
            crowd-favorite <em>daily Wine Flights</em>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our menu is built for sharing and savoring artisanal charcuterie boards,
            creamy cheeses, flavor-packed small plates, plus a few standout entrées.
            At lunch, guests love savory crêpes, grilled sandwiches, hearty soups,
            and fresh salads.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Fromage is a place to unwind and connect, curl up with a book, knock out some work,
            or gather with friends over a glass of wine, a craft beer, or a cozy hot drink.
          </p>

          <div className="flex gap-3">
            <a href="/events" className="rounded-xl border border-border px-4 py-2 hover:bg-muted">
              Wine Tastings & Events
            </a>
            <a href="/reservations" className="rounded-xl bg-primary px-4 py-2 text-primary-foreground hover:opacity-90">
              Reserve
            </a>
          </div>
        </div>

        {/* Photo block */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card">
          <Image
            src={cheese_plate}
            alt="Artisanal cheese & charcuterie board"
            className="h-full w-full object-cover"
            width={400}
            height={300}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
        </div>
      </div>
    </section>
    )
}