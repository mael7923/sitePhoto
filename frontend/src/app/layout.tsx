import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Maël Vanderhaegen | Photographie",
  description: "Portfolio de photographie immersive et minimaliste.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased min-h-screen">
        <header className="py-8 px-6 md:px-12 flex justify-between items-center border-b border-accent-light/30">
          <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-tight">
            Maël Vanderhaegen
          </h1>
          <nav>
            <ul className="flex space-x-8 text-sm uppercase tracking-widest font-sans font-medium">
              <li><a href="/" className="hover:text-accent-navy/70 transition-colors">Albums</a></li>
              <li><a href="/about" className="hover:text-accent-navy/70 transition-colors">À Propos</a></li>
              <li><a href="/contact" className="hover:text-accent-navy/70 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="py-12 px-6 border-t border-accent-light/30 mt-20 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Maël Vanderhaegen. Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  );
}
