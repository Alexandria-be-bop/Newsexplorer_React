import { useEffect, useState } from "react";
import "./SearchResults.css";
import Preloader from "../Preloader/Preloader";
import NewsCard from "../NewsCard/NewsCard";
import notFound from "../../assets/not-found.svg";

function SearchResults({
  articles = [],
  isLoading = false,
  hasSearched = false,
  isLoggedIn,
}) {
  const [visible, setVisible] = useState(3);
  useEffect(() => setVisible(3), [articles]);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : hasSearched && articles.length === 0 ? (
        <div className="search__not-found">
          <img
            className="search__not-found-img"
            src={notFound}
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
              {articles.slice(0, visible).map((articles, index) => (
                <NewsCard
                  key={index}
                  article={articles}
                  isLoggedIn={isLoggedIn}
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
