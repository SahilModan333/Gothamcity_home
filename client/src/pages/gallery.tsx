import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  url: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Gotham by Night",
    description: "The city skyline illuminated by the legendary Bat-Signal",
    url: "https://images.unsplash.com/photo-1494475673543-6a6a27143fc8"
  },
  {
    id: 2,
    title: "Dark Alleyways",
    description: "Where justice meets the shadows",
    url: "https://images.unsplash.com/photo-1513106021000-168e5f56609d"
  },
  {
    id: 3,
    title: "City Heights",
    description: "Gotham's towering architecture",
    url: "https://images.unsplash.com/photo-1478860409698-8707f313ee8b"
  },
  {
    id: 4,
    title: "Urban Legends",
    description: "The streets that birth heroes",
    url: "https://images.unsplash.com/photo-1549875648-528bf02a4c2f"
  },
  {
    id: 5,
    title: "Arkham District",
    description: "Home to Gotham's most infamous",
    url: "https://images.unsplash.com/photo-1555661059-7e755c1c3c1d"
  },
  {
    id: 6,
    title: "Wayne Tower",
    description: "Symbol of hope and prosperity",
    url: "https://images.unsplash.com/photo-1454117096348-e4abbeba002c"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-background to-gray-900">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-8">
          Gotham Gallery
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(image)}
              className="cursor-pointer"
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <div 
                      className="h-64 w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${image.url})` }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm">
                      <h3 className="text-lg font-semibold text-white">
                        {image.title}
                      </h3>
                      <p className="text-sm text-gray-200">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            {selectedImage && (
              <div>
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title}
                  className="w-full h-[70vh] object-cover rounded-lg"
                />
                <h2 className="text-xl font-bold mt-4">{selectedImage.title}</h2>
                <p className="text-gray-400">{selectedImage.description}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>
  );
}
