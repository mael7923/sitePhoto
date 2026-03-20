export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-accent-navy/40 text-center block">Collaboration</span>
      <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-16 text-center">Discutons de votre projet.</h2>
      
      <form className="space-y-12 text-left max-w-xl mx-auto mt-20">
        <div className="relative">
          <input 
            type="text" 
            id="name" 
            className="w-full bg-transparent border-b border-accent-navy/20 py-4 focus:border-accent-navy outline-none transition-colors font-sans placeholder:text-gray-300"
            placeholder="Votre Nom"
          />
        </div>
        
        <div className="relative">
          <input 
            type="email" 
            id="email" 
            className="w-full bg-transparent border-b border-accent-navy/20 py-4 focus:border-accent-navy outline-none transition-colors font-sans placeholder:text-gray-300"
            placeholder="Email Professionnel"
          />
        </div>
        
        <div className="relative">
          <textarea 
            id="message" 
            rows={4}
            className="w-full bg-transparent border-b border-accent-navy/20 py-4 focus:border-accent-navy outline-none transition-colors font-sans placeholder:text-gray-300 resize-none"
            placeholder="Décrivez votre projet en quelques mots..."
          />
        </div>

        <button 
          type="submit" 
          className="bg-accent-navy text-white px-12 py-5 uppercase tracking-widest text-xs font-bold hover:bg-black transition-all duration-300 w-full md:w-auto"
        >
          Envoyer le message
        </button>
      </form>
      
      <div className="mt-24 space-y-4 text-sm text-gray-500 font-sans tracking-wide uppercase">
        <p>hello@maelvanderhaegen.com</p>
        <p>+33 (0) 6 00 00 00 00</p>
      </div>
    </div>
  );
}
