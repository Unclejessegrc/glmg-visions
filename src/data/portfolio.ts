export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  youtubeId?: string;
  // Local poster image (fallback color gradient if absent)
  posterGradient: string;
}

export const CATEGORIES = [
  "All",
  "Weddings",
  "Business",
  "Music Videos",
  "Events",
  "Live Shows",
  "Baby Showers",
  "Parties",
  "Pets",
  "Documentaries",
  "Shorts",
  "Commercials",
] as const;

export const PORTFOLIO: PortfolioItem[] = [
  { id: "p1", title: "Sarah & Mike — Newport Wedding", category: "Weddings", description: "A coastal Rhode Island wedding film.", posterGradient: "from-rose-900 via-zinc-900 to-black" },
  { id: "p2", title: "Northeast Auto — Brand Spot", category: "Business", description: "Service explainer + social cutdowns.", posterGradient: "from-zinc-700 via-zinc-900 to-black" },
  { id: "music-dwhjfxguif0", title: "Good Looks Music Video 01", category: "Music Videos", description: "Good Looks Media Group music video.", youtubeId: "DwHJFxguIf0", posterGradient: "from-red-900 via-zinc-900 to-black" },
  { id: "p4", title: "Providence Block Party Recap", category: "Events", description: "Summer block party recap film.", posterGradient: "from-amber-900 via-zinc-900 to-black" },
  { id: "p5", title: "The Strand — Live Show", category: "Live Shows", description: "Multi-cam live show coverage.", posterGradient: "from-purple-900 via-zinc-900 to-black" },
  { id: "p6", title: "Reel Shorts — Q3", category: "Shorts", description: "Vertical social rollout for a launch.", posterGradient: "from-emerald-900 via-zinc-900 to-black" },
  { id: "p7", title: "Baby Rivera Shower", category: "Baby Showers", description: "Family milestone, edited as keepsake.", posterGradient: "from-pink-900 via-zinc-900 to-black" },
  { id: "p8", title: "Cranston Birthday Party", category: "Parties", description: "Birthday party recap.", posterGradient: "from-orange-900 via-zinc-900 to-black" },
  { id: "p9", title: "Moose — Adoption Film", category: "Pets", description: "Adoption-day mini documentary.", posterGradient: "from-yellow-900 via-zinc-900 to-black" },
  { id: "p10", title: "RI Originals — Mini Doc", category: "Documentaries", description: "Local artist documentary feature.", posterGradient: "from-cyan-900 via-zinc-900 to-black" },
  { id: "p11", title: "Coastal Coffee — TV Spot", category: "Commercials", description: "30-second commercial spot.", posterGradient: "from-stone-700 via-zinc-900 to-black" },
  { id: "p12", title: "James & Tia — Highlight", category: "Weddings", description: "Highlight film, full day.", posterGradient: "from-fuchsia-900 via-zinc-900 to-black" },
  { id: "music-bxzbr0gob9e", title: "Good Looks Music Video 02", category: "Music Videos", description: "Good Looks Media Group music video.", youtubeId: "BxzbR0Gob9E", posterGradient: "from-red-800 via-zinc-900 to-black" },
  { id: "music-avzzb-heus0", title: "Good Looks Music Video 03", category: "Music Videos", description: "Good Looks Media Group music video.", youtubeId: "aVzzB-HeUs0", posterGradient: "from-rose-800 via-zinc-900 to-black" },
  { id: "music-0q-7tljwqhy", title: "Good Looks Music Video 04", category: "Music Videos", description: "Good Looks Media Group music video.", youtubeId: "0q_7tljwQHY", posterGradient: "from-orange-800 via-zinc-900 to-black" },
  { id: "music-s3klfozrsv0", title: "Good Looks Music Video 05", category: "Music Videos", description: "Good Looks Media Group music video.", youtubeId: "S3KlFozRSv0", posterGradient: "from-purple-900 via-zinc-900 to-black" },
  { id: "music-qh3fwnlitnm", title: "Good Looks Music Video 06", category: "Music Videos", description: "Good Looks Media Group music video.", youtubeId: "QH3FwnLITnM", posterGradient: "from-fuchsia-900 via-zinc-900 to-black" },
];
