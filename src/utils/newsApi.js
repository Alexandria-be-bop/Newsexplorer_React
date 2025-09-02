import { NEWS_API_KEY } from "./constants";
import checkApiResponse from "./apiCheck";

const newsApiBaseUrl = import.meta.env.DEV
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

export async function searchArticles(query) {
  const today = new Date();
  const weekAgo = new Date(today);
  weekAgo.setDate(today.getDate() - 7);

  const toIsoDateString = (date) => date.toISOString().slice(0, 10);

  if (!query.trim()) throw new Error("No topic error");

  const params = new URLSearchParams({
    q: query.trim(),
    from: toIsoDateString(weekAgo),
    to: toIsoDateString(today),
    language: "en",
    sortBy: "publishedAt",
    pageSize: "100",
  });

  if (import.meta.env.DEV) {
    params.append("apiKey", NEWS_API_KEY);
  }

  const url = `${newsApiBaseUrl}?${params.toString()}`;

  const key = {};

  // Only add API key header for production use(direct News API calls)
  if (!import.meta.env.DEV) {
    key.headers = { "X-Api-Key": NEWS_API_KEY };
  }

  return fetch(url, key).then(checkApiResponse);
}
