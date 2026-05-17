export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables?: string;
  youtubeId?: string;
  youtubeUrl?: string;
  thumbnailUrl?: string;
  embedUrl?: string;
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
  { id: "p1", title: "Sarah & Mike — Newport Wedding", category: "Weddings", description: "A coastal Rhode Island wedding film.", deliverables: "Highlight film, ceremony moments, social teaser", posterGradient: "from-rose-900 via-zinc-900 to-black" },
  { id: "p2", title: "Northeast Auto — Brand Spot", category: "Business", description: "Service explainer + social cutdowns.", deliverables: "Brand spot, vertical clips, web delivery", posterGradient: "from-zinc-700 via-zinc-900 to-black" },
  { id: "music-dwhjfxguif0", title: "Good Looks Music Video 01", category: "Music Videos", description: "Good Looks Media Group music video.", deliverables: "Final music video, artist visual, promo cutdowns", youtubeId: "DwHJFxguIf0", youtubeUrl: "https://youtu.be/DwHJFxguIf0", thumbnailUrl: "https://img.youtube.com/vi/DwHJFxguIf0/maxresdefault.jpg", embedUrl: "https://www.youtube.com/embed/DwHJFxguIf0", posterGradient: "from-red-900 via-zinc-900 to-black" },
  { id: "p4", title: "Providence Block Party Recap", category: "Events", description: "Summer block party recap film.", deliverables: "Event recap, vertical clip, online delivery", posterGradient: "from-amber-900 via-zinc-900 to-black" },
  { id: "p5", title: "The Strand — Live Show", category: "Live Shows", description: "Multi-cam live show coverage.", deliverables: "Live recap, performance moments, promo clip", posterGradient: "from-purple-900 via-zinc-900 to-black" },
  { id: "p6", title: "Reel Shorts — Q3", category: "Shorts", description: "Vertical social rollout for a launch.", deliverables: "Short-form clips, captions, social formats", posterGradient: "from-emerald-900 via-zinc-900 to-black" },
  { id: "p7", title: "Baby Rivera Shower", category: "Baby Showers", description: "Family milestone, edited as keepsake.", deliverables: "60-second recap, social clip, event moments", posterGradient: "from-pink-900 via-zinc-900 to-black" },
  { id: "p8", title: "Cranston Birthday Party", category: "Parties", description: "Birthday party recap.", deliverables: "Party recap, vertical social clip, online delivery", posterGradient: "from-orange-900 via-zinc-900 to-black" },
  { id: "p9", title: "Moose — Adoption Film", category: "Pets", description: "Adoption-day mini documentary.", deliverables: "Mini film, social clip, keepsake edit", posterGradient: "from-yellow-900 via-zinc-900 to-black" },
  { id: "p10", title: "RI Originals — Mini Doc", category: "Documentaries", description: "Local artist documentary feature.", deliverables: "Mini documentary, interview edit, trailer clip", posterGradient: "from-cyan-900 via-zinc-900 to-black" },
  { id: "p11", title: "Coastal Coffee — TV Spot", category: "Commercials", description: "30-second commercial spot.", deliverables: "30-second spot, social cutdowns, web delivery", posterGradient: "from-stone-700 via-zinc-900 to-black" },
  { id: "p12", title: "James & Tia — Highlight", category: "Weddings", description: "Highlight film, full day.", deliverables: "Highlight film, key moments, social teaser", posterGradient: "from-fuchsia-900 via-zinc-900 to-black" },
  { id: "music-bxzbr0gob9e", title: "Good Looks Music Video 02", category: "Music Videos", description: "Good Looks Media Group music video.", deliverables: "Final music video, artist visual, promo cutdowns", youtubeId: "BxzbR0Gob9E", youtubeUrl: "https://youtu.be/BxzbR0Gob9E", thumbnailUrl: "https://img.youtube.com/vi/BxzbR0Gob9E/maxresdefault.jpg", embedUrl: "https://www.youtube.com/embed/BxzbR0Gob9E", posterGradient: "from-red-800 via-zinc-900 to-black" },
  { id: "music-avzzb-heus0", title: "Good Looks Music Video 03", category: "Music Videos", description: "Good Looks Media Group music video.", deliverables: "Final music video, artist visual, promo cutdowns", youtubeId: "aVzzB-HeUs0", youtubeUrl: "https://youtu.be/aVzzB-HeUs0", thumbnailUrl: "https://img.youtube.com/vi/aVzzB-HeUs0/maxresdefault.jpg", embedUrl: "https://www.youtube.com/embed/aVzzB-HeUs0", posterGradient: "from-rose-800 via-zinc-900 to-black" },
  { id: "music-0q-7tljwqhy", title: "Good Looks Music Video 04", category: "Music Videos", description: "Good Looks Media Group music video.", deliverables: "Final music video, artist visual, promo cutdowns", youtubeId: "0q_7tljwQHY", youtubeUrl: "https://youtu.be/0q_7tljwQHY", thumbnailUrl: "https://img.youtube.com/vi/0q_7tljwQHY/maxresdefault.jpg", embedUrl: "https://www.youtube.com/embed/0q_7tljwQHY", posterGradient: "from-orange-800 via-zinc-900 to-black" },
  { id: "music-s3klfozrsv0", title: "Good Looks Music Video 05", category: "Music Videos", description: "Good Looks Media Group music video.", deliverables: "Final music video, artist visual, promo cutdowns", youtubeId: "S3KlFozRSv0", youtubeUrl: "https://youtu.be/S3KlFozRSv0", thumbnailUrl: "https://img.youtube.com/vi/S3KlFozRSv0/maxresdefault.jpg", embedUrl: "https://www.youtube.com/embed/S3KlFozRSv0", posterGradient: "from-purple-900 via-zinc-900 to-black" },
  { id: "music-qh3fwnlitnm", title: "Good Looks Music Video 06", category: "Music Videos", description: "Good Looks Media Group music video.", deliverables: "Final music video, artist visual, promo cutdowns", youtubeId: "QH3FwnLITnM", youtubeUrl: "https://youtu.be/QH3FwnLITnM", thumbnailUrl: "https://img.youtube.com/vi/QH3FwnLITnM/maxresdefault.jpg", embedUrl: "https://www.youtube.com/embed/QH3FwnLITnM", posterGradient: "from-fuchsia-900 via-zinc-900 to-black" },
];
