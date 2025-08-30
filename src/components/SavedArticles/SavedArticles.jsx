import { useContext, useMemo } from "react";
import "./SavedArticles.css";
import NewsCard from "../NewsCard/NewsCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedArticles({
  savedArticles: articles,
  onDeleteArticle,
  isLoggedIn,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  // Get keywords from saved articles
  const keywordText = useMemo(() => {
    if (articles.length === 0) return "";
    const counts = new Map();
    articles.forEach((a) => {
      const key = a.keyword.trim();
      if (!key) return;
      counts.set(key, (counts.get(key) || 0) + 1);
    });

    // Sort the keywords array
    const sorted = Array.from(counts.entries())
      .sort(([, a], [, b]) => b - a)
      .map(([key]) => key);
    if (sorted.length === 0) return "";
    if (sorted.length <= 3) return ` ${sorted.join(", ")}`;
    return ` ${sorted.slice(0, 3).join(", ")} and ${sorted.length - 3} other`;
  }, [articles]);

  if (!currentUser) {
    return (
      <div className="saved-articles">
        <h2 className="saved-articles__title">Saved articles</h2>
        <p className="saved-articles__message">
          Please sign in to view your saved articles.
        </p>
      </div>
    );
  }

  return (
    <div className="saved-articles">
      <h2 className="saved-articles__title">Saved articles</h2>
      <h3 className="saved-articles__user-info">
        {articles.length === 0 
          ? `${currentUser.name}, you have no saved articles yet.`
          : `${currentUser.name}, you have ${articles.length} saved article${articles.length !== 1 ? "s" : ""}`
        }
      </h3>
      
      {articles.length === 0 ? (
        <p className="saved-articles__keywords">
          Start saving articles to see them here!
        </p>
      ) : (
        <>
          {keywordText && (
            <p className="saved-articles__keyword">
              By keywords:{" "}
              <span className="saved-articles__keywords">{keywordText}</span>
            </p>
          )}
          
          <ul className="saved-articles__cards">
            {articles.map((article) => (
              <li key={article._id}>
                <NewsCard
                  article={article}
                  isSaved={true}
                  isOnSavedPage={true}
                  onDeleteArticle={onDeleteArticle}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default SavedArticles;
