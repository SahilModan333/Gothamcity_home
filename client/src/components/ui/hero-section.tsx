import { motion } from "framer-motion";
import { Button } from "./button";

export function HeroSection() {
  return (
    <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1485871981521-5b1fd3805eee)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'brightness(0.3)'
        }}
      />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to Gotham City
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Where shadows meet justice. Experience the dark allure of the city that never sleeps.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default">
              Explore Gotham
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
