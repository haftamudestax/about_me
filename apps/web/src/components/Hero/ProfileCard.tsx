import { Card, CardMedia } from "@mui/material";
import { motion } from "framer-motion";

type ProfileCardProps = {
  imageSrc?: string;
  alt?: string;
};

export function ProfileCard({
  imageSrc = "/haftamu.jpg",
  alt = "Portrait photo of Hafta",
}: ProfileCardProps) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="w-56 sm:w-64"
    >
      <Card
        elevation={0}
        className="!overflow-hidden !rounded-3xl !border !border-slate-200 !shadow-lg !shadow-slate-900/10"
      >
        <CardMedia
          component="img"
          image={imageSrc}
          alt={alt}
          className="!aspect-square !object-cover"
        />
      </Card>
    </motion.div>
  );
}
