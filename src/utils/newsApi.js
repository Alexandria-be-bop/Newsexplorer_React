import { NEWS_API_KEY } from "./constants";
import apiCheck from "./apiCheck";

const newsApiBaseUrl = import.meta.env.PROD
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

export async function searchNews(q) {
  const today = new Date();
  const weekAgo = new Date(today);
  weekAgo.setDate(today.getDate() - 7);
  if (!q.trim()) throw new Error("No topic error");

  const params = new URLSearchParams({
    q: q.trim(),
    from: weekAgo,
    to: today,
    language: "en",
    sortBy: "publishedAt",
  });

  const url = `${newsApiBaseUrl}?${params.toString()}`;
  const key = { headers: { "X-Api-Key": NEWS_API_KEY } };
  return fetch(url, key).then(apiCheck);
}
