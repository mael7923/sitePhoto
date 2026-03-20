# Spécifications Produit : Site Solaire (Photographie Immersive)

Ce document décrit la vision, les fonctionnalités et la feuille de route technique pour le site de photographie de Maël Vanderhaegen. L'objectif est de créer un espace numérique qui capture l'essence du sport et de l'émotion à travers un design minimaliste et immersif.

---

## 1. Vision du Produit
Un portfolio photographique "digital-first" qui se lit comme une édition papier de haute qualité. S'inspirant du style épuré et structuré d'`image.pdf`, le site privilégie l'impact visuel et la fluidité de navigation. 

*   **Atmosphère :** Calme, professionnelle, mais habitée par l'énergie du sport.
*   **Objectif :** Servir de vitrine pour les collaborations professionnelles et de plateforme de récupération de photos pour les athlètes.

---

## 2. User Personas

### A. L'Athlète "Event-Driven"
*   **Besoin :** Retrouver rapidement ses photos après une course ou un tournoi.
*   **Parcours :** Arrive sur le site via un lien direct ou un QR code, cherche l'album de l'événement, visionne en grille, et télécharge ses clichés.
*   **Frustration :** Les plateformes de partage lourdes ou publicitaires.

### B. Le Client Potentiel (Agences/Marques)
*   **Besoin :** Évaluer la direction artistique et la technique du photographe.
*   **Parcours :** Explore les différentes galeries, lit la page "À propos" pour comprendre la démarche, et utilise le formulaire de contact.
*   **Frustration :** Les sites trop complexes qui cachent les images derrière des animations inutiles.

---

## 3. Core Features (Fonctionnalités Clés)

*   **Multi-Galeries Dynamiques :** 
    *   Page d'accueil avec des "covers" grand format pour chaque album.
    *   Grille adaptative (Masonry ou Justified Layout) respectant le ratio des images.
*   **Expérience Immersive :**
    *   Mode "Lightbox" plein écran avec support du balayage (swipe) sur mobile.
    *   Téléchargement direct des images (optionnel par album).
*   **Page 'À Propos' Narrative :** Un espace mélangeant texte et images pour raconter l'histoire derrière l'objectif.
*   **Formulaire de Contact Discret :** Une interface minimaliste intégrée naturellement dans le pied de page ou une page dédiée.

---

## 4. Stack Technique

*   **Backend :** FastAPI (Python 3.12+) - Rapide, moderne et facile à déployer.
*   **Frontend :** Next.js avec Tailwind CSS pour un rendu performant et un design responsive précis.
*   **Stockage Images :** 
    *   *Phase 1 :* Cloudinary (pour l'optimisation automatique des images, WebP/AVIF).
    *   *Phase 2 :* CDN dédié ou stockage local structuré.
*   **Base de données :** SQLite ou PostgreSQL pour gérer les métadonnées des albums et les messages de contact.

---

## 5. Design System

### Palette de Couleurs
*   **Blanc (#FFFFFF) :** Dominante pour la clarté et l'espace.
*   **Bleu Marine (#0A1128) :** Pour la typographie et les éléments de structure (contraste fort).
*   **Rose Clair (#FDE2E4) :** Utilisé par touches subtiles pour les hovers, les accents ou les fonds de section "À propos".

### Typographie
*   **Titres :** Une police Serif élégante (ex: *Playfair Display* ou *Cormorant Garamond*) pour le côté "Editorial".
*   **Corps :** Une police Sans-Serif moderne et lisible (ex: *Inter* ou *Montserrat*).

### Animations
*   Transitions de page fluides (douce apparition/fade-in).
*   Effets de survol (hover) sur les galeries pour révéler le titre ou un léger zoom.
*   Déroulement (smooth scrolling) naturel.

---

## 6. Roadmap (MVP)

### Étape 1 : Fondations (Semaine 1)
- [ ] Configuration du backend FastAPI et de la structure de données (Albums/Images).
- [ ] Mise en place du frontend Next.js + Tailwind.
- [ ] Interface de base : Accueil (Liste des galeries).

### Étape 2 : L'Expérience Visuelle (Semaine 2)
- [ ] Intégration de la grille dynamique.
- [ ] Développement de la Lightbox immersive.
- [ ] Connexion à Cloudinary pour le chargement des photos.

### Étape 3 : Contenu & Interaction (Semaine 3)
- [ ] Création de la page "À propos".
- [ ] Implémentation du formulaire de contact.
- [ ] Optimisations SEO et performance (Core Web Vitals).

### Étape 4 : Déploiement (Semaine 4)
- [ ] Mise en production (Vercel ou VPS).
- [ ] Tests utilisateurs et retours de performance.
