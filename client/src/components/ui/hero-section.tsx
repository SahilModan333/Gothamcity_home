import { motion } from "framer-motion";
import { Button } from "./button";
import { BatmanLogo } from "./batman-logo";

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
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
            className="flex justify-center mb-8"
          >
            <BatmanLogo className="w-24 h-24 text-yellow-500" />
          </motion.div>

          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            The Dark Knight Watches Over Gotham
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            In a city shrouded in darkness, one hero stands between order and chaos. 
            Experience Gotham City through the eyes of its legendary protector.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default">
              Join the Watch
            </Button>
            <Button size="lg" variant="outline">
              Explore Gotham
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}