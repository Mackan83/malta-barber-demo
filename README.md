# Barber shop demo template

A single-file, sales-first website for Malta barbershops. Open `index.html` in a browser — no server needed. Bookings stay on the page (no payments; clients pay in the shop).

## Customise for a client

Edit the commented `CONFIG` block at the top of `index.html`. Everything on the page is filled from it:

- **Identity** — `name`, `brandHtml`, `tagline`, `headlineHtml`, `kicker` (leave empty to use branch names), colours
- **Contact** — `phone`, `callLabel` (tap-to-call only)
- **Branches** — name, address, hours, `openDays` (0 = Sunday), `openHour` / `closeHour`, optional `closeHourByDay`, Google Maps link, chat `aliases`
- **Services** — name, `price`, `mins`, `aliases` for typed chat
- **Times** — leave `sampleSlots` off a branch to auto-fill demo times from opening hours, or pin them with `sampleSlots: ["10:00", "11:30", "14:00"]`
- **Reviews, about, chat greeting, copy, footer**
- **Demo banner** — set `demoBanner.show` to `false` when this is no longer a pitch demo
- **AI later** — leave `aiEndpoint` empty for the built-in scripted chat. Set it to a URL that accepts `POST { history, state, context }` and returns `{ text|html, replies?, action?, patch?, name? }`. If the request fails, the scripted assistant is used.

Reload the page to see the changes. You do not need to edit the CSS or the rest of the JavaScript unless you want to change the layout.

Booked times are stored in the browser (`localStorage`) and show as taken on the slot chips. Prices and availability in the default config are examples.
