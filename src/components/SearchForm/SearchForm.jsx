import { useState } from "react";
import "./SearchForm.css";
import { searchNews } from "../../utils/newsApi";

function SearchForm() {
  const [q, setQ] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!q.trim()) {
      return setError("Please add topic");
    }
    try {
      const data = await searchNews(q);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="search-form">
      <h2 className="search-form__title">What's going on in the world?</h2>
      <p className="search-form__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div>
        <form
          className="search-form__form"
          onSubmit={handleSubmit}
        >
          <input
            className="search-form__input"
            placeholder="Enter topic"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          ></input>
          <button
            type="submit"
            className="search-form__button"
          >
            Search
          </button>
        </form>
        <p className="search-form__error">{error}</p>
      </div>
    </div>
  );
}

export default SearchForm;
