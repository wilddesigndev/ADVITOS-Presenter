# ADVITOS Kiosk – Produktspezifikation

## Zweck
Interaktive Kiosk-Anwendung für Messeauftritte von ADVITOS. Präsentation von Produkt-Videos und Bildern auf:
- Touch-Bildschirm (min. Full HD) mit Mini-PC
- iPads

---

## Technologie
- Vanilla HTML / CSS / JavaScript – kein Framework, kein Build-Tool, keine CDN-Abhängigkeiten
- Läuft lokal via `file://` (offline) und auf GitHub Pages (online)
- Einstiegspunkt: `index.html`
- Konfiguration: `config.js`
- Medien: `assets/media/` (Videos `.mp4`, Bilder `.jpg`/`.png`)

---

## Dateistruktur

```
index.html              ← Haupt-App
config.js               ← Inhaltskonfiguration (vom Nutzer bearbeitet)
assets/
  media/                ← Videos und Bilder ablegen
```

---

## Navigationsleiste

- Fixe Leiste am oberen Rand
- **Pfeil-Buttons** (links / rechts) zum sequenziellen Navigieren
- **Text-Menü** mit Titeln aller Inhalte – direktes Anspringen per Klick/Tap
- Aktives Element: fett (`font-weight: 600`), volle Deckkraft
- Inaktive Elemente: normal (`font-weight: 400`), 50 % Deckkraft
- Zusätzlich: Tastatur-Navigation (`←` / `→`) und Touch-Swipe auf dem Content-Frame

---

## Content-Anzeige

- Füllt den verfügbaren Raum immer im **16:9-Format** (Größe wird per ResizeObserver in JS berechnet)
- Inhaltstypen:
  - **Video** – läuft in Endlosschleife, stumm, Autoplay
  - **Bild** – statische Anzeige, füllt den Frame (`object-fit: cover`)

---

## Video-Steuerung (unsichtbar)

Der Content-Frame ist bei Videos unsichtbar in drei vertikale Zonen aufgeteilt:

| Zone | Bereich | Verhalten |
|------|---------|-----------|
| Zurückspulen | linkes Drittel | Klick/Tap: Video springt **−10 Sekunden** zurück |
| Play / Pause | mittleres Drittel | Kurzer Klick: **Play/Pause** umschalten · Gedrückt halten: Video läuft nur so lange es gehalten wird (Pause bei Loslassen) – und umgekehrt |
| Vorspulen | rechtes Drittel | Klick/Tap: Video springt **+10 Sekunden** vor |

- Die Zonen sind visuell nicht sichtbar (kein UI-Element)
- Bei Bildern sind die Zonen inaktiv

---

## Vollbild-Button

- Position: **oben rechts** im Content-Frame
- Design: 50 px Kreis, `rgba(255,255,255,0.9)` (Frosted Glass)
- Icon wechselt zwischen „Vollbild öffnen" und „Vollbild beenden"
- Vollbild-Implementierung: Native Browser-API mit iOS/Safari-Fallback (CSS `position: fixed`)
- Vollbild verlassen: Klick auf den Button **oder** Klick irgendwo auf den Content-Frame

---

## Design-Tokens (Figma: `NDjJ0LYiXTv1RC6ivFcsFB`)

| Token | Wert |
|-------|------|
| Hintergrund | `#e8eefc` |
| Nav-Schriftgröße | `clamp(13px, 1.5vw, 18px)` |
| Nav-Border | `rgba(2, 30, 65, 0.1)` |
| Pfeil-Buttons | 42 × 42 px, `border-radius: 20px` |
| Content-Frame | `border-radius: 30px`, `box-shadow: 0 4px 66px rgba(0,0,0,0.25)` |
| Vollbild-Button | 50 px Kreis, `rgba(255,255,255,0.9)` |

Figma-Nodes:
- TV-Layout: `10167-21062`
- iPad-Layout: `10167-21084`
- Nav-Komponente: `10185-105680`

---

## Konfigurationsformat (`config.js`)

```js
const CONFIG = {
  items: [
    { title: "Titel",   type: "video", src: "assets/media/datei.mp4" },
    { title: "Titel 2", type: "image", src: "assets/media/bild.jpg"  }
  ]
};
```

- `type`: `"video"` oder `"image"`
- `src`: relativer Pfad von `index.html` aus
- Reihenfolge im Array = Reihenfolge in der Navigation
