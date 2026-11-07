# Pip and the Ghosts

A gentle tap-and-chase game for toddlers (made for a 2-year-old), built to play on an iPad.

Pip the mouse lives in a moonlit meadow full of friendly, giggly ghosts. Tap anywhere and Pip scurries
there. When Pip touches a ghost, it says "oh!", giggles, and floats away, leaving behind a star.
After five stars there's a fireworks party and a big cheese for Pip to munch. Then the ghosts come back to play again.

## Made for little hands

- **No way to lose.** There's no timer, score or game over.
- **Big targets.** Tapping on or near a ghost sends Pip straight to it. Ghosts drift away slowly but
  are always much slower than Pip.
- **No reading needed.** Progress shows as five stars at the top of the screen.
- **Gentle hints.** If nothing happens for a few seconds, a pulsing ring and a pointing hand show what to tap.
- **Not scary.** The ghosts are pastel and rosy-cheeked, and they giggle as they leave.
- **Sounds are synthesized in the browser** (squeaks, giggles, dings, "nom nom"), so there are no audio
  files to download. Sound starts after the first tap, which iPad requires.

## Playing on an iPad

The whole game is the single file `index.html`. It has no build step and no dependencies.

1. Host the repository on any static web host. With GitHub Pages: **Settings → Pages → Deploy from a
   branch**, then pick the branch and `/ (root)`.
2. Open the page in Safari on the iPad.
3. Tap **Share → Add to Home Screen**. Pip then opens full screen from its own icon, with no address bar
   for small fingers to bump.

Touch handling is tuned for iPad: pinch-zoom, double-tap zoom, scroll bounce and long-press menus are all
turned off, and the screen stays awake while playing (on iPadOS 16.4 or later).
The game works in both landscape and portrait.

Tip for grown-ups: turn on **Guided Access** (Settings → Accessibility → Guided Access) to keep a toddler
inside the game.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole game: canvas drawing, touch input and Web Audio sounds |
| `manifest.webmanifest` | Lets the game install to the Home Screen and open full screen |
| `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` | Home Screen icons |
