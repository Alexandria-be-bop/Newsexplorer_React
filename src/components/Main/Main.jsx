import { useState } from "react";
import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import NewsCard from "../NewsCard/NewsCard";
import { searchNews } from "../../utils/newsApi";
import "./Main.css";

function Main({ isLoggedIn }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(3);

  const onSearch = async (topic) => {
    setIsLoading(true);
    setError("");
    try {
      const data = await searchNews(topic);
      setArticles(Array.isArray(data.articles) ? data.articles : []);
      setVisible(3);
    } catch {
      setArticles([]);
      setError(
        "Sorry, something went wrong during the request. Please try again later."
      );
    } finally {
      setIsLoading(false);
      console.log(error);
    }
  };

  const showMore = () => setVisible((v) => Math.min(v + 5, articles.length));

  return (
    <main className="main">
      <SearchForm onSearch={onSearch} />

      <div>
        {isLoading && <Preloader />}
        {!isLoading && (
          <>
            <ul className="main__cards">
              {articles.slice(0, visible).map((article, index) => (
                <li
                  key={article.url || index}
                  className="main__cards-item"
                >
                  <NewsCard
                    article={article}
                    isLoggedIn={isLoggedIn}
                  />
                </li>
              ))}
            </ul>
            {visible < articles.length && (
              <div className="main__results_actions">
                <button
                  className="main__results-button"
                  onClick={showMore}
                >
                  Show more
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <About />
    </main>
  );
}

export default Main;
