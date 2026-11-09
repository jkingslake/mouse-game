# Oliver and the Ghosts

A gentle tap-and-chase game for toddlers (made for a 2-year-old), built to play on an iPad.

**Ghosts, zombies, aliens, dinosaurs or diggers?** The start screen has a small "Oliver chases" dropdown:

- **Ghosts** float in the sky and giggle away upward.
- **Zombies** are sleepy and rosy-cheeked. They shuffle along the hills and run off the side of the screen chuckling.
- **Aliens** come in crowds: 6 at once on level 1, rising to 9. They have one, two or three eyes and ride
  tiny flying saucers with twinkly lights. Caught ones zoom off home with a "bee-boo!", and any left when
  the party starts zoom off too.
- **Dinosaurs** are chubby baby dinos with spiky back plates and toothy grins. Each one hatches from a
  wobbling speckled egg, stomps along the hills, and runs off with a little "rawr!" when caught.
- **Diggers** are little excavators in bright colours, with big eyes in the cab window, a scooping arm,
  rolling tracks, a blinking roof light and puffs of smoke. They pop up out of a pile of dirt with a
  "beep-beep!". When caught, they back away still facing Oliver, beeping like a real reversing digger.

**Surprises to find:**

- **The moon:** run Oliver up to the sleepy moon and it wakes up. It opens its eyes, pulls a silly face and
  makes a funny noise: a slide whistle, a boing, a raspberry, a big yawn or a "wah-wah-waaah". Then it nods
  back off.
- **Oliver's front door:** run Oliver to the little door and it creaks open. Oliver pops inside and comes straight
  back out with a "ta-da!" in a new hat. Most are ordinary hats (party, top, crown, beanie, chef, propeller,
  flower, cowboy), but about one time in four he comes out in a very silly one: a rubber duck, a cheese wedge,
  a wobbly tower of three hats, a ridiculously tall top hat or a stack of pancakes.

The title changes to match, and the game remembers the choice next time. Tapping the dropdown never starts
the game, and it's hidden during play, so little fingers can't switch it mid-game.

**Going back to the start screen:** press and hold the house button in the top-left corner for one second
(a ring fills up as you hold). A quick tap only shows "Hold to go back", so a toddler can't leave by accident.
Going back resets to level 1.

Oliver the mouse lives in a moonlit meadow full of friendly, giggly ghosts. Tap anywhere and Oliver scurries
there. When Oliver touches a ghost, it says "oh!", giggles, and floats away, leaving behind a star.
After five stars there's a fireworks party and a big cheese for Oliver to munch. Then the ghosts come back to play again.

## Made for little hands

- **No way to lose.** There's no timer, score or game over.
- **Big targets.** Tapping on or near a ghost sends Oliver straight to it. Ghosts drift away slowly but
  are always much slower than Oliver.
- **Levels.** A "Level" badge sits in the top-right corner, and a big "Level 2!" pops up with a jingle
  each time a cheese party ends. The ghosts float a little faster every level.
  The speed-up gets smaller each time and levels off at just over twice the starting pace, so the
  ghosts never get too fast to catch.
- **No reading needed.** Progress shows as five stars at the top of the screen.
- **Gentle hints.** If nothing happens for a few seconds, a pulsing ring and a pointing hand show what to tap.
- **Not scary.** The ghosts are pastel and rosy-cheeked, and they giggle as they leave.
- **Sounds are synthesized in the browser** (squeaks, giggles, dings, "nom nom"), so there are no audio
  files to download. Sound starts after the first tap, which iPad requires.

## Playing on an iPad

The game is a plain web page with no build step: `index.html` plus a few small files. To turn it into an
app on the iPad, put it on a free web host once, then add it to the Home Screen.

**1. Put it online (once) with GitHub Pages.**

1. On GitHub, open the repository's **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Pick the branch with the game (`claude/awesome-heisenberg-rjlhfl`, or `main` once it's merged), choose
   `/ (root)`, and tap **Save**.
4. After a minute or two the game is live at **https://jkingslake.github.io/mouse-game/**. GitHub
   republishes it automatically whenever that branch changes.

(The empty `.nojekyll` file tells GitHub Pages to serve the files exactly as they are.)

**2. Add it to the Home Screen.**

1. Open the site's address in **Safari** on the iPad (Safari is the most reliable for this).
2. Tap the **Share** button, then **Add to Home Screen**, then **Add**.
3. Oliver now has his own icon. It opens full screen with no address bar for small fingers to bump.

**Works offline.** The first time the app opens, it saves itself on the iPad (`sw.js`). After that it opens
and plays with no internet, and it fetches the newest version whenever it's online. Open it once while
online after an update, then close and reopen it to see the changes.

Touch handling is tuned for iPad: pinch-zoom, double-tap zoom, scroll bounce and long-press menus are all
turned off, and the screen stays awake while playing (on iPadOS 16.4 or later).
The game works in both landscape and portrait.

**No sound?** Sound starts on the first tap, so tap the play button and turn the volume up.
On iPadOS 17 and later the game plays even when the iPad is in Silent Mode. On older versions,
turn off Silent Mode (the bell in Control Center) first.

Tip for grown-ups: turn on **Guided Access** (Settings → Accessibility → Guided Access) to keep a toddler
inside the game.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole game: canvas drawing, touch input and Web Audio sounds |
| `manifest.webmanifest` | Lets the game install to the Home Screen and open full screen |
| `sw.js` | Saves the game on the device so the Home Screen app works offline |
| `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` | Home Screen icons |
