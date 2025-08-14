import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";
import Preloader from "../Preloader/Preloader";
import { searchNews } from "../../utils/newsApi";
import { useState } from "react";

function Main() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onSearch = async (q) => {
    setIsLoading(true);
    try {
      const { articles } = await searchNews(q);
      setArticles(articles);
      setError("");
    } catch (err) {
      setError("Request failed");
      setArticles([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="main">
      <SearchForm onSearch={onSearch} />
      <div>{isLoading ? <Preloader /> : <></>}</div>
      <About />
    </div>
  );
}

export default Main;
