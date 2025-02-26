import { HeroSection } from "@/components/ui/hero-section";
import { CityCard } from "@/components/ui/city-card";

const cityHighlights = [
  {
    title: "Wayne Tower",
    description: "The iconic skyscraper that stands as a symbol of Gotham's resilience.",
    imageUrl: "https://images.unsplash.com/photo-1470217957101-da7150b9b681"
  },
  {
    title: "Gotham Knights",
    description: "Protectors of the city, always vigilant in the darkness.",
    imageUrl: "https://images.unsplash.com/photo-1596284274000-7d3eca888e3e"
  },
  {
    title: "Dark Alleys",
    description: "Where justice meets the shadows of Gotham's underworld.",
    imageUrl: "https://images.unsplash.com/photo-1504253492562-cbc4dc540fcb"
  }
];

export default function Home() {
  return (
    <div className="pb-16">
      <HeroSection />
      
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8">
          Explore Gotham
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cityHighlights.map((highlight, index) => (
            <CityCard key={index} {...highlight} />
          ))}
        </div>
      </section>
    </div>
  );
}
