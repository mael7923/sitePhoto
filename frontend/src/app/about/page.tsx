import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <section className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-accent-navy/40">Le Photographe</span>
          <h2 className="text-4xl font-serif font-bold mt-4 mb-8">Maël Vanderhaegen</h2>
          
          <div className="space-y-6 text-gray-700 font-sans leading-relaxed">
            <p>
              Basé entre les montagnes et l'océan, mon travail explore la tension entre la puissance brute du sport et la sérénité des paysages naturels.
            </p>
            <p>
              Chaque cliché est une quête de l'équilibre, une tentative de figer le mouvement sans en extraire l'âme. Je privilégie une approche documentaire, au plus près de l'action, là où l'émotion dépasse la performance.
            </p>
            <p>
              Mes collaborations avec des marques et des athlètes m'ont conduit à travers le monde, mais c'est toujours le retour aux sources, dans la simplicité d'un instant volé, que je trouve ma plus grande inspiration.
            </p>
          </div>
        </div>

        <div className="relative aspect-[3/4] overflow-hidden bg-accent-light">
          <img 
            src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1974&auto=format&fit=crop" 
            alt="Portrait ou ambiance" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </section>

      <section className="mt-32 pt-20 border-t border-accent-light/30">
        <h3 className="font-serif text-2xl mb-12 italic text-center">"La photographie est une brève complicité entre la vue et l'instant."</h3>
      </section>
    </div>
  );
}
