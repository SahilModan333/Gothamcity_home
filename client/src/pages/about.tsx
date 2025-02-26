import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-background to-gray-900">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Shield className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold tracking-tight">About Gotham Watch</h1>
          </div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <p className="text-xl mb-6">
              Gotham Watch is your digital gateway to the dark and mysterious world of Gotham City. 
              We serve as the eyes and ears of this legendary metropolis, bringing you closer to its 
              shadows and stories.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-black/20 p-6 rounded-lg backdrop-blur"
              >
                <h3 className="text-xl font-semibold mb-4">City Protection</h3>
                <p>Our advanced surveillance systems and dedicated team work tirelessly to keep 
                   Gotham's citizens informed and protected.</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-black/20 p-6 rounded-lg backdrop-blur"
              >
                <h3 className="text-xl font-semibold mb-4">Dark Knight Tech</h3>
                <p>Utilizing cutting-edge technology inspired by Batman himself, we maintain 
                   constant vigilance over Gotham's streets.</p>
              </motion.div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p>To serve as the digital watchdog of Gotham City, providing citizens with 
                 real-time updates and insights about their beloved city's pulse.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
