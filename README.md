# Barber shop demo template

A single-file, sales-first website for Malta barbershops. Open `index.html` in a browser — no server needed. Bookings stay on the page (no payments; clients pay in the shop).

## Customise for a client

Edit the commented `CONFIG` block at the top of `index.html`. Everything on the page is filled from it:

- **Identity** — `name`, `brandHtml`, `tagline`, `headlineHtml`, `kicker` (leave empty to use branch names), colours
- **Contact** — `phone`, `callLabel` (tap-to-call only)
- **Branches** — name, address, hours, `openDays` (0 = Sunday), `openHour` / `closeHour`, optional `closeHourByDay`, Google Maps link, chat `aliases`
- **Services** — name, `price`, `mins`, `aliases` for typed chat
- **Times** — leave `sampleSlots` off a branch to auto-fill demo times from opening hours, or pin them with `sampleSlots: ["10:00", "11:30", "14:00"]`
- **Reviews, chat greeting, copy, footer**
- **Desktop hero column** — `heroAside` (trust strip, benefit tiles, a short review quote, hours line, chat button). It only shows on desktop; leave it in place and edit the text when you customise a shop.
- **Knowledge** — `knowledge` is the shop fact pack the assistant is allowed to use (services in detail, hours, parking, policies, barbers, FAQs). Keep prices and hours in line with `services` and `branches`.
- **Demo banner** — set `demoBanner.show` to `false` when this is no longer a pitch demo
- **AI** — this demo's `aiEndpoint` is set to `https://barber-demo-ai.mackan83.workers.dev/`. Leave it empty to use only the built-in scripted chat. The Worker accepts `POST { messages, "config-subset", knowledge, slots, today }` and returns `{ reply, booking, quickReplies }`. If the request fails, the scripted assistant is used. Bot replies always show a short typing pause.

Reload the page to see the changes. You do not need to edit the CSS or the rest of the JavaScript unless you want to change the layout.

Booked times are stored in the browser (`localStorage`) and show as taken on the slot chips. Prices and availability in the default config are examples.

A matching back-office calendar lives at `shop.html` (also linked from the footer and the booked card). It uses the same `CONFIG` and availability generator, and shows bookings made in the chat.
