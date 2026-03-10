// ============================================================
//  ADVITOS Kiosk – Konfigurationsdatei
// ============================================================
//
//  Medien ablegen:
//    Legen Sie Ihre Dateien in den Ordner  assets/media/
//
//  Jeder Eintrag im items-Array definiert einen Inhalt:
//
//    title  – Bezeichnung in der Navigationsleiste
//    type   – "video"  → wird in Endlosschleife abgespielt
//             "image"  → statisches Bild
//    src    – Relativer Pfad zur Datei (von index.html aus)
//
//  Reihenfolge der Einträge bestimmt die Reihenfolge
//  in der Navigation.
//
// ============================================================

const CONFIG = {
  items: [
    {
      title: "Video",
      type:  "video",
      src:   "assets/media/video.mp4"
    },
    {
      title: "Circuit Overview",
      type:  "image",
      src:   "assets/media/circuit-overview.png"
    },
    {
      title: "Albumin Circuit",
      type:  "video",
      src:   "assets/media/albumin-circuit2.mp4"
    },
    {
      title: "Albumin Regeneration",
      type:  "video",
      src:   "assets/media/albumin-regeneration.mp4"
    },
    {
      title: "Acidosis",
      type:  "video",
      src:   "assets/media/acidosis.mp4"
    },
    {
      title: "CO2",
      type:  "video",
      src:   "assets/media/co.mp4"
    }
  ]
};
