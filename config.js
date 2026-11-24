/* Shared shop + customer-page config. Edit this file to customise the demo. */
var CONFIG = {
    name: "Your Barber Co.",
    kind: "barbershop",
    staffWord: "barber",
    staffLabel: "Barber",
    placeWord: "shop",
    brandHtml: "Your Barber <span>Co.</span>",
    phone: "+356 0000 0000",
    callLabel: "Call \u00a00000 0000",
    timeZone: "Europe/Malta",
    currency: "€",

    colors: {
      bg: "#0c0b0a",
      bg2: "#141311",
      surface: "#1c1a17",
      line: "#2c2924",
      gold: "#d4a017",
      gold2: "#f0c14b",
      text: "#f4f0e8",
      muted: "#9a9488",
      soft: "#c9c2b6",
    },

    demoBanner: {
      show: true,
      text: "Demo — this could be your shop"
    },

    metaTitle: "Your Barber Co. — Prices up front. Book in two taps.",
    metaDescription: "Demo barber website for Malta shops. Services, example prices and next free slots on the first screen. Book in two taps or via chat.",

    headlineHtml: "Prices up front.<br>Book in two taps.",
    tagline: "See the price, pick a time, you’re in.",
    // Leave kicker empty to auto-build it from branch names.
    kicker: "",

    copy: {
      bookNow: "Book now",
      callShop: "Call the shop",
      hint: "Tap a service, then a time. Or book in the chat — it only takes a minute.",
      servicesTitle: "Services & prices",
      pricesNote: "Example prices for this demo — a real shop would show its own.",
      slotsTitleToday: "Next free slots today",
      slotsTitleTomorrow: "Next free slots tomorrow",
      slotsTitleOther: "Next free slots {day}",
      serviceExamples: "haircut, skin fade, beard",
      catchService: "I didn't quite catch which service you meant — you can use a button, or type {examples}.",
      catchGeneric: "Sorry, I didn't quite catch that. You're welcome to ask about times, prices or services, or pick a button below.",
      payInPlace: "pay in shop",
      slotsNote: "Demo availability — not a live calendar",
      branchesTitle: "Three shops, one number",
      branchesLede: "Pick the closest chair. Call or open maps.",
      reviewsTitle: "What clients say",
      reviewsLede: "Short and useful — the kind of reviews people actually read.",
      footerBlurb: "A demo website for Malta barbershops.",
      footerFine: "This is a pitch mockup, not a live shop. Names, addresses, prices and times are examples. Bookings stay on this page — nothing is charged, and you pay in the shop.",
      stickyReady: "Ready to book?",
      stickyHint: "Service, time, done."
    },

    // Leave empty for the built-in scripted assistant. Set to a URL to plug in a real AI later.
    // POST { history, state, context } and return { text|html, replies?: [{label,value}], action?, patch?, name? }.
    aiEndpoint: "https://barber-demo-ai.mackan83.workers.dev/",

    chat: {
      title: "Booking assistant",
      subtitle: "Demo chat — no live calendar",
      greeting: "Hello — I can help you book a visit. Which branch would you prefer?"
    },

    // Desktop-only column under the hero buttons. Hidden on mobile.
    heroAside: {
      trust: { rating: "4.9", countLabel: "120+ Google reviews", note: "Demo data" },
      benefits: [
        { id: "fees", label: "No booking fees", icon: "tag" },
        { id: "pay", label: "Pay in shop", icon: "card" },
        { id: "instant", label: "Instant confirmation", icon: "check" },
        { id: "change", label: "Change or cancel anytime", icon: "calendar" }
      ],
      quote: {
        text: "Booked in under a minute and was in the chair on time. Finally, a barber site that just shows the price.",
        who: "Luca · Sliema"
      },
      hoursLine: "",
      chatButton: "Chat with our assistant"
    },

    services: [
      { id: "haircut", name: "Haircut", price: 16, mins: 30, aliases: ["hair", "cut", "trim"] },
      { id: "fade", name: "Skin fade", price: 20, mins: 45, aliases: ["fade", "skin"] },
      { id: "beard", name: "Beard trim", price: 10, mins: 20, aliases: ["beard"] },
      { id: "combo", name: "Haircut + beard", price: 24, mins: 50, aliases: ["combo", "cut + beard", "haircut and beard", "hair and beard"] },
      { id: "shave", name: "Hot towel shave", price: 18, mins: 30, aliases: ["shave", "hot towel", "razor"] },
      { id: "kids", name: "Kids cut", price: 12, mins: 25, aliases: ["kid", "child", "boy", "son"] }
    ],

    branches: [
      {
        id: "sliema",
        name: "Sliema",
        address: "22 Triq ix-Xatt, Tas-Sliema",
        hours: "Mon–Sat 09:00–19:00",
        closedLabel: "Closed Sun",
        openDays: [1, 2, 3, 4, 5, 6],
        openHour: 9,
        closeHour: 19,
        maps: "https://www.google.com/maps/search/?api=1&query=Triq+ix-Xatt+Sliema+Malta",
        aliases: ["sliema", "sliem", "xatt"]
        // sampleSlots: ["12:30", "13:00", "14:00"]  // optional; omit to auto-fill from hours
      },
      {
        id: "stjulians",
        name: "St Julian’s",
        address: "7 Triq il-Kbira, San Ġiljan",
        hours: "Mon–Sat 10:00–20:00",
        closedLabel: "Closed Sun",
        openDays: [1, 2, 3, 4, 5, 6],
        openHour: 10,
        closeHour: 20,
        maps: "https://www.google.com/maps/search/?api=1&query=St+Julian%27s+Malta",
        aliases: ["julian", "stj", "st j", "paceville", "giljan", "ġiljan"]
      },
      {
        id: "valletta",
        name: "Valletta",
        address: "14 Triq ir-Repubblika, Il-Belt Valletta",
        hours: "Mon–Fri 09:00–18:00, Sat 09:00–14:00",
        closedLabel: "Closed Sun",
        openDays: [1, 2, 3, 4, 5, 6],
        openHour: 9,
        closeHour: 18,
        closeHourByDay: { "6": 14 },
        maps: "https://www.google.com/maps/search/?api=1&query=Triq+ir-Repubblika+Valletta+Malta",
        aliases: ["valletta", "belt", "republic", "repubblika"]
      }
    ],


    knowledge: {
      languages: ["English", "Maltese", "Italian"],
      payment: {
        methods: ["Cash", "debit or credit card", "contactless"],
        online: false,
        note: "Pay in the shop after your cut. No online payment, no deposits on the website."
      },
      walkIns: "Walk-ins are welcome if a chair is free. Bookings take priority, especially on Saturdays.",
      cancellation: "Cancel free of charge up to 2 hours before your time. If it is later than that, please call the shop so we can try to fill the chair.",
      contactPrivacy: "Phone and email are only used for your booking, so the shop can reach you and you can easily change or cancel.",
      late: "We hold a booking for 10 minutes. After that the slot may go to a walk-in, and we will offer you the next free time.",
      noShow: "Please cancel if you cannot come. After two no-shows we may ask you to book by phone only.",
      kids: "The kids cut is for children under 12, €12, about 25 minutes. An adult should stay with them. Under 3s are only by a quick phone chat first, so we know they will be comfortable. Age 12 and over is a regular haircut.",
      hygiene: "Tools are sterilised after every client, blades are never shared, and each client gets a fresh towel and a clean cape.",
      products: [
        { name: "House pomade", price: 12 },
        { name: "Matte clay", price: 12 },
        { name: "Sea salt spray", price: 10 },
        { name: "Beard oil", price: 14 }
      ],
      productsNote: "Sold in the shop after your cut — ask your barber. Prices are examples for this demo.",
      giftVouchers: "Gift vouchers are sold in the shop only, from €15 up (or fixed €15, €25, €40). Valid for 12 months. Not sold online.",
      groups: "For 4 or more, or a wedding party, please call at least 2 weeks ahead so we can put more than one barber on. Saturday mornings in Sliema usually work best.",
      holidays: "Closed on Sundays and public holidays. On Christmas Eve and New Year's Eve we close at 14:00 if that day is otherwise a working day — worth a quick call to confirm.",
      services: [
        { id: "haircut", name: "Haircut", price: 16, mins: 30, includes: "Consultation, wash if needed, scissors or clipper cut, and a simple finish with styling product." },
        { id: "fade", name: "Skin fade", price: 20, mins: 45, includes: "Consultation, fade to skin on the sides and back, scissor work on top, and a clean finish." },
        { id: "beard", name: "Beard trim", price: 10, mins: 20, includes: "Beard only — clipper or scissor tidy, line-up, and a little oil if you want it. No haircut." },
        { id: "combo", name: "Haircut + beard", price: 24, mins: 50, includes: "A full haircut plus a beard trim in one visit, cheaper than booking both apart." },
        { id: "shave", name: "Hot towel shave", price: 18, mins: 30, includes: "Hot towel, lather, straight-razor or equivalent shave, and a cool towel to finish." },
        { id: "kids", name: "Kids cut", price: 12, mins: 25, includes: "A patient cut for under-12s, as described in the kids policy." }
      ],
      branches: [
        {
          id: "sliema",
          name: "Sliema",
          address: "22 Triq ix-Xatt, Tas-Sliema",
          hours: "Monday–Saturday 09:00–19:00. Closed Sunday and public holidays.",
          parking: "Paid parking near Sliema Ferries and along the side streets off the front. The seafront itself is often busy.",
          bus: "Buses along Triq ix-Xatt / The Strand stop a short walk from the shop, near the Ferries.",
          accessibility: "Ground floor, step-free from the pavement, with a slightly narrow door. Staff will help if you need it.",
          barbers: [
            { name: "Luca Grima", specialties: "Skin fades and modern cuts" },
            { name: "Daniel Galea", specialties: "Classic cuts and kids" }
          ]
        },
        {
          id: "stjulians",
          name: "St Julian’s",
          address: "7 Triq il-Kbira, San Ġiljan",
          hours: "Monday–Saturday 10:00–20:00. Closed Sunday and public holidays.",
          parking: "Street parking is tight. Use the nearby public car parks and walk a few minutes; evenings are busier.",
          bus: "Buses serving St Julian’s and Paceville stop within a short walk of Triq il-Kbira.",
          accessibility: "Ground floor, one shallow step at the door. Please call if you need a hand getting in.",
          barbers: [
            { name: "Marco Vella", specialties: "Beards and hot towel shaves" },
            { name: "Ana Camilleri", specialties: "Fades and styling" }
          ]
        },
        {
          id: "valletta",
          name: "Valletta",
          address: "14 Triq ir-Repubblika, Il-Belt Valletta",
          hours: "Monday–Friday 09:00–18:00, Saturday 09:00–14:00. Closed Sunday and public holidays.",
          parking: "No on-site parking. Use MCP or Floriana car parks and walk in through City Gate, a few minutes away.",
          bus: "All main routes into Valletta terminate at the City Gate / Valletta bus terminus, a short walk up Republic Street.",
          accessibility: "Ground floor on Republic Street, level with the pavement. The old stone doorway is a little narrow.",
          barbers: [
            { name: "Paul Azzopardi", specialties: "Classic gentleman’s cuts and hot towel shaves" },
            { name: "Isaac Borg", specialties: "Fades and beards" }
          ]
        }
      ],
      faqs: [
        { q: "Do I need an appointment?", a: "Booking is recommended. Walk-ins are welcome if a chair is free; bookings go first, especially on Saturdays." },
        { q: "Can I get a beard trim only?", a: "Yes. A beard trim is €10 and takes about 20 minutes." },
        { q: "What languages do you speak?", a: "English and Maltese in every shop, and Italian at St Julian’s and Valletta." }
      ]
    },

    reviews: [
      { stars: 5, text: "Booked in under a minute and was in the chair on time. Finally, a barber site that just shows the price.", who: "Luca · Sliema" },
      { stars: 5, text: "Clean fade, no fuss, honest prices. I’ll be back — and I already forwarded the link to my brother.", who: "Ana · St Julian’s" },
      { stars: 5, text: "Brought my son in for a kids cut. Easy to book and they were great with him.", who: "Daniel · Valletta" }
    ]
  };
