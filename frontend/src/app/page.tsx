import GalleryCard from "@/components/GalleryCard";

// Mock data (ceci sera remplacé par un fetch vers l'API FastAPI plus tard)
const ALBUMS = [
  {
    id: "courses-bousies", 
    title: "courses Bousies", 
    coverUrl: "/photos/bousies/650731513_945647637833252_9080762095573586600_n.jpg", 
    description: "3/1 cat .",
    slug: "courses-bousies"
  },
  {
    id: "surf-1", 
    title: "Sessions à Hossegor", 
    coverUrl: "https://images.unsplash.com/photo-1502680399488-2a6574c5d409?q=80&w=2070&auto=format&fit=crop", 
    description: "Le tube parfait au lever du soleil sur les côtes landaises.",
    slug: "sessions-hossegor"
  },
  {
    id: "street-1", 
    title: "Ombres de Paris", 
    coverUrl: "https://images.unsplash.com/photo-1502602720082-da515930283b?q=80&w=2070&auto=format&fit=crop", 
    description: "Contrastes urbains et instants volés dans la ville lumière.",
    slug: "ombres-paris"
  }
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
      <section className="mb-20">
        <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-accent-navy/40">Portfolio</span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold mt-4 max-w-2xl leading-tight">
          Capturer le mouvement, immortaliser l'instant.
        </h2>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {ALBUMS.map((album) => (
          <GalleryCard key={album.id} {...album} />
        ))}
      </div>
    </div>
  );
}
