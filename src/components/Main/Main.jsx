import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";
import SearchResults from "../SearchResults/SearchResults";

function Main({
  isLoggedIn,
  onSearch,
  articles = [],
  isLoading = false,
  error = "",
  hasSearched = false,
}) {
  return (
    <main className="main">
      <SearchForm onSearch={onSearch} />
      <SearchResults
        articles={articles}
        isLoading={isLoading}
        error={error}
        hasSearched={hasSearched}
        isLoggedIn={isLoggedIn}
      />
      <About />
    </main>
  );
}

export default Main;
