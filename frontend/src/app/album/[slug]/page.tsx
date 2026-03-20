import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Mock data for the MVP displaying the copied photos
const ALBUM_DATA: Record<string, any> = {
  "courses-bousies": {
    title: "courses Bousies",
    description: "3/1 cat .",
    photos: [
      "/photos/bousies/650731513_945647637833252_9080762095573586600_n.jpg",
      "/photos/bousies/651009267_945646684500014_901069759329936629_n.jpg",
      "/photos/bousies/651925103_945651361166213_3752535060435459655_n.jpg",
      "/photos/bousies/652046595_945646727833343_3581110275995067812_n.jpg"
    ]
  }
};

export default async function AlbumPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const album = ALBUM_DATA[resolvedParams.slug];

  if (!album) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-serif">Album introuvable</h1>
        <Link href="/" className="mt-8 inline-block hover:text-accent-navy/70 transition-colors uppercase tracking-widest text-sm font-semibold">
          Retour au Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24">
      <Link href="/" className="inline-flex items-center text-sm uppercase tracking-widest hover:text-accent-light transition-colors font-semibold text-gray-400 mb-12">
        <ArrowLeft className="w-4 h-4 mr-2" /> Retour
      </Link>
      
      <header className="mb-16">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">{album.title}</h1>
        <p className="text-gray-500 font-sans">{album.description}</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {album.photos.map((photoUrl: string, idx: number) => (
          <div key={idx} className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 group">
            <img 
              src={photoUrl} 
              alt={`Photo ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
