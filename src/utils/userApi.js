let savedArticles = [
  {
    _id: "65f7368dfb74bd6a92114c85",
    keyword: "Technology",
    title: "The Future of Artificial Intelligence in 2024",
    description:
      "Exploring the latest developments in AI technology and what they mean for the future of work and society.",
    publishedAt: "2024-01-15T10:30:00Z",
    source: { name: "Tech News Daily" },
    url: "https://example.com/ai-future-2024",
    urlToImage:
      "https://via.placeholder.com/400x200/0066cc/ffffff?text=AI+Future",
  },
  {
    _id: "65f7371e7bce9e7d331b11a0",
    keyword: "Science",
    title: "Breakthrough in Quantum Computing Research",
    description:
      "Scientists achieve new milestone in quantum computing that could revolutionize data processing.",
    publishedAt: "2024-01-14T14:20:00Z",
    source: { name: "Science Today" },
    url: "https://example.com/quantum-breakthrough",
    urlToImage:
      "https://via.placeholder.com/400x200/009900/ffffff?text=Quantum+Computing",
  },
  {
    _id: "65f7372a8bce9e7d331b11a1",
    keyword: "Environment",
    title: "New Renewable Energy Solutions Show Promise",
    description:
      "Innovative solar and wind technologies are making clean energy more accessible and affordable.",
    publishedAt: "2024-01-13T09:15:00Z",
    source: { name: "Green Energy Report" },
    url: "https://example.com/renewable-energy-solutions",
    urlToImage:
      "https://via.placeholder.com/400x200/228B22/ffffff?text=Green+Energy",
  },
];

// Get all saved articles for the current user
export function getItems() {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      resolve([...savedArticles]);
    } else {
      reject(new Error("No authentication token found. Please log in."));
    }
  });
}

// Save an article for the current user
export function saveArticle(article) {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      reject(new Error("No authentication token found. Please log in."));
      return;
    }

    const savedArticle = {
      _id: `article_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      keyword: article.keyword || "None",
      title: article.title,
      description: article.description,
      publishedAt: article.publishedAt,
      source: { name: article.source?.name || "Unknown" },
      url: article.url,
      urlToImage: article.urlToImage,
    };

    savedArticles.unshift(savedArticle);
    resolve(savedArticle);
  });
}

// Delete a saved article by ID
export function deleteArticle(articleId) {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      reject(new Error("No authentication token found. Please log in."));
      return;
    }

    const initialLength = savedArticles.length;
    savedArticles = savedArticles.filter((a) => a._id !== articleId);

    if (savedArticles.length < initialLength) {
      resolve({ success: true, message: "Article deleted successfully" });
    } else {
      reject(new Error("Article not found"));
    }
  });
}

// Check if an article is saved by URL
export function checkIfSaved(articleUrl) {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      reject(new Error("No authentication token found. Please log in."));
      return;
    }

    const savedArticle = savedArticles.find((a) => a.url === articleUrl);
    resolve({
      isSaved: !!savedArticle,
      savedArticle: savedArticle || null,
    });
  });
}

// Create a map of saved articles by URL
export function getSavedByUrl() {
  return getItems().then((articles) => {
    const map = new Map();
    articles.forEach((a) => {
      if (a && a.url) map.set(a.url, a);
    });
    return map;
  });
}
