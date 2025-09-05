import { useEffect, useState } from "react";
import "./SearchResults.css";
import Preloader from "../Preloader/Preloader";
import NewsCard from "../NewsCard/NewsCard";
import notFound from "../../assets/not-found.svg";

function SearchResults({
  articles = [],
  isLoading = false,
  hasSearched = false,
  onToggleSave,
  getSavedByUrl,
}) {
  const [visible, setVisible] = useState(3);
  const [savedByUrl, setSavedByUrl] = useState(new Map());

  useEffect(() => setVisible(3), [articles]);

  // Get saved articles map when articles change
  useEffect(() => {
    getSavedByUrl()
      .then((savedMap) => {
        setSavedByUrl(savedMap);
      })
      .catch((error) => {
        console.error("Error getting saved articles map:", error);
        setSavedByUrl(new Map());
      });
  }, [articles, getSavedByUrl]);

  // Refresh saved articles when toggle save is called
  const handleToggleSave = async (article) => {
    await onToggleSave(article);
    if (getSavedByUrl) {
      getSavedByUrl()
        .then(setSavedByUrl)
        .catch((error) => {
          console.error("Failed to get saved articles:", error);
          setSavedByUrl(new Map());
        });
    }
  };

  const isArticleSaved = (articleUrl) => savedByUrl.has(articleUrl);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : hasSearched && articles.length === 0 ? (
        <div className="search__not-found">
          <img
            className="search__not-found-img"
            src={notFound}
            alt="topic not found"
          />
          <h3 className="search__not-found-title">Nothing Found</h3>
          <p className="search__not-found-des">
            Sorry, but nothing matched your search terms.
          </p>
        </div>
      ) : (
        hasSearched && (
          <div className="search">
            <h3 className="search__title">Search results</h3>
            <ul className="search__cards">
              {articles.slice(0, visible).map((article) => (
                <NewsCard
                  key={article.url}
                  article={article}
                  onToggleSave={handleToggleSave}
                  isSaved={isArticleSaved(article.url)}
                  isOnSavedPage={false}
                />
              ))}
            </ul>
            {visible < articles.length && (
              <div className="search__actions">
                <button
                  className="search__button"
                  onClick={() =>
                    setVisible((v) => Math.min(v + 10, articles.length))
                  }
                >
                  Show more
                </button>
              </div>
            )}
          </div>
        )
      )}
    </>
  );
}

export default SearchResults;
