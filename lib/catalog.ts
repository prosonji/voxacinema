// Sample catalog for the free MVP.
// NOTE: These are illustrative placeholder entries, not real movie data.
// When TMDB integration (Milestone 5) is added, this file will be replaced
// by real metadata fetched from the free TMDB API.

export type ContentType = "movie" | "series" | "anime" | "cartoon" | "documentary";

export interface CatalogItem {
  id: string;
  title: string;
  type: ContentType;
  year: number;
  genre: string[];
  tier: "free" | "coming";
  gradient: string; // placeholder poster gradient until real posters arrive
}

export const CATEGORIES: { key: string; labelEn: string; labelBn: string }[] = [
  { key: "movie", labelEn: "Movies", labelBn: "সিনেমা" },
  { key: "series", labelEn: "Web Series", labelBn: "ওয়েব সিরিজ" },
  { key: "drama", labelEn: "Drama", labelBn: "ড্রামা" },
  { key: "anime", labelEn: "Anime", labelBn: "অ্যানিমে" },
  { key: "cartoon", labelEn: "Cartoons", labelBn: "কার্টুন" },
  { key: "documentary", labelEn: "Documentary", labelBn: "ডকুমেন্টারি" },
  { key: "sports", labelEn: "Sports", labelBn: "খেলাধুলা" },
  { key: "livetv", labelEn: "Live TV", labelBn: "লাইভ টিভি" },
  { key: "kids", labelEn: "Kids & Family", labelBn: "শিশু ও পরিবার" },
];

export const SAMPLE_CATALOG: CatalogItem[] = [
  { id: "s001", title: "Sample Movie A", type: "movie", year: 2026, genre: ["Action", "Thriller"], tier: "free", gradient: "linear-gradient(135deg, #7c5cff, #d4af37)" },
  { id: "s002", title: "Sample Movie B", type: "movie", year: 2025, genre: ["Drama"], tier: "free", gradient: "linear-gradient(135deg, #e5484d, #7c5cff)" },
  { id: "s003", title: "Sample Series C", type: "series", year: 2026, genre: ["Sci-Fi", "Mystery"], tier: "free", gradient: "linear-gradient(135deg, #3ddc84, #7c5cff)" },
  { id: "s004", title: "Sample Anime D", type: "anime", year: 2025, genre: ["Adventure"], tier: "free", gradient: "linear-gradient(135deg, #d4af37, #e5484d)" },
  { id: "s005", title: "Sample Cartoon E", type: "cartoon", year: 2024, genre: ["Comedy", "Kids"], tier: "free", gradient: "linear-gradient(135deg, #7c5cff, #3ddc84)" },
  { id: "s006", title: "Sample Documentary F", type: "documentary", year: 2026, genre: ["Nature"], tier: "free", gradient: "linear-gradient(135deg, #26263a, #7c5cff)" },
  { id: "s007", title: "Sample Movie G", type: "movie", year: 2026, genre: ["Romance"], tier: "coming", gradient: "linear-gradient(135deg, #d4af37, #26263a)" },
  { id: "s008", title: "Sample Drama H", type: "series", year: 2025, genre: ["Drama", "Family"], tier: "free", gradient: "linear-gradient(135deg, #e5484d, #d4af37)" },
];

// Simple search helper used by the homepage search bar.
export function searchCatalog(query: string): CatalogItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return SAMPLE_CATALOG.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.genre.some((g) => g.toLowerCase().includes(q)) ||
      item.type.includes(q)
  );
}
