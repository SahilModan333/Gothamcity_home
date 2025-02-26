import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

interface CityCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function CityCard({ title, description, imageUrl }: CityCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden">
        <div
          className="h-48 w-full"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
