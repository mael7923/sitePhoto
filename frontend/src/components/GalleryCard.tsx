"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface GalleryCardProps {
  id: string;
  title: string;
  coverUrl: string;
  description?: string;
  slug: string;
}

export default function GalleryCard({ title, coverUrl, description, slug }: GalleryCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden bg-white"
    >
      <Link href={`/album/${slug}`}>
        <div className="aspect-[4/5] overflow-hidden">
          <img 
            src={coverUrl} 
            alt={title} 
            className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="pt-4 pb-8">
          <h3 className="text-xl font-serif font-semibold tracking-tight group-hover:text-accent-navy/80 transition-colors">
            {title}
          </h3>
          {description && (
            <p className="mt-1 text-sm text-gray-500 font-sans line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
