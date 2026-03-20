from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List, Optional
import os
from dotenv import load_dotenv

load_dotenv()

# ---------------------------------------------------------------------------
# App Setup
# ---------------------------------------------------------------------------

app = FastAPI(
    title="Site Solaire – API",
    description="API pour le portfolio photographique de Maël Vanderhaegen.",
    version="0.2.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------------------------
# Models
# ---------------------------------------------------------------------------

class Photo(BaseModel):
    id: str
    url: str
    thumbnail_url: str
    title: Optional[str] = None
    album_slug: str
    width: int
    height: int
    downloadable: bool = False

class Album(BaseModel):
    id: str
    title: str
    slug: str
    description: Optional[str] = None
    cover_url: str
    photo_count: int
    event_date: Optional[str] = None  # ISO format: "YYYY-MM-DD"

class ContactMessage(BaseModel):
    name: str
    email: str
    subject: Optional[str] = None
    message: str

# ---------------------------------------------------------------------------
# Mock Data (MVP Phase 1)
# ---------------------------------------------------------------------------

ALBUMS: List[Album] = [
    Album(
        id="trail-mb-2024",
        title="Trail du Mont-Blanc 2024",
        slug="trail-mont-blanc-2024",
        description="Une sélection des meilleurs moments de l'UTMB 2024. Poussière, adrénaline et lumières alpines.",
        cover_url="https://picsum.photos/seed/trail-cover/1600/900",
        photo_count=3,
        event_date="2024-08-28",
    ),
    Album(
        id="hossegor-surf-2024",
        title="Sessions à Hossegor",
        slug="sessions-hossegor",
        description="Le tube parfait capturé au lever du soleil. Surf, atlantique et lumière dorée.",
        cover_url="https://picsum.photos/seed/surf-cover/1600/900",
        photo_count=3,
        event_date="2024-07-14",
    ),
    Album(
        id="velodrome-2024",
        title="Critérium de Bordeaux",
        slug="criterium-bordeaux",
        description="La vitesse, l'effort, le peloton. Cyclisme sur piste dans l'atmosphère électrique du vélodrome.",
        cover_url="https://picsum.photos/seed/velo-cover/1600/900",
        photo_count=3,
        event_date="2024-06-05",
    ),
]

PHOTOS: dict[str, List[Photo]] = {
    "trail-mont-blanc-2024": [
        Photo(id="tmb-1", url="https://picsum.photos/seed/tmb1/1200/800",   thumbnail_url="https://picsum.photos/seed/tmb1/600/400",  title="Montée vers l'Aiguillette", album_slug="trail-mont-blanc-2024", width=1200, height=800,  downloadable=True),
        Photo(id="tmb-2", url="https://picsum.photos/seed/tmb2/800/1200",   thumbnail_url="https://picsum.photos/seed/tmb2/400/600",  title="La descente finale",        album_slug="trail-mont-blanc-2024", width=800,  height=1200, downloadable=True),
        Photo(id="tmb-3", url="https://picsum.photos/seed/tmb3/1200/1200",  thumbnail_url="https://picsum.photos/seed/tmb3/600/600",  title="Arrivée à Chamonix",        album_slug="trail-mont-blanc-2024", width=1200, height=1200, downloadable=True),
    ],
    "sessions-hossegor": [
        Photo(id="surf-1", url="https://picsum.photos/seed/surf1/1200/800", thumbnail_url="https://picsum.photos/seed/surf1/600/400", title="Aube sur l'Atlantique",     album_slug="sessions-hossegor",     width=1200, height=800),
        Photo(id="surf-2", url="https://picsum.photos/seed/surf2/800/1200", thumbnail_url="https://picsum.photos/seed/surf2/400/600", title="Le take-off parfait",       album_slug="sessions-hossegor",     width=800,  height=1200),
        Photo(id="surf-3", url="https://picsum.photos/seed/surf3/1600/900", thumbnail_url="https://picsum.photos/seed/surf3/800/450", title="Cutback en fin de tube",    album_slug="sessions-hossegor",     width=1600, height=900),
    ],
    "criterium-bordeaux": [
        Photo(id="velo-1", url="https://picsum.photos/seed/velo1/1200/800", thumbnail_url="https://picsum.photos/seed/velo1/600/400", title="Sprint final",              album_slug="criterium-bordeaux",    width=1200, height=800),
        Photo(id="velo-2", url="https://picsum.photos/seed/velo2/1200/800", thumbnail_url="https://picsum.photos/seed/velo2/600/400", title="Le peloton en courbe",      album_slug="criterium-bordeaux",    width=1200, height=800),
        Photo(id="velo-3", url="https://picsum.photos/seed/velo3/800/1200", thumbnail_url="https://picsum.photos/seed/velo3/400/600", title="Effort en solitaire",       album_slug="criterium-bordeaux",    width=800,  height=1200),
    ],
}

# ---------------------------------------------------------------------------
# Endpoints
# ---------------------------------------------------------------------------

@app.get("/", tags=["Health"])
def health_check():
    return {"status": "online", "api": "Site Solaire", "version": "0.2.0"}


# --- Albums ---

@app.get("/api/albums", response_model=List[Album], tags=["Albums"])
def list_albums():
    """Retourne la liste de tous les albums, du plus récent au plus ancien."""
    return sorted(ALBUMS, key=lambda a: a.event_date or "", reverse=True)


@app.get("/api/albums/{slug}", response_model=Album, tags=["Albums"])
def get_album(slug: str):
    """Retourne les métadonnées d'un album à partir de son slug."""
    album = next((a for a in ALBUMS if a.slug == slug), None)
    if not album:
        raise HTTPException(status_code=404, detail=f"Album '{slug}' introuvable.")
    return album


# --- Photos ---

@app.get("/api/albums/{slug}/photos", response_model=List[Photo], tags=["Photos"])
def list_album_photos(slug: str):
    """Retourne toutes les photos d'un album spécifique."""
    # Validate album exists first
    if not any(a.slug == slug for a in ALBUMS):
        raise HTTPException(status_code=404, detail=f"Album '{slug}' introuvable.")
    return PHOTOS.get(slug, [])


@app.get("/api/photos/{photo_id}", response_model=Photo, tags=["Photos"])
def get_photo(photo_id: str):
    """Retourne une photo spécifique par son identifiant."""
    for photos in PHOTOS.values():
        photo = next((p for p in photos if p.id == photo_id), None)
        if photo:
            return photo
    raise HTTPException(status_code=404, detail=f"Photo '{photo_id}' introuvable.")


# --- Contact ---

@app.post("/api/contact", status_code=201, tags=["Contact"])
def send_contact_message(msg: ContactMessage):
    """
    Reçoit un message de contact.
    Phase 1 : log en console. Phase 2 : envoi email ou stockage DB.
    """
    print(f"[CONTACT] De: {msg.name} <{msg.email}> | Sujet: {msg.subject}")
    print(f"[CONTACT] Message: {msg.message}")
    return {"success": True, "message": "Message reçu, merci !"}


# ---------------------------------------------------------------------------
# Entry Point (dev)
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
